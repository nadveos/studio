import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { FileQuestion } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="container mx-auto flex h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
      <FileQuestion className="mx-auto h-16 w-16 text-primary" />
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl font-headline">
        Página no encontrada
      </h1>
      <p className="mt-6 text-base leading-7 text-muted-foreground">
        Lo sentimos, no pudimos encontrar la página que estás buscando.
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
        <Button asChild>
          <Link href="/">Volver al inicio</Link>
        </Button>
        <Button variant="link" asChild>
          <Link href="/contact">Contactar soporte</Link>
        </Button>
      </div>
    </div>
  )
}
