import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 font-montserrat">About Pawket</h1>
        <p className="text-lg text-gray-600 font-poppins">
          At Pawket, we believe that pets are family. Our mission is to provide pet owners with high-quality products
          that enhance the lives of their beloved companions.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-800 font-montserrat">Our Story</h2>
          <p className="text-gray-700 leading-relaxed font-poppins">
            Founded in 2025, Pawket started with a simple idea: to create a convenient and reliable online store for pet
            supplies. As pet parents ourselves, we understand the joy and responsibility that comes with having furry,
            feathered, or scaled family members. We noticed a gap in the market for a curated selection of premium
            products, coupled with exceptional customer service.
          </p>
          <p className="text-gray-700 leading-relaxed font-poppins">
            From humble beginnings, we've grown into a trusted name in the pet industry, serving thousands of happy
            customers and their pets across the nation. Our commitment to quality, affordability, and animal welfare
            remains at the heart of everything we do.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Our Story"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#E99C1A] font-montserrat">Quality First</h3>
              <p className="text-gray-700 font-poppins">
                We meticulously select products that meet the highest standards of safety and effectiveness.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#E99C1A] font-montserrat">Customer Happiness</h3>
              <p className="text-gray-700 font-poppins">
                Your satisfaction and your pet's well-being are our top priorities.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-[#E99C1A] font-montserrat">Animal Welfare</h3>
              <p className="text-gray-700 font-poppins">
                We support ethical practices and contribute to animal welfare initiatives.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 font-montserrat">Jane Doe</h3>
              <p className="text-gray-600 font-poppins">Founder & CEO</p>
              <p className="text-gray-700 text-sm font-poppins">
                Jane's passion for pets led her to create Pawket, aiming to provide the best for every furry friend.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 font-montserrat">John Smith</h3>
              <p className="text-gray-600 font-poppins">Head of Product</p>
              <p className="text-gray-700 text-sm font-poppins">
                John ensures every product meets our high standards, focusing on innovation and pet safety.
              </p>
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardContent className="p-6 space-y-3">
              <h3 className="text-xl font-semibold text-gray-800 font-montserrat">Emily White</h3>
              <p className="text-gray-600 font-poppins">Customer Relations Manager</p>
              <p className="text-gray-700 text-sm font-poppins">
                Emily is dedicated to providing exceptional support, making sure every customer is happy.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 font-montserrat">Join Our Pack</h2>
        <p className="text-lg text-gray-600 mb-6 font-poppins">
          Ready to give your pet the best? Explore our wide range of products today!
        </p>
        <Link href="/shop" passHref>
          <Button className="bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg transition-all duration-300">
            Shop Now
          </Button>
        </Link>
      </div>
    </div>
  )
}
