"use server";

import { z } from 'zod';

const appointmentSchema = z.object({
  name: z.string().min(2, { message: 'El nombre debe tener al menos 2 caracteres.' }),
  email: z.string().email({ message: 'Por favor, introduce un email válido.' }),
  phone: z.string().optional(),
  consultation: z.string().min(10, { message: 'La consulta debe tener al menos 10 caracteres.' }).max(500, { message: 'La consulta no puede superar los 500 caracteres.' }),
});

export async function createAppointment(prevState: any, formData: FormData) {
  const validatedFields = appointmentSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    consultation: formData.get('consultation'),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Faltan campos por rellenar o son incorrectos. No se pudo enviar la consulta.',
    };
  }

  try {
    // Here you would connect to PocketBase or your database
    // e.g., await pocketbase.collection('appointments').create(validatedFields.data);
    console.log('New Appointment Received:', validatedFields.data);

    // This is a simulation. In a real app, you might revalidate paths or redirect.
    // revalidatePath('/contact');

    return { message: '¡Consulta enviada con éxito! Nos pondremos en contacto con usted pronto.' };
  } catch (e) {
    return {
      message: 'Error en el servidor. Por favor, inténtelo de nuevo más tarde.',
      errors: {}
    };
  }
}
