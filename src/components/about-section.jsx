import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">15+ Years of Excellence in Flooring</h2>
            <p className="text-lg text-muted-foreground">Anderson Floor Covering has been the trusted name in flooring across Western Michigan. Our commitment to quality and customer satisfaction has made us the top choice for residential and commercial flooring projects.</p>
            <ul className="space-y-4">
              {["Expert Installation Teams", "Premium Quality Materials", "Competitive Pricing", "Lifetime Installation Warranty", "Free Consultations"].map((feature) => (
                <li key={feature} className="flex items-center">
                  <CheckCircle className="mr-2 h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="mt-4 bg-gray-500 rounded-lg hover:bg-gray-600 text-white">
              Learn More About Us
            </Button>
          </div>
          <div className="relative h-[500px] rounded-lg overflow-hidden">
            <div className="absolute inset-0 bg-black/10" />
            <Image fill src="/family.jpg" alt="Flooring Installation" className="w-full h-full object-cover hover:scale-110 transition duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
}
