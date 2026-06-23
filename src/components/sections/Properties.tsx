"use client";

import React, { useState, useMemo } from "react";
import { PropertyCard } from "@/components/shared/PropertyCard";

export function Properties({ initialProperties }: { initialProperties: any[] }) {
  const [transactionFilter, setTransactionFilter] = useState<string>("Todos");
  const [typeFilter, setTypeFilter] = useState<string>("Todos");
  
  // Paginação
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const filteredProperties = useMemo(() => {
    return initialProperties.filter((prop) => {
      const matchTransaction = transactionFilter === "Todos" || prop.type === transactionFilter;
      const matchType = typeFilter === "Todos" || prop.propertyType === typeFilter;
      return matchTransaction && matchType;
    });
  }, [initialProperties, transactionFilter, typeFilter]);

  // Cálculos de paginação
  const totalPages = Math.ceil(filteredProperties.length / itemsPerPage);
  const currentProperties = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return filteredProperties.slice(startIndex, startIndex + itemsPerPage);
  }, [filteredProperties, currentPage]);

  // Reseta a página para 1 quando os filtros mudam
  React.useEffect(() => {
    setCurrentPage(1);
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
              onChange={(e) => setTransactionFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 text-sm outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="Todos">Comprar ou Alugar</option>
              <option value="Venda">Comprar (Venda)</option>
              <option value="Aluguel">Alugar (Aluguel)</option>
            </select>

            <select 
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              className="px-4 py-3 bg-white border border-gray-200 text-sm outline-none focus:border-primary transition-colors cursor-pointer"
            >
              <option value="Todos">Tipo de Imóvel</option>
              <option value="Apartamento">Apartamentos</option>
              <option value="Casa">Casas</option>
              <option value="Lote/Terreno">Lotes/Terrenos</option>
              <option value="Comercial">Comerciais</option>
              <option value="Cobertura">Coberturas</option>
              <option value="Sítio/Fazenda">Sítios/Fazendas</option>
            </select>
          </div>
        </div>

        {currentProperties.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {currentProperties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
            
            {/* Paginação Numérica */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center gap-2 mt-8">
                <button
                  onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-200 disabled:opacity-50 hover:bg-gray-50 transition-colors"
                >
                  Anterior
                </button>
                
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i + 1)}
                    className={`w-10 h-10 flex items-center justify-center border transition-colors ${
                      currentPage === i + 1 
                        ? "bg-primary text-primary-foreground border-primary" 
                        : "border-gray-200 hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    {i + 1}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-200 disabled:opacity-50 hover:bg-gray-50 transition-colors"
                >
                  Próxima
                </button>
              </div>
            )}
          </>
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
