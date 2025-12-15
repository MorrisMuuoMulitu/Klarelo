"use client";

import { useRef, useState } from "react";
import { CLIENTS } from "@/lib/constants";
import FadeIn from "../animations/FadeIn";
import Image from "next/image";
import {
    motion,
    useMotionValue,
    useSpring,
    useTransform,
} from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

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
                        <Logo client={client} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

const Logo = ({ client }) => {
    const ref = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
    const left = useTransform(mouseXSpring, [0.5, -0.5], ["40%", "60%"]);

    const handleMouseMove = (e) => {
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const cardVariants = {
        initial: {
            scale: 1,
            rotateX: 0,
            rotateY: 0,
        },
        hover: {
            scale: 1.05,
            rotateX: y.get() * 30,
            rotateY: x.get() * -30,
        },
    };

    const content = (
        <FadeIn>
            <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={() => {
                    x.set(0);
                    y.set(0);
                    setIsHovered(false);
                }}
                onMouseEnter={() => setIsHovered(true)}
                style={{
                    transformStyle: "preserve-3d",
                }}
                variants={cardVariants}
                whileHover="hover"
                className="relative aspect-square rounded-2xl bg-gradient-to-br from-black to-neutral-900"
            >
                <motion.div
                    style={{
                        transform: "translateZ(75px)",
                        transformStyle: "preserve-3d",
                    }}
                    className="absolute inset-4 grid place-content-center rounded-xl bg-white shadow-lg"
                >
                    <Image
                        src={client.logo}
                        alt={client.name}
                        width={150}
                        height={150}
                        className="w-32 h-32 object-contain"
                    />
                </motion.div>

                {/* Shimmer effect */}
                <motion.div
                    style={{
                        transform: "translateZ(50px)",
                    }}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                    className="absolute inset-0 z-10"
                >
                    <motion.div
                        initial={{
                            x: "-100%",
                        }}
                        animate={{
                            x: "100%",
                            transition: {
                                duration: 0.7,
                                ease: "linear",
                                repeat: Infinity,
                            },
                        }}
                        className="h-full w-1/4 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                </motion.div>

                {/* Client name and link icon */}
                <motion.div
                    style={{
                        transform: "translateZ(100px)",
                    }}
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: isHovered ? 1 : 0,
                        y: isHovered ? 0 : 20,
                        transition: {
                            duration: 0.3,
                        },
                    }}
                    className="absolute bottom-4 left-4 flex items-center gap-2"
                >
                    <p className="text-white text-sm font-semibold">{client.name}</p>
                    {client.url && <FiArrowUpRight className="text-white" />}
                </motion.div>
            </motion.div>
        </FadeIn>
    );

    return client.url ? (
        <a href={client.url} target="_blank" rel="noopener noreferrer">
            {content}
        </a>
    ) : (
        content
    );
};
