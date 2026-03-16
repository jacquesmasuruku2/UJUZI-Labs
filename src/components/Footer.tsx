import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Github, Twitter, MessageCircle, Send } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-display text-lg font-bold mb-4">
              Goma <span className="text-primary">Hub</span>
            </h3>
            <p className="text-sm text-muted-foreground">{t("footer.desc")}</p>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.about")}</Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.events")}</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.projects")}</Link>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.community")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t("footer.resources")}
            </h4>
            <div className="flex flex-col gap-2">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.blog")}</Link>
              <Link to="/documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.documentation")}</Link>
              <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.tools")}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t("footer.connect")}
            </h4>
            <div className="flex gap-3">
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"><Twitter className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"><MessageCircle className="h-4 w-4" /></a>
              <a href="https://t.me/CardanoGomaCommunity" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"><Send className="h-4 w-4" /></a>
              <a href="#" className="p-2 rounded-lg bg-secondary hover:bg-primary/20 transition-colors"><Github className="h-4 w-4" /></a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">Goma, North Kivu, DR Congo</p>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Goma Hub. {t("footer.rights")}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
