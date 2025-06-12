// src/components/hero.jsx
/* eslint-disable react/no-unescaped-entities */
import { Zap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="accueil" className="pt-32 pb-16 min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-muted text-muted-foreground px-4 py-2 rounded-full text-sm mb-8"
          >
            <Zap className="w-4 h-4 text-primary" />
            <span>Solutions Web & IA Sur Mesure</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
          >
            Boostez Votre Business avec des{' '}
            <span className="bg-gradient-to-r from-primary via-accent-foreground to-accent bg-clip-text text-transparent">
              Solutions Web & IA
            </span>{' '}
            Innovantes
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-xl text-muted-foreground mb-10 max-w-3xl mx-auto"
          >
            Transformez votre présence digitale avec des sites web performants et des solutions d'IA intelligentes. 
            Spécialement conçu pour les TPE, PME et startups ambitieuses.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(120, 119, 198, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-primary-foreground px-8 py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
            >
              <span>Voir nos réalisations</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "hsl(var(--muted))" }}
              whileTap={{ scale: 0.95 }}
              className="border border-border text-foreground px-8 py-4 rounded-lg transition-all duration-300 font-semibold"
            >
              Demander un devis
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;