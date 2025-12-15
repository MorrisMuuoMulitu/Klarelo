"use client";

import { TEAM } from "@/lib/constants";
import ScrollReveal from "../animations/ScrollReveal";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Team() {
    return (
        <section id="team" className="py-32 bg-void relative overflow-hidden">
            {/* Background Ambience */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary-DEFAULT/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container-wide relative z-10">
                <FadeIn>
                    <div className="text-center mb-24">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-secondary-DEFAULT font-mono text-sm tracking-wider uppercase mb-4 block"
                        >
                            The Architects
                        </motion.span>
                        <h2 className="heading-section text-white mb-6">
                            Meet the <span className="text-gradient-primary">Visionaries</span>
                        </h2>
                        <p className="text-neutral-400 text-lg max-w-2xl mx-auto leading-relaxed">
                            A collective of digital alchemists, strategists, and creatives dedicated to transforming your narrative into a legacy.
                        </p>
                    </div>
                </FadeIn>

                <ScrollReveal className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {TEAM.map((member, index) => (
                        <TeamCard key={member.id} member={member} index={index} />
                    ))}
                </ScrollReveal>
            </div>
        </section>
    );
}

const TeamCard = ({ member, index }: { member: any, index: number }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group relative"
        >
            {/* Card Content */}
            <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/10 backdrop-blur-sm transition-all duration-500 group-hover:bg-white/[0.05] group-hover:border-primary-DEFAULT/30 group-hover:shadow-[0_0_30px_rgba(112,0,255,0.15)]">

                {/* Image Container */}
                <div className="relative aspect-[4/5] overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-80 z-10" />

                    <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />

                    {/* Socials Overlay */}
                    <div className="absolute bottom-0 left-0 w-full p-8 z-20 translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                        <div className="flex gap-4">
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
                </div>

                {/* Info */}
                <div className="p-8 relative z-20 -mt-12">
                    <h3 className="text-2xl font-display font-bold text-white mb-1 group-hover:text-primary-DEFAULT transition-colors">
                        {member.name}
                    </h3>
                    <p className="text-neutral-400 font-medium tracking-wide text-sm uppercase">
                        {member.role}
                    </p>
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
        className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-primary-DEFAULT hover:scale-110 transition-all duration-300"
    >
        {icon}
    </a>
);
