"use client";

import React, { useState, useMemo } from "react";
import { PropertyCard } from "@/components/shared/PropertyCard";
import { properties, TransactionType, PropertyType } from "@/lib/mock-data";

export function Properties() {
  const [transactionFilter, setTransactionFilter] = useState<TransactionType | "Todos">("Todos");
  const [typeFilter, setTypeFilter] = useState<PropertyType | "Todos">("Todos");

  const filteredProperties = useMemo(() => {
    return properties.filter((prop) => {
      const matchTransaction = transactionFilter === "Todos" || prop.transaction === transactionFilter;
      const matchType = typeFilter === "Todos" || prop.type === typeFilter;
      return matchTransaction && matchType;
    });
  }, [transactionFilter, typeFilter]);

  return (
    <section id="properties" className="py-24 bg-white relative">
      <div className="container mx-auto px-4 md:px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <span className="h-[1px] w-8 bg-primary"></span>
              <span className="text-primary text-sm font-semibold tracking-widest uppercase">Vitrine Exclusiva</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-heading mb-4">
              Imóveis em Destaque
            </h2>
            <p className="text-foreground/70 max-w-xl">
              Uma seleção rigorosa das melhores oportunidades no mercado imobiliário de luxo em Belém e Região Metropolitana.
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4">
            <select 
              value={transactionFilter}
              onChange={(e) => setTransactionFilter(e.target.value as any)}
              className="px-4 py-3 bg-white border border-gray-200 text-sm outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="Todos">Comprar ou Alugar</option>
              <option value="Venda">Comprar (Venda)</option>
              <option value="Locação">Alugar (Locação)</option>
            </select>

            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value as any)}
              className="px-4 py-3 bg-white border border-gray-200 text-sm outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="Todos">Tipo de Imóvel</option>
              <option value="Apartamento">Apartamentos</option>
              <option value="Casa">Casas</option>
              <option value="Terreno">Terrenos</option>
              <option value="Comercial">Comerciais</option>
            </select>
          </div>
        </div>

        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="py-20 text-center border border-dashed border-gray-200 bg-gray-50">
            <p className="text-foreground/60">Nenhum imóvel encontrado com os filtros selecionados.</p>
            <button 
              onClick={() => { setTransactionFilter("Todos"); setTypeFilter("Todos"); }}
              className="mt-4 text-primary font-medium hover:underline"
            >
              Limpar filtros
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
