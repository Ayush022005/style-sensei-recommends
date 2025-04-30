
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container max-w-6xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                  Discover Your <span className="text-fashion-mauve">Perfect Style</span> With AI
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                  Upload your photo and get personalized fashion recommendations based on your unique features, complexion, and body type.
                </p>
                <Button 
                  className="bg-fashion-mauve hover:bg-fashion-mauve/90 text-white px-8 py-6 text-lg rounded-md"
                  onClick={() => navigate('/upload')}
                >
                  Get Styled Now
                </Button>
              </div>
              <div className="md:w-1/2 relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3" 
                    alt="Woman getting styled" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute top-8 -right-4 w-64 h-64 bg-fashion-sage/20 rounded-full -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-fashion-mauve/20 rounded-full -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-fashion-beige/20 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center mb-12">What StyleSensei Recommends</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-mauve/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-mauve">
                    <circle cx="12" cy="12" r="10"/>
                    <circle cx="12" cy="10" r="3"/>
                    <path d="M7 16.3c0-1 .6-1.9 1.5-2.3a7.8 7.8 0 0 1 7 0c.9.4 1.5 1.3 1.5 2.3"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Color Palette</h3>
                <p className="text-muted-foreground">
                  Discover the colors that complement your skin tone and make you look vibrant and healthy.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-sage/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-sage">
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z"/>
                    <path d="m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9"/>
                    <path d="M12 3v6"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Outfit Ideas</h3>
                <p className="text-muted-foreground">
                  Get personalized outfit suggestions that flatter your body type, including Indian, Western, and fusion styles.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-taupe/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-taupe">
                    <path d="m9 11-6 6v3h9l3-3"/>
                    <path d="m17 5-1-1-2 2 3 3 2-2-1-1"/>
                    <path d="M2 2h2v2H2z"/>
                    <path d="M3 10a7 7 0 0 1 7-7"/>
                    <path d="M15 15a7 7 0 0 1-7 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Jewelry Picks</h3>
                <p className="text-muted-foreground">
                  Learn which jewelry styles complement your face shape, from earrings to necklaces and more.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-slate/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-slate">
                    <path d="M6.5 15.5a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"/>
                    <path d="M6.5 3C10 3 12 3 15.5 3c2.4 0 4 1.6 4 4s-1.6 4-4 4"/>
                    <path d="M3 7.5c0-2.4 1.6-4 4-4"/>
                    <path d="m13 13-2 2 4 4"/>
                    <path d="m13 19 4-4"/>
                    <path d="M8.5 11.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Fabric & Cut</h3>
                <p className="text-muted-foreground">
                  Find fabrics and silhouettes that drape perfectly on your body type for maximum flattery.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-mauve/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-mauve">
                    <path d="M12 8.66a3.5 3.5 0 1 0 6 2.48"/>
                    <path d="M18 17.13h.01"/>
                    <path d="m9 15 3-2"/>
                    <path d="M9.4 10.6a4.5 4.5 0 0 0 0 6.4 4.5 4.5 0 0 1 6.4 0 4.5 4.5 0 0 0 0-6.4 4.5 4.5 0 0 1-6.4 0"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Style Guidance</h3>
                <p className="text-muted-foreground">
                  Get clear advice on what styles to embrace and which ones to avoid for your unique features.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
                <div className="w-12 h-12 rounded-full bg-fashion-sage/20 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-fashion-sage">
                    <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z"/>
                    <path d="M7 7h.01"/>
                  </svg>
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">Save & Share</h3>
                <p className="text-muted-foreground">
                  Save your recommendations for future reference or share them with friends and stylists.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Testimonials Section */}
        <section className="py-16 px-4">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-3xl font-serif font-medium text-center mb-4">What Users Say</h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              Discover how StyleSensei has helped others transform their fashion choices
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 text-fashion-mauve text-5xl">"</div>
                <p className="mb-4 pt-4 italic text-muted-foreground">
                  I've always struggled with choosing colors that suit me. StyleSensei recommended a palette that completely changed how I shop for clothes!
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-fashion-mauve/30 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Priya S.</p>
                    <p className="text-xs text-muted-foreground">Mumbai</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 text-fashion-sage text-5xl">"</div>
                <p className="mb-4 pt-4 italic text-muted-foreground">
                  The jewelry recommendations were spot-on! I never realized certain earring styles complemented my face shape better than others.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-fashion-sage/30 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Amit K.</p>
                    <p className="text-xs text-muted-foreground">New Delhi</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                <div className="absolute -top-4 left-6 text-fashion-taupe text-5xl">"</div>
                <p className="mb-4 pt-4 italic text-muted-foreground">
                  As someone who loves both Western and Indian fashion, the fusion outfit ideas were exactly what I needed for my wardrobe refresh.
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-fashion-taupe/30 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">Nisha R.</p>
                    <p className="text-xs text-muted-foreground">Bangalore</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-fashion-mauve/20 to-fashion-sage/20">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-medium mb-6">Ready to Transform Your Style?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get personalized fashion recommendations based on your unique features in just a few minutes.
            </p>
            <Button 
              className="bg-fashion-mauve hover:bg-fashion-mauve/90 text-white px-8 py-6 text-lg rounded-md"
              onClick={() => navigate('/upload')}
            >
              Upload Your Photo
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
