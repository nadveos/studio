import type { Article, CaseStudy } from './definitions';

export const articles: Article[] = [
  {
    id: '1',
    title: '5 Consejos para Prevenir las Úlceras por Presión',
    category: 'Úlcera por presión',
    content: 'Las úlceras por presión, también conocidas como escaras, son lesiones en la piel y el tejido subyacente. La prevención es clave. Cambiar de posición frecuentemente, mantener la piel limpia y seca, y una buena nutrición son fundamentales.',
    imageId: 'article-1',
  },
  {
    id: '2',
    title: 'Entendiendo las Úlceras Venosas en las Piernas',
    category: 'Úlcera venosa',
    content: 'Las úlceras venosas son las más comunes en las piernas. Se deben a una mala circulación. El tratamiento incluye terapia de compresión y cuidados de la herida para promover la cicatrización.',
    imageId: 'article-2',
  },
  {
    id: '3',
    title: 'El Cuidado del Pie Diabético: Una Guía Completa',
    category: 'Pie diabético',
    content: 'Las personas con diabetes tienen un mayor riesgo de desarrollar úlceras en los pies. La inspección diaria, el calzado adecuado y el control glucémico son esenciales para prevenir complicaciones graves.',
    imageId: 'article-3',
  },
  {
    id: '4',
    title: 'La Importancia de la Nutrición en la Cicatrización',
    category: 'Cuidado general',
    content: 'Una dieta rica in proteínas, vitaminas y minerales es crucial para el proceso de cicatrización. Alimentos como carnes magras, pescado, frutas y verduras pueden acelerar la recuperación.',
    imageId: 'article-4',
  },
  {
    id: '5',
    title: 'Terapia de Compresión: ¿Qué es y Cómo Funciona?',
    category: 'Úlcera venosa',
    content: 'La terapia de compresión, mediante vendajes o medias, mejora el flujo sanguíneo en las piernas y es un pilar en el tratamiento de las úlceras venosas, ayudando a reducir la hinchazón y promover la curación.',
    imageId: 'article-5',
  },
  {
    id: '6',
    title: 'Manejo del Dolor en Heridas Crónicas',
    category: 'Cuidado general',
    content: 'El dolor es un síntoma común y debilitante en pacientes con heridas crónicas. Un manejo adecuado, que puede incluir medicación y técnicas no farmacológicas, es vital para la calidad de vida.',
    imageId: 'article-6',
  }
];

export const caseStudies: CaseStudy[] = [
  {
    id: 'cs1',
    title: 'Recuperación de Úlcera Venosa Crónica',
    testimonial: 'Después de meses de sufrimiento, el equipo de Estigma Doc cambió mi vida. Su dedicación y conocimiento lograron cicatrizar una herida que parecía imposible de curar. Estoy eternamente agradecida.',
    patient: 'Ana G.',
    imageId: 'case-study-1',
  },
  {
    id: 'cs2',
    title: 'Cierre Exitoso de Úlcera por Presión',
    testimonial: 'El cuidado que recibió mi padre fue excepcional. No solo trataron la herida con profesionalismo, sino que también nos enseñaron cómo prevenir futuras lesiones. Su empatía marcó la diferencia.',
    patient: 'Familia de Carlos R.',
    imageId: 'case-study-2',
  },
  {
    id: 'cs3',
    title: 'Salvando un Pie Diabético',
    testimonial: 'Pensé que perdería mi pie. Gracias a la intervención oportuna y al tratamiento avanzado de Estigma Doc, hoy puedo caminar sin dolor y he recuperado mi independencia. Son unos verdaderos ángeles.',
    patient: 'Javier M.',
    imageId: 'case-study-3',
  },
   {
    id: 'cs4',
    title: 'Manejo de herida compleja postoperatoria',
    testimonial: 'La herida de mi cirugía no cerraba y estaba muy preocupada. El equipo de Estigma Doc me dio la tranquilidad y el tratamiento que necesitaba. En pocas semanas, la mejora fue increíble.',
    patient: 'Laura P.',
    imageId: 'case-study-4',
  },
];
