import { useState, useEffect } from 'react';
import { QuizProgress, AppTheme } from '../types/quiz-types';

// Hook for managing quiz progress and navigation
export const useQuizProgress = (totalQuestions: number) => {
  const [progress, setProgress] = useState<QuizProgress>(() => {
    const saved = localStorage.getItem('quizProgress');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        return {
          currentQuestion: parsed.currentQuestion || 1,
          totalQuestions: parsed.totalQuestions || totalQuestions,
          completedQuestions: parsed.completedQuestions || 0,
          userAnswers: parsed.userAnswers || [],
          isMultipleChoiceMode: parsed.isMultipleChoiceMode || false,
          interactionMode: parsed.interactionMode || 'study',
          theme: parsed.theme || 'midnight',
          achievements: parsed.achievements || [],
          examTimeLeft: parsed.examTimeLeft !== undefined ? parsed.examTimeLeft : 600 // 10 min default
        };
      } catch {
        return {
          currentQuestion: 1,
          totalQuestions,
          completedQuestions: 0,
          userAnswers: [],
          isMultipleChoiceMode: false,
          interactionMode: 'study',
          theme: 'midnight',
          achievements: [],
          examTimeLeft: 600
        };
      }
    }
    return {
      currentQuestion: 1,
      totalQuestions,
      completedQuestions: 0,
      userAnswers: [],
      isMultipleChoiceMode: false,
      interactionMode: 'study',
      theme: 'midnight',
      achievements: [],
      examTimeLeft: 600
    };
  });

  // Save progress to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('quizProgress', JSON.stringify(progress));
  }, [progress]);

  const goToNextQuestion = () => {
    if (progress.currentQuestion < totalQuestions) {
      setProgress(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion + 1
      }));
    }
  };

  const goToPreviousQuestion = () => {
    if (progress.currentQuestion > 1) {
      setProgress(prev => ({
        ...prev,
        currentQuestion: prev.currentQuestion - 1
      }));
    }
  };

  const goToQuestion = (questionNumber: number) => {
    if (questionNumber >= 1 && questionNumber <= totalQuestions) {
      setProgress(prev => ({
        ...prev,
        currentQuestion: questionNumber
      }));
    }
  };

  const saveAnswer = (questionId: number, answer: string) => {
    setProgress(prev => {
      const existingAnswerIndex = prev.userAnswers.findIndex(
        userAnswer => userAnswer.questionId === questionId
      );

      let newUserAnswers;
      if (existingAnswerIndex >= 0) {
        // Update existing answer
        newUserAnswers = [...prev.userAnswers];
        newUserAnswers[existingAnswerIndex] = {
          ...newUserAnswers[existingAnswerIndex],
          answer,
          timestamp: new Date()
        };
      } else {
        // Add new answer
        newUserAnswers = [
          ...prev.userAnswers,
          {
            questionId,
            answer,
            isCorrect: false,
            correctAnswer: '',
            timestamp: new Date(),
            isMarked: false
          }
        ];
      }

      // Calculate completed questions
      const completedQuestions = newUserAnswers.length;

      return {
        ...prev,
        userAnswers: newUserAnswers,
        completedQuestions
      };
    });
  };

  const saveMultipleChoiceAnswer = (questionId: number, selectedOption: string) => {
    setProgress(prev => {
      const existingAnswerIndex = prev.userAnswers.findIndex(
        userAnswer => userAnswer.questionId === questionId
      );

      let newUserAnswers;
      if (existingAnswerIndex >= 0) {
        // Update existing answer
        newUserAnswers = [...prev.userAnswers];
        newUserAnswers[existingAnswerIndex] = {
          ...newUserAnswers[existingAnswerIndex],
          multipleChoiceAnswer: selectedOption,
          timestamp: new Date()
        };
      } else {
        // Add new answer
        newUserAnswers = [
          ...prev.userAnswers,
          {
            questionId,
            answer: '', // Empty for multiple choice
            isCorrect: false,
            correctAnswer: '',
            timestamp: new Date(),
            isMarked: false,
            multipleChoiceAnswer: selectedOption
          }
        ];
      }

      // Calculate completed questions
      const completedQuestions = newUserAnswers.length;

      return {
        ...prev,
        userAnswers: newUserAnswers,
        completedQuestions
      };
    });
  };

  const toggleMultipleChoiceMode = () => {
    setProgress(prev => ({
      ...prev,
      isMultipleChoiceMode: !prev.isMultipleChoiceMode
    }));
  };

  const resetProgress = () => {
    // Ask for confirmation before resetting
    if (window.confirm('¿Estás seguro de que quieres reiniciar todo el progreso? Esta acción no se puede deshacer.')) {
      // Clear localStorage completely
      localStorage.removeItem('quizProgress');

      // Reset progress state
      setProgress({
        currentQuestion: 1,
        totalQuestions,
        completedQuestions: 0,
        userAnswers: [],
        isMultipleChoiceMode: false,
        interactionMode: 'study',
        theme: 'midnight',
        achievements: [],
        examTimeLeft: 600
      });
    }
  };

  const setTheme = (theme: AppTheme) => {
    setProgress(prev => ({ ...prev, theme }));
  };

  const setInteractionMode = (mode: 'study' | 'exam') => {
    setProgress(prev => ({
      ...prev,
      interactionMode: mode,
      examTimeLeft: mode === 'exam' ? 600 : undefined
    }));
  };

  useEffect(() => {
    let timer: any;
    if (progress.interactionMode === 'exam' && progress.examTimeLeft !== undefined && progress.examTimeLeft > 0) {
      timer = setInterval(() => {
        setProgress(prev => ({
          ...prev,
          examTimeLeft: prev.examTimeLeft !== undefined ? prev.examTimeLeft - 1 : 0
        }));
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [progress.interactionMode, progress.examTimeLeft]);

  const getCurrentAnswer = (questionId: number): string => {
    const userAnswer = progress.userAnswers.find(
      userAnswer => userAnswer.questionId === questionId
    );
    return userAnswer?.answer || '';
  };

  const getCurrentMultipleChoiceAnswer = (questionId: number): string | undefined => {
    const userAnswer = progress.userAnswers.find(
      userAnswer => userAnswer.questionId === questionId
    );
    return userAnswer?.multipleChoiceAnswer;
  };

  return {
    progress,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    saveAnswer,
    saveMultipleChoiceAnswer,
    toggleMultipleChoiceMode,
    setInteractionMode,
    setTheme,
    resetProgress,
    getCurrentAnswer,
    getCurrentMultipleChoiceAnswer
  };
};
