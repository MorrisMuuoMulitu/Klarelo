"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[90vh] flex items-center justify-center bg-white overflow-hidden pt-20">
            <div className="container-wide relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-secondary-DEFAULT text-sm font-bold uppercase tracking-[0.3em] mb-8"
                    >
                        Strategic Communications
                    </motion.p>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="heading-hero mb-10"
                    >
                        The Art of <br />
                        <span className="italic text-neutral-600">Modern Influence</span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, width: 0 }}
                        animate={{ opacity: 1, width: "100px" }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="h-[1px] bg-secondary-DEFAULT mx-auto mb-10"
                    />

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl md:text-2xl text-neutral-500 font-light leading-relaxed max-w-2xl mx-auto mb-16 font-sans"
                    >
                        We craft narratives that define brands, shaping perception through precision and creativity.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Link href="#contact" className="btn-editorial">
                            Work With Us
                        </Link>
                        <Link href="#about" className="text-sm uppercase tracking-widest border-b border-primary-DEFAULT pb-1 hover:text-secondary-DEFAULT hover:border-secondary-DEFAULT transition-colors">
                            Explore Our Story
                        </Link>
                    </motion.div>
                </div>
            </div>

            {/* Editorial Line Accent */}
            <div className="absolute left-10 top-0 bottom-0 w-[1px] bg-neutral-100 hidden lg:block" />
            <div className="absolute right-10 top-0 bottom-0 w-[1px] bg-neutral-100 hidden lg:block" />
        </section>
    );
}
