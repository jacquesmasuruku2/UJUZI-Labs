import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { BookOpen, Video, FileText, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Resources = () => {
  const { t } = useTranslation();

  const sections = [
    { icon: BookOpen, category: t("resources.cat1"), items: [
      { title: t("resources.r1Title"), desc: t("resources.r1Desc") },
      { title: t("resources.r2Title"), desc: t("resources.r2Desc") },
      { title: t("resources.r3Title"), desc: t("resources.r3Desc") },
    ]},
    { icon: Video, category: t("resources.cat2"), items: [
      { title: t("resources.r4Title"), desc: t("resources.r4Desc") },
      { title: t("resources.r5Title"), desc: t("resources.r5Desc") },
      { title: t("resources.r6Title"), desc: t("resources.r6Desc") },
    ]},
    { icon: FileText, category: t("resources.cat3"), items: [
      { title: t("resources.r7Title"), desc: t("resources.r7Desc") },
      { title: t("resources.r8Title"), desc: t("resources.r8Desc") },
      { title: t("resources.r9Title"), desc: t("resources.r9Desc") },
    ]},
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">{t("resources.title")}</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("resources.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 space-y-16">
          {sections.map((section, si) => (
            <div key={si}>
              <div className="flex items-center gap-3 mb-8">
                <section.icon className="h-6 w-6 text-primary" />
                <h2 className="font-display text-2xl font-bold">{section.category}</h2>
              </div>
              <div className="grid md:grid-cols-3 gap-6">
                {section.items.map((item, i) => (
                  <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                    <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                    <Button variant="link" className="p-0 h-auto text-primary"><Download className="mr-1 h-3 w-3" /> {t("resources.access")}</Button>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Resources;
