"use client";

import React from "react";
import { motion } from "framer-motion";
import { UserCheck, Map, ShieldCheck, Lightbulb } from "lucide-react";

const differentials = [
  {
    icon: <UserCheck className="w-8 h-8 stroke-[1.5] text-primary" />,
    title: "Atendimento Personalizado",
    description: "Cada cliente é único. Entendo suas necessidades em profundidade para apresentar apenas os imóveis que realmente fazem sentido para seu estilo de vida."
  },
  {
    icon: <Map className="w-8 h-8 stroke-[1.5] text-primary" />,
    title: "Conhecimento do Mercado Local",
    description: "Atuação focada e especializada em Belém e Região Metropolitana, garantindo acesso às melhores oportunidades e lançamentos da região."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 stroke-[1.5] text-primary" />,
    title: "Transparência Total",
    description: "Acompanhamento jurídico e clareza em todas as etapas do processo, proporcionando total segurança na compra, venda ou locação do seu imóvel."
  },
  {
    icon: <Lightbulb className="w-8 h-8 stroke-[1.5] text-primary" />,
    title: "Orientação Estratégica",
    description: "Não apenas apresento imóveis, mas ofereço consultoria imobiliária completa, auxiliando você a fazer o melhor investimento patrimonial."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

export function Differentials() {
  return (
    <section id="differentials" className="py-24 bg-accent/30">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-[1px] w-8 bg-primary"></span>
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Por que me escolher</span>
            <span className="h-[1px] w-8 bg-primary"></span>
          </div>
          <h2 className="text-3xl md:text-5xl font-heading mb-6">
            Diferenciais que transformam a experiência
          </h2>
          <p className="text-foreground/70">
            Trabalhar com a corretora certa faz toda a diferença. Meu compromisso é tornar a sua jornada imobiliária o mais fluida, segura e satisfatória possível.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {differentials.map((diff, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              className="bg-white p-8 border border-gray-100 hover:border-primary/30 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] group"
            >
              <div className="w-14 h-14 rounded-full bg-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {diff.icon}
              </div>
              <h3 className="font-heading text-xl mb-3">{diff.title}</h3>
              <p className="text-sm text-foreground/70 leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
