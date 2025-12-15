"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-secondary-DEFAULT/5 blur-[100px]"></div>
                <div className="absolute top-1/2 -right-40 w-80 h-80 rounded-full bg-primary-DEFAULT/5 blur-[100px]"></div>
            </div>

            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
                    {/* Section Header */}
                    <div className="lg:col-span-4">
                        <div className="inline-block p-1 mb-6 rounded-full bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT">
                            <span className="block py-1 px-4 rounded-full bg-white text-secondary-DEFAULT text-sm font-bold uppercase tracking-[0.15em]">
                                Our Expertise
                            </span>
                        </div>
                        <h2 className="heading-section mb-6 text-primary-800">
                            Capabilities
                        </h2>
                        <p className="text-editorial text-lg text-neutral-700">
                            We offer a bespoke suite of communications services tailored to the unique needs of modern organizations.
                        </p>
                    </div>

                    {/* Services List (Editorial Style) */}
                    <div className="lg:col-span-8">
                        <div className="divide-y divide-neutral-200/50 border-t border-neutral-200/50 rounded-2xl bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl shadow-secondary-DEFAULT/5">
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
            className="group py-14 flex flex-col md:flex-row gap-10 items-start transition-all duration-500 md:px-8 -mx-8 rounded-lg hover:bg-gradient-to-r hover:from-secondary-50/50 hover:to-primary-50/50 border-l-4 border-transparent hover:border-secondary-DEFAULT relative overflow-hidden"
        >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full bg-secondary-DEFAULT/5 group-hover:scale-150 transition-transform duration-1000"></div>

            <div className="w-20 h-20 shrink-0 flex items-center justify-center bg-gradient-to-br from-secondary-DEFAULT to-primary-DEFAULT rounded-xl p-4 group-hover:scale-110 transition-transform duration-300">
                <Image
                    src={`https://ik.imagekit.io/5zp8ovb7c/Klarelo/icons/${service.icon}.svg?updatedAt=1737893519035`}
                    alt={service.title}
                    width={32}
                    height={32}
                    className="w-10 h-10 text-white"
                />
            </div>

            <div className="flex-1 relative z-10">
                <h3 className="text-3xl font-display font-bold text-primary-DEFAULT mb-4 group-hover:text-secondary-DEFAULT transition-colors">
                    {service.title}
                </h3>
                <p className="text-neutral-700 font-medium leading-relaxed max-w-xl">
                    {service.description}
                </p>
            </div>

            <div className="pt-2 relative z-10">
                <span className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-secondary-DEFAULT to-primary-DEFAULT text-white transition-all transform group-hover:rotate-12 duration-500 shadow-lg shadow-secondary-DEFAULT/30">
                    &rarr;
                </span>
            </div>
        </motion.div>
    );
};
