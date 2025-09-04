import React from 'react';
import { Question } from '../../types/quiz-types';

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
}

// Component for displaying multiple choice questions
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
  onToggleAnswer
}) => {
  const handleOptionSelect = (optionId: string) => {
    onSaveAnswer(question.id, optionId);
  };

  const handleSaveAndNext = () => {
    if (selectedAnswer) {
      onNext();
    }
  };

  const getOptionClass = (optionId: string) => {
    let baseClass = 'option-btn';
    
    if (selectedAnswer === optionId) {
      baseClass += ' selected';
    }
    
    if (showAnswer) {
      const option = question.multipleChoice?.find(opt => opt.id === optionId);
      if (option?.isCorrect) {
        baseClass += ' correct';
      } else if (selectedAnswer === optionId && !option?.isCorrect) {
        baseClass += ' incorrect';
      }
    }
    
    return baseClass;
  };

  const getOptionIcon = (optionId: string) => {
    if (!showAnswer) return null;
    
    const option = question.multipleChoice?.find(opt => opt.id === optionId);
    if (option?.isCorrect) {
      return <span className="option-icon correct">✓</span>;
    } else if (selectedAnswer === optionId && !option?.isCorrect) {
      return <span className="option-icon incorrect">✗</span>;
    }
    return null;
  };

  const getOptionStatus = (optionId: string) => {
    if (!showAnswer) return null;
    
    const option = question.multipleChoice?.find(opt => opt.id === optionId);
    if (option?.isCorrect) {
      return <span className="option-status correct">CORRECTO</span>;
    } else if (selectedAnswer === optionId && !option?.isCorrect) {
      return <span className="option-status incorrect">INCORRECTO</span>;
    }
    return null;
  };

  return (
    <div className="multiple-choice-card">
      <div className="question-header">
        <div className="question-header-top">
          <h2>Pregunta {question.id}</h2>
          <button
            onClick={onToggleMode}
            className="mode-switch-btn development"
            title="Volver al modo desarrollo (respuesta de texto)"
          >
            📝 Desarrollo
          </button>
        </div>
        <div className="question-text">
          {question.question}
        </div>
      </div>

      <div className="options-section">
        <h3>Selecciona la respuesta correcta:</h3>
        <div className="options-list">
          {question.multipleChoice?.map((option) => (
            <button
              key={option.id}
              onClick={() => handleOptionSelect(option.id)}
              className={getOptionClass(option.id)}
              disabled={showAnswer}
            >
              <div className="option-content">
                <span className="option-letter">{option.id}</span>
                <span className="option-text">{option.text}</span>
              </div>
              {getOptionIcon(option.id)}
              {getOptionStatus(option.id)}
            </button>
          ))}
        </div>
      </div>

      {/* Answer Feedback */}
      {showAnswer && selectedAnswer && (
        <div className="answer-feedback">
          {(() => {
            const selectedOption = question.multipleChoice?.find(opt => opt.id === selectedAnswer);
            if (selectedOption?.isCorrect) {
              return (
                <div className="feedback-correct">
                  <h3>🎉 ¡Correcto!</h3>
                  <p>Has seleccionado la respuesta correcta.</p>
                </div>
              );
            } else {
              return (
                <div className="feedback-incorrect">
                  <h3>❌ Incorrecto</h3>
                  <p>Tu respuesta no es correcta. Revisa la explicación abajo.</p>
                </div>
              );
            }
          })()}
        </div>
      )}

      <div className="answer-toggle">
        <button 
          onClick={onToggleAnswer}
          className="toggle-answer-btn"
        >
          {showAnswer ? 'Ocultar respuesta correcta' : 'Ver respuesta correcta'}
        </button>
      </div>

      {showAnswer && (
        <div className="correct-answer">
          <h3>Respuesta correcta:</h3>
          <p>{question.answer}</p>
        </div>
      )}

      <div className="navigation-buttons">
        <button
          onClick={onPrevious}
          disabled={isFirst}
          className="nav-btn prev-btn"
        >
          ← Anterior
        </button>

        <div className="action-buttons">
          {!isLast && (
            <button
              onClick={handleSaveAndNext}
              disabled={!selectedAnswer}
              className="next-btn"
            >
              Siguiente →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
