import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">Adventure Boat is your trusted partner for unforgettable journeys across India. We specialize in creating memorable experiences with comfort and adventure.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm hover:underline">Home</Link></li>
              <li><Link href="/destinations" className="text-sm hover:underline">Destinations</Link></li>
              <li><Link href="/contact" className="text-sm hover:underline">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="text-sm">123 Travel Street, Adventure City, India</p>
            <p className="text-sm">Phone: +91 1234567890</p>
            <p className="text-sm">Email: info@travelco.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary-foreground hover:text-secondary"><Facebook /></a>
              <a href="#" className="text-primary-foreground hover:text-secondary"><Twitter /></a>
              <a href="#" className="text-primary-foreground hover:text-secondary"><Instagram /></a>
              <a href="#" className="text-primary-foreground hover:text-secondary"><Youtube /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-primary-foreground/10 text-center text-sm">
          © 2025 Adventure Boat All rights reserved.
        </div>
      </div>
    </footer>
  )
}

