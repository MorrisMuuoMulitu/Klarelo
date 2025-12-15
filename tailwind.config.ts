import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: "#05074a",
                    50: "#eef0fd",
                    100: "#d6d9fa",
                    200: "#b0b6f5",
                    300: "#8a93f0",
                    400: "#6470eb",
                    500: "#3e4de6",
                    600: "#1a2ad1",
                    700: "#1522a7",
                    800: "#101a7d",
                    900: "#0c1353",
                },
                secondary: {
                    DEFAULT: "#dccd17",
                    50: "#fefdf0",
                    100: "#fefac1",
                    200: "#fef593",
                    300: "#feee65",
                    400: "#feea37",
                    500: "#fdd819",
                    600: "#d3b50d",
                    700: "#a9920a",
                    800: "#7f6f08",
                    900: "#554c05",
                },
                accent: {
                    DEFAULT: "#6d6890",
                    50: "#f4f4f8",
                    100: "#e5e4ee",
                    200: "#cecadb",
                    300: "#b7b0c8",
                    400: "#a196b5",
                    500: "#8a7ca2",
                    600: "#73628f",
                    700: "#5c4e7c",
                    800: "#453a5d",
                    900: "#2e263e",
                },
            },
            fontFamily: {
                sans: ['var(--font-space)', 'system-ui', 'sans-serif'],
                display: ['var(--font-playfair)', 'system-ui', 'serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'shimmer': 'shimmer 2s linear infinite',
                'slide-up': 'slide-up 0.5s ease-out',
                'slide-down': 'slide-down 0.5s ease-out',
                'fade-in': 'fade-in 0.5s ease-out',
                'scale-in': 'scale-in 0.3s ease-out',
                'spin-slow': 'spin 3s linear infinite',
                'pulse-slow': 'pulse-slow 6s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px rgba(13, 148, 136, 0.3), 0 0 10px rgba(13, 148, 136, 0.2)' },
                    '100%': { boxShadow: '0 0 20px rgba(13, 148, 136, 0.6), 0 0 30px rgba(13, 148, 136, 0.4)' },
                },
                shimmer: {
                    '0%': { backgroundPosition: '-1000px 0' },
                    '100%': { backgroundPosition: '1000px 0' },
                },
                'slide-up': {
                    '0%': { transform: 'translateY(100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'slide-down': {
                    '0%': { transform: 'translateY(-100%)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'scale-in': {
                    '0%': { transform: 'scale(0.9)', opacity: '0' },
                    '100%': { transform: 'scale(1)', opacity: '1' },
                },
                'pulse-slow': {
                    '0%, 100%': { opacity: '0.7', transform: 'scale(1)' },
                    '50%': { opacity: '0.9', transform: 'scale(1.05)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'gradient-primary': 'linear-gradient(135deg, #1e3a8a 0%, #0d9488 100%)',
                'gradient-accent': 'linear-gradient(135deg, #c026d3 0%, #14b8a6 100%)',
                'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
            },
            boxShadow: {
                'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
                'glow': '0 0 20px rgba(13, 148, 136, 0.5)',
                'glow-lg': '0 0 40px rgba(13, 148, 136, 0.6)',
                'primary': '0 4px 20px rgba(30, 58, 138, 0.15)',
                'secondary': '0 4px 20px rgba(13, 148, 136, 0.15)',
            },
        },
    },
    plugins: [],
};

export default config;