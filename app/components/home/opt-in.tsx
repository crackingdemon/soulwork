import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
        <h2 className="text-3xl md:text-5xl font-light mb-4">
          Get Your <em className="italic font-serif">Free</em> Soul Work
          Training
        </h2>
        <p className="text-gray-600 mb-8">
          Download our exclusive guide and learn the{" "}
          <strong>3 foundational steps to begin your soul work journey</strong>{" "}
          – completely free.
        </p>

        {/* ConvertKit Opt-in Form */}
        <form
          method="post"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Input
            type="email"
            name="email_address"
            placeholder="Enter your email"
            required
            className="px-4 py-3 border border-black w-full sm:w-auto flex-grow outline-none rounded-none bg-white "
          />
          <Button className="bg-[var(--secondary)] hover:border-t-4 hover:border-b-0 text-white font-medium px-4 py-2 rounded-full border-b-4 border-black text-lg">
            Get Free Training
          </Button>
        </form>
        <p className="text-xs text-gray-500 mt-4">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </motion.div>
    </section>
  );
}

export default OptIn;
