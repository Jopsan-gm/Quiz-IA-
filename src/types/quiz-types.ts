// Types for quiz questions and answers
export interface MultipleChoiceOption {
  id: string; // 'A', 'B', 'C', 'D'
  text: string;
  isCorrect: boolean;
}

export interface Question {
  id: number;
  question: string;
  answer: string;
  multipleChoice: MultipleChoiceOption[];
  image?: string;
  leverDefinitions?: {
    primerGenero: string;
    segundoGenero: string;
    tercerGenero: string;
  };
}

export interface UserAnswer {
  questionId: number;
  answer: string;
  isCorrect: boolean;
  correctAnswer: string;
  isMarked?: boolean;
  timestamp?: Date;
  multipleChoiceAnswer?: string;
}

export interface QuizProgress {
  currentQuestion: number;
  totalQuestions: number;
  completedQuestions: number;
  userAnswers: UserAnswer[];
  isMultipleChoiceMode: boolean; // Track current quiz mode
}
