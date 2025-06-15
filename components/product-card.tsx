// Reverted to original TypeScript content (with `imageUrl` and potential syntax error)
"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, ShoppingCart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"
import { ImageWithFallback } from "@/components/image-with-fallback"

export function ProductCard({ product }: { product: any }) {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault() // Prevent navigating to product detail page
    e.stopPropagation() // Stop event propagation
    addToCart(product)
    toast({
      title: "Added to Cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const getFallbackImage = (category: string) => {
    switch (category) {
      case "Food":
        return "/placeholder.svg?height=200&width=200&text=Food"
      case "Toys":
        return "/placeholder.svg?height=200&width=200&text=Toy"
      case "Grooming":
        return "/placeholder.svg?height=200&width=200&text=Grooming"
      case "Accessories":
        return "/placeholder.svg?height=200&width=200&text=Accessory"
      default:
        return "/placeholder.svg?height=200&width=200&text=Product"
    }
  }

  return (
    <Link href={`/product/${product._id}`} passHref>
      <Card className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
        <CardContent className="p-4 flex flex-col items-center text-center">
          <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
            <ImageWithFallback
              src={product.imageUrl || "/placeholder.svg"} // Changed from product.imageUrl to product.image */}\
              fallbackSrc={getFallbackImage(product.category)}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-lg font-semibold mb-1 font-montserrat">{product.name}</h3>
          <p className="text-gray-600 mb-2 font-poppins">${product.price.toFixed(2)}</p>
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-[#E99C1A] text-[#E99C1A]" : "text-gray-300"}`} />
            ))}
            <span className="text-sm text-gray-500 ml-1 font-poppins">(4.5)</span>
          </div>
          <Button
            className="w-full bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white font-poppins"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}
