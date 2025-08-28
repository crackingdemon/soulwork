import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Read2() {
  return (
    <section id="" className="bg-[var(--primary)]/5  min-h-screen p-5 md:p-10">
      <div className="rounded-md max-w-8xl mx-auto px-8 md:px-20 grid grid-cols-1 py-10 md:py-20 min-h-dvh bg-[var(--primary)]/10 md:grid-cols-2 ">
        <div className="flex flex-col space-y-5">
          <h1 className="text-lg uppercase font-semibold">The book</h1>
          <h1 className="text-3xl md:text-5xl  playfair">
            Post Traumatic Growth through the SoulWork Lens
          </h1>
          <p className="md:text-lg md:leading-8">
            Post Traumatic Growth through the SoulWork Lens Why is it that
            sometimes we crumble after challenges in our lives, and sometimes we
            soar? This book dives into the stories of our SoulWork community,
            and we uncover the{" "}
            <span className="uppercase">
              conditions, tools, support + practices
            </span>{" "}
            necessary to alchemize pain into greatness.
          </p>
          <p className="text-xl font-semibold">Coming Soon!</p>
          <Link href={"https://soulwork.kit.com/71b766c940"} target="_blank">
            <Button
              className="bg-[var(--primary)] border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] hover:bg-[var(--secondary)] mt-2 text-white font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
              size={"lg"}
            >
              ORDER YOUR COPY
            </Button>
          </Link>
        </div>

        <div className="mt-4 md:mt-0 md:px-14 relative flex items-start justify-center">
          <Image
            src={"/book.jpeg"}
            height={1000}
            width={1000}
            alt="book"
            className="w-fit h-[400px] md:h-[500px] shadow-left"
          />
        </div>
      </div>
    </section>
  );
}

export default Read2;
