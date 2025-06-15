import { PawPrint, Heart, Bone, Home, ShieldCheck } from "lucide-react"

export function FeatureIcons() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 text-center">
      <div className="flex flex-col items-center space-y-3">
        <PawPrint className="h-12 w-12 text-[#E99C1A]" />
        <h3 className="text-xl font-semibold font-montserrat">Quality Products</h3>
        <p className="text-gray-600 text-sm font-poppins">
          We source only the best for your pets, ensuring safety and durability.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <Heart className="h-12 w-12 text-[#E99C1A]" />
        <h3 className="text-xl font-semibold font-montserrat">Pet Lover Community</h3>
        <p className="text-gray-600 text-sm font-poppins">
          Join a community that shares your passion for pets and their well-being.
        </p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <Bone className="h-12 w-12 text-[#E99C1A]" />
        <h3 className="text-xl font-semibold font-montserrat">Expert Advice</h3>
        <p className="text-gray-600 text-sm font-poppins">Get tips and guidance from our pet care specialists.</p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <Home className="h-12 w-12 text-[#E99C1A]" />
        <h3 className="text-xl font-semibold font-montserrat">Convenient Delivery</h3>
        <p className="text-gray-600 text-sm font-poppins">Hassle-free delivery right to your doorstep, nationwide.</p>
      </div>
      <div className="flex flex-col items-center space-y-3">
        <ShieldCheck className="h-12 w-12 text-[#E99C1A]" />
        <h3 className="text-xl font-semibold font-montserrat">Secure Shopping</h3>
        <p className="text-gray-600 text-sm font-poppins">
          Shop with confidence with our secure payment and data protection.
        </p>
      </div>
    </div>
  )
}
