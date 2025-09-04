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
        <h1>📚 Selecciona tu Materia</h1>
        <p>Elige la materia para comenzar tu quiz</p>
      </div>

      <div className="subject-cards-container">
        <div 
          className="subject-card social-studies"
          onClick={() => handleSubjectSelect('social-studies')}
        >
          <div className="card-icon">🏛️</div>
          <h2>Estudios Sociales</h2>
          <p>Quiz de Desarrollo - Noveno Año</p>
          <div className="card-description">
            Historia, geografía y cívica
          </div>
        </div>

        <div 
          className="subject-card science"
          onClick={() => handleSubjectSelect('science')}
        >
          <div className="card-icon">🔬</div>
          <h2>Ciencias</h2>
          <p>Quiz de Desarrollo - Noveno Año</p>
          <div className="card-description">
            Biología, química y física
          </div>
        </div>
      </div>
    </div>
  );
};
