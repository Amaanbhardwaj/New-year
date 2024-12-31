import React, { useState, useEffect } from 'react';
import { HeroSection } from './components/HeroSection';
import { ShayariSection } from './components/ShayariSection';
import { CountdownTimer } from './components/CountdownTimer';
import { Footer } from './components/Footer';
import { CelebrationModal } from './components/CelebrationModal';
import { QuizSection } from './components/quiz/QuizSection';

function App() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const handleCelebration = () => {
      const audio = new Audio('https://assets.mixkit.co/active_storage/sfx/2020.wav');
      audio.play().catch(() => {});
      setShowModal(true);
    };

    window.addEventListener('trigger-celebration', handleCelebration);
    return () => window.removeEventListener('trigger-celebration', handleCelebration);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      <HeroSection />
      <ShayariSection />
      <QuizSection />
      <CountdownTimer />
      <Footer />
      <CelebrationModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
}

export default App;