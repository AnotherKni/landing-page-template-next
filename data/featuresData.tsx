import {
  CreditCard,
  Shield,
  TrendingUp,
  DollarSign,
  Smartphone,
  Headphones,
} from "lucide-react";

export interface Feature {
  type: string;
  title: string;
  description: string;
}

export const featuresData: Feature[] = [
  {
    type: "credit-card",
    title: "Conta Corrente Grátis",
    description:
      "Conta corrente sem taxas de manutenção e com cartão de débito incluso.",
  },
  {
    type: "shield",
    title: "Segurança Total",
    description: "Proteção avançada com criptografia de ponta para seus dados.",
  },
  {
    type: "trending-up",
    title: "Investimentos",
    description:
      "Invista em CDB, LCI, LCA e fundos com as melhores rentabilidades.",
  },
  {
    type: "dollar-sign",
    title: "Empréstimos",
    description: "Empréstimos pessoais e consignados com taxas competitivas.",
  },
  {
    type: "smartphone",
    title: "App Mobile",
    description: "Gerencie suas finanças 24h por dia através do nosso app.",
  },
  {
    type: "headphones",
    title: "Atendimento 24h",
    description: "Suporte especializado disponível 24 horas por dia.",
  },
];

export const getFeatureIcon = (type: string) => {
  switch (type) {
    case "credit-card":
      return <CreditCard className="w-8 h-8" />;
    case "shield":
      return <Shield className="w-8 h-8" />;
    case "trending-up":
      return <TrendingUp className="w-8 h-8" />;
    case "dollar-sign":
      return <DollarSign className="w-8 h-8" />;
    case "smartphone":
      return <Smartphone className="w-8 h-8" />;
    case "headphones":
      return <Headphones className="w-8 h-8" />;
    default:
      return <CreditCard className="w-8 h-8" />;
  }
};
