"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [hidden, setHidden] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        const previous = scrollY.getPrevious() || 0;
        if (latest > previous && latest > 150) {
            setHidden(true);
        } else {
            setHidden(false);
        }
        setScrolled(latest > 50);
    });

    const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <motion.header
            variants={{
                visible: { y: 0, opacity: 1 },
                hidden: { y: -100, opacity: 0 },
            }}
            animate={hidden ? "hidden" : "visible"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full"
        >
            <div className={cn(
                "w-full transition-all duration-300",
                scrolled ? "bg-white/90 backdrop-blur-md border-b border-neutral-200 py-4 shadow-sm" : "bg-transparent py-6"
            )}>
                <nav className="container-wide flex items-center justify-between">
                    {/* Logo */}
                    < Link
                        href="/"
                        className="flex items-center gap-2 group"
                    >
                        <span className="font-display font-bold text-2xl text-primary-DEFAULT tracking-tight">Klarelo.</span>
                    </Link>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleScrollTo(e, item.href)}
                                    className="text-sm font-medium text-neutral-600 hover:text-primary-DEFAULT transition-colors"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <Link href="#contact" className="hidden md:block btn-primary px-6 py-2 text-sm">
                        Get in Touch
                    </Link>

                    {/* Mobile Menu Button (Simple version) */}
                    <button className="md:hidden text-primary-DEFAULT">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                </nav>
            </div>
        </motion.header>
    );
}
