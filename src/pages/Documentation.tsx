import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, FileText, Code } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Documentation = () => {
  const { t } = useTranslation();

  const docs = [
    { icon: BookOpen, title: t("docs.guide1Title"), desc: t("docs.guide1Desc") },
    { icon: FileText, title: t("docs.guide2Title"), desc: t("docs.guide2Desc") },
    { icon: Code, title: t("docs.guide3Title"), desc: t("docs.guide3Desc") },
    { icon: BookOpen, title: t("docs.guide4Title"), desc: t("docs.guide4Desc") },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">{t("docs.title")}</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("docs.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {docs.map((doc, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <doc.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{doc.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{doc.desc}</p>
                <Button variant="outline-glow" size="sm">{t("resources.access")}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;
