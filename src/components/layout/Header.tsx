"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
            className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4"
        >
            <nav
                className={cn(
                    "relative flex items-center gap-2 p-2 rounded-full transition-all duration-500",
                    scrolled
                        ? "bg-void-light/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)]"
                        : "bg-transparent border border-transparent"
                )}
            >
                {/* Logo */}
                <Link
                    href="/"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 mr-2 hover:bg-primary-DEFAULT/20 transition-colors"
                >
                    <span className="font-display font-bold text-xl text-white">K</span>
                </Link>

                {/* Desktop Nav */}
                <ul className="flex items-center gap-1">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="relative px-4 py-2 text-sm font-medium text-neutral-300 transition-colors hover:text-white group"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <motion.div
                                    className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity"
                                    layoutId="nav-hover"
                                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                />
                                {/* Active Glow (Simulated for now, can be connected to intersection observer) */}
                                <div className="absolute inset-0 rounded-full bg-primary-DEFAULT/20 blur-md opacity-0 group-hover:opacity-50 transition-opacity" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <button className="ml-2 px-5 py-2 rounded-full bg-white text-void font-bold text-sm hover:bg-primary-DEFAULT hover:text-white transition-colors duration-300">
                    Let's Talk
                </button>
            </nav>
        </motion.header>
    );
}
