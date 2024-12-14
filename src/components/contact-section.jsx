import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactSection() {
  return (
    (<section id="contact" className="py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us for a free consultation and estimate on your flooring project
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <Phone className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p>(616) 240-0087</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p>info@andersonfloorcovering.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-4 text-primary" />
                <div>
                  <h3 className="font-medium">Service Area</h3>
                  <p>Hudsonville, Georgetown Township, Jenison, and Western Michigan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <Input placeholder="First Name" />
                </div>
                <div>
                  <Input placeholder="Last Name" />
                </div>
              </div>
              <div>
                <Input type="email" placeholder="Email Address" />
              </div>
              <div>
                <Input type="tel" placeholder="Phone Number" />
              </div>
              <div>
                <Textarea placeholder="Tell us about your project" className="min-h-[120px]" />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>)
  );
}

