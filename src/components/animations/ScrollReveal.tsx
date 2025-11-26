"use client";

import { ReactNode, Children } from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    stagger?: number;
    className?: string;
}

export default function ScrollReveal({
    children,
    stagger = 0.1,
    className = "",
}: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });

    const childrenArray = Children.toArray(children);

    return (
        <div ref={ref} className={className}>
            {childrenArray.map((child, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                        isInView
                            ? {
                                opacity: 1,
                                y: 0,
                            }
                            : {}
                    }
                    transition={{
                        duration: 0.5,
                        delay: index * stagger,
                        ease: [0.25, 0.1, 0.25, 1],
                    }}
                >
                    {child}
                </motion.div>
            ))}
        </div>
    );
}
