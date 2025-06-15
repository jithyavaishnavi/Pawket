"use client"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  // Changed to named export
  return (
    <footer className="bg-[#E99C1A] text-white py-12 px-4 md:px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="space-y-4">
          <h3 className="text-2xl font-bold">PAWKET</h3>
          <p className="text-sm">
            Your one-stop shop for all your pet needs. We offer a wide range of high-quality products to keep your furry
            friends happy and healthy.
          </p>
          <div className="flex space-x-4">
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              <Facebook className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              <Twitter className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              <Instagram className="h-6 w-6" />
            </Link>
            <Link href="#" className="text-white hover:text-gray-200" prefetch={false}>
              <Youtube className="h-6 w-6" />
            </Link>
          </div>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="text-sm hover:underline" prefetch={false}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-sm hover:underline" prefetch={false}>
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-sm hover:underline" prefetch={false}>
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-sm hover:underline" prefetch={false}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Customer Service</h4>
          <ul className="space-y-2">
            <li>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                FAQs
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="#" className="text-sm hover:underline" prefetch={false}>
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <h4 className="text-lg font-semibold">Stay Updated</h4>
          <p className="text-sm">Subscribe to our newsletter for the latest products and offers.</p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              className="flex-grow bg-white text-gray-800 border-none focus:ring-2 focus:ring-white"
            />
            <Button type="submit" className="bg-white text-[#E99C1A] hover:bg-gray-100">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
        &copy; 2025 PAWKET. All rights reserved.
      </div>
    </footer>
  )
}
