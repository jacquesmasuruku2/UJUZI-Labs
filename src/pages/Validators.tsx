import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Shield, Server, Cpu } from "lucide-react";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Validators = () => {
  const { t } = useTranslation();

  const validators = [
    {
      name: "Cardano", icon: Shield, description: t("validators.cardanoDesc"),
      stats: [
        { label: t("validators.poolTicker"), value: "GOMA" },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.pledge"), value: "50K ADA" },
      ],
    },
    {
      name: "Apex Fusion", icon: Server, description: t("validators.apexDesc"),
      stats: [
        { label: t("validators.nodeType"), value: t("validators.validator") },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.uptime"), value: "99.9%" },
      ],
    },
    {
      name: "Safrochain", icon: Cpu, description: t("validators.safroDesc"),
      stats: [
        { label: t("validators.nodeType"), value: t("validators.validator") },
        { label: t("validators.status"), value: t("validators.active") },
        { label: t("validators.region"), value: t("validators.centralAfrica") },
      ],
    },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">{t("validators.title")}</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("validators.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {validators.map((v, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-8 hover:border-primary/30 transition-colors">
                <v.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="font-display text-2xl font-bold mb-3">{v.name}</h3>
                <p className="text-sm text-muted-foreground mb-6">{v.description}</p>
                <div className="space-y-3">
                  {v.stats.map((stat, si) => (
                    <div key={si} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="text-sm text-muted-foreground">{stat.label}</span>
                      <span className="text-sm font-display font-semibold text-primary">{stat.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Validators;
