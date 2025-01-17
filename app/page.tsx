"use client";

import { Button } from "@/components/ui/button";
import ButtonHover8 from "@/components/ui/buttong";
import { Card, CardContent } from "@/components/ui/card";
import MarqueeDemo from "@/components/ui/marque";
import { Camera, Heart, Mail, MapPin, Phone, Calendar, Clock, Video, Sparkles, Cake, Baby } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { IoCallOutline } from "react-icons/io5";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[80vh] sm:h-screen">
        <Image
          src="banner.jpg"
          alt="Bengali Wedding"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <Image src={'/logo.jpg'} className="rounded-sm shadow-sm absolute left-4 sm:left-12 top-8 shadow-white" width={150} height={40} alt="logo"/>
        <div className="absolute md:inset-0 top-40  flex flex-col items-start pl-4 sm:pl-12 justify-center text-white">
          
          <h1 className="text-5xl md:text-7xl font-bold my-4 sm:my-1">Chitra &nbsp; Bindu<br/> Photography</h1>
          <p className="text-xl md:text-2xl mb-4">Bengali Wedding Photography</p>
          <p className="text-sm md:text-xl w-60 md:w-full mb-8">Capturing Timeless Bengali Wedding Traditions</p>
          <Link href={'tel:+917872744407'}  className="bg-red-600 text-white hover:bg-red-700 p-4 rounded-md flex gap-3">
            <IoCallOutline size={25} /> +91 7872744407
          </Link>
        </div>
        <div className="absolute bottom-0 w-[48%] left-0">
        
        <MarqueeDemo/>
         
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="/gallery/gl1.jpg"
                alt="Wedding Photographer"
                width={600}
                height={800}
                className="rounded-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6">Preserving Bengali Wedding Traditions</h2>
              <p className="text-gray-600 mb-6">
                With 5 years of specialized experience in Bengali wedding photography, I understand 
                the deep cultural significance of each ritual - from Aashirbaad to Sindoor Daan. 
                My passion lies in documenting these precious moments that blend tradition with 
                contemporary elegance.
              </p>
              <p className="text-gray-600 mb-6">
                Every Bengali wedding tells a unique story, and I take pride in capturing the 
                vibrant colors, emotions, and traditions that make our culture so rich and beautiful.
              </p>
              <Button variant="outline" className="gap-2">
                <Link 
                      href="https://wa.me/917872744407?text=Hello%2C%20I'd%20like%20to%20chat%20with%20you!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex gap-2"
                >
                  <FaWhatsapp className="w-4 h-4" /> <span className="text-md">Connect on Whatsapp</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
  {
    title: "Complete Wedding Coverage",
    description: "From Gaye Holud to Bou Bhaat, we capture every significant moment",
    icon: <Camera className="w-6 h-6" />
  },
  {
    title: "Pre-Wedding Shoot",
    description: "Artistic engagement sessions at iconic Bengali locations",
    icon: <Heart className="w-6 h-6" />
  },
  {
    title: "Cinematic Films",
    description: "Beautiful wedding films that tell your love story",
    icon: <Video className="w-6 h-6" />
  },
  {
    title: "Party Photography",
    description: "From lively family gatherings to corporate events, we capture the fun and energy",
    icon: <Sparkles className="w-6 h-6" />
  },
  {
    title: "Birthday Coverage",
    description: "Memorable shots of your special day, from decor details to the cake-cutting moment",
    icon: <Cake className="w-6 h-6" />
  },
  {
    title: "Rice Ceremony Coverage",
    description: "Celebrate your baby's Annaprashan tradition with heartwarming and timeless photos",
    icon: <Baby className="w-6 h-6" />
  }
]
.map((service, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 text-red-600">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Featured Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "/gallery/sl4.jpg",
              "/gallery/sl6.jpg",
              "/gallery/sl5.jpg",
              "/gallery/sl7.jpg",
              "/gallery/sl8.jpg",
              "/gallery/sl11.jpg"
            ].map((url, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={url}
                      alt={`Bengali Wedding photo ${index + 1}`}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-6 bg-red-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Wedding Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Essential",
                features: ["Full Day Coverage", "Pre-Wedding Shoot", "Digital Album"],
                icon: <Calendar className="w-6 h-6" />
              },
              {
                title: "Premium",
                features: ["2 Days Coverage", "Cinematic Film", "Premium Photo Album", "Family Portraits"],
                icon: <Camera className="w-6 h-6" />
              },
              {
                title: "Luxury",
                features: ["3 Days Coverage", "Drone Shots", "Premium Film", "Multiple Photographers"],
                icon: <Video className="w-6 h-6" />
              }
            ].map((pkg, index) => (
              <Card key={index} className="p-6">
                <div className="mb-4 text-red-600">{pkg.icon}</div>
                <h3 className="text-xl font-bold mb-4">{pkg.title}</h3>
                <ul className="space-y-2">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-red-600" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>
      {/* Our Team Section */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto">
    <h2 className="text-4xl font-bold text-center mb-12">Our Team</h2>
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: "Satinath Dolai",
          designation: "Lead Photographer & Editor",
          image: "/gallery/satinath.jpg"
        },
        {
          name: "Surajit Dolai",
          designation: "Cinematographer",
          image: "/gallery/surajit.jpg"
        },
        {
          name: "Pradip Sahoo",
          designation: "Developer",
          image: "/gallery/pradip.jpg"
        }
      ].map((member, index) => (
        <Card key={index} className="overflow-hidden">
          <CardContent className="p-0">
            <div className="relative aspect-[3/4]">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-red-600">{member.designation}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  </div>
</section>


      {/* Contact */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12">Get in Touch</h2>
          <div className="flex flex-col md:flex-row justify-center gap-8 mb-12">
            <Button variant="outline" className="gap-2">
              <Phone className="w-4 h-4" /> +91 7872744407
            </Button>
            <Button variant="outline" className="gap-2">
              <Mail className="w-4 h-4" /> chitrabinduphotography@gmail.com
            </Button>
            <Button variant="outline" className="gap-2">
              <MapPin className="w-4 h-4" /> Namkhana, West Bengal
            </Button>
          </div>
          <p className="text-gray-600">
            Lets create beautiful memories of your special day. Contact us to check availability and discuss your wedding plans.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p>© 2024 Satinath Dolai Photography. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}