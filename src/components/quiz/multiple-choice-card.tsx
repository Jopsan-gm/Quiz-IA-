import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, ChevronLeft, ChevronRight, MessageSquareText, Eye, EyeOff } from 'lucide-react';
import { Question } from '../../types/quiz-types';
import { cn } from '../../lib/utils';

interface MultipleChoiceCardProps {
  question: Question;
  selectedAnswer?: string;
  onSaveAnswer: (questionId: number, selectedOption: string) => void;
  onNext: () => void;
  onPrevious: () => void;
  onToggleMode: () => void;
  isFirst: boolean;
  isLast: boolean;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  interactionMode?: 'study' | 'exam';
}

export const MultipleChoiceCard: React.FC<MultipleChoiceCardProps> = ({
  question,
  selectedAnswer,
  onSaveAnswer,
  onNext,
  onPrevious,
  onToggleMode,
  isFirst,
  isLast,
  showAnswer,
  onToggleAnswer,
  interactionMode = 'study'
}) => {
  const handleOptionSelect = (optionId: string) => {
    if (!showAnswer) {
      onSaveAnswer(question.id, optionId);
    }
  };

  const getOptionStyles = (optionId: string) => {
    const isSelected = selectedAnswer === optionId;
    const option = question.multipleChoice?.find(opt => opt.id === optionId);
    const isCorrect = option?.isCorrect;

    if (showAnswer) {
      if (isCorrect) return "bg-emerald-500/20 border-emerald-500/50 text-emerald-200 ring-2 ring-emerald-500/20";
      if (isSelected && !isCorrect) return "bg-red-500/20 border-red-500/50 text-red-200 ring-2 ring-red-500/20 opacity-90";
      return "bg-slate-900/30 border-slate-800 text-slate-500 grayscale opacity-50";
    }

    if (isSelected) return "bg-indigo-600 border-indigo-400 text-white shadow-lg shadow-indigo-600/30 ring-2 ring-indigo-500/20";
    return "bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-slate-800 hover:border-slate-600";
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 backdrop-blur-xl"
    >
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 font-bold">
              {question.id}
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Opción Múltiple</h2>
              <p className="text-slate-400 text-sm">Elige la respuesta correcta</p>
            </div>
          </div>
          <button
            onClick={onToggleMode}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-2 text-sm font-medium border border-slate-700"
          >
            <MessageSquareText className="w-4 h-4" />
            Modo Desarrollo
          </button>
        </div>

        {/* Question Text */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <p className="text-xl text-slate-100 font-medium leading-relaxed italic">
            "{question.question}"
          </p>
        </div>

        {/* Options List */}
        <div className="grid gap-3">
          {question.multipleChoice?.map((option) => (
            <motion.button
              key={option.id}
              whileHover={!showAnswer ? { x: 4 } : {}}
              whileTap={!showAnswer ? { scale: 0.98 } : {}}
              onClick={() => handleOptionSelect(option.id)}
              disabled={showAnswer}
              className={cn(
                "group w-full flex items-center justify-between p-5 rounded-2xl border transition-all text-left",
                getOptionStyles(option.id)
              )}
            >
              <div className="flex items-center gap-4">
                <span className={cn(
                  "w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm transition-colors",
                  selectedAnswer === option.id ? "bg-white/20" : "bg-slate-700/50 text-slate-400"
                )}>
                  {option.id}
                </span>
                <span className="font-medium">{option.text}</span>
              </div>

              {showAnswer && (
                <div className="flex items-center gap-2">
                  {option.isCorrect ? (
                    <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                  ) : selectedAnswer === option.id ? (
                    <XCircle className="w-6 h-6 text-red-400" />
                  ) : null}
                </div>
              )}
            </motion.button>
          ))}
        </div>

        {/* Answer Reveal Section */}
        {interactionMode === 'study' && (
          <div>
            <button
              onClick={onToggleAnswer}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
            >
              {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAnswer ? 'Ocultar explicación' : '¿Por qué? Ver explicación'}
            </button>

            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10 overflow-hidden"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest">Base del tema</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {question.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Footer Navigation */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-800">
          <button
            onClick={onPrevious}
            disabled={isFirst}
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed transition-all font-medium"
          >
            <ChevronLeft className="w-5 h-5" />
            Anterior
          </button>

          <button
            onClick={onNext}
            disabled={!selectedAnswer && !isLast}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all font-bold shadow-lg shadow-indigo-600/20 disabled:opacity-50"
          >
            {isLast ? "Finalizar" : "Siguiente"}
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
};

