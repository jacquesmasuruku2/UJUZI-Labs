import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Wrench, Terminal, Database, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const ToolsPage = () => {
  const { t } = useTranslation();

  const tools = [
    { icon: Terminal, title: t("tools.tool1Title"), desc: t("tools.tool1Desc") },
    { icon: Database, title: t("tools.tool2Title"), desc: t("tools.tool2Desc") },
    { icon: Globe, title: t("tools.tool3Title"), desc: t("tools.tool3Desc") },
    { icon: Wrench, title: t("tools.tool4Title"), desc: t("tools.tool4Desc") },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">{t("tools.title")}</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("tools.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {tools.map((tool, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <tool.icon className="h-8 w-8 text-primary mb-4" />
                <h3 className="font-display text-lg font-semibold mb-2">{tool.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{tool.desc}</p>
                <Button variant="outline-glow" size="sm">{t("tools.tryIt")}</Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ToolsPage;
