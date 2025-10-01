import { ArticleGrid } from '@/components/articles/ArticleGrid';
import { articles } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export const metadata = {
  title: 'Artículos Educativos - EstigmaDoc Digital',
  description: 'Consejos y guías de nuestros enfermeros especialistas para el cuidado de heridas ulcerosas.',
};

export default function ArticlesPage() {
  const articleImages = PlaceHolderImages.filter(img => 
    articles.some(article => article.imageId === img.id)
  );
  
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Artículos Educativos</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          Explora nuestra biblioteca de recursos para aprender a manejar y prevenir complicaciones de heridas crónicas.
        </p>
      </div>
      <ArticleGrid articles={articles} images={articleImages} />
    </div>
  );
}
