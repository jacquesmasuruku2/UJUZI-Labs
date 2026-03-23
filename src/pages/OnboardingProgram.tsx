import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  HeartHandshake,
  TrendingUp,
  HandCoins,
  Smartphone,
  Wallet,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useCountUp } from "@/hooks/useCountUp";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const ImpactStat = ({ value, suffix, label }: { value: number; suffix?: string; label: string }) => {
  const { count, elementRef } = useCountUp({ end: value, duration: 1800, startOnView: true });

  return (
    <div ref={elementRef} className="glass rounded-xl p-6 text-center">
      <p className="font-display text-4xl font-bold text-primary">
        {suffix ?? ""}
        {count}
      </p>
      <p className="text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const OnboardingProgram = () => {
  const { t } = useTranslation();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [missingImages, setMissingImages] = useState<number[]>([]);
  const [donateMethod, setDonateMethod] = useState<"mobile" | "crypto" | null>(null);
  const onboardingImages = [
    "/onboarding/onboarding-1.jpg",
    "/onboarding/onboarding-2.jpg",
    "/onboarding/onboarding-3.jpg",
    "/onboarding/onboarding-4.jpg",
    "/onboarding/onboarding-5.jpg",
    "/onboarding/onboarding-6.jpg",
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % onboardingImages.length);
    }, 2600);

    return () => clearInterval(interval);
  }, [onboardingImages.length, isPaused]);

  const showNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % onboardingImages.length);
  };

  const showPrevious = () => {
    setCurrentImageIndex((prev) =>
      prev === 0 ? onboardingImages.length - 1 : prev - 1
    );
  };

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">{t("onboarding.title")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              {t("onboarding.subtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-10">
          <motion.div
            id="what-is-onboarding"
            {...fadeUp}
            className="glass rounded-xl p-8 scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">{t("onboarding.whatTitle")}</h2>
            </div>
            <div
              className="relative rounded-xl overflow-hidden border border-border min-h-[430px]"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <AnimatePresence mode="wait">
                {missingImages.includes(currentImageIndex) ? (
                  <motion.div
                    key={`placeholder-${currentImageIndex}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute inset-0 flex items-center justify-center text-sm text-muted-foreground text-center px-4 bg-secondary/40"
                  >
                    Ajoute une image ici:{" "}
                    <code>/public/onboarding/onboarding-{currentImageIndex + 1}.jpg</code>
                  </motion.div>
                ) : (
                  <motion.img
                    key={`bg-${currentImageIndex}`}
                    src={onboardingImages[currentImageIndex]}
                    alt={`Onboarding background ${currentImageIndex + 1}`}
                    onError={() =>
                      setMissingImages((prev) =>
                        prev.includes(currentImageIndex) ? prev : [...prev, currentImageIndex]
                      )
                    }
                    initial={{ opacity: 0, scale: 1.08 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.03 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                )}
              </AnimatePresence>

              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/45" />

              <div className="relative z-10 p-7 md:p-10 max-w-4xl">
                <p className="text-white/95 leading-relaxed text-justify text-base md:text-lg">
                  Depuis 2023, Ujuzi Labs a identifié un besoin d&apos;éducation sur le Web3, et la blockchain Cardano en particulier.
                  Cela nous a poussé à initier ce programme à travers lequel, chaque fin du mois, nous mobilisons nos petites ressources
                  disponibles et recrutons des jeunes entrepreneurs, étudiants et passionnés de technologie pour leur offrir une
                  formation d&apos;une semaine sur des notions comme le Web3, la technologie des registres distribués, la blockchain,
                  les portefeuilles Cardano et d&apos;autres fondamentaux utiles à leur parcours.
                </p>
              </div>

              <button
                type="button"
                onClick={showPrevious}
                className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/65 transition z-20"
                aria-label="Image précédente"
              >
                <ChevronLeft className="h-5 w-5 mx-auto" />
              </button>
              <button
                type="button"
                onClick={showNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-black/45 text-white backdrop-blur-sm hover:bg-black/65 transition z-20"
                aria-label="Image suivante"
              >
                <ChevronRight className="h-5 w-5 mx-auto" />
              </button>

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 z-20">
                {onboardingImages.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      idx === currentImageIndex
                        ? "w-6 bg-white"
                        : "w-2.5 bg-white/50 hover:bg-white/80"
                    }`}
                    aria-label={`Afficher image ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            id="impact"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="glass rounded-xl p-8 scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">{t("onboarding.impactTitle")}</h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <ImpactStat value={20} suffix="+" label="Cohortes" />
              <ImpactStat value={400} suffix="+" label="Personnes formées" />
              <ImpactStat value={20} suffix="+" label="Ressources créées" />
              <ImpactStat value={1} label="Hub Cardano initié à Goma" />
            </div>
          </motion.div>

          <motion.div
            id="donate"
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="glass rounded-xl p-8 scroll-mt-28"
          >
            <div className="flex items-center gap-3 mb-4">
              <HandCoins className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">{t("onboarding.donateTitle")}</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6 text-justify">
              Votre soutien permet de maintenir ce programme vivant : location d&apos;espaces, connexion internet, supports de formation,
              accompagnement des apprenants et suivi post-formation. Chaque contribution, même petite, renforce l&apos;impact réel sur la
              jeunesse locale.
            </p>

            <div className="flex flex-wrap gap-3 mb-4">
              <button
                type="button"
                onClick={() => setDonateMethod("mobile")}
                className={`px-4 py-2 rounded-lg border transition ${
                  donateMethod === "mobile"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary/30 border-border hover:bg-secondary/60"
                }`}
              >
                Via Mobile Money
              </button>
              <button
                type="button"
                onClick={() => setDonateMethod("crypto")}
                className={`px-4 py-2 rounded-lg border transition ${
                  donateMethod === "crypto"
                    ? "bg-primary text-primary-foreground border-primary"
                    : "bg-secondary/30 border-border hover:bg-secondary/60"
                }`}
              >
                Via Crypto
              </button>
            </div>

            {donateMethod === "mobile" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold">Réseaux disponibles</h3>
                </div>
                <ul className="text-muted-foreground space-y-1">
                  <li>- Orange Money</li>
                  <li>- Airtel Money</li>
                  <li>- M-PESA</li>
                </ul>
              </motion.div>
            )}

            {donateMethod === "crypto" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-xl border border-border bg-secondary/30 p-5"
              >
                <div className="flex items-center gap-2 mb-3">
                  <Wallet className="h-5 w-5 text-primary" />
                  <h3 className="font-display text-lg font-semibold">Via Crypto (Cardano)</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Connecte ton wallet Cardano, choisis le montant de ton soutien, puis confirme la transaction.
                  Une fois validé, ta contribution sera prise en compte pour financer les prochaines cohortes.
                </p>
                <button
                  type="button"
                  className="px-4 py-2 rounded-lg bg-primary text-primary-foreground opacity-80 cursor-not-allowed"
                  disabled
                >
                  Donate
                </button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnboardingProgram;

