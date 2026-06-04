"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function BookingSection() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();

      cal("ui", {
        theme: "dark",
        styles: {
          branding: {
            brandColor: "#A3E635",
          },
        },
      });
    })();
  }, []);

  return (
    <section
      id="contact"
      className="relative z-10 px-5 py-24 md:px-10 md:py-32"
    >
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
            Book a Call
          </div>
        </motion.div>

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-[Syne] text-[clamp(2.5rem,5vw,5rem)] font-bold leading-[1.0] tracking-tight">
            Ready to stop leaving
            <br />
            money on the{" "}
            <span className="text-lime-400">table?</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            Let's discuss how a conversion-focused website can help
            your business generate more leads and sales.
          </p>
        </motion.div>

        {/* CALENDAR */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="
            overflow-hidden
            rounded-[28px]
            border
            border-white/[0.07]
            bg-white/[0.02]
          "
        >
          <div
            className="
              w-full
              h-[820px]
              md:h-[950px]
              overflow-y-auto
              overscroll-contain
              touch-pan-y
            "
            style={{
              WebkitOverflowScrolling: "touch",
            }}
          >
            <Cal
              calLink="nived-gsm-gi1ag2/30-minute-discovery-call"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                overflow: "visible",
              }}
              config={{
                theme: "dark",
                layout: "month_view",
              }}
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}