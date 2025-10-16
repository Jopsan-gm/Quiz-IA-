// Types are used in the interface definitions

// Hook for evaluating development answers intelligently
export const useAnswerEvaluation = () => {
  
  // Keywords and concepts for each question
  const questionKeywords: Record<number, string[]> = {
    1: ['molécula', 'átomos', 'enlaces químicos', 'unidos', 'grupo', 'iguales', 'diferentes'],
    2: ['valencia', 'número de oxidación', 'electronos', 'ganar', 'perder', 'compartir', 'elemento'],
    3: ['molécula elemental', 'mismo elemento', 'átomos', 'idénticos', 'elemento puro'],
    4: ['molécula compuesta', 'diferentes elementos', 'átomos', 'compuesto', 'mezcla'],
    5: ['fórmula química', 'representación gráfica', 'símbolos', 'compuesto', 'estructura'],
    6: ['compuestos orgánicos', 'carbono', 'oxígeno', 'hidrógeno', 'orgánico', 'C', 'O', 'H'],
    7: ['compuestos inorgánicos', 'sin carbono', 'inorgánico', 'metales', 'sales'],
    8: ['número de oxidación', 'oxidación', 'carga', 'electrones', 'estado', 'tabla periódica'],
    9: ['fórmula química', 'capacidad', 'combinación', 'enlaces', 'símbolos químicos'],
    10: ['amoníaco', 'NH3', 'fertilizantes', 'nitrógeno', 'agricultura', 'nitrogenados'],
    11: ['ácido clorhídrico', 'HCl', 'piscinas', 'refinación', 'petróleo', 'ácido'],
    12: ['agua', 'H2O', 'disolvente universal', 'universal', 'disolver', 'hidrógeno', 'oxígeno'],
    13: ['óxido de cromo', 'Cr2O3', 'verde', 'pinturas', 'tintes', 'cromo', 'color'],
    14: ['dióxido de carbono', 'CO2', 'bebidas carbonatadas', 'carbonatadas', 'efervescencia'],
    15: ['cloruro de sodio', 'NaCl', 'sal', 'preservante', 'sazonar', 'conservante'],
    16: ['ácido clorhídrico', 'HCl', 'limpiador', 'metales', 'hierro', 'corrosión', 'ácido']
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
