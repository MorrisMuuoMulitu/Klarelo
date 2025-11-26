"use client";

import { CLIENTS } from "@/lib/constants";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
    return (
        <section className="section bg-white">
            <div className="container-custom">
                <FadeIn>
                    <div className="text-center mb-16">
                        <h2 className="heading-2 gradient-text mb-6">Our Clients</h2>
                        <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full" />
                    </div>
                </FadeIn>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {CLIENTS.map((client, index) => (
                        <FadeIn key={client.id} delay={index * 0.1}>
                            <motion.div
                                className="relative aspect-square rounded-2xl bg-white shadow-lg p-6 flex items-center justify-center group cursor-pointer overflow-hidden"
                                whileHover={{ y: -8, scale: 1.05 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-accent-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="relative z-10">
                                    {client.url ? (
                                        <a
                                            href={client.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="block"
                                        >
                                            <Image
                                                src={client.logo}
                                                alt={client.name}
                                                width={150}
                                                height={150}
                                                className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                            />
                                        </a>
                                    ) : (
                                        <Image
                                            src={client.logo}
                                            alt={client.name}
                                            width={150}
                                            height={150}
                                            className="w-full h-auto object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                        />
                                    )}
                                </div>
                            </motion.div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
