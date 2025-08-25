import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ascent() {
  return (
    <div className="bg-[var(--secondary)] py-20 px-4" id="ascent">
      <h1 className="text-white text-center  text-4xl sm:text-4xl md:text-5xl font-semibold ">
        The <em className="italic text-[var(--primary)] ">Ascent</em>
      </h1>
      <p className="mb-10 text-center text-gray-200 mt-2 italic">
        &quot;Build your Dharmic Legacy Brand as the Philanthropic Femme&quot;
      </p>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-2 gap-10 ">
          <div className="flex justify-center">
            <Image
              src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/88f5b8bd-4395-4585-80c4-1a685ac034f2/Screen+Shot+2024-01-27+at+12.27.05+PM.png?format=2500w"
              alt="Adi"
              width={1000}
              height={1020}
              className="w-96 md:w-full object-cover rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="text-white">
            <div className="pt-4 pb-6 border-b-[1px] border-b-[var(--primary)] hover:scale-105 transition-transform duration-200">
              ✨ The ASCENT is Adi Shakti&apos;s inner circle mastermind for
              holistic entrepreneurs who are ready to channel their spiritual
              gifts into impactful, thriving businesses.
            </div>
            <div className="pt-4 pb-6 border-b-[1px] border-b-[var(--primary)] hover:scale-105 transition-transform duration-200">
              This year-long experience + commitment combines in-person
              gatherings, an expansive library of advanced trainings, and
              consistent live Mastermind Q+A sessions with Adi Shakti.
            </div>
            <div className="pt-4 pb-6 border-b-[1px] border-b-[var(--primary)] hover:scale-105 transition-transform duration-200">
              Designed as the most thorough space in the SoulWork ecosystem, The
              ASCENT is the home for personalized mentorship, peer
              collaboration, and direct access to Adi&apos;s proven frameworks.
            </div>

            <div className="pt-4 pb-6 border-b-[1px] border-b-[var(--primary)] hover:scale-105 transition-transform duration-200">
              You are guided to refine their business model, embody rooted
              integral leadership, and expand your capacity for wealth,
              influence and service.
            </div>
            <div className="pt-4 pb-6 border-b-[1px] border-b-[var(--primary)] hover:scale-105 transition-transform duration-200">
              This is the most intimate and powerful way to work with Adi Shakti
              (other than 1:1).
            </div>
            <div className="flex justify-center">
              <Link
                href={"https://www.soulwork.online/cart-page-f7b1d"}
                target="_blank"
              >
                <Button
                  className=" border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] cursor-pointer mt-5  bg-[var(--primary)] text-white px-8 py-3 rounded-full transition-all duration-200 hover:scale-105 hover:bg-[var(--primary)]/90"
                  size={"lg"}
                >
                  APPLY NOW
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ascent;
