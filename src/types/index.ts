
export interface ColorRecommendation {
  bestColors: string[];
  avoidColors: string[];
  neutrals: string[];
  seasonalPalette: "spring" | "summer" | "autumn" | "winter";
  outfitExamples?: { imageUrl: string; description: string }[];
}

export interface OutfitRecommendation {
  style: string;
  description: string;
  imageUrl?: string;
  imageUrls?: string[]; // Multiple images
  gender: "male" | "female" | "unisex";
}

export interface JewelryRecommendation {
  faceShape: string;
  recommendations: {
    type: string;
    description: string;
    imageUrl?: string;
  }[];
}

export interface FabricRecommendation {
  bodyType: string;
  fabrics: {
    name: string;
    description: string;
  }[];
  cuts: {
    name: string;
    description: string;
  }[];
}

export interface StyleProfile {
  colorRecommendations: ColorRecommendation;
  outfitRecommendations: OutfitRecommendation[];
  jewelryRecommendations: JewelryRecommendation;
  fabricRecommendations: FabricRecommendation;
  gender: "male" | "female" | "other";
}
