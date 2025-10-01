"use client";

import { useState } from 'react';
import Image from 'next/image';
import { Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface SensitiveImageProps {
  src: string;
  alt: string;
  imageHint: string;
}

export function SensitiveImage({ src, alt, imageHint }: SensitiveImageProps) {
  const [isBlurred, setIsBlurred] = useState(true);

  return (
    <div className="relative w-full h-full aspect-square overflow-hidden group">
      <Image
        src={src}
        alt={alt}
        fill
        className={cn(
          'object-cover transition-all duration-500',
          isBlurred ? 'blur-xl scale-110' : 'blur-0 scale-100'
        )}
        data-ai-hint={imageHint}
      />
      <div
        className={cn(
          'absolute inset-0 bg-black/30 flex items-center justify-center transition-opacity duration-500',
          isBlurred ? 'opacity-100' : 'opacity-0 pointer-events-none'
        )}
      >
        <div className="text-center text-white p-4">
          <EyeOff className="mx-auto h-10 w-10 mb-2" />
          <h4 className="font-bold">Contenido Sensible</h4>
          <p className="text-sm mb-4">La imagen puede ser explícita.</p>
          <Button
            variant="secondary"
            onClick={() => setIsBlurred(false)}
          >
            <Eye className="mr-2 h-4 w-4" />
            Mostrar imagen
          </Button>
        </div>
      </div>
      <div
        className={cn(
          'absolute top-2 right-2 transition-opacity duration-300',
          isBlurred ? 'opacity-0' : 'opacity-100'
        )}
      >
        <Button
          variant="secondary"
          size="icon"
          className="h-8 w-8"
          onClick={() => setIsBlurred(true)}
        >
          <EyeOff className="h-4 w-4" />
          <span className="sr-only">Ocultar imagen</span>
        </Button>
      </div>
    </div>
  );
}
