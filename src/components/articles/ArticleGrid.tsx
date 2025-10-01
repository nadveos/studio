"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import type { Article } from '@/lib/definitions';
import type { ImagePlaceholder } from '@/lib/placeholder-images';

interface ArticleGridProps {
  articles: Article[];
  images: ImagePlaceholder[];
}

const categories = ['Todos', 'Úlcera por presión', 'Úlcera venosa', 'Pie diabético', 'Cuidado general'];

export function ArticleGrid({ articles, images }: ArticleGridProps) {
  const [filter, setFilter] = useState('Todos');

  const filteredArticles =
    filter === 'Todos'
      ? articles
      : articles.filter((article) => article.category === filter);

  return (
    <div>
      <Tabs defaultValue="Todos" className="w-full flex justify-center mb-8">
        <TabsList className="grid w-full max-w-2xl grid-cols-2 sm:grid-cols-3 md:grid-cols-5 h-auto">
          {categories.map((category) => (
            <TabsTrigger
              key={category}
              value={category}
              onClick={() => setFilter(category)}
              className="text-xs sm:text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredArticles.map((article) => {
          const image = images.find((img) => img.id === article.imageId);
          return (
            <Card key={article.id} className="flex flex-col overflow-hidden transform hover:-translate-y-2 transition-transform duration-300 ease-in-out">
              <CardHeader className="p-0">
                {image && (
                  <div className="aspect-video relative">
                    <Image
                      src={image.imageUrl}
                      alt={image.description}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      data-ai-hint={image.imageHint}
                    />
                  </div>
                )}
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <Badge variant="secondary" className="mb-2">{article.category}</Badge>
                <CardTitle className="text-xl mb-2">{article.title}</CardTitle>
                <CardDescription>
                  {article.content.substring(0, 120)}...
                </CardDescription>
              </CardContent>
              <CardFooter className="p-6 pt-0 mt-auto">
                <Button asChild variant="link" className="p-0 h-auto text-primary">
                  <Link href="#">
                    Leer más <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
