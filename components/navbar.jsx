"use client"

import Link from "next/link"
import { ShoppingCart, Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"

export default function Navbar() {
  const { cart } = useCart()
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-[#E99C1A] font-montserrat" prefetch={false}>
        PAWKET
      </Link>
      <nav className="hidden md:flex items-center space-x-6 font-poppins">
        <Link href="/" className="text-gray-600 hover:text-[#E99C1A] transition-colors" prefetch={false}>
          Home
        </Link>
        <Link href="/shop" className="text-gray-600 hover:text-[#E99C1A] transition-colors" prefetch={false}>
          Shop
        </Link>
        <Link href="/about" className="text-gray-600 hover:text-[#E99C1A] transition-colors" prefetch={false}>
          About
        </Link>
        <Link href="/contact" className="text-gray-600 hover:text-[#E99C1A] transition-colors" prefetch={false}>
          Contact
        </Link>
      </nav>
      <div className="flex items-center space-x-4">
        <Link href="/cart" className="relative text-gray-600 hover:text-[#E99C1A] transition-colors" prefetch={false}>
          <ShoppingCart className="h-6 w-6" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-[#E99C1A] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
              {totalItems}
            </span>
          )}
          <span className="sr-only">Cart</span>
        </Link>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-4 py-6 font-poppins">
              <Link href="/" className="text-gray-800 hover:text-[#E99C1A]" prefetch={false}>
                Home
              </Link>
              <Link href="/shop" className="text-gray-800 hover:text-[#E99C1A]" prefetch={false}>
                Shop
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-[#E99C1A]" prefetch={false}>
                About
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-[#E99C1A]" prefetch={false}>
                Contact
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
