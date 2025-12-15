"use client";

import { CLIENTS } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Clients() {
    return (
        <section className="py-24 bg-neutral-50 border-t border-neutral-200">
            <div className="container-wide">
                <div className="text-center mb-16">
                    <h2 className="heading-section mb-6">
                        Trusted Partners
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                        We collaborate with visionary organizations to deliver outstanding results.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
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
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="flex items-center justify-center p-8 h-32 rounded-xl bg-white border border-neutral-100 shadow-sm hover:shadow-md transition-shadow duration-300"
        >
            <div className="relative w-full h-full">
                <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain"
                />
            </div>
        </motion.div>
    );
};
