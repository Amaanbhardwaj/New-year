import React from 'react';
import { useTypewriter } from '../hooks/useTypewriter';

export const ShayariDisplay = () => {
  const text = useTypewriter(
    "Code with friends, debug with care, In twenty twenty-five, memories we'll share! 💻✨",
    100
  );

  return (
    <div className="p-4 bg-black/20 backdrop-blur-sm rounded-lg max-w-2xl mx-auto">
      <p className="text-xl md:text-2xl text-white font-medium leading-relaxed">
        {text}
      </p>
    </div>
  );
}