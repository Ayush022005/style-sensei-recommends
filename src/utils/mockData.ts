
import { StyleProfile } from "../types";

export const getMockStyleProfile = (): StyleProfile => {
  return {
    colorRecommendations: {
      bestColors: ["Deep Burgundy", "Forest Green", "Navy Blue", "Plum", "Emerald"],
      avoidColors: ["Orange-Red", "Bright Yellow", "Neon Green"],
      neutrals: ["Soft White", "Charcoal Gray", "Chocolate Brown"],
      seasonalPalette: "autumn"
    },
    outfitRecommendations: [
      {
        style: "Modern Ethnic",
        description: "Contemporary silhouettes with traditional embellishments. Think minimalist anarkalis, structured kurtas with asymmetrical hemlines, or fusion sarees with modern blouse designs.",
        imageUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        style: "Business Casual",
        description: "Tailored blazers in deep jewel tones paired with neutral trousers or midi skirts. Add structure with belted pieces that enhance your natural shape.",
        imageUrl: "https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        style: "Elegant Evening",
        description: "Wrap dresses or gowns in plum or burgundy that create definition at the waist. Opt for V-necks or sweetheart necklines to elongate your frame.",
        imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ],
    jewelryRecommendations: {
      faceShape: "oval",
      recommendations: [
        {
          type: "Earrings",
          description: "With your balanced oval face shape, you can wear virtually any style of earrings. For maximum impact, try statement chandeliers or geometric danglers that highlight your cheekbones."
        },
        {
          type: "Necklaces",
          description: "Opt for V-shaped pendants or layered chains that complement your face's natural proportions. Chokers and princess-length necklaces will also frame your face beautifully."
        },
        {
          type: "Facial Jewelry",
          description: "If you're interested in nose rings or studs, delicate designs in gold or with minimal gemstones will enhance your features without overwhelming them."
        }
      ]
    },
    fabricRecommendations: {
      bodyType: "hourglass",
      fabrics: [
        {
          name: "Silk",
          description: "Drapes beautifully over curves while maintaining structure."
        },
        {
          name: "Cotton Blends",
          description: "Offers comfort while providing enough structure to highlight your proportions."
        },
        {
          name: "Medium-weight Knits",
          description: "Conforms to your shape without clinging too tightly."
        }
      ],
      cuts: [
        {
          name: "Wrap Styles",
          description: "Enhances your waistline and creates a balanced silhouette."
        },
        {
          name: "Fitted Bodices",
          description: "Highlights your narrow waist while accommodating your bust."
        },
        {
          name: "A-line",
          description: "Skims over hips while maintaining the definition of your waist."
        }
      ]
    }
  };
};
