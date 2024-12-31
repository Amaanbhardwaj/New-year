import React from 'react';
import { Github, Instagram, Linkedin, Heart } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-to-t from-blue-900 via-black to-emerald-900">
      <div className="container mx-auto px-4 text-center">
        <p className="text-2xl text-white mb-8 flex items-center justify-center gap-2">
          Wishing you and your friends a year of laughter, success, and unforgettable memories!
          <Heart className="text-red-500 animate-pulse" />
        </p>
        
        <div className="flex justify-center gap-6 mb-8">
          {[
            { Icon: Github, href: 'https://github.com/Amaanbhardwaj', label: 'GitHub' },
            { Icon: Instagram, href: 'https://www.instagram.com/aman.rajput.5/profilecard/?igsh=MTZzdHFiamkwOTJoaw==', label: 'Instagram' },
            { Icon: Linkedin, href: 'https://www.linkedin.com/in/aman-rajput-21933b330?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' }
          ].map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors hover:scale-110"
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className="w-6 h-6 text-white" />
            </a>
          ))}
        </div>
        
        <div className="space-y-2">
          <p className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-yellow-400 to-green-400">
            Happy New Year from Aman Rajput
          </p>
          <p className="text-white/60">© 2025 Made with ❤️ by Aman Rajput</p>
        </div>
      </div>
    </footer>
  );
}