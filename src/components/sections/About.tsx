"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { STATS } from "@/lib/constants";

export default function About() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 10]);

    return (
        <section id="about" ref={containerRef} className="relative py-32 bg-void-light overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-secondary-DEFAULT/5 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-DEFAULT/5 rounded-full blur-[100px] pointer-events-none" />

            <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    style={{ y, rotate }}
                    className="relative z-10"
                >
                    <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-panel">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary-DEFAULT/20 to-transparent mix-blend-overlay z-10" />
                        <Image
                            src="https://ik.imagekit.io/5zp8ovb7c/Klarelo/Images/about-image.jpg?updatedAt=1709820464117" // Placeholder, should be updated
                            alt="About Klarelo"
                            fill
                            className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />

                        {/* Floating Badge */}
                        <motion.div
                            className="absolute bottom-8 right-8 bg-white/10 backdrop-blur-xl border border-white/20 p-6 rounded-2xl z-20 max-w-[200px]"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <p className="text-4xl font-display font-bold text-white mb-1">10+</p>
                            <p className="text-sm text-neutral-300">Years of redefining digital landscapes</p>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Content Side */}
                <div className="relative z-10">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="heading-section text-white mb-8"
                    >
                        We Are The <br />
                        <span className="text-gradient-primary">Digital Alchemists</span>
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="space-y-6 text-lg text-neutral-400 font-light leading-relaxed mb-12"
                    >
                        <p>
                            At Klarelo, we don't just build websites; we construct digital realities. We believe that every brand has a unique frequency, and our mission is to amplify it through design, technology, and storytelling.
                        </p>
                        <p>
                            Our approach is rooted in "Digital Alchemy" — the process of transforming raw ideas into golden user experiences. We merge the precision of code with the fluidity of art to create something truly transcendent.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8">
                        {STATS.map((stat, index) => (
                            <motion.div
                                key={stat.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.4 + index * 0.1 }}
                                className="border-l border-white/10 pl-6"
                            >
                                <h3 className="text-4xl font-display font-bold text-white mb-2">
                                    {stat.value}
                                </h3>
                                <p className="text-sm text-neutral-500 uppercase tracking-wider">
                                    {stat.label}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
