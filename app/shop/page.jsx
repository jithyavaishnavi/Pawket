"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { useToast } from "@/hooks/use-toast"

export default function ShopPage() {
  const searchParams = useSearchParams()
  const initialCategory = searchParams.get("category") || "all"

  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState(initialCategory)
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortOrder, setSortOrder] = useState("default")
  const { toast } = useToast()

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("/api/products")
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setProducts(data)
      } catch (err) {
        setError(err.message)
        toast({
          title: "Error",
          description: `Failed to load products: ${err.message}`,
          variant: "destructive",
        })
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [toast])

  const filteredProducts = products
    .filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]
      return matchesSearch && matchesCategory && matchesPrice
    })
    .sort((a, b) => {
      if (sortOrder === "price-asc") {
        return a.price - b.price
      }
      if (sortOrder === "price-desc") {
        return b.price - a.price
      }
      if (sortOrder === "name-asc") {
        return a.name.localeCompare(b.name)
      }
      if (sortOrder === "name-desc") {
        return b.name.localeCompare(a.name)
      }
      return 0
    })

  const getFallbackImage = (category) => {
    switch (category) {
      case "food":
        return "/placeholder.svg?height=200&width=200&text=Food"
      case "toys":
        return "/placeholder.svg?height=200&width=200&text=Toy"
      case "grooming":
        return "/placeholder.svg?height=200&width=200&text=Grooming"
      case "accessories":
        return "/placeholder.svg?height=200&width=200&text=Accessory"
      default:
        return "/placeholder.svg?height=200&width=200&text=Product"
    }
  }

  if (loading) {
    return <div className="flex justify-center items-center h-screen text-xl">Loading products...</div>
  }

  if (error) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-500">Error: {error}</div>
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Our Products</h1>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Filters */}
        <div className="md:col-span-1 space-y-6">
          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Search</h2>
            <Input
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Category</h2>
            <Select onValueChange={setSelectedCategory} value={selectedCategory}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="food">Food</SelectItem>
                <SelectItem value="toys">Toys</SelectItem>
                <SelectItem value="grooming">Grooming</SelectItem>
                <SelectItem value="accessories">Accessories</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Price Range</h2>
            <Slider min={0} max={100} step={1} value={priceRange} onValueChange={setPriceRange} className="mb-2" />
            <div className="flex justify-between text-sm text-gray-600">
              <span>${priceRange[0].toFixed(2)}</span>
              <span>${priceRange[1].toFixed(2)}</span>
            </div>
          </div>

          <div className="border p-4 rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Sort By</h2>
            <Select onValueChange={setSortOrder} value={sortOrder}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Sort By" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name-asc">Name: A-Z</SelectItem>
                <SelectItem value="name-desc">Name: Z-A</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="md:col-span-3">
          {filteredProducts.length === 0 ? (
            <div className="text-center text-gray-600 text-lg mt-10">No products found matching your criteria.</div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product._id}
                  product={{ ...product, imageUrl: product.imageUrl || getFallbackImage(product.category) }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
