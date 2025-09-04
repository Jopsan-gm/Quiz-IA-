import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SubjectSelectionPage } from './pages/subject-selection';
import { QuizPage } from './pages/quiz';
import './styles/global.css';

// Main entry point for the React application
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SubjectSelectionPage />} />
        <Route path="/quiz/:subject" element={<QuizPage />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

