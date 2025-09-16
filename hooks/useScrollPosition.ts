"use client";

import { useState, useEffect } from "react";

export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Verificar a posição inicial do scroll
    setScrollY(window.scrollY);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return scrollY;
}
