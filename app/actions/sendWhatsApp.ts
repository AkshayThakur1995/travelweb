'use server'


export async function sendWhatsApp(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('msesage') as string

  // Replace this with your actual WhatsApp business phone number
  const phoneNumber = '8470063592'

  // Construct the message
  const whatsappMessage = `New contact form submission:
Name: ${name}
Email: ${email}
Message: ${message}`

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(whatsappMessage)

  // Construct the WhatsApp API URL
  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`

  try {
    // In a real-world scenario, you would use a proper WhatsApp Business API here
    // For demonstration purposes, we're just logging the URL
    console.log('WhatsApp message would be sent to:', whatsappUrl)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))

    return { success: true, message: 'Message sent successfully!' }
  } catch (error) {
    console.error('Error sending WhatsApp message:', error)
    return { success: false, message: 'Failed to send message. Please try again.' }
  }
}

