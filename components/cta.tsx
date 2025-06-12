/* eslint-disable react/no-unescaped-entities */
const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-accent-foreground text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Prêt à Révolutionner Votre Business ?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Discutons de votre projet et découvrons ensemble comment l'IA peut transformer votre entreprise.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-white/90 transition-all duration-300 transform hover:scale-105 font-semibold">
            Obtenir un site ultra-rapide
          </button>
          <button className="border border-white/30 text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
            Discutons de votre projet IA
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA; 