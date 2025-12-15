"use client";

import { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
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
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500",
                scrolled
                    ? "bg-gradient-to-r from-white/90 to-neutral-50/90 backdrop-blur-xl border-b border-white/30 py-4 shadow-xl shadow-primary-DEFAULT/10"
                    : "bg-transparent py-6"
            )}
        >
            <nav className="container-wide flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="group flex items-center gap-3">
                    <img
                        src="https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603"
                        alt="Klarelo Logo"
                        className="h-16 w-auto transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="text-sm uppercase tracking-wider font-bold text-neutral-700 hover:text-secondary-DEFAULT transition-all relative group py-3 px-1"
                            >
                                {item.name}
                                <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT transition-all duration-500 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <Link href="#contact" className="group relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <Button
                            variant="primary"
                            size="md"
                            className="relative z-10 font-bold bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT hover:from-primary-DEFAULT hover:to-secondary-DEFAULT"
                        >
                            Get in Touch
                        </Button>
                    </Link>
                </div>

                {/* Mobile Menu Trigger */}
                <button className="md:hidden text-primary-DEFAULT p-2">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
