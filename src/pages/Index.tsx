import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight, Users, Calendar, Rocket, Award, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroBg from "@/assets/hero-bg.jpg";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const Index = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);

  const stats = [
    { icon: Users, value: "500+", label: t("stats.members") },
    { icon: Calendar, value: "30+", label: t("stats.events") },
    { icon: Rocket, value: "15+", label: t("stats.projects") },
    { icon: Award, value: "1000+", label: t("stats.beneficiaries") },
  ];

  const upcomingEvents = [
    { title: t("events.event1Title"), date: "March 25, 2026", type: "Workshop", location: "Goma Innovation Center" },
    { title: t("events.event2Title"), date: "April 10, 2026", type: "Hackathon", location: "Virunga Tech Park" },
    { title: t("events.event3Title"), date: "April 20, 2026", type: "Meetup", location: "Goma Hub HQ" },
  ];

  const projects = [
    { name: "KivuPay", category: "DeFi", description: t("projects.proj1Desc") },
    { name: "EduChain", category: "Education", description: t("projects.proj2Desc") },
    { name: "VolcanoDAO", category: "Social Impact", description: t("projects.proj3Desc") },
  ];

  const partners = ["Cardano Foundation", "Apex Fusion", "Safrochain", "UNICEF Innovation", "Africa Blockchain Institute"];

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribing(true);
    const { error } = await supabase.from("newsletter_subscribers").insert({ email: newsletterEmail });
    if (error) {
      if (error.code === "23505") {
        toast({ title: t("home.alreadySubscribed") });
      } else {
        toast({ title: t("admin.error"), variant: "destructive" });
      }
    } else {
      toast({ title: t("home.subscribeSuccess") });
      setNewsletterEmail("");
    }
    setSubscribing(false);
  };

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Goma Web3" className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 hero-gradient" />
          <div className="absolute inset-0 grid-pattern opacity-30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-sm text-primary mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              {t("hero.badge")}
            </div>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
              {t("hero.title1")}{" "}
              <span className="gradient-text">{t("hero.title2")}</span>{" "}
              {t("hero.title3")}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">{t("hero.subtitle")}</p>
            <div className="flex flex-wrap gap-4">
              <Button variant="glow" size="lg" asChild>
                <Link to="/community">{t("hero.joinBtn")} <ArrowRight className="ml-2 h-4 w-4" /></Link>
              </Button>
              <Button variant="outline-glow" size="lg" asChild>
                <Link to="/events">{t("hero.eventsBtn")}</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="text-center">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl font-bold glow-text">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-3xl mx-auto text-center">
            <SectionHeading title={t("home.whatTitle")} subtitle={t("home.whatSubtitle")} />
            <p className="text-muted-foreground mb-8">{t("home.whatDesc")}</p>
            <Button variant="outline-glow" asChild>
              <Link to="/about">{t("home.learnMore")} <ChevronRight className="ml-1 h-4 w-4" /></Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("home.upcomingTitle")} subtitle={t("home.upcomingSubtitle")} />
          <div className="grid md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">{event.type}</span>
                <h3 className="font-display text-xl font-semibold mt-4 mb-2">{event.title}</h3>
                <p className="text-sm text-muted-foreground mb-1">{event.date}</p>
                <p className="text-sm text-muted-foreground">{event.location}</p>
                <Button variant="link" className="mt-4 p-0 h-auto text-primary">
                  {t("home.register")} <ArrowRight className="ml-1 h-3 w-3" />
                </Button>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline-glow" asChild>
              <Link to="/events">{t("home.viewAllEvents")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("home.projectsTitle")} subtitle={t("home.projectsSubtitle")} />
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.15 }} className="glass rounded-xl p-6 hover:border-primary/30 transition-colors">
                <span className="text-xs font-medium text-accent bg-accent/10 px-3 py-1 rounded-full">{project.category}</span>
                <h3 className="font-display text-xl font-semibold mt-4 mb-2">{project.name}</h3>
                <p className="text-sm text-muted-foreground">{project.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button variant="outline-glow" asChild>
              <Link to="/projects">{t("home.viewAllProjects")}</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-16 border-t border-border">
        <div className="container mx-auto px-4">
          <SectionHeading title={t("home.partnersTitle")} />
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {partners.map((partner, i) => (
              <motion.div key={i} {...fadeUp} transition={{ ...fadeUp.transition, delay: i * 0.1 }} className="glass px-6 py-3 rounded-lg text-sm font-display font-medium text-muted-foreground">
                {partner}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div {...fadeUp} className="max-w-xl mx-auto text-center">
            <SectionHeading title={t("home.newsletterTitle")} subtitle={t("home.newsletterSubtitle")} />
            <form className="flex gap-3 mt-6" onSubmit={handleSubscribe}>
              <input
                type="email"
                required
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                placeholder={t("home.emailPlaceholder")}
                className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
              <Button variant="glow" type="submit" disabled={subscribing}>
                {subscribing ? "..." : t("home.subscribe")}
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Index;
