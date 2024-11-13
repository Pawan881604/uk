// components/PrivateHireService.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming ShadCN buttons
// import { MapPin, Phone, DollarSign, Shield } from 'phosphor-react'; // Replace with appropriate icons if needed

const PrivateHireService = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-black text-white p-8">
      {/* Left: Car Image */}
      <div className="lg:w-1/2 flex justify-center mb-6 lg:mb-0">
        <Image
           src="/uploads/cc.webp"// Replace with actual path of the car image
          alt="Executive Car Fleet"
          width={500}
          height={300}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Right: Text and Features */}
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-semibold mb-4">Leading Private Hire Service</h2>
        <p className="mb-6">
          County Cars Dorset is one of the leading chauffeur private hire services in Dorset. Based in Ferndown but extensively covering Bournemouth, Poole, Christchurch and all of Dorset, our vehicle types range from estate cars to people movers, providing a comfortable and luxurious service for corporate clients and individuals.
        </p>
        <p className="mb-6">
          We specialise in airport transfers and dock transfers, meaning we can get your trip abroad off to the perfect start. Alternatively, if you need a minibus for the day, or want to travel to an event in style, County Cars Dorset provides the personnel and experience to deliver your requirements.
        </p>

        {/* Feature List */}
        <ul className="space-y-4 mb-6">
          <li className="flex items-center">
          p
            24/7 emergency line
          </li>
          <li className="flex items-center">
           d
            No premiums for unsociable hours
          </li>
          <li className="flex items-center">
           d
            Competitive prices
          </li>
          <li className="flex items-center">
           s
            All drivers CRB and medically checked, fully insured and licensed
          </li>
        </ul>

        {/* Action Buttons */}
        <div className="flex gap-4">
          <Button variant="default" className="bg-purple-700 text-white">Book Online Today</Button>
          <Button variant="secondary" className="bg-gray-800 text-white">View Our Example Prices</Button>
          <Button variant="secondary" className="bg-gray-800 text-white">Get in Touch</Button>
        </div>
      </div>
    </section>
  );
};

export default PrivateHireService;
