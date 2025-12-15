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
    { name: "Insights", href: "#insights" },
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
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b",
                scrolled ? "bg-white/95 backdrop-blur-sm border-neutral-200 py-4" : "bg-white border-transparent py-6"
            )}
        >
            <nav className="container-wide flex items-center justify-between">
                {/* Logo - Editorial Style */}
                <Link href="/" className="group">
                    <span className="font-display font-medium text-2xl tracking-tight text-primary-DEFAULT group-hover:text-secondary-DEFAULT transition-colors">
                        Klarelo.
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex items-center gap-10">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={(e) => handleScrollTo(e, item.href)}
                                className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-500 hover:text-primary-DEFAULT transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-secondary-DEFAULT transition-all duration-300 group-hover:w-full" />
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Trigger (Simple) */}
                <button className="md:hidden text-primary-DEFAULT">
                    <span className="sr-only">Menu</span>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </nav>
        </header>
    );
}
