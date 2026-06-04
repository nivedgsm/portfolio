"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const clients = [
  {
    name: "Aviation Training Academy",
    category: "Aviation",
    image: "/akhurathaviation.png",
    url: "https://akhurathaviationacademy.com",
    description:
      "A premium digital experience focused on credibility, student acquisition, and lead generation.",
  },
  {
    name: "Luxury Charter Service",
    category: "Private Aviation",
    image: "/akhurathzenith.png",
    url: "https://akhurathzenith.com",
    description:
      "A high-end web experience aligned with the premium nature of private aviation clientele.",
  },
  {
    name: "Media Production House",
    category: "Production",
    image: "/gsm.png",
    url: "https://your-production-site.com",
    description:
      "A cinematic digital presence showcasing creative work and brand storytelling at its finest.",
  },
  {
    name: "E-Commerce Brand",
    category: "E-Commerce",
    image: "/shonenkits.png",
    url: "https://your-store.com",
    description:
      "A conversion-focused storefront built for customer engagement and seamless online sales.",
  },
];

export default function ClientShowcase() {
  return (
    <section id="work" className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-widest text-white/40">
            <span className="size-1.5 rounded-full bg-lime-400" />
            Selected Work
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="max-w-2xl font-[Syne] text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            Websites Built for{" "}
            <span className="text-lime-400">Real Businesses</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            A collection of digital experiences designed to build trust, elevate
            brands, and turn visitors into customers.
          </p>
        </motion.div>

        {/* COUNT BAR */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-14 mb-0 flex items-center gap-4"
        >
          <span className="font-[Syne] text-sm font-medium text-white/60">
            04 Projects
          </span>
          <div className="h-px flex-1 bg-white/[0.07]" />
          <span className="text-xs text-white/25 tracking-widest uppercase">
            2023–2025
          </span>
        </motion.div>

        {/* PROJECT GRID — flush 2x2 with 2px gap */}
        <div className="mt-0.5 grid gap-0.5 lg:grid-cols-2">
          {clients.map((client, index) => {
            const corners = [
              "rounded-tl-3xl",
              "rounded-tr-3xl",
              "rounded-bl-3xl",
              "rounded-br-3xl",
            ];
            return (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                viewport={{ once: true }}
              >
                <Link
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group block overflow-hidden bg-white/[0.03] transition-colors duration-400 hover:bg-white/[0.055] ${corners[index]}`}
                >
                  {/* IMAGE */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-[#09090b]/40 to-transparent transition-opacity duration-400 group-hover:opacity-70" />

                    {/* Category badge */}
                    <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[11px] uppercase tracking-widest text-white/55 backdrop-blur-sm">
                      {client.category}
                    </div>

                    {/* Index */}
                    <div className="absolute right-4 top-4 font-[Syne] text-[11px] font-semibold tracking-wide text-white/20">
                      {String(index + 1).padStart(2, "0")} / 04
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 md:p-7">
                    <h3 className="font-[Syne] text-xl font-semibold tracking-tight text-white transition-colors duration-300 group-hover:text-lime-400 md:text-2xl">
                      {client.name}
                    </h3>

                    <p className="mt-2 text-sm font-light leading-relaxed text-white/40">
                      {client.description}
                    </p>

                    <div className="mt-6 flex items-center justify-between">
                      <div className="flex items-center gap-2.5 text-xs font-medium uppercase tracking-widest text-lime-400 transition-all duration-300 group-hover:gap-3.5">
                        Visit Website
                        <span className="flex size-7 items-center justify-center rounded-full border border-lime-400/30 text-sm transition-all duration-300 group-hover:bg-lime-400 group-hover:text-[#09090b] group-hover:border-lime-400">
                          →
                        </span>
                      </div>
                      <div className="h-px w-8 bg-white/[0.07]" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}