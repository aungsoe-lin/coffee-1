'use client';

import Image from 'next/image';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-16">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -z-10 hidden lg:block" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 bg-orange-100 text-orange-900 rounded-full text-xs font-bold uppercase tracking-widest mb-6">
            Handcrafted with love
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.1] text-orange-950 mb-8">
            Freshly baked, <br />
            <span className="text-orange-700 italic">every morning.</span>
          </h1>
          <p className="text-zinc-600 text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
            Experience the warmth of artisanal bread and specialty coffee in our cozy community hub. From sourdough to sweet muffins, we have the perfect bite for your day.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#menu"
              className="bg-orange-900 text-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-orange-950 transition-all shadow-xl shadow-orange-900/10 flex items-center gap-2 group"
            >
              View Our Menu
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#visit"
              className="px-8 py-4 rounded-2xl text-lg font-semibold text-orange-950 hover:bg-orange-50 transition-all"
            >
              Visit Store
            </a>
          </div>
        </motion.div>

        <motion.div
          className="relative aspect-square md:aspect-[4/3] lg:aspect-square"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="absolute -inset-4 bg-orange-200 rounded-[32px] rotate-3 -z-10" />
          <Image
            src="https://picsum.photos/seed/bakery-hero/1000/1000"
            alt="Fresh bread on a counter"
            fill
            className="object-cover rounded-[32px] shadow-2xl"
            priority
            referrerPolicy="no-referrer"
          />
          {/* Badge */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-800 rounded-full flex items-center justify-center text-white font-serif text-xl">
                12
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-400 uppercase tracking-wide">Years of</p>
                <p className="font-serif text-lg font-bold text-orange-950">Expert Baking</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
