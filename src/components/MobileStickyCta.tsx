import { useState, useEffect } from 'react';
import { ArrowDown } from 'lucide-react';

export default function MobileStickyCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (> 350px) and hide if already in pricing section
      const scrollY = window.scrollY;
      const pricingElement = document.getElementById('planes');
      
      if (pricingElement) {
        const rect = pricingElement.getBoundingClientRect();
        // If pricing is currently visible on screen, hide floating button to prevent clutter
        const isPricingVisible = rect.top <= window.innerHeight * 0.7 && rect.bottom >= window.innerHeight * 0.2;
        setIsVisible(scrollY > 350 && !isPricingVisible);
      } else {
        setIsVisible(scrollY > 350);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToPlanes = () => {
    const element = document.getElementById('planes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <aside 
      aria-label="Acceso rápido a ofertas"
      className="md:hidden fixed bottom-3 left-4 right-4 z-40 animate-in fade-in slide-in-from-bottom-3 duration-200"
    >
      <button
        onClick={scrollToPlanes}
        className="w-full h-12 bg-[#176FE0] hover:bg-[#135cb8] active:scale-[0.98] text-white font-bold text-sm tracking-wide uppercase rounded-xl shadow-lg flex items-center justify-center gap-2 border border-white/20 transition-all cursor-pointer"
      >
        <span>VER PLANES</span>
        <ArrowDown className="w-4 h-4 animate-bounce" />
      </button>
    </aside>
  );
}
