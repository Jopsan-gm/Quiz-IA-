import React, { useState } from 'react';
import { questions } from '../data/questions';
import { QuestionCard } from '../components/quiz/question-card';
import { MultipleChoiceCard } from '../components/quiz/multiple-choice-card';
import { Navigation } from '../components/quiz/navigation';
import { QuizSummary } from '../components/quiz/quiz-summary';
import { useQuizProgress } from '../hooks/use-quiz-progress';

// Main quiz page component
export const QuizPage: React.FC = () => {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  
  const {
    progress,
    goToNextQuestion,
    goToPreviousQuestion,
    goToQuestion,
    saveAnswer,
    saveMultipleChoiceAnswer,
    toggleMultipleChoiceMode,
    resetProgress,
    getCurrentAnswer,
    getCurrentMultipleChoiceAnswer
  } = useQuizProgress(questions.length);

  const currentQuestion = questions[progress.currentQuestion - 1];
  const currentAnswer = getCurrentAnswer(progress.currentQuestion);
  const currentMultipleChoiceAnswer = getCurrentMultipleChoiceAnswer(progress.currentQuestion);

  // Check if quiz is completed
  const isQuizCompleted = () => {
    return progress.userAnswers.length === questions.length;
  };

  // Handle quiz completion
  const handleQuizCompletion = () => {
    if (isQuizCompleted()) {
      setShowSummary(true);
    }
  };

  // Handle next question with completion check
  const handleNextQuestion = () => {
    goToNextQuestion();
    handleQuizCompletion();
  };



  // Handle review question from summary
  const handleReviewQuestion = (questionId: number) => {
    setShowSummary(false);
    goToQuestion(questionId);
  };

  // Handle reset quiz
  const handleResetQuiz = () => {
    setShowSummary(false);
    resetProgress();
  };

  const handleToggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Show summary if quiz is completed
  if (showSummary || isQuizCompleted()) {
    return (
      <QuizSummary
        questions={questions}
        userAnswers={progress.userAnswers}
        onResetQuiz={handleResetQuiz}
        onReviewQuestion={handleReviewQuestion}
      />
    );
  }

  return (
    <div className="quiz-page">
      <div className="quiz-header">
        <h1>📚 Estudios Sociales - Quiz de Desarrollo</h1>
        <h2>
          {progress.isMultipleChoiceMode ? 'Quiz Opción Múltiple' : 'Quiz de Desarrollo'}
        </h2>
        <p>Pregunta {progress.currentQuestion} de {questions.length}</p>
        <div className="mode-indicator">
          <span className={`mode-badge ${progress.isMultipleChoiceMode ? 'multiple-choice' : 'development'}`}>
            {progress.isMultipleChoiceMode ? 'A B C D' : '📝 Desarrollo'}
          </span>
        </div>
      </div>

      <div className="quiz-container">
        <div className="main-content">
          {progress.isMultipleChoiceMode ? (
            <MultipleChoiceCard
              question={currentQuestion}
              selectedAnswer={currentMultipleChoiceAnswer}
              onSaveAnswer={saveMultipleChoiceAnswer}
              onNext={handleNextQuestion}
              onPrevious={goToPreviousQuestion}
              onToggleMode={toggleMultipleChoiceMode}
              isFirst={progress.currentQuestion === 1}
              isLast={questions.length === progress.currentQuestion}
              showAnswer={showAnswer}
              onToggleAnswer={handleToggleAnswer}
            />
          ) : (
            <QuestionCard
              question={currentQuestion}
              currentAnswer={currentAnswer}
              onSaveAnswer={saveAnswer}
              onToggleMultipleChoiceMode={toggleMultipleChoiceMode}
              onNext={handleNextQuestion}
              onPrevious={goToPreviousQuestion}
              isFirst={progress.currentQuestion === 1}
              isLast={questions.length === progress.currentQuestion}
              showAnswer={showAnswer}
              onToggleAnswer={handleToggleAnswer}
            />
          )}
        </div>

        <div className="sidebar">
          <Navigation
            currentQuestion={progress.currentQuestion}
            totalQuestions={questions.length}
            completedQuestions={progress.completedQuestions}
            userAnswers={progress.userAnswers}
            onGoToQuestion={goToQuestion}
            onReset={resetProgress}
          />
        </div>
      </div>
    </div>
  );
};
