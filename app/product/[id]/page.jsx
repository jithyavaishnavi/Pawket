"use client"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"
import { ImageWithFallback } from "@/components/image-with-fallback"
import staticProducts from "@/lib/static-products"

export default function ProductDetailPage() {
  const { id } = useParams()
  const product = staticProducts.find((p) => p._id === id)
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    if (product) {
      addToCart(product)
      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
      })
    }
  }

  if (!product) {
    return <div className="flex justify-center items-center h-screen text-xl">Product not found.</div>
  }

  const getFallbackImage = (category) => {
    switch (category) {
      case "Food":
        return "/placeholder.svg?height=400&width=400&text=Food+Product"
      case "Toys":
        return "/placeholder.svg?height=400&width=400&text=Toy+Product"
      case "Grooming":
        return "/placeholder.svg?height=400&width=400&text=Grooming+Product"
      case "Accessories":
        return "/placeholder.svg?height=400&width=400&text=Accessory+Product"
      default:
        return "/placeholder.svg?height=400&width=400&text=Product"
    }
  }

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        <div className="flex justify-center items-center bg-gray-100 rounded-lg p-8">
          <ImageWithFallback
            src={product.image || "/placeholder.svg"}
            fallbackSrc={getFallbackImage(product.category)}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain rounded-lg"
          />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold font-montserrat">{product.name}</h1>
          <p className="text-2xl font-semibold text-[#E99C1A] font-poppins">${product.price.toFixed(2)}</p>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-[#E99C1A] text-[#E99C1A]" : "text-gray-300"}`} />
            ))}
            <span className="text-gray-600 ml-2 font-poppins">(4.5 / 5 stars)</span>
          </div>
          <p className="text-gray-700 leading-relaxed font-poppins">{product.description}</p>
          <div className="flex items-center gap-4">
            <span className="text-lg font-medium font-montserrat">Availability:</span>
            <span
              className={`text-lg font-semibold ${product.stock > 0 ? "text-green-600" : "text-red-600"} font-poppins`}
            >
              {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
            </span>
          </div>
          <Button
            className="w-full py-3 text-lg bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white font-poppins"
            onClick={handleAddToCart}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
          </Button>

          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat">Product Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 font-poppins">
              <p>
                <span className="font-medium">Category:</span> {product.category}
              </p>
              <p>
                <span className="font-medium">Brand:</span> Pawket
              </p>
              <p>
                <span className="font-medium">Weight:</span> 2.5 lbs
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="font-montserrat">Customer Reviews</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 font-poppins">
              <div className="border-b pb-4">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 5 ? "fill-[#E99C1A] text-[#E99C1A]" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="font-medium">"Excellent product, my dog loves it!"</p>
                <p className="text-sm text-gray-600">- Jane Doe, 2025</p>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`h-4 w-4 ${i < 4 ? "fill-[#E99C1A] text-[#E99C1A]" : "text-gray-300"}`} />
                  ))}
                </div>
                <p className="font-medium">"Good value for money, my cat enjoys the toy."</p>
                <p className="text-sm text-gray-600">- John Smith, 2025</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
