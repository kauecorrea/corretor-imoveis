"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { PlayCircle } from "lucide-react";

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

  const isVideo = (url: string) => {
    return url.toLowerCase().endsWith(".mp4") || url.toLowerCase().endsWith(".webm");
  };

  const currentMedia = images[currentIndex];

  return (
    <div className="space-y-4">
      {/* Main Media */}
      <div className="relative aspect-[4/3] bg-gray-100 overflow-hidden group flex items-center justify-center">
        {isVideo(currentMedia) ? (
          <video 
            src={currentMedia} 
            controls 
            autoPlay
            muted
            className="w-full h-full object-cover"
          />
        ) : (
          <Image
            src={currentMedia}
            alt={`${title} - Mídia ${currentIndex + 1}`}
            fill
            className="object-cover transition-opacity duration-300"
            priority
          />
        )}
      </div>

      {/* Thumbnails */}
      {images.length > 1 && (
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x hide-scrollbar">
          {images.map((media, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={cn(
                "relative aspect-square w-24 sm:w-28 shrink-0 bg-gray-100 overflow-hidden snap-start transition-all border-2 flex items-center justify-center",
                currentIndex === idx ? "border-primary opacity-100" : "border-transparent opacity-60 hover:opacity-100"
              )}
            >
              {isVideo(media) ? (
                <>
                  <video src={media} className="object-cover w-full h-full" />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <PlayCircle className="text-white w-8 h-8 opacity-80" />
                  </div>
                </>
              ) : (
                <Image 
                  src={media} 
                  alt={`Thumbnail ${idx + 1}`} 
                  fill 
                  className="object-cover" 
                />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
