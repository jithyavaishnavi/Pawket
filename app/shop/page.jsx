import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import staticProducts from "@/lib/static-products"

export default async function ShopPage() {
  const products = staticProducts

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <h1 className="text-4xl font-bold text-center mb-8 font-montserrat">Our Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">
        {/* Filters Sidebar */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6 font-montserrat">Filters</h2>
          <div className="space-y-6">
            {/* Search */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Search</h3>
              <Input placeholder="Search products..." type="text" />
            </div>

            <Separator />

            {/* Category Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Category</h3>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="All Categories" />
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

            <Separator />

            {/* Price Range */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Price Range</h3>
              <Slider defaultValue={[0, 100]} max={200} step={1} className="w-full" />
              <div className="flex justify-between text-sm text-gray-600 mt-2 font-poppins">
                <span>$0</span>
                <span>$200+</span>
              </div>
            </div>

            <Separator />

            {/* Rating Filter */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Rating</h3>
              <div className="flex items-center gap-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`h-5 w-5 ${i < 4 ? "fill-[#E99C1A] text-[#E99C1A]" : "text-gray-300"}`} />
                ))}
                <span className="text-sm text-gray-600 font-poppins">4 & up</span>
              </div>
            </div>

            <Separator />

            {/* Availability */}
            <div>
              <h3 className="text-lg font-semibold mb-2 font-poppins">Availability</h3>
              <div className="flex flex-col gap-2">
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="in-stock" className="form-checkbox text-[#E99C1A]" />
                  <label htmlFor="in-stock" className="text-sm font-poppins">
                    In Stock
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="checkbox" id="on-sale" className="form-checkbox text-[#E99C1A]" />
                  <label htmlFor="on-sale" className="text-sm font-poppins">
                    On Sale
                  </label>
                </div>
              </div>
            </div>

            <Button className="w-full bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white font-poppins">Apply Filters</Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
