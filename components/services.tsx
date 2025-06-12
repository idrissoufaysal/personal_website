import { motion } from 'framer-motion';
import { Globe, Bot, Cpu, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Sites Web Performants",
    description: "Sites vitrines, e-commerce et SaaS optimisés pour la conversion et le SEO",
    benefits: "Augmentez vos conversions de 30%",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: <Bot className="w-8 h-8" />,
    title: "IA Intégrée",
    description: "Chatbots intelligents, personnalisation et analyse de données en temps réel",
    benefits: "Réduisez vos coûts support de 50%",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: <Cpu className="w-8 h-8" />,
    title: "Automatisation IA",
    description: "Solutions sur mesure pour automatiser vos processus métier",
    benefits: "Gagnez 20h/semaine d'automatisation",
    color: "from-orange-500 to-red-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Délai entre l'animation de chaque enfant
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5 },
  },
};

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Nos Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Des solutions complètes pour digitaliser et optimiser votre business
          </p>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // L'animation se déclenche quand 20% de la section est visible
        >
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-background/50 p-8 rounded-xl border border-border/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group"
              variants={itemVariants}
            >
              <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${service.color} text-white mb-6`}>
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground mb-4 h-20">{service.description}</p>
              <div className="inline-flex items-center space-x-2 text-sm text-accent-foreground bg-accent/80 px-3 py-1 rounded-full">
                <CheckCircle className="w-4 h-4" />
                <span>{service.benefits}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;