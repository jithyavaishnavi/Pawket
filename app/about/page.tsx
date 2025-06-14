import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Link from "next/link"
import ImageWithFallback from "@/components/image-with-fallback"
import { Heart, Leaf, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">About Pawket</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're passionate about providing the best care for your furry friends. Since 2020, we've been your trusted
            partner in pet wellness and happiness.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4">
              Pawket was founded by a team of pet lovers who understood the challenge of finding high-quality,
              affordable pet supplies. We started with a simple mission: to make premium pet care accessible to every
              pet parent.
            </p>
            <p className="text-gray-600 mb-6">
              Today, we're proud to serve thousands of happy pets and their families, offering everything from
              nutritious food to engaging toys, all carefully selected for quality and safety.
            </p>
            <Link href="/shop">
              <Button className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8">Shop Now</Button>
            </Link>
          </div>
          <div className="relative">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=400&fit=crop&crop=center"
              alt="Happy pets with their owners"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg"
              category="default"
            />
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pet-First Approach</h3>
              <p className="text-gray-600">
                Every product we offer is chosen with your pet's health and happiness in mind.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Leaf className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
              <p className="text-gray-600">
                We're committed to eco-friendly practices and sustainable pet care solutions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Community</h3>
              <p className="text-gray-600">
                Building a supportive community of pet parents who care about their furry friends.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center team-card">
              <h3 className="text-xl font-semibold mb-2">Sarah Johnson</h3>
              <p className="text-primary-600 mb-2">Founder & CEO</p>
              <p className="text-gray-600 text-sm">
                Veterinarian with 10+ years of experience in pet care and nutrition.
              </p>
            </div>
            <div className="text-center team-card">
              <h3 className="text-xl font-semibold mb-2">Mike Chen</h3>
              <p className="text-primary-600 mb-2">Head of Product</p>
              <p className="text-gray-600 text-sm">
                Product specialist focused on finding the best supplies for pets of all sizes.
              </p>
            </div>
            <div className="text-center team-card">
              <h3 className="text-xl font-semibold mb-2">Emily Rodriguez</h3>
              <p className="text-primary-600 mb-2">Customer Success</p>
              <p className="text-gray-600 text-sm">
                Dedicated to ensuring every customer has an amazing experience with Pawket.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-2xl p-12 text-center mb-16 md:mb-0 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1415369629372-26f2fe60c467?w=800&h=400&fit=crop&crop=center"
              alt="CTA background"
              fill
              className="object-cover"
              category="default"
            />
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl font-bold mb-4">Ready to Join the Pawket Family?</h2>
            <p className="text-xl mb-8 text-primary-100">
              Discover premium pet supplies that your furry friends will love.
            </p>
            <Link href="/shop">
              <Button size="lg" className="bg-white text-primary-600 hover:bg-gray-100 rounded-full px-8">
                Start Shopping
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#F0F0F0] text-gray-700 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <span className="text-xl font-bold font-montserrat text-primary-500">PAWKET</span>
              </div>
              <p className="text-gray-600 font-poppins">Your trusted partner for premium pet supplies and care.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-montserrat text-gray-800">Quick Links</h3>
              <ul className="space-y-2 text-gray-600 font-poppins">
                <li>
                  <Link href="/shop" className="hover:text-gray-800 transition-colors">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-gray-800 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-gray-800 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-montserrat text-gray-800">Categories</h3>
              <ul className="space-y-2 text-gray-600 font-poppins">
                <li>
                  <Link href="/shop?category=food" className="hover:text-gray-800 transition-colors">
                    Pet Food
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=toys" className="hover:text-gray-800 transition-colors">
                    Toys
                  </Link>
                </li>
                <li>
                  <Link href="/shop?category=grooming" className="hover:text-gray-800 transition-colors">
                    Grooming
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 font-montserrat text-gray-800">Contact Info</h3>
              <ul className="space-y-2 text-gray-600 font-poppins">
                <li>hello@pawket.com</li>
                <li>(555) 123-4567</li>
                <li>123 Pet Street, City</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-600">
            <p className="font-poppins">&copy; 2025 Pawket. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
