"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes";

// Kullanıcı isteği üzerine tüm konsol çıktılarını gizleme (Sıfır konsol logu)
if (typeof window !== "undefined") {
  console.log = () => {};
  console.warn = () => {};
  
  // Orijinal hata metodunu saklayıp sadece React'in içsel fatal hatalarını belki bırakabiliriz,
  // ancak kullanıcının "hiçbir şey gözükmesin" talebine istinaden tamamen boşaltıyoruz.
  console.error = () => {};
  console.info = () => {};
  console.debug = () => {};
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
