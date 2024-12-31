import React, { useState } from 'react';
import { Heart, Download, Trophy } from 'lucide-react';
import confetti from 'canvas-confetti';

interface QuizResultsProps {
  userName: string;
  score: number;
  totalQuestions: number;
}

export const QuizResults = ({ userName, score, totalQuestions }: QuizResultsProps) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const percentage = (score / totalQuestions) * 100;

  React.useEffect(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }, []);

  const getMessage = () => {
    if (percentage === 100) return `You know Aman 100%! Certified Best Friend of 2025!`;
    if (percentage >= 75) return `Amazing! You're almost there to being Aman's best friend!`;
    if (percentage >= 50) return `Keep learning about Aman! Cheers to stronger friendships in 2025!`;
    return `Let's get to know each other better in 2025!`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-emerald-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-xl text-center">
          <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6 animate-bounce" />
          <h2 className="text-3xl font-bold text-white mb-4">
            Quiz Complete! <Heart className="inline-block text-red-500 animate-pulse" />
          </h2>
          <p className="text-2xl text-white mb-6">
            {getMessage()}
          </p>
          <div className="mb-8">
            <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              {score} / {totalQuestions}
            </div>
            <p className="text-white/80">Correct Answers</p>
          </div>
          <button
            onClick={() => setShowCertificate(true)}
            className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            <Download className="w-5 h-5" />
            View Certificate
          </button>

          {showCertificate && (
            <div className="mt-8 p-8 border-4 border-yellow-400 rounded-xl bg-gradient-to-br from-blue-900/50 to-emerald-900/50 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">Friendship Certificate</h3>
              <p className="text-xl text-white mb-2">This certifies that</p>
              <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 mb-4">
                {userName}
              </p>
              <p className="text-xl text-white mb-4">
                is officially a New Year 2025 Friend of Aman Rajput
              </p>
              <div className="flex justify-center gap-2">
                <Heart className="text-red-500 animate-pulse" />
                <Heart className="text-red-500 animate-pulse delay-100" />
                <Heart className="text-red-500 animate-pulse delay-200" />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};