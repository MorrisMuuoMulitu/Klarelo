"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { STATS } from "@/lib/constants";

export default function About() {
    return (
        <section id="about" className="py-24 bg-white overflow-hidden">
            <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Image Side */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-neutral-200/50">
                        <Image
                            // Use a placeholder that fits a corporate vibe if the original is too abstract
                            src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
                            alt="Klarelo Team Meeting"
                            fill
                            className="object-cover"
                        />
                        {/* Overlay Gradient for text readability if needed, but keeping it clean here */}
                        <div className="absolute inset-0 bg-primary-DEFAULT/10 mix-blend-multiply" />
                    </div>

                    {/* Floating Experience Badge */}
                    <div className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 bg-white p-8 rounded-xl shadow-xl border border-neutral-100 max-w-[240px]">
                        <p className="text-5xl font-display font-bold text-secondary-DEFAULT mb-2">10+</p>
                        <p className="text-sm font-medium text-neutral-600 leading-snug">Years of Defining Excellence in Communications</p>
                    </div>
                </motion.div>

                {/* Content Side */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                >
                    <span className="text-secondary-DEFAULT font-semibold text-sm tracking-widest uppercase mb-4 block">
                        Who We Are
                    </span>
                    <h2 className="heading-section mb-8">
                        Architects of <span className="text-primary-DEFAULT">Influence</span> & <span className="text-secondary-DEFAULT">Impact</span>
                    </h2>

                    <div className="space-y-6 text-lg text-neutral-600 leading-relaxed mb-12">
                        <p>
                            Klarelo is a premier strategic communications consultancy. We don't just manage reputations; we build legacies. In an era of noise, we ensure your signal is clear, potent, and directed exactly where it matters.
                        </p>
                        <p>
                            Our philosophy blends data-driven insights with creative storytelling. From crisis management to brand advocacy, we operate as your trusted partner in navigating the complex media landscape.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-8 border-t border-neutral-100 pt-8">
                        {STATS.map((stat, index) => (
                            <div key={stat.id}>
                                <h3 className="text-4xl font-display font-bold text-primary-DEFAULT mb-1">
                                    {stat.value}
                                </h3>
                                <p className="text-sm font-medium text-neutral-500 uppercase tracking-wide">
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
