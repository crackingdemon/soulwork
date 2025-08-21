import Image from "next/image";
import React from "react";

function AdiSpeaks() {
  return (
    <div className="bg-[var(--secondary)] py-20 px-4" id="ascent">
      <h1 className="text-white text-center mb-10  text-4xl sm:text-4xl md:text-5xl font-semibold ">
        Adi <em className="italic text-[var(--primary)] ">Speaks</em>
      </h1>

      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="grid md:grid-cols-2 ">
          <div className="text-white md:mt-10 space-y-5 md:text-lg">
            <p>
              Known as an OG visionary in soul-centered leadership and the
              founder of SoulWork,{" "}
              <span className="font-semibold">
                Adi Shakti&apos;s mission is to guide seekers and holistic
                entrepreneurs to deepen their spiritual life, achieve excellence
                in their entrepreneurial pursuits, and give forward with soul.
              </span>{" "}
            </p>
            <p>
              On <em className="text-[var(--primary)]">Adi Shakti Speaks</em>,
              Adi shares powerful stories + teachings on spirituality,
              entrepreneurship, relationships, feminine leadership, and personal
              transformation. With honesty, depth, and a touch of fire, Adi
              Shakti Speaks offers actionable insights and soulful inspiration
              to help you build a life and business that is not only successful,
              but profoundly meaningful.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://images.clickfunnels.com/cdn-cgi/image/width=2600,fit=scale-down,f=auto,q=80/https://statics.myclickfunnels.com/workspace/eWrpmV/image/12062402/file/1a572c1976c3ad3daf48b4b03232898f.png"
              alt="Adi"
              width={1080}
              height={1920}
              className="h-96 object-contain rounded-lg transition-transform duration-300 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdiSpeaks;
