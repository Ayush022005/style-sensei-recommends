
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="w-full py-4 px-6 md:px-10 flex items-center justify-between border-b">
      <div className="flex items-center">
        <h1 
          className="text-xl md:text-2xl font-serif font-bold cursor-pointer" 
          onClick={() => navigate('/')}
        >
          Style<span className="text-fashion-mauve">Sensei</span>
        </h1>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#" className="text-sm hover:text-fashion-mauve transition-colors">How It Works</a>
        <a href="#" className="text-sm hover:text-fashion-mauve transition-colors">About</a>
        <Button 
          variant="outline" 
          className="border-fashion-mauve text-fashion-mauve hover:bg-fashion-mauve hover:text-white transition-all"
          onClick={() => navigate('/upload')}
        >
          Get Styled
        </Button>
      </nav>
      <Button 
        variant="ghost" 
        className="md:hidden text-fashion-mauve"
        onClick={() => navigate('/upload')}
      >
        Get Styled
      </Button>
    </header>
  );
};

export default Header;
