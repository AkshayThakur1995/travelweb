'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { notFound } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription } from '@/components/ui/card'
import { MapPin, Calendar, Users, Star } from 'lucide-react'
import { Metadata } from 'next'

type Props = {
    params: {
      slug: string
    }
    searchParams: { [key: string]: string | string[] | undefined }
  }
const destinations = {
  'char-dham-yatra': {
    name: 'Char Dham Yatra',
    description: 'Embark on a spiritual journey to the four sacred sites in the Indian Himalayas.',
    images: [
        'https://ik.imagekit.io/wekcksfwg/badrinath.jpg?updatedAt=1736068674483',
        'https://ik.imagekit.io/wekcksfwg/dwarka1.jpg?updatedAt=1736068674089',
        'https://ik.imagekit.io/wekcksfwg/puridham.jpg?updatedAt=1736068673958',
      ],
    highlights: [
      'Visit Yamunotri, Gangotri, Kedarnath, and Badrinath',
      'Experience the spiritual energy of ancient temples',
      'Breathtaking Himalayan landscapes',
      'Opportunity for self-reflection and inner peace'
    ],
    duration: '12-14 days',
    groupSize: '10-15 people',
    rating: 4.8
  },
  'manali': {
    name: 'Manali',
    description: 'Experience the beauty of the Himalayas in this picturesque hill station.',
    images: [
        'https://ik.imagekit.io/wekcksfwg/manali-1.jpg?updatedAt=1736068944121',
        'https://ik.imagekit.io/wekcksfwg/manali-2.jpg?updatedAt=1736068944156',
        'https://ik.imagekit.io/wekcksfwg/manali-3.jpg?updatedAt=1736068944211',
      ],
    highlights: [
      'Visit the ancient Hadimba Temple',
      'Enjoy adventure sports like paragliding and river rafting',
      'Explore the charming Old Manali',
      'Relax in the hot springs of Vashisht'
    ],
    duration: '5-7 days',
    groupSize: '5-10 people',
    rating: 4.6
  },
  'shimla': {
    name: 'Shimla',
    description: 'Discover the charm of the former summer capital of British India.',
    images: [
        'https://ik.imagekit.io/wekcksfwg/shimla-1.jpg?updatedAt=1736068944207',
        'https://ik.imagekit.io/wekcksfwg/shimla-2.jpg?updatedAt=1736068944021',
        'https://ik.imagekit.io/wekcksfwg/shimla-3.jpg?updatedAt=1736068944481',
      ],
    highlights: [
      'Stroll down the famous Mall Road',
      'Take a ride on the Kalka-Shimla toy train',
      'Visit the historic Viceregal Lodge',
      'Enjoy panoramic views from Jakhoo Temple'
    ],
    duration: '4-6 days',
    groupSize: '5-8 people',
    rating: 4.5
  },
  'jammu-and-kashmir': {
    name: 'Jammu and Kashmir',
    description: 'Explore the paradise on earth with its breathtaking landscapes and rich culture.',
    images:  [
        'https://ik.imagekit.io/wekcksfwg/jk-1.jpg?updatedAt=1736068944210',
        'https://ik.imagekit.io/wekcksfwg/jk22.jpg?updatedAt=1736069467512',
        'https://ik.imagekit.io/wekcksfwg/jk-3.jpg?updatedAt=1736068944020',
      ],
    highlights: [
      'Take a shikara ride on Dal Lake in Srinagar',
      'Visit the beautiful Mughal Gardens',
      'Experience the thrill of skiing in Gulmarg',
      'Explore the ancient temples of Jammu'
    ],
    duration: '7-10 days',
    groupSize: '6-12 people',
    rating: 4.7
  },
  'vrindavan': {
    name: 'Vrindavan',
    description: 'Immerse yourself in the spiritual atmosphere of Lord Krishna\'s birthplace.',
    images: [
        'https://ik.imagekit.io/wekcksfwg/v1.jpg?updatedAt=1736069968272',
        'https://ik.imagekit.io/wekcksfwg/v3.jpg?updatedAt=1736069968095',
        'https://ik.imagekit.io/wekcksfwg/v2.jpg?updatedAt=1736069968056',
      ],
    highlights: [
      'Visit the famous Banke Bihari Temple',
      'Participate in the energetic Holi celebrations',
      'Take a boat ride on the Yamuna River',
      'Explore the ISKCON temple and its cultural center'
    ],
    duration: '3-5 days',
    groupSize: '4-8 people',
    rating: 4.4
  }
}


export default function DestinationPage({ params, searchParams }: Props) {
  const destination = destinations[params.slug as keyof typeof destinations]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (!destination) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % destination.images.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [destination])

  if (!destination) {
    notFound()
  }

  return (
    <div className="space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        {destination.name}
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="relative h-96 mb-8"
      >
        <Image
          src={destination.images[currentImageIndex]}
          alt={destination.name}
          layout="fill"
          objectFit="contain"
           objectPosition="center"
          className="rounded-lg"
        />
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">About {destination.name}</h2>
        <p className="text-lg">{destination.description}</p>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="space-y-4"
      >
        <h2 className="text-2xl font-semibold">Highlights</h2>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {destination.highlights.map((highlight, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index, duration: 0.5 }}
              className="flex items-start"
            >
              <Star className="w-5 h-5 mr-2 text-yellow-500 flex-shrink-0 mt-1" />
              <span>{highlight}</span>
            </motion.li>
          ))}
        </ul>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="grid md:grid-cols-3 gap-6"
      >
        <Card>
          <CardContent className="flex items-center p-6">
            <Calendar className="w-8 h-8 mr-4 text-primary" />
            <div>
              <CardDescription>Duration</CardDescription>
              <p className="text-lg font-semibold">{destination.duration}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Users className="w-8 h-8 mr-4 text-primary" />
            <div>
              <CardDescription>Group Size</CardDescription>
              <p className="text-lg font-semibold">{destination.groupSize}</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center p-6">
            <Star className="w-8 h-8 mr-4 text-yellow-500" />
            <div>
              <CardDescription>Rating</CardDescription>
              <p className="text-lg font-semibold">{destination.rating} / 5</p>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="flex justify-center mt-8"
      >
        <Link href="/contact">
          <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <MapPin className="w-5 h-5 mr-2" />
            Book Your {destination.name} Adventure
          </Button>
        </Link>
      </motion.div>
    </div>
  )
}

