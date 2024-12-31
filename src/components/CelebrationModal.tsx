import React from 'react';
import { PartyPopper, Award } from 'lucide-react';

export const CelebrationModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-blue-900 to-emerald-900 p-8 rounded-2xl max-w-md w-full mx-4 transform animate-modal-appear">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <Award className="w-16 h-16 text-yellow-400 animate-bounce" />
          </div>
          
          <h2 className="text-2xl font-bold text-white mb-4">
            Your Friendship is Debugged and Perfect for 2025!
          </h2>
          
          <div className="flex justify-center mb-6">
            <PartyPopper className="w-12 h-12 text-yellow-400 animate-spin-slow" />
          </div>
          
          <button
            onClick={onClose}
            className="px-6 py-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            Continue Celebrating 🎉
          </button>
        </div>
      </div>
    </div>
  );
}