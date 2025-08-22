import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Watch() {
  return (
    <section id="" className="bg-[var(--primary)]/33 ">
      <div className="max-w-7xl mx-auto px-8 sm: md:px-12">
        <div className="grid md:grid-cols-2 gap-2">
          <div className="order-2 md:order-1">
            <Image
              src={"/watch.png"}
              width={1080}
              height={1920}
              className="md:-mt-5 h-full object-cover rounded-lg transition-transform duration-300 md:scale-105"
              alt="movie"
            />
          </div>
          <div className="flex flex-col justify-center mt-4 order-1 md:order-2">
            <div className="text-sm font-bold mb-4 tracking-wide">
              EXPERIENCE
            </div>
            <h2 className="tracking-tighter text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-light mb-6 leading-tight playfair">
              SOULWORK
              <br />
              <div className="flex items-start md:items-center">
                <span>THE FILM </span>
                <Image
                  src={"/movie.svg"}
                  height={100}
                  width={100}
                  alt="movie"
                  className="ml-4"
                />
              </div>
            </h2>
            <p>
              <strong>HEAR</strong>{" "}
              <em className="text-[var(--secondary)]">Adi Shakti&apos;s</em>{" "}
              story + journey through one of her in person immersions, meet the
              indigenous tribe she built a community center for in the Talamanca
              jungles, and visit the Human Trafficking rescue centers in India.
            </p>
            <p className="mt-3 text-lg font-semibold ">
              Coming Soon to streaming platforms
            </p>
            <Link href={"https://soulwork.kit.com/1e24d8db1f"} target="_blank">
              <Button className="cursor-pointer rounded-full text-xl mt-10">
                Watch
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Watch;
