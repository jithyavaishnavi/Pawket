"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Heart, ShoppingCart, Minus, Plus, Star, Truck, Shield, RotateCcw } from "lucide-react"
import Navbar from "@/components/navbar"
import { useCart } from "@/components/cart-context"
import { useToast } from "@/hooks/use-toast"
import ProductCard from "@/components/product-card"
import ImageWithFallback from "@/components/image-with-fallback"

// Mock product data with relevant images
const product = {
  _id: "1",
  name: "Premium Dog Food - Chicken & Rice",
  price: 29.99,
  originalPrice: 39.99,
  images: [
    "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=500&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=500&h=500&fit=crop&crop=center",
    "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=500&fit=crop&crop=center",
  ],
  category: "Food",
  rating: 4.8,
  reviews: 124,
  inStock: true,
  description:
    "Premium quality dog food made with real chicken and brown rice. Specially formulated for adult dogs with high-quality protein and essential nutrients for optimal health and vitality.",
  features: [
    "Made with real chicken as the first ingredient",
    "No artificial colors, flavors, or preservatives",
    "Rich in protein and essential amino acids",
    "Supports healthy digestion",
    "Veterinarian recommended",
  ],
  specifications: {
    Weight: "15 lbs",
    "Life Stage": "Adult",
    "Breed Size": "All Sizes",
    Protein: "26% min",
    Fat: "16% min",
    Fiber: "4% max",
  },
}

const relatedProducts = [
  {
    _id: "2",
    name: "Interactive Cat Toy Set",
    price: 19.99,
    originalPrice: 24.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.6,
    reviews: 89,
    inStock: true,
  },
  {
    _id: "3",
    name: "Professional Pet Grooming Kit",
    price: 49.99,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop&crop=center",
    category: "Grooming",
    rating: 4.9,
    reviews: 156,
    inStock: true,
  },
  {
    _id: "4",
    name: "Cozy Pet Bed - Large",
    price: 39.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.7,
    reviews: 203,
    inStock: true,
  },
]

export default function ProductPage() {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({
        type: "ADD_ITEM",
        payload: {
          id: product._id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          category: product.category,
        },
      })
    }

    toast({
      title: "Added to cart!",
      description: `${quantity} x ${product.name} added to your cart.`,
    })
  }

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Home</span>
            <span>/</span>
            <span>Shop</span>
            <span>/</span>
            <span>{product.category}</span>
            <span>/</span>
            <span className="text-gray-900">{product.name}</span>
          </div>
        </nav>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-2xl overflow-hidden border border-gray-100 image-zoom">
              <ImageWithFallback
                src={product.images[selectedImage] || "/placeholder.svg"}
                alt={product.name}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                category={product.category.toLowerCase()}
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square bg-white rounded-lg overflow-hidden border-2 gallery-thumb ${
                    selectedImage === index ? "border-primary-500" : "border-gray-200"
                  }`}
                >
                  <ImageWithFallback
                    src={image || "/placeholder.svg"}
                    alt={`${product.name} ${index + 1}`}
                    width={150}
                    height={150}
                    className="w-full h-full object-cover"
                    category={product.category.toLowerCase()}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <span className="ml-2 text-sm text-gray-600">
                  {product.rating} ({product.reviews} reviews)
                </span>
              </div>

              {/* Price */}
              <div className="flex items-center space-x-4 mb-6">
                <span className="text-3xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
                    <Badge className="bg-red-500 hover:bg-red-600">{discount}% OFF</Badge>
                  </>
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <span className="font-medium">Quantity:</span>
                <div className="flex items-center border border-gray-300 rounded-lg">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    <Minus className="h-4 w-4" />
                  </Button>
                  <span className="px-4 py-2 font-medium">{quantity}</span>
                  <Button variant="ghost" size="icon" onClick={() => setQuantity(quantity + 1)}>
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-primary-500 hover:bg-primary-600 text-white rounded-full ripple-button"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Add to Cart
                </Button>
                <Button size="lg" variant="outline" className="rounded-full">
                  <Heart className="h-5 w-5 mr-2" />
                  Add to Wishlist
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-6 border-t border-gray-200">
              <div className="flex items-center space-x-2">
                <Truck className="h-5 w-5 text-green-600" />
                <span className="text-sm text-gray-600">Free Shipping</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-600" />
                <span className="text-sm text-gray-600">Quality Guarantee</span>
              </div>
              <div className="flex items-center space-x-2">
                <RotateCcw className="h-5 w-5 text-primary-600" />
                <span className="text-sm text-gray-600">30-Day Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Tabs */}
        <div className="mb-16">
          <Tabs defaultValue="features" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="features">Features</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="features" className="mt-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>

            <TabsContent value="specifications" className="mt-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="reviews" className="mt-6">
              <div className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xl font-semibold mb-4">Customer Reviews</h3>
                <div className="space-y-4">
                  <div className="border-b border-gray-100 pb-4 flex space-x-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=50&h=50&fit=crop&crop=face"
                      alt="Sarah M."
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      category="default"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                        <span className="ml-2 font-medium">Sarah M.</span>
                      </div>
                      <p className="text-gray-600">
                        "Excellent quality dog food! My golden retriever loves it and his coat has never looked better."
                      </p>
                    </div>
                  </div>
                  <div className="border-b border-gray-100 pb-4 flex space-x-4">
                    <ImageWithFallback
                      src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=50&h=50&fit=crop&crop=face"
                      alt="Mike R."
                      width={50}
                      height={50}
                      className="rounded-full object-cover"
                      category="default"
                    />
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <div className="flex items-center">
                          {[...Array(4)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                          <Star className="w-4 h-4 text-gray-300" />
                        </div>
                        <span className="ml-2 font-medium">Mike R.</span>
                      </div>
                      <p className="text-gray-600">
                        "Good value for money. My dog enjoys it and the ingredients look healthy."
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Related Products */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Related Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-0">
            {relatedProducts.map((relatedProduct) => (
              <ProductCard key={relatedProduct._id} product={relatedProduct} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
