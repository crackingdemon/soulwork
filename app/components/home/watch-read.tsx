import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WatchRead() {
  return (
    <section id="" className="bg-[var(--primary)]/30 py-20">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-2">
          <div className="flex flex-col justify-between mb-4">
            <h1 className="text-3xl md:text-4xl text-[var(--secondary)]">
              Post Traumatic Growth through the SoulWork Lens
            </h1>
            <p>
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

          <div className="flex flex-col justify-between bg-[var(--pre-primary)] h-96 w-72 shadow-2xl shadow-black/30 mx-auto kavoon p-5 text-4xl  text-black border-[1px] border-[var(--primary)] border-r-[10px] border-r-[var(--secondary)]">
            {" "}
            <p className="leading-9">
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

        <div className="grid md:grid-cols-2 mt-20">
          <div className="">
            <Image
              src={
                "https://images.clickfunnels.com/cdn-cgi/image/width=2600,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eWrpmV/image/11993626/file/a6c96a5a26b346ebf168c90c4cf0ea89.png"
              }
              width={1080}
              height={1920}
              className="h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
              alt="movie"
            />
          </div>
          <div className="flex flex-col justify-between mt-4">
            <h1 className="text-3xl md:text-4xl text-[var(--secondary)]">
              Experience SoulWork, the Film
            </h1>
            <p>
              Hear Adi Shakti&apos;s story + journey through one of her in
              person immersions, meet the indigenous tribe she built a community
              center for in the Talamanca jungles, and visit the Human
              Trafficking rescue centers in India.
            </p>
            <p className="mt-3 text-xl font-semibold flex items-start md:items-center">
              Coming Soon to streaming platforms{" "}
              <Image
                src={"/movie.svg"}
                height={40}
                width={40}
                alt="movie"
                className="ml-4"
              />
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

export default WatchRead;
