"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";
import Button from "@/components/ui/Button";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 text-white pt-32 pb-16 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-40 -left-40 w-80 h-80 rounded-full bg-secondary-DEFAULT/10 blur-[100px]"></div>
                <div className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent-DEFAULT/10 blur-[100px]"></div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <img
                                src="https://ik.imagekit.io/5zp8ovb7c/Klarelo/Logos/Klarelo%20Communications%20Logo%20V2%20Transparent%20Bg.png?updatedAt=1765824981603"
                                alt="Klarelo Logo"
                                className="h-20 w-auto"
                            />
                        </Link>
                        <p className="text-neutral-200 leading-relaxed text-base">
                            Strategic communications that build brands and foster connections.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-xl mb-8 flex items-center">
                            <span className="w-2 h-2 bg-secondary-DEFAULT rounded-full mr-3"></span>
                            Explore
                        </h4>
                        <ul className="space-y-4 text-neutral-200 text-base">
                            {["Work", "Services", "About", "Insights"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="hover:text-secondary-DEFAULT transition-colors block group flex items-center">
                                        <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold text-xl mb-8 flex items-center">
                            <span className="w-2 h-2 bg-secondary-DEFAULT rounded-full mr-3"></span>
                            Connect
                        </h4>
                        <ul className="space-y-4 text-neutral-200 text-base">
                            <li>Pioneer House, 5th Floor</li>
                            <li>Kenyatta Avenue, Nairobi</li>
                            <li>
                                <a href="tel:+254703406865" className="hover:text-secondary-DEFAULT transition-colors block mt-2 group flex items-center">
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    +254 703 406 865
                                </a>
                            </li>
                            <li>
                                <a href="mailto:klarelocommunications@gmail.com" className="hover:text-secondary-DEFAULT transition-colors group flex items-center">
                                    <span className="mr-2 group-hover:translate-x-1 transition-transform">&rarr;</span>
                                    klarelocommunications@gmail.com
                                </a>
                            </li>
                        </ul>

                        <div className="flex gap-6 mt-8">
                            <a href="#" className="text-neutral-200 hover:text-secondary-DEFAULT transition-colors p-2 rounded-full bg-white/10 hover:bg-secondary-DEFAULT/20"><FaInstagram size={20} /></a>
                            <a href="#" className="text-neutral-200 hover:text-secondary-DEFAULT transition-colors p-2 rounded-full bg-white/10 hover:bg-secondary-DEFAULT/20"><FaTwitter size={20} /></a>
                            <a href="#" className="text-neutral-200 hover:text-secondary-DEFAULT transition-colors p-2 rounded-full bg-white/10 hover:bg-secondary-DEFAULT/20"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-neutral-200 hover:text-secondary-DEFAULT transition-colors p-2 rounded-full bg-white/10 hover:bg-secondary-DEFAULT/20"><FaBehance size={20} /></a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-xl mb-8 flex items-center">
                            <span className="w-2 h-2 bg-secondary-DEFAULT rounded-full mr-3"></span>
                            Newsletter
                        </h4>
                        <p className="text-neutral-200 text-base mb-6">Subscribe to our latest insights.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/10 border border-white/20 rounded-xl px-5 py-4 text-white placeholder:text-neutral-400 focus:outline-none focus:border-secondary-DEFAULT transition-colors text-base"
                            />
                            <Button
                                type="submit"
                                variant="accent"
                                size="md"
                                className="absolute right-2 top-2 bottom-2 px-6 text-sm font-bold"
                            >
                                JOIN
                            </Button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-400">
                    <p>&copy; {currentYear} Klarelo Communications. All rights reserved.</p>
                    <div className="flex gap-8 mt-6 md:mt-0">
                        <Link href="#" className="hover:text-secondary-DEFAULT transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-secondary-DEFAULT transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
