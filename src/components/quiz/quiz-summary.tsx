import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Target, BookOpen, RotateCcw, Home, Eye, CheckCircle2, XCircle, BarChart3, Download, Award } from 'lucide-react';
import { jsPDF } from 'jspdf';
import { Question, UserAnswer, Achievement } from '../../types/quiz-types';
import { useAnswerEvaluation } from '../../hooks/use-answer-evaluation';

const MOCK_ACHIEVEMENTS: Achievement[] = [
  { id: '1', title: 'Perfecto', description: 'Sacaste un 100% en el quiz.', icon: '🌟' },
  { id: '2', title: 'Velocista', description: 'Terminaste en tiempo récord.', icon: '⚡' },
  { id: '3', title: 'Persistente', description: '3 días de estudio seguido.', icon: '🔥' },
];

interface QuizSummaryProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  onResetQuiz: () => void;
  onReviewQuestion: (questionId: number) => void;
  onBackToSubjects: () => void;
}

export const QuizSummary: React.FC<QuizSummaryProps> = ({
  questions,
  userAnswers,
  onResetQuiz,
  onReviewQuestion,
  onBackToSubjects
}) => {
  const { evaluateDevelopmentAnswer } = useAnswerEvaluation();

  const calculateStats = () => {
    let totalCorrect = 0;
    let devCorrect = 0;
    let mcCorrect = 0;
    let devTotal = 0;
    let mcTotal = 0;
    const results: any[] = [];

    questions.forEach(q => {
      const a = userAnswers.find(ans => ans.questionId === q.id);
      let isQuestionCorrect = false;
      let userAnswerText = a?.answer || a?.multipleChoiceAnswer || 'No respondida';
      let correctAnswerText = q.answer;

      if (a) {
        if (a.multipleChoiceAnswer) {
          mcTotal++;
          const selectedOption = q.multipleChoice?.find(opt => opt.id === a.multipleChoiceAnswer);
          if (selectedOption?.isCorrect) {
            totalCorrect++;
            mcCorrect++;
            isQuestionCorrect = true;
          }
          userAnswerText = selectedOption?.text || userAnswerText;
        } else {
          devTotal++;
          const evaluation = evaluateDevelopmentAnswer(q.id, a.answer);
          if (evaluation.isCorrect) {
            totalCorrect++;
            devCorrect++;
            isQuestionCorrect = true;
          }
        }
      }

      results.push({
        questionId: q.id,
        isCorrect: isQuestionCorrect,
        userAnswer: userAnswerText,
        correctAnswer: correctAnswerText,
        questionText: q.question
      });
    });

    const totalAnswered = mcTotal + devTotal;
    return {
      percentage: questions.length > 0 ? Math.round((totalCorrect / questions.length) * 100) : 0,
      totalCorrect,
      totalAnswered,
      devCorrect,
      mcCorrect,
      devTotal,
      mcTotal,
      results
    };
  };

  const stats = calculateStats();
  const score = stats.percentage;
  const correctAnswers = stats.totalCorrect;
  const { results } = stats;

  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("Reporte de Quiz - Noveno Año", 20, 20);
    doc.setFontSize(16);
    doc.text(`Puntaje Final: ${score}%`, 20, 35);
    doc.text(`Aciertos: ${correctAnswers} de ${questions.length}`, 20, 45);

    doc.setFontSize(14);
    doc.text("Resumen de Errores:", 20, 60);

    let y = 70;
    questions.forEach((q, i) => {
      const evaluation = results.find(r => r.questionId === q.id); // Find the specific result for this question
      if (evaluation && !evaluation.isCorrect) {
        if (y > 270) { doc.addPage(); y = 20; }
        doc.setFontSize(10);
        doc.text(`${i + 1}. ${q.question.substring(0, 80)}...`, 20, y);
        y += 7;
        doc.setTextColor(255, 0, 0);
        doc.text(`Tu respuesta: ${evaluation.userAnswer.substring(0, 80) || 'Sin respuesta'}`, 25, y);
        y += 7;
        doc.setTextColor(0, 128, 0);
        doc.text(`Respuesta correcta: ${evaluation.correctAnswer.substring(0, 80)}`, 25, y);
        doc.setTextColor(0, 0, 0);
        y += 10;
      }
    });

    doc.save("repaso-quiz.pdf");
  };

  const getPerformanceData = () => {
    if (stats.percentage >= 90) return { label: '¡Magistral!', color: 'text-emerald-400', desc: 'Dominio absoluto del tema.' };
    if (stats.percentage >= 70) return { label: '¡Buen Trabajo!', color: 'text-indigo-400', desc: 'Tienes bases muy sólidas.' };
    if (stats.percentage >= 50) return { label: 'Aceptable', color: 'text-amber-400', desc: 'Necesitas reforzar algunos puntos.' };
    return { label: 'Sigue Intentando', color: 'text-red-400', desc: 'El éxito es cuestión de persistencia.' };
  };

  const perf = getPerformanceData();

  return (
    <div className="min-h-screen bg-slate-950 text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center space-y-4"
        >
          <div className="inline-flex items-center justify-center p-4 bg-indigo-500/10 rounded-3xl border border-indigo-500/20 mb-4">
            <Trophy className="w-12 h-12 text-indigo-400" />
          </div>
          <h1 className="text-5xl font-extrabold tracking-tight italic bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-500">
            {perf.label}
          </h1>
          <p className="text-slate-400 text-lg">{perf.desc}</p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/50 border border-slate-800 rounded-3xl p-8 flex flex-col items-center text-center backdrop-blur-xl"
          >
            {/* Performance Circular Stat */}
            <div className="flex flex-col items-center">
              <div className="relative w-40 h-40 mb-6">
                <svg className="w-full h-full -rotate-90">
                  <circle cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-slate-800" />
                  <motion.circle
                    cx="80" cy="80" r="70" stroke="currentColor" strokeWidth="12" fill="transparent"
                    strokeDasharray={440}
                    initial={{ strokeDashoffset: 440 }}
                    animate={{ strokeDashoffset: 440 - (440 * score) / 100 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-indigo-500"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-5xl font-black">{score}%</span>
                  <span className="text-[10px] uppercase font-bold text-slate-500 tracking-[0.2em]">Puntaje</span>
                </div>
              </div>

              <button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-2xl transition-all font-bold text-sm border border-slate-700"
              >
                <Download className="w-4 h-4" />
                Descargar Repaso PDF
              </button>
            </div>

            {/* Achievements Section */}
            <div className="mt-8 w-full space-y-4">
              <h3 className="text-sm font-black uppercase tracking-widest text-slate-500 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Insignias Ganadas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-1 gap-3"> {/* Changed to sm:grid-cols-1 for better fit */}
                {MOCK_ACHIEVEMENTS.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-4 bg-slate-900/50 border border-slate-800 rounded-2xl flex items-center gap-3 group hover:border-indigo-500/30 transition-colors"
                  >
                    <div className="text-2xl grayscale group-hover:grayscale-0 transition-all duration-500">{achievement.icon}</div>
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">{achievement.title}</h4>
                      <p className="text-[10px] text-slate-500 leading-tight">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <div className="md:col-span-2 grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <Target className="w-5 h-5 text-emerald-400" />
                <h3 className="font-bold text-slate-200">Desarrollo</h3>
              </div>
              <div className="text-3xl font-black mb-1">{stats.devCorrect}<span className="text-slate-600 text-xl">/{stats.devTotal}</span></div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Preguntas Resueltas</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-5 h-5 text-blue-400" />
                <h3 className="font-bold text-slate-200">Opción Múltiple</h3>
              </div>
              <div className="text-3xl font-black mb-1">{stats.mcCorrect}<span className="text-slate-600 text-xl">/{stats.mcTotal}</span></div>
              <p className="text-xs text-slate-500 font-bold uppercase tracking-tighter">Aciertos</p>
            </motion.div>

            <div className="col-span-2 flex gap-4">
              <button onClick={onResetQuiz} className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-slate-800 hover:bg-slate-700 transition-all font-bold text-sm">
                <RotateCcw className="w-4 h-4" /> REINTENTAR
              </button>
              <button onClick={onBackToSubjects} className="flex-1 flex items-center justify-center gap-3 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-500 transition-all font-bold text-sm shadow-lg shadow-indigo-600/20">
                <Home className="w-4 h-4" /> MATERIAS
              </button>
            </div>
          </div>
        </div>

        {/* Detailed Results */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold flex items-center gap-3 px-2">
            <BookOpen className="w-6 h-6 text-indigo-400" />
            Análisis de Preguntas
          </h2>
          <div className="grid gap-4 md:grid-cols-2">
            {questions.map((q, i) => {
              const a = userAnswers.find(ans => ans.questionId === q.id);
              const mcOpt = q.multipleChoice?.find(o => o.id === a?.multipleChoiceAnswer);
              const isCorrect = a?.multipleChoiceAnswer ? mcOpt?.isCorrect : evaluateDevelopmentAnswer(q.id, a?.answer || '').isCorrect;

              return (
                <motion.div
                  key={q.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => onReviewQuestion(q.id)}
                  className="group relative p-6 bg-slate-900/40 border border-slate-800 hover:border-indigo-500/50 rounded-2xl transition-all cursor-pointer overflow-hidden"
                >
                  <div className="flex items-start justify-between mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Pregunta {q.id}</span>
                    {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                  <p className="text-slate-200 font-medium line-clamp-2 mb-4 group-hover:text-white transition-colors">
                    {q.question}
                  </p>
                  <div className="flex items-center gap-2 text-indigo-400 font-bold text-xs uppercase tracking-tighter group-hover:translate-x-1 transition-transform">
                    <Eye className="w-3.5 h-3.5" /> Revisar Respuesta
                  </div>

                  {/* Glass highlight */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 blur-[40px] rounded-full pointer-events-none group-hover:bg-indigo-500/10 transition-colors" />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};


