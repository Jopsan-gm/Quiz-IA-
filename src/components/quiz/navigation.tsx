import React, { useState } from 'react';
import { UserAnswer } from '../../types/quiz-types';

interface NavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number;
  userAnswers: UserAnswer[];
  onGoToQuestion: (questionNumber: number) => void;
  onReset: () => void;
}

// Component for navigating between questions and showing progress
export const Navigation: React.FC<NavigationProps> = ({
  currentQuestion,
  totalQuestions,
  completedQuestions,
  userAnswers,
  onGoToQuestion,
  onReset
}) => {
  const [showResetMessage, setShowResetMessage] = useState(false);
  const progressPercentage = (completedQuestions / totalQuestions) * 100;

  const isQuestionMarked = (questionNumber: number): boolean => {
    const userAnswer = userAnswers.find(answer => answer.questionId === questionNumber);
    return userAnswer?.isMarked || false;
  };

  const handleReset = () => {
    onReset();
    setShowResetMessage(true);
    setTimeout(() => setShowResetMessage(false), 3000); // Hide message after 3 seconds
  };

  return (
    <div className="navigation">
      <div className="progress-info">
        <div className="progress-text">
          Pregunta {currentQuestion} de {totalQuestions}
        </div>
        <div className="progress-bar">
          <div 
            className="progress-fill" 
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <div className="completed-info">
          Completadas: {completedQuestions}/{totalQuestions}
        </div>
      </div>

      <div className="question-grid">
        {Array.from({ length: totalQuestions }, (_, index) => {
          const questionNumber = index + 1;
          const isCurrent = questionNumber === currentQuestion;
          const isCompleted = completedQuestions >= questionNumber;
          const isMarked = isQuestionMarked(questionNumber);
          
          return (
            <button
              key={questionNumber}
              onClick={() => onGoToQuestion(questionNumber)}
              className={`question-number ${isCurrent ? 'current' : ''} ${isCompleted ? 'completed' : ''} ${isMarked ? 'marked' : ''}`}
              title={`Pregunta ${questionNumber}${isMarked ? ' - Marcada' : ''}`}
            >
              {isMarked ? '✓' : questionNumber}
            </button>
          );
        })}
      </div>

      <div className="reset-section">
        <button onClick={handleReset} className="reset-btn">
          Reiniciar Progreso
        </button>
        {showResetMessage && (
          <div className="reset-message">
            ✅ Progreso reiniciado correctamente
          </div>
        )}
      </div>
    </div>
  );
};
