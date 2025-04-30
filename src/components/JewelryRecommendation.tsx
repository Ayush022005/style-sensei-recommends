
import React from 'react';
import { JewelryRecommendation as JewelryRecommendationType } from '@/types';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface JewelryRecommendationProps {
  jewelry: JewelryRecommendationType;
}

const JewelryRecommendation = ({ jewelry }: JewelryRecommendationProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Jewelry Recommendations</CardTitle>
        <CardDescription>
          Based on your {jewelry.faceShape} face shape
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {jewelry.recommendations.map((rec, index) => (
            <React.Fragment key={index}>
              {index > 0 && <Separator className="my-3" />}
              <div>
                <h4 className="font-medium mb-2">{rec.type}</h4>
                <p className="text-sm">{rec.description}</p>
              </div>
            </React.Fragment>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default JewelryRecommendation;
