import React from "react";
import { TestimonialCarousel } from "./carousel";

function Testimonials() {
  return (
    <div className="bg-[var(--primary)]/20 py-20 px-4" id="testimonials">
      <h1 className=" text-center text-4xl sm:text-4xl md:text-5xl font-semibold ">
        Student <em className="italic text-[var(--primary)] ">Experiences</em>
      </h1>
      <p className="mb-14 text-center  mt-2 italic">
        &quot;OUR STUDENTS NEVER LEAVE&quot;
      </p>

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/898635074"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/898635098"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/179375027?h=323d3d72c2"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/179375013?h=8b062a123f"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/203938433?h=3ffad5b697"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="video-container">
          <iframe
            src="https://player.vimeo.com/video/203993502?h=54d09888ea"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div> */}

      <TestimonialCarousel />
    </div>
  );
}

export default Testimonials;
