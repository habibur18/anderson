"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
import { FadeIn, ScaleIn } from "./animations";

const teamMembers = [
  {
    name: "Justin Anderson",
    role: "Founder & Lead Installer",
    bio: "With over 15 years of experience, Justin leads Anderson Floor Covering with expertise and passion for quality craftsmanship.",
    image: "/seo.jpg",
  },
  {
    name: "Emily Thompson",
    role: "Design Consultant",
    bio: "Emily brings creative flair to every project, helping clients choose the perfect flooring to match their style and needs.",
    image: "/1.jpg",
  },
  {
    name: "Mike Johnson",
    role: "Installation Specialist",
    bio: "Mike's attention to detail and technical skills ensure flawless installation on every job.",
    image: "/2.jpg",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Meet Our Expert Team</h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">The skilled professionals behind Anderson Floor Covering's success</p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <ScaleIn key={member.name} delay={index * 0.1}>
              <Card className="overflow-hidden">
                <div className="relative ">
                  <Image src={member.image} width={500} height={100} alt={member.name} className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{member.role}</p>
                  <p className="text-sm mb-4">{member.bio}</p>
                  <div className="flex space-x-4">
                    <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                  </div>
                </CardContent>
              </Card>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  );
}
