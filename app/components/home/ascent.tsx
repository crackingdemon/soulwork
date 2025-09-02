import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Ascent() {
  return (
    <div className="bg-[var(--primary)]/5 p-5 md:p-10" id="ascent">
      <div className="max-w-8xl mx-auto py-10 px-8 md:px-12 bg-[var(--primary)]/10 rounded-md">
        <h1 className="text-center  text-4xl sm:text-4xl md:text-5xl font-semibold ">
          The <em className="italic text-[var(--primary)] ">Ascent</em>
        </h1>
        <p className="mb-10 text-center  mt-2 italic">
          &quot;Build your Dharmic Legacy Brand as the Philanthropic Femme&quot;
        </p>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-5">
              <h1 className="text-xl font-semibold">THE ASCENT</h1>
              <p className="text-3xl md:text-4xl  playfair">
                Adi Shakti&apos;s 12 month Inner Circle MasterMind for
                Philanthropic Femme&apos;s building Dharmic Legacy Brands
              </p>
              <p className="text-lg">
                This is the most intimate and powerful way to work with Adi
                Shakti.
              </p>
              <div className="flex ">
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
            <div className="flex justify-center">
              <Image
                src="/ascent.webp"
                alt="Adi"
                width={1000}
                height={1000}
                className="w-full h-fit md:h-96 md:w-full object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ascent;
