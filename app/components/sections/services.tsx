"use client";

import { motion } from "framer-motion";
import { Rocket, ShoppingCart, Check, Calendar } from "lucide-react";

const services = [
  {
    icon: Rocket,
    title: "Landing Pages",
    description:
      "High-converting landing pages for product launches, campaigns, and lead generation.",
    booking: "nived-gsm-gi1ag2/landing-page",
    features: [
      "Strategy & discovery",
      "Conversion copywriting",
      "Mobile-optimized design",
      "Analytics setup",
    ],
  },
  {
    icon: ShoppingCart,
    title: "Websites & E-Commerce",
    description:
      "Complete websites and online stores designed to convert visitors into customers.",
    booking: "nived-gsm-gi1ag2/business-website",
    features: [
      "Strategy & discovery",
      "Up to 6 pages",
      "Custom development",
      "Performance optimized",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className="relative z-10 px-6 py-24 md:px-12 lg:px-16 md:py-32">
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
            Services
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
            <span className="text-lime-400">
              Plans
            </span>
          </h2>

          <p className="mt-5 max-w-lg text-sm font-light leading-relaxed text-white/40 md:text-base">
            Conversion-focused websites designed to help your business
            stand out, build trust, and generate more customers.
          </p>
        </motion.div>

        {/* CARDS */}
        <div className="grid gap-4 lg:grid-cols-2">

          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[28px]
                  border
                  border-white/[0.07]
                  bg-white/[0.02]
                  p-8
                  transition-all
                  duration-500
                  hover:border-lime-400/20
                "
              >

                {/* HOVER GLOW */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -right-16
                    -top-16
                    h-48
                    w-48
                    rounded-full
                    bg-lime-400/[0.04]
                    blur-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                />

                {/* TOP */}
                <div className="mb-7 flex items-center gap-4">

                  <div
                    className="
                      flex
                      h-14
                      w-14
                      items-center
                      justify-center
                      rounded-2xl
                      border
                      border-white/[0.07]
                      bg-white/[0.03]
                    "
                  >
                    <Icon
                      size={26}
                      className="text-lime-400"
                    />
                  </div>

                  <h3 className="font-[Syne] text-2xl font-bold">
                    {service.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <p className="mb-8 text-sm font-light leading-relaxed text-white/40 md:text-base">
                  {service.description}
                </p>

                {/* DIVIDER */}
                <div className="mb-7 h-px bg-white/[0.06]" />

                {/* FEATURES */}
                <div className="mb-8 space-y-3.5">

                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3"
                    >

                      <div
                        className="
                          flex
                          h-5
                          w-5
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          border
                          border-lime-400/40
                        "
                      >
                        <Check
                          size={11}
                          className="text-lime-400"
                        />
                      </div>

                      <span className="text-sm text-white/70">
                        {feature}
                      </span>

                    </div>
                  ))}

                </div>

                {/* BUTTON */}
                <button
                  data-cal-link={service.booking}
                  data-cal-config='{"theme":"dark"}'
                  className="
                    w-full
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.025]
                    py-3.5
                    text-sm
                    font-medium
                    text-white
                    transition-all
                    duration-300
                    hover:border-lime-400/30
                    hover:text-lime-400
                  "
                >
                  Book a Call →
                </button>

              </motion.div>
            );
          })}

        </div>

        {/* CTA STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-6"
        >

          <div
            className="
              flex
              flex-col
              items-start
              justify-between
              gap-6
              rounded-[28px]
              border
              border-white/[0.07]
              bg-white/[0.02]
              p-8
              md:flex-row
              md:items-center
            "
          >

            {/* LEFT */}
            <div className="flex items-center gap-5">

              <div
                className="
                  flex
                  h-12
                  w-12
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/[0.07]
                  bg-white/[0.03]
                "
              >
                <Calendar
                  size={22}
                  className="text-lime-400"
                />
              </div>

              <div>
                <h3 className="font-[Syne] text-lg font-bold">
                  Not sure which option is right for you?
                </h3>

                <p className="mt-1 text-sm font-light text-white/40">
                  Book a free 30-minute discovery call — I'll recommend
                  the best solution for your business.
                </p>
              </div>

            </div>

            {/* BUTTON */}
            <button
              data-cal-link="nived-gsm-gi1ag2/30-minute-discovery-call"
              data-cal-config='{"theme":"dark"}'
              className="
                green-glow
                shrink-0
                rounded-full
                bg-lime-400
                px-7
                py-3.5
                text-sm
                font-semibold
                text-black
                transition
                hover:scale-105
              "
            >
              Book Discovery Call →
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}