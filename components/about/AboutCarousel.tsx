"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { carouselSlides } from "@/data/aboutData";
import CarouselSlide from "./CarouselSlide";

export default function AboutCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + carouselSlides.length) % carouselSlides.length
    );
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselSlides.length);
  };

  return (
    <AnimatedSection direction="right" delay={200}>
      <div className="relative">
        <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 lg:p-8">
          <div className="aspect-square rounded-lg sm:rounded-xl flex items-center justify-center relative overflow-hidden">
            {carouselSlides.map((slide, index) => (
              <CarouselSlide
                key={index}
                slide={slide}
                index={index}
                isActive={index === currentSlide}
              />
            ))}

            <button
              onClick={goToPrevious}
              className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-8 h-8 sm:w-10 sm:h-10 bg-white border border-gray-200 hover:bg-gray-50 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 z-10"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 text-gray-800" />
            </button>
          </div>

          <div className="flex justify-center space-x-2 mt-4">
            {carouselSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentSlide
                    ? "bg-primary-800"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
