export type ArticleCategory = 'Úlcera por presión' | 'Úlcera venosa' | 'Pie diabético' | 'Cuidado general';

export type Article = {
  id: string;
  title: string;
  category: ArticleCategory;
  content: string;
  imageId: string;
};

export type CaseStudy = {
  id:string;
  title: string;
  testimonial: string;
  patient: string;
  imageId: string;
};
