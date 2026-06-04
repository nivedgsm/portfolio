"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "What type of websites do you build?",
    answer:
      "I build conversion-focused business websites designed to generate leads, build trust, and turn visitors into customers.",
  },
  {
    question: "How long does a typical website take?",
    answer:
      "Most projects are completed within 1–3 weeks depending on the scope and requirements.",
  },
  {
    question: "Will my website work on mobile devices?",
    answer:
      "Yes. Every website is fully responsive and optimized for mobile, tablet, and desktop users.",
  },
  {
    question: "Can you redesign my existing website?",
    answer:
      "Absolutely. I can modernize your website and improve both its visual appeal and conversion performance.",
  },
  {
    question: "Do you write the website copy?",
    answer:
      "Yes. I can help refine your messaging and create conversion-focused copy throughout the site.",
  },
  {
    question: "Will my website be optimized for Google?",
    answer:
      "Every website includes essential SEO best practices and performance optimization.",
  },
  {
    question: "What do you need from me to get started?",
    answer:
      "Business details, branding assets, service information, and examples of websites you like.",
  },
  {
    question: "Do you provide support after launch?",
    answer:
      "Yes. I provide post-launch support and guidance after the website goes live.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative z-10 px-6 py-24 md:px-12 lg:px-16 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-widest text-white/40">
            <span className="size-1.5 rounded-full bg-lime-400" />
            FAQ
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="font-[Syne] text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.0] tracking-tight"
        >
          Questions?{" "}
          <span className="text-lime-400">We got answers.</span>
        </motion.h2>

        {/* FAQ LIST */}
        <div className="mt-16 grid gap-3">
          {faqs.map((faq, index) => {
            const isOpen = open === index;

            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className={`rounded-[20px] border transition-all duration-300 ${
                  isOpen
                    ? "border-lime-400/20 bg-white/[0.03]"
                    : "border-white/[0.07] bg-white/[0.015]"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left"
                >
                  <span
                    className={`font-[Syne] text-base font-semibold transition-colors duration-300 md:text-lg ${
                      isOpen ? "text-white" : "text-white/70"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "border-lime-400/40 bg-lime-400/10 text-lime-400"
                        : "border-white/10 text-white/40"
                    }`}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <p className="px-7 pb-6 text-sm font-light leading-relaxed text-white/45 md:text-base">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}