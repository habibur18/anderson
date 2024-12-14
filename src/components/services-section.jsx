"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { FadeIn, SlideIn } from "./animations";

const services = [
  {
    title: "Hardwood Flooring",
    description: "Expert installation and refinishing of solid and engineered hardwood floors",
    image: "/a.jpg",
    features: ["Custom Staining", "Refinishing", "Repair Services"],
  },
  {
    title: "Luxury Vinyl",
    description: "Premium vinyl plank and tile solutions for durability and style",
    image: "/b.jpg",
    features: ["Waterproof", "Pet-Friendly", "Easy Maintenance"],
  },
  {
    title: "Carpet Installation",
    description: "Professional carpet installation for homes and businesses",
    image: "/c.jpg",
    features: ["Stain-Resistant", "Various Styles", "Expert Installation"],
  },
  {
    title: "Tile & Stone",
    description: "Custom tile and natural stone flooring installation",
    image: "/d.jpg",
    features: ["Porcelain & Ceramic", "Natural Stone", "Custom Patterns"],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Our Premium Flooring Services</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">Serving Ottawa County & West Michigan with comprehensive flooring solutions tailored to your needs</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <SlideIn key={service.title} delay={index * 0.1}>
              <Card className="group overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image src={service.image} alt={service.title} fill className="object-cover transition duration-300 group-hover:scale-110" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature) => (
                      <li key={feature} className="text-sm flex items-center">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </SlideIn>
          ))}
        </div>
      </div>
    </section>
  );
}
