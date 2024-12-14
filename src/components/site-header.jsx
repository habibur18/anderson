"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle screen resize to close the menu if screen width is large
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false); // Close menu if screen size is large
      }
    };

    window.addEventListener("resize", handleResize);

    // Initial check in case the component mounts on a large screen
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full bg-red-600 shadow-md transition-all duration-300">
      <div className="container px-6 mx-auto flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Anderson-Logo.png" alt="Anderson Floor Covering Logo" width={180} height={40} className="h-10 w-auto" />
        </Link>

        {/* Navigation Links */}
        <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
          {[
            ["Home", "/"],
            ["Services", "#services"],
            ["Gallery", "#gallery"],
            ["Testimonials", "#testimonials"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <Link key={label} href={href} className="relative text-white transition-colors hover:text-primary">
              {label}
            </Link>
          ))}
        </nav>

        {/* Contact Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" size="sm" className="gap-2 text-white border-white hover:bg-white hover:text-foreground">
            <Phone className="h-4 w-4" />
            (616) 240-0087
          </Button>
          <Button size="sm" className="bg-white text-foreground hover:bg-gray-200">
            Get Free Quote
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button variant="ghost" size="icon" className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Sidebar and Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Overlay */}
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsMenuOpen(false)} />

            {/* Sidebar */}
            <motion.div initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "tween", duration: 0.3 }} className="fixed top-0 right-0 h-full w-3/4 lg:w-1/4 bg-white shadow-lg border-2 border-red-600 z-50">
              {/* Logo at the Top */}
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <Link href="/" onClick={() => setIsMenuOpen(false)}>
                  <Image src="/Anderson-Logo.png" alt="Anderson Floor Covering Logo" width={150} height={30} className="h-8 w-auto" />
                </Link>
                <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
                  <X className="h-6 w-6" />
                </Button>
              </div>

              {/* Sidebar Navigation */}
              <nav className="h-full flex flex-col space-y-6 p-6">
                {[
                  ["Home", "/"],
                  ["Services", "#services"],
                  ["Gallery", "#gallery"],
                  ["Testimonials", "#testimonials"],
                  ["About", "#about"],
                  ["Contact", "#contact"],
                ].map(([label, href], index) => (
                  <Link key={label} href={href} className="text-lg font-medium text-foreground hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                    {`${index + 1}. ${label}`}
                  </Link>
                ))}

                {/* Phone Number */}
                <div className="mt-6 flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-primary" />
                  <p className="text-lg font-medium text-foreground">(616) 240-0087</p>
                </div>

                {/* Free Quote Button */}
                <Button size="sm" className="mt-6 w-full">
                  Get Free Quote
                </Button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
