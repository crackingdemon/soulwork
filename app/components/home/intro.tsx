import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <section id="intro" className="bg-[var(--primary)]/30 py-20">
      <div className="max-w-7xl mx-auto px-10 md:px-12">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="text-sm font-bold mb-4 tracking-wide">HEYY!</div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-light mb-6 leading-tight playfair">
              I'M
              <br />
              ADI.
            </h2>
            <p className="text-black mb-6 leading-8 text-lg">
              I'm here to guide you through the transformative journey of soul
              work. Whether you found me through a friend's recommendation or
              discovered my content online, I'm grateful you're here. This space
              is filled with resources, insights, and tools designed to help you
              connect with your authentic self and create meaningful change in
              your life.
            </p>
            <Link href={"#"}>
              <Button className="bg-[var(--secondary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105">
                Learn More About Me
              </Button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/ef84d720-c7b3-45a1-9b27-2b9e92953acf/2F71F6A3-460E-498F-846A-DE8C8DA0583F+2.JPG?format=2500w"
              alt="Adi"
              width={1000}
              height={1000}
              className="w-80 h-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Intro;
