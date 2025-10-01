'use server';
/**
 * @fileOverview A flow that automatically identifies and blurs sensitive content in case study images.
 *
 * - blurSensitiveContent - A function that handles the blurring of sensitive content in case study images.
 * - BlurSensitiveContentInput - The input type for the blurSensitiveContent function.
 * - BlurSensitiveContentOutput - The return type for the blurSensitiveContent function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BlurSensitiveContentInputSchema = z.object({
  photoDataUri: z
    .string()
    .describe(
      "A photo of a case study, as a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'."
    ),
});
export type BlurSensitiveContentInput = z.infer<typeof BlurSensitiveContentInputSchema>;

const BlurSensitiveContentOutputSchema = z.object({
  blurredPhotoDataUri: z
    .string()
    .describe('The photo with sensitive content blurred, as a data URI.'),
});
export type BlurSensitiveContentOutput = z.infer<typeof BlurSensitiveContentOutputSchema>;

export async function blurSensitiveContent(
  input: BlurSensitiveContentInput
): Promise<BlurSensitiveContentOutput> {
  return blurSensitiveContentFlow(input);
}

const blurSensitiveContentFlow = ai.defineFlow(
  {
    name: 'blurSensitiveContentFlow',
    inputSchema: BlurSensitiveContentInputSchema,
    outputSchema: BlurSensitiveContentOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/gemini-2.5-flash-image-preview',
      prompt: [
        {media: {url: input.photoDataUri}},
        {
          text: 'Blur any sensitive content in this image, such as wounds or identifiable body parts.',
        },
      ],
      config: {
        responseModalities: ['TEXT', 'IMAGE'],
      },
    });

    if (!media) {
      throw new Error('No blurred image was generated.');
    }

    return {blurredPhotoDataUri: media.url!};
  }
);
