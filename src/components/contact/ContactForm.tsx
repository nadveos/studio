"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { createAppointment } from "@/lib/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {pending ? "Enviando..." : "Enviar Consulta"}
    </Button>
  );
}

export function ContactForm() {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createAppointment, initialState);
  const { toast } = useToast();

  useEffect(() => {
    if (state.message && !state.errors) {
      toast({
        title: "Éxito",
        description: state.message,
      });
      // A way to reset form would be needed here, managed by the parent page component if necessary
    } else if (state.message && state.errors) {
       toast({
        variant: "destructive",
        title: "Error",
        description: state.message,
      });
    }
  }, [state, toast]);

  return (
    <form action={dispatch} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">Nombre Completo</Label>
        <Input id="name" name="name" placeholder="Tu nombre" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input id="email" name="email" type="email" placeholder="tu@email.com" required />
         {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Teléfono</Label>
        <Input id="phone" name="phone" type="tel" placeholder="Tu número de teléfono" />
         {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone.join(', ')}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="consultation">Consulta</Label>
        <Textarea id="consultation" name="consultation" placeholder="Describe brevemente tu caso o pregunta." required rows={5} />
         {state.errors?.consultation && <p className="text-sm text-destructive">{state.errors.consultation.join(', ')}</p>}
      </div>
      <SubmitButton />
    </form>
  );
}
