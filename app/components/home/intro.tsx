import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

function Intro() {
  return (
    <section
      id="intro"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2"
    >
      {/* Left side - Text content */}
      <div className="bg-[var(--primary)]/30 flex items-center justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-0">
        <div className="max-w-lg">
          <div className="text-sm font-bold mb-4 tracking-wide text-gray-800">
            HEYY!
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-light mb-6 leading-tight playfair text-gray-900">
            I&apos;M
            <br />
            ADI Shakti.
          </h2>
          <div className="text-gray-700 mb-6 leading-relaxed space-y-4">
            <p>
              You found me, and I am so thankful you are here. I have a feeling
              you will feel the same way soon.
            </p>
            <p>
              I am the founder of SoulWork and a devoted student of the Akhanda
              under my teacher, Yogrishi Vishvketu. My work bridges ancient
              yogic wisdom from the Nath Shiv yogic tradition with modern
              leadership.
            </p>
            <p>
              My mission is simple: to help you actualize your potential, live
              your purpose, and serve humanity with depth, devotion, and joy.
            </p>
            <p className="italic font-medium">
              Welcome to the Journey from your SOUL to the WORK.
            </p>
          </div>
          <Link href={"#"}>
            <Button
              className="bg-[var(--primary)] border-[1px] border-[var(--secondary)] hover:border-[var(--primary)] hover:bg-[var(--secondary)] text-white font-medium px-4 py-2 rounded-full cursor-pointer transition-colors duration-200"
              size={"lg"}
            >
              Learn More About Me
            </Button>
          </Link>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="relative h-full min-h-[80vh] sm:min-h-screen bg-[var(--primary)]/30 md:min-h-screen">
        <Image
          src="/intro.svg"
          alt="Adi"
          fill
          className="object-contain sm:object-cover object-bottom md:object-center"
          priority
        />
      </div>
    </section>
  );
}

export default Intro;
