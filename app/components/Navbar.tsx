'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-primary text-primary-foreground p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">Adventure Boat</Link>
        <div className="hidden md:flex space-x-4">
          <Link href="/" className="">Home</Link>
          <Link href="/destinations" className="">Destinations</Link>
          <Link href="/contact" className="">Contact</Link>
        </div>
        <Button
          variant="outline"
          size="icon"
          className="md:hidden bg-primary/10 border-primary/20 hover:bg-primary/20 hover:border-primary/30"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="h-6 w-6 text-white" />
        </Button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden mt-2 space-y-2 bg-primary/10 p-4 rounded-lg"
        >
          <Link href="/" className="block  text-white bold">Home</Link>
          <Link href="/destinations" className="block  text-white bold">Destinations</Link>
          <Link href="/contact" className="block  text-white bold">Contact</Link>
        </motion.div>
      )}
    </nav>
  )
}

export default Navbar

