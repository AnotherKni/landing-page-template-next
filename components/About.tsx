import AboutContent from "./about/AboutContent";
import AboutCarousel from "./about/AboutCarousel";

export default function About() {
  return (
    <section id="about" className="py-12 sm:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto py-8 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-stretch">
          <AboutContent />
          <AboutCarousel />
        </div>
      </div>
    </section>
  );
}
