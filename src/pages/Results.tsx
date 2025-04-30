
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LoadingAnalysis from '@/components/LoadingAnalysis';
import ColorPalette from '@/components/ColorPalette';
import OutfitSuggestion from '@/components/OutfitSuggestion';
import JewelryRecommendation from '@/components/JewelryRecommendation';
import ShareResults from '@/components/ShareResults';
import { StyleProfile } from '@/types';
import { getMockStyleProfile } from '@/utils/mockData';
import { Button } from '@/components/ui/button';

const Results = () => {
  const [loading, setLoading] = useState(true);
  const [styleProfile, setStyleProfile] = useState<StyleProfile | null>(null);
  
  useEffect(() => {
    // In a real app, we would fetch the results from an API
    // For now, we'll use mock data and simulate loading
    const timer = setTimeout(() => {
      const profile = getMockStyleProfile();
      setStyleProfile(profile);
      setLoading(false);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <LoadingAnalysis />
        </main>
        <Footer />
      </div>
    );
  }
  
  if (!styleProfile) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow py-10 px-4 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-serif font-medium mb-4">Something went wrong</h2>
            <p className="text-muted-foreground mb-6">We couldn't analyze your photo. Please try again.</p>
            <Button 
              onClick={() => window.location.href = '/upload'}
              className="bg-fashion-mauve hover:bg-fashion-mauve/90"
            >
              Try Again
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 px-4 md:px-6 results-gradient">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center animate-fade-in">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Your Personalized Style Profile</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Based on your unique features, here are our recommendations to enhance your natural beauty
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 space-y-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <ColorPalette colorRecommendation={styleProfile.colorRecommendations} />
              
              <div>
                <h3 className="text-xl font-serif font-medium mb-4">Fabric & Cut Recommendations</h3>
                <div className="bg-white p-6 rounded-lg shadow-sm border">
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">For Your {styleProfile.fabricRecommendations.bodyType} Body Type</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="text-sm font-medium mb-3 text-fashion-mauve">Best Fabrics</h5>
                      <ul className="space-y-3">
                        {styleProfile.fabricRecommendations.fabrics.map((fabric, index) => (
                          <li key={index} className="text-sm">
                            <span className="font-medium">{fabric.name}:</span> {fabric.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium mb-3 text-fashion-sage">Flattering Cuts</h5>
                      <ul className="space-y-3">
                        {styleProfile.fabricRecommendations.cuts.map((cut, index) => (
                          <li key={index} className="text-sm">
                            <span className="font-medium">{cut.name}:</span> {cut.description}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <JewelryRecommendation jewelry={styleProfile.jewelryRecommendations} />
            </div>
          </div>
          
          <div className="mb-8 animate-fade-in" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl font-serif font-medium mb-4">Outfit Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {styleProfile.outfitRecommendations.map((outfit, index) => (
                <OutfitSuggestion key={index} outfit={outfit} />
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: "0.8s" }}>
            <ShareResults />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Results;
