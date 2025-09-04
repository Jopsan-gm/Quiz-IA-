import { Question } from '../types/quiz-types';

// Science questions for Noveno Año - Máquinas Simples
export const scienceQuestions: Question[] = [
  {
    id: 1,
    question: "¿Qué son las máquinas simples?",
    answer: "Son herramientas que transforman fuerzas y facilitan la realización de un trabajo.",
    multipleChoice: [
      { id: 'A', text: 'Solo herramientas para cortar materiales', isCorrect: false },
      { id: 'B', text: 'Herramientas que transforman fuerzas y facilitan la realización de un trabajo', isCorrect: true },
      { id: 'C', text: 'Solo máquinas eléctricas complejas', isCorrect: false },
      { id: 'D', text: 'Solo instrumentos de medición', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "¿Qué significa fuerza?",
    answer: "Acción que produce movimiento o lo modifica.",
    multipleChoice: [
      { id: 'A', text: 'Solo el peso de un objeto', isCorrect: false },
      { id: 'B', text: 'Acción que produce movimiento o lo modifica', isCorrect: true },
      { id: 'C', text: 'Solo la velocidad de un objeto', isCorrect: false },
      { id: 'D', text: 'Solo la masa de un objeto', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "¿Qué significa trabajo?",
    answer: "Cuando una fuerza mueve un objeto en una dirección determinada.",
    multipleChoice: [
      { id: 'A', text: 'Solo estudiar en la escuela', isCorrect: false },
      { id: 'B', text: 'Solo levantar objetos pesados', isCorrect: false },
      { id: 'C', text: 'Cuando una fuerza mueve un objeto en una dirección determinada', isCorrect: true },
      { id: 'D', text: 'Solo correr o caminar', isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "¿Qué es una máquina simple?",
    answer: "Un instrumento que ayuda a multiplicar o cambiar la dirección de la fuerza.",
    multipleChoice: [
      { id: 'A', text: 'Solo un motor eléctrico', isCorrect: false },
      { id: 'B', text: 'Solo una computadora', isCorrect: false },
      { id: 'C', text: 'Un instrumento que ayuda a multiplicar o cambiar la dirección de la fuerza', isCorrect: true },
      { id: 'D', text: 'Solo una herramienta manual', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "¿Cuáles son los elementos de la fuerza?",
    answer: "Magnitud (cuánto mide la fuerza), dirección, sentido y punto de aplicación.",
    multipleChoice: [
      { id: 'A', text: 'Solo magnitud y dirección', isCorrect: false },
      { id: 'B', text: 'Solo dirección y sentido', isCorrect: false },
      { id: 'C', text: 'Magnitud, dirección, sentido y punto de aplicación', isCorrect: true },
      { id: 'D', text: 'Solo magnitud y punto de aplicación', isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "¿Cuáles son los tipos de fuerza?",
    answer: "De contacto: requieren que los cuerpos se toquen (ejemplo: empujar una caja). A distancia o de acción a distancia: actúan sin contacto (ejemplo: gravedad, magnetismo).",
    multipleChoice: [
      { id: 'A', text: 'Solo fuerzas de contacto', isCorrect: false },
      { id: 'B', text: 'Solo fuerzas a distancia', isCorrect: false },
      { id: 'C', text: 'De contacto y a distancia', isCorrect: true },
      { id: 'D', text: 'Solo fuerzas eléctricas', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "¿Cuáles son las seis máquinas simples y sus elementos?",
    answer: "Palanca → barra, fulcro, potencia, resistencia. Polea → rueda, eje y cuerda. Plano inclinado → superficie inclinada. Cuña → plano inclinado doble. Tornillo → plano inclinado enrollado en un cilindro. Torno → cilindro con eje y manivela.",
    multipleChoice: [
      { id: 'A', text: 'Solo palanca y polea', isCorrect: false },
      { id: 'B', text: 'Solo plano inclinado y cuña', isCorrect: false },
      { id: 'C', text: 'Las seis: palanca, polea, plano inclinado, cuña, tornillo y torno', isCorrect: true },
      { id: 'D', text: 'Solo tornillo y torno', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Define la palanca",
    answer: "Barra rígida que mueve o levanta cargas apoyada en un fulcro.",
    multipleChoice: [
      { id: 'A', text: 'Solo una barra para golpear', isCorrect: false },
      { id: 'B', text: 'Barra rígida que mueve o levanta cargas apoyada en un fulcro', isCorrect: true },
      { id: 'C', text: 'Solo una herramienta para cortar', isCorrect: false },
      { id: 'D', text: 'Solo un instrumento de medición', isCorrect: false }
    ],
    image: "/src/assets/images/machines/palanca.jpg"
  },
  {
    id: 9,
    question: "Define la polea",
    answer: "Rueda con cuerda que cambia dirección o magnitud de una fuerza.",
    multipleChoice: [
      { id: 'A', text: 'Solo una rueda para rodar', isCorrect: false },
      { id: 'B', text: 'Solo una cuerda para atar', isCorrect: false },
      { id: 'C', text: 'Rueda con cuerda que cambia dirección o magnitud de una fuerza', isCorrect: true },
      { id: 'D', text: 'Solo un eje para girar', isCorrect: false }
    ],
    image: "/src/assets/images/machines/polea.jpg"
  },
  {
    id: 10,
    question: "Define el plano inclinado",
    answer: "Rampa que facilita subir cargas.",
    multipleChoice: [
      { id: 'A', text: 'Solo una superficie plana', isCorrect: false },
      { id: 'B', text: 'Solo una rampa para caminar', isCorrect: false },
      { id: 'C', text: 'Rampa que facilita subir cargas', isCorrect: true },
      { id: 'D', text: 'Solo una escalera', isCorrect: false }
    ],
    image: "/src/assets/images/machines/plano inclinado.png"
  },
  {
    id: 11,
    question: "Define la cuña",
    answer: "Plano inclinado doble usado para cortar o separar.",
    multipleChoice: [
      { id: 'A', text: 'Solo un cuchillo', isCorrect: false },
      { id: 'B', text: 'Solo un hacha', isCorrect: false },
      { id: 'C', text: 'Plano inclinado doble usado para cortar o separar', isCorrect: true },
      { id: 'D', text: 'Solo una tijera', isCorrect: false }
    ],
    image: "/src/assets/images/machines/cua.jpg"
  },
  {
    id: 12,
    question: "Define el tornillo",
    answer: "Plano inclinado enrollado que permite fijar o levantar.",
    multipleChoice: [
      { id: 'A', text: 'Solo un clavo', isCorrect: false },
      { id: 'B', text: 'Solo un perno', isCorrect: false },
      { id: 'C', text: 'Plano inclinado enrollado que permite fijar o levantar', isCorrect: true },
      { id: 'D', text: 'Solo una tuerca', isCorrect: false }
    ],
    image: "/src/assets/images/machines/tornillo.jpg"
  },
  {
    id: 13,
    question: "Define el torno",
    answer: "Cilindro con manivela que enrolla una cuerda para subir cargas.",
    multipleChoice: [
      { id: 'A', text: 'Solo un cilindro para rodar', isCorrect: false },
      { id: 'B', text: 'Solo una manivela para girar', isCorrect: false },
      { id: 'C', text: 'Cilindro con manivela que enrolla una cuerda para subir cargas', isCorrect: true },
      { id: 'D', text: 'Solo una cuerda para atar', isCorrect: false }
    ],
    image: "/src/assets/images/machines/torno.jpg"
  },
  {
    id: 14,
    question: "¿Qué tipos de palancas existen según su género?",
    answer: "Primer género: fulcro entre fuerza y resistencia (ej. tijeras). Segundo género: palanca que ayuda a movilizar un objeto (ej. carretilla). Tercer género: fuerza entre fulcro y resistencia (ej. pinzas).",
    multipleChoice: [
      { id: 'A', text: 'Solo primer género', isCorrect: false },
      { id: 'B', text: 'Solo segundo género', isCorrect: false },
      { id: 'C', text: 'Primer, segundo y tercer género', isCorrect: true },
      { id: 'D', text: 'Solo primer y segundo género', isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "¿Qué tipo de palanca son las tijeras?",
    answer: "Las tijeras son una palanca de primer género, donde el fulcro está entre la fuerza aplicada y la resistencia.",
    multipleChoice: [
      { id: 'A', text: 'Primer género - fulcro entre fuerza y resistencia', isCorrect: true },
      { id: 'B', text: 'Segundo género - resistencia entre fulcro y fuerza', isCorrect: false },
      { id: 'C', text: 'Tercer género - fuerza entre fulcro y resistencia', isCorrect: false },
      { id: 'D', text: 'No es una palanca', isCorrect: false }
    ],
    leverDefinitions: {
      primerGenero: "Palanca en la que el fulcro va al centro",
      segundoGenero: "Palanca en la que la resistencia va al centro", 
      tercerGenero: "Palanca en la que la fuerza va al centro"
    }
  },
  {
    id: 16,
    question: "¿Qué tipo de palanca es la carretilla?",
    answer: "La carretilla es una palanca de segundo género, donde la resistencia está entre el fulcro y la fuerza aplicada.",
    multipleChoice: [
      { id: 'A', text: 'Primer género - fulcro entre fuerza y resistencia', isCorrect: false },
      { id: 'B', text: 'Segundo género - resistencia entre fulcro y fuerza', isCorrect: true },
      { id: 'C', text: 'Tercer género - fuerza entre fulcro y resistencia', isCorrect: false },
      { id: 'D', text: 'No es una palanca', isCorrect: false }
    ],
    leverDefinitions: {
      primerGenero: "Palanca en la que el fulcro va al centro",
      segundoGenero: "Palanca en la que la resistencia va al centro",
      tercerGenero: "Palanca en la que la fuerza va al centro"
    }
  },
  {
    id: 17,
    question: "¿Qué tipo de palanca son las pinzas?",
    answer: "Las pinzas son una palanca de tercer género, donde la fuerza aplicada está entre el fulcro y la resistencia.",
    multipleChoice: [
      { id: 'A', text: 'Primer género - fulcro entre fuerza y resistencia', isCorrect: false },
      { id: 'B', text: 'Segundo género - resistencia entre fulcro y fuerza', isCorrect: false },
      { id: 'C', text: 'Tercer género - fuerza entre fulcro y resistencia', isCorrect: true },
      { id: 'D', text: 'No es una palanca', isCorrect: false }
    ],
    leverDefinitions: {
      primerGenero: "Palanca en la que el fulcro va al centro",
      segundoGenero: "Palanca en la que la resistencia va al centro",
      tercerGenero: "Palanca en la que la fuerza va al centro"
    }
  },
  {
    id: 18,
    question: "¿Qué tipo de palanca es el brazo humano al levantar un peso?",
    answer: "El brazo humano al levantar un peso es una palanca de tercer género, donde la fuerza muscular está entre el fulcro (codo) y la resistencia (peso).",
    multipleChoice: [
      { id: 'A', text: 'Primer género - fulcro entre fuerza y resistencia', isCorrect: false },
      { id: 'B', text: 'Segundo género - resistencia entre fulcro y fuerza', isCorrect: false },
      { id: 'C', text: 'Tercer género - fuerza entre fulcro y resistencia', isCorrect: true },
      { id: 'D', text: 'No es una palanca', isCorrect: false }
    ],
    leverDefinitions: {
      primerGenero: "Palanca en la que el fulcro va al centro",
      segundoGenero: "Palanca en la que la resistencia va al centro",
      tercerGenero: "Palanca en la que la fuerza va al centro"
    }
  },
  {
    id: 19,
    question: "¿Cuál es la fórmula para calcular el trabajo?",
    answer: "La fórmula para calcular el trabajo es T = F × d, donde T es trabajo, F es fuerza y d es distancia.",
    multipleChoice: [
      { id: 'A', text: 'T = F × d (fuerza por distancia)', isCorrect: true },
      { id: 'B', text: 'T = F ÷ d (fuerza entre distancia)', isCorrect: false },
      { id: 'C', text: 'T = F + d (fuerza más distancia)', isCorrect: false },
      { id: 'D', text: 'T = F - d (fuerza menos distancia)', isCorrect: false }
    ]
  },
  {
    id: 20,
    question: "¿Cuál es la fórmula para encontrar F (fuerza)?",
    answer: "La fórmula para encontrar la fuerza es F = m × a, donde F es fuerza, m es masa y a es aceleración.",
    multipleChoice: [
      { id: 'A', text: 'F = m × a (masa por aceleración)', isCorrect: true },
      { id: 'B', text: 'F = m ÷ a (masa entre aceleración)', isCorrect: false },
      { id: 'C', text: 'F = m + a (masa más aceleración)', isCorrect: false },
      { id: 'D', text: 'F = m - a (masa menos aceleración)', isCorrect: false }
    ],
    image: "/src/assets/images/machines/triangulo.jpg"
  }
];
