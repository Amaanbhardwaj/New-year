import React from 'react';
import { Code, Stars, Sparkles } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { ShayariDisplay } from './ShayariDisplay';

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-900 via-black to-emerald-900">
      {/* Binary Background */}
      <div className="absolute inset-0 opacity-10 binary-rain"></div>
      
      {/* Fireworks Container */}
      <div className="fireworks absolute inset-0"></div>
      
      {/* Main Content */}
      <div className="text-center z-10 px-4 space-y-12">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Code className="w-8 h-8 text-blue-400 animate-pulse" />
          <Stars className="w-8 h-8 text-yellow-400 animate-bounce" />
          <Sparkles className="w-8 h-8 text-green-400 animate-spin-slow" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400 animate-gradient">
          <TypeAnimation
            sequence={['Happy New Year 2025', 1000]}
            wrapper="span"
            speed={50}
            className="inline-block"
          />
        </h1>
        
        <p className="text-2xl md:text-3xl text-white mb-8 glow-text">
          🎉 Code Friendship ✨ Compile Memories 😄 Debug Negativity ❤️
        </p>

        <ShayariDisplay />
        
        <button 
          onClick={() => window.dispatchEvent(new CustomEvent('trigger-celebration'))}
          className="px-8 py-4 text-xl bg-gradient-to-r from-blue-500 via-yellow-500 to-green-500 rounded-full text-white font-bold hover:scale-105 transition-transform glow-button"
        >
          Start 2025 🚀
        </button>
      </div>
    </div>
  );
}