"use client";

import { STATS } from "@/lib/constants";
import AnimatedCounter from "../ui/AnimatedCounter";
import FadeIn from "../animations/FadeIn";

export default function Stats() {
    return (
        <section className="section relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 opacity-95" />
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
                    backgroundSize: "30px 30px",
                }}
            />

            <div className="relative z-10 container-custom">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {STATS.map((stat, index) => (
                        <FadeIn key={stat.id} delay={index * 0.1}>
                            <div className="text-center">
                                <div className="mb-4">
                                    <AnimatedCounter
                                        value={stat.value}
                                        suffix={stat.suffix}
                                        className="text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                                    />
                                </div>
                                <h3 className="text-base md:text-lg text-white/90 font-medium">
                                    {stat.label}
                                </h3>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
