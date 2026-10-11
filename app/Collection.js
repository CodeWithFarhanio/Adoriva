
"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const collections = [
    {
        name: "Rings",
        image: "/ring.jpg",
        products: [
            "/ring-1.jpg",
            "/ring-2.jpg",
            "/ring-3.jpg",
            "/ring-4.jpg",
        ],
    },
    {
        name: "Pandents",
        image: "/pandent.jpg",
        products: [
            "/pandent-1.jpg",
            "/pandent-2.jpg",
            "/pandent-3.jpg",
            "/pandent-4.jpg",
        ],
    },
    {
        name: "Necklaces",
        image: "/necklace.jpg",
        products: [
            "/necklace-1.jpg",
            "/necklace-2.jpg",
            "/necklace-3.jpg",
            "/necklace-4.jpg",
        ],
    },
    {
        name: "Earrings",
        image: "/earring.jpg",
        products: [
            "/earring-1.jpg",
            "/earring-2.jpg",
            "/earring-3.jpg",
            "/earring-4.jpg",
        ],
    },
];

const Collection = () => {
    const [selectedCollection, setSelectedCollection] = useState(null);

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
    };

    return (
        <section
            id="collections"
            className="relative min-h-screen overflow-hidden bg-[#e8ebee] px-4 py-16 sm:px-8 sm:py-20 lg:px-20 lg:py-24"
        >
            {/* TOP LINE */}
            <div className="pointer-events-none absolute left-[15%] top-0 h-px w-[70%] bg-gradient-to-r from-transparent via-black/50 to-transparent sm:left-[25%] sm:w-1/2" />

            <div className="mx-auto max-w-7xl">
                {/* HEADER */}
                <AnimatePresence mode="wait">
                    {!selectedCollection ? (
                        <motion.div
                            key="collection-header"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="mb-6 flex items-center gap-4 sm:mb-8">
                                <span className="text-[10px] tracking-[0.4em] text-[#5d6a7a] sm:text-xs">
                                    Explore
                                </span>

                                <span className="h-px w-12 bg-[#5d6a7a] sm:w-16" />
                            </div>

                            <h2 className="text-4xl font-light leading-[1.1] tracking-tight text-[#25211d] sm:text-6xl md:text-7xl">
                                Our{" "}
                                <span className="text-[#5d6a7a]">
                                    Collections
                                </span>
                            </h2>

                            <p className="mt-5 max-w-lg text-sm leading-7 text-[#25211d] sm:mt-6 sm:text-base">
                                Discover carefully crafted pieces designed to bring
                                timeless elegance to every moment.
                            </p>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="products-header"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <button
                                onClick={() => setSelectedCollection(null)}
                                className="mb-6 cursor-pointer text-xs uppercase tracking-[0.2em] text-[#5d6a7a] transition hover:text-[#25211d] sm:mb-7"
                            >
                                ← Back to Collections
                            </button>

                            <p className="mb-2 text-xs uppercase tracking-[0.35em] text-[#25211d] sm:text-sm">
                                Collection
                            </p>

                            <h2 className="text-4xl font-light tracking-tight text-[#5d6a7a] sm:text-6xl lg:text-7xl">
                                {selectedCollection.name}
                            </h2>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* CATEGORY CARDS */}
                <AnimatePresence mode="wait">
                    {!selectedCollection && (
                        <motion.div
                            key="categories"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.5 }}
                            className="relative mx-auto mt-10 w-full max-w-4xl sm:mt-14"
                        >
                            {/* GRID BEHIND CARDS */}
                            <div
                                className="
                  pointer-events-none absolute
                  -inset-x-3 -inset-y-8
                  z-0
                  bg-[linear-gradient(rgb(0_0_0_/_20%)_1px,transparent_1px),linear-gradient(90deg,rgb(0_0_0_/_20%)_1px,transparent_1px)]
                  bg-[size:60px_60px]
                  sm:-inset-x-10 sm:-inset-y-12
                  sm:bg-[size:80px_80px]
                  [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]
                  [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]
                "
                            />

                            {/* STAGGERED GRID */}
                            <div className="relative z-10 flex flex-col gap-3 sm:gap-5">
                                {/* TOP ROW */}
                                <div className="grid grid-cols-2 gap-3 sm:ml-[8%] sm:gap-5">
                                    {collections.slice(0, 2).map((collection, index) => (
                                        <motion.button
                                            key={collection.name}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                delay: index * 0.1,
                                                duration: 0.5,
                                            }}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedCollection(collection)}
                                            className="group relative aspect-[4/5] w-full overflow-hidden text-left sm:aspect-[0.93/1] md:aspect-[0.95/1]"
                                        >
                                            <Image
                                                src={collection.image}
                                                alt={collection.name}
                                                fill
                                                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 40vw, 35vw"
                                                quality={80}
                                                draggable={false}

                                                className="pointer-events-none select-none object-cover transition duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                                            <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5 md:p-6">
                                                <h3 className="text-xl font-light sm:text-3xl md:text-4xl">
                                                    {collection.name}
                                                </h3>

                                                <p className="mt-2 hidden text-[10px] uppercase tracking-[0.2em] text-white/80 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block sm:translate-y-2 sm:opacity-0 sm:text-xs">
                                                    Explore Collection →
                                                </p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>

                                {/* BOTTOM ROW */}
                                <div className="grid grid-cols-2 gap-3 sm:gap-5">
                                    {collections.slice(2, 4).map((collection, index) => (
                                        <motion.button
                                            key={collection.name}
                                            variants={cardVariants}
                                            initial="hidden"
                                            animate="visible"
                                            transition={{
                                                delay: (index + 2) * 0.1,
                                                duration: 0.5,
                                            }}
                                            whileHover={{ y: -5 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setSelectedCollection(collection)}
                                            className="group relative aspect-[4/5] w-full overflow-hidden text-left sm:aspect-[0.93/1] md:aspect-[0.95/1]"
                                        >
                                            <Image
                                                src={collection.image}
                                                alt={collection.name}
                                                fill
                                                sizes="(max-width: 639px) 50vw, (max-width: 1023px) 40vw, 35vw"
                                                quality={80}
                                                draggable={false}

                                                className="pointer-events-none select-none object-cover transition duration-700 group-hover:scale-105"
                                            />

                                            <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

                                            <div className="absolute inset-x-0 bottom-0 p-3 text-white sm:p-5 md:p-6">
                                                <h3 className="text-xl font-light sm:text-3xl md:text-4xl">
                                                    {collection.name}
                                                </h3>

                                                <p className="mt-2 hidden text-[10px] uppercase tracking-[0.2em] text-white/80 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100 sm:block sm:translate-y-2 sm:opacity-0 sm:text-xs">
                                                    Explore Collection →
                                                </p>
                                            </div>
                                        </motion.button>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}

                    {/* PRODUCTS */}
                    {selectedCollection && (
                        <motion.div
                            key="products"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -25 }}
                            transition={{ duration: 0.5 }}
                            className="relative isolate mt-8 grid grid-cols-2 gap-3 sm:mt-10 sm:gap-5 lg:grid-cols-4"
                        >
                            {/* GRID BEHIND PRODUCTS */}
                            <div
                                className="
                  pointer-events-none absolute
                  -inset-x-3 -inset-y-8
                  z-0
                  bg-[linear-gradient(rgb(0_0_0_/_20%)_1px,transparent_1px),linear-gradient(90deg,rgb(0_0_0_/_20%)_1px,transparent_1px)]
                  bg-[size:60px_60px]
                  sm:-inset-x-10 sm:-inset-y-12
                  sm:bg-[size:80px_80px]
                  [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]
                  [-webkit-mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_85%)]
                "
                            />

                            {selectedCollection.products.map((image, index) => (
                                <motion.div
                                    key={image}
                                    initial={{ opacity: 0, y: 25 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        delay: index * 0.1,
                                        duration: 0.5,
                                    }}
                                    whileHover={{ y: -5 }}
                                    className="group relative z-10 min-w-0 overflow-hidden"
                                >
                                    <div className="relative aspect-[3/4] overflow-hidden bg-[#c5c5c5]">
                                        <Image
                                            src={image}
                                            alt={`${selectedCollection.name} ${index + 1}`}
                                            fill
                                            sizes="(max-width: 639px) 50vw, (max-width: 1023px) 33vw, 25vw"
                                            quality={80}
                                            draggable={false}
                                            className="object-cover transition duration-700 group-hover:scale-105"
                                        />
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default Collection;
