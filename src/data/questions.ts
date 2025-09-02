import { Question } from '../types/quiz-types';

// All questions for Estudios Sociales Noveno Año
export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuáles fueron las razones de la expansión ultramarina de España en el siglo XV?",
    answer: "España buscaba nuevas rutas comerciales hacia Asia, obtener riquezas (oro, plata, especias), difundir el cristianismo y aumentar su poder político y territorial frente a otras potencias.",
    multipleChoice: [
      { id: 'A', text: 'España solo buscaba oro y plata para enriquecer a la corona, sin otros objetivos', isCorrect: false },
      { id: 'B', text: 'Nuevas rutas comerciales, riquezas, expansión territorial y evangelizar', isCorrect: true },
      { id: 'C', text: 'España quería únicamente conquistar territorios para aumentar su poder militar', isCorrect: false },
      { id: 'D', text: 'España solo buscaba difundir la religión católica por el mundo', isCorrect: false }
    ]
  },
  {
    id: 2,
    question: "¿Cuáles eran los nombres de los instrumentos y avances en navegación que se utilizaban en esa época?",
    answer: "La brújula, el astrolabio, el cuadrante, los mapas portulanos y las carabelas con velas triangulares que permitían viajes largos.",
    multipleChoice: [
      { id: 'A', text: 'GPS, radar y computadoras de navegación satelital', isCorrect: false },
      { id: 'B', text: 'Brújula, astrolabio, cuadrante, carabela, mapas portulanos', isCorrect: true },
      { id: 'C', text: 'Solo brújula y mapas básicos, sin otros instrumentos', isCorrect: false },
      { id: 'D', text: 'Sistemas de navegación electrónicos y satélites de comunicación', isCorrect: false }
    ]
  },
  {
    id: 3,
    question: "¿Qué factores políticos, económicos y sociales impulsaron la expansión ultramarina?",
    answer: "El fortalecimiento de las monarquías, el deseo de riquezas, el espíritu aventurero, el progreso en navegación y la búsqueda de prestigio internacional.",
    multipleChoice: [
      { id: 'A', text: 'Solo el hambre y la necesidad de encontrar alimentos para la población', isCorrect: false },
      { id: 'B', text: 'Monarquías fuertes, búsqueda de oro y especias, deseo de prestigio y poder', isCorrect: true },
      { id: 'C', text: 'España solo quería difundir la religión católica por el mundo', isCorrect: false },
      { id: 'D', text: 'Solo la curiosidad científica y el deseo de explorar territorios desconocidos', isCorrect: false }
    ]
  },
  {
    id: 4,
    question: "¿Cuáles fueron las principales características de la conquista de las sociedades indígenas de América y Costa Rica?",
    answer: "Fue violenta, impuso el dominio español, despojó tierras, explotó recursos, sometió a los indígenas y transformó sus culturas.",
    multipleChoice: [
      { id: 'A', text: 'Fueron completamente pacíficas y amigables, sin ningún conflicto', isCorrect: false },
      { id: 'B', text: 'Solo se trató de intercambios comerciales y culturales', isCorrect: false },
      { id: 'C', text: 'Violentas, con guerras, sometimiento, evangelización y explotación', isCorrect: true },
      { id: 'D', text: 'Solo se realizaron exploraciones científicas y estudios culturales', isCorrect: false }
    ]
  },
  {
    id: 5,
    question: "¿Cómo eran los primeros conquistadores del territorio americano?",
    answer: "Eran hombres jóvenes, aventureros, en busca de riqueza y poder, muchos sin grandes recursos económicos pero con ambición.",
    multipleChoice: [
      { id: 'A', text: 'Soldados ambiciosos, en busca de riquezas, fama y tierras', isCorrect: true },
      { id: 'B', text: 'Solo misioneros pacíficos dedicados a la evangelización', isCorrect: false },
      { id: 'C', text: 'Únicamente comerciantes interesados en el intercambio de productos', isCorrect: false },
      { id: 'D', text: 'Solo exploradores científicos sin otros intereses', isCorrect: false }
    ]
  },
  {
    id: 6,
    question: "¿Cuál es la diferencia entre conquista y colonización?",
    answer: "Conquista: sometimiento militar y control de los pueblos. Colonización: organización social, política y económica bajo dominio español.",
    multipleChoice: [
      { id: 'A', text: 'No hay ninguna diferencia, son términos que significan lo mismo', isCorrect: false },
      { id: 'B', text: 'Conquista = sometimiento militar; Colonización = organización y poblamiento', isCorrect: true },
      { id: 'C', text: 'Son procesos completamente idénticos que ocurren al mismo tiempo', isCorrect: false },
      { id: 'D', text: 'Solo existe la conquista, la colonización no es un concepto válido', isCorrect: false }
    ]
  },
  {
    id: 7,
    question: "¿Cuáles fueron las principales características de la conquista española del Caribe, de Centroamérica y de los imperios azteca e inca?",
    answer: "En el Caribe: primeras bases españolas. En Centroamérica: resistencia indígena pero dominio español. En los imperios: caída rápida por alianzas indígenas, armas superiores y enfermedades.",
    multipleChoice: [
      { id: 'A', text: 'Todas las conquistas fueron exactamente iguales en todos los territorios', isCorrect: false },
      { id: 'B', text: 'Caribe: rápido y brutal; Centroamérica: alianzas y resistencia; Aztecas e Incas: derrotados con estrategia y epidemias', isCorrect: true },
      { id: 'C', text: 'Todas las conquistas fueron completamente pacíficas y sin violencia', isCorrect: false },
      { id: 'D', text: 'Solo se realizaron conquistas violentas sin ninguna variación', isCorrect: false }
    ]
  },
  {
    id: 8,
    question: "¿Cómo influyeron la superioridad tecnológica, los conflictos indígenas y alianzas, los animales, la estrategia militar y la evangelización en la conquista europea sobre los pueblos aborígenes?",
    answer: "Los españoles tenían armas de fuego, caballos, tácticas militares, se aliaron con pueblos enemigos de los imperios y usaron la religión como forma de control.",
    multipleChoice: [
      { id: 'A', text: 'Solo la superioridad tecnológica fue el factor determinante', isCorrect: false },
      { id: 'B', text: 'Superioridad tecnológica, alianzas indígenas, caballos y perros, tácticas militares, imposición religiosa', isCorrect: true },
      { id: 'C', text: 'Solo la religión y la evangelización fueron importantes', isCorrect: false },
      { id: 'D', text: 'Solo los caballos y perros determinaron el resultado', isCorrect: false }
    ]
  },
  {
    id: 9,
    question: "¿Qué impacto tuvieron las epidemias en la catástrofe demográfica de los indígenas?",
    answer: "Enfermedades como viruela y sarampión mataron a millones de indígenas, reduciendo drásticamente su población.",
    multipleChoice: [
      { id: 'A', text: 'Las epidemias no tuvieron ningún impacto en la población indígena', isCorrect: false },
      { id: 'B', text: 'Solo afectaron a una pequeña parte de la población', isCorrect: false },
      { id: 'C', text: 'Epidemias como viruela mataron millones, debilitando la resistencia indígena', isCorrect: true },
      { id: 'D', text: 'Solo afectaron a los conquistadores españoles, no a los indígenas', isCorrect: false }
    ]
  },
  {
    id: 10,
    question: "¿Cuál fue el impacto de la conquista en las civilizaciones americanas?",
    answer: "Destrucción de culturas, imposición del idioma español y la religión católica, pérdida de autonomía, explotación laboral y cambios en la vida social y política.",
    multipleChoice: [
      { id: 'A', text: 'Solo trajo mejoras y progreso para las civilizaciones americanas', isCorrect: false },
      { id: 'B', text: 'Destrucción de culturas, pérdida de población, sometimiento y cambios en la vida cotidiana', isCorrect: true },
      { id: 'C', text: 'No hubo ningún cambio en las civilizaciones americanas', isCorrect: false },
      { id: 'D', text: 'Solo trajo cambios positivos sin consecuencias negativas', isCorrect: false }
    ]
  },
  {
    id: 11,
    question: "¿Qué efectos tuvo la evangelización sobre las sociedades indígenas?",
    answer: "Conversión al cristianismo, pérdida de religiones tradicionales, mezcla cultural y construcción de iglesias y escuelas religiosas.",
    multipleChoice: [
      { id: 'A', text: 'Solo impuso el catolicismo sin otros efectos', isCorrect: false },
      { id: 'B', text: 'Impuso el catolicismo, eliminó creencias indígenas y creó sincretismo', isCorrect: true },
      { id: 'C', text: 'No tuvo ningún efecto sobre las sociedades indígenas', isCorrect: false },
      { id: 'D', text: 'Solo creó sincretismo sin imponer religión', isCorrect: false }
    ]
  },
  {
    id: 12,
    question: "¿Cómo eran las visiones del mundo de los españoles e indígenas en la época de estudio?",
    answer: "Los españoles tenían visión eurocéntrica y cristiana; los indígenas veían la naturaleza como sagrada y vivían en armonía con ella.",
    multipleChoice: [
      { id: 'A', text: 'Eran exactamente iguales, sin diferencias culturales', isCorrect: false },
      { id: 'B', text: 'Españoles: visión eurocéntrica y religiosa; Indígenas: espiritualidad ligada a la naturaleza', isCorrect: true },
      { id: 'C', text: 'Solo tenían visiones religiosas, sin otras diferencias', isCorrect: false },
      { id: 'D', text: 'Solo tenían visiones naturales, sin diferencias culturales', isCorrect: false }
    ]
  },
  {
    id: 13,
    question: "¿Cuál fue la actitud de los conquistadores respecto a la religión y la visión de la naturaleza de los indígenas?",
    answer: "Consideraban la religión indígena como idolatría, buscaban reemplazarla con el cristianismo y explotaban la naturaleza como recurso económico.",
    multipleChoice: [
      { id: 'A', text: 'Los españoles respetaban completamente todas las creencias indígenas', isCorrect: false },
      { id: 'B', text: 'Españoles despreciaban religiones indígenas, veían la naturaleza como recurso', isCorrect: true },
      { id: 'C', text: 'Los españoles no tenían ninguna actitud hacia estos temas', isCorrect: false },
      { id: 'D', text: 'Los españoles solo respetaban la naturaleza, no las religiones', isCorrect: false }
    ]
  },
  {
    id: 14,
    question: "¿Cuáles fueron las características del Real y Supremo Consejo de Indias, la Casa de Contratación de Sevilla, los Virreinatos, las Capitanías Generales, la Real Audiencia, los Gobernadores, el Cabildo, las Alcaldías y Corregimientos?",
    answer: "Consejo de Indias: máximo órgano administrativo y judicial. Casa de Contratación: control del comercio y navegación. Virreinatos: grandes territorios gobernados por virreyes. Capitanías Generales: territorios más pequeños con autoridad militar. Real Audiencia: tribunales de justicia. Gobernadores: controlaban provincias. Cabildos: gobiernos locales. Alcaldías y corregimientos: justicia y administración en ciudades y pueblos.",
    multipleChoice: [
      { id: 'A', text: 'Solo se encargaban de la legislación, sin otras funciones', isCorrect: false },
      { id: 'B', text: 'Consejo de Indias: legislación; Casa de Contratación: comercio; Virreinatos y Capitanías: gobiernos regionales; Audiencia: justicia; Cabildo y Alcaldías: gobierno local', isCorrect: true },
      { id: 'C', text: 'Solo se encargaban del comercio, sin otras responsabilidades', isCorrect: false },
      { id: 'D', text: 'Solo se encargaban de la justicia, sin otras funciones', isCorrect: false }
    ]
  },
  {
    id: 15,
    question: "¿Cuáles fueron las principales características de la jerarquía social en el imperio español?",
    answer: "En la cima los peninsulares, luego criollos, mestizos, indígenas y esclavos africanos en la base.",
    multipleChoice: [
      { id: 'A', text: 'Todos los grupos sociales tenían exactamente los mismos derechos', isCorrect: false },
      { id: 'B', text: 'Jerarquía: peninsulares, criollos, mestizos, indígenas y esclavos', isCorrect: true },
      { id: 'C', text: 'Solo existían los peninsulares, sin otros grupos', isCorrect: false },
      { id: 'D', text: 'Solo existían los indígenas, sin otros grupos sociales', isCorrect: false }
    ]
  },
  {
    id: 16,
    question: "¿Cómo se organizaba la sociedad durante la colonia?",
    answer: "En estamentos rígidos según origen y raza, con privilegios para españoles y discriminación hacia indígenas y afrodescendientes.",
    multipleChoice: [
      { id: 'A', text: 'Todos los grupos sociales tenían exactamente las mismas oportunidades', isCorrect: false },
      { id: 'B', text: 'Organizada en castas, con desigualdades sociales marcadas', isCorrect: true },
      { id: 'C', text: 'Solo se organizaba por edad, sin otras categorías', isCorrect: false },
      { id: 'D', text: 'Solo se organizaba por género, sin otras categorías', isCorrect: false }
    ]
  },
  {
    id: 17,
    question: "¿Cuál fue el poder de la Iglesia Católica en la época colonial?",
    answer: "Tenía gran influencia en política, educación, moral, cultura y en la conversión religiosa de los pueblos indígenas.",
    multipleChoice: [
      { id: 'A', text: 'La Iglesia solo se encargaba de la religión, sin otros poderes', isCorrect: false },
      { id: 'B', text: 'La Iglesia controlaba educación, cultura, moral, política y economía', isCorrect: true },
      { id: 'C', text: 'La Iglesia no tenía ningún poder en la época colonial', isCorrect: false },
      { id: 'D', text: 'La Iglesia solo se encargaba de la educación, sin otros poderes', isCorrect: false }
    ]
  },
  {
    id: 18,
    question: "¿Qué características sociales, económicas, políticas y culturales tuvieron las sociedades coloniales?",
    answer: "Sociales: jerarquía rígida. Económicas: minería, agricultura y comercio controlado. Políticas: dominio español con virreinatos y cabildos. Culturales: mezcla de tradiciones indígenas, africanas y europeas.",
    multipleChoice: [
      { id: 'A', text: 'Solo tenían características económicas, sin otros aspectos', isCorrect: false },
      { id: 'B', text: 'Economía basada en agricultura y minería, sociedad estratificada, poder centralizado en la monarquía y la Iglesia', isCorrect: true },
      { id: 'C', text: 'Solo tenían características políticas, sin otros aspectos', isCorrect: false },
      { id: 'D', text: 'Solo tenían características culturales, sin otros aspectos', isCorrect: false }
    ]
  },
  {
    id: 19,
    question: "¿Qué características tenían las sociedades coloniales de América entre los siglos XVI y XVIII?",
    answer: "Se caracterizaron por la mezcla cultural, la explotación de indígenas, el surgimiento de nuevas ciudades y el poder de la Iglesia.",
    multipleChoice: [
      { id: 'A', text: 'Las colonias eran completamente independientes de España', isCorrect: false },
      { id: 'B', text: 'Colonias dependientes de España, con comercio controlado, diversidad cultural y mezcla étnica', isCorrect: true },
      { id: 'C', text: 'Las colonias solo tenían características comerciales', isCorrect: false },
      { id: 'D', text: 'Las colonias solo tenían características culturales', isCorrect: false }
    ]
  },
  {
    id: 20,
    question: "¿Qué importancia tuvo la expansión ultramarina de España en los siglos XV y XVI?",
    answer: "Fue un proceso de exploración y conquista para ampliar territorios, obtener riquezas y difundir el cristianismo, apoyado en avances de navegación.",
    multipleChoice: [
      { id: 'A', text: 'Solo tuvo importancia comercial, sin otros aspectos', isCorrect: false },
      { id: 'B', text: 'Dio origen al imperio español, expansión cultural, intercambio comercial y colonización de América', isCorrect: true },
      { id: 'C', text: 'No tuvo ninguna importancia histórica', isCorrect: false },
      { id: 'D', text: 'Solo tuvo importancia cultural, sin otros aspectos', isCorrect: false }
    ]
  }
];
