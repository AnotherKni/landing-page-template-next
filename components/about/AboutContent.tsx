import AnimatedSection from "../AnimatedSection";
import { aboutContent } from "@/data/aboutData";
import StatisticsGrid from "./StatisticsGrid";

export default function AboutContent() {
  return (
    <AnimatedSection direction="left">
      <div className="h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
            {aboutContent.title}
          </h2>
          <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6 leading-relaxed font-medium">
            {aboutContent.description1}
          </p>
          <p className="text-base sm:text-lg text-gray-700 mb-6 sm:mb-8 leading-relaxed font-medium">
            {aboutContent.description2}
          </p>
        </div>
        <div className="mt-auto">
          <StatisticsGrid />
        </div>
      </div>
    </AnimatedSection>
  );
}
