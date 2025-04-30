
import React from 'react';
import { OutfitRecommendation } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface OutfitSuggestionProps {
  outfit: OutfitRecommendation;
}

const OutfitSuggestion = ({ outfit }: OutfitSuggestionProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <CardHeader className="pb-0">
        <CardTitle className="text-lg">{outfit.style}</CardTitle>
      </CardHeader>
      <CardContent className="p-0 flex-grow">
        {outfit.imageUrls && outfit.imageUrls.length > 0 ? (
          <Carousel className="w-full">
            <CarouselContent>
              {outfit.imageUrls.map((imageUrl, index) => (
                <CarouselItem key={index} className="basis-full">
                  <div className="relative w-full h-44 overflow-hidden">
                    <img 
                      src={imageUrl} 
                      alt={`${outfit.style} example ${index + 1}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="absolute inset-0 flex items-center justify-between p-1 z-10 pointer-events-none">
              <CarouselPrevious className="pointer-events-auto h-7 w-7 opacity-70 hover:opacity-100 bg-black/30 text-white shadow-sm ml-1" />
              <CarouselNext className="pointer-events-auto h-7 w-7 opacity-70 hover:opacity-100 bg-black/30 text-white shadow-sm mr-1" />
            </div>
          </Carousel>
        ) : outfit.imageUrl ? (
          <div className="relative w-full h-44 overflow-hidden mb-2">
            <img 
              src={outfit.imageUrl} 
              alt={outfit.style} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : null}
      </CardContent>
      <CardFooter className="bg-gradient-to-b from-transparent to-fashion-beige/10 text-sm">
        <p>{outfit.description}</p>
      </CardFooter>
    </Card>
  );
};

export default OutfitSuggestion;
