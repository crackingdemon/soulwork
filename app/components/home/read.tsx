import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Read() {
  return (
    <section id="" className="bg-[var(--primary)]/20 pb-20 min-h-[90vh] ">
      <div className="max-w-8xl mx-auto px-8 md:px-12 relative -top-5">
        <div className="flex flex-col md:flex-row justify-center items-center ">
          <div className="flex flex-col justify-around mb-4 w-full md:w-1/2 text-center bg-white py-10 border-[1px] border-[var(--secondary)]/60 px-8 rounded-3xl md:h-[29rem]">
            <h1 className="text-3xl md:text-4xl text-[var(--secondary)] playfair !font-bold">
              Post Traumatic Growth through the SoulWork Lens
            </h1>
            <p className="mt-2 md:leading-8 md:text-lg">
              Post Traumatic Growth through the SoulWork Lens Why is it that
              sometimes we crumble after challenges in our lives, and sometimes
              we soar? This book dives into the stories of our SoulWork
              community, and we uncover the{" "}
              <span className="uppercase">
                conditions, tools, support + practices
              </span>{" "}
              necessary to alchemize pain into greatness.
            </p>
            <p className="mt-3 text-xl font-semibold">Coming Soon!</p>
            <Link href={"https://soulwork.kit.com/71b766c940"} target="_blank">
              <Button className="cursor-pointer rounded-full text-xl mt-10">
                ORDER YOUR COPY
              </Button>
            </Link>
          </div>

          <div className="flex flex-col justify-around bg-[var(--pre-primary)] md:relative -top-4 md:-ml-4 md:rotate-3 h-96 md:h-[30rem] w-80 shadow-2xl shadow-black/30 kavoon p-5 text-4xl  text-black border-[1px] border-[var(--primary)] border-r-[10px] border-r-[var(--secondary)]">
            {" "}
            <p className="leading-10 font-medium">
              {" "}
              Post Traumatic Growth through the SoulWork Lens
            </p>
            <Image
              src={"/soul.png"}
              width={100}
              height={100}
              className="mx-auto"
              alt="soul"
            />
            <p className="italic underline text-2xl text-center">Adi Shakti</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Read;
