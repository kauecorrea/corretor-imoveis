"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageGalleryProps {
  images: string[];
  title: string;
}

export function ImageGallery({ images, title }: ImageGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden">
        <Image
          src="/images/placeholder-property.jpg"
          alt={title}
          fill
          className="object-cover"
        />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group">
        <Image
          src={images[currentIndex]}
          alt={`${title} - Imagem ${currentIndex + 1}`}
          fill
          className="object-cover transition-opacity duration-300"
          priority
        />
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative aspect-square w-24 sm:w-28 shrink-0 bg-gray-100 overflow-hidden snap-start transition-all border-2",
                currentIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              <Image 
                src={img} 
                alt={`Thumbnail ${idx + 1}`} 
                fill 
                className="object-cover" 
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
