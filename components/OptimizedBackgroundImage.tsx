"use client";

import { useState } from "react";

interface OptimizedBackgroundImageProps {
  webpSrc: string;
  avifSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
}

export default function OptimizedBackgroundImage({
  webpSrc,
  avifSrc,
  fallbackSrc,
  alt,
  className = "",
}: OptimizedBackgroundImageProps) {
  const [currentSrc, setCurrentSrc] = useState(avifSrc);

  const handleError = () => {
    if (currentSrc === avifSrc) {
      setCurrentSrc(webpSrc);
    } else if (currentSrc === webpSrc) {
      setCurrentSrc(fallbackSrc);
    }
  };

  return (
    <div
      className={`${className} bg-cover bg-center bg-no-repeat transition-opacity duration-1000`}
      style={{
        backgroundImage: `url(${currentSrc})`,
      }}
      role="img"
      aria-label={alt}
      onError={handleError}
    />
  );
}
