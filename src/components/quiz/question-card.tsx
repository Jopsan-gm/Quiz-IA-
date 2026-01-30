import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Save, ChevronLeft, ChevronRight, Lightbulb, Eye, EyeOff, List } from 'lucide-react';
import { Question } from '../../types/quiz-types';
import { useAnswerEvaluation } from '../../hooks/use-answer-evaluation';
import { cn } from '../../lib/utils';

interface QuestionCardProps {
  question: Question;
  currentAnswer: string;
  onSaveAnswer: (questionId: number, answer: string) => void;
  onToggleMultipleChoiceMode: () => void;
  onNext: () => void;
  onPrevious: () => void;
  isFirst: boolean;
  isLast: boolean;
  showAnswer: boolean;
  onToggleAnswer: () => void;
  interactionMode?: 'study' | 'exam';
}

export const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  currentAnswer,
  onSaveAnswer,
  onToggleMultipleChoiceMode,
  onNext,
  onPrevious,
  isFirst,
  isLast,
  showAnswer,
  onToggleAnswer,
  interactionMode = 'study'
}) => {
  const [answer, setAnswer] = useState(currentAnswer);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { getSuggestedKeywords } = useAnswerEvaluation();

  useEffect(() => {
    setAnswer(currentAnswer);
  }, [question.id, currentAnswer]);

  useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'es-ES';

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i].transcript;
          }
        }
        if (finalTranscript) {
          setAnswer(prev => prev + (prev.length > 0 ? ' ' : '') + finalTranscript);
        }
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      setRecognition(recognition);
    }
  }, []);

  const handleVoiceToggle = () => {
    if (isListening) {
      recognition?.stop();
    } else {
      recognition?.start();
      setIsListening(true);
    }
  };

  const suggestedKeywords = getSuggestedKeywords(question.id);

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
              <h2 className="text-xl font-bold text-white">Pregunta de Desarrollo</h2>
              <p className="text-slate-400 text-sm">Responde con tus propias palabras</p>
            </div>
          </div>
          <button
            onClick={onToggleMultipleChoiceMode}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors flex items-center gap-2 text-sm font-medium border border-slate-700"
          >
            <List className="w-4 h-4" />
            Cambiar a Opción Múltiple
          </button>
        </div>

        {/* Question Text */}
        <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
          <p className="text-xl text-slate-100 font-medium leading-relaxed italic">
            "{question.question}"
          </p>
        </div>

        {/* Answer Area */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <label className="text-sm font-semibold text-slate-400 uppercase tracking-wider">
              Tu Respuesta
            </label>
            <button
              onClick={handleVoiceToggle}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all",
                isListening
                  ? "bg-red-500/20 text-red-400 border border-red-500/30 animate-pulse"
                  : "bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
              )}
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              {isListening ? "Escuchando..." : "Dictar"}
            </button>
          </div>

          <textarea
            ref={textareaRef}
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Escribe tu respuesta aquí..."
            className="w-full bg-slate-950 border border-slate-800 rounded-2xl p-6 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500 transition-all min-h-[160px] resize-none"
          />

          <div className="flex flex-wrap gap-2">
            {suggestedKeywords.map((keyword, i) => (
              <span key={i} className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-slate-400 text-xs font-medium">
                <Lightbulb className="w-3 h-3 text-amber-400/70" />
                {keyword}
              </span>
            ))}
          </div>
        </div>

        {/* Answer Reveal */}
        {interactionMode === 'study' && (
          <div>
            <button
              onClick={onToggleAnswer}
              className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm font-semibold transition-colors"
            >
              {showAnswer ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              {showAnswer ? 'Ocultar respuesta correcta' : 'Ver solución sugerida'}
            </button>

            <AnimatePresence>
              {showAnswer && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="mt-4 p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/10 overflow-hidden"
                >
                  <h4 className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Respuesta Esperada</h4>
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

          <div className="flex items-center gap-3">
            <button
              onClick={() => onSaveAnswer(question.id, answer)}
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all font-medium border border-slate-700"
            >
              <Save className="w-5 h-5" />
              Guardar
            </button>
            <button
              onClick={() => {
                onSaveAnswer(question.id, answer);
                onNext();
              }}
              disabled={isLast && answer === ''}
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-500 transition-all font-bold shadow-lg shadow-indigo-600/20 disabled:opacity-50"
            >
              {isLast ? "Finalizar" : "Siguiente"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

