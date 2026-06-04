"use client";

import { motion } from "framer-motion";

const stats = [
  { index: "01", value: "$2M+", label: "Revenue generated through digital experiences" },
  { index: "02", value: "20+",  label: "Premium websites delivered" },
  { index: "03", value: "10+",  label: "Performance-focused builds" },
  { index: "04", value: "100%", label: "Responsive across all devices" },
];

const tags = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"];

export default function AboutSection() {
  return (
    <section className="relative z-10 px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-7xl">

        {/* TOP LABEL */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-widest text-white/40">
            <span className="size-1.5 rounded-full bg-lime-400" />
            About Me
          </div>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="font-[Syne] text-5xl font-bold leading-[1.06] tracking-tight md:text-6xl">
              Building Websites
              <br />
              That Drive
              <br />
              <span className="text-lime-400">Real Growth</span>
            </h2>

            <p className="mt-6 max-w-md text-sm font-light leading-relaxed text-white/45 md:text-base">
              I design and build modern digital experiences focused on
              helping businesses stand out, build credibility, and
              convert more visitors into clients.
            </p>

            <p className="mt-4 max-w-md text-sm font-light leading-relaxed text-white/45 md:text-base">
              From aviation brands to luxury services, I've contributed
              to websites associated with over{" "}
              <span className="font-medium text-white">
                $2M+ in generated revenue.
              </span>
            </p>

            {/* DIVIDER */}
            <div className="my-7 h-px w-10 bg-white/10" />

            {/* TECH TAGS */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3.5 py-1.5 text-[11px] uppercase tracking-wider text-white/35"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* GLOW */}
            <div className="absolute inset-0 rounded-[48px] bg-lime-400/[0.06] blur-3xl" />

            {/* OUTER CARD */}
            <div className="relative overflow-hidden rounded-[32px] border border-white/[0.07] bg-white/[0.025] p-1.5">

              {/* CARD HEADER */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-6 py-5">
                <span className="font-[Syne] text-[11px] uppercase tracking-widest text-white/20">
                  Performance Metrics
                </span>
                <span className="size-1.5 rounded-full bg-lime-400/50" />
              </div>

              {/* STATS GRID */}
              <div className="grid grid-cols-2 gap-1.5 p-1.5">
                {stats.map((stat) => (
                  <div
                    key={stat.index}
                    className="
                      group relative overflow-hidden rounded-[22px]
                      border border-white/[0.06] bg-black/35 p-6
                      transition-colors duration-300
                      hover:border-lime-400/15 hover:bg-black/50
                    "
                  >
                    <span className="mb-4 block font-[Syne] text-[10px] uppercase tracking-widest text-white/15">
                      {stat.index}
                    </span>
                    <div className="font-[Syne] text-[42px] font-bold leading-none tracking-tight text-lime-400">
                      {stat.value}
                    </div>
                    <p className="mt-2.5 text-xs font-light leading-relaxed text-white/35">
                      {stat.label}
                    </p>
                    {/* hover accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-lime-400/0 transition-colors duration-400 group-hover:bg-lime-400/25" />
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}