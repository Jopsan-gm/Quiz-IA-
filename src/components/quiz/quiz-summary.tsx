import React from 'react';
import { Question, UserAnswer } from '../../types/quiz-types';
import { useAnswerEvaluation } from '../../hooks/use-answer-evaluation';

interface QuizSummaryProps {
  questions: Question[];
  userAnswers: UserAnswer[];
  onResetQuiz: () => void;
  onReviewQuestion: (questionId: number) => void;
}

// Component for displaying quiz results summary
export const QuizSummary: React.FC<QuizSummaryProps> = ({
  questions,
  userAnswers,
  onResetQuiz,
  onReviewQuestion
}) => {
  const { evaluateDevelopmentAnswer } = useAnswerEvaluation();

  // Calculate quiz statistics
  const calculateStats = () => {
    let totalCorrect = 0;
    let totalIncorrect = 0;
    let developmentCorrect = 0;
    let developmentIncorrect = 0;
    let multipleChoiceCorrect = 0;
    let multipleChoiceIncorrect = 0;

    questions.forEach(question => {
      const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
      
      if (userAnswer) {
        if (userAnswer.multipleChoiceAnswer) {
          // Multiple choice question
          const selectedOption = question.multipleChoice?.find(
            opt => opt.id === userAnswer.multipleChoiceAnswer
          );
          if (selectedOption?.isCorrect) {
            totalCorrect++;
            multipleChoiceCorrect++;
          } else {
            totalIncorrect++;
            multipleChoiceIncorrect++;
          }
        } else if (userAnswer.answer.trim()) {
          // Development question
          const evaluation = evaluateDevelopmentAnswer(question.id, userAnswer.answer);
          if (evaluation.isCorrect) {
            totalCorrect++;
            developmentCorrect++;
          } else {
            totalIncorrect++;
            developmentIncorrect++;
          }
        }
      }
    });

    return {
      totalCorrect,
      totalIncorrect,
      developmentCorrect,
      developmentIncorrect,
      multipleChoiceCorrect,
      multipleChoiceIncorrect,
      totalAnswered: totalCorrect + totalIncorrect,
      percentage: Math.round((totalCorrect / (totalCorrect + totalIncorrect)) * 100)
    };
  };

  const stats = calculateStats();

  // Get question result details
  const getQuestionResult = (question: Question) => {
    const userAnswer = userAnswers.find(answer => answer.questionId === question.id);
    
    if (!userAnswer) {
      return { type: 'unanswered', isCorrect: false, score: 0, feedback: '' };
    }

    if (userAnswer.multipleChoiceAnswer) {
      // Multiple choice question
      const selectedOption = question.multipleChoice?.find(
        opt => opt.id === userAnswer.multipleChoiceAnswer
      );
      const isCorrect = selectedOption?.isCorrect || false;
      
      return {
        type: 'multiple-choice',
        isCorrect,
        score: isCorrect ? 100 : 0,
        feedback: isCorrect ? 'Respuesta correcta' : 'Respuesta incorrecta',
        selectedAnswer: selectedOption?.text || '',
        correctAnswer: question.multipleChoice?.find(opt => opt.isCorrect)?.text || ''
      };
    } else if (userAnswer.answer.trim()) {
      // Development question
      const evaluation = evaluateDevelopmentAnswer(question.id, userAnswer.answer);
      
      return {
        type: 'development',
        isCorrect: evaluation.isCorrect,
        score: evaluation.score,
        feedback: evaluation.feedback,
        userAnswer: userAnswer.answer,
        correctAnswer: question.answer
      };
    }

    return { type: 'unanswered', isCorrect: false, score: 0, feedback: '' };
  };

  return (
    <div className="quiz-summary">
      <div className="summary-header">
        <h1>🎉 ¡Quiz Completado!</h1>
        <p className="summary-subtitle">Resumen de tus resultados</p>
      </div>

      {/* Overall Statistics */}
      <div className="overall-stats">
        <div className="stat-card total-score">
          <h3>Puntuación Total</h3>
          <div className="score-display">
            <span className="score-number">{stats.percentage}%</span>
            <span className="score-label">Correctas</span>
          </div>
          <p>{stats.totalCorrect} de {stats.totalAnswered} preguntas</p>
        </div>

        <div className="stat-card development-stats">
          <h3>Preguntas de Desarrollo</h3>
          <div className="stat-numbers">
            <span className="correct-count">✓ {stats.developmentCorrect}</span>
            <span className="incorrect-count">✗ {stats.developmentIncorrect}</span>
          </div>
        </div>

        <div className="stat-card multiple-choice-stats">
          <h3>Preguntas Opción Múltiple</h3>
          <div className="stat-numbers">
            <span className="correct-count">✓ {stats.multipleChoiceCorrect}</span>
            <span className="incorrect-count">✗ {stats.multipleChoiceIncorrect}</span>
          </div>
        </div>
      </div>

      {/* Performance Message */}
      <div className="performance-message">
        {stats.percentage >= 90 && (
          <div className="message excellent">
            <h3>🌟 ¡Excelente trabajo!</h3>
            <p>Has demostrado un dominio excepcional del tema. ¡Felicidades!</p>
          </div>
        )}
        {stats.percentage >= 70 && stats.percentage < 90 && (
          <div className="message good">
            <h3>👍 ¡Muy bien hecho!</h3>
            <p>Tienes una buena comprensión del tema. Con un poco más de estudio serás excelente.</p>
          </div>
        )}
        {stats.percentage >= 50 && stats.percentage < 70 && (
          <div className="message needs-improvement">
            <h3>📚 Necesitas mejorar</h3>
            <p>Tienes conocimientos básicos pero necesitas estudiar más para consolidar el aprendizaje.</p>
          </div>
        )}
        {stats.percentage < 50 && (
          <div className="message poor">
            <h3>⚠️ Requiere más estudio</h3>
            <p>Necesitas revisar el material y practicar más. No te desanimes, ¡el aprendizaje es un proceso!</p>
          </div>
        )}
      </div>

      {/* Question-by-Question Results */}
      <div className="question-results">
        <h3>Resultados por Pregunta</h3>
        <div className="results-grid">
          {questions.map((question) => {
            const result = getQuestionResult(question);
            
            return (
              <div 
                key={question.id} 
                className={`result-item ${result.isCorrect ? 'correct' : 'incorrect'}`}
                onClick={() => onReviewQuestion(question.id)}
              >
                <div className="result-header">
                  <span className="question-number">Pregunta {question.id}</span>
                  <span className={`result-status ${result.isCorrect ? 'correct' : 'incorrect'}`}>
                    {result.isCorrect ? '✓ Correcta' : '✗ Incorrecta'}
                  </span>
                </div>
                
                <div className="question-preview">
                  {question.question.length > 80 
                    ? question.question.substring(0, 80) + '...' 
                    : question.question
                  }
                </div>

                {result.type === 'multiple-choice' && (
                  <div className="answer-details">
                    <div className="user-answer">
                      <strong>Tu respuesta:</strong> {result.selectedAnswer}
                    </div>
                    {!result.isCorrect && (
                      <div className="correct-answer">
                        <strong>Respuesta correcta:</strong> {result.correctAnswer}
                      </div>
                    )}
                  </div>
                )}

                {result.type === 'development' && (
                  <div className="answer-details">
                    <div className="score-info">
                      <strong>Puntuación:</strong> {result.score}%
                    </div>
                    <div className="feedback">
                      <strong>Feedback:</strong> {result.feedback}
                    </div>
                  </div>
                )}

                <div className="review-hint">
                  💡 Haz clic para revisar esta pregunta
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="summary-actions">
        <button onClick={onResetQuiz} className="reset-btn">
          🔄 Reiniciar Quiz
        </button>
        <button onClick={() => onReviewQuestion(1)} className="review-btn">
          📖 Revisar desde el Inicio
        </button>
      </div>
    </div>
  );
};

