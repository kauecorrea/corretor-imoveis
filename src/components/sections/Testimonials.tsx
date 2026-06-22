"use client";

import React, { useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/mock-data";

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  return (
    <section id="testimonials" className="py-24 bg-accent/30 relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Depoimentos</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading mb-4">
              A palavra de quem confia
            </h2>
            <p className="text-foreground/70">
              Histórias reais de clientes que encontraram o imóvel ideal ou realizaram excelentes negócios.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={() => scroll("left")}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={20} />
            </button>
            <button 
              onClick={() => scroll("right")}
              className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Container */}
        <div 
          ref={scrollRef}
          className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-6 pb-8"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="min-w-[85vw] md:min-w-[400px] snap-center bg-white p-8 md:p-10 border border-gray-100 shrink-0"
            >
              <Quote className="text-primary/20 w-12 h-12 mb-6" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={i < testimonial.rating ? "fill-primary text-primary" : "text-gray-200"} 
                  />
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed font-light mb-8 text-lg">
                "{testimonial.content}"
              </p>

              <div>
                <h4 className="font-heading text-xl mb-1">{testimonial.name}</h4>
                <p className="text-sm text-foreground/60 tracking-wider uppercase">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
