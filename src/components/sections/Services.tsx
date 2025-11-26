"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="relative py-32 bg-void overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <div className="mb-24 text-center">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="heading-section text-white mb-6"
                    >
                        Our <span className="text-gradient-cyber">Expertise</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-400 max-w-2xl mx-auto text-lg"
                    >
                        We blend strategy, design, and technology to create digital experiences that leave a lasting impact.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SERVICES.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative h-[320px] glass-card rounded-3xl p-8 flex flex-col justify-between overflow-hidden"
                        >
                            {/* Hover Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-DEFAULT/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary-DEFAULT/30 transition-all duration-300">
                                    <Image
                                        src={`https://ik.imagekit.io/5zp8ovb7c/Klarelo/icons/${service.icon}.svg?updatedAt=1737893519035`}
                                        alt={service.title}
                                        width={28}
                                        height={28}
                                        className="w-7 h-7 invert opacity-80 group-hover:opacity-100"
                                    />
                                </div>
                                <h3 className="text-2xl font-display font-bold text-white mb-3 group-hover:text-primary-DEFAULT transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-neutral-400 leading-relaxed group-hover:text-neutral-200 transition-colors">
                                    {service.description}
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="relative z-10 w-full h-[1px] bg-gradient-to-r from-white/10 to-transparent mt-auto group-hover:from-primary-DEFAULT/50 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
