"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Particle() {
    const [mounted, setMounted] = useState(false);
    const [style, setStyle] = useState({ left: "0%", top: "0%" });
    const [duration, setDuration] = useState(3);
    const [delay, setDelay] = useState(0);

    useEffect(() => {
        setMounted(true);
        setStyle({
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
        });
        setDuration(3 + Math.random() * 2);
        setDelay(Math.random() * 2);
    }, []);

    if (!mounted) return null;

    return (
        <motion.div
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={style}
            animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
                duration,
                repeat: Infinity,
                delay,
            }}
        />
    );
}
