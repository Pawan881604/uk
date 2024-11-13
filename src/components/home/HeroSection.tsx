"use client";
// components/HeroSection.tsx
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const HeroSection: React.FC = () => {
  return (
    <section className="relative flex items-center justify-center h-screen bg-black text-white">
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        {/* Background Image */}
        <Image
          src="/uploads/cc.webp" // replace with your image path
          alt="Airport background"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="opacity-60"
        />
      </div>

      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Airport and Dock Transfers in Dorset
        </h1>
        <p className="text-lg md:text-xl mb-6">You can count on County Cars</p>

        <div className="flex justify-center space-x-4">
          <Button className="bg-purple-700 hover:bg-purple-800">
            Book Now
          </Button>
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-black"
          >
            Pricing
          </Button>
          <Button variant="ghost" className="text-white hover:bg-gray-700">
            Find Out More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
