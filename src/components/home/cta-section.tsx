import { Button } from "@/components/ui/button"
import { Phone, Calendar } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24">
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center">
        <div className="absolute inset-0 bg-yellow-500/90" />
      </div>
      
      {/* Content */}
      <div className="relative container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
          Ready to book your journey?
        </h2>
        <p className="text-xl md:text-2xl text-white mb-12 max-w-2xl mx-auto">
          Give us a call or book online now and we&apos;ll be in touch!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <Button
            size="lg"
            variant="default"
            className="bg-black hover:bg-black/90 text-white w-full sm:w-auto"
            // onClick={() => window.location.href = 'tel:+441234567890'}
          >
            <Phone className="mr-2 h-5 w-5" />
            CALL TO BOOK
          </Button>
          
          <Button
            size="lg"
            variant="default"
            className="bg-black hover:bg-black/90 text-white w-full sm:w-auto"
            // onClick={() => window.location.href = '/book'}
          >
            <Calendar className="mr-2 h-5 w-5" />
            BOOK ONLINE
          </Button>
        </div>
      </div>
    </section>
  )
}