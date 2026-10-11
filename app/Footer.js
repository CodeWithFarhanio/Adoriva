
"use client";


import { Camera, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const whatsappNumber = "918447954376";

  return (
    <footer className="bg-[#5d6a7a] text-[#f5efe5]">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-8 md:px-12">

        {/* Top Section */}
        <div className="grid gap-12 border-b border-white/70 pb-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="text-4xl tracking-wide md:text-5xl">
              𝐴𝑑𝑜𝑟𝑖𝑣𝑎
            </h2>

            <p className="mt-5 max-w-sm text-sm leading-7 text-white/70">
              Timeless elegance, crafted to make every moment
              unforgettable. Discover jewellery that reflects
              your unique story.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                "Hi, I'm interested in your jewellery collection."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex rounded-tr-2xl rounded-bl-2xl items-center gap-3 border border-white/70 px-5 py-3 text-sm transition hover:border-[#25211d] hover:text-[#25211d]"
            >
              <MessageCircle size={17} />
              Contact on WhatsApp
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-xs tracking-[0.25em] text-[#25211d]">
              EXPLORE
            </h3>

            <ul className="space-y-4 text-sm text-white/70">
              <li><a href="#home" className="transition hover:text-[#25211d]">Home</a></li>
              <li><a href="#collections" className="transition hover:text-[#25211d]">Collections</a></li>
              <li><a href="#about" className="transition hover:text-[#25211d]">About Us</a></li>
              <li><a href="#contact" className="transition hover:text-[#25211d]">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="mb-5 text-xs tracking-[0.25em] text-[#25211d]">
              FOLLOW US
            </h3>

            <a
              href="https://www.instagram.com/adoriva.store/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-sm text-white/70 transition hover:text-[#25211d]"
            >
              <Camera size={22} />
              Instagram
              <ArrowUpRight size={14} />
            </a>

            <p className="mt-5 text-sm leading-6 text-white/70">
              Follow us for the latest designs,
              new arrivals and inspiration.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ADORIVA. All rights reserved.
          </p>

          <p className="tracking-widest">
            TIMELESS BY DESIGN.
          </p>

          <a
            href="#home"
            className="transition hover:text-[#25211d]"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
