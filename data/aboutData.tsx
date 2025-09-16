import { CheckCircle, Eye, Heart } from "lucide-react";

export interface CarouselSlide {
  type: string;
  title: string;
  description: string;
  bgColor: string;
  iconBg: string;
}

export interface Statistic {
  type: string;
  value: string;
  label: string;
  bgColor: string;
  borderColor: string;
  textColor: string;
  labelColor: string;
}

export interface AboutContent {
  title: string;
  description1: string;
  description2: string;
}

export const carouselSlides: CarouselSlide[] = [
  {
    type: "mission",
    title: "Nossa Missão",
    description:
      "Democratizar o acesso a serviços bancários de qualidade para todos os brasileiros, oferecendo soluções financeiras inovadoras e acessíveis.",
    bgColor: "from-blue-100 to-blue-200",
    iconBg: "bg-blue-800",
  },
  {
    type: "vision",
    title: "Nossa Visão",
    description:
      "Ser o banco digital líder no Brasil, reconhecido pela excelência no atendimento e pela transformação digital do setor financeiro.",
    bgColor: "from-emerald-100 to-emerald-200",
    iconBg: "bg-emerald-800",
  },
  {
    type: "values",
    title: "Nossos Valores",
    description:
      "Transparência, inovação, segurança e compromisso com nossos clientes são os pilares que guiam todas as nossas ações e decisões.",
    bgColor: "from-violet-100 to-violet-200",
    iconBg: "bg-violet-800",
  },
];

export const statisticsData: Statistic[] = [
  {
    type: "clients",
    value: "2M+",
    label: "Clientes Ativos",
    bgColor: "bg-primary-50",
    borderColor: "border-primary-100",
    textColor: "text-primary-700",
    labelColor: "text-primary-600",
  },
  {
    type: "volume",
    value: "R$ 50B+",
    label: "Volume em Transações",
    bgColor: "bg-green-50",
    borderColor: "border-green-100",
    textColor: "text-green-700",
    labelColor: "text-green-600",
  },
  {
    type: "support",
    value: "24/7",
    label: "Atendimento",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-100",
    textColor: "text-purple-700",
    labelColor: "text-purple-600",
  },
  {
    type: "availability",
    value: "99.9%",
    label: "Disponibilidade",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-100",
    textColor: "text-orange-700",
    labelColor: "text-orange-600",
  },
];

export const aboutContent: AboutContent = {
  title: "Sobre o FinBank",
  description1:
    "Somos um banco digital inovador que revoluciona a forma como você gerencia suas finanças. Nossa missão é democratizar o acesso a serviços bancários de qualidade, oferecendo soluções financeiras completas e acessíveis para todos os brasileiros.",
  description2:
    "Com tecnologia de ponta e atendimento humanizado, o FinBank combina a praticidade do digital com a confiança e segurança que você espera de um banco tradicional.",
};

export const getCarouselIcon = (type: string) => {
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
