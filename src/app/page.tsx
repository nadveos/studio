import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowRight,
  HeartPulse,
  Lightbulb,
  Sparkles,
  Stethoscope,
  Users,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { articles, caseStudies } from '@/lib/data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { SensitiveImage } from '@/components/case-studies/SensitiveImage';

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero-background');
  const articleImages = PlaceHolderImages.filter((img) =>
    articles.slice(0, 3).some((article) => article.imageId === img.id)
  );
  const caseStudyImages = PlaceHolderImages.filter((img) =>
    caseStudies.slice(0, 2).some((study) => study.imageId === img.id)
  );

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover object-center"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-headline font-bold mb-4 drop-shadow-lg">
            Cuidado experto para heridas que importan
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            En Estigma Doc, transformamos vidas a través del cuidado
            especializado y compasivo de heridas ulcerosas.
          </p>
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/contact">
              Contáctanos <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
            Tu Bienestar es Nuestra Prioridad
          </h2>
          <div className="max-w-3xl mx-auto text-muted-foreground space-y-4">
            <p>
              Estigma Doc es una empresa de enfermeros especializados en el
              manejo avanzado de heridas crónicas y úlceras. Nuestra misión es
              ofrecer un tratamiento integral y personalizado, utilizando las
              mejores prácticas y tecnologías para acelerar la cicatrización,
              aliviar el dolor y mejorar tu calidad de vida.
            </p>
            <p>
              Entendemos los desafíos físicos y emocionales que conllevan las
              heridas complejas. Por eso, nuestro enfoque es siempre empático,
              profesional y centrado en el paciente y su familia.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Stethoscope className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Tratamiento Avanzado</h3>
              <p className="text-muted-foreground">
                Utilizamos técnicas de vanguardia para promover una
                cicatrización efectiva.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <HeartPulse className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Cuidado Compasivo</h3>
              <p className="text-muted-foreground">
                Brindamos apoyo y empatía en cada paso de tu recuperación.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="bg-primary/20 rounded-full p-4 mb-4">
                <Lightbulb className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Educación y Prevención</h3>
              <p className="text-muted-foreground">
                Te empoderamos con el conocimiento para cuidar de tu salud.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="articles" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Consejos de Nuestros Expertos
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Encuentra información útil y consejos prácticos para el manejo y
              cuidado de diferentes tipos de heridas.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(0, 3).map((article) => {
              const image = articleImages.find(
                (img) => img.id === article.imageId
              );
              return (
                <Card key={article.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                  <CardHeader className="p-0">
                    {image && (
                      <div className="aspect-video relative">
                        <Image
                          src={image.imageUrl}
                          alt={image.description}
                          fill
                          className="object-cover"
                          data-ai-hint={image.imageHint}
                        />
                      </div>
                    )}
                  </CardHeader>
                  <CardContent className="flex-grow p-6">
                    <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                    <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                    <CardDescription>
                      {article.content.substring(0, 100)}...
                    </CardDescription>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="link" className="p-0 h-auto">
                      <Link href="/articles">
                        Leer más <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/articles">Ver todos los artículos</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">
              Historias de Sanación
            </h2>
            <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
              Testimonios reales de pacientes que han recuperado su calidad de
              vida gracias a nuestro cuidado.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.slice(0, 2).map((study) => {
              const image = caseStudyImages.find(
                (img) => img.id === study.imageId
              );
              return (
                <Card key={study.id} className="overflow-hidden">
                  <div className="md:flex">
                    <div className="md:w-1/2">
                      {image && (
                        <SensitiveImage
                          src={image.imageUrl}
                          alt={image.description}
                          imageHint={image.imageHint}
                        />
                      )}
                    </div>
                    <div className="p-6 flex flex-col justify-center md:w-1/2">
                      <Sparkles className="h-6 w-6 text-accent-foreground mb-4" />
                      <blockquote className="text-lg italic border-l-4 border-accent pl-4">
                        <p className="mb-4">{study.testimonial}</p>
                        <footer className="font-bold text-accent-foreground not-italic">
                          - {study.patient}
                        </footer>
                      </blockquote>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/case-studies">Ver más casos de éxito</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
