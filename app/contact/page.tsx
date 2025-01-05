'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { MessageSquare } from 'lucide-react'
import { sendWhatsApp } from '../actions/sendWhatsApp'
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" className="w-full" disabled={pending}>
      {pending ? 'Sending...' : 'Send Message'}
    </Button>
  )
}

export default function Contact() {
  const [formStatus, setFormStatus] = useState<{ success?: boolean; message?: string } | null>(null)

  async function handleSubmit(formData: FormData) {
    console.log("form data",FormData)
    const result = await sendWhatsApp(formData)
    console.log("result", result)
    setFormStatus(result)
  }

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        Contact Us
      </motion.h1>
      <motion.form
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        action={handleSubmit}
        className="space-y-4"
      >
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          required
        />
        <Textarea
          name="message"
          placeholder="Your Message"
          required
        />
        <SubmitButton />
      </motion.form>
      {formStatus && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-center ${formStatus.success ? 'text-green-600' : 'text-red-600'}`}
        >
          {formStatus.message}
        </motion.div>
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="text-center"
      >
        <h2 className="text-2xl font-semibold mb-4">Or reach us on WhatsApp</h2>
        <a
          href="https://wa.me/9736611993"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-green-600 hover:text-green-700"
        >
          <MessageSquare className="mr-2" />
          Chat with us on WhatsApp
        </a>
      </motion.div>
    </div>
  )
}

