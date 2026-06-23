"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MapPin, Award, CheckCircle } from "lucide-react";
import daniellePhoto from "../../../public/placeholder-danielle.jpg";

export function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Image Column */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/5] max-w-md mx-auto">
              <div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4"></div>
              <div className="absolute inset-0 bg-gray-100 overflow-hidden">
                <Image 
                  src={daniellePhoto} 
                  alt="Danielle Corrêa - Corretora de Imóveis"
                  fill
                  className="object-cover transition-all duration-700"
                />
              </div>
              
              {/* Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 shadow-xl border border-gray-100 max-w-[200px]">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="text-primary w-8 h-8" />
                  <span className="font-heading text-2xl font-semibold">5+</span>
                </div>
                <p className="text-sm text-foreground/70 font-medium">Anos de experiência no mercado imobiliário</p>
              </div>
            </div>
          </motion.div>

          {/* Text Column */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <div className="mb-2 flex items-center gap-4">
              <span className="h-[1px] w-12 bg-primary"></span>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Sobre Mim</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading mb-8 leading-tight">
              Sua parceira de confiança no mercado de alto padrão
            </h2>
            
            <div className="space-y-6 text-foreground/80 leading-relaxed font-light mb-10">
              <p>
                Sou <strong className="text-foreground font-medium">Danielle Corrêa</strong>, corretora de imóveis apaixonada por conectar pessoas aos seus lares ideais e investidores às melhores oportunidades em Belém e região.
              </p>
              <p>
                Acredito que a compra ou venda de um imóvel não é apenas uma transação financeira, mas a realização de um projeto de vida. Por isso, meu foco é oferecer um atendimento altamente personalizado, baseado na ética, transparência e em um profundo conhecimento do mercado local.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="flex items-start gap-3">
                <MapPin className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Área de Atuação</h4>
                  <p className="text-sm text-foreground/70">Belém e região metropolitana.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Especialidade</h4>
                  <p className="text-sm text-foreground/70">Alto padrão, condomínios fechados e lançamentos.</p>
                </div>
              </div>
            </div>

            <div className="inline-block border-l-2 border-primary pl-6 py-2">
              <p className="font-heading text-xl italic text-foreground/90">
                "O imóvel ideal está a um passo de você. Minha missão é guiar você até ele."
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
