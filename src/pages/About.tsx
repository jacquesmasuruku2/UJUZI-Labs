import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Target, Eye, Lightbulb, Users, Network, GraduationCap } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const About = () => {
  const { t } = useTranslation();

  const objectives = [
    { icon: GraduationCap, title: t("about.obj1Title"), desc: t("about.obj1Desc") },
    { icon: Lightbulb, title: t("about.obj2Title"), desc: t("about.obj2Desc") },
    { icon: Network, title: t("about.obj3Title"), desc: t("about.obj3Desc") },
    { icon: Target, title: t("about.obj4Title"), desc: t("about.obj4Desc") },
  ];

  const team = [
    { name: "Team Member 1", role: "Founder & Director", bio: "Blockchain enthusiast with 5+ years in Web3 development." },
    { name: "Team Member 2", role: "Head of Education", bio: "Educator passionate about making blockchain accessible to all." },
    { name: "Team Member 3", role: "Community Lead", bio: "Building bridges between local and global Web3 communities." },
    { name: "Team Member 4", role: "Tech Lead", bio: "Full-stack developer specializing in smart contract development." },
  ];

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">
              {t("about.title")} <span className="gradient-text">{t("about.titleHighlight")}</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("about.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12">
          <motion.div {...fadeUp} className="glass rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="font-display text-2xl font-bold">{t("about.missionTitle")}</h2>
            </div>
            <p className="text-muted-foreground">{t("about.missionDesc")}</p>
          </motion.div>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.15 }} className="glass rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <Eye className="h-6 w-6 text-accent" />
              <h2 className="font-display text-2xl font-bold">{t("about.visionTitle")}</h2>
            </div>
            <p className="text-muted-foreground">{t("about.visionDesc")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("about.objectivesTitle")} subtitle={t("about.objectivesSubtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {objectives.map((obj, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                <obj.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold mb-2">{obj.title}</h3>
                <p className="text-sm text-muted-foreground">{obj.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("about.teamTitle")} subtitle={t("about.teamSubtitle")} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 text-center">
                <div className="w-20 h-20 rounded-full gradient-primary mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-primary-foreground" />
                </div>
                <h3 className="font-display font-semibold">{member.name}</h3>
                <p className="text-sm text-primary mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
