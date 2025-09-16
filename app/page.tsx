import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

const Features = dynamic(() => import("@/components/Features"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg" />,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <div className="h-32 bg-gray-100 animate-pulse rounded-lg" />,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}
