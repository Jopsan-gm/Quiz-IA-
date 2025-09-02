// Types are used in the interface definitions

// Hook for evaluating development answers intelligently
export const useAnswerEvaluation = () => {
  
  // Keywords and concepts for each question
  const questionKeywords: Record<number, string[]> = {
    1: ['rutas comerciales', 'riquezas', 'expansión territorial', 'evangelizar', 'comercio', 'territorio', 'religión'],
    2: ['brújula', 'astrolabio', 'cuadrante', 'carabela', 'mapas portulanos', 'navegación', 'instrumentos'],
    3: ['monarquías', 'oro', 'especias', 'prestigio', 'poder', 'políticos', 'económicos', 'sociales'],
    4: ['violentas', 'guerras', 'sometimiento', 'evangelización', 'explotación', 'conquista', 'indígenas'],
    5: ['soldados', 'ambiciosos', 'riquezas', 'fama', 'tierras', 'conquistadores', 'militar'],
    6: ['conquista', 'colonización', 'sometimiento militar', 'organización', 'poblamiento'],
    7: ['caribe', 'centroamérica', 'aztecas', 'incas', 'estrategia', 'epidemias', 'alianzas'],
    8: ['tecnología', 'alianzas indígenas', 'caballos', 'perros', 'tácticas militares', 'evangelización'],
    9: ['epidemias', 'viruela', 'millones', 'resistencia indígena', 'catástrofe demográfica'],
    10: ['destrucción', 'culturas', 'población', 'sometimiento', 'cambios', 'vida cotidiana'],
    11: ['catolicismo', 'creencias indígenas', 'sincretismo', 'evangelización', 'religión'],
    12: ['eurocéntrica', 'religiosa', 'espiritualidad', 'naturaleza', 'visión del mundo'],
    13: ['despreciaban', 'religiones indígenas', 'naturaleza', 'recurso', 'actitud'],
    14: ['consejo de indias', 'casa de contratación', 'virreinatos', 'capitanías', 'audiencia', 'cabildo'],
    15: ['peninsulares', 'criollos', 'mestizos', 'indígenas', 'esclavos', 'jerarquía'],
    16: ['castas', 'desigualdades', 'organización social', 'sociedad'],
    17: ['iglesia', 'educación', 'cultura', 'moral', 'política', 'economía', 'poder'],
    18: ['agricultura', 'minería', 'estratificada', 'monarquía', 'iglesia', 'características'],
    19: ['dependientes', 'españa', 'comercio controlado', 'diversidad cultural', 'mezcla étnica'],
    20: ['imperio español', 'expansión cultural', 'intercambio comercial', 'colonización']
  };

  // Evaluate development answer
  const evaluateDevelopmentAnswer = (questionId: number, userAnswer: string): {
    score: number;
    feedback: string;
    isCorrect: boolean;
    matchedKeywords: string[];
  } => {
    const keywords = questionKeywords[questionId] || [];
    const userAnswerLower = userAnswer.toLowerCase().trim();
    
    if (!userAnswerLower) {
      return {
        score: 0,
        feedback: 'No has proporcionado una respuesta.',
        isCorrect: false,
        matchedKeywords: []
      };
    }

    // Count matched keywords
    let matchedCount = 0;
    const matchedKeywords: string[] = [];
    
    keywords.forEach(keyword => {
      if (userAnswerLower.includes(keyword.toLowerCase())) {
        matchedCount++;
        matchedKeywords.push(keyword);
      }
    });

    // Calculate score based on keyword matches
    const totalKeywords = keywords.length;
    const score = Math.round((matchedCount / totalKeywords) * 100);
    
    // Determine if answer is correct (70% or more keywords matched)
    const isCorrect = score >= 70;
    
    // Generate feedback
    let feedback = '';
    if (isCorrect) {
      feedback = `¡Excelente! Tu respuesta es correcta. Has incluido ${matchedCount} de ${totalKeywords} conceptos clave.`;
    } else if (score >= 50) {
      feedback = `Buena respuesta, pero puedes mejorarla. Has incluido ${matchedCount} de ${totalKeywords} conceptos clave.`;
    } else if (score >= 30) {
      feedback = `Tu respuesta necesita más desarrollo. Solo has incluido ${matchedCount} de ${totalKeywords} conceptos clave.`;
    } else {
      feedback = `Tu respuesta no aborda los conceptos principales. Solo has incluido ${matchedCount} de ${totalKeywords} conceptos clave.`;
    }

    return {
      score,
      feedback,
      isCorrect,
      matchedKeywords
    };
  };

  // Get suggested keywords for a question
  const getSuggestedKeywords = (questionId: number): string[] => {
    return questionKeywords[questionId] || [];
  };

  return {
    evaluateDevelopmentAnswer,
    getSuggestedKeywords
  };
};
