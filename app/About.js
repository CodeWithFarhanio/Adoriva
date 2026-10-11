
"use client";

import { Diamond, ShieldCheck, Truck, Heart } from "lucide-react";
import { motion } from "framer-motion";
export default function About() {
  return (
    <section id="about" className="relative overflow-hidden bg-[#e8ebee] text-black">
      <div className="pointer-events-none absolute left-[25%] top-10 h-px w-1/2 bg-gradient-to-r from-transparent via-black/50 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 py-28 sm:px-10 lg:px-20">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)] bg-[size:90px_90px] opacity-[0.08] [mask-image:linear-gradient(to_bottom,black,transparent_80%)]" />

        <div className="relative max-w-4xl">
          <div className="mb-8 flex items-center gap-4">
            <span className="text-xs tracking-[0.4em] text-[#5d6a7a]">
              ABOUT Adoriva
            </span>
            <span className="h-px w-16 bg-[#5d6a7a]" />
          </div>

          <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-[#25211d] sm:text-7xl">
            Jewellery that
            <br />
            <span className="text-[#5d6a7a]">Tells your story.</span>
          </h1>

          <p className="mt-9 max-w-2xl text-sm leading-7 text-[#25211d] sm:text-base sm:leading-7">
            At Adoriva, we believe jewellery should feel personal. Every piece
            is designed to complement your style, celebrate your moments, and
            become part of the stories you carry with you.
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-[#25211d] sm:text-base sm:leading-7">
            From subtle everyday pieces to timeless statement designs, we focus
            on elegance, detail, and quality, creating jewellery made to stay
            with you.
          </p>
        </div>

        <div className="relative mt-24 grid border-y border-black/30 sm:grid-cols-2 lg:grid-cols-4">
          <Feature
            icon={<Diamond size={23} strokeWidth={1.2} />}
            number="01"
            title="Premium Quality"
            subtitle="Crafted with attention to every detail."
          />
          <Feature
            icon={<ShieldCheck size={23} strokeWidth={1.2} />}
            number="02"
            title="Trusted"
            subtitle="A smooth and secure shopping experience."
          />
          <Feature
            icon={<Truck size={23} strokeWidth={1.2} />}
            number="03"
            title="Fast Delivery"
            subtitle="Carefully packed and safely delivered."
          />
          <Feature
            icon={<Heart size={23} strokeWidth={1.2} />}
            number="04"
            title="Made For You"
            subtitle="Pieces chosen to match your individuality."
          />
        </div>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-28 text-center">
        <p className="text-xs tracking-[0.4em] text-[#25211d]">
          DISCOVER YOUR STYLE
        </p>

        <h2 className="mt-6 text-4xl font-light leading-tight text-[#25211d] sm:text-5xl md:text-6xl">
          Find something
          <span className="text-[#5d6a7a]"> made for you.</span>
        </h2>

        <p className="mx-auto mt-6 max-w-lg text-sm leading-5 text-[#25211d]">
          Explore pieces designed to become part of your everyday moments and
          your most memorable ones.
        </p>

        <motion.a
              href="#collections"
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex items-center justify-center rounded-tr-2xl rounded-bl-2xl border border-[#5d6a7a] px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#5d6a7a] transition-colors hover:bg-[#5d6a7a] hover:text-white sm:mt-8 sm:px-6 sm:py-4 sm:text-xs"
            >
              Explore Collection
            </motion.a>
      </div>
    </section>
    
  );
  
}

function Feature({ icon, number, title, subtitle }) {
  return (
    <div className="group border-b border-black/20 px-5 py-8 sm:px-7 lg:border-b-0 lg:border-r lg:last:border-r-0 bg-[#dfe5ee]">
      <div className="flex items-start justify-between">
        <div className="text-[#5d6a7a] transition-transform duration-300 group-hover:-translate-y-1">
          {icon}
        </div>

        <span className="text-[10px] tracking-[0.2em] text-[#25211d]">
          {number}
        </span>
      </div>

      <h3 className="mt-6 text-sm text-[#25211d]">{title}</h3>

      <p className="mt-2 max-w-[190px] text-xs leading-5 text-[#25211d]">
        {subtitle}
      </p>
    </div>
  );


}
