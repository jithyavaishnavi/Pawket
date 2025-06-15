import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { FeatureIcons } from "@/components/feature-icons"
import { ProductCard } from "@/components/product-card"
import Image from "next/image"
import { Star } from "lucide-react"

async function getProducts() {
  // In a real app, this would fetch from your API
  // For now, we'll use dummy data or a direct import if available
  // This is a placeholder. Replace with actual data fetching.
  const products = [
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
  return products
}

export default async function HomePage() {
  const products = await getProducts()

  return (
    <div className="flex flex-col min-h-[100dvh]">
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative w-full h-[600px] bg-gradient-to-br from-[#E99C1A] to-[#FFC107] flex items-center justify-center text-white overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between z-10">
            <div className="max-w-2xl text-center md:text-left space-y-6">
              <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight font-montserrat leading-tight">
                Everything Your Pet Needs, <br /> All in One Place.
              </h1>
              <p className="text-xl md:text-2xl font-poppins">
                Discover high-quality food, toys, grooming supplies, and accessories for your beloved companions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link href="/shop" passHref>
                  <Button className="bg-white text-[#E99C1A] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#E99C1A] px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative w-[400px] h-[400px] mt-8 md:mt-0">
              <Image
                src="/images/hero-pets.png"
                alt="Happy pets"
                layout="fill"
                objectFit="contain"
                className="drop-shadow-2xl"
              />
              <div className="absolute -top-10 -right-10 w-24 h-24 bg-white bg-opacity-20 rounded-full animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-white bg-opacity-20 rounded-full animate-pulse delay-200" />
            </div>
          </div>
          <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-white rounded-full animate-ping" />
            <div className="absolute bottom-1/3 right-1/3 w-6 h-6 bg-white rounded-full animate-ping delay-100" />
            <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-white rounded-full animate-ping delay-300" />
          </div>
        </section>

        {/* Statistics Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-[#E99C1A] font-montserrat">10K+</h2>
              <p className="text-gray-700 text-lg font-poppins">Happy Customers</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-[#E99C1A] font-montserrat">500+</h2>
              <p className="text-gray-700 text-lg font-poppins">Quality Products</p>
            </div>
            <div className="space-y-2">
              <h2 className="text-5xl font-bold text-[#E99C1A] font-montserrat">5</h2>
              <p className="text-gray-700 text-lg font-poppins">Years in Business</p>
            </div>
          </div>
        </section>

        {/* Shop by Category Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">Shop by Category</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <Link href="/shop?category=Food" passHref>
                <Card className="group flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Food"
                    width={100}
                    height={100}
                    className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold font-montserrat">Food</h3>
                </Card>
              </Link>
              <Link href="/shop?category=Toys" passHref>
                <Card className="group flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Toys"
                    width={100}
                    height={100}
                    className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold font-montserrat">Toys</h3>
                </Card>
              </Link>
              <Link href="/shop?category=Grooming" passHref>
                <Card className="group flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Grooming"
                    width={100}
                    height={100}
                    className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold font-montserrat">Grooming</h3>
                </Card>
              </Link>
              <Link href="/shop?category=Accessories" passHref>
                <Card className="group flex flex-col items-center text-center p-6 bg-white shadow-md hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer">
                  <Image
                    src="/placeholder.svg?height=100&width=100"
                    alt="Accessories"
                    width={100}
                    height={100}
                    className="mb-4 transition-transform duration-300 group-hover:scale-110"
                  />
                  <h3 className="text-xl font-semibold font-montserrat">Accessories</h3>
                </Card>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">Featured Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
            <div className="text-center mt-10">
              <Link href="/shop" passHref>
                <Button className="bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
                  View All Products
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-10 font-montserrat">Why Choose Pawket?</h2>
            <FeatureIcons />
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-10 font-montserrat">What Our Customers Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 fill-[#E99C1A] text-[#E99C1A]`} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 font-poppins">
                    "Pawket has transformed how I shop for my pets. The quality is unmatched, and the delivery is always
                    fast. My furry friends are happier than ever!"
                  </p>
                  <p className="font-semibold text-gray-800 font-montserrat">- Sarah L., 2025</p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 fill-[#E99C1A] text-[#E99C1A]`} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 font-poppins">
                    "I love the variety of products available. It's so easy to find everything I need for my dog and cat
                    in one place. Highly recommend Pawket to all pet parents!"
                  </p>
                  <p className="font-semibold text-gray-800 font-montserrat">- Mark T., 2025</p>
                </CardContent>
              </Card>
              <Card className="shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-5 w-5 fill-[#E99C1A] text-[#E99C1A]`} />
                    ))}
                  </div>
                  <p className="text-gray-700 italic mb-4 font-poppins">
                    "The customer service is exceptional. I had an issue with an order, and they resolved it quickly and
                    efficiently. Pawket truly cares about its customers and their pets."
                  </p>
                  <p className="font-semibold text-gray-800 font-montserrat">- Emily R., 2025</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
