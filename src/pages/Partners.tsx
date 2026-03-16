import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Partners = () => {
  const { t } = useTranslation();

  const partnersList = [
    { name: "Cardano Foundation", type: "Blockchain Protocol", description: t("partners.p1Desc") },
    { name: "Apex Fusion", type: "Blockchain Protocol", description: t("partners.p2Desc") },
    { name: "Safrochain", type: "Blockchain Protocol", description: t("partners.p3Desc") },
    { name: "UNICEF Innovation", type: "Organization", description: t("partners.p4Desc") },
    { name: "Africa Blockchain Institute", type: "Organization", description: t("partners.p5Desc") },
    { name: "ULPGL University", type: "University", description: t("partners.p6Desc") },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t("partners.title")} <span className="gradient-text">{t("partners.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("partners.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnersList.map((p, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{p.type}</span>
                <h3 className="font-display text-xl font-semibold mt-4 mb-2">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                <Button variant="link" className="p-0 h-auto text-primary">{t("partners.visit")} <ExternalLink className="ml-1 h-3 w-3" /></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <SectionHeading title={t("partners.becomeTitle")} subtitle={t("partners.becomeSubtitle")} />
            <Button variant="glow" size="lg" asChild><a href="/contact">{t("partners.getInTouch")}</a></Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Partners;
