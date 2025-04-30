
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import UploadSection from '@/components/UploadSection';

const Upload = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-10 px-4 md:px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-3xl md:text-4xl font-serif font-medium mb-4">Discover Your Personal Style</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Upload a photo to receive AI-powered recommendations tailored to your unique features
            </p>
          </div>
          
          <UploadSection />
          
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-xl font-serif font-medium text-center mb-6">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fashion-mauve/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium text-fashion-mauve">1</span>
                </div>
                <h4 className="font-medium mb-2">Upload Your Photo</h4>
                <p className="text-sm text-muted-foreground">
                  Choose a well-lit, front-facing photo showing your face and upper body
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fashion-sage/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium text-fashion-sage">2</span>
                </div>
                <h4 className="font-medium mb-2">AI Analysis</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI analyzes your facial features, coloring, and proportions
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-fashion-taupe/20 flex items-center justify-center mx-auto mb-3">
                  <span className="font-medium text-fashion-taupe">3</span>
                </div>
                <h4 className="font-medium mb-2">Get Recommendations</h4>
                <p className="text-sm text-muted-foreground">
                  Receive personalized color, style, and accessory recommendations
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Upload;
