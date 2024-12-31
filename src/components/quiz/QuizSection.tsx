import React, { useState } from 'react';
import { QuizQuestion } from './QuizQuestion';
import { ProgressBar } from './ProgressBar';
import { QuizResults } from './QuizResults';
import { Heart } from 'lucide-react';

const questions = [
  {
    id: 1,
    question: "What's your favorite Movie Name?",
    options: ["Sanam teri kasam", "Shiddat", "Puspa 2", "Veer Zara"],
    correctAnswer: " Shiddat"
  },
  {
    id: 2,
    question: "What's your favorite Singer Name?",
    options: ["Jubin nautiyal", "Arijit singh", "Vishal Mishra ", "Atif Aslam "],
    correctAnswer: "Arijit singh"
  },
  {
    id: 3,
    question: "What's your dream for 2025?",
    options: ["Travel World", "Start Business", "Learn New Skills", "Find Love"],
    correctAnswer: "Start Business"
  },
  {
    id: 4,
    question: "If you were debugging life, what would you fix first?",
    options: ["Sleep Schedule", "Work-Life Balance", "Relationship Bugs", "Time Management"],
    correctAnswer: "Work-Life Balance"
  }
];

export const QuizSection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [userName, setUserName] = useState('');
  const [showQuiz, setShowQuiz] = useState(false);

  const handleStart = (name: string) => {
    setUserName(name);
    setShowQuiz(true);
  };

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);
    setCurrentQuestion(prev => prev + 1);
  };

  const correctAnswers = answers.filter(
    (answer, index) => answer === questions[index].correctAnswer
  ).length;

  if (!showQuiz) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-emerald-900 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-xl">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Friendship Quiz 2025 <Heart className="inline-block text-red-500 animate-pulse" />
            </h2>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full px-4 py-2 rounded-lg bg-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                onChange={(e) => setUserName(e.target.value)}
              />
              <button
                onClick={() => handleStart(userName)}
                disabled={!userName}
                className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-emerald-500 text-white font-bold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                Start Quiz
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (currentQuestion >= questions.length) {
    return <QuizResults userName={userName} score={correctAnswers} totalQuestions={questions.length} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-emerald-900 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <ProgressBar current={currentQuestion} total={questions.length} />
          <QuizQuestion
            question={questions[currentQuestion]}
            onAnswer={handleAnswer}
          />
        </div>
      </div>
    </div>
  );
};