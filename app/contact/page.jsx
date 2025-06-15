import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <div className="container mx-auto py-12 px-4 md:px-6">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-800 font-montserrat">Contact Us</h1>
        <p className="text-lg text-gray-600 font-poppins">
          Have a question or need assistance? Fill out the form below or reach out to us directly.
        </p>
      </div>

      <div className="max-w-2xl mx-auto mt-10 bg-white p-8 rounded-lg shadow-lg">
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-poppins">
              Name
            </label>
            <Input id="name" type="text" placeholder="Your Name" className="mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-poppins">
              Email
            </label>
            <Input id="email" type="email" placeholder="Your Email" className="mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 font-poppins">
              Subject
            </label>
            <Input id="subject" type="text" placeholder="Subject of your inquiry" className="mt-1 block w-full" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-poppins">
              Message
            </label>
            <Textarea id="message" placeholder="Your Message" rows={5} className="mt-1 block w-full" />
          </div>
          <Button type="submit" className="w-full bg-[#E99C1A] hover:bg-[#E99C1A]/90 text-white font-poppins">
            Send Message
          </Button>
        </form>
      </div>

      <div className="max-w-3xl mx-auto mt-12 text-center space-y-4">
        <h2 className="text-2xl font-bold text-gray-800 font-montserrat">Other Ways to Reach Us</h2>
        <p className="text-gray-600 font-poppins">
          Email:{" "}
          <a href="mailto:support@pawket.com" className="text-[#E99C1A] hover:underline">
            support@pawket.com
          </a>
        </p>
        <p className="text-gray-600 font-poppins">Phone: (123) 456-7890</p>
        <p className="text-gray-600 font-poppins">Address: 123 Pet Lane, Animal City, PA 12345</p>
      </div>
    </div>
  )
}
