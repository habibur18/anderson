import { Facebook, Instagram, Twitter } from 'lucide-react'
import Link from "next/link"

export function SiteFooter() {
  return (
    (<footer className="bg-gray-900 text-gray-300">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">Anderson Floor Covering</h3>
            <p className="text-sm">
              Your trusted partner for premium flooring solutions in Western Michigan since 2008.
            </p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#services" className="hover:text-white transition">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="hover:text-white transition">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#about" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Hardwood Flooring</li>
              <li>Luxury Vinyl</li>
              <li>Carpet Installation</li>
              <li>Tile & Stone</li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" className="hover:text-white transition">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="hover:text-white transition">
                <Twitter className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Anderson Floor Covering. All rights reserved.</p>
        </div>
      </div>
    </footer>)
  );
}

