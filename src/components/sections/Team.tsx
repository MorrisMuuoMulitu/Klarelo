"use client";

import { TEAM } from "@/lib/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Team() {
    return (
        <section id="team" className="py-24 bg-white">
            <div className="container-wide">
                <div className="text-center mb-20">
                    <span className="text-secondary-DEFAULT font-semibold text-sm tracking-widest uppercase mb-3 block">
                        Our Leadership
                    </span>
                    <h2 className="heading-section mb-6">
                        Meet the Team
                    </h2>
                    <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                        Dedicated professionals with a passion for excellence in strategic communication.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {TEAM.map((member, index) => (
                        <TeamCard key={member.id} member={member} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group"
        >
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-neutral-100 mb-6">
                <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <div className="text-center">
                <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                    {member.name}
                </h3>
                <p className="text-secondary-DEFAULT font-medium mb-4">
                    {member.role}
                </p>

                <div className="flex justify-center gap-4">
                    {member.social.facebook && (
                        <SocialLink href={member.social.facebook} icon={<FaFacebookF />} />
                    )}
                    {member.social.twitter && (
                        <SocialLink href={member.social.twitter} icon={<FaTwitter />} />
                    )}
                    {member.social.instagram && (
                        <SocialLink href={member.social.instagram} icon={<FaInstagram />} />
                    )}
                    {member.social.linkedin && (
                        <SocialLink href={member.social.linkedin} icon={<FaLinkedinIn />} />
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const SocialLink = ({ href, icon }: { href: string, icon: React.ReactNode }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="w-8 h-8 flex items-center justify-center rounded-full bg-neutral-100 text-neutral-600 hover:bg-primary-DEFAULT hover:text-white transition-colors duration-200"
    >
        {icon}
    </a>
);
