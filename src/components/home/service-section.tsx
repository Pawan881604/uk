import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Car, Plane, Users, Clock, CreditCard, MapPin } from 'lucide-react'

export default function ServiceSection() {
  const services = [
    {
      title: "Airport Transfers",
      description: "Reliable and punctual airport pickup and drop-off services.",
      icon: <Plane className="h-6 w-6" />,
    },
    {
      title: "Local Rides",
      description: "Comfortable transportation for short trips within Dorset.",
      icon: <Car className="h-6 w-6" />,
    },
    {
      title: "Group Travel",
      description: "Spacious vehicles for group outings and events.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "24/7 Availability",
      description: "Round-the-clock service to meet your transportation needs.",
      icon: <Clock className="h-6 w-6" />,
    },
    {
      title: "Corporate Accounts",
      description: "Tailored solutions for business travel requirements.",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Long Distance Trips",
      description: "Comfortable and reliable transport for longer journeys.",
      icon: <MapPin className="h-6 w-6" />,
    },
  ]

  return (
    <section className="w-full py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4">Our Services</Badge>
          <h2 className="text-3xl font-bold tracking-tight mb-4">Comprehensive Transportation Solutions</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            At Dorset Airport Cabs, we take pride in offering a comprehensive range of services designed to meet all your
            transportation needs. Our commitment to reliability, professionalism, and customer satisfaction sets us apart.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}