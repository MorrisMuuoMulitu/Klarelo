"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-32 bg-neutral-50">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Section Header */}
                    <div className="lg:col-span-4">
                        <span className="text-secondary-DEFAULT text-xs font-bold uppercase tracking-[0.2em] mb-4 block">
                            Our Expertise
                        </span>
                        <h2 className="heading-section mb-6">
                            Capabilities
                        </h2>
                        <p className="text-editorial text-lg">
                            We offer a bespoke suite of communications services tailored to the unique needs of modern organizations.
                        </p>
                    </div>

                    {/* Services List (Editorial Style) */}
                    <div className="lg:col-span-8">
                        <div className="divide-y divide-neutral-200 border-t border-neutral-200">
                            {SERVICES.map((service, index) => (
                                <ServiceItem key={service.id} service={service} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

const ServiceItem = ({ service, index }: { service: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group py-10 flex flex-col md:flex-row gap-8 items-start hover:bg-white transition-colors duration-300 md:px-6 -mx-6 rounded-lg"
        >
            <div className="w-16 h-16 shrink-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {/* Icon appears on hover only for cleaner initial look, or keeps subtle */}
                <Image
                    src={`https://ik.imagekit.io/5zp8ovb7c/Klarelo/icons/${service.icon}.svg?updatedAt=1737893519035`}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-8 h-8 opacity-50"
                />
            </div>

            <div className="flex-1">
                <h3 className="text-3xl font-display font-medium text-primary-DEFAULT mb-3 group-hover:text-secondary-DEFAULT transition-colors">
                    {service.title}
                </h3>
                <p className="text-neutral-500 font-light leading-relaxed max-w-xl">
                    {service.description}
                </p>
            </div>

            <div className="pt-2">
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-neutral-200 text-neutral-400 group-hover:border-secondary-DEFAULT group-hover:bg-secondary-DEFAULT group-hover:text-white transition-all transform group-hover:-rotate-45">
                    &rarr;
                </span>
            </div>
        </motion.div>
    );
};
