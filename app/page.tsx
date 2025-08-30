"use client";
import SmoothScroll from "./components/home/smooth-scroll";
import Navigation from "./components/home/navigation";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import OptIn from "./components/home/opt-in";
import Intro from "./components/home/intro";
import Ascent from "./components/home/ascent";
import Testimonials from "./components/home/testimonials";
import AdiSpeaks from "./components/home/adi-speaks";
import Trust from "./components/home/trust";
import Watch from "./components/home/watch";
import Read2 from "./components/home/read2";
import Podcast2 from "./components/home/podcast2";
import { motion, useInView } from "motion/react";
import { useRef } from "react";
import { paths } from "../lib/constant";

export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });

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
        <div
          ref={ref}
          className="flex justify-center items-center mx-auto px-6 relative z-10"
        >
          <motion.svg
            style={{ transformOrigin: "center" }}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 500 200"
            className="w-full mx-auto md:scale-200"
            fill="none"
            stroke="white"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <motion.path
              d={paths}
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
              transition={{ duration: 3, ease: "easeInOut" }}
            />
          </motion.svg>
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

      <Read2 />
      <Watch />
      <Ascent />
      <Podcast2 />
      <AdiSpeaks />

      <Testimonials />
      <Trust />
    </div>
  );
}
