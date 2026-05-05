'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden bg-orange-50/30">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
             <Image
              src="https://picsum.photos/seed/bakery-interior/800/1000"
              alt="Bakery Interior"
              width={800}
              height={1000}
              className="rounded-[2.5rem] shadow-2xl object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute top-1/2 -right-10 -translate-y-1/2 w-48 h-48 bg-orange-200 rounded-full blur-3xl opacity-50 -z-10" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-orange-950 mb-8">
            The Art of <br />
            <span className="text-orange-700 italic underline decoration-orange-200 underline-offset-8">Slow Baking</span>
          </h2>
          <div className="space-y-6 text-zinc-600 text-lg leading-relaxed">
            <p>
              At Sweet Crumbs, we believe that good things take time. That&apos;s why our sourdough ferments for 24 hours, and our pastry chefs arrive before the sun to hand-roll every single croissant.
            </p>
            <p>
              Our story began with a simple counter and a bag of flour. Today, we&apos;re proud to be the heart of the community—a place where the aroma of fresh coffee meets the warmth of a neighborly smile.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <p className="text-3xl font-serif font-bold text-orange-900 mb-1">100%</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Natural Ingredients</p>
            </div>
            <div>
              <p className="text-3xl font-serif font-bold text-orange-900 mb-1">Daily</p>
              <p className="text-sm text-zinc-500 font-medium uppercase tracking-wider">Fresh Batch</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
