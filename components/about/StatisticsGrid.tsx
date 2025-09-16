import { statisticsData } from "@/data/aboutData";

export default function StatisticsGrid() {
  const getCardStyle = (index: number) => {
    switch (index) {
      case 0: // Clientes
        return {
          backgroundColor: "#eff6ff",
          borderColor: "#dbeafe",
          textColor: "#1d4ed8",
          labelColor: "#2563eb",
        };
      case 1: // Volume
        return {
          backgroundColor: "#f0fdf4",
          borderColor: "#dcfce7",
          textColor: "#15803d",
          labelColor: "#16a34a",
        };
      case 2: // Atendimento
        return {
          backgroundColor: "#faf5ff",
          borderColor: "#e9d5ff",
          textColor: "#7c3aed",
          labelColor: "#9333ea",
        };
      case 3: // Disponibilidade
        return {
          backgroundColor: "#fff7ed",
          borderColor: "#fed7aa",
          textColor: "#c2410c",
          labelColor: "#ea580c",
        };
      default:
        return {
          backgroundColor: "#f9fafb",
          borderColor: "#e5e7eb",
          textColor: "#374151",
          labelColor: "#6b7280",
        };
    }
  };

  return (
    <div className="grid grid-cols-2 gap-4 sm:gap-6">
      {statisticsData.map((stat, index) => {
        const cardStyle = getCardStyle(index);
        return (
          <div
            key={index}
            className="text-center p-3 sm:p-4 border rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            style={{
              backgroundColor: cardStyle.backgroundColor,
              borderColor: cardStyle.borderColor,
            }}
          >
            <div
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2"
              style={{ color: cardStyle.textColor }}
            >
              {stat.value}
            </div>
            <div
              className="text-xs sm:text-sm font-medium"
              style={{ color: cardStyle.labelColor }}
            >
              {stat.label}
            </div>
          </div>
        );
      })}
    </div>
  );
}
