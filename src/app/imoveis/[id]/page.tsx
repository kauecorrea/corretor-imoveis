import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Check, BedDouble, Bath, Square, Car, MapPin } from "lucide-react";
import { properties } from "@/lib/mock-data";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { ImageGallery } from "@/components/shared/ImageGallery";

export function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id,
  }));
}

export default async function PropertyPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);

  if (!property) {
    notFound();
  }

  const formatPrice = (value: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
      maximumFractionDigits: 0
    }).format(value);
  };

  const defaultMessage = `Olá, Danielle! Gostaria de mais informações sobre o imóvel: ${property.title} (Ref: ${property.id})`;
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5591985800448";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <>
      <Header />
      <main className="pt-24 pb-16 bg-white min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          <Link href="/#properties" className="inline-flex items-center gap-2 text-sm text-foreground/60 hover:text-primary mb-8 transition-colors">
            <ArrowLeft size={16} /> Voltar para vitrine
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Imagens */}
            <div className="w-full">
              <ImageGallery images={property.images} title={property.title} />
            </div>

            {/* Detalhes */}
            <div>
              <div className="flex gap-2 mb-4">
                <span className="bg-primary text-white text-xs font-semibold px-3 py-1 tracking-wider uppercase">
                  {property.transaction}
                </span>
                <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 tracking-wider uppercase">
                  {property.type}
                </span>
              </div>

              <h1 className="text-3xl md:text-4xl font-heading mb-4">{property.title}</h1>
              
              <div className="flex items-center gap-2 text-foreground/60 mb-6">
                <MapPin size={18} className="text-primary" />
                <span>{property.neighborhood}, {property.city}</span>
              </div>

              <div className="text-3xl font-semibold text-secondary mb-8 pb-8 border-b border-gray-100">
                {formatPrice(property.price)}
                {property.transaction === "Locação" && <span className="text-lg font-normal text-foreground/60">/mês</span>}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8 pb-8 border-b border-gray-100">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-foreground/60 mb-1">
                    <Square size={18} className="text-primary" /> Área
                  </div>
                  <span className="font-semibold text-lg">{property.area}m²</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-foreground/60 mb-1">
                    <BedDouble size={18} className="text-primary" /> Quartos
                  </div>
                  <span className="font-semibold text-lg">{property.bedrooms}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-foreground/60 mb-1">
                    <Bath size={18} className="text-primary" /> Banheiros
                  </div>
                  <span className="font-semibold text-lg">{property.bathrooms}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2 text-foreground/60 mb-1">
                    <Car size={18} className="text-primary" /> Vagas
                  </div>
                  <span className="font-semibold text-lg">{property.parkingSpots}</span>
                </div>
              </div>

              <div className="mb-8 pb-8 border-b border-gray-100">
                <h3 className="font-heading text-xl mb-4">Descrição do Imóvel</h3>
                <p className="text-foreground/80 leading-relaxed font-light">
                  {property.description}
                </p>
              </div>

              <div className="mb-10">
                <h3 className="font-heading text-xl mb-4">Características</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-foreground/80">
                      <Check size={16} className="text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full py-4 bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Tenho interesse — falar com a corretora
              </a>

            </div>

          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
