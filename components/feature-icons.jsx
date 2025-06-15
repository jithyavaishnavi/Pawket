import { Truck, ShieldCheck, Heart, Award } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function FeatureIcons() {
  const features = [
    {
      icon: <Truck className="h-8 w-8 text-[#E99C1A]" />,
      title: "Fast Shipping",
      description: "Get your pet essentials delivered right to your door, quickly and efficiently.",
    },
    {
      icon: <ShieldCheck className="h-8 w-8 text-[#E99C1A]" />,
      title: "Quality Guaranteed",
      description: "We only offer products that meet our high standards for safety and effectiveness.",
    },
    {
      icon: <Heart className="h-8 w-8 text-[#E99C1A]" />,
      title: "Pet Lover Community",
      description: "Join a community of passionate pet owners and share your experiences.",
    },
    {
      icon: <Award className="h-8 w-8 text-[#E99C1A]" />,
      title: "Award-Winning Support",
      description: "Our dedicated team is here to help you with any questions or concerns.",
    },
  ]

  return (
    <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((feature, index) => (
        <Card key={index} className="p-6 flex flex-col items-center text-center">
          <CardContent className="flex flex-col items-center justify-center p-0">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2 font-montserrat">{feature.title}</h3>
            <p className="text-gray-500 font-poppins">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
