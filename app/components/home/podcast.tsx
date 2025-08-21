import React from "react";

function Podcast() {
  return (
    <div
      className="bg-[var(--pre-primary)]/30 py-20 px-5 flex flex-col items-center justify-center "
      id="podcast"
    >
      <h1 className="text-2xl font-medium md:text-4xl mb-5 md:mb-10">
        Adi Shakti{" "}
        <span className="text-[var(--primary)] uppercase italic">Speaks</span> -
        THE PODCAST
      </h1>
      <p className="w-full max-w-[600px] italic mt-2 md:leading-7 bg-[#f8f8fa] md:text-lg h-fit p-5 rounded-2xl mb-1">
        <span className="text-[var(--primary)] font-medium"> Adi Shakti</span>{" "}
        Speaks is a podcast for facilitators, spiritual entrepreneurs, and
        leaders ready to build businesses that are both impactful and aligned
        with their deepest values.
      </p>
      <iframe
        allow="autoplay *; encrypted-media *; fullscreen *; clipboard-write"
        height="450"
        style={{
          width: "100%",
          maxWidth: "690px",
          overflow: "hidden",
          borderRadius: "10px",
        }}
        sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
        src="https://embed.podcasts.apple.com/us/podcast/adi-shakti-speaks/id1435719818"
      ></iframe>
    </div>
  );
}

export default Podcast;
