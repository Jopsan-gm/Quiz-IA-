import React from 'react';
import ReactDOM from 'react-dom/client';
import { QuizPage } from './pages/quiz';
import './styles/global.css';

// Main entry point for the React application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizPage />
  </React.StrictMode>
);

