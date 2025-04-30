
import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-8 px-6 md:px-10 mt-12 border-t">
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-lg font-serif font-bold">Style<span className="text-fashion-mauve">Sensei</span></h2>
            <p className="text-sm text-muted-foreground mt-1">Personalized style recommendations based on your unique features</p>
          </div>
          <div className="flex flex-col md:flex-row gap-4 md:gap-8">
            <a href="#" className="text-sm hover:text-fashion-mauve transition-colors text-center md:text-left">Privacy Policy</a>
            <a href="#" className="text-sm hover:text-fashion-mauve transition-colors text-center md:text-left">Terms of Service</a>
            <a href="#" className="text-sm hover:text-fashion-mauve transition-colors text-center md:text-left">Contact</a>
          </div>
        </div>
        <div className="text-center mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} StyleSensei. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
