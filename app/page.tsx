'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Bus, Users, ClipboardList, HeadphonesIcon, MapPin, Compass } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

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

const services = [
  { 
    icon: Bus, 
    title: 'Comfortable Transportation', 
    description: 'Travel in style and comfort with our modern fleet of vehicles, ensuring a smooth journey to your destination.'
  },
  { 
    icon: Users, 
    title: 'Experienced Guides', 
    description: 'Our knowledgeable guides bring destinations to life with their expertise and local insights.'
  },
  { 
    icon: ClipboardList, 
    title: 'Customized Itineraries', 
    description: 'Tailor your trip to your preferences with our flexible and personalized travel plans.'
  },
  { 
    icon: HeadphonesIcon, 
    title: '24/7 Customer Support', 
    description: 'Rest easy knowing our dedicated support team is always available to assist you throughout your journey.'
  }
]

export default function Home() {
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
    <div className="space-y-12">
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center adventure-bg py-20 rounded-lg"
      >
        <h1 className="text-5xl font-bold mb-4 text-white drop-shadow-lg">Embark on Your Next Adventure</h1>
        <p className="text-xl mb-6 text-white drop-shadow-md">Discover breathtaking destinations with Adventure Boat</p>
        <Link href="/destinations">
          <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Compass className="mr-2 h-5 w-5" /> Explore Destinations
          </Button>
        </Link>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="space-y-8"
      >
        <h2 className="text-3xl font-semibold text-center mb-6">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
            >
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <h2 className="text-3xl font-semibold mb-6 text-center">Popular Destinations</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((destination, index) => (
            <motion.div
              key={destination.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
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
                      <h3 className="text-white text-2xl font-bold">{destination.name}</h3>
                    </div>
                  </div>
                  <CardContent>
                    <CardDescription className="mt-2 flex items-center">
                      <MapPin className="w-4 h-4 mr-2 text-primary" />
                      Explore {destination.name}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  )
}

