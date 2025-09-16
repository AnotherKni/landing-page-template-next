import { CheckCircle, Eye, Heart } from "lucide-react";
import { CarouselSlide as CarouselSlideType } from "@/data/aboutData";

interface CarouselSlideProps {
  slide: CarouselSlideType;
  index: number;
  isActive: boolean;
}

export default function CarouselSlide({
  slide,
  index,
  isActive,
}: CarouselSlideProps) {
  const getIcon = (type: string) => {
    const iconProps = "w-8 h-8 sm:w-10 sm:h-10 text-white";

    switch (type) {
      case "mission":
        return <CheckCircle className={iconProps} />;
      case "vision":
        return <Eye className={iconProps} />;
      case "values":
        return <Heart className={iconProps} />;
      default:
        return <CheckCircle className={iconProps} />;
    }
  };

  const getBackgroundStyle = (index: number) => {
    switch (index) {
      case 0:
        return "linear-gradient(to bottom right, #dbeafe, #bfdbfe)";
      case 1:
        return "linear-gradient(to bottom right, #d1fae5, #a7f3d0)";
      default:
        return "linear-gradient(to bottom right, #ede9fe, #ddd6fe)";
    }
  };

  const getIconBackgroundColor = (index: number) => {
    switch (index) {
      case 0:
        return "#1e40af";
      case 1:
        return "#065f46";
      default:
        return "#5b21b6";
    }
  };

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${
        slide.bgColor
      } rounded-lg sm:rounded-xl flex items-center justify-center transition-opacity duration-500 ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      style={{
        background: getBackgroundStyle(index),
      }}
    >
      <div className="text-center p-4">
        <div
          className={`w-16 h-16 sm:w-20 sm:h-20 ${slide.iconBg} rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4`}
          style={{
            backgroundColor: getIconBackgroundColor(index),
          }}
        >
          {getIcon(slide.type)}
        </div>
        <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2">
          {slide.title}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 leading-relaxed font-medium">
          {slide.description}
        </p>
      </div>
    </div>
  );
}
