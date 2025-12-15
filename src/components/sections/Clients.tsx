"use client";

import { CLIENTS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Clients() {
    const ClientLogo = ({ client, index }: { client: any, index: number }) => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative flex items-center justify-center p-12 h-48 rounded-2xl bg-gradient-to-br from-white to-neutral-50 border-2 border-neutral-200 hover:border-secondary-DEFAULT shadow-lg hover:shadow-2xl hover:shadow-secondary-DEFAULT/20 transition-all duration-500 hover:-translate-y-3 overflow-hidden"
            >
                {/* Decorative background elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-secondary-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-secondary-DEFAULT/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <div className="absolute -bottom-10 -left-10 w-16 h-16 rounded-full bg-primary-DEFAULT/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                <div className="relative z-10 w-full h-full flex items-center justify-center">
                    <Image
                        src={client.logo}
                        alt={client.name}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-contain p-6"
                    />
                </div>
            </motion.div>
        );
    };

    return (
        <section className="py-40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-secondary-DEFAULT/10 blur-[100px]"></div>
                <div className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full bg-primary-DEFAULT/10 blur-[100px]"></div>
            </div>

            <div className="container-wide">
                <div className="text-center mb-24 relative z-10">
                    <div className="inline-block p-1 mb-8 rounded-full bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT">
                        <span className="block py-2 px-6 rounded-full bg-white text-secondary-DEFAULT text-base font-bold uppercase tracking-[0.15em]">
                            Our Network
                        </span>
                    </div>
                    <h2 className="heading-section mb-6 text-primary-800">
                        Trusted Partners
                    </h2>
                    <p className="text-neutral-700 text-xl max-w-2xl mx-auto px-4">
                        We collaborate with visionary organizations to deliver outstanding results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10 relative z-10">
                    {CLIENTS.map((client, index) => (
                        <ClientLogo key={client.id} client={client} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
