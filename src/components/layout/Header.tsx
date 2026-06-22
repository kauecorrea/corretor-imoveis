"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/shared/Logo";

const navLinks = [
  { name: "Início", href: "#hero" },
  { name: "Sobre", href: "#about" },
  { name: "Imóveis", href: "#properties" },
  { name: "Diferenciais", href: "#differentials" },
  { name: "Depoimentos", href: "#testimonials" },
  { name: "Contato", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-40 transition-all duration-300 border-b border-transparent",
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200 py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" onClick={() => setMobileMenuOpen(false)}>
          <Logo variant={isScrolled ? "gold" : "light"} />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    isScrolled ? "text-foreground" : "text-white/90"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            className={cn(
              "px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300",
              isScrolled
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-white text-secondary hover:bg-gray-100"
            )}
          >
            Fale no WhatsApp
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className={cn(
            "md:hidden p-2 rounded-md",
            isScrolled ? "text-foreground" : "text-white"
          )}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-b border-gray-200 md:hidden flex flex-col py-4 px-4 animate-in slide-in-from-top-2">
          <ul className="flex flex-col gap-4 mb-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-foreground font-medium block py-2 border-b border-gray-100"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center px-5 py-3 rounded-full bg-primary text-white text-sm font-medium"
          >
            Fale no WhatsApp
          </Link>
        </div>
      )}
    </header>
  );
}
