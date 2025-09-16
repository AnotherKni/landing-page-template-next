"use client";

import Image from "next/image";
import { useState } from "react";

interface OptimizedImageProps {
  webpSrc: string;
  avifSrc: string;
  fallbackSrc: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
  height?: number;
  fill?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  webpSrc,
  avifSrc,
  fallbackSrc,
  alt,
  className = "",
  priority = false,
  width,
  height,
  fill = false,
  sizes,
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return (
      <Image
        src={fallbackSrc}
        alt={alt}
        className={className}
        priority={priority}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        onError={() => setImageError(true)}
      />
    );
  }

  return (
    <picture>
      <source srcSet={avifSrc} type="image/avif" />
      <source srcSet={webpSrc} type="image/webp" />
      <Image
        src={fallbackSrc}
        alt={alt}
        className={className}
        priority={priority}
        width={width}
        height={height}
        fill={fill}
        sizes={sizes}
        onError={() => setImageError(true)}
      />
    </picture>
  );
}
