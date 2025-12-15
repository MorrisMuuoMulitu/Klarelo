"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

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
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log(data);
        setIsSubmitting(false);
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
    };

    return (
        <section id="contact" className="py-40 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
                <div className="absolute -top-60 -right-60 w-96 h-96 rounded-full bg-secondary-DEFAULT/5 blur-[150px]"></div>
                <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-primary-DEFAULT/5 blur-[150px]"></div>
            </div>

            <div className="container-wide relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    {/* Info Side */}
                    <div className="relative">
                        <div className="inline-block p-1 mb-8 rounded-full bg-gradient-to-r from-secondary-DEFAULT to-primary-DEFAULT">
                            <span className="block py-2 px-6 rounded-full bg-white text-secondary-DEFAULT text-base font-bold uppercase tracking-[0.15em]">
                                Get in Touch
                            </span>
                        </div>
                        <h2 className="heading-section mb-8 text-primary-800">
                            Let's Start a Conversation
                        </h2>
                        <p className="text-neutral-700 text-xl mb-14 max-w-md leading-relaxed">
                            Whether you need to refine your strategy, manage a crisis, or elevate your brand, we're here to help.
                        </p>

                        <div className="space-y-8">
                            {[
                                { label: "Email Us", value: "klarelocommunications@gmail.com", href: "mailto:klarelocommunications@gmail.com" },
                                { label: "Call Us", value: "0703 406 865", href: "tel:+254703406865" },
                                { label: "Visit Us", value: "Pioneer House, Kenyatta Avenue", href: "#", sub: "5th Floor, Nairobi, Kenya" },
                            ].map((item, index) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="block group p-8 bg-gradient-to-br from-white to-neutral-50 rounded-2xl border-2 border-neutral-200 hover:border-secondary-DEFAULT shadow-lg hover:shadow-2xl hover:shadow-secondary-DEFAULT/10 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-r from-secondary-DEFAULT/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                    <p className="text-sm text-secondary-DEFAULT font-bold uppercase tracking-wider mb-3 relative z-10">{item.label}</p>
                                    <p className="text-2xl font-bold text-neutral-900 group-hover:text-primary-DEFAULT transition-colors relative z-10">
                                        {item.value}
                                    </p>
                                    {item.sub && <p className="text-neutral-600 mt-3 relative z-10">{item.sub}</p>}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-gradient-to-br from-white to-neutral-50 p-12 rounded-3xl border-2 border-neutral-200 shadow-2xl shadow-secondary-DEFAULT/10 relative overflow-hidden">
                        {/* Decorative element */}
                        <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-secondary-DEFAULT/10 opacity-50 group-hover:opacity-100 transition-opacity duration-1000"></div>

                        <div className="relative z-10">
                            <h3 className="text-3xl font-bold text-neutral-900 mb-10">Send a Message</h3>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-neutral-700">Name</label>
                                        <input
                                            {...register("name")}
                                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-6 py-5 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-2 focus:ring-secondary-DEFAULT/20 transition-all"
                                            placeholder="Full Name"
                                        />
                                        {errors.name && <span className="text-sm text-red-500">{errors.name.message}</span>}
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-neutral-700">Email</label>
                                        <input
                                            {...register("email")}
                                            className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-6 py-5 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-2 focus:ring-secondary-DEFAULT/20 transition-all"
                                            placeholder="email@company.com"
                                        />
                                        {errors.email && <span className="text-sm text-red-500">{errors.email.message}</span>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="subject" className="text-sm font-semibold text-neutral-700">Subject</label>
                                    <input
                                        {...register("subject")}
                                        className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-6 py-5 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-2 focus:ring-secondary-DEFAULT/20 transition-all"
                                        placeholder="How can we help?"
                                    />
                                    {errors.subject && <span className="text-sm text-red-500">{errors.subject.message}</span>}
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-neutral-700">Message</label>
                                    <textarea
                                        {...register("message")}
                                        rows={5}
                                        className="w-full bg-neutral-50 border-2 border-neutral-200 rounded-xl px-6 py-5 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-2 focus:ring-secondary-DEFAULT/20 transition-all resize-none"
                                        placeholder="Tell us about your project..."
                                    />
                                    {errors.message && <span className="text-sm text-red-500">{errors.message.message}</span>}
                                </div>

                                <Button
                                    type="submit"
                                    variant="primary"
                                    size="md"
                                    className="w-full py-5 text-lg font-bold"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
