'use client'

import { FadeIn, SlideIn } from "./animations"
import { MapPin } from 'lucide-react'

const serviceAreas = [
  "Ottawa County",
  "West Michigan"
]

export function ServiceAreaSection() {
  return (
    (<section id="service-area" className="py-20">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Our Service Area
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Anderson Floor Covering proudly serves Ottawa County and West Michigan
            </p>
          </div>
        </FadeIn>
        <div className="flex flex-col items-center">
          <SlideIn>
            <div
              className="aspect-video w-full max-w-3xl relative rounded-lg overflow-hidden mb-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186255.76240771525!2d-86.16405016850897!3d42.90491236669504!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8819e54b3c4b30f9%3A0x4a5d6acb892e5cc9!2sOttawa%20County%2C%20MI!5e0!3m2!1sen!2sus!4v1639516555276!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"></iframe>
            </div>
          </SlideIn>
          <SlideIn direction="left">
            <div className="bg-gray-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Areas We Serve</h3>
              <ul className="flex justify-center space-x-8">
                {serviceAreas.map((area) => (
                  <li key={area} className="flex items-center">
                    <MapPin className="h-5 w-5 text-primary mr-2" />
                    <span>{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </SlideIn>
        </div>
      </div>
    </section>)
  );
}

