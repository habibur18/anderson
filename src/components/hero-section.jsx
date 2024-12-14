"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";

export function HeroSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.75;
    }
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <video ref={videoRef} autoPlay loop muted playsInline className="absolute inset-0 h-full w-full object-cover">
        <source src="/bg.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/40" />
      <div className="relative container h-full flex flex-col items-start justify-center text-white max-w-4xl">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-6">Transform Your Space with Premium Flooring Solutions</h1>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-[600px]">Ottawa County & West Michigan's trusted flooring experts. Delivering exceptional quality and craftsmanship for over 15 years.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }} className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="text-lg group bg-gray-500 rounded-lg hover:bg-gray-600">
            Schedule Consultation
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button size="lg" variant="outline" className="text-lg">
            View Our Work
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
