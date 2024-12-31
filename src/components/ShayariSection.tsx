import React from 'react';
import { Coffee, Users, Code } from 'lucide-react';
import { IllustrationCard } from './IllustrationCard';

export const ShayariSection = () => {
  const illustrations = [
    {
      Icon: Users,
      title: 'Friends Forever',
      iconColor: 'text-yellow-400',
      emojis: ['🤝', '💖', '🎉', '✨', '🫂']
    },
    {
      Icon: Coffee,
      title: 'Coffee & Code',
      iconColor: 'text-blue-400',
      emojis: ['☕', '💻', '⌨️', '🖥️', '🚀']
    },
    {
      Icon: Code,
      title: 'Code Together',
      iconColor: 'text-green-400',
      emojis: ['👩‍💻', '👨‍💻', '🔥', '💡', '⚡']
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-r from-blue-900 to-emerald-900">
      <div className="container mx-auto px-4">
        {/* Shayari Marquee */}
        <div className="overflow-hidden mb-16">
          <div className="marquee-content py-6 bg-black/30 rounded-lg backdrop-blur-sm">
            <p className="text-2xl md:text-3xl text-white font-hindi animate-marquee whitespace-nowrap">
              "Saathi hai jo hamesha saath, Dosti ki yeh hai baat,
              Milkar guzare naye saal ki raatein, Zindagi ban jaye ek pyara sa code ka path!"
            </p>
          </div>
        </div>
        
        {/* Illustrations */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {illustrations.map((item) => (
            <IllustrationCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}