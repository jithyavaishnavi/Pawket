import Link from "next/link"
import { ShoppingCart, Home } from "lucide-react"

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-3 bg-white shadow-sm">
      <Link href="/" className="text-2xl font-bold text-[#E99C1A] font-montserrat" prefetch={false}>
        PAWKET
      </Link>
      <nav className="flex items-center space-x-4">
        <Link href="/" className="text-gray-600 hover:text-[#E99C1A]" prefetch={false}>
          <Home className="h-6 w-6" />
          <span className="sr-only">Home</span>
        </Link>
        <Link href="/cart" className="text-gray-600 hover:text-[#E99C1A]" prefetch={false}>
          <ShoppingCart className="h-6 w-6" />
          <span className="sr-only">Cart</span>
        </Link>
      </nav>
    </header>
  )
}
