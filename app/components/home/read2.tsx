"use client";
import React from "react";
import { motion } from "motion/react";
import { LampContainer } from "../ui/lamp";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Read2() {
  return (
    <div className="bg-black">
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-6xl"
        >
          Post Traumatic Growth <br /> through the SoulWork Lens
        </motion.h1>
      </LampContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.6,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="max-w-6xl z-0 relative mx-auto px-4 sm:px-6 lg:px-8  max-h-fit scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent -mt-32"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center pb-8">
          {/* Text Content */}
          <div className="space-y-6 text-center lg:text-left">
            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">
              This book dives into the stories of our SoulWork community, and we
              uncover the conditions, tools, support + practices necessary to
              alchemize pain into greatness.
            </p>
            <Link href={"https://soulwork.kit.com/71b766c940"} target="_blank">
              <Button
                size="lg"
                className="bg-[var(--primary)] text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-105"
              >
                ORDER YOUR COPY
              </Button>
            </Link>
          </div>

          {/* Video Section */}
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border border-white/20">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/read.mov" type="video/mp4" />
                {/* Fallback image if video doesn't load */}
                <img
                  src="/film.svg"
                  alt="Creator discussing SoulWork"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
