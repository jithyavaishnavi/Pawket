import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"
import { FeatureIcons } from "@/components/feature-icons"
import { ProductCard } from "@/components/product-card"
import { Input } from "@/components/ui/input"
import { Footer } from "@/components/footer"

const featuredProducts = [
  {
    _id: "1",
    name: "Premium Dog Food",
    price: 35.99,
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "food",
    description: "Nutritious and delicious food for your canine companion.",
  },
  {
    _id: "2",
    name: "Interactive Cat Toy",
    price: 12.5,
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "toys",
    description: "Keeps your cat entertained for hours.",
  },
  {
    _id: "3",
    name: "Pet Grooming Brush",
    price: 19.99,
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "grooming",
    description: "Gently removes loose fur and keeps coats shiny.",
  },
  {
    _id: "4",
    name: "Comfort Pet Bed",
    price: 59.99,
    imageUrl: "/placeholder.svg?height=200&width=200",
    category: "accessories",
    description: "Soft and cozy bed for ultimate pet comfort.",
  },
]

const customerReviews = [
  {
    name: "Sarah L.",
    rating: 5,
    review: "Pawket has the best selection of pet products! My dog loves everything I get from here.",
  },
  {
    name: "John D.",
    rating: 4,
    review: "Great quality products and fast shipping. Highly recommend!",
  },
  {
    name: "Emily R.",
    rating: 5,
    review: "My cat is very picky, but she adores the toys from Pawket. Fantastic store!",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="relative w-full h-[600px] flex items-center justify-center text-center overflow-hidden bg-gradient-to-br from-[#E99C1A] to-[#FFD700] p-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-br from-[#E99C1A] to-[#FFD700] opacity-80"></div>
            <div className="absolute inset-0 bg-[url('/placeholder.svg')] bg-cover bg-center opacity-20"></div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-white opacity-10 rounded-full animate-pulse"></div>
            <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-white opacity-10 rounded-full animate-pulse delay-200"></div>
            <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-white opacity-10 rounded-full animate-pulse delay-400"></div>
            <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-white opacity-10 rounded-full animate-pulse delay-600"></div>
          </div>
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-center max-w-6xl mx-auto px-4">
            <div className="md:w-1/2 text-left space-y-6 pr-8">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter text-white leading-tight font-montserrat">
                Everything Your Pet Needs, <span className="text-black">All in One Place.</span>
              </h1>
              <p className="text-lg md:text-xl text-white font-poppins">
                Discover a curated selection of premium pet supplies, from nutritious food to fun toys and essential
                grooming products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/shop" passHref>
                  <Button className="bg-white text-[#E99C1A] hover:bg-gray-100 px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 font-poppins">
                    Shop Now
                  </Button>
                </Link>
                <Link href="/about" passHref>
                  <Button
                    variant="outline"
                    className="border-2 border-white text-white hover:bg-white hover:text-[#E99C1A] px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-transform transform hover:scale-105 font-poppins"
                  >
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4 text-white pt-8">
                <div className="text-left">
                  <h3 className="text-4xl font-bold font-montserrat">10K+</h3>
                  <p className="text-sm font-poppins">Happy Customers</p>
                </div>
                <div className="text-left">
                  <h3 className="text-4xl font-bold font-montserrat">500+</h3>
                  <p className="text-sm font-poppins">Products Available</p>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center items-center mt-8 md:mt-0">
              <Image
                src="/images/hero-pets.png"
                alt="Happy pets with Pawket products"
                width={600}
                height={600}
                className="object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Why Choose Pawket?</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-poppins">
                  We are committed to providing the best for your pets with quality products and exceptional service.
                </p>
              </div>
              <FeatureIcons />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Shop by Category</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-poppins">
                  Explore our wide range of products tailored for every pet's needs.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Link href="/shop?category=food" passHref>
                  <Card className="group flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Pet Food"
                      width={100}
                      height={100}
                      className="mb-4 object-cover rounded-full"
                    />
                    <h3 className="text-xl font-semibold font-montserrat">Food</h3>
                    <p className="text-sm text-gray-500 font-poppins">Nutritious meals</p>
                  </Card>
                </Link>
                <Link href="/shop?category=toys" passHref>
                  <Card className="group flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Pet Toys"
                      width={100}
                      height={100}
                      className="mb-4 object-cover rounded-full"
                    />
                    <h3 className="text-xl font-semibold font-montserrat">Toys</h3>
                    <p className="text-sm text-gray-500 font-poppins">Fun and engaging</p>
                  </Card>
                </Link>
                <Link href="/shop?category=grooming" passHref>
                  <Card className="group flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Pet Grooming"
                      width={100}
                      height={100}
                      className="mb-4 object-cover rounded-full"
                    />
                    <h3 className="text-xl font-semibold font-montserrat">Grooming</h3>
                    <p className="text-sm text-gray-500 font-poppins">Keep them clean</p>
                  </Card>
                </Link>
                <Link href="/shop?category=accessories" passHref>
                  <Card className="group flex flex-col items-center justify-center p-6 text-center transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer">
                    <Image
                      src="/placeholder.svg?height=100&width=100"
                      alt="Pet Accessories"
                      width={100}
                      height={100}
                      className="mb-4 object-cover rounded-full"
                    />
                    <h3 className="text-xl font-semibold font-montserrat">Accessories</h3>
                    <p className="text-sm text-gray-500 font-poppins">Everyday essentials</p>
                  </Card>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Featured Products</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-poppins">
                  Discover our top-rated products loved by pets and owners alike.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {featuredProducts.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed font-poppins">
                  Hear from our happy pet parents!
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {customerReviews.map((review, index) => (
                  <Card key={index} className="p-6 flex flex-col items-center text-center">
                    <div className="flex mb-2">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#E99C1A] text-[#E99C1A]" />
                      ))}
                      {[...Array(5 - review.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-gray-300" />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-4 font-poppins">"{review.review}"</p>
                    <p className="font-semibold font-montserrat">- {review.name}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#E99C1A] to-[#FFD700] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-montserrat">Stay Updated!</h2>
              <p className="max-w-[600px] text-gray-50 md:text-xl font-poppins">
                Subscribe to our newsletter for the latest products, deals, and pet care tips.
              </p>
              <div className="w-full max-w-md flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-full border-2 border-white bg-white/20 text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
                />
                <Button className="bg-white text-[#E99C1A] hover:bg-gray-100 px-6 py-2 rounded-full font-semibold shadow-md transition-transform transform hover:scale-105">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
