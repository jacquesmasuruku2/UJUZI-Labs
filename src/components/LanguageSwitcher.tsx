import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;

  const toggle = () => {
    i18n.changeLanguage(currentLang === "en" ? "fr" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="px-3 py-1.5 rounded-lg text-xs font-display font-semibold bg-secondary text-secondary-foreground hover:bg-primary/20 hover:text-primary transition-colors tracking-wider uppercase"
    >
      {currentLang === "en" ? "FR" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
