"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center pt-24 pb-12 overflow-hidden bg-secondary text-white"
    >
      {/* Texture / Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-brand-wine to-brand-wine-dark opacity-90 z-0"></div>
      
      {/* Animated Subtle Pattern / Logo Mark */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2 }}
        className="absolute -right-[10%] top-[10%] w-[60%] aspect-square pointer-events-none z-0"
      >
        <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full stroke-primary">
          <path d="M10 35V10H16V35M16 35V20H24V35M24 35V25H30V35" strokeWidth="0.5" />
          <line x1="5" y1="35" x2="35" y2="35" strokeWidth="0.5" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              CRECI 12194
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading leading-tight mb-6">
              Encontre o imóvel ideal em Belém com quem entende do assunto.
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light mb-10 max-w-2xl leading-relaxed">
              Atendimento exclusivo e personalizado no mercado de alto padrão. Encontre a propriedade perfeita para você ou faça o melhor negócio na venda do seu imóvel.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="#properties"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 group"
              >
                Ver imóveis disponíveis
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link 
                href="#contact"
                className="inline-flex items-center justify-center px-8 py-4 rounded-none border border-white/30 text-white font-medium hover:bg-white/10 transition-all duration-300"
              >
                Falar no WhatsApp
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center text-white/50 hover:text-white transition-colors cursor-pointer z-10"
      >
        <span className="text-[10px] uppercase tracking-widest mb-2">Role para descobrir</span>
        <ChevronDown className="w-5 h-5 animate-bounce" />
      </motion.div>
    </section>
  );
}
