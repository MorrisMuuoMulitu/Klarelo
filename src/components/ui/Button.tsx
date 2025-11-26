"use client";

import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "ghost";
    size?: "sm" | "md" | "lg";
    magnetic?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            className,
            variant = "primary",
            size = "md",
            magnetic = false,
            children,
            ...props
        },
        ref
    ) => {
        const baseStyles = "btn focus-visible";

        const variants = {
            primary: "btn-primary",
            secondary: "btn-secondary",
            ghost: "btn-ghost",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                whileHover={magnetic ? { scale: 1.05 } : undefined}
                whileTap={magnetic ? { scale: 0.95 } : undefined}
                {...(props as any)}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
