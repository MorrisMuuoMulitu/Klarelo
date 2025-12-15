"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-neutral-50">
            {/* Minimal Background Decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-100 skew-x-12 translate-x-1/2 pointer-events-none" />

            <div className="container-wide relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-secondary-DEFAULT/10 text-secondary-DEFAULT text-sm font-semibold tracking-wide uppercase mb-8">
                        Strategic Communications Agency
                    </span>

                    <h1 className="heading-hero mb-8 max-w-4xl mx-auto">
                        Crafting Narratives that <span className="text-secondary-DEFAULT">Drive Impact</span>
                    </h1>

                    <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
                        We are Klarelo Communications. We fuse creative strategy with industry expertise to build brands, protect reputations, and foster meaningful connections.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="#contact" className="btn-primary w-full sm:w-auto">
                            Start a Project
                        </Link>
                        <Link href="#work" className="btn-outline w-full sm:w-auto">
                            View Our Work
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden md:block text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
            >
                <div className="w-[1px] h-12 bg-neutral-300 mx-auto mb-2" />
                <span className="text-xs uppercase tracking-widest">Scroll</span>
            </motion.div>
        </section>
    );
}
