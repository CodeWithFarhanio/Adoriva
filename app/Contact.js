
"use client";

import { MessageCircle, ArrowUpRight, Clock, Gem } from "lucide-react";

export default function Contact() {
  const whatsappNumber = "918447954376";

  const message = encodeURIComponent(
    "Hi, I'm interested in your jewellery collection."
  );

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#e8ebee] px-6 py-24 text-[#24211c] md:py-32"
    >
        <div className="pointer-events-none absolute left-[25%] top-0 h-px w-1/2 bg-gradient-to-r from-transparent via-black/50 to-transparent" />
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.35em] text-[#5d6a7a]">
            We're Here for You
          </p>

          <h2 className="text-4xl font-light tracking-tight sm:text-5xl md:text-7xl">
            Let's Talk <span className="text-[#5d6a7a]">Jewellery.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-neutral-600 md:text-base">
            Found something you love? Have a question about a design?
            We'd be delighted to help you find the perfect piece.
          </p>
        </div>

        {/* Contact Card */}
        <div className="grid overflow-hidden border border-black/10 bg-white/60 md:grid-cols-2">

          {/* Left Side */}
          <div className="flex flex-col justify-center p-8 md:p-14">
            <Gem
              size={30}
              strokeWidth={1}
              className="mb-8 text-[#5d6a7a]"
            />

            <h3 className="text-2xl font-light md:text-3xl">
              Your next favourite piece starts here.
            </h3>

            <p className="mt-5 text-sm leading-7 text-neutral-600">
              Connect with us on WhatsApp for collection enquiries,
              product details, availability, and help choosing a piece
              that suits your style.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-3 bg-[#5d6a7a] px-6 py-4 text-sm border rounded-tr-2xl rounded-bl-2xl text-white transition duration-300 hover:bg-[#5d6a7a]"
            >
              <MessageCircle size={18} />
              Chat with Us
              <ArrowUpRight size={17} />
            </a>

            <p className="mt-4 text-xs text-neutral-500">
              WhatsApp will open with a ready-to-send message.
            </p>
          </div>

          {/* Right Side */}
          <div className="flex flex-col justify-center border-t border-black/10 bg-[#dfe5ee] p-8 md:border-l md:border-t-0 md:p-14">
            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-[#5d6a7a]">
              How to Get in Touch
            </p>

            <div className="space-y-8">
              <div className="flex gap-5">
                <span className="text-sm text-[#5d6a7a]">01</span>
                <div>
                  <h4 className="text-base">Tap the WhatsApp button</h4>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Start a conversation with our jewellery team directly.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="text-sm text-[#5d6a7a]">02</span>
                <div>
                  <h4 className="text-base">Tell us what you're looking for</h4>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Share a product name, screenshot, or the style you have in mind.
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <span className="text-sm text-[#5d6a7a]">03</span>
                <div>
                  <h4 className="text-base">Get personalised assistance</h4>
                  <p className="mt-2 text-sm leading-6 text-neutral-600">
                    Ask about pricing, availability, and any other product details.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 flex items-center gap-3 border-t border-black/10 pt-6 text-sm text-neutral-600">
              <Clock size={17} strokeWidth={1.5} />
              <span>Message us anytime; we'll reply as soon as possible.</span>
            </div>
          </div>
        </div>

        {/* Closing Line */}
        <p className="mt-10 text-center text-lg italic text-neutral-500">
          The perfect piece is worth a conversation.
        </p>
      </div>
    </section>
  );
}

