import React, { useState } from 'react';
import { LucideIcon } from 'lucide-react';
import { useEmojiBurst } from '../hooks/useEmojiBurst';

interface IllustrationCardProps {
  Icon: LucideIcon;
  title: string;
  iconColor: string;
  emojis: string[];
}

export const IllustrationCard = ({ Icon, title, iconColor, emojis }: IllustrationCardProps) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const { createEmojiBurst } = useEmojiBurst();

  const handleClick = (event: React.MouseEvent) => {
    setIsAnimating(true);
    createEmojiBurst(event, emojis);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <button
      onClick={handleClick}
      className="p-6 rounded-xl bg-black/20 backdrop-blur-sm hover:scale-105 transition-transform w-full"
    >
      <div className={`relative ${isAnimating ? 'animate-bounce' : ''}`}>
        <Icon className={`w-16 h-16 mx-auto mb-4 ${iconColor} animate-pulse`} />
      </div>
      <p className="text-white">{title}</p>
    </button>
  );
}