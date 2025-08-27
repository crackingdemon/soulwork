import Image from "next/image";
import Link from "next/link";
import React from "react";

function Podcast2() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-[80vh] object-cover"
        style={{ objectPosition: "20% 30%" }} // X% Y%
      >
        <source src="/podcast.mov" type="video/mp4" />
      </video>
      <div
        className="bg-[var(--pre-primary)]/30 pb-10 -mt-10 px-5 flex flex-col md:flex-row items-center justify-center"
        id="podcast"
      >
        <div className="md:-rotate-3 md:translate-x-3 z-1 shadow-sm rounded-md">
          <iframe
            allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
            height="450"
            style={{
              maxWidth: "690px",
              overflow: "hidden",
              borderRadius: "10px",
            }}
            sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
            src="https://embed.podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
          ></iframe>
        </div>
        <div className="w-full text-center max-w-[700px] mt-2 md:leading-7 bg-[#f8f8fa] md:text-lg h-fit p-10 border-[1px] border-[var(--secondary)] rounded-2xl mb-1 relative">
          <Image
            src={"/airpods.png"}
            width={100}
            height={100}
            alt="airpods"
            className="absolute -bottom-5 -right-5"
          />
          <h1 className="text-2xl font-medium md:text-4xl mb-5 md:mb-10">
            Adi Shakti{" "}
            <span className="text-[var(--primary)] uppercase italic">
              Speaks
            </span>{" "}
            - THE PODCAST
          </h1>
          <p>
            <span className="text-[var(--primary)] font-medium">
              {" "}
              Adi Shakti
            </span>{" "}
            Speaks is a podcast for facilitators, spiritual entrepreneurs, and
            leaders ready to build businesses that are both impactful and
            aligned with their deepest values. Hosted by Adi Shakti, founder of
            SoulWork, this show explores the path of creating Dharmic Legacy
            Companies—businesses rooted in spiritual depth, committed
            leadership, business excellence, and dedicated philanthropy.
          </p>
          <div className="flex flex-col items-center justify-center mt-5">
            <h1 className="text-xl font-semibold italic">Listen on :</h1>
            <div className="flex space-x-2 mt-2">
              <Link
                href={"https://open.spotify.com/show/0hZis2ct6rQCDykQMNOHe1"}
                target="_blank"
              >
                {" "}
                <Image
                  src={
                    "https://cdn.prod.website-files.com/5f2ae813361eff3ad9282b29/64b96f89631c00a7b076be40_spotify-badge.svg"
                  }
                  width={200}
                  height={200}
                  alt="spotify"
                />
              </Link>
              <Link
                href={
                  "https://podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
                }
                target="_blank"
              >
                {" "}
                <Image
                  src={"/applelisten.png"}
                  width={200}
                  height={200}
                  alt="spotify"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[var(--pre-primary)]/30">Latest Episodes</div>
    </>
  );
}

export default Podcast2;
