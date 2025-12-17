"use client";

import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "framer-motion";

export interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "variant" | "size"> {
    variant?: "primary" | "secondary" | "ghost" | "accent";
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
        const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";

        const variants = {
            primary: "bg-primary-DEFAULT text-white hover:bg-primary-600 focus:ring-primary-500 shadow-md hover:shadow-lg",
            secondary: "bg-secondary-DEFAULT text-white hover:bg-secondary-600 focus:ring-secondary-500 shadow-md hover:shadow-lg",
            ghost: "text-primary-DEFAULT hover:bg-primary-100 focus:ring-primary-500 border border-transparent hover:border-primary-DEFAULT",
            accent: "bg-accent-DEFAULT text-white hover:bg-accent-600 focus:ring-accent-500 shadow-md hover:shadow-lg",
        };

        const sizes = {
            sm: "px-4 py-2 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        const buttonClassName = cn(
            baseStyles,
            variants[variant],
            sizes[size],
            className
        );

        return (
            <motion.button
                ref={ref}
                className={buttonClassName}
                whileHover={magnetic ? { scale: 1.05 } : undefined}
                whileTap={magnetic ? { scale: 0.95 } : undefined}
                {...props}
            >
                {children}
            </motion.button>
        );
    }
);

Button.displayName = "Button";

export default Button;
