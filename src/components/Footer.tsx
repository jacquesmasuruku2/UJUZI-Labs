import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Github, Twitter, MessageCircle, Send, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t border-border text-foreground transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-display text-xl font-bold text-foreground">
              UJUZI <span className="text-primary">Labs</span>
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {t("footer.desc")}
            </p>
            <div className="flex items-center gap-2 text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span className="text-sm">Goma, North Kivu, DR Congo</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {t("footer.quickLinks")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.about")}</Link>
              <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.events")}</Link>
              <Link to="/projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.projects")}</Link>
              <Link to="/community" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.community")}</Link>
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {t("footer.resources")}
            </h4>
            <div className="flex flex-col gap-3">
              <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.blog")}</Link>
              <Link to="/documentation" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.documentation")}</Link>
              <Link to="/tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.tools")}</Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">{t("nav.contact")}</Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-6 text-sm uppercase tracking-wider text-foreground">
              {t("footer.connect")}
            </h4>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-200 text-muted-foreground hover:text-primary"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-200 text-muted-foreground hover:text-primary"
                  aria-label="Discord"
                >
                  <MessageCircle className="h-4 w-4" />
                </a>
                <a 
                  href="https://t.me/CardanoGomaCommunity" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-200 text-muted-foreground hover:text-primary"
                  aria-label="Telegram"
                >
                  <Send className="h-4 w-4" />
                </a>
                <a 
                  href="#" 
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-accent transition-all duration-200 text-muted-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </div>
              <div className="space-y-2">
                <a href="mailto:contact@ujiuzilabs.com" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4" />
                  contact@ujiuzilabs.com
                </a>
                <a href="tel:+243123456789" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4" />
                  +243 123 456 789
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} UJUZI Labs. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
