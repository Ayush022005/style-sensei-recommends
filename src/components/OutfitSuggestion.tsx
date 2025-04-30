
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
        {outfit.imageUrl && (
          <div className="relative w-full h-44 overflow-hidden mb-2">
            <img 
              src={outfit.imageUrl} 
              alt={outfit.style} 
              className="w-full h-full object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-gradient-to-b from-transparent to-fashion-beige/10 text-sm">
        <p>{outfit.description}</p>
      </CardFooter>
    </Card>
  );
};

export default OutfitSuggestion;
