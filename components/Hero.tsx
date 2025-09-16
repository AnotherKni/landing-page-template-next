"use client";

import { useState, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";
import OptimizedBackgroundImage from "./OptimizedBackgroundImage";
import { imagePaths } from "@/utils/imagePaths";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      webp: imagePaths.backgrounds.bg1.webp,
      avif: imagePaths.backgrounds.bg1.avif,
      fallback: imagePaths.backgrounds.bg1.fallback,
      alt: "Background 1",
    },
    {
      webp: imagePaths.backgrounds.bg2.webp,
      avif: imagePaths.backgrounds.bg2.avif,
      fallback: imagePaths.backgrounds.bg2.fallback,
      alt: "Background 2",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      className="relative pt-20 sm:pt-24 pb-12 sm:pb-16 overflow-hidden min-h-screen flex items-center"
    >
      <div className="absolute inset-0">
        {images.map((image, index) => (
          <OptimizedBackgroundImage
            key={index}
            webpSrc={image.webp}
            avifSrc={image.avif}
            fallbackSrc={image.fallback}
            alt={image.alt}
            className={`absolute inset-0 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            priority={index === 0}
          />
        ))}
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <AnimatedSection delay={0}>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight"
              style={{ fontSize: "clamp(1.875rem, 4vw, 3.75rem)" }}
            >
              Seu <span className="text-primary-400">banco digital</span> do
              futuro
            </h1>
          </AnimatedSection>
          <AnimatedSection delay={200}>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
              Conta corrente gratuita, cartão sem anuidade, investimentos e
              empréstimos com as melhores taxas do mercado.
            </p>
          </AnimatedSection>
          <AnimatedSection delay={400}>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <button className="bg-primary-800 hover:bg-primary-900 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg transition-colors duration-200 text-base sm:text-lg shadow-lg w-full sm:w-auto">
                Abrir Conta Grátis
              </button>
              <button className="bg-white hover:bg-gray-100 text-primary-800 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-lg border-2 border-white transition-colors duration-200 text-base sm:text-lg shadow-lg w-full sm:w-auto">
                Simular Empréstimo
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="flex space-x-2 sm:space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              aria-label={`Ir para imagem ${index + 1}`}
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-colors duration-300 ${
                index === currentImage
                  ? "bg-primary-400"
                  : "bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
