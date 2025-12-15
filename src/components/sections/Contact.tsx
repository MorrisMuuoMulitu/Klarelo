"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { useState } from "react";
import Button from "../ui/Button";

const contactSchema = z.object({
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject is required"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        setIsSubmitting(true);
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="relative py-32 bg-void overflow-hidden">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-primary-DEFAULT/50 to-transparent" />

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="heading-section text-white mb-6">
                            Let's Create <br />
                            <span className="text-gradient-cyber">Something Epic</span>
                        </h2>
                        <p className="text-neutral-400 text-lg mb-12 max-w-md">
                            Ready to transcend the ordinary? Reach out and let's discuss how we can elevate your brand to new dimensions.
                        </p>

                        <div className="space-y-8">
                            {[
                                { label: "Email", value: "klarelocommunications@gmail.com", href: "mailto:klarelocommunications@gmail.com" },
                                { label: "Phone", value: "0703 406 865", href: "tel:+254703406865" },
                                { label: "Studio", value: "Pioneer House, Kenyatta Avenue", href: "#" },
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="block group"
                                >
                                    <p className="text-sm text-neutral-500 uppercase tracking-wider mb-1">{item.label}</p>
                                    <p className="text-2xl font-display text-white group-hover:text-primary-DEFAULT transition-colors">
                                        {item.value}
                                    </p>
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="glass-panel p-8 md:p-12 rounded-3xl relative overflow-hidden"
                    >
                        {/* Form Glow */}
                        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-accent-DEFAULT/10 rounded-full blur-[80px] pointer-events-none" />

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm text-neutral-400">Name</label>
                                    <input
                                        {...register("name")}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-DEFAULT transition-colors"
                                        placeholder="John Doe"
                                    />
                                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm text-neutral-400">Email</label>
                                    <input
                                        {...register("email")}
                                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-DEFAULT transition-colors"
                                        placeholder="john@example.com"
                                    />
                                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm text-neutral-400">Subject</label>
                                <input
                                    {...register("subject")}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-DEFAULT transition-colors"
                                    placeholder="Project Inquiry"
                                />
                                {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm text-neutral-400">Message</label>
                                <textarea
                                    {...register("message")}
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-primary-DEFAULT transition-colors resize-none"
                                    placeholder="Tell us about your vision..."
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <Button
                                type="submit"
                                variant="primary"
                                size="lg"
                                className="w-full bg-primary-DEFAULT hover:bg-primary-dim text-white border-none"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
