'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'coffee' | 'bread' | 'specials';
}

const MENU_ITEMS: MenuItem[] = [
  {
    name: 'Artisan Latte',
    description: 'Triple-shot of our signature house blend with silky micro-foam.',
    price: '$5.50',
    image: 'https://picsum.photos/seed/coffee-1/400/400',
    category: 'coffee'
  },
  {
    name: 'Butter Croissant',
    description: 'Flaky, golden-brown layers of pure French butter pastry.',
    price: '$4.25',
    image: 'https://picsum.photos/seed/bread-1/400/400',
    category: 'bread'
  },
  {
    name: 'Wildberry Muffin',
    description: 'Bursting with seasonal berries and a crunchy crumble top.',
    price: '$3.75',
    image: 'https://picsum.photos/seed/special-1/400/400',
    category: 'specials'
  },
  {
    name: 'Cappuccino',
    description: 'Perfect balance of espresso, steamed milk, and airy foam.',
    price: '$4.90',
    image: 'https://picsum.photos/seed/coffee-2/400/400',
    category: 'coffee'
  },
  {
    name: 'Sourdough Loaf',
    description: 'Slow-fermented for 24 hours for a perfect crust and tang.',
    price: '$8.00',
    image: 'https://picsum.photos/seed/bread-2/400/400',
    category: 'bread'
  },
  {
    name: 'Signature Cheesecake',
    description: 'Creamy New York style with a honey-oat crust.',
    price: '$7.50',
    image: 'https://picsum.photos/seed/special-2/400/400',
    category: 'specials'
  }
];

function CategorySection({ title, items }: { title: string, items: MenuItem[] }) {
  return (
    <div className="mb-16">
      <h3 className="font-serif text-3xl font-bold text-orange-950 mb-10 text-center flex items-center justify-center gap-4">
        <span className="h-px bg-orange-200 w-12" />
        {title}
        <span className="h-px bg-orange-200 w-12" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {items.map((item, idx) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group bg-white p-4 rounded-[2rem] hover:shadow-2xl hover:shadow-orange-900/5 transition-all duration-500 border border-transparent hover:border-orange-100"
          >
            <div className="relative aspect-square rounded-[1.5rem] overflow-hidden mb-6">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-serif text-xl font-bold text-orange-950">{item.name}</h4>
              <span className="text-orange-800 font-bold">{item.price}</span>
            </div>
            <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default function MenuSection() {
  return (
    <section id="menu" className="py-24 bg-[#fdfdfb]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            className="font-serif text-4xl md:text-5xl font-bold text-orange-950 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Curated Menu
          </motion.h2>
          <motion.p
            className="text-zinc-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Handpicked favorites made with the finest local ingredients and artisanal care.
          </motion.p>
        </div>

        <CategorySection title="☕ Coffee" items={MENU_ITEMS.filter(i => i.category === 'coffee')} />
        <CategorySection title="🍞 Bread" items={MENU_ITEMS.filter(i => i.category === 'bread')} />
        <CategorySection title="🍰 Specials" items={MENU_ITEMS.filter(i => i.category === 'specials')} />
      </div>
    </section>
  );
}
