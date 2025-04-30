
import { StyleProfile } from "../types";

export const getMockStyleProfile = (): StyleProfile => {
  // For demo purposes, this would normally be based on the analyzed user image
  const detectedGender = "male";
  
  return {
    gender: detectedGender,
    colorRecommendations: {
      bestColors: ["Deep Burgundy", "Forest Green", "Navy Blue", "Plum", "Emerald"],
      avoidColors: ["Orange-Red", "Bright Yellow", "Neon Green"],
      neutrals: ["Soft White", "Charcoal Gray", "Chocolate Brown"],
      seasonalPalette: "autumn",
      outfitExamples: [
        {
          imageUrl: "public/lovable-uploads/d298a7e5-fb50-4124-b4fe-11f9de3873ba.png",
          description: "Navy blue blazer paired with charcoal gray pants and white shirt"
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          description: "Emerald green sweater with chocolate brown chinos"
        },
        {
          imageUrl: "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          description: "Burgundy turtleneck with charcoal gray woolen coat"
        }
      ]
    },
    outfitRecommendations: detectedGender === "male" ? [
      {
        style: "Modern Business",
        gender: "male",
        description: "Tailored navy blazer paired with forest green or burgundy accessories. Structured silhouettes with clean lines enhance your autumn palette.",
        imageUrls: [
          "public/lovable-uploads/d298a7e5-fb50-4124-b4fe-11f9de3873ba.png",
          "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ]
      },
      {
        style: "Smart Casual",
        gender: "male",
        description: "Deep burgundy or emerald knits paired with neutral trousers. Layer with a structured jacket in chocolate brown or charcoal for added sophistication.",
        imageUrls: [
          "https://images.unsplash.com/photo-1617137968427-85924c800a22?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          "https://images.unsplash.com/photo-1621072156002-e2fccdc0b176?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          "https://images.unsplash.com/photo-1552374196-1ab2a1c593e8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ]
      },
      {
        style: "Evening Sophistication",
        gender: "male",
        description: "Rich navy or plum dress shirt paired with tailored dark trousers. Add a textured tie in one of your best colors to complete the refined look.",
        imageUrls: [
          "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          "https://images.unsplash.com/photo-1611937663641-5cef5189d71b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
          "https://images.unsplash.com/photo-1617127365659-c47fa864d8bc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
        ]
      }
    ] : [
      {
        style: "Modern Ethnic",
        gender: "female",
        description: "Contemporary silhouettes with traditional embellishments. Think minimalist anarkalis, structured kurtas with asymmetrical hemlines, or fusion sarees with modern blouse designs.",
        imageUrl: "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        style: "Business Casual",
        gender: "female",
        description: "Tailored blazers in deep jewel tones paired with neutral trousers or midi skirts. Add structure with belted pieces that enhance your natural shape.",
        imageUrl: "https://images.unsplash.com/photo-1632573801508-4ede5a46c4d8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      },
      {
        style: "Elegant Evening",
        gender: "female",
        description: "Wrap dresses or gowns in plum or burgundy that create definition at the waist. Opt for V-necks or sweetheart necklines to elongate your frame.",
        imageUrl: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
      }
    ],
    jewelryRecommendations: {
      faceShape: "oval",
      recommendations: [
        {
          type: "Earrings",
          description: detectedGender === "male" ?
            "For your oval face shape, structured stud earrings or small hoops in metals that complement your autumn palette like brushed gold or oxidized silver would enhance your features." :
            "With your balanced oval face shape, you can wear virtually any style of earrings. For maximum impact, try statement chandeliers or geometric danglers that highlight your cheekbones."
        },
        {
          type: "Necklaces",
          description: detectedGender === "male" ?
            "Opt for mid-length chains with subtle pendants in geometric shapes. Materials like leather, wood, or burnished metals in your autumn palette will complement your overall style." :
            "Opt for V-shaped pendants or layered chains that complement your face's natural proportions. Chokers and princess-length necklaces will also frame your face beautifully."
        },
        {
          type: detectedGender === "male" ? "Wrist Accessories" : "Facial Jewelry",
          description: detectedGender === "male" ?
            "Leather bracelets or metal cuffs in your neutral tones make excellent wrist accessories. Consider watches with burgundy, navy, or forest green accents for a coordinated look." :
            "If you're interested in nose rings or studs, delicate designs in gold or with minimal gemstones will enhance your features without overwhelming them."
        }
      ]
    },
    fabricRecommendations: {
      bodyType: detectedGender === "male" ? "athletic" : "hourglass",
      fabrics: [
        {
          name: detectedGender === "male" ? "Cotton Blends" : "Silk",
          description: detectedGender === "male" ? 
            "Breathable yet structured enough to highlight your frame." : 
            "Drapes beautifully over curves while maintaining structure."
        },
        {
          name: detectedGender === "male" ? "Wool" : "Cotton Blends",
          description: detectedGender === "male" ? 
            "Adds subtle texture while maintaining clean lines." : 
            "Offers comfort while providing enough structure to highlight your proportions."
        },
        {
          name: detectedGender === "male" ? "Twill" : "Medium-weight Knits",
          description: detectedGender === "male" ? 
            "Durable with a subtle texture that adds visual interest." : 
            "Conforms to your shape without clinging too tightly."
        }
      ],
      cuts: [
        {
          name: detectedGender === "male" ? "Structured Shoulders" : "Wrap Styles",
          description: detectedGender === "male" ? 
            "Emphasizes your shoulders for a balanced silhouette." : 
            "Enhances your waistline and creates a balanced silhouette."
        },
        {
          name: detectedGender === "male" ? "Tapered Fit" : "Fitted Bodices",
          description: detectedGender === "male" ? 
            "Creates definition without restricting movement." : 
            "Highlights your narrow waist while accommodating your bust."
        },
        {
          name: detectedGender === "male" ? "Classic Straight" : "A-line",
          description: detectedGender === "male" ? 
            "Clean lines that complement your frame without excess fabric." : 
            "Skims over hips while maintaining the definition of your waist."
        }
      ]
    }
  };
};
