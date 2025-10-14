import { Question } from '../types/quiz-types';

// All questions for Estudios Sociales Noveno Año
export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuáles eran las generalidades de la vida urbana y rural durante la época colonial?",
    answer: "Urbana: centrada en las ciudades coloniales con iglesias, plazas y edificios del gobierno; vivían españoles y criollos. Rural: dedicada a la agricultura, ganadería y vida más sencilla; habitada por indígenas, mestizos y campesinos.",
    multipleChoice: [
      { id: 'A', text: 'Urbana: solo comercio; Rural: solo ganadería', isCorrect: false },
      { id: 'B', text: 'Urbana: ciudades con iglesias, plazas y gobierno (españoles y criollos); Rural: agricultura y ganadería (indígenas, mestizos)', isCorrect: true },
      { id: 'C', text: 'No había diferencia entre urbana y rural', isCorrect: false },
      { id: 'D', text: 'Urbana: solo indígenas; Rural: solo españoles', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "¿Cómo era la estructura urbana y rural cotidiana en Costa Rica en la época colonial?",
    answer: "Urbana: pueblos pequeños con iglesia, plaza y cabildo al centro. Rural: haciendas y fincas dispersas; la mayoría de la población trabajaba la tierra.",
    multipleChoice: [
      { id: 'A', text: 'Urbana: grandes ciudades industriales; Rural: sin habitantes', isCorrect: false },
      { id: 'B', text: 'Urbana: pueblos pequeños con iglesia, plaza y cabildo; Rural: haciendas dispersas donde se trabajaba la tierra', isCorrect: true },
      { id: 'C', text: 'Todo era urbano sin áreas rurales', isCorrect: false },
      { id: 'D', text: 'No había estructura definida', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "¿Cómo era la estructura y organización de los pueblos de indios y las misiones?",
    answer: "Pueblos de indios: comunidades controladas por autoridades españolas, organizadas alrededor de una iglesia. Misiones: dirigidas por misioneros para evangelizar y educar indígenas, con tierras comunales.",
    multipleChoice: [
      { id: 'A', text: 'Pueblos de indios: autónomos sin control español; Misiones: solo comerciales', isCorrect: false },
      { id: 'B', text: 'Pueblos de indios: controlados por España, organizados alrededor de iglesia; Misiones: evangelización con tierras comunales', isCorrect: true },
      { id: 'C', text: 'No existían pueblos de indios ni misiones', isCorrect: false },
      { id: 'D', text: 'Ambos eran lo mismo', isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "¿Cuáles eran las principales características de la explotación de minerales en la época colonial? (Marque con X)",
    answer: "Controlada por la Corona española. Uso intensivo de mano de obra indígena o esclava. Minerales más explotados: oro y plata (principalmente en México y Perú).",
    multipleChoice: [
      { id: 'A', text: 'Libre comercio de minerales; trabajo voluntario; explotación de diamantes', isCorrect: false },
      { id: 'B', text: '☑ Controlada por la Corona española ☑ Mano de obra indígena/esclava ☑ Oro y plata en México y Perú', isCorrect: true },
      { id: 'C', text: 'Solo en Costa Rica; sin control español', isCorrect: false },
      { id: 'D', text: 'No había explotación minera', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "¿Cuáles eran las principales características de la agricultura y la ganadería en la época colonial? (Marque con X)",
    answer: "Agricultura de autosuficiencia y exportación (cacao, azúcar, tabaco). Ganadería usada para alimentación y transporte. Dependencia de la mano de obra indígena.",
    multipleChoice: [
      { id: 'A', text: 'Solo agricultura de exportación; ganadería inexistente; trabajo español', isCorrect: false },
      { id: 'B', text: '☑ Agricultura de autosuficiencia y exportación ☑ Ganadería para alimentación y transporte ☑ Mano de obra indígena', isCorrect: true },
      { id: 'C', text: 'Solo ganadería; sin agricultura', isCorrect: false },
      { id: 'D', text: 'Trabajo mecanizado sin mano de obra indígena', isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "¿Cómo era el comercio colonial en América?",
    answer: "Controlado por España mediante el monopolio comercial. Todo debía pasar por puertos autorizados. Comercio interno limitado y controlado por la metrópoli.",
    multipleChoice: [
      { id: 'A', text: 'Libre comercio sin restricciones; múltiples puertos; sin control español', isCorrect: false },
      { id: 'B', text: 'Monopolio español; solo puertos autorizados; comercio interno limitado', isCorrect: true },
      { id: 'C', text: 'Controlado por indígenas', isCorrect: false },
      { id: 'D', text: 'No existía comercio en la colonia', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "¿Cuáles son tres características de la encomienda, la mita, el repartimiento y la esclavitud? (Marque con X)",
    answer: "Encomienda: indígenas trabajaban a cambio de evangelización. Mita: trabajo obligatorio por turnos, especialmente en minas. Repartimiento: sistema de trabajo forzoso temporal. Esclavitud: propiedad total del amo, sin derechos.",
    multipleChoice: [
      { id: 'A', text: 'Todos eran sistemas de trabajo voluntario y remunerado', isCorrect: false },
      { id: 'B', text: '☑ Encomienda: trabajo por evangelización ☑ Mita: turnos obligatorios en minas ☑ Esclavitud: sin derechos', isCorrect: true },
      { id: 'C', text: 'Solo existía la esclavitud', isCorrect: false },
      { id: 'D', text: 'Todos garantizaban derechos a los trabajadores', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "¿Cuáles son cinco costumbres y tradiciones heredadas de la vida colonial en Costa Rica? (Marque con X)",
    answer: "Fiestas patronales. Procesiones religiosas. Comidas típicas como el tamal y gallo pinto. Rezos y novenas. Uso del café como centro social y económico.",
    multipleChoice: [
      { id: 'A', text: 'Solo el fútbol y el béisbol', isCorrect: false },
      { id: 'B', text: '☑ Fiestas patronales ☑ Procesiones ☑ Tamales y gallo pinto ☑ Novenas ☑ Cultura del café', isCorrect: true },
      { id: 'C', text: 'No heredamos ninguna tradición colonial', isCorrect: false },
      { id: 'D', text: 'Solo tradiciones indígenas sin influencia española', isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "¿Cuáles son tres características básicas del movimiento de la Ilustración? (Marque con X)",
    answer: "Uso de la razón sobre la fe. Búsqueda del progreso y conocimiento científico. Crítica al absolutismo y la Iglesia.",
    multipleChoice: [
      { id: 'A', text: 'Fe sobre razón; rechazo de la ciencia; apoyo al absolutismo', isCorrect: false },
      { id: 'B', text: '☑ Razón sobre fe ☑ Progreso y ciencia ☑ Crítica al absolutismo e Iglesia', isCorrect: true },
      { id: 'C', text: 'Solo arte y literatura', isCorrect: false },
      { id: 'D', text: 'Apoyo total a la monarquía', isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "¿Cuáles son tres postulados de la Ilustración? (Marque con X)",
    answer: "Libertad individual. Igualdad ante la ley. Separación de poderes.",
    multipleChoice: [
      { id: 'A', text: 'Poder absoluto del rey; desigualdad social; concentración del poder', isCorrect: false },
      { id: 'B', text: '☑ Libertad individual ☑ Igualdad ante la ley ☑ Separación de poderes', isCorrect: true },
      { id: 'C', text: 'Solo la fe religiosa', isCorrect: false },
      { id: 'D', text: 'Centralización del poder en la Iglesia', isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "¿Cuáles son tres aspectos del pensamiento de John Locke, Voltaire, Montesquieu y Rousseau? (Marque con X)",
    answer: "Locke: derechos naturales (vida, libertad, propiedad). Voltaire: libertad de expresión y religión. Montesquieu: división de poderes. Rousseau: soberanía del pueblo y contrato social.",
    multipleChoice: [
      { id: 'A', text: 'Todos apoyaban el absolutismo monárquico', isCorrect: false },
      { id: 'B', text: '☑ Locke: derechos naturales ☑ Voltaire: libertad de expresión ☑ Montesquieu: división de poderes', isCorrect: true },
      { id: 'C', text: 'Solo criticaban a la Iglesia', isCorrect: false },
      { id: 'D', text: 'Todos eran monárquicos conservadores', isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "¿Cuáles son tres aspectos que caracterizan a la Ilustración respecto a la economía? (Marque con X)",
    answer: "Defensa de la libre competencia. Crítica al mercantilismo. Valor del trabajo y la producción como fuente de riqueza.",
    multipleChoice: [
      { id: 'A', text: 'Apoyo al mercantilismo; monopolios reales; rechazo al trabajo', isCorrect: false },
      { id: 'B', text: '☑ Libre competencia ☑ Crítica al mercantilismo ☑ Trabajo y producción como riqueza', isCorrect: true },
      { id: 'C', text: 'Solo la agricultura como fuente de riqueza', isCorrect: false },
      { id: 'D', text: 'Control total del Estado sobre la economía', isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "¿Qué es la Enciclopedia? (dos aspectos)",
    answer: "Obra que reunió todo el conocimiento de la época. Representó la difusión de las ideas ilustradas.",
    multipleChoice: [
      { id: 'A', text: 'Un libro religioso medieval', isCorrect: false },
      { id: 'B', text: 'Obra que reunió el conocimiento de la época y difundió las ideas ilustradas', isCorrect: true },
      { id: 'C', text: 'Solo un diccionario común', isCorrect: false },
      { id: 'D', text: 'Una novela de aventuras', isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "¿Qué es el despotismo ilustrado?",
    answer: "Forma de gobierno donde los reyes aplicaron ideas ilustradas sin dejar el poder absoluto ('Todo para el pueblo, pero sin el pueblo').",
    multipleChoice: [
      { id: 'A', text: 'Democracia total con participación popular', isCorrect: false },
      { id: 'B', text: 'Reyes aplicando ideas ilustradas sin dejar el poder absoluto', isCorrect: true },
      { id: 'C', text: 'Gobierno del pueblo por el pueblo', isCorrect: false },
      { id: 'D', text: 'Abolición completa de la monarquía', isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "¿Cuáles fueron los cambios políticos, religiosos y científicos del Antiguo Régimen respecto a la Ilustración? (Marque con X)",
    answer: "Políticos: fin del absolutismo, inicio de las ideas democráticas. Religiosos: tolerancia religiosa, menor poder de la Iglesia. Científicos: auge de la observación, experimentación y razón.",
    multipleChoice: [
      { id: 'A', text: 'Fortalecimiento del absolutismo y la Iglesia; rechazo a la ciencia', isCorrect: false },
      { id: 'B', text: '☑ Fin del absolutismo ☑ Tolerancia religiosa ☑ Auge de observación y experimentación', isCorrect: true },
      { id: 'C', text: 'Sin cambios significativos', isCorrect: false },
      { id: 'D', text: 'Solo cambios artísticos', isCorrect: false }
    ]
  },
  {
    id: 16,
    question: "¿Cuáles fueron las causas económicas, políticas, sociales y filosóficas de la Revolución Francesa?",
    answer: "Económicas: crisis financiera y altos impuestos. Políticas: abuso del poder real. Sociales: desigualdad entre estamentos. Filosóficas: ideas de la Ilustración sobre libertad e igualdad.",
    multipleChoice: [
      { id: 'A', text: 'Prosperidad económica; rey justo; igualdad social; ideas conservadoras', isCorrect: false },
      { id: 'B', text: 'Crisis financiera; abuso real; desigualdad entre estamentos; ideas ilustradas', isCorrect: true },
      { id: 'C', text: 'Solo causas militares', isCorrect: false },
      { id: 'D', text: 'Solo invasiones extranjeras', isCorrect: false }
    ]
  },
  {
    id: 17,
    question: "¿Cuáles son tres características del Imperio Napoleónico? (Marque con X)",
    answer: "Expansión militar por Europa. Implantación del Código Napoleónico. Difusión de ideas de libertad e igualdad.",
    multipleChoice: [
      { id: 'A', text: 'Pacifismo total; sin leyes; vuelta al feudalismo', isCorrect: false },
      { id: 'B', text: '☑ Expansión militar ☑ Código Napoleónico ☑ Difusión de libertad e igualdad', isCorrect: true },
      { id: 'C', text: 'Solo conquistas en América', isCorrect: false },
      { id: 'D', text: 'Restauración del absolutismo puro', isCorrect: false }
    ]
  },
  {
    id: 18,
    question: "¿Cuáles fueron cinco repercusiones de la Revolución Francesa? (Marque con X)",
    answer: "Fin del absolutismo en Francia. Declaración de los Derechos del Hombre. Inspiración para revoluciones en América. Separación Iglesia–Estado. Surgimiento del nacionalismo.",
    multipleChoice: [
      { id: 'A', text: 'Fortalecimiento de la monarquía; ningún impacto en América', isCorrect: false },
      { id: 'B', text: '☑ Fin del absolutismo ☑ Derechos del Hombre ☑ Inspiró revoluciones americanas ☑ Separación Iglesia-Estado ☑ Nacionalismo', isCorrect: true },
      { id: 'C', text: 'Solo cambios en Francia sin impacto global', isCorrect: false },
      { id: 'D', text: 'Vuelta al feudalismo', isCorrect: false }
    ]
  }
];
