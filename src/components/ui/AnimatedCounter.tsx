"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useSpring } from "framer-motion";

interface AnimatedCounterProps {
    value: number;
    duration?: number;
    suffix?: string;
    className?: string;
}

export default function AnimatedCounter({
    value,
    duration = 2,
    suffix = "",
    className = "",
}: AnimatedCounterProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hasAnimated, setHasAnimated] = useState(false);

    const spring = useSpring(0, {
        stiffness: 50,
        damping: 30,
        duration: duration * 1000,
    });

    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView && !hasAnimated) {
            spring.set(value);
            setHasAnimated(true);
        }
    }, [isInView, value, spring, hasAnimated]);

    useEffect(() => {
        const unsubscribe = spring.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });

        return () => unsubscribe();
    }, [spring]);

    return (
        <motion.span
            ref={ref}
            className={className}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
        >
            {displayValue.toLocaleString()}
            {suffix}
        </motion.span>
    );
}
