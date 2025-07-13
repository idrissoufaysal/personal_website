// src/components/contact.jsx
/* eslint-disable react/no-unescaped-entities */
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';
import { motion } from 'framer-motion';

// Variantes pour les conteneurs qui ont des enfants à animer en décalé
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Léger décalage entre chaque enfant
    },
  },
};

// Variante pour les éléments individuels (fade in + slide up)
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }} // L'animation se déclenche quand 20% est visible
          variants={containerVariants}
        >
          <motion.div className="text-center mb-16" variants={itemVariants}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Contactez-Nous
            </h2>
            <p className="text-xl text-muted-foreground">
              Démarrons votre projet dès aujourd'hui
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Colonne du formulaire */}
            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">Envoyez-nous un message</motion.h3>
              <motion.div variants={containerVariants} className="space-y-6">
                
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">Nom *</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 transition-all duration-200"
                    placeholder="Votre nom"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">Email *</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 transition-all duration-200"
                    placeholder="votre@email.com"
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">Projet</label>
                  <select className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 transition-all duration-200">
                    <option>Site vitrine</option>
                    <option>E-commerce</option>
                    <option>SaaS</option>
                    <option>Intégration IA</option>
                    <option>Autre</option>
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 border border-border/50 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent bg-background/50 transition-all duration-200"
                    placeholder="Décrivez votre projet..."
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <motion.button 
                    className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Envoyer le message
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
            
            {/* Colonne des informations */}
            <motion.div variants={containerVariants}>
              <motion.h3 variants={itemVariants} className="text-2xl font-semibold mb-6">Informations de contact</motion.h3>
              <motion.div variants={containerVariants} className="space-y-6">
                
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <a href="mailto:contact@webai-solutions.com" className="text-muted-foreground hover:text-primary transition-colors">contact@webai-solutions.com</a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Téléphone</p>
                    <a href="tel:+228 79788961" className="text-muted-foreground hover:text-primary transition-colors">+33 1 23 45 67 89</a>
                  </div>
                </motion.div>
                
                <motion.div variants={itemVariants} className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-medium">Localisation</p>
                    <p className="text-muted-foreground">Togo, Lomé</p>
                  </div>
                </motion.div>
              </motion.div>
              
              <motion.div variants={containerVariants} className="mt-10">
                <motion.p variants={itemVariants} className="font-medium mb-4">Suivez-nous</motion.p>
                <motion.div variants={containerVariants} className="flex space-x-4">
                  
                  <motion.a href="#" variants={itemVariants} whileHover={{ y: -3, scale: 1.1 }} className="w-10 h-10 bg-muted text-muted-foreground rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </motion.a>
                  <motion.a href="#" variants={itemVariants} whileHover={{ y: -3, scale: 1.1 }} className="w-10 h-10 bg-muted text-muted-foreground rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Twitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a href="#" variants={itemVariants} whileHover={{ y: -3, scale: 1.1 }} className="w-10 h-10 bg-muted text-muted-foreground rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors">
                    <Github className="w-5 h-5" />
                  </motion.a>
                  
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;