'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MapPin } from 'lucide-react'

const destinations = [
    { 
      name: 'Char Dham Yatra', 
      slug: 'char-dham-yatra',
      images: [
        'https://ik.imagekit.io/wekcksfwg/badrinath.jpg?updatedAt=1736068674483',
        'https://ik.imagekit.io/wekcksfwg/dwarka1.jpg?updatedAt=1736068674089',
        'https://ik.imagekit.io/wekcksfwg/puridham.jpg?updatedAt=1736068673958',
      ]
    },
    { 
      name: 'Manali', 
      slug: 'manali',
      images: [
        'https://ik.imagekit.io/wekcksfwg/manali-1.jpg?updatedAt=1736068944121',
        'https://ik.imagekit.io/wekcksfwg/manali-2.jpg?updatedAt=1736068944156',
        'https://ik.imagekit.io/wekcksfwg/manali-3.jpg?updatedAt=1736068944211',
      ]
    },
    { 
      name: 'Shimla', 
      slug: 'shimla',
      images: [
        'https://ik.imagekit.io/wekcksfwg/shimla-1.jpg?updatedAt=1736068944207',
        'https://ik.imagekit.io/wekcksfwg/shimla-2.jpg?updatedAt=1736068944021',
        'https://ik.imagekit.io/wekcksfwg/shimla-3.jpg?updatedAt=1736068944481',
      ]
    },
    { 
      name: 'Jammu and Kashmir', 
      slug: 'jammu-and-kashmir',
      images: [
        'https://ik.imagekit.io/wekcksfwg/jk-1.jpg?updatedAt=1736068944210',
        'https://ik.imagekit.io/wekcksfwg/jk22.jpg?updatedAt=1736069467512',
        'https://ik.imagekit.io/wekcksfwg/jk-3.jpg?updatedAt=1736068944020',
      ]
    },
    { 
      name: 'Vrindavan', 
      slug: 'vrindavan',
      images: [
        'https://ik.imagekit.io/wekcksfwg/v1.jpg?updatedAt=1736069968272',
        'https://ik.imagekit.io/wekcksfwg/v3.jpg?updatedAt=1736069968095',
        'https://ik.imagekit.io/wekcksfwg/v2.jpg?updatedAt=1736069968056',
      ]
    }
  ]

export default function Destinations() {
  const [currentImageIndex, setCurrentImageIndex] = useState<{ [key: string]: number }>({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevState) => {
        const newState = { ...prevState };
        destinations.forEach((destination) => {
          newState[destination.slug] = (newState[destination.slug] + 1) % destination.images.length || 0;
        });
        return newState;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Our Destinations
      </motion.h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <motion.div
            key={destination.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Link href={`/destinations/${destination.slug}`}>
              <Card className="cursor-pointer hover:shadow-lg transition-shadow overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={destination.images[currentImageIndex[destination.slug] || 0]}
                    alt={destination.name}
                    layout="fill"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <h2 className="text-white text-2xl font-bold">{destination.name}</h2>
                  </div>
                </div>
                <CardContent>
                  <CardDescription className="mt-2">
                    {destination.description}
                  </CardDescription>
                  <div className="mt-4 flex items-center text-primary">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Explore {destination.name}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

