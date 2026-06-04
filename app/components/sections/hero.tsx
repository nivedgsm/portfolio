"use client";

import { motion } from "framer-motion";
import BackgroundGrid from "../elements/background-grid";

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-screen">

      {/* GRID BACKGROUND */}
      <BackgroundGrid />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col justify-center px-6 pt-32 pb-24 md:px-16 lg:px-24 xl:px-32">

        {/* TOP TAG */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-12 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-[11px] uppercase tracking-widest text-white/40">
            <span className="size-1.5 rounded-full bg-lime-400" />
            Conversion Focused Websites
          </div>
        </motion.div>

        {/* HEADING — full width, no clamp */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <h1 className="font-[Syne] w-full text-[clamp(3rem,7.5vw,8rem)] font-bold leading-[1.0] tracking-tight">
            Websites That Convert
            <br />
            Visitors Into{" "}
            <span className="text-lime-400">Clients</span>
          </h1>
        </motion.div>

        {/* SUBTEXT + BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 flex flex-col items-start gap-6"
        >

          {/* SUBTEXT */}
          <p className="max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            Helped businesses generate over{" "}
            <span className="font-medium text-white">$2M+ in revenue</span>{" "}
            through conversion‑focused digital experiences.
          </p>

          {/* BUTTONS */}
          <div className="flex items-center gap-3">
  <button
    className="
      rounded-full
      border
      border-white/10
      bg-[#0A0A0A]
      px-5
      py-3
      text-sm
      text-white
      transition
      hover:bg-[#141414]

      md:px-15
      md:py-3.5
    "
  >
    View Work
  </button>

 <button
  data-cal-link="nived-gsm-gi1ag2/30-minute-discovery-call"
  data-cal-config='{"theme":"dark"}'
  className="
    green-glow
    rounded-full
    bg-lime-400
    px-5
    py-3
    text-sm
    font-semibold
    text-black
    transition
    hover:scale-105

    md:px-15
    md:py-3.5
  "
>
  Book a Call
</button>
</div>

        </motion.div>

      </div>

    </section>
  );
}