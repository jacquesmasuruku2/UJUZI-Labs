import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Server, Cpu } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

/** Section ancrable #validators — réutilisée sur /validators et page Écosystème unifiée */
export const EcosystemValidatorsSection = ({ showHeading = true }: { showHeading?: boolean }) => {
  const { t } = useTranslation();

  const validators = [
    {
      name: "Cardano",
      icon: Shield,
      description: t("validators.cardanoDesc"),
      stats: [
        { label: t("validators.poolTicker"), value: "GOMA" },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.pledge"), value: "50K ADA" },
      ],
    },
    {
      name: "Apex Fusion",
      icon: Server,
      description: t("validators.apexDesc"),
      stats: [
        { label: t("validators.nodeType"), value: t("validators.validator") },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.uptime"), value: "99.9%" },
      ],
    },
    {
      name: "Safrochain",
      icon: Cpu,
      description: t("validators.safroDesc"),
      stats: [
        { label: t("validators.nodeType"), value: t("validators.validator") },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.region"), value: t("validators.centralAfrica") },
      ],
    },
  ];

  return (
    <section
      id="validators"
      className="scroll-mt-24 border-t border-border bg-background py-16 md:py-20"
    >
      <div className="container mx-auto px-4">
        {showHeading && (
          <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              <span className="gradient-text">{t("validators.title")}</span>
            </h2>
            <p className="mt-3 text-lg text-muted-foreground">{t("validators.subtitle")}</p>
          </div>
        )}
        <div className="grid gap-8 lg:grid-cols-3">
          {validators.map((v, i) => (
            <motion.div
              key={v.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.15 }}
              className="glass rounded-xl p-8 transition-colors hover:border-primary/30"
            >
              <v.icon className="mb-4 h-12 w-12 text-primary" />
              <h3 className="font-display mb-3 text-2xl font-bold">{v.name}</h3>
              <p className="mb-6 text-sm text-muted-foreground">{v.description}</p>
              <div className="space-y-3">
                {v.stats.map((stat, si) => (
                  <div
                    key={si}
                    className="flex items-center justify-between border-b border-border py-2 last:border-0"
                  >
                    <span className="text-sm text-muted-foreground">{stat.label}</span>
                    <span className="font-display text-sm font-semibold text-primary">{stat.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
