"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";

const images = [
  "/pandent.jpg",
  "/ring.jpg",
  "/necklace.jpg",
  "/earring.jpg",
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#e8ebee] px-5 py-12 sm:px-8 sm:py-16 md:px-12 lg:min-h-[80vh] lg:px-20 lg:py-16"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 lg:min-h-[65vh] lg:flex-row lg:gap-8">
        {/* LEFT — TEXT */}
        <div className="flex w-full items-center lg:w-1/2">
          <motion.div
            initial={{ x: -60, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="w-full max-w-xl"
          >
            <div className="mb-6 flex items-center gap-4 sm:mb-8">
              <span className="text-[10px] tracking-[0.4em] text-[#5d6a7a] sm:text-xs">
                Elegance
              </span>

              <span className="h-px w-12 bg-[#5d6a7a] sm:w-16" />
            </div>

            <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-[#5d6a7a] sm:text-6xl md:text-7xl lg:text-8xl">
              Jewelry
              <br />
              <span className="text-5xl text-[#25211d] sm:text-5xl md:text-6xl lg:text-7xl">
                That speaks
              </span>
            </h1>

            <p className="mt-5 max-w-md text-sm leading-7 text-[#25211d] sm:mt-6 sm:text-base">
              Discover beautifully crafted pieces designed to make
              every moment unforgettable.
            </p>

            <motion.a
              href="#collections"
              whileTap={{ scale: 0.97 }}
              className="mt-7 inline-flex items-center justify-center rounded-tr-2xl rounded-bl-2xl border border-[#5d6a7a] px-5 py-3.5 text-[10px] uppercase tracking-[0.2em] text-[#5d6a7a] transition-colors hover:bg-[#5d6a7a] hover:text-white sm:mt-8 sm:px-6 sm:py-4 sm:text-xs"
            >
              Explore Collection
            </motion.a>
          </motion.div>
        </div>

        {/* RIGHT — OPTIMIZED IMAGE SLIDER */}
        <motion.div
          initial={{ x: 60, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{
            delay: 0.3,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex w-full items-center justify-center lg:w-1/2"
        >
          <div className="relative h-[260px] w-full max-w-[320px] overflow-hidden rounded-tr-4xl rounded-bl-4xl sm:h-[340px] sm:max-w-[380px] md:h-[400px] md:max-w-[420px] lg:h-[420px] lg:max-w-[360px] xl:h-[460px] xl:max-w-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentImage]}
                  alt="ADORIVA jewellery collection"
                  fill
                  priority={currentImage === 0}
                  sizes="(max-width: 639px) 320px, (max-width: 767px) 380px, (max-width: 1023px) 420px, (max-width: 1279px) 360px, 400px"
                  quality={75}
                  draggable={false}
                  className="pointer-events-none object-cover select-none"
                  style={{
                    WebkitMaskImage:
                      "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                    maskImage:
                      "radial-gradient(ellipse at center, black 55%, transparent 100%)",
                    WebkitUserSelect: "none",
                    userSelect: "none",
                  }}
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;