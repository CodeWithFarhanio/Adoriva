
"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const closeMenu = () => setIsOpen(false);

    return (
        <nav className="sticky top-0 z-50 w-full px-4  sm:mb-5 py-4 sm:px-6">
            <div className="relative flex items-center justify-center">

                {/* Thin line behind navbar */}
                <div className="absolute left-0 right-0 top-1/2 h-px bg-black/20" />

                {/* Navbar */}
                <div className="relative z-10 mx-auto flex min-h-12 w-full max-w-3xl items-center justify-between rounded-2xl bg-[#5d6a7a] px-4 py-3 shadow-sm backdrop-blur-md sm:px-6">

                    {/* Logo */}
                    <a
                        href="#home"
                        onClick={closeMenu}
                        className="shrink-0 text-[18px] font-extralight tracking-tight text-white sm:text-xl"
                    >
                        𝐴𝑑𝑜𝑟𝑖𝑣𝑎
                    </a>

                    {/* Desktop Navigation */}
                    <ul className="hidden items-center gap-5 px-4 text-sm font-medium text-zinc-800 md:flex lg:gap-7">
                        <li>
                            <a href="#home" className="transition-colors hover:text-white">
                                Home
                            </a>
                        </li>

                        <li>
                            <a href="#collections" className="transition-colors hover:text-white">
                                Collections
                            </a>
                        </li>

                        <li>
                            <a href="#about" className="transition-colors hover:text-white">
                                About
                            </a>
                        </li>

                        <li>
                            <a href="#contact" className="transition-colors hover:text-white">
                                Contact
                            </a>
                        </li>
                    </ul>

                    {/* Desktop CTA */}
                    <a
                        href="#contact"
                        className="hidden shrink-0 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-white/20 md:inline-flex"
                    >
                        Let's Talk ↗
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                        aria-expanded={isOpen}
                        className="flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 md:hidden"
                    >
                        {isOpen ? <X size={21} /> : <Menu size={21} />}
                    </button>
                </div>
            </div>

            {/* Mobile Dropdown */}
            {isOpen && (
                <div className="absolute left-4 right-4 top-full z-50 mt-2 rounded-2xl border border-white/10 bg-[#5d6a7a] p-4 shadow-xl sm:left-6 sm:right-6 md:hidden">
                    <ul className="flex flex-col gap-1 text-sm font-medium text-white">
                        <li>
                            <a
                                href="#home"
                                onClick={closeMenu}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                Home
                            </a>
                        </li>

                        <li>
                            <a
                                href="#collections"
                                onClick={closeMenu}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                Collections
                            </a>
                        </li>

                        <li>
                            <a
                                href="#about"
                                onClick={closeMenu}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                About
                            </a>
                        </li>

                        <li>
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="block rounded-xl px-4 py-3 transition-colors hover:bg-white/10"
                            >
                                Contact
                            </a>
                        </li>

                        <li className="pt-2">
                            <a
                                href="#contact"
                                onClick={closeMenu}
                                className="flex items-center justify-center rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#5d6a7a] transition-transform hover:scale-[1.02]"
                            >
                                Let's Talk ↗
                            </a>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
