"use client";

import { HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface CardProps extends HTMLMotionProps<"div"> {
    variant?: "glass" | "solid";
    hover?: boolean;
}

const Card = forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "solid", hover = true, children, ...props }, ref) => {
        const variants = {
            glass: "card-glass",
            solid: "card-solid",
        };

        return (
            <motion.div
                ref={ref}
                className={cn("card", variants[variant], className)}
                whileHover={hover ? { y: -8 } : undefined}
                transition={{ duration: 0.3 }}
                {...props}
            >
                {children}
            </motion.div>
        );
    }
);

Card.displayName = "Card";

export default Card;
