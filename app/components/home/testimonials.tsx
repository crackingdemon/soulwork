import React from "react";

function Testimonials() {
  return (
    <div className="bg-[var(--secondary)] py-20 px-4" id="ascent">
      <h1 className="text-white text-center  text-4xl sm:text-4xl md:text-5xl font-semibold ">
        Student <em className="italic text-[var(--primary)] ">Experiences</em>
      </h1>
      <p className="mb-14 text-center text-gray-200 mt-2 italic">
        &quot;OUR STUDENTS NEVER LEAVE&quot;
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  );
}

export default Testimonials;
