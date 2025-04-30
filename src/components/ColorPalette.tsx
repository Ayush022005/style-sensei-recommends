
import React from 'react';
import { ColorRecommendation } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from '@/components/ui/separator';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface ColorPaletteProps {
  colorRecommendation: ColorRecommendation;
}

const ColorPalette = ({ colorRecommendation }: ColorPaletteProps) => {
  const colorMap: Record<string, string> = {
    // Best colors
    "Deep Burgundy": "#800020",
    "Forest Green": "#228B22",
    "Navy Blue": "#000080",
    "Plum": "#8E4585",
    "Emerald": "#50C878",
    
    // Avoid colors
    "Orange-Red": "#FF4500",
    "Bright Yellow": "#FFFF00",
    "Neon Green": "#39FF14",
    
    // Neutrals
    "Soft White": "#F5F5F5",
    "Charcoal Gray": "#36454F",
    "Chocolate Brown": "#7B3F00",
  };
  
  return (
    <Card className="overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-fashion-beige/20 to-fashion-sage/10">
        <CardTitle className="text-xl">Your Color Palette</CardTitle>
        <CardDescription>
          Based on your {colorRecommendation.seasonalPalette.charAt(0).toUpperCase() + colorRecommendation.seasonalPalette.slice(1)} seasonal color profile
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-6">
        <div className="space-y-6">
          <div>
            <h4 className="font-medium mb-3">Colors That Flatter You</h4>
            <div className="grid grid-cols-5 gap-2">
              {colorRecommendation.bestColors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-full shadow-inner border"
                    style={{ backgroundColor: colorMap[color] || color }}
                  />
                  <span className="text-xs mt-1 text-center">{color}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Neutral Foundations</h4>
            <div className="grid grid-cols-3 gap-4">
              {colorRecommendation.neutrals.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-16 h-8 rounded shadow-inner border"
                    style={{ backgroundColor: colorMap[color] || color }}
                  />
                  <span className="text-xs mt-1">{color}</span>
                </div>
              ))}
            </div>
          </div>
          
          <Separator />
          
          <div>
            <h4 className="font-medium mb-3">Colors To Avoid</h4>
            <div className="grid grid-cols-3 gap-4">
              {colorRecommendation.avoidColors.map((color, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div 
                    className="w-12 h-12 rounded-full shadow-inner border relative"
                    style={{ backgroundColor: colorMap[color] || color }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-full h-0.5 bg-white/70 rotate-45 transform origin-center"></div>
                      <div className="w-full h-0.5 bg-white/70 -rotate-45 transform origin-center"></div>
                    </div>
                  </div>
                  <span className="text-xs mt-1">{color}</span>
                </div>
              ))}
            </div>
          </div>
          
          {colorRecommendation.outfitExamples && colorRecommendation.outfitExamples.length > 0 && (
            <>
              <Separator />
              
              <div>
                <h4 className="font-medium mb-3">Outfit Color Combinations</h4>
                <Carousel className="w-full">
                  <CarouselContent>
                    {colorRecommendation.outfitExamples.map((example, index) => (
                      <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                        <div className="p-1">
                          <div className="bg-white rounded-lg overflow-hidden shadow-sm">
                            <div className="aspect-[4/3] w-full relative">
                              <img 
                                src={example.imageUrl} 
                                alt={`Color combination example ${index + 1}`} 
                                className="object-cover w-full h-full"
                              />
                            </div>
                            <div className="p-3 text-xs text-center">
                              {example.description}
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute inset-0 flex items-center justify-between p-1 z-10 pointer-events-none">
                    <CarouselPrevious className="pointer-events-auto h-7 w-7 opacity-70 hover:opacity-100 bg-black/30 text-white shadow-sm ml-1" />
                    <CarouselNext className="pointer-events-auto h-7 w-7 opacity-70 hover:opacity-100 bg-black/30 text-white shadow-sm mr-1" />
                  </div>
                </Carousel>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ColorPalette;
