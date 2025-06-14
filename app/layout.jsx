import { Montserrat, Poppins } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/cart-context"
import { Toaster } from "@/components/ui/toaster"

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

export const metadata = {
  title: "Pawket - Premium Pet Supplies",
  description: "Your one-stop shop for premium pet supplies, food, toys, and grooming essentials.",
    generator: 'v0.dev'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${poppins.variable} font-poppins`}>
        <CartProvider>
          {children}
          <Toaster />
        </CartProvider>
      </body>
    </html>
  )
}
