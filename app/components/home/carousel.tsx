"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  program: string;
  quote: string;
  src: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Addie",
    program: "B-SCHOOL",
    quote:
      "I felt very supported and understood from everyone of you. I love that we are now a community.",
    src: "https://player.vimeo.com/video/898635074",
  },
  {
    id: 2,
    name: "Sarah M.",
    program: "MARKETING MASTERY",
    quote:
      "I just wanted to say that the depth and the quality of this training it bar none.",
    src: "https://player.vimeo.com/video/898635098",
  },
  {
    id: 3,
    name: "Dannielle ",
    program: "ENTREPRENEUR ACADEMY",
    quote:
      "It was a transformational journey for me. Now i am looking at myself differently and the world.",
    src: "https://player.vimeo.com/video/179375027?h=323d3d72c2",
  },
  {
    id: 4,
    name: "Ali",
    program: "DIGITAL COURSE",
    quote:
      "The training changed my life. The encourage you to explore within yourself.",
    src: "https://player.vimeo.com/video/179375013?h=8b062a123f",
  },
  {
    id: 5,
    name: "Destiny",
    program: "DIGITAL COURSE",
    quote:
      "It was an eye opening experience. Here my learn together and build a community and sisterhood.",
    src: "https://player.vimeo.com/video/203938433?h=3ffad5b697",
  },
  {
    id: 6,
    name: "Aris",
    program: "DIGITAL COURSE",
    quote:
      "They touched my high expectations. Every single teacher is full of knowledge.",
    src: "https://player.vimeo.com/video/203993502?h=54d09888ea",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto ">
      <Card className="overflow-hidden bg-white shadow-lg py-0 rounded-none">
        <div className="flex flex-col md:flex-row ">
          {/* Image Section */}
          <div className="relative w-full md:w-1/2 h-auto md:h-[500px] bg-amber-50">
            {" "}
            <div className="video-container ">
              <iframe
                src={currentTestimonial.src}
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center relative bg-[var(--primary)]/10">
            <div className="space-y-6">
              <blockquote className="text-lg md:text-xl leading-relaxed text-foreground">
                {currentTestimonial.quote}
              </blockquote>

              <div className="text-muted-foreground font-medium">
                {currentTestimonial.name}
              </div>
            </div>
          </div>
        </div>
      </Card>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full w-12 h-12 cursor-pointer"
        onClick={goToPrevious}
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md rounded-full w-12 h-12 cursor-pointer"
        onClick={goToNext}
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === currentIndex ? "bg-primary" : "bg-muted"
            }`}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
