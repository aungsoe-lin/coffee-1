'use client';

import { motion } from 'motion/react';
import { MapPin, Phone, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Contact() {
  return (
    <section id="visit" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-orange-950 mb-10">
              Come Say Hello
            </h2>
            
            <div className="space-y-8 mb-12">
              <div className="flex gap-6 items-start">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <MapPin className="w-6 h-6 text-orange-800" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-950 mb-1">Our Location</h4>
                  <p className="text-zinc-500">123 Bakery Lane, <br />Crumb District, NY 10001</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Clock className="w-6 h-6 text-orange-800" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-950 mb-1">Opening Hours</h4>
                  <div className="text-zinc-500 text-sm">
                    <p className="flex justify-between w-48 mb-1"><span>Mon - Fri:</span> <span className="text-orange-900 font-medium">7am - 6pm</span></p>
                    <p className="flex justify-between w-48"><span>Sat - Sun:</span> <span className="text-orange-900 font-medium">8am - 4pm</span></p>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="p-3 bg-orange-50 rounded-xl">
                  <Phone className="w-6 h-6 text-orange-800" />
                </div>
                <div>
                  <h4 className="font-bold text-orange-950 mb-1">Phone</h4>
                  <p className="text-zinc-500">+1 (555) 123-4567</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-orange-900 hover:text-white transition-all cursor-pointer">
                <Instagram className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-orange-900 hover:text-white transition-all cursor-pointer">
                <Facebook className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 hover:bg-orange-900 hover:text-white transition-all cursor-pointer">
                <Twitter className="w-5 h-5" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full aspect-[4/3] bg-orange-50 rounded-[2.5rem] overflow-hidden relative border border-orange-100"
          >
            {/* Simple Map Placeholder */}
            <div className="absolute inset-0 flex items-center justify-center bg-[url('https://picsum.photos/seed/map/1000/1000')] bg-cover opacity-30 grayscale" />
            <div className="relative z-10 p-12 text-center">
              <div className="w-12 h-12 bg-orange-900 rounded-full mx-auto flex items-center justify-center text-white shadow-xl shadow-orange-900/40 mb-4 animate-bounce">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-serif text-xl font-bold text-orange-950">We&apos;re right here!</h4>
              <p className="text-zinc-600 text-sm mt-2">Just follow the scent of fresh croissants.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
