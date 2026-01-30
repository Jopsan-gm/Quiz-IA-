import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, Microscope, ChevronRight, Activity, Zap } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { cn } from '../lib/utils';
import { useQuizProgress } from '../hooks/use-quiz-progress';
import { AppTheme } from '../types/quiz-types';

const mockChartData = [
  { day: 'Lun', score: 65 },
  { day: 'Mar', score: 72 },
  { day: 'Mie', score: 68 },
  { day: 'Jue', score: 85 },
  { day: 'Vie', score: 82 },
  { day: 'Sab', score: 92 },
  { day: 'Dom', score: 95 },
];

export const SubjectSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { progress, setTheme } = useQuizProgress(0);

  const themes: { id: AppTheme, color: string, text: string, chart: string, glow: string, label: string }[] = [
    { id: 'midnight', color: 'bg-indigo-600', text: 'text-indigo-400', chart: '#6366f1', glow: 'bg-indigo-500/10', label: 'Midnight' },
    { id: 'forest', color: 'bg-emerald-600', text: 'text-emerald-400', chart: '#10b981', glow: 'bg-emerald-500/10', label: 'Forest' },
    { id: 'sunset', color: 'bg-orange-600', text: 'text-orange-400', chart: '#f97316', glow: 'bg-orange-500/10', label: 'Sunset' },
    { id: 'ocean', color: 'bg-cyan-600', text: 'text-cyan-400', chart: '#06b6d4', glow: 'bg-cyan-500/10', label: 'Ocean' },
  ];

  const currentTheme = themes.find(t => t.id === progress.theme) || themes[0];

  const subjects = [
    {
      id: 'social-studies',
      title: 'Estudios Sociales',
      subtitle: 'Noveno Año',
      description: 'Historia colonial, Ilustración y Revolución Francesa.',
      icon: BookOpen,
      color: 'from-blue-500 to-indigo-600',
      shadow: 'shadow-blue-500/20'
    },
    {
      id: 'science',
      title: 'Ciencias',
      subtitle: 'Noveno Año',
      description: 'Biología, química y física aplicada.',
      icon: Microscope,
      color: 'from-emerald-500 to-teal-600',
      shadow: 'shadow-emerald-500/20'
    }
  ];

  return (
    <div className={cn(
      "min-h-screen text-white selection:bg-indigo-500/30 transition-colors duration-700",
      progress.theme === 'midnight' ? "bg-slate-950" :
        progress.theme === 'forest' ? "bg-stone-950" :
          progress.theme === 'sunset' ? "bg-zinc-950" : "bg-slate-950"
    )}>
      {/* Background Orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className={cn(
          "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] transition-all duration-1000 opacity-20",
          currentTheme.color
        )} />
        <div className={cn(
          "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full blur-[120px] transition-all duration-1000 opacity-10",
          currentTheme.color === 'bg-indigo-600' ? 'bg-emerald-600' : 'bg-indigo-600'
        )} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12">
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <h1 className="text-4xl font-extrabold tracking-tight mb-2">
              👋 Hola, <span className={cn("transition-colors", currentTheme.text)}>Estudiante</span>
            </h1>
            <p className="text-slate-400">Listo para continuar tu aprendizaje hoy?</p>
          </motion.div>

          <div className="flex flex-wrap items-center gap-6">
            {/* Theme Selector */}
            <div className="flex items-center gap-2 p-1.5 bg-slate-900/80 border border-slate-800 rounded-2xl backdrop-blur-sm">
              {themes.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTheme(t.id)}
                  title={t.label}
                  className={cn(
                    "w-6 h-6 rounded-full transition-all hover:scale-110",
                    t.color,
                    progress.theme === t.id ? "ring-2 ring-white ring-offset-2 ring-offset-slate-900 scale-110" : "opacity-40"
                  )}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex gap-4"
            >
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-3 backdrop-blur-md">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nivel</span>
                <div className={cn("text-xl font-bold transition-colors", currentTheme.text)}>Noveno Año</div>
              </div>
              <div className="bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-3 backdrop-blur-md">
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Racha</span>
                <div className="text-xl font-bold text-orange-400">3 Días 🔥</div>
              </div>
            </motion.div>
          </div>
        </header>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="md:col-span-2 bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md relative overflow-hidden group">
            <div className="flex items-center justify-between mb-8 relative z-10">
              <div>
                <h2 className="text-2xl font-bold mb-1 flex items-center gap-3">
                  <Activity className={cn("w-6 h-6 transition-colors", currentTheme.text)} />
                  Tu Crecimiento
                </h2>
                <p className="text-slate-500 text-sm font-medium">Evolución de tus aciertos los últimos 7 días</p>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 rounded-full border border-emerald-500/20">
                <Zap className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400" />
                <span className="text-[10px] font-black text-emerald-400 uppercase tracking-wider">+24% Este mes</span>
              </div>
            </div>

            <div className="h-[200px] w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockChartData}>
                  <defs>
                    <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor={currentTheme.chart} />
                      <stop offset="100%" stopColor={currentTheme.chart} stopOpacity={0.6} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                  <XAxis
                    dataKey="day"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: '#64748b', fontSize: 12, fontWeight: 600 }}
                    dy={10}
                  />
                  <YAxis hide domain={[0, 100]} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff', fontSize: '12px', fontWeight: 'bold' }}
                  />
                  <Line
                    type="monotone"
                    dataKey="score"
                    stroke="url(#lineGradient)"
                    strokeWidth={4}
                    dot={{ fill: currentTheme.chart, r: 4, strokeWidth: 4, stroke: '#0f172a' }}
                    activeDot={{ r: 6, strokeWidth: 0 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 p-8 rounded-3xl backdrop-blur-md">
            <h3 className="font-bold text-slate-200 mb-4">Meta Semanal</h3>
            <div className="space-y-4">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider">
                <span className="text-slate-500">Progreso</span>
                <span className={cn("transition-colors", currentTheme.text)}>12/20 Quizzes</span>
              </div>
              <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                <div className={cn("h-full transition-all duration-500", currentTheme.color)} style={{ width: '60%' }} />
              </div>
            </div>
          </div>
        </div>

        <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500 mb-6 px-1">Materias Disponibles</h3>

        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject, index) => (
            <motion.button
              key={subject.id}
              initial={{ opacity: 0, x: index === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => navigate(`/quiz/${subject.id}`)}
              className={cn(
                "group relative p-8 rounded-3xl text-left transition-all duration-300",
                "bg-slate-900/50 border border-slate-800 hover:border-slate-700",
                "hover:bg-slate-900/80 hover:scale-[1.02]",
                subject.shadow
              )}
            >
              <div className="flex items-start justify-between mb-8">
                <div className={cn(
                  "p-4 rounded-2xl bg-gradient-to-br",
                  subject.color
                )}>
                  <subject.icon className="w-8 h-8 text-white" />
                </div>
                <div className="p-2 rounded-full border border-slate-800 group-hover:bg-slate-800 transition-colors">
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                </div>
              </div>

              <div>
                <span className="text-sm font-semibold tracking-wider uppercase text-slate-500 mb-2 block">
                  {subject.subtitle}
                </span>
                <h2 className="text-3xl font-bold mb-3">
                  {subject.title}
                </h2>
                <p className="text-slate-400 leading-relaxed">
                  {subject.description}
                </p>
              </div>

              {/* Decorative gradient blur */}
              <div className={cn(
                "absolute -bottom-2 -right-2 w-24 h-24 blur-2xl rounded-full opacity-0 group-hover:opacity-20 transition-opacity",
                subject.color
              )} />
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 text-sm">
            ¿Falta alguna materia? <span className="text-indigo-400 cursor-pointer hover:underline">Solicítala aquí</span>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

