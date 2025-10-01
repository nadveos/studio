import Link from 'next/link';
import { Logo } from '@/components/shared/Logo';
import { Github, Linkedin, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <Logo className="h-8 w-8 mr-2 text-primary" />
            <span className="text-xl font-bold font-headline">
              EstigmaDoc Digital
            </span>
          </div>
          <div className="flex items-center space-x-6 mb-6 md:mb-0">
            <Link href="/articles" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Artículos
            </Link>
            <Link href="/case-studies" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Casos de Éxito
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contacto
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="h-5 w-5" />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} EstigmaDoc Digital. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
