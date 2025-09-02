import React, { useState, useRef, useEffect } from 'react';
import { Question } from '../../types/quiz-types';
import { useAnswerEvaluation } from '../../hooks/use-answer-evaluation';

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
}

// Component for displaying a single question with answer input
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
  onToggleAnswer
}) => {
  const [answer, setAnswer] = useState(currentAnswer);
  const [isListening, setIsListening] = useState(false);
  const [recognition, setRecognition] = useState<any>(null);
  const [evaluation, setEvaluation] = useState<any>(null);
  const [showEvaluation, setShowEvaluation] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { evaluateDevelopmentAnswer, getSuggestedKeywords } = useAnswerEvaluation();

  // Clear answer field when question changes
  useEffect(() => {
    setAnswer('');
    setEvaluation(null);
    setShowEvaluation(false);
  }, [question.id]);

  // Initialize speech recognition
  React.useEffect(() => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.continuous = true;
      recognition.interimResults = true;
      recognition.lang = 'es-ES'; // Spanish language

      recognition.onresult = (event: any) => {
        let finalTranscript = '';
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            finalTranscript += event.results[i].transcript;
          }
        }
        
        if (finalTranscript) {
          setAnswer(prev => prev + ' ' + finalTranscript);
        }
      };

      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      setRecognition(recognition);
    }
  }, []);

  const handleSaveAndNext = () => {
    onSaveAnswer(question.id, answer);
    onNext();
  };

  const handleSave = () => {
    onSaveAnswer(question.id, answer);
  };

  const handleToggleMultipleChoiceMode = () => {
    onToggleMultipleChoiceMode();
  };

  const handleEvaluateAnswer = () => {
    if (answer.trim()) {
      const result = evaluateDevelopmentAnswer(question.id, answer);
      setEvaluation(result);
      setShowEvaluation(true);
    }
  };

  const startListening = () => {
    if (recognition) {
      recognition.start();
      setIsListening(true);
    }
  };

  const stopListening = () => {
    if (recognition) {
      recognition.stop();
      setIsListening(false);
    }
  };

  const handleVoiceToggle = () => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  };

  const suggestedKeywords = getSuggestedKeywords(question.id);

  return (
    <div className="question-card">
      <div className="question-header">
        <div className="question-header-top">
          <h2>Pregunta {question.id}</h2>
          <button
            onClick={handleToggleMultipleChoiceMode}
            className="mode-switch-btn"
            title="Cambiar a modo opción múltiple (A, B, C, D)"
          >
            A B C D
          </button>
        </div>
        <div className="question-text">
          {question.question}
        </div>
      </div>

      <div className="answer-section">
        <div className="answer-header">
          <label htmlFor="answer" className="answer-label">
            Tu respuesta:
          </label>
          <div className="voice-controls">
            <button
              onClick={handleVoiceToggle}
              className={`voice-btn ${isListening ? 'listening' : ''}`}
              title={isListening ? 'Detener dictado' : 'Iniciar dictado por voz'}
              disabled={!recognition}
            >
              {isListening ? '🔴' : '🎤'}
            </button>
            {isListening && (
              <span className="listening-indicator">Escuchando...</span>
            )}
          </div>
        </div>
        <textarea
          ref={textareaRef}
          id="answer"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Escribe tu respuesta aquí o usa dictado por voz..."
          rows={6}
          className="answer-input"
        />
        
        {/* Suggested Keywords */}
        <div className="suggested-keywords">
          <h4>Conceptos clave a incluir:</h4>
          <div className="keywords-list">
            {suggestedKeywords.map((keyword, index) => (
              <span key={index} className="keyword-tag">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Evaluation Section */}
      <div className="evaluation-section">
        <button
          onClick={handleEvaluateAnswer}
          className="evaluate-btn"
          disabled={!answer.trim()}
        >
          📊 Evaluar Respuesta
        </button>
        
        {showEvaluation && evaluation && (
          <div className={`evaluation-result ${evaluation.isCorrect ? 'correct' : 'incorrect'}`}>
            <div className="evaluation-header">
              <h3>Evaluación de tu respuesta:</h3>
              <div className="score-display">
                Puntuación: <span className={`score ${evaluation.isCorrect ? 'good' : 'needs-improvement'}`}>
                  {evaluation.score}%
                </span>
              </div>
            </div>
            <p className="feedback-text">{evaluation.feedback}</p>
            {evaluation.matchedKeywords.length > 0 && (
              <div className="matched-keywords">
                <h4>Conceptos que incluiste:</h4>
                <div className="keywords-list">
                  {evaluation.matchedKeywords.map((keyword: string, index: number) => (
                    <span key={index} className="keyword-tag matched">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>

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
          <button
            onClick={handleSave}
            className="save-btn"
          >
            Guardar
          </button>
          
          {!isLast && (
            <button
              onClick={handleSaveAndNext}
              className="next-btn"
            >
              Guardar y Siguiente →
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
