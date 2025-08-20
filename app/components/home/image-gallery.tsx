"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { motion, useInView } from "motion/react";
function ImageGallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:w-1/2 mx-auto "
    >
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/1b075749-2930-4ddf-b174-62d52b9e2561/IMG_7301.jpg?format=1000w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/5faa1c9e-796f-46e6-a57e-4a277e186ad7/IMG_7302.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/010060fc-88f3-4449-85de-8c839bfad3cf/IMG_7303.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/cbc3fbe1-5057-4a7d-98c0-edcc909e6054/IMG_7304.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/2e62ebf7-7d52-4460-955d-2266690acaa8/IMG_7305.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/7a0104cc-9fa7-4ce7-9eff-661c1f2f8acd/IMG_7306.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/6bd686cb-a5f5-4a17-960b-24861c866f2c/IMG_7307.jpg?format=1500w"
          alt=""
        />
      </div>
      <div>
        <Image
          width={1080}
          height={1920}
          className="h-auto max-w-full rounded-lg"
          src="https://images.squarespace-cdn.com/content/v1/657b9c94cdc58770e06e2c22/d4c89b63-0367-48bd-8ff7-76d368f28efb/IMG_7308.jpg?format=1500w"
          alt=""
        />
      </div>
    </motion.div>
  );
}

export default ImageGallery;
