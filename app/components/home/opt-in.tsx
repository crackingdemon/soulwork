import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

function OptIn() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="free-training" className="bg-[var(--light-primary)] py-20">
      <motion.div
        ref={ref}
        className="max-w-2xl mx-auto text-center px-6"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 className="text-3xl md:text-4xl font-light mb-4">
          Discover How to Actualize Your{" "}
          <em className="italic font-serif">Spiritual Gifts</em> into Real-World
          Impact.
        </h2>
        <p className="text-gray-600 mb-8">
          Access <strong>SoulWork 101</strong> for FREE
        </p>

        {/* ConvertKit Opt-in Form */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Input
            type="email"
            name="email_address"
            placeholder="Enter your email"
            className="px-4 py-3 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white "
          />
          <Link href={"https://soulwork.kit.com/6ecb3fe716"} target="_blank">
            <Button className="bg-[var(--secondary)] hover:border-t-4 hover:border-b-0 text-white font-medium px-4 py-2 rounded-full border-b-4 border-black text-lg cursor-pointer">
              Get Free Training
            </Button>
          </Link>
        </div>
        <Link className="text-xs text-gray-500 mt-4" href={"/privacy-policy"}>
          By entering your info, you&apos;ll become a SoulWorker and receive
          updates to your inbox. (Unsububscribe any time) You also agree to our
          Terms of Use and Privacy Policy.
        </Link>
      </motion.div>
    </section>
  );
}

export default OptIn;
