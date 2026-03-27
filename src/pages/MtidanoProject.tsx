import { motion } from "framer-motion";
import { useCountUp } from "@/hooks/useCountUp";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">MTIDANO NFT</span>
            </h1>
            <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
              {t("mtidano.heroSubtitle")}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-12">
          <motion.article {...fadeUp} className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-6 items-start">
            <div>
              <h2 className="font-display text-2xl md:text-3xl font-bold mb-5">{t("mtidano.presentationTitle")}</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t("mtidano.presentationP1")}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t("mtidano.presentationP2")}
              </p>
              <div className="mt-6">
                <a
                  href="https://mtidano-nft.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition"
                >
                  {t("mtidano.moreDetails")}
                </a>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden border border-border bg-secondary/20">
              <img
                src="/projects/mtidano/mtidano-1.jpg"
                alt={t("mtidano.previewAlt")}
                className="w-full h-[320px] md:h-[380px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">{t("mtidano.missionVisionTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {t("mtidano.missionVisionP1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("mtidano.missionVisionP2")}
            </p>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">{t("mtidano.nftreeTitle")}</h3>
            <ol className="text-muted-foreground leading-relaxed space-y-2 list-decimal list-inside">
              <li>{t("mtidano.nftreeStep1")}</li>
              <li>{t("mtidano.nftreeStep2")}</li>
              <li>{t("mtidano.nftreeStep3")}</li>
              <li>{t("mtidano.nftreeStep4")}</li>
              <li>{t("mtidano.nftreeStep5")}</li>
            </ol>
          </motion.article>

          <motion.article {...fadeUp} className="max-w-6xl mx-auto">
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">{t("mtidano.impactTitle")}</h3>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {t("mtidano.impactIntro")}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-5">
              <MtidanoStat value={10000} suffix="+" label={t("mtidano.stats.trees")} />
              <MtidanoStat value={12} label={t("mtidano.stats.zones")} />
              <MtidanoStat value={10} suffix=" ha" label={t("mtidano.stats.hectares")} />
              <MtidanoStat value={500} suffix="+" label={t("mtidano.stats.beneficiaries")} />
              <MtidanoStat value={3} suffix="+" label={t("mtidano.stats.years")} />
            </div>
            <p className="text-muted-foreground leading-relaxed mb-3">
              {t("mtidano.operationsP1")}
            </p>
            <p className="text-muted-foreground leading-relaxed">
              {t("mtidano.operationsP2")}{" "}
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
                {t("mtidano.officialSite")}{" "}
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
                {t("mtidano.contactLabel")}{" "}
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
            <h3 className="font-display text-xl md:text-2xl font-semibold mb-4">{t("mtidano.galleryTitle")}</h3>
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

