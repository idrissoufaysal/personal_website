// src/app/page.js
/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react';
import Footer from '@/components/footer';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Services from '@/components/services';
import WhyChooseUs from '@/components/why-choose-us';
import Portfolio from '@/components/portfolio';
import AIExpertise from '@/components/ai-expertise';
import CTA from '@/components/cta';
import Contact from '@/components/contact';

const WebAIShowcase = () => {
  return (
    // La couleur de fond est maintenant gérée par le CSS global
    // On peut mettre bg-transparent ou simplement l'enlever
    <div className="min-h-screen text-foreground font-sans relative z-10">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Portfolio />
        <AIExpertise />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default WebAIShowcase;