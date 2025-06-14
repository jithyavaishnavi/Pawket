"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Heart } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"
import ImageWithFallback from "@/components/image-with-fallback"

export default function ProductCard({ product }) {
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = (e) => {
    e.preventDefault()
    e.stopPropagation()

    dispatch({
      type: "ADD_ITEM",
      payload: {
        id: product._id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      },
    })

    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <Link href={`/product/${product._id}`}>
      <div className="group bg-white rounded-2xl border border-gray-100 overflow-hidden product-hover cursor-pointer">
        <div className="relative aspect-square overflow-hidden bg-gray-50 image-zoom">
          <ImageWithFallback
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 ease-out"
            category={product.category.toLowerCase()}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {discount > 0 && (
            <Badge className="absolute top-3 left-3 bg-red-500 hover:bg-red-600 discount-badge">{discount}% OFF</Badge>
          )}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-3 right-3 bg-white/80 hover:bg-white heart-icon opacity-0 group-hover:opacity-100 transition-all duration-300"
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
            }}
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        <div className="p-4">
          <div className="mb-2">
            <Badge variant="secondary" className="text-xs">
              {product.category}
            </Badge>
          </div>

          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-primary-500 transition-colors duration-300">
            {product.name}
          </h3>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className={`text-sm transition-colors duration-200 ${
                    i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"
                  }`}
                >
                  ★
                </span>
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <Button
              size="sm"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-4 product-button ripple-button transform transition-all duration-300 hover:scale-105"
            >
              <ShoppingCart className="h-4 w-4 mr-1" />
              Add
            </Button>
          </div>

          {!product.inStock && <p className="text-sm text-red-500 mt-2">Out of Stock</p>}
        </div>
      </div>
    </Link>
  )
}
