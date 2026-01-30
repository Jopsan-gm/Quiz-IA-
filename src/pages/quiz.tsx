import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, LayoutGrid, Timer, Trophy, ArrowRight } from 'lucide-react';
import { questions } from '../data/questions';
import { scienceQuestions } from '../data/science-questions';
import { QuestionCard } from '../components/quiz/question-card';
import { MultipleChoiceCard } from '../components/quiz/multiple-choice-card';
import { Navigation } from '../components/quiz/navigation';
import { QuizSummary } from '../components/quiz/quiz-summary';
import { useQuizProgress } from '../hooks/use-quiz-progress';
import { cn } from '../lib/utils';

export const QuizPage: React.FC = () => {
  const { subject } = useParams<{ subject: string }>();
  const navigate = useNavigate();
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSummary, setShowSummary] = useState(false);

  const getQuestions = () => {
    switch (subject) {
      case 'science': return scienceQuestions;
      case 'social-studies':
      default: return questions;
    }
  };

  const currentQuestions = getQuestions();

  const {
    progress,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    saveAnswer,
    saveMultipleChoiceAnswer,
    toggleMultipleChoiceMode,
    setInteractionMode,
    resetProgress,
    getCurrentAnswer,
    getCurrentMultipleChoiceAnswer
  } = useQuizProgress(currentQuestions.length);

  const currentQuestion = currentQuestions[progress.currentQuestion - 1];
  const currentAnswer = getCurrentAnswer(progress.currentQuestion);
  const currentMultipleChoiceAnswer = getCurrentMultipleChoiceAnswer(progress.currentQuestion);

  const getSubjectInfo = () => {
    switch (subject) {
      case 'science':
        return { title: 'Ciencias', icon: '🔬', color: 'from-emerald-500 to-teal-600' };
      case 'social-studies':
      default:
        return { title: 'Estudios Sociales', icon: '🏛️', color: 'from-blue-500 to-indigo-600' };
    }
  };

  const subjectInfo = getSubjectInfo();
  const isQuizCompleted = progress.userAnswers.length === currentQuestions.length;
  const progressPercent = (progress.currentQuestion / currentQuestions.length) * 100;

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const timerColor = progress.examTimeLeft && progress.examTimeLeft < 60 ? "text-red-500" : progress.examTimeLeft && progress.examTimeLeft < 180 ? "text-amber-500" : "text-emerald-400";

  if (showSummary || isQuizCompleted) {
    return (
      <QuizSummary
        questions={currentQuestions}
        userAnswers={progress.userAnswers}
        onResetQuiz={() => { setShowSummary(false); resetProgress(); }}
        onReviewQuestion={(id) => { setShowSummary(false); goToQuestion(id); }}
        onBackToSubjects={() => navigate('/')}
      />
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white selection:bg-indigo-500/30 pb-20">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={cn("absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] opacity-20 bg-gradient-to-br", subjectInfo.color)} />
      </div>

      {/* Top Navbar */}
      <nav className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/5 py-4 px-6 mb-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="font-semibold text-sm uppercase tracking-wider">Salir</span>
          </button>

          <div className="flex items-center gap-3">
            <span className="text-2xl">{subjectInfo.icon}</span>
            <div className="text-left">
              <h1 className="text-sm font-bold uppercase tracking-widest text-slate-200 leading-tight">
                {subjectInfo.title}
              </h1>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-tighter">
                Noveno Año • Repaso General
              </p>
            </div>
          </div>

          {/* Mode Switcher */}
          <div className="flex items-center gap-2 p-1 bg-slate-900 border border-slate-800 rounded-xl max-sm:hidden">
            <button
              onClick={() => setInteractionMode('study')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all tracking-wider",
                progress.interactionMode === 'study' ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"
              )}
            >
              ESTUDIO
            </button>
            <button
              onClick={() => setInteractionMode('exam')}
              className={cn(
                "px-3 py-1.5 rounded-lg text-[10px] font-bold transition-all tracking-wider",
                progress.interactionMode === 'exam' ? "bg-indigo-600 text-white" : "text-slate-500 hover:text-slate-300"
              )}
            >
              EXAMEN
            </button>
          </div>

          <div className="flex items-center gap-4">
            {progress.interactionMode === 'exam' && progress.examTimeLeft !== undefined && (
              <div className="flex items-center gap-3 px-4 py-2 bg-slate-900 border border-slate-800 rounded-2xl">
                <div className="relative w-7 h-7">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2.5" fill="transparent" className="text-slate-800" />
                    <motion.circle
                      cx="14" cy="14" r="12" stroke="currentColor" strokeWidth="2.5" fill="transparent"
                      strokeDasharray={75.4}
                      initial={{ strokeDashoffset: 75.4 }}
                      animate={{ strokeDashoffset: 75.4 - (75.4 * progress.examTimeLeft) / 600 }}
                      className={timerColor}
                    />
                  </svg>
                  <Timer className={cn("absolute top-1/2 left-1/2 -translate-x-3.5 -translate-y-3.5 w-3 h-3 translate-x-[4px] translate-y-[4px]", timerColor)} />
                </div>
                <span className={cn("text-sm font-black tabular-nums tracking-tight", timerColor)}>
                  {formatTime(progress.examTimeLeft)}
                </span>
              </div>
            )}

            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] font-bold text-slate-500 uppercase">Pregunta</span>
              <span className="text-sm font-bold tabular-nums">
                {progress.currentQuestion}/{currentQuestions.length}
              </span>
            </div>
            <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center">
              <Trophy className="w-5 h-5 text-indigo-400" />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="absolute bottom-0 left-0 h-[2px] bg-slate-800 w-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progressPercent}%` }}
            className={cn("h-full bg-gradient-to-r", subjectInfo.color)}
          />
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Quiz Card */}
        <div className="lg:col-span-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={progress.currentQuestion + (progress.isMultipleChoiceMode ? 'mc' : 'dev')}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {progress.isMultipleChoiceMode ? (
                <MultipleChoiceCard
                  question={currentQuestion}
                  selectedAnswer={currentMultipleChoiceAnswer}
                  onSaveAnswer={saveMultipleChoiceAnswer}
                  onNext={goToNextQuestion}
                  onPrevious={goToPreviousQuestion}
                  onToggleMode={toggleMultipleChoiceMode}
                  isFirst={progress.currentQuestion === 1}
                  isLast={currentQuestions.length === progress.currentQuestion}
                  showAnswer={showAnswer}
                  onToggleAnswer={() => setShowAnswer(!showAnswer)}
                  interactionMode={progress.interactionMode}
                />
              ) : (
                <QuestionCard
                  question={currentQuestion}
                  currentAnswer={currentAnswer}
                  onSaveAnswer={saveAnswer}
                  onToggleMultipleChoiceMode={toggleMultipleChoiceMode}
                  onNext={goToNextQuestion}
                  onPrevious={goToPreviousQuestion}
                  isFirst={progress.currentQuestion === 1}
                  isLast={currentQuestions.length === progress.currentQuestion}
                  showAnswer={showAnswer}
                  onToggleAnswer={() => setShowAnswer(!showAnswer)}
                  interactionMode={progress.interactionMode}
                />
              )}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: Navigation & Stats */}
        <aside className="lg:col-span-4 space-y-6">
          <Navigation
            currentQuestion={progress.currentQuestion}
            totalQuestions={currentQuestions.length}
            completedQuestions={progress.completedQuestions}
            userAnswers={progress.userAnswers}
            onGoToQuestion={goToQuestion}
            onReset={resetProgress}
          />

          <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl">
            <h3 className="text-slate-200 font-bold mb-4 flex items-center gap-2">
              <Timer className="w-4 h-4 text-indigo-400" />
              Sugerencia de Estudio
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Enfócate en los conceptos clave que aparecen resaltados en las respuestas de desarrollo.
            </p>
            <button className="w-full flex items-center justify-between p-4 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-colors group">
              <div className="flex items-center gap-3">
                <LayoutGrid className="w-5 h-5 text-indigo-400" />
                <span className="text-sm font-semibold">Resumen de Temas</span>
              </div>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </aside>
      </main>
    </div>
  );
};
