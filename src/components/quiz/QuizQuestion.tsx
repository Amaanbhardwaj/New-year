import React from 'react';
import { Sparkles } from 'lucide-react';

interface QuizQuestionProps {
  question: {
    id: number;
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
  return (
    <div className="bg-black/30 backdrop-blur-sm p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-8 text-center">
        {question.question}
        <Sparkles className="inline-block ml-2 text-yellow-400" />
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {question.options.map((option) => (
          <button
            key={option}
            onClick={() => onAnswer(option)}
            className="p-4 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(59,130,246,0.5)] focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};