"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { STATS } from "@/lib/constants";

export default function About() {
    return (
        <section id="about" className="py-32 bg-white">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    {/* Image Side - Editorial Composition */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100">
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=2940"
                                alt="Klarelo Team"
                                fill
                                sizes="(max-width: 768px) 100vw, 50vw"
                                className="object-cover saturate-0 hover:saturate-100 transition-all duration-700"
                            />
                        </div>
                        {/* Decorative Offset Border */}
                        <div className="absolute top-8 left-8 w-full h-full border border-primary-DEFAULT z-[-1]" />
                    </motion.div>

                    {/* Content Side */}
                    <div className="space-y-8">
                        <span className="text-secondary-DEFAULT text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Our Philosophy
                        </span>

                        <h2 className="heading-section">
                            We Build <span className="italic font-normal">Authority</span> & <br />
                            Architect <span className="italic font-normal">Reputation</span>.
                        </h2>

                        <div className="text-editorial space-y-6 text-lg">
                            <p>
                                <span className="font-medium text-primary-DEFAULT">Klarelo</span> exists at the intersection of strategy and storytelling. We understand that in a crowded marketplace, clarity is the ultimate currency.
                            </p>
                            <p>
                                Our methodology is rooted in precision. We don't just amplify noise; we distill your brand's essence into a signal that resonates with the right audience, at the right time.
                            </p>
                        </div>

                        {/* Minimal Stats */}
                        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-neutral-200 mt-12">
                            {STATS.map((stat) => (
                                <div key={stat.id}>
                                    <p className="text-4xl font-display font-medium text-primary-DEFAULT mb-2 bg-neutral-50 inline-block px-2 -ml-2">
                                        {stat.value}
                                    </p>
                                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">
                                        {stat.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
