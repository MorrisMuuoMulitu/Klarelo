"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative bg-void border-t border-white/5 pt-24 pb-12 overflow-hidden">
            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-display font-bold text-3xl text-white">Klarelo.</span>
                        </Link>
                        <p className="text-neutral-400 leading-relaxed">
                            Sculpting digital narratives that resonate across the void.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Explore</h4>
                        <ul className="space-y-4">
                            {["Work", "Services", "About", "Insights"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="text-neutral-400 hover:text-primary-DEFAULT transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Connect</h4>
                        <ul className="space-y-4">
                            {["Instagram", "Twitter", "LinkedIn", "Behance"].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-neutral-400 hover:text-primary-DEFAULT transition-colors">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-display font-bold text-white mb-6">Stay Updated</h4>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-white/5 border border-white/10 rounded-full px-6 py-3 text-white focus:outline-none focus:border-primary-DEFAULT transition-colors pr-12"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-primary-DEFAULT rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform"
                            >
                                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                </svg>
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
                    <p className="text-neutral-500 text-sm">
                        &copy; {currentYear} Klarelo Communications. All rights reserved.
                    </p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="text-neutral-500 text-sm hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>

            {/* Big Text Background */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
                <motion.div
                    className="whitespace-nowrap font-display font-bold text-[20vw] leading-none text-white"
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                >
                    KLARELO COMMUNICATIONS KLARELO COMMUNICATIONS
                </motion.div>
            </div>
        </footer>
    );
}
