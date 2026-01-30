import React from 'react';
import { motion } from 'framer-motion';
import { RotateCcw, CheckCircle2, Circle } from 'lucide-react';
import { UserAnswer } from '../../types/quiz-types';
import { cn } from '../../lib/utils';

interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number;
  userAnswers: UserAnswer[];
  onGoToQuestion: (questionNumber: number) => void;
  onReset: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentQuestion,
  totalQuestions,
  completedQuestions,
  userAnswers,
  onGoToQuestion,
  onReset
}) => {
  const isQuestionAnswered = (num: number) => {
    return userAnswers.some(a => a.questionId === num && (a.answer !== '' || a.multipleChoiceAnswer !== undefined));
  };

  return (
    <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-6">
        <h3 className="font-bold text-slate-200">Mapa del Quiz</h3>
        <span className="text-xs font-bold text-indigo-400 bg-indigo-500/10 px-2 py-1 rounded-md">
          {completedQuestions}/{totalQuestions} Completados
        </span>
      </div>

      <div className="grid grid-cols-5 gap-2 mb-8">
        {Array.from({ length: totalQuestions }, (_, i) => {
          const num = i + 1;
          const isCurrent = num === currentQuestion;
          const isAnswered = isQuestionAnswered(num);

          return (
            <motion.button
              key={num}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onGoToQuestion(num)}
              className={cn(
                "w-full aspect-square rounded-xl flex items-center justify-center text-xs font-bold transition-all border",
                isCurrent
                  ? "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/20 ring-2 ring-indigo-500/20"
                  : isAnswered
                    ? "bg-emerald-500/20 border-emerald-500/40 text-emerald-400"
                    : "bg-slate-800 border-slate-700 text-slate-500 hover:border-slate-500 hover:text-slate-300"
              )}
            >
              {isAnswered ? <CheckCircle2 className="w-4 h-4" /> : num}
            </motion.button>
          );
        })}
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
          <div className="flex items-center gap-1.5">
            <Circle className="w-3 h-3 text-indigo-500 fill-indigo-500" />
            <span>Actual</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="w-3 h-3 text-emerald-500 fill-emerald-500" />
            <span>Resuelto</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Circle className="w-3 h-3 text-slate-700 fill-slate-700" />
            <span>Pendiente</span>
          </div>
        </div>

        <button
          onClick={onReset}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-red-500/20 text-red-400/80 hover:bg-red-500/10 hover:text-red-400 transition-all text-sm font-bold mt-4"
        >
          <RotateCcw className="w-4 h-4" />
          Reiniciar Todo
        </button>
      </div>
    </div>
  );
};

