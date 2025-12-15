"use client";

import { SERVICES } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Services() {
    return (
        <section id="services" className="py-24 bg-neutral-50 border-t border-neutral-200">
            <div className="container-wide">
                <div className="mb-20 text-center">
                    <span className="text-secondary-DEFAULT font-semibold text-sm tracking-widest uppercase mb-4 block">
                        Our Expertise
                    </span>
                    <h2 className="heading-section mb-6">
                        Comprehensive <br className="hidden md:block" /> Communication Solutions
                    </h2>
                    <p className="text-neutral-600 max-w-2xl mx-auto text-lg">
                        Tailored strategies to elevate your brand, protect your reputation, and engage your audience.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {SERVICES.map((service, index) => (
                        <ServiceCard key={service.id} service={service} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-white rounded-xl p-8 border border-neutral-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
            {/* Icon */}
            <div className="w-14 h-14 rounded-lg bg-primary-DEFAULT/5 flex items-center justify-center mb-6 group-hover:bg-primary-DEFAULT transition-colors duration-300">
                {/* 
                   Note: Ideally use SVG components or Lucide icons for better coloring control. 
                   Assuming the imagekit icons are SVGs or white-able PNGs. 
                   For now, using a filter to handle color change if it's an image.
                */}
                <Image
                    src={`https://ik.imagekit.io/5zp8ovb7c/Klarelo/icons/${service.icon}.svg?updatedAt=1737893519035`}
                    alt={service.title}
                    width={28}
                    height={28}
                    className="w-7 h-7 object-contain opacity-70 group-hover:opacity-100 group-hover:invert group-hover:brightness-0 transition-all"
                />
            </div>

            <h3 className="text-xl font-bold text-neutral-900 mb-3 group-hover:text-primary-DEFAULT transition-colors">
                {service.title}
            </h3>

            <p className="text-neutral-500 leading-relaxed text-sm">
                {service.description}
            </p>

            {/* Learn More Link (Optional) */}
            <div className="mt-6 pt-6 border-t border-neutral-100">
                <span className="text-sm font-bold text-secondary-DEFAULT group-hover:underline">
                    Learn more &rarr;
                </span>
            </div>
        </motion.div>
    );
};
