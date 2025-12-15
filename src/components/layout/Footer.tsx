"use client";

import Link from "next/link";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaBehance } from "react-icons/fa";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-DEFAULT text-white pt-20 pb-10">
            <div className="container-wide">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link href="/" className="inline-block">
                            <span className="font-display font-bold text-3xl">Klarelo.</span>
                        </Link>
                        <p className="text-neutral-300 leading-relaxed text-sm">
                            Strategic communications that build brands and foster connections.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Explore</h4>
                        <ul className="space-y-3 text-neutral-300 text-sm">
                            {["Work", "Services", "About", "Insights"].map((item) => (
                                <li key={item}>
                                    <Link href={`#${item.toLowerCase()}`} className="hover:text-white transition-colors">
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Connect */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Connect</h4>
                        <ul className="space-y-3 text-neutral-300 text-sm">
                            <li>Pioneer House, 5th Floor</li>
                            <li>Kenyatta Avenue, Nairobi</li>
                            <li>
                                <a href="tel:+254703406865" className="hover:text-white transition-colors block mt-2">
                                    +254 703 406 865
                                </a>
                            </li>
                            <li>
                                <a href="mailto:klarelocommunications@gmail.com" className="hover:text-white transition-colors">
                                    klarelocommunications@gmail.com
                                </a>
                            </li>
                        </ul>

                        <div className="flex gap-4 mt-6">
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors"><FaInstagram size={20} /></a>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors"><FaTwitter size={20} /></a>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors"><FaLinkedinIn size={20} /></a>
                            <a href="#" className="text-neutral-300 hover:text-white transition-colors"><FaBehance size={20} /></a>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-lg mb-6">Newsletter</h4>
                        <p className="text-neutral-300 text-sm mb-4">Subscribe to our latest insights.</p>
                        <form className="relative">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="w-full bg-white/10 border border-white/20 rounded-md px-4 py-3 text-white placeholder:text-neutral-400 focus:outline-none focus:border-white transition-colors text-sm"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1.5 bottom-1.5 px-3 bg-white text-primary-DEFAULT text-xs font-bold rounded hover:bg-neutral-200 transition-colors"
                            >
                                JOIN
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-neutral-400">
                    <p>&copy; {currentYear} Klarelo Communications. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
