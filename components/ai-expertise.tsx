/* eslint-disable react/no-unescaped-entities */
import { Brain, Bot, Zap } from 'lucide-react';

const AIExpertise = () => {
  return (
    <section id="expertise" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-8">
            <Brain className="w-4 h-4" />
            <span>Intelligence Artificielle</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Nous Transformons Vos Données en{' '}
            <span className="bg-gradient-to-r from-primary to-accent-foreground bg-clip-text text-transparent">
              Outils Intelligents
            </span>
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            L'IA n'est plus réservée aux grandes entreprises. Nous démocratisons ces technologies 
            pour les rendre accessibles et rentables pour votre business.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-muted/30 p-6 rounded-xl">
              <Bot className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Chatbots Intelligents</h3>
              <p className="text-muted-foreground">
                Répondent aux FAQs, qualifient vos prospects et réduisent la charge de votre équipe support 24h/24.
              </p>
            </div>
            
            <div className="bg-muted/30 p-6 rounded-xl">
              <Zap className="w-8 h-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-3">Analyse Prédictive</h3>
              <p className="text-muted-foreground">
                Anticipez les tendances, optimisez vos stocks et personnalisez l'expérience client en temps réel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise; 