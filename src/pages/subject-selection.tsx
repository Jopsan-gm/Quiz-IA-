import React from 'react';
import { useNavigate } from 'react-router-dom';

// Subject selection page component
export const SubjectSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSubjectSelect = (subject: 'social-studies' | 'science') => {
    navigate(`/quiz/${subject}`);
  };

  return (
    <div className="subject-selection-page">
      <div className="subject-selection-header">
        <div className="header-icon">📚</div>
        <h1>Selecciona tu Materia</h1>
        <p>Elige la materia para comenzar tu quiz</p>
      </div>

      <div className="subject-buttons-container">
        <button 
          className="subject-button social-studies"
          onClick={() => handleSubjectSelect('social-studies')}
        >
          <div className="button-content">
            <div className="subject-icon">🏛️</div>
            <div className="subject-info">
              <h2>Estudios Sociales</h2>
              <p className="subject-subtitle">Quiz de Desarrollo - Noveno Año</p>
              <p className="subject-description">Historia, geografía y cívica</p>
            </div>
            <div className="button-arrow">→</div>
          </div>
        </button>

        <button 
          className="subject-button science"
          onClick={() => handleSubjectSelect('science')}
        >
          <div className="button-content">
            <div className="subject-icon">🔬</div>
            <div className="subject-info">
              <h2>Ciencias</h2>
              <p className="subject-subtitle">Quiz de Desarrollo - Noveno Año</p>
              <p className="subject-description">Biología, química y física</p>
            </div>
            <div className="button-arrow">→</div>
          </div>
        </button>
      </div>
    </div>
  );
};
