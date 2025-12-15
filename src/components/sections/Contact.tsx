"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

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
        <section id="contact" className="py-24 bg-neutral-50">
            <div className="container-wide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info Side */}
                    <div>
                        <span className="text-secondary-DEFAULT font-semibold text-sm tracking-widest uppercase mb-4 block">
                            Get in Touch
                        </span>
                        <h2 className="heading-section mb-6">
                            Let's Start a Conversation
                        </h2>
                        <p className="text-neutral-600 text-lg mb-12 max-w-md leading-relaxed">
                            Whether you need to refine your strategy, manage a crisis, or elevate your brand, we're here to help.
                        </p>

                        <div className="space-y-8">
                            {[
                                { label: "Email Us", value: "klarelocommunications@gmail.com", href: "mailto:klarelocommunications@gmail.com" },
                                { label: "Call Us", value: "0703 406 865", href: "tel:+254703406865" },
                                { label: "Visit Us", value: "Pioneer House, Kenyatta Avenue", href: "#", sub: "5th Floor, Nairobi, Kenya" },
                            ].map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="block group p-6 bg-white rounded-xl border border-neutral-100 shadow-sm hover:shadow-md transition-all duration-300"
                                >
                                    <p className="text-sm text-secondary-DEFAULT font-bold uppercase tracking-wider mb-2">{item.label}</p>
                                    <p className="text-xl font-medium text-neutral-900 group-hover:text-primary-DEFAULT transition-colors">
                                        {item.value}
                                    </p>
                                    {item.sub && <p className="text-neutral-500 mt-1">{item.sub}</p>}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-white p-8 md:p-10 rounded-2xl border border-neutral-100 shadow-lg shadow-neutral-100/50">
                        <h3 className="text-2xl font-bold text-neutral-900 mb-8">Send a Message</h3>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-700">Name</label>
                                    <input
                                        {...register("name")}
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-1 focus:ring-secondary-DEFAULT transition-all"
                                        placeholder="Full Name"
                                    />
                                    {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-700">Email</label>
                                    <input
                                        {...register("email")}
                                        className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-1 focus:ring-secondary-DEFAULT transition-all"
                                        placeholder="email@company.com"
                                    />
                                    {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-neutral-700">Subject</label>
                                <input
                                    {...register("subject")}
                                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-1 focus:ring-secondary-DEFAULT transition-all"
                                    placeholder="How can we help?"
                                />
                                {errors.subject && <span className="text-xs text-red-500">{errors.subject.message}</span>}
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-700">Message</label>
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    className="w-full bg-neutral-50 border border-neutral-200 rounded-lg px-4 py-3 text-neutral-900 focus:outline-none focus:border-secondary-DEFAULT focus:ring-1 focus:ring-secondary-DEFAULT transition-all resize-none"
                                    placeholder="Tell us about your project..."
                                />
                                {errors.message && <span className="text-xs text-red-500">{errors.message.message}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary disabled:opacity-70 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
