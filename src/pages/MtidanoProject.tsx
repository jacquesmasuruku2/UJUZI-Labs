import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const mtidanoImages = [
  "/projects/mtidano/mtidano-1.jpg",
  "/projects/mtidano/mtidano-2.jpg",
  "/projects/mtidano/mtidano-3.jpg",
  "/projects/mtidano/mtidano-4.jpg",
];

const MtidanoStat = ({
  value,
  label,
  prefix,
  suffix,
}: {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}) => {
  const { count, elementRef } = useCountUp({ end: value, duration: 1800, startOnView: true });
  return (
    <div ref={elementRef} className="rounded-xl border border-border bg-background/40 backdrop-blur-sm p-4 text-center">
      <p className="font-display text-3xl md:text-4xl font-bold text-primary leading-none">
        {prefix ?? ""}
        {count}
        {suffix ?? ""}
      </p>
      <p className="text-xs md:text-sm text-muted-foreground mt-2">{label}</p>
    </div>
  );
};

const MtidanoProject = () => {
  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">MTIDANO NFT</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              Reforestation + blockchain pour un impact environnemental transparent, traçable et durable.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <motion.article {...fadeUp} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">Présentation du projet MTIDANO NFT</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                MTIDANO NFT est une initiative qui associe la reforestation à la technologie blockchain afin de créer un
                modèle transparent, traçable et durable de gestion environnementale. Le projet repose sur un principe
                simple : chaque arbre planté est représenté par un NFT dynamique, permettant de relier un actif numérique
                à un impact réel sur le terrain.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Cette approche transforme les actions écologiques en actifs mesurables, accessibles et vérifiables par tous.
              </p>
              <div className="mt-6">
                <a
                  href="https://mtidano-nft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                  Voir plus de détails sur MTIDANO NFTree
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-secondary/20">
              <img
                src="/projects/mtidano/mtidano-1.jpg"
                alt="Aperçu du projet MTIDANO"
                className="w-full h-[320px] md:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">Mission et vision</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              La mission de MTIDANO NFT est de contribuer à la restauration des écosystèmes dégradés, lutter contre
              l’érosion des sols, promouvoir la reforestation durable, renforcer la transparence des projets environnementaux
              et encourager la participation via la blockchain.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Le projet ambitionne de devenir une référence dans l’intégration de la technologie Web3 au service de
              l’environnement, avec un modèle reproductible suivi, financé et valorisé à l’échelle mondiale.
            </p>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">Fonctionnement NFTree</h3>
            <ol className="text-muted-foreground leading-relaxed space-y-2 list-decimal list-inside">
              <li>Plantation des arbres dans des zones vulnérables des érosions hydriques dans les provinces du Nord et du Sud kivu .</li>
              <li>Géolocalisation précise de chaque arbre par coordonnées GPS passant par l'outil Kobotoolbox.</li>
              <li>Collecte d’images et données de croissance/environnement.</li>
              <li>Association des données à un NFT dynamique qui évolue dans le temps.</li>
              <li>Suivi transparent par les détenteurs et partenaires locaux qui sont facilitateurs du projet.</li>
            </ol>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">Impact, équipes et activités</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              MTIDANO NFT affiche déjà des résultats concrets sur le terrain, dans plusieurs zones d’intervention
              (Bweremana, Shasha, Kiluku, Mukwidja, Kirotshe, Rueni, etc.).
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
              <MtidanoStat value={10000} suffix="+" label="Arbres plantés" />
              <MtidanoStat value={12} label="Zones couvertes" />
              <MtidanoStat value={10} suffix=" ha" label="Hectares restaurés" />
              <MtidanoStat value={500} suffix="+" label="Bénéficiaires directs" />
              <MtidanoStat value={3} suffix="+" label="Années d’activité" />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              Le projet repose sur une collaboration entre équipe environnementale, équipe technique et communautés locales,
              avec un modèle de valeur hybride combinant impact écologique réel et innovation blockchain.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Activités principales : reforestation, lutte contre l’érosion hydriques, Mise en place de pépinières, Sensibilisation environnementale, Garde forestier,
              création et mise en ligne de NFT liés aux arbres sur l'application{" "}
              <a
                href="https://app.mtidano-nft.com/minting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:underline"
              >
                app.mtidano-nft.com/minting
              </a>
              .
            </p>
            <div className="mt-4 text-sm text-muted-foreground space-y-1">
              <p>
                Site officiel:{" "}
                <a
                  href="https://mtidano-nft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary hover:underline"
                >
                  mtidano-nft.com
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="mailto:info@mtidano-nft.com" className="text-primary hover:underline">
                  info@mtidano-nft.com
                </a>{" "}
                |{" "}
                <a href="tel:+243974973061" className="text-primary hover:underline">
                  +243 974 973 061
                </a>
              </p>
            </div>
          </motion.article>

          <motion.section {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">Galerie MTIDANO</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {mtidanoImages.map((src, i) => (
                <div key={src} className="rounded-xl overflow-hidden border border-border bg-secondary/20">
                  <img
                    src={src}
                    alt={`MTIDANO image ${i + 1}`}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </section>
    </div>
  );
};

export default MtidanoProject;

