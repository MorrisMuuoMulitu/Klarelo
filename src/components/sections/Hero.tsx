"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Button from "@/components/ui/Button";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Mesh Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 z-0" />
            <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-secondary-DEFAULT/10 rounded-full blur-[200px] mix-blend-multiply opacity-50 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[1000px] h-[1000px] bg-primary-DEFAULT/10 rounded-full blur-[200px] mix-blend-multiply opacity-50"></div>
            {/* Decorative geometric elements */}
            <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-secondary-DEFAULT/20 rounded-full animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-40 h-40 border-l-2 border-t-2 border-primary-DEFAULT/30 rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>

            {/* Background Video/Video */}
            <div className="absolute inset-0 overflow-hidden z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50/10 to-secondary-50/10 mix-blend-overlay"></div>
                <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 rounded-full bg-gradient-to-r from-secondary-DEFAULT/20 to-primary-DEFAULT/20 blur-3xl animate-pulse"></div>
            </div>

            <div className="container-wide relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative mb-12"
                >
                    <span className="inline-block py-3 px-8 rounded-full bg-gradient-to-r from-secondary-DEFAULT to-accent-DEFAULT text-white text-base font-bold uppercase tracking-[0.15em] mb-8 shadow-lg shadow-secondary-DEFAULT/30 backdrop-blur-sm border border-white/30">
                        Strategic Communications
                    </span>

                    {/* Decorative Floating Images */}
                    <div className="absolute -top-12 -left-12 w-24 h-24 rounded-full bg-gradient-to-br from-secondary-DEFAULT/20 to-primary-DEFAULT/20 blur-xl animate-pulse"></div>
                    <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full bg-gradient-to-br from-primary-DEFAULT/10 to-accent-DEFAULT/10 blur-xl animate-pulse"></div>
                </motion.div>

                <div className="relative mb-8">
                    {/* Floating Visual Content */}
                    <motion.div
                        className="absolute -top-20 left-1/2 transform -translate-x-1/2 w-72 h-72 rounded-full bg-gradient-to-r from-secondary-DEFAULT/10 to-primary-DEFAULT/10 blur-3xl"
                        animate={{
                            scale: [1, 1.2, 1],
                            opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            repeatType: "reverse"
                        }}
                    />

                    {/* Main Hero Content */}
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="heading-hero text-balance relative"
                    >
                        The Art of <br />
                        <span className="relative inline-block">
                            Modern Influence
                            <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary-DEFAULT to-transparent opacity-50"></span>
                        </span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl md:text-2xl text-neutral-800 font-medium leading-relaxed max-w-3xl mx-auto mb-12 font-sans px-4"
                >
                    We craft narratives that define brands. Bringing color, clarity, and creativity to your story in a noisy world.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-8 relative z-20"
                >
                    <Link href="#contact" className="group relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <Button variant="primary" size="lg" className="text-lg px-12 py-6 relative z-10 font-bold text-lg">
                            Start the Conversation
                        </Button>
                    </Link>
                    <Link href="#services" className="group relative">
                        <div className="absolute -inset-2 bg-gradient-to-r from-accent-DEFAULT to-secondary-DEFAULT rounded-full blur opacity-20 group-hover:opacity-40 transition-opacity duration-500"></div>
                        <Button variant="ghost" size="lg" className="text-lg px-12 py-6 relative z-10 font-bold text-lg">
                            View Our Services
                        </Button>
                    </Link>
                </motion.div>

                {/* Floating Image Elements */}
                <motion.div
                    className="absolute top-1/3 left-10 w-16 h-16 rounded-lg bg-gradient-to-br from-secondary-DEFAULT/20 to-primary-DEFAULT/20 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg"
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                >
                    <div className="w-12 h-12 bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT rounded-md"></div>
                </motion.div>

                <motion.div
                    className="absolute bottom-1/4 right-16 w-20 h-20 rounded-lg bg-gradient-to-br from-primary-DEFAULT/10 to-accent-DEFAULT/10 backdrop-blur-sm border border-white/30 flex items-center justify-center shadow-lg"
                    animate={{
                        y: [0, 20, 0],
                    }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: 1
                    }}
                >
                    <div className="w-14 h-14 bg-gradient-to-r from-primary-DEFAULT to-accent-DEFAULT rounded-md"></div>
                </motion.div>
            </div>
        </section>
    );
}
