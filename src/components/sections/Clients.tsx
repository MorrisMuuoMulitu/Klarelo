"use client";

import { CLIENTS } from "@/lib/constants";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
    return (
        <section className="py-32 bg-void border-t border-white/5 relative">
            {/* Radial gradient for depth */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-dim/10 via-void to-void pointer-events-none" />

            <div className="container-wide relative z-10">
                <FadeIn>
                    <div className="text-center mb-20">
                        <span className="text-accent-DEFAULT font-mono text-sm tracking-wider uppercase mb-4 block">
                            Trusted By
                        </span>
                        <h2 className="heading-section text-white mb-6">
                            Our <span className="text-gradient-cyber">Partners</span>
                        </h2>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {CLIENTS.map((client, index) => (
                        <ClientLogo key={client.id} client={client} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ClientLogo = ({ client, index }: { client: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="group relative flex items-center justify-center p-6 h-40 rounded-3xl bg-white transition-all duration-500 hover:shadow-[0_0_30px_rgba(112,0,255,0.3)] hover:scale-105"
        >
            {/* Glow Effect behind logo - adjusted for white card */}
            <div className="absolute inset-0 bg-white rounded-3xl z-0" />

            <div className="relative w-full h-full flex items-center justify-center z-10">
                {/* Logo - Natural colors, no filters */}
                <div className="relative w-32 h-32 md:w-40 md:h-24">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        className="object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                </div>
            </div>
        </motion.div>
    );
};
