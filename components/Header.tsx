"use client";

import { useState, useCallback } from "react";
import { Menu } from "lucide-react";
import { useScrollPosition } from "@/hooks/useScrollPosition";
import OptimizedImage from "./OptimizedImage";
import { getImagePath } from "@/utils/paths";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const isScrolled = scrollY > 50;

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-lg backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between py-3 sm:py-4 pl-3 sm:pl-4 lg:pl-8 pr-3 sm:pr-4 lg:pr-8">
          <div className="flex items-center -ml-2 sm:-ml-3 lg:-ml-4">
            <OptimizedImage
              webpSrc={
                isScrolled
                  ? getImagePath("/images/logo-color.png")
                  : getImagePath("/images/noBgWhite.png")
              }
              avifSrc={
                isScrolled
                  ? getImagePath("/images/logo-color.png")
                  : getImagePath("/images/noBgWhite.png")
              }
              fallbackSrc={
                isScrolled
                  ? getImagePath("/images/logo-color.png")
                  : getImagePath("/images/noBgWhite.png")
              }
              alt="FinBank Logo"
              className="h-8 sm:h-10 md:h-12 w-auto"
              priority={true}
              width={180}
              height={48}
            />
          </div>

          <nav className="hidden lg:flex space-x-6 xl:space-x-8 absolute left-1/2 transform -translate-x-1/2">
            <a
              href="#home"
              className={`transition-colors duration-300 text-sm xl:text-base ${
                isScrolled
                  ? "text-gray-700 hover:text-primary-800"
                  : "text-white hover:text-primary-300"
              }`}
            >
              Início
            </a>
            <a
              href="#features"
              className={`transition-colors duration-300 text-sm xl:text-base ${
                isScrolled
                  ? "text-gray-700 hover:text-primary-800"
                  : "text-white hover:text-primary-300"
              }`}
            >
              Serviços
            </a>
            <a
              href="#about"
              className={`transition-colors duration-300 text-sm xl:text-base ${
                isScrolled
                  ? "text-gray-700 hover:text-primary-800"
                  : "text-white hover:text-primary-300"
              }`}
            >
              Sobre Nós
            </a>
            <a
              href="#contact"
              className={`transition-colors duration-300 text-sm xl:text-base ${
                isScrolled
                  ? "text-gray-700 hover:text-primary-800"
                  : "text-white hover:text-primary-300"
              }`}
            >
              Contato
            </a>
          </nav>

          <div className="hidden lg:flex space-x-2 lg:space-x-4 items-center">
            <button
              className={`font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-lg border-2 transition-all duration-300 text-xs lg:text-sm ${
                isScrolled
                  ? "bg-white hover:bg-gray-100 text-primary-800 border-primary-800 shadow-sm"
                  : "bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-white"
              }`}
            >
              <span className="hidden lg:inline">Internet Banking</span>
              <span className="lg:hidden">IB</span>
            </button>
            <button
              className={`font-semibold py-2 px-3 lg:py-3 lg:px-6 rounded-lg transition-all duration-300 text-xs lg:text-sm ${
                isScrolled
                  ? "bg-primary-800 hover:bg-primary-900 text-white shadow-lg"
                  : "bg-white hover:bg-gray-100 text-primary-800 shadow-lg"
              }`}
            >
              <span className="hidden lg:inline">Abrir Conta</span>
              <span className="lg:hidden">Conta</span>
            </button>
          </div>

          <button
            className={`lg:hidden transition-colors duration-300 p-1 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={toggleMenu}
            aria-label="Abrir menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>

        {isMenuOpen && (
          <div
            className={`lg:hidden py-4 px-4 transition-all duration-300 ${
              isScrolled
                ? "border-t border-gray-200 bg-white"
                : "border-t border-white border-opacity-20 bg-black bg-opacity-20 backdrop-blur-md"
            }`}
          >
            <nav className="flex flex-col space-y-3">
              <a
                href="#home"
                className={`transition-colors duration-300 py-2 text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-800"
                    : "text-white hover:text-primary-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#features"
                className={`transition-colors duration-300 py-2 text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-800"
                    : "text-white hover:text-primary-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </a>
              <a
                href="#about"
                className={`transition-colors duration-300 py-2 text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-800"
                    : "text-white hover:text-primary-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </a>
              <a
                href="#contact"
                className={`transition-colors duration-300 py-2 text-base ${
                  isScrolled
                    ? "text-gray-700 hover:text-primary-800"
                    : "text-white hover:text-primary-300"
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </a>
              <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 border-opacity-20">
                <button
                  className={`font-semibold py-3 px-6 rounded-lg border-2 transition-all duration-300 text-sm ${
                    isScrolled
                      ? "bg-white hover:bg-gray-100 text-primary-800 border-primary-800 shadow-sm"
                      : "bg-transparent hover:bg-white hover:bg-opacity-10 text-white border-white"
                  }`}
                >
                  Internet Banking
                </button>
                <button
                  className={`font-semibold py-3 px-6 rounded-lg transition-all duration-300 text-sm ${
                    isScrolled
                      ? "bg-primary-800 hover:bg-primary-900 text-white shadow-lg"
                      : "bg-white hover:bg-gray-100 text-primary-800 shadow-lg"
                  }`}
                >
                  Abrir Conta
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
