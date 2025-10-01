import { Card, CardContent } from "@/components/ui/card";
import { caseStudies } from "@/lib/data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SensitiveImage } from "@/components/case-studies/SensitiveImage";
import { Sparkles } from "lucide-react";

export const metadata = {
  title: 'Casos de Éxito - EstigmaDoc Digital',
  description: 'Vea los resultados de nuestros tratamientos y lea los testimonios de pacientes que hemos ayudado.',
};

export default function CaseStudiesPage() {
  const caseStudyImages = PlaceHolderImages.filter(img =>
    caseStudies.some(study => study.imageId === img.id)
  );

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Galería de Casos de Éxito</h1>
        <p className="max-w-2xl mx-auto text-muted-foreground mt-4">
          Historias reales de pacientes cuya calidad de vida ha mejorado significativamente gracias a nuestros cuidados especializados.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study) => {
          const image = caseStudyImages.find(img => img.id === study.imageId);
          return (
            <Card key={study.id} className="flex flex-col overflow-hidden group">
              {image && (
                <div className="aspect-square">
                  <SensitiveImage src={image.imageUrl} alt={image.description} imageHint={image.imageHint} />
                </div>
              )}
              <CardContent className="p-6 flex-grow flex flex-col">
                <Sparkles className="h-6 w-6 text-accent-foreground mb-4" />
                <blockquote className="flex-grow">
                  <p className="italic text-muted-foreground">"{study.testimonial}"</p>
                </blockquote>
                <footer className="mt-4 font-bold text-sm text-right">
                  - {study.patient}
                </footer>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
