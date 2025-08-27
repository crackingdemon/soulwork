"use client";
import SmoothScroll from "./components/home/smooth-scroll";
import Navigation from "./components/home/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import OptIn from "./components/home/opt-in";
import Intro from "./components/home/intro";
import SocialProof from "./components/home/social-proof";
import Podcast from "./components/home/podcast";
import Ascent from "./components/home/ascent";
import Testimonials from "./components/home/testimonials";
import AdiSpeaks from "./components/home/adi-speaks";
import Trust from "./components/home/trust";
import Read from "./components/home/read";
import Watch from "./components/home/watch";
import Read2 from "./components/home/read2";
import Podcast2 from "./components/home/podcast2";

export default function Home() {
  return (
    <div className="min-h-screen">
      <SmoothScroll />

      <Navigation />

      <section
        id="hero"
        className="text-white min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background video */}
        <video
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
          src="/header.MOV"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Overlay (optional for better text contrast) */}
        <div className="absolute inset-0 bg-black/50 -z-10"></div>
        {/* Content */}
        <div className="text-center max-w-4xl mx-auto px-6 relative z-10 playfair">
          <h1 className="text-4xl sm:text-7xl  font-light leading-tight mb-8">
            Meet the Philanthropic{" "}
            <em className="italic font-serif text-[#ffcac7] underline">
              Femme
            </em>
          </h1>
        </div>
        {/* Scroll down icon */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
          <Link href="#intro">
            <ChevronDown className="w-6 h-6 animate-bounce cursor-pointer hover:text-gray-300 transition-colors" />
          </Link>
        </div>
      </section>

      <OptIn />

      <Intro />

      <SocialProof />

      <Watch />
      <Read2 />
      <Ascent />
      <Podcast2 />
      <AdiSpeaks />

      <Testimonials />
      <Trust />
    </div>
  );
}
