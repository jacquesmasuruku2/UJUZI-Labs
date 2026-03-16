import { useState } from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeUp = { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 } };

const Projects = () => {
  const { t } = useTranslation();
  const [active, setActive] = useState("All");

  const allProjects = [
    { name: "KivuPay", category: "DeFi", tech: "Cardano, React", description: t("projects.proj1Desc"), team: "Team Alpha" },
    { name: "EduChain", category: "Education", tech: "Ethereum, IPFS", description: t("projects.proj2Desc"), team: "Team Beta" },
    { name: "VolcanoDAO", category: "Social Impact", tech: "Polygon, TheGraph", description: t("projects.proj3Desc"), team: "Team Gamma" },
    { name: "KivuNet", category: "Infrastructure", tech: "Substrate, Rust", description: t("projects.proj4Desc"), team: "Team Delta" },
    { name: "AgriBlock", category: "Social Impact", tech: "Cardano, Node.js", description: t("projects.proj5Desc"), team: "Team Epsilon" },
    { name: "MedChain AI", category: "AI + Blockchain", tech: "Ethereum, Python", description: t("projects.proj6Desc"), team: "Team Zeta" },
  ];

  const categories = [
    { key: "All", label: t("projects.all") },
    { key: "DeFi", label: "DeFi" },
    { key: "Education", label: "Education" },
    { key: "Social Impact", label: "Social Impact" },
    { key: "Infrastructure", label: "Infrastructure" },
    { key: "AI + Blockchain", label: "AI + Blockchain" },
  ];

  const filtered = active === "All" ? allProjects : allProjects.filter((p) => p.category === active);

  return (
    <div>
      <section className="py-20 hero-gradient">
        <div className="container mx-auto px-4 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4"><span className="gradient-text">{t("projects.title")}</span></h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{t("projects.subtitle")}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 mb-10 justify-center">
            {categories.map((c) => (
              <button key={c.key} onClick={() => setActive(c.key)} className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${active === c.key ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-secondary/80"}`}>
                {c.label}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{project.category}</span>
                <h3 className="font-display text-xl font-semibold mt-4 mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{project.description}</p>
                <div className="text-xs text-muted-foreground space-y-1 mb-4">
                  <p><span className="text-foreground font-medium">Tech:</span> {project.tech}</p>
                  <p><span className="text-foreground font-medium">Team:</span> {project.team}</p>
                </div>
                <Button variant="link" className="p-0 h-auto text-primary">{t("projects.viewProject")} <ExternalLink className="ml-1 h-3 w-3" /></Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
