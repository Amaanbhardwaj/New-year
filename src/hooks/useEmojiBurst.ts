import { useCallback } from 'react';

export const useEmojiBurst = () => {
  const createEmojiBurst = useCallback((event: React.MouseEvent, emojis: string[]) => {
    const { clientX, clientY } = event;
    
    for (let i = 0; i < 8; i++) {
      const emoji = document.createElement('div');
      const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
      
      emoji.innerText = randomEmoji;
      emoji.style.position = 'fixed';
      emoji.style.left = `${clientX}px`;
      emoji.style.top = `${clientY}px`;
      emoji.style.fontSize = '1.5rem';
      emoji.style.pointerEvents = 'none';
      emoji.style.userSelect = 'none';
      
      const angle = (i * 45 * Math.PI) / 180;
      const velocity = 10;
      let x = 0;
      let y = 0;
      
      document.body.appendChild(emoji);
      
      const animate = () => {
        x += Math.cos(angle) * velocity;
        y += Math.sin(angle) * velocity + 0.5; // Add gravity
        
        emoji.style.transform = `translate(${x}px, ${y}px)`;
        emoji.style.opacity = (1000 - y) / 1000;
        
        if (y < 1000) {
          requestAnimationFrame(animate);
        } else {
          emoji.remove();
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, []);

  return { createEmojiBurst };
}