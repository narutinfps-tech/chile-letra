/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatYouGet from './components/WhatYouGet';
import WhyChoose from './components/WhyChoose';
import Bonuses from './components/Bonuses';
import Pricing from './components/Pricing';
import InsidePreview from './components/InsidePreview';
import Testimonials from './components/Testimonials';
import Guarantee from './components/Guarantee';
import Faq from './components/Faq';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';
import LegalModal from './components/LegalModal';
import CheckoutModal from './components/CheckoutModal';

export default function App() {
  // Image modal state for inspecting worksheets
  const [activeImage, setActiveImage] = useState<{ src: string; title: string } | null>(null);

  // Legal modal state (terms, privacy, contact)
  const [legalModalType, setLegalModalType] = useState<'terms' | 'privacy' | 'contact' | null>(null);

  // Checkout modal state (basic or premium)
  const [selectedPlan, setSelectedPlan] = useState<"basico" | "premium" | null>(null);

  const handleOpenImage = (src: string, title: string) => {
    setActiveImage({ src, title });
  };

  const handleCloseImage = () => {
    setActiveImage(null);
  };

  const handleOpenLegal = (type: 'terms' | 'privacy' | 'contact') => {
    setLegalModalType(type);
  };

  const handleCloseLegal = () => {
    setLegalModalType(null);
  };

  const handleSelectPlan = (plan: "basico" | "premium") => {
    setSelectedPlan(plan);
  };

  const handleCloseCheckout = () => {
    setSelectedPlan(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#24344D]">
      {/* Top Bar Navigation */}
      <Header />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* SECCIÓN 1 — HERO / PRIMEIRA DOBRA */}
        <Hero onOpenImageModal={handleOpenImage} />

        {/* SECCIÓN 2 — ¿QUÉ VAS A RECIBIR? */}
        <WhatYouGet />

        {/* SECCIÓN 3 — ¿POR QUÉ ELEGIR NUESTRO MATERIAL? */}
        <WhyChoose />

        {/* SECCIÓN 4 — TRES BONOS ESPECIALES */}
        <Bonuses onOpenImageModal={handleOpenImage} />

        {/* SECCIÓN 5 — PLANES Y PRECIOS (#planes) */}
        <Pricing onSelectPlan={handleSelectPlan} />

        {/* SECCIÓN 6 — MIRA EL MATERIAL POR DENTRO */}
        <InsidePreview onOpenImageModal={handleOpenImage} />

        {/* SECCIÓN 7 — OPINIONES DE QUIENES YA LO UTILIZARON */}
        <Testimonials />

        {/* SECCIÓN 8 — GARANTÍA INCONDICIONAL DE 7 DÍAS */}
        <Guarantee />

        {/* SECCIÓN 9 — PREGUNTAS FRECUENTES */}
        <Faq />
      </main>

      {/* SECCIÓN 10 — RODAPÉ */}
      <Footer onOpenLegal={handleOpenLegal} />

      {/* Interactive Modals */}
      <ImageModal
        imageSrc={activeImage?.src ?? null}
        title={activeImage?.title}
        onClose={handleCloseImage}
      />

      <LegalModal
        type={legalModalType}
        onClose={handleCloseLegal}
      />

      <CheckoutModal
        planKey={selectedPlan}
        onClose={handleCloseCheckout}
      />
    </div>
  );
}
