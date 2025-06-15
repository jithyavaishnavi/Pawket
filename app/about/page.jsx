import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin } from "lucide-react"

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Alice Johnson",
      role: "CEO & Founder",
      description:
        "Alice founded Pawket with a passion for animal welfare and a vision to create a one-stop shop for pet parents.",
    },
    {
      name: "Bob Williams",
      role: "Head of Product",
      description:
        "Bob ensures that every product meets the highest standards of quality and safety for your beloved pets.",
    },
    {
      name: "Charlie Brown",
      role: "Customer Relations",
      description:
        "Charlie is dedicated to providing exceptional customer service and building a strong community of pet lovers.",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#E99C1A] to-[#FFD700] text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-extrabold tracking-tighter sm:text-5xl xl:text-6xl/none">About Pawket</h1>
                <p className="max-w-[600px] text-gray-50 md:text-xl">
                  Your trusted partner in pet care. We are dedicated to providing the best products and services for
                  your furry friends.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Mission</h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    At Pawket, our mission is to enhance the lives of pets and their owners by offering a curated
                    selection of high-quality, safe, and innovative pet supplies. We believe every pet deserves the
                    best, and we are committed to making pet care accessible and enjoyable for everyone.
                  </p>
                </div>
              </div>
              <Image
                alt="Our Mission"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <Image
                alt="Our Values"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full"
                height="310"
                src="/placeholder.svg?height=310&width=550"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Values</h2>
                  <ul className="list-disc list-inside max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    <li>**Quality:** We source only the best products for your pets.</li>
                    <li>**Care:** We prioritize the health and happiness of animals.</li>
                    <li>**Community:** We foster a supportive environment for pet parents.</li>
                    <li>**Innovation:** We constantly seek new ways to improve pet care.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Meet Our Team</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our dedicated team is passionate about pets and committed to providing you with the best experience.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {teamMembers.map((member, index) => (
                  <Card key={index}>
                    <CardHeader className="flex flex-col items-center text-center">
                      <CardTitle>{member.name}</CardTitle>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-gray-700">{member.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Contact Us</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We'd love to hear from you.
                </p>
              </div>
              <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                <Card>
                  <CardHeader className="flex flex-col items-center text-center">
                    <Mail className="h-8 w-8 text-[#E99C1A]" />
                    <CardTitle>Email Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">info@pawket.com</p>
                    <Button variant="link" className="text-[#E99C1A]">
                      Send a Message
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-col items-center text-center">
                    <Phone className="h-8 w-8 text-[#E99C1A]" />
                    <CardTitle>Call Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">+1 (123) 456-7890</p>
                    <Button variant="link" className="text-[#E99C1A]">
                      Give us a Call
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="flex flex-col items-center text-center">
                    <MapPin className="h-8 w-8 text-[#E99C1A]" />
                    <CardTitle>Visit Us</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-700">123 Pet Lane, Animal City, PA 12345</p>
                    <Button variant="link" className="text-[#E99C1A]">
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
