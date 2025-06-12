import { Code, Clock, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const whyChooseUs = [
  {
    icon: <Code className="w-6 h-6" />,
    title: "Développeur Full-Stack + Expert IA",
    description: "Maîtrise complète du développement web moderne et des technologies d'IA"
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Livraison Rapide",
    description: "Mise en ligne en 2-4 semaines selon la complexité du projet"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Support Personnalisé",
    description: "Accompagnement dédié et formation de vos équipes"
  }
];


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

const WhyChooseUs = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Pourquoi Nous Choisir ?</h2>
        </div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {whyChooseUs.map((reason, index) => (
            <motion.div key={index} className="text-center p-6 rounded-lg" variants={itemVariants}>
              <div className="inline-flex p-4 bg-primary/10 text-primary rounded-full mb-6">
                {reason.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{reason.title}</h3>
              <p className="text-muted-foreground">{reason.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;