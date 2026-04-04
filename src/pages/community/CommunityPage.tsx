import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { MessageCircle, Send, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const CommunityPage = () => {
  const { t } = useTranslation();

  const joinItems = [
    { icon: MessageCircle, title: t("community.discord"), desc: t("community.discordDesc") },
    { icon: Send, title: t("community.telegram"), desc: t("community.telegramDesc") },
    { icon: Users, title: t("community.attend"), desc: t("community.attendDesc") },
  ];

  const testimonials = [
    { name: "Sarah M.", role: "Web3 Developer", text: t("community.test1") },
    { name: "Jean-Pierre K.", role: "Student", text: t("community.test2") },
    { name: "Amina B.", role: "Entrepreneur", text: t("community.test3") },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t("community.title")} <span className="gradient-text">{t("community.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("community.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("community.howTitle")} subtitle={t("community.howSubtitle")} />
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {joinItems.map((item, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6 text-center">
                <item.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{item.desc}</p>
                <Button variant="outline-glow" size="sm">{t("community.getStarted")} <ArrowRight className="ml-1 h-3 w-3" /></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-2xl mx-auto text-center">
            <Award className="h-12 w-12 text-primary mx-auto mb-4" />
            <SectionHeading title={t("community.ambassadorTitle")} subtitle={t("community.ambassadorSubtitle")} />
            <p className="text-muted-foreground mb-6">{t("community.ambassadorDesc")}</p>
            <Button variant="glow" size="lg">{t("community.applyNow")} <ArrowRight className="ml-2 h-4 w-4" /></Button>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("community.voicesTitle")} subtitle={t("community.voicesSubtitle")} />
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((tm, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6">
                <p className="text-sm text-muted-foreground italic mb-4">"{tm.text}"</p>
                <div>
                  <p className="font-display font-semibold">{tm.name}</p>
                  <p className="text-xs text-primary">{tm.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
