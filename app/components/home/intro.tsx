import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Intro() {
  return (
    <section id="intro" className="bg-[var(--primary)]/30 py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="text-sm font-bold mb-4 tracking-wide">HEYY!</div>
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-light mb-6 leading-tight playfair">
              I&apos;M
              <br />
              ADI Shakti.
            </h2>
            <div className="text-black mb-6 leading-6  md:text-lg space-y-2">
              <p>
                You found me, and I am so thankful you are here. I have a
                feeling you will feel the same way soon.
              </p>
              <p>
                I am the founder of SoulWork and a devoted student of the
                Akhanda under my teacher, Yogrishi Vishvketu. My work bridges
                ancient yogic wisdom from the Nath Shiv yogic tradition with
                modern leadership, guiding seekers to awaken their gifts and
                step into soul-centered service.
              </p>
              <p>
                As the Philanthropic Femme, I&apos;ve generated over
                <span className="font-bold">
                  {" "}
                  $3Million in revenue through yoga teacher trainings, global
                  retreats, and heart-led mentorship for holistic entrepreneurs
                </span>{" "}
                - all while championing humanitarian projects in Costa Rica,
                India and beyond that support human trafficking survivors,
                indigenous advocacy + cultural preservation.
              </p>
              <p>
                My mission is simple: to help you actualize your potential, live
                your purpose, and serve humanity with depth, devotion, and joy.
              </p>
              <p>Welcome to the Journey from your SOUL to the WORK.</p>
              <p className="italic font-medium">Adi Shakti</p>
            </div>
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
