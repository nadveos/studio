import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Phone } from "lucide-react";

export const metadata = {
  title: 'Contacto - EstigmaDoc Digital',
  description: 'Póngase en contacto con nuestros especialistas para una consulta. Rellene el formulario y le responderemos a la brevedad.',
};

export default function ContactPage() {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">Póngase en Contacto</h1>
            <p className="text-lg text-muted-foreground mb-8">
              ¿Tiene una pregunta o desea programar una consulta? Complete el formulario y nuestro equipo de especialistas se pondrá en contacto con usted lo antes posible para brindarle la atención que necesita.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Teléfono</h3>
                  <a href="tel:+123456789" className="text-muted-foreground hover:text-primary transition-colors">(123) 456-7890</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-primary/20 rounded-full p-3">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <a href="mailto:contacto@estigmadoc.com" className="text-muted-foreground hover:text-primary transition-colors">contacto@estigmadoc.com</a>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-lg">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}
