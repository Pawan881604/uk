// components/ExecutiveCarPricing.tsx
import Image from 'next/image';
import { Button } from '@/components/ui/button'; // Assuming ShadCN buttons

const pricingData = [
  { location: 'Heathrow Airport', price: '£180.00' },
  { location: 'Gatwick Airport', price: '£195.00' },
  { location: 'Bournemouth Airport', price: '£60.00' },
  { location: 'Southampton Airport', price: '£110.00' },
  { location: 'Stansted Airport', price: '£255.00' },
  { location: 'Luton Airport', price: '£210.00' },
];

const ExecutiveCarPricing = () => {
  return (
    <section className="flex flex-col lg:flex-row bg-purple-900 text-white p-8">
      {/* Car Image */}
      <div className="lg:w-1/2 flex justify-center">
        <Image
          src="/uploads/cc.webp"// replace with actual image path
          alt="Executive Car"
          width={500}
          height={300}
          className="object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Pricing Details */}
      <div className="lg:w-1/2 p-4">
        <h2 className="text-3xl font-semibold mb-6">Executive Car Example Pricing</h2>
        <ul className="space-y-4">
          {pricingData.map((item, index) => (
            <li key={index} className="flex justify-between border-b border-gray-500 py-2">
              <span>{item.location}</span>
              <span className="font-bold">{item.price}</span>
            </li>
          ))}
        </ul>

        {/* Action Buttons */}
        <div className="flex mt-6 gap-4">
          <Button variant="default" className="bg-black text-white">View Pricing</Button>
          <Button variant="secondary" className="bg-purple-700 text-white">Book Now</Button>
        </div>
      </div>
    </section>
  );
};

export default ExecutiveCarPricing;
