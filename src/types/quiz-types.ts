// Types for quiz questions and answers
export interface Question {
  id: number;
  question: string;
  answer: string;
  multipleChoice?: MultipleChoiceOption[]; // Optional multiple choice options
}

export interface MultipleChoiceOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
  isCorrect: boolean;
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  timestamp: Date;
  isMarked: boolean; // For switching to multiple choice mode
  multipleChoiceAnswer?: string; // Selected option (A, B, C, D)
}

export interface QuizProgress {
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number;
  userAnswers: UserAnswer[];
  isMultipleChoiceMode: boolean; // Track current quiz mode
}
