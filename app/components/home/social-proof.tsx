import React from "react";
import ImageGallery from "./image-gallery";

function SocialProof() {
  return (
    <div className="bg-[var(--secondary)] py-20">
      <div>
        <h1 className="text-white text-center mb-14 text-3xl sm:text-4xl md:text-5xl font-semibold">
          Others recognize me and{" "}
          <em className="italic text-[var(--primary)] ">my work</em> too
        </h1>
      </div>
      <ImageGallery />
    </div>
  );
}

export default SocialProof;
