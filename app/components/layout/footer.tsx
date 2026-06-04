"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const menuItems = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[0.06] px-6 py-20 md:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl">

        {/* TOP */}
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:items-start">

          {/* LEFT */}
          <div className="flex gap-16">

            {/* MENU */}
            <div>
              <p className="mb-5 text-[11px] uppercase tracking-widest text-white/25">
                Menu
              </p>

              <div className="space-y-3">
                {menuItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="
                      block
                      text-sm
                      text-white/60
                      transition
                      hover:text-lime-400
                    "
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

    
            {/* CONNECT */}
<div>
  <p className="mb-5 text-[11px] uppercase tracking-widest text-white/25">
    Connect
  </p>

  <div className="space-y-3">

    <a
      href="https://wa.me/8075634068"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        text-sm
        text-white/60
        transition
        hover:text-lime-400
      "
    >
      WhatsApp
    </a>

    <a
      href="mailto:nivedgsm@gmail.com"
      className="
        block
        text-sm
        text-white/60
        transition
        hover:text-lime-400
      "
    >
      Mail
    </a>
 <a
      href="https://www.linkedin.com/in/nived-v-b-86b847409/"
      target="_blank"
      rel="noopener noreferrer"
      className="
        block
        text-sm
        text-white/60
        transition
        hover:text-lime-400
      "
    >
      LinkedIn
    </a>
  </div>
</div>

          </div>

          {/* RIGHT CTA */}
          <div className="max-w-lg">

            <h2 className="font-[Syne] text-[clamp(2rem,4vw,3.5rem)] font-bold leading-[1.05] tracking-tight">
              Ready to turn visitors
              <br />
              into{" "}
              <span className="text-lime-400">
                customers?
              </span>
            </h2>

            <button
              data-cal-link="nived-gsm-gi1ag2/30-minute-discovery-call"
              data-cal-config='{"theme":"dark"}'
              className="
                green-glow
                mt-6
                inline-flex
                items-center
                gap-2
                rounded-full
                bg-lime-400
                px-7
                py-3.5
                text-sm
                font-medium
                text-black
                transition
                hover:scale-105
              "
            >
              Book a Free Call
              <span>→</span>
            </button>

          </div>

        </div>

        {/* DIVIDER */}
        <div className="my-16 h-px bg-white/[0.06]" />

        {/* WORDMARK */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >

          {/* OUTLINE */}
          <h1
            className="
              font-[Syne]
              select-none
              text-center
              text-[clamp(5rem,18vw,16rem)]
              font-bold
              leading-none
              tracking-tight
              text-transparent
            "
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.05)",
            }}
          >
            Nived
          </h1>

          {/* FILL */}
          <h1
            className="
              absolute
              inset-0
              text-center
              font-[Syne]
              text-[clamp(5rem,18vw,16rem)]
              font-bold
              leading-none
              tracking-tight
              text-white/[0.12]
            "
          >
            Nived
          </h1>

        </motion.div>

        {/* BOTTOM */}
        <div
          className="
            mt-8
            flex
            flex-col
            items-start
            justify-between
            gap-3
            border-t
            border-white/[0.06]
            pt-8
            text-[11px]
            uppercase
            tracking-widest
            text-white/25
            md:flex-row
            md:items-center
          "
        >
          <p>© 2026 · All Rights Reserved.</p>

          <p>
            Designed & Developed by Nived
          </p>
        </div>

      </div>
    </footer>
  );
}