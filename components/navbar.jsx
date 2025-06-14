"use client"

import Link from "next/link"
import { ShoppingCart, Heart, User, Menu, Home } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/components/cart-context"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  const { state } = useCart()
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/shop", label: "Shop" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-primary-500 font-montserrat tracking-wide">PAWKET</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-primary-500 font-medium transition-colors duration-200 font-poppins"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" className="relative">
                <Heart className="h-5 w-5" />
              </Button>
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {state.itemCount > 0 && (
                    <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-primary-500 hover:bg-primary-600">
                      {state.itemCount}
                    </Badge>
                  )}
                </Button>
              </Link>
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-lg font-medium text-gray-700 hover:text-primary-500 transition-colors duration-200 font-poppins"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50">
        <div className="grid grid-cols-4 py-2">
          <Link href="/" className="flex flex-col items-center py-2 px-1">
            <Home className="h-6 w-6 mb-1 text-gray-600" />
            <span className="text-xs text-gray-600 font-poppins">Home</span>
          </Link>
          <Link href="/shop" className="flex flex-col items-center py-2 px-1">
            <ShoppingCart className="h-6 w-6 mb-1 text-gray-600" />
            <span className="text-xs text-gray-600 font-poppins">Shop</span>
          </Link>
          <Link href="/cart" className="flex flex-col items-center py-2 px-1 relative">
            <div className="w-6 h-6 mb-1 relative">
              <ShoppingCart className="h-6 w-6 text-gray-600" />
              {state.itemCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-4 w-4 flex items-center justify-center p-0 text-xs bg-primary-500 hover:bg-primary-600">
                  {state.itemCount}
                </Badge>
              )}
            </div>
            <span className="text-xs text-gray-600 font-poppins">Cart</span>
          </Link>
          <div className="flex flex-col items-center py-2 px-1">
            <User className="h-6 w-6 mb-1 text-gray-600" />
            <span className="text-xs text-gray-600 font-poppins">Profile</span>
          </div>
        </div>
      </div>
    </>
  )
}
