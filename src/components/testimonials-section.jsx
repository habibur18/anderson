'use client'

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from 'lucide-react'
import { FadeIn } from "./animations"

const testimonials = [
  {
    name: "Spencer K.",
    role: "E-Commerce Specialist",
    content: "I cannot begin to explain how much those guys are lifesavers making my content just look amazing.",
    image: "/placeholder.svg"
  },
  {
    name: "Michael R.",
    role: "Homeowner",
    content: "The attention to detail and professionalism from Anderson Floor Covering was outstanding. They transformed our home completely.",
    image: "/placeholder.svg"
  },
  {
    name: "Sarah L.",
    role: "Business Owner",
    content: "Best flooring contractor in Ottawa County! Their team was efficient, clean, and the results exceeded our expectations.",
    image: "/placeholder.svg"
  }
]

export function TestimonialsSection() {
  return (
    (<section id="testimonials" className="py-20 bg-gray-50">
      <div className="container">
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
              Don't just take our word for it. Here's what our valued customers have to say about their experience with Anderson Floor Covering.
            </p>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.name} delay={index * 0.2}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-lg mb-6">{testimonial.content}</p>
                  <div className="flex items-center gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>)
  );
}

