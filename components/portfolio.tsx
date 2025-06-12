import { motion } from 'framer-motion';
/* eslint-disable @next/next/no-img-element */
import { ChevronRight } from 'lucide-react';

const portfolio = [
  {
    title: "E-commerce + Chatbot IA",
    tech: "Next.js, Stripe, OpenAI",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
    demo: "#"
  },
  {
    title: "SaaS Analytics",
    tech: "React, TensorFlow.js, D3.js",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
    demo: "#"
  },
  {
    title: "Site Vitrine Premium",
    tech: "Next.js, Tailwind, Framer Motion",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop",
    demo: "#"
  }
];


// ... (votre tableau portfolio reste identique)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Réalisations</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Découvrez quelques-uns de nos projets récents
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {portfolio.map((project, index) => (
            <motion.div 
              key={index} 
              className="bg-background/50 rounded-xl overflow-hidden border border-border/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="aspect-video bg-gradient-to-br from-muted to-muted/50 relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.tech}</p>
                <button className="text-primary hover:text-primary/80 font-medium flex items-center space-x-2">
                  <span>Voir la démo</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;