import AnimatedSection from "./AnimatedSection";

import { Twitter, Facebook, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          <AnimatedSection direction="left" delay={0}>
            <div className="sm:col-span-2 lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">
                <span className="text-primary-400">Fin</span>
                <span className="text-white">Bank</span>
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 max-w-md leading-relaxed">
                Seu banco digital do futuro. Soluções financeiras completas com
                a segurança e confiança que você merece.
              </p>
              <div className="flex space-x-3 sm:space-x-4">
                <a
                  href="#"
                  aria-label="Siga-nos no Twitter"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Siga-nos no Facebook"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  aria-label="Siga-nos no LinkedIn"
                  className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-primary-800 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={200}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Produtos
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Conta Corrente
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Cartão de Crédito
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Investimentos
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Empréstimos
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="up" delay={400}>
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">
                Atendimento
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Central de Atendimento
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Internet Banking
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    App Mobile
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm sm:text-base text-gray-400 hover:text-white transition-colors"
                  >
                    Ouvidoria
                  </a>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>

        <AnimatedSection delay={600}>
          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              © 2024 FinBank. Todos os direitos reservados. | CNPJ:
              00.000.000/0001-00
            </p>
          </div>
        </AnimatedSection>
      </div>
    </footer>
  );
}
