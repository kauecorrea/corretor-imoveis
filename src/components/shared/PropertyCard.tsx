import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BedDouble, Bath, Square, Car, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

interface PropertyCardProps {
  property: any;
  className?: string;
}

export function PropertyCard({ property, className }: PropertyCardProps) {
  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <div className={cn("relative group flex flex-col bg-white border border-gray-100 hover:shadow-xl transition-all duration-500 overflow-hidden", className)}>
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
        <Image
          src={property.imageUrl || "/images/placeholder-property.jpg"}
          alt={property.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="bg-primary text-white text-xs font-semibold px-3 py-1 tracking-wider uppercase">
            {property.type}
          </span>
          <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 tracking-wider uppercase">
            {property.propertyType}
          </span>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
          <MapPin size={14} className="text-primary" />
          <span>{property.location}</span>
        </div>
        
        <h3 className="font-heading text-xl mb-4 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/imoveis/${property.slug}`} className="after:absolute after:inset-0">
            {property.title}
          </Link>
        </h3>

        <div className="mt-auto">
          <div className="flex items-center justify-between py-4 border-t border-gray-100 text-sm text-foreground/70">
            <div className="flex items-center gap-1.5" title="Área">
              <Square size={16} className="text-primary/70" />
              <span>{property.area || 0}m²</span>
            </div>
            <div className="flex items-center gap-1.5" title="Quartos">
              <BedDouble size={16} className="text-primary/70" />
              <span>{property.bedrooms || 0}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Banheiros">
              <Bath size={16} className="text-primary/70" />
              <span>{property.bathrooms || 0}</span>
            </div>
            <div className="flex items-center gap-1.5" title="Vagas">
              <Car size={16} className="text-primary/70" />
              <span>{property.parking || 0}</span>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
            <div>
              <span className="block text-xs text-foreground/60 mb-0.5">Valor</span>
              <span className="font-semibold text-lg text-secondary">
                {formatPrice(property.price)}
                {property.type === "Aluguel" && <span className="text-sm font-normal text-foreground/60">/mês</span>}
              </span>
            </div>
            <span className="text-xs font-medium uppercase tracking-widest text-primary group-hover:translate-x-1 transition-transform">
              Detalhes →
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
