import { Question } from '../types/quiz-types';

// Science questions for 9th grade - Simple science concepts
export const scienceQuestions: Question[] = [
  {
    id: 1,
    question: "Grupo de dos o más átomos iguales o diferentes unidos por enlaces químicos.",
    answer: "Moléculas compuestas - conjunto de átomos unidos por enlaces químicos que forman una unidad estable.",
    multipleChoice: [
      { id: 'A', text: 'Moléculas compuestas', isCorrect: true },
      { id: 'B', text: 'Átomo', isCorrect: false },
      { id: 'C', text: 'Elemento', isCorrect: false },
      { id: 'D', text: 'Compuesto', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "Representa la cantidad de electrones que puede ganar, perder o compartir un elemento.",
    answer: "Valencia o número de oxidación - capacidad de combinación de un elemento, indicando cuántos electrones puede ganar, perder o compartir.",
    multipleChoice: [
      { id: 'A', text: 'Masa atómica', isCorrect: false },
      { id: 'B', text: 'Valencia', isCorrect: true },
      { id: 'C', text: 'Número atómico', isCorrect: false },
      { id: 'D', text: 'Número de oxidación', isCorrect: true }
    ]
  },
  {
    id: 3,
    question: "Está formada por átomos de un mismo elemento.",
    answer: "Molécula elemental - molécula compuesta únicamente por átomos del mismo elemento químico.",
    multipleChoice: [
      { id: 'A', text: 'Molécula compuesta', isCorrect: false },
      { id: 'B', text: 'Compuesto inorgánico', isCorrect: false },
      { id: 'C', text: 'Molécula elemental', isCorrect: true },
      { id: 'D', text: 'Compuesto orgánico', isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "Formadas por átomos de diferentes elementos.",
    answer: "Molécula compuesta - molécula que contiene átomos de dos o más elementos químicos diferentes.",
    multipleChoice: [
      { id: 'A', text: 'Molécula elemental', isCorrect: false },
      { id: 'B', text: 'Elemento puro', isCorrect: false },
      { id: 'C', text: 'Molécula compuesta', isCorrect: true },
      { id: 'D', text: 'Mezcla homogénea', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "Es la representación gráfica de un compuesto químico.",
    answer: "Fórmula química - representación simbólica que muestra la composición de un compuesto mediante símbolos químicos.",
    multipleChoice: [
      { id: 'A', text: 'Ecuación química', isCorrect: false },
      { id: 'B', text: 'Tabla periódica', isCorrect: false },
      { id: 'C', text: 'Modelo atómico', isCorrect: false },
      { id: 'D', text: 'Fórmula química', isCorrect: true }
    ]
  },
  {
    id: 6,
    question: "Contienen átomos de carbono debidamente combinados con el oxígeno y el hidrógeno.",
    answer: "Compuestos orgánicos - compuestos que contienen carbono combinado principalmente con hidrógeno y oxígeno.",
    multipleChoice: [
      { id: 'A', text: 'Compuestos orgánicos', isCorrect: true },
      { id: 'B', text: 'Compuestos inorgánicos', isCorrect: false },
      { id: 'C', text: 'Metales', isCorrect: false },
      { id: 'D', text: 'Gases nobles', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "Son todos aquellos que no contienen carbono.",
    answer: "Compuestos inorgánicos - compuestos químicos que no contienen átomos de carbono en su estructura.",
    multipleChoice: [
      { id: 'A', text: 'Compuestos orgánicos', isCorrect: false },
      { id: 'B', text: 'Hidrocarburos', isCorrect: false },
      { id: 'C', text: 'Compuestos inorgánicos', isCorrect: true },
      { id: 'D', text: 'Polímeros', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "Son lo que corresponde la combinación natural o inducida de los elementos de la tabla periódica.",
    answer: "Número de oxidación - estado de oxidación que indica la carga eléctrica que tendría un átomo si todos sus enlaces fueran iónicos.",
    multipleChoice: [
      { id: 'A', text: 'Número atómico', isCorrect: false },
      { id: 'B', text: 'Valencia', isCorrect: false },
      { id: 'C', text: 'Número de oxidación', isCorrect: true },
      { id: 'D', text: 'Masa atómica', isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "Capacidad que tiene un elemento de combinación o de hacer enlaces.",
    answer: "Fórmula química - representación simbólica que muestra la capacidad de combinación de un elemento mediante símbolos químicos.",
    multipleChoice: [
      { id: 'A', text: 'Densidad', isCorrect: false },
      { id: 'B', text: 'Punto de fusión', isCorrect: false },
      { id: 'C', text: 'Conductividad', isCorrect: false },
      { id: 'D', text: 'Fórmula química', isCorrect: true }
    ]
  },
  {
    id: 10,
    question: "Se utiliza para fabricar fertilizantes. (Marque con X)",
    answer: "Amoníaco (NH3) - compuesto químico usado en la producción de fertilizantes nitrogenados para la agricultura.",
    multipleChoice: [
      { id: 'A', text: 'Dióxido de carbono', isCorrect: false },
      { id: 'B', text: 'Amoníaco (NH3)', isCorrect: true },
      { id: 'C', text: 'Cloruro de sodio', isCorrect: false },
      { id: 'D', text: 'Óxido de cromo', isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "Se utiliza como ácido para piscinas y refinación de petróleo. (Marque con X)",
    answer: "Ácido clorhídrico (HCl) - ácido fuerte usado en el tratamiento de piscinas y procesos de refinación de petróleo.",
    multipleChoice: [
      { id: 'A', text: 'Ácido sulfúrico', isCorrect: false },
      { id: 'B', text: 'Ácido clorhídrico (HCl)', isCorrect: true },
      { id: 'C', text: 'Ácido nítrico', isCorrect: false },
      { id: 'D', text: 'Ácido acético', isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "Es un disolvente universal. (Marque con X)",
    answer: "Agua (H2O) - sustancia capaz de disolver una gran variedad de compuestos químicos, por lo que se considera disolvente universal.",
    multipleChoice: [
      { id: 'A', text: 'Alcohol', isCorrect: false },
      { id: 'B', text: 'Agua (H2O)', isCorrect: true },
      { id: 'C', text: 'Acetona', isCorrect: false },
      { id: 'D', text: 'Benceno', isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "Utilizado para dar color verde en pinturas y tintes. (Marque con X)",
    answer: "Óxido de cromo III (Cr2O3) - compuesto químico que proporciona un color verde característico usado en pinturas y tintes.",
    multipleChoice: [
      { id: 'A', text: 'Óxido de hierro', isCorrect: false },
      { id: 'B', text: 'Óxido de cromo III (Cr2O3)', isCorrect: true },
      { id: 'C', text: 'Óxido de cobre', isCorrect: false },
      { id: 'D', text: 'Óxido de zinc', isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "Se encuentra en bebidas carbonatadas. (Marque con X)",
    answer: "Dióxido de carbono (CO2) - gas que se disuelve en las bebidas carbonatadas para darles su característica efervescencia.",
    multipleChoice: [
      { id: 'A', text: 'Oxígeno', isCorrect: false },
      { id: 'B', text: 'Dióxido de carbono (CO2)', isCorrect: true },
      { id: 'C', text: 'Nitrógeno', isCorrect: false },
      { id: 'D', text: 'Hidrógeno', isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "Es un preservante natural y sirve para sazonar. (Marque con X)",
    answer: "Cloruro de sodio (NaCl) - compuesto conocido como sal de mesa, usado como conservante natural y condimento en alimentos.",
    multipleChoice: [
      { id: 'A', text: 'Azúcar', isCorrect: false },
      { id: 'B', text: 'Cloruro de sodio (NaCl)', isCorrect: true },
      { id: 'C', text: 'Bicarbonato de sodio', isCorrect: false },
      { id: 'D', text: 'Vinagre', isCorrect: false }
    ]
  },
  {
    id: 16,
    question: "Limpiador de metales como el hierro. (Marque con X)",
    answer: "Ácido clorhídrico (HCl) - ácido usado para limpiar y eliminar la corrosión de metales como el hierro en procesos industriales.",
    multipleChoice: [
      { id: 'A', text: 'Ácido sulfúrico', isCorrect: false },
      { id: 'B', text: 'Ácido nítrico', isCorrect: false },
      { id: 'C', text: 'Ácido clorhídrico (HCl)', isCorrect: true },
      { id: 'D', text: 'Ácido fosfórico', isCorrect: false }
    ]
  },
  {
    id: 17,
    question: "Escriba el nombre del siguiente compuesto químico: Na2O",
    answer: "Óxido de sodio - compuesto iónico formado por dos átomos de sodio y un átomo de oxígeno.",
    multipleChoice: [
      { id: 'A', text: 'Óxido de sodio', isCorrect: true },
      { id: 'B', text: 'Óxido de nitrógeno', isCorrect: false },
      { id: 'C', text: 'Óxido de potasio', isCorrect: false },
      { id: 'D', text: 'Óxido de magnesio', isCorrect: false }
    ]
  },
  {
    id: 18,
    question: "Escriba el nombre del siguiente compuesto químico: CaCO3",
    answer: "Carbonato de calcio - compuesto iónico formado por un átomo de calcio y un ion carbonato (CO3).",
    multipleChoice: [
      { id: 'A', text: 'Carbonato de magnesio', isCorrect: false },
      { id: 'B', text: 'Carbonato de calcio', isCorrect: true },
      { id: 'C', text: 'Carbonato de sodio', isCorrect: false },
      { id: 'D', text: 'Carbonato de potasio', isCorrect: false }
    ]
  },
  {
    id: 19,
    question: "Escriba el nombre del siguiente compuesto químico: CO2",
    answer: "Dióxido de carbono - compuesto covalente formado por un átomo de carbono y dos átomos de oxígeno.",
    multipleChoice: [
      { id: 'A', text: 'Monóxido de carbono', isCorrect: false },
      { id: 'B', text: 'Dióxido de azufre', isCorrect: false },
      { id: 'C', text: 'Dióxido de carbono', isCorrect: true },
      { id: 'D', text: 'Trióxido de carbono', isCorrect: false }
    ]
  },
  {
    id: 20,
    question: "Escriba el nombre del siguiente compuesto químico: SO2",
    answer: "Dióxido de azufre - compuesto covalente formado por un átomo de azufre y dos átomos de oxígeno.",
    multipleChoice: [
      { id: 'A', text: 'Monóxido de azufre', isCorrect: false },
      { id: 'B', text: 'Dióxido de azufre', isCorrect: true },
      { id: 'C', text: 'Trióxido de azufre', isCorrect: false },
      { id: 'D', text: 'Dióxido de carbono', isCorrect: false }
    ]
  },
  {
    id: 21,
    question: "Escriba el nombre del siguiente compuesto químico: Fe2O3",
    answer: "Óxido de hierro III - compuesto iónico formado por dos átomos de hierro con número de oxidación +3 y tres átomos de oxígeno.",
    multipleChoice: [
      { id: 'A', text: 'Óxido de hierro II', isCorrect: false },
      { id: 'B', text: 'Óxido de hierro III', isCorrect: true },
      { id: 'C', text: 'Óxido de cobre II', isCorrect: false },
      { id: 'D', text: 'Óxido de aluminio', isCorrect: false }
    ]
  },
  {
    id: 22,
    question: "Escriba el nombre del siguiente compuesto químico: H2SO4",
    answer: "Ácido sulfúrico - hidrácido formado por dos átomos de hidrógeno y un ion sulfato (SO4).",
    multipleChoice: [
      { id: 'A', text: 'Ácido sulfúrico', isCorrect: true },
      { id: 'B', text: 'Ácido clorhídrico', isCorrect: false },
      { id: 'C', text: 'Ácido nítrico', isCorrect: false },
      { id: 'D', text: 'Ácido fosfórico', isCorrect: false }
    ]
  },
  {
    id: 23,
    question: "Escriba el nombre del siguiente compuesto químico: HCl(ac)",
    answer: "Ácido clorhídrico acuoso - disolución acuosa de cloruro de hidrógeno, ácido fuerte comúnmente usado en laboratorios.",
    multipleChoice: [
      { id: 'A', text: 'Ácido sulfúrico acuoso', isCorrect: false },
      { id: 'B', text: 'Ácido nítrico acuoso', isCorrect: false },
      { id: 'C', text: 'Ácido clorhídrico acuoso', isCorrect: true },
      { id: 'D', text: 'Ácido fosfórico acuoso', isCorrect: false }
    ]
  },
  {
    id: 24,
    question: "Escriba el nombre del siguiente compuesto químico: HBr(g)",
    answer: "Bromuro de hidrógeno gaseoso - compuesto gaseoso formado por un átomo de hidrógeno y un átomo de bromo.",
    multipleChoice: [
      { id: 'A', text: 'Cloruro de hidrógeno gaseoso', isCorrect: false },
      { id: 'B', text: 'Bromuro de hidrógeno gaseoso', isCorrect: true },
      { id: 'C', text: 'Fluoruro de hidrógeno gaseoso', isCorrect: false },
      { id: 'D', text: 'Yoduro de hidrógeno gaseoso', isCorrect: false }
    ]
  }
];
