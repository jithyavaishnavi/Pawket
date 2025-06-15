"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }) {
  // Named export
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
