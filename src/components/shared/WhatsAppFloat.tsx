"use client";

import React from "react";
import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "5591985800448";
  const defaultMessage = "Olá, Danielle! Gostaria de mais informações sobre seus serviços imobiliários.";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl hover:bg-green-600 animate-bounce-slow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
