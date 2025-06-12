// src/components/header.jsx
import { useState, useEffect } from 'react';
import { Brain, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemVariants = {
    hover: { y: -3, transition: { duration: 0.2 } }
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      hasScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <motion.a href="#accueil" className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
              <Brain className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              WebAI Solutions
            </span>
          </motion.a>
          
          <nav className="hidden md:flex items-center space-x-8">
            {['Accueil', 'Services', 'Expertise IA', 'Portfolio'].map((item) => (
              <motion.a 
                key={item}
                href={`#${item.toLowerCase().replace(' ', '')}`} 
                className="text-muted-foreground hover:text-foreground transition-colors"
                variants={navItemVariants}
                whileHover="hover"
              >
                {item}
              </motion.a>
            ))}
            <motion.a 
              href="#contact" 
              className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.a>
          </nav>

          <button className="md:hidden z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden bg-background/95 backdrop-blur-lg absolute top-0 left-0 w-full pt-20 pb-8 border-b border-border"
          >
            <nav className="container mx-auto px-4 flex flex-col items-center space-y-6">
              <a onClick={() => setIsMenuOpen(false)} href="#accueil" className="text-muted-foreground hover:text-foreground transition-colors text-lg">Accueil</a>
              <a onClick={() => setIsMenuOpen(false)} href="#services" className="text-muted-foreground hover:text-foreground transition-colors text-lg">Services</a>
              <a onClick={() => setIsMenuOpen(false)} href="#expertise" className="text-muted-foreground hover:text-foreground transition-colors text-lg">Expertise IA</a>
              <a onClick={() => setIsMenuOpen(false)} href="#portfolio" className="text-muted-foreground hover:text-foreground transition-colors text-lg">Portfolio</a>
              <a onClick={() => setIsMenuOpen(false)} href="#contact" className="bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors text-center w-full max-w-xs">
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;