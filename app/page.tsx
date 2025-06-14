import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Heart, ShoppingBag, Scissors, Pill } from "lucide-react"
import ProductCard from "@/components/product-card"
import Navbar from "@/components/navbar"
import { TruckIcon, ShieldIcon, SupportIcon } from "@/components/feature-icons"
import ImageWithFallback from "@/components/image-with-fallback"

// Mock data for featured products with relevant images
const featuredProducts = [
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
]

const categories = [
  {
    name: "Dog Food",
    icon: ShoppingBag,
    color: "bg-orange-100 text-orange-600",
    href: "/shop?category=food",
  },
  {
    name: "Cat Food",
    icon: Heart,
    color: "bg-primary-100 text-primary-600",
    href: "/shop?category=food",
  },
  {
    name: "Toys",
    icon: ShoppingBag,
    color: "bg-green-100 text-green-600",
    href: "/shop?category=toys",
  },
  {
    name: "Grooming",
    icon: Scissors,
    color: "bg-blue-100 text-blue-600",
    href: "/shop?category=grooming",
  },
  {
    name: "Accessories",
    icon: ShoppingBag,
    color: "bg-secondary-100 text-secondary-600",
    href: "/shop?category=accessories",
  },
  {
    name: "Health",
    icon: Pill,
    color: "bg-red-100 text-red-600",
    href: "/shop?category=health",
  },
]

const customerReviews = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    review:
      "Pawket has been a game-changer for my golden retriever! The quality of products is outstanding and delivery is always on time. Highly recommend!",
    date: "January 2025",
    location: "New York, NY",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    review:
      "Amazing selection of pet supplies! My cats love the toys I ordered, and the customer service team was incredibly helpful when I had questions.",
    date: "January 2025",
    location: "Los Angeles, CA",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    review:
      "Great prices and fast shipping. The grooming kit I bought works perfectly for my poodle. Will definitely order again!",
    date: "December 2024",
    location: "Chicago, IL",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "David Thompson",
    rating: 5,
    review:
      "Best pet store online! The premium dog food has made such a difference in my dog's energy and coat. Thank you Pawket!",
    date: "January 2025",
    location: "Austin, TX",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Lisa Wang",
    rating: 5,
    review:
      "Love the variety and quality! My rescue cats are thriving with the products from Pawket. The subscription service is so convenient.",
    date: "January 2025",
    location: "Seattle, WA",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "James Miller",
    rating: 4,
    review:
      "Excellent experience from start to finish. The pet bed I ordered is perfect for my senior dog. Great value for money!",
    date: "December 2024",
    location: "Miami, FL",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  },
]

async function getProducts() {
  try {
    // Use relative URL for API calls
    const baseUrl = process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000"

    const res = await fetch(`${baseUrl}/api/products`, {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    })

    if (!res.ok) {
      console.error("Failed to fetch products:", res.status)
      return []
    }

    return res.json()
  } catch (error) {
    console.error("Error fetching products:", error)
    return []
  }
}

export default async function Home() {
  const products = await getProducts()
  const displayProducts = products.length > 0 ? products.slice(0, 4) : featuredProducts

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero Section - Updated with #E99C1A color */}
      <section className="relative bg-gradient-to-br from-[#E99C1A] via-[#D4841A] to-[#B87815] text-white py-20 mb-16 overflow-hidden">
        {/* Decorative Stars */}
        <div className="absolute top-16 right-32 text-white opacity-80">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>
        <div className="absolute top-32 right-80 text-white opacity-60">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight font-montserrat mb-6">
                  One-stop shop for all things furry & fun.
                </h1>
                <p className="text-xl lg:text-2xl text-orange-100 font-poppins mb-8 leading-relaxed">
                  "Healthy food, fun toys, and cozy accessories. Handpicked for every wag, purr, and snuggle."
                </p>
                <Link href="/shop">
                  <Button
                    size="lg"
                    className="bg-white text-[#E99C1A] hover:bg-orange-50 rounded-full px-12 py-4 text-lg font-semibold font-poppins shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Shop Now
                  </Button>
                </Link>
              </div>

              {/* Statistics */}
              <div className="grid grid-cols-3 gap-8 pt-8">
                <div>
                  <div className="text-4xl lg:text-5xl font-black font-montserrat mb-2">200+</div>
                  <div className="text-orange-100 font-poppins text-sm lg:text-base">International Brands</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-black font-montserrat mb-2">2,000+</div>
                  <div className="text-orange-100 font-poppins text-sm lg:text-base">High-Quality Products</div>
                </div>
                <div>
                  <div className="text-4xl lg:text-5xl font-black font-montserrat mb-2">30,000+</div>
                  <div className="text-orange-100 font-poppins text-sm lg:text-base">Happy Customers</div>
                </div>
              </div>
            </div>

            {/* Right Content - Larger Pet Image */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative transform lg:translate-x-8">
                <ImageWithFallback
                  src="/images/hero-pets.png"
                  alt="Stylish cat and dog with sunglasses"
                  width={600}
                  height={500}
                  className="object-contain drop-shadow-2xl hero-image"
                  priority
                  category="default"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - Simplified with React Icons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900 font-montserrat">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => {
            const IconComponent = category.icon
            return (
              <Link key={category.name} href={category.href}>
                <div className="group text-center p-6 rounded-2xl bg-white border border-gray-100 category-card cursor-pointer hover:shadow-lg transition-all duration-300">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${category.color} category-image`}
                  >
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 font-poppins relative z-10">
                    {category.name}
                  </h3>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 font-montserrat">Featured Products</h2>
          <Link href="/shop">
            <Button variant="outline" className="rounded-full font-poppins">
              View All Products
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayProducts.map((product, index) => (
            <div key={product._id} className="product-grid-item">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Features Section with React Icons */}
      <section className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center feature-card group">
              <div className="w-16 h-16 mx-auto mb-4 text-green-600 feature-icon">
                <TruckIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Free Delivery</h3>
              <p className="text-gray-600 font-poppins">Free delivery on orders over $50</p>
            </div>
            <div className="text-center feature-card group">
              <div className="w-16 h-16 mx-auto mb-4 text-blue-600 feature-icon">
                <ShieldIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">Quality Guarantee</h3>
              <p className="text-gray-600 font-poppins">100% satisfaction guaranteed</p>
            </div>
            <div className="text-center feature-card group">
              <div className="w-16 h-16 mx-auto mb-4 text-primary-600 feature-icon">
                <SupportIcon className="w-full h-full" />
              </div>
              <h3 className="text-xl font-semibold mb-2 font-montserrat">24/7 Support</h3>
              <p className="text-gray-600 font-poppins">Expert pet care advice anytime</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section className="bg-white py-16 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 font-montserrat mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600 font-poppins">Join thousands of happy pet parents who trust Pawket</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {customerReviews.map((review) => (
              <Card key={review.id} className="border-0 shadow-lg review-card">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 transition-colors duration-200 ${i < review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600 font-poppins">{review.rating}/5</span>
                  </div>

                  <p className="text-gray-700 mb-4 font-poppins leading-relaxed">"{review.review}"</p>

                  <div className="border-t pt-4 flex items-center space-x-3">
                    <div className="review-avatar">
                      <ImageWithFallback
                        src={review.avatar || "/placeholder.svg"}
                        alt={review.name}
                        width={40}
                        height={40}
                        className="rounded-full object-cover"
                        category="default"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 font-montserrat">{review.name}</p>
                      <p className="text-sm text-gray-600 font-poppins">{review.location}</p>
                      <p className="text-sm text-gray-500 font-poppins">{review.date}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-4 bg-primary-50 rounded-full px-8 py-4">
              <div className="flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-left">
                <p className="text-lg font-bold text-gray-900 font-montserrat">4.8/5 Average Rating</p>
                <p className="text-sm text-gray-600 font-poppins">Based on 2,500+ reviews</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section - Improved Symmetrical Design */}
      <section className="bg-[#E99C1A] text-white py-8 mb-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="text-2xl lg:text-3xl font-bold font-montserrat leading-tight">
                STAY UP TO DATE ABOUT
                <br />
                OUR LATEST OFFERS
              </h2>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[500px]">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full h-12 pl-12 pr-4 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white font-poppins text-base border-0 shadow-sm"
                />
              </div>
              <Button className="h-12 bg-white text-[#E99C1A] hover:bg-gray-100 rounded-full px-8 font-poppins font-medium whitespace-nowrap text-base shadow-sm transition-all duration-200 hover:shadow-md">
                Subscribe to Newsletter
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer - Exact Design Match */}
      <footer className="bg-[#F5F5F5] text-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 mb-12">
            {/* PAWKET Brand - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="mb-6">
                <span className="text-3xl font-black font-montserrat text-[#E99C1A]">PAWKET</span>
              </div>
              <p className="text-gray-600 font-poppins mb-8 text-base leading-relaxed max-w-sm">
                We have clothes that suits your style and which you're proud to wear. From women to men.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001.012.001z" />
                  </svg>
                </div>
                <div className="w-10 h-10 bg-white border border-gray-300 rounded flex items-center justify-center hover:bg-gray-50 transition-colors cursor-pointer">
                  <svg className="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                    <path
                      d="M18 11h4c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5h-1.5l-.5 2h-1.5l1.5-7.5zm2 1.5l-.5 2h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1zm-1.5 3l-.5 2h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1z"
                      fill="#003087"
                    />
                    <path d="M12.5 7h4.5v8H12.5v-3h-1.5v3H9V7h1.5v2.5H12.5V7z" fill="#009CDE" />
                  </svg>
                </div>
              </div>
            </div>

            {/* COMPANY */}
            <div>
              <h3 className="font-semibold mb-6 font-montserrat text-gray-900 text-base tracking-wide">COMPANY</h3>
              <ul className="space-y-4 text-gray-600 font-poppins text-base">
                <li>
                  <Link href="/about" className="hover:text-gray-900 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/features" className="hover:text-gray-900 transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="/works" className="hover:text-gray-900 transition-colors">
                    Works
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-gray-900 transition-colors">
                    Career
                  </Link>
                </li>
              </ul>
            </div>

            {/* HELP */}
            <div>
              <h3 className="font-semibold mb-6 font-montserrat text-gray-900 text-base tracking-wide">HELP</h3>
              <ul className="space-y-4 text-gray-600 font-poppins text-base">
                <li>
                  <Link href="/support" className="hover:text-gray-900 transition-colors">
                    Customer Support
                  </Link>
                </li>
                <li>
                  <Link href="/delivery" className="hover:text-gray-900 transition-colors">
                    Delivery Details
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-gray-900 transition-colors">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-gray-900 transition-colors">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* FAQ */}
            <div>
              <h3 className="font-semibold mb-6 font-montserrat text-gray-900 text-base tracking-wide">FAQ</h3>
              <ul className="space-y-4 text-gray-600 font-poppins text-base">
                <li>
                  <Link href="/account" className="hover:text-gray-900 transition-colors">
                    Account
                  </Link>
                </li>
                <li>
                  <Link href="/deliveries" className="hover:text-gray-900 transition-colors">
                    Manage Deliveries
                  </Link>
                </li>
                <li>
                  <Link href="/orders" className="hover:text-gray-900 transition-colors">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link href="/payments" className="hover:text-gray-900 transition-colors">
                    Payments
                  </Link>
                </li>
              </ul>
            </div>

            {/* RESOURCES */}
            <div>
              <h3 className="font-semibold mb-6 font-montserrat text-gray-900 text-base tracking-wide">RESOURCES</h3>
              <ul className="space-y-4 text-gray-600 font-poppins text-base">
                <li>
                  <Link href="/ebooks" className="hover:text-gray-900 transition-colors">
                    Free eBooks
                  </Link>
                </li>
                <li>
                  <Link href="/tutorial" className="hover:text-gray-900 transition-colors">
                    Development Tutorial
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-gray-900 transition-colors">
                    How to - Blog
                  </Link>
                </li>
                <li>
                  <Link href="/youtube" className="hover:text-gray-900 transition-colors">
                    Youtube Playlist
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-300 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 font-poppins text-base mb-4 md:mb-0">Pawket ©2025, All Rights Reserved</p>
            <div className="flex space-x-3">
              {/* Visa */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white" />
                  <path
                    d="M16.283 7.2h-2.433l-1.517 9.6h2.433l1.517-9.6zm7.45 6.133c.01-2.533-3.5-2.673-3.475-3.8.008-.343.333-.708 1.05-.8.35-.045 1.317-.08 2.417.425l.433-2.017c-.583-.217-1.333-.425-2.267-.425-2.4 0-4.083 1.275-4.1 3.1-.017 1.35 1.2 2.1 2.117 2.55.942.458 1.258.75 1.25 1.158-.008.625-.75.9-1.442.908-1.208.017-1.908-.325-2.467-.583l-.433 2.033c.558.258 1.592.483 2.667.5 2.55 0 4.217-1.258 4.25-3.208v-.241zm6.5-6.133h-1.883c-.583 0-1.017.167-1.275.775l-3.6 8.825h2.55s.417-1.158.508-1.408h3.125c.075.342.3 1.408.3 1.408h2.25l-1.975-9.6zm-3.058 6.058c.2-.533 1.017-2.708 1.017-2.708s.208-.558.333-.917l.175.825s.483 2.342.583 2.8h-2.108zm-13.308-6.058l-2.375 6.567-.25-1.267c-.433-1.475-1.783-3.067-3.292-3.867l2.175 8.167h2.575l3.833-9.6h-2.666z"
                    fill="#1434CB"
                  />
                </svg>
              </div>

              {/* Mastercard */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white" />
                  <circle cx="15" cy="12" r="6" fill="#EB001B" />
                  <circle cx="25" cy="12" r="6" fill="#F79E1B" />
                  <path
                    d="M20 7.5c1.5 1.2 2.5 3 2.5 4.5s-2 4.5-4.5 4.5h-2l-.5 2h-2l1.5-7.5zm2.5 2l-.5 2.5h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1.5zm-2 4l-.5 2.5h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1z"
                    fill="#FF5F00"
                  />
                </svg>
              </div>

              {/* PayPal */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white" />
                  <path
                    d="M12.5 7h4.5c2.5 0 4.5 2 4.5 4.5s-2 4.5-4.5 4.5h-2l-.5 2h-2l1.5-7.5zm2.5 2l-.5 2.5h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1.5zm-2 4l-.5 2.5h2c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5h-1z"
                    fill="#003087"
                  />
                  <path
                    d="M18 11h4c2 0 3.5 1.5 3.5 3.5s-1.5 3.5-3.5 3.5h-1.5l-.5 2h-1.5l1.5-7.5zm2 1.5l-.5 2h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1zm-1.5 3l-.5 2h1.5c.6 0 1-.4 1-1s-.4-1-1-1h-1z"
                    fill="#009CDE"
                  />
                </svg>
              </div>

              {/* Apple Pay */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white" />
                  <path
                    d="M16.5 8.5c-.3-.4-.8-.7-1.3-.6-.1.5.1 1 .4 1.3.3.4.8.6 1.2.6.1-.5-.1-1-.3-1.3zm.4 1.5c-.7 0-1.3.4-1.6.4s-.9-.4-1.5-.4c-.8 0-1.5.4-1.9 1.1-.8 1.4-.2 3.5.6 4.6.4.5.9 1.1 1.5 1.1s.8-.4 1.5-.4.9.4 1.5.4 1-.6 1.4-1.1c.5-.6.7-1.2.7-1.2s-1.4-.5-1.4-2c0-1.2 1-1.8 1-1.8s-.6-1-1.5-1.1c-.1-.1-.2-.1-.3-.1z"
                    fill="black"
                  />
                  <path d="M25 8h1.5v8H25v-3h-1.5v3H22V8h1.5v2.5H25V8z" fill="black" />
                </svg>
              </div>

              {/* Google Pay */}
              <div className="w-12 h-8 bg-white border border-gray-200 rounded flex items-center justify-center shadow-sm">
                <svg className="w-8 h-5" viewBox="0 0 40 24" fill="none">
                  <rect width="40" height="24" rx="4" fill="white" />
                  <path
                    d="M20 9v2.5h3.5c-.2 1-1.2 2.5-3.5 2.5-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8c1.2 0 2 .5 2.5 1l2-2c-1.3-1.2-3-2-4.5-2-3.6 0-6.5 2.9-6.5 6.5s2.9 6.5 6.5 6.5c3.8 0 6.3-2.7 6.3-6.5 0-.4 0-.8-.1-1.2H20z"
                    fill="#4285F4"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
