import AnimatedSection from "./AnimatedSection";
import { featuresData, getFeatureIcon } from "@/data/featuresData";

export default function Features() {
  return (
    <section id="features" className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Nossos Serviços
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto px-4">
              Soluções financeiras completas para você e sua família com a
              segurança e confiança que você merece.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {featuresData.map((feature, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="bg-primary-50 border border-primary-100 rounded-lg sm:rounded-xl p-4 sm:p-6 lg:p-8 hover:shadow-xl hover:border-primary-200 hover:bg-primary-100 transition-all duration-300 h-full">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-primary-200 rounded-lg flex items-center justify-center text-primary-700 mb-4 sm:mb-6 mx-auto sm:mx-0">
                  {getFeatureIcon(feature.type)}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4 text-center sm:text-left">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 leading-relaxed text-center sm:text-left font-medium">
                  {feature.description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
