import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import './Preloader.css';

const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const tensRef = useRef<HTMLDivElement>(null);
  const unitsRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // NE PAS bloquer le défilement pendant le chargement
    // Permettre aux utilisateurs de scroller immédiatement
    // document.body.style.overflow = 'hidden'; // Ligne commentée

    const tl = gsap.timeline({
      onComplete: () => {
        // Le défilement est déjà autorisé, pas besoin de le réactiver
        // document.body.style.overflow = '';
        onComplete();
      }
    });

    // Animation de défilement des chiffres (rolling numbers effect)
    const animateCounter = () => {
      let currentValue = 0;
      const targetValue = 99;
      const duration = 3; // Exactement 3 secondes comme demandé
      
      // Animation principale du compteur
      const mainTimeline = gsap.timeline();
      
      // Créer une animation progressive pour chaque valeur
      const counterAnimation = gsap.to({ value: 0 }, {
        value: targetValue,
        duration: duration, // 3 secondes exactes
        ease: "cubic-bezier(0.4, 0.0, 0.2, 1)",
        onUpdate: function() {
          currentValue = Math.floor(this.targets()[0].value);
          
          // Calculer les dizaines et unités
          const tens = Math.floor(currentValue / 10);
          const units = currentValue % 10;
          
          // Positionner les chiffres SANS animation de défilement
          // Chaque chiffre apparaît directement à sa position finale
          gsap.set(tensRef.current, { y: -tens * 140 });
          gsap.set(unitsRef.current, { y: -units * 140 });
        },
        onComplete: function() {
          // S'assurer que nous sommes bien à 99%
          currentValue = 99;
          gsap.set(tensRef.current, { y: -9 * 140 }); // 9 pour les dizaines
          gsap.set(unitsRef.current, { y: -9 * 140 }); // 9 pour les unités
        }
      });

      mainTimeline.add(counterAnimation);

      return mainTimeline;
    };

    // Démarrer l'animation du compteur
    tl.add(animateCounter());

    // Attendre que le compteur atteigne 99%, puis transition de sortie
    tl.to(overlayRef.current, {
      yPercent: -100,
      duration: 1.2,
      ease: "power4.inOut",
      delay: 0.3 // Pause après avoir atteint 99%
    });

    return () => {
      // Nettoyage : le défilement est déjà autorisé, pas besoin de le réactiver
      // document.body.style.overflow = '';
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div ref={overlayRef} className="preloader-overlay">
      <div className="preloader-content">
        <div className="counter-container" ref={counterRef}>
          <div className="digit-wrapper">
            <div className="digit-column">
              <div className="digit-strip" ref={tensRef}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <div key={num} className="digit">{num}</div>
                ))}
              </div>
            </div>
            <div className="digit-column">
              <div className="digit-strip" ref={unitsRef}>
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                  <div key={num} className="digit">{num}</div>
                ))}
              </div>
            </div>
            <div className="percent">%</div>
          </div>
        </div>
        <div className="loading-text">CHARGEMENT</div>
      </div>
    </div>
  );
};

export default Preloader;
