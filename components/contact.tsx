"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interest: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you for your inquiry! We will be in touch soon.")
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      interest: "",
      message: "",
    })
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-background">
      <div className="mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <p className="text-sm font-sans font-medium tracking-[0.3em] uppercase text-primary mb-4">
            Contact
          </p>
          <h2 className="text-4xl md:text-5xl font-light mb-4">
            Ready to experience Greece?
          </h2>
          <p className="text-muted-foreground text-lg">
            Let&apos;s start planning your unforgettable Mediterranean journey.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-sans font-medium mb-2 text-muted-foreground uppercase tracking-wide"
              >
                First Name
              </label>
              <Input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={(e) =>
                  setFormData({ ...formData, firstName: e.target.value })
                }
                className="rounded-none border-border focus:border-primary"
                required
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-sans font-medium mb-2 text-muted-foreground uppercase tracking-wide"
              >
                Last Name
              </label>
              <Input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={(e) =>
                  setFormData({ ...formData, lastName: e.target.value })
                }
                className="rounded-none border-border focus:border-primary"
                required
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-sans font-medium mb-2 text-muted-foreground uppercase tracking-wide"
            >
              Email
            </label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="rounded-none border-border focus:border-primary"
              required
            />
          </div>

          <div>
            <label
              htmlFor="interest"
              className="block text-sm font-sans font-medium mb-2 text-muted-foreground uppercase tracking-wide"
            >
              Interest
            </label>
            <select
              id="interest"
              value={formData.interest}
              onChange={(e) =>
                setFormData({ ...formData, interest: e.target.value })
              }
              className="w-full h-10 px-3 py-2 border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary font-sans"
              required
            >
              <option value="">Select your interest</option>
              <option value="islands">Island Hopping</option>
              <option value="history">Historical Tours</option>
              <option value="adventure">Adventure & Nature</option>
              <option value="culinary">Culinary Experiences</option>
              <option value="luxury">Luxury Retreats</option>
              <option value="custom">Custom Journey</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-sans font-medium mb-2 text-muted-foreground uppercase tracking-wide"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full px-3 py-2 border border-border bg-background text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none font-sans"
              placeholder="Tell us about your dream Greek getaway..."
            />
          </div>

          <div className="text-center pt-4">
            <Button
              type="submit"
              className="rounded-none px-12 py-6 h-auto bg-primary text-primary-foreground hover:bg-primary/90 font-sans text-sm font-medium tracking-wide"
            >
              Submit Inquiry
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
