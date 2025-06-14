"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import ProductCard from "@/components/product-card"
import Navbar from "@/components/navbar"
import { Filter, X } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

// Mock products data with relevant images
const allProducts = [
  {
    _id: "1",
    name: "Premium Dog Food - Chicken & Rice",
    price: 29.99,
    originalPrice: 39.99,
    image: "https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.8,
    reviews: 124,
    inStock: true,
  },
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
  {
    _id: "5",
    name: "Natural Cat Treats",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.5,
    reviews: 67,
    inStock: true,
  },
  {
    _id: "6",
    name: "Dog Leash & Collar Set",
    price: 24.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.4,
    reviews: 98,
    inStock: false,
  },
  {
    _id: "7",
    name: "Cat Scratching Post",
    price: 34.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.6,
    reviews: 145,
    inStock: true,
  },
  {
    _id: "8",
    name: "Dog Chew Toys Bundle",
    price: 16.99,
    originalPrice: 22.99,
    image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.3,
    reviews: 78,
    inStock: true,
  },
  {
    _id: "9",
    name: "Pet Shampoo & Conditioner",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop&crop=center",
    category: "Grooming",
    rating: 4.7,
    reviews: 92,
    inStock: true,
  },
  {
    _id: "10",
    name: "Automatic Pet Feeder",
    price: 89.99,
    originalPrice: 109.99,
    image: "https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.8,
    reviews: 234,
    inStock: true,
  },
  {
    _id: "11",
    name: "Catnip Mice Toys (6-Pack)",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.4,
    reviews: 156,
    inStock: true,
  },
  {
    _id: "12",
    name: "Dental Chews for Dogs",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=400&h=400&fit=crop&crop=center",
    category: "Health",
    rating: 4.6,
    reviews: 189,
    inStock: true,
  },
  {
    _id: "13",
    name: "Cat Water Fountain",
    price: 45.99,
    originalPrice: 59.99,
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.7,
    reviews: 167,
    inStock: true,
  },
  {
    _id: "14",
    name: "Dog Training Treats",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.5,
    reviews: 98,
    inStock: true,
  },
  {
    _id: "15",
    name: "Pet Carrier Bag",
    price: 32.99,
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.3,
    reviews: 76,
    inStock: true,
  },
  {
    _id: "16",
    name: "Interactive Puzzle Toy",
    price: 22.99,
    originalPrice: 29.99,
    image: "https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=400&h=400&fit=crop&crop=center",
    category: "Toys",
    rating: 4.6,
    reviews: 134,
    inStock: true,
  },
  {
    _id: "17",
    name: "Pet Nail Clippers",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1560807707-8cc77767d783?w=400&h=400&fit=crop&crop=center",
    category: "Grooming",
    rating: 4.4,
    reviews: 89,
    inStock: true,
  },
  {
    _id: "18",
    name: "Organic Cat Food",
    price: 26.99,
    originalPrice: 34.99,
    image: "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=400&h=400&fit=crop&crop=center",
    category: "Food",
    rating: 4.8,
    reviews: 156,
    inStock: true,
  },
  {
    _id: "19",
    name: "Dog Waste Bags",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1605568427561-40dd23c2acea?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.2,
    reviews: 67,
    inStock: true,
  },
  {
    _id: "20",
    name: "Cat Litter Box",
    price: 38.99,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop&crop=center",
    category: "Accessories",
    rating: 4.5,
    reviews: 123,
    inStock: true,
  },
]

const categories = ["All", "Food", "Toys", "Grooming", "Accessories", "Health"]

export default function ShopPage() {
  const [products, setProducts] = useState(allProducts)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 100])
  const [sortBy, setSortBy] = useState("name")
  const [isFilterOpen, setIsFilterOpen] = useState(false)

  useEffect(() => {
    let filtered = allProducts

    // Filter by category
    if (selectedCategory !== "All") {
      filtered = filtered.filter((product) => product.category === selectedCategory)
    }

    // Filter by price range
    filtered = filtered.filter((product) => product.price >= priceRange[0] && product.price <= priceRange[1])

    // Sort products
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return b.rating - a.rating
        case "name":
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setProducts(filtered)
  }, [selectedCategory, priceRange, sortBy])

  const FilterContent = () => (
    <div className="space-y-6">
      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-3">Categories</h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-3">Price Range</h3>
        <div className="px-2">
          <Slider value={priceRange} onValueChange={setPriceRange} max={100} min={0} step={5} className="mb-2" />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Clear Filters */}
      <Button
        variant="outline"
        className="w-full"
        onClick={() => {
          setSelectedCategory("All")
          setPriceRange([0, 100])
        }}
      >
        Clear Filters
      </Button>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shop Pet Supplies</h1>
            <p className="text-gray-600">Discover premium products for your furry friends</p>
          </div>

          <div className="flex items-center space-x-4 mt-4 md:mt-0">
            {/* Mobile Filter Button */}
            <Sheet open={isFilterOpen} onOpenChange={setIsFilterOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" className="md:hidden">
                  <Filter className="h-4 w-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[300px]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                </SheetHeader>
                <div className="mt-6">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>

            {/* Sort Dropdown */}
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name A-Z</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="rating">Highest Rated</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Desktop Sidebar Filters */}
          <div className="hidden md:block w-64 flex-shrink-0">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 sticky top-24">
              <h2 className="font-semibold text-lg mb-4">Filters</h2>
              <FilterContent />
            </div>
          </div>

          {/* Products Grid */}
          <div className="flex-1">
            {/* Active Filters */}
            {(selectedCategory !== "All" || priceRange[0] > 0 || priceRange[1] < 100) && (
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {selectedCategory !== "All" && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      {selectedCategory}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setSelectedCategory("All")} />
                    </Badge>
                  )}
                  {(priceRange[0] > 0 || priceRange[1] < 100) && (
                    <Badge variant="secondary" className="flex items-center gap-1">
                      ${priceRange[0]} - ${priceRange[1]}
                      <X className="h-3 w-3 cursor-pointer" onClick={() => setPriceRange([0, 100])} />
                    </Badge>
                  )}
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mb-6">
              <p className="text-gray-600">
                Showing {products.length} of {allProducts.length} products
              </p>
            </div>

            {/* Products Grid */}
            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 md:mb-0">
                {products.map((product, index) => (
                  <div key={product._id} className="product-grid-item">
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                <Button
                  className="mt-4"
                  onClick={() => {
                    setSelectedCategory("All")
                    setPriceRange([0, 100])
                  }}
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
