import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import ThemeToggle from "@/components/ThemeToggle";
import logo from "@/assets/logo.png";

interface NavGroup {
  label: string;
  items: { key: string; path: string }[];
}

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const location = useLocation();
  const { t } = useTranslation();
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const navGroups: (NavGroup | { key: string; path: string })[] = [
    { key: "home", path: "/" },
    {
      label: "nav.about",
      items: [
        { key: "presentation", path: "/about" },
        { key: "team", path: "/about#team" },
      ],
    },
    {
      label: "nav.ecosystem",
      items: [
        { key: "projects", path: "/projects" },
        { key: "events", path: "/events" },
      ],
    },
    {
      label: "nav.resources",
      items: [
        { key: "blog", path: "/blog" },
        { key: "documentation", path: "/documentation" },
        { key: "tools", path: "/tools" },
        { key: "gallery", path: "/resources#gallery" },
      ],
    },
    {
      label: "nav.network",
      items: [
        { key: "community", path: "/community" },
        { key: "partners", path: "/partners" },
        { key: "validators", path: "/validators" },
      ],
    },
    { key: "contact", path: "/contact" },
  ];

  const isGroup = (item: NavItem | NavGroup): item is NavGroup => "items" in item;

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setOpenDropdown(null), 150);
  };

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setMobileOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path.includes("#")) return location.pathname === path.split("#")[0];
    return location.pathname === path;
  };

  const isGroupActive = (group: NavGroup) => group.items.some((item) => isActive(item.path));

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Goma Hub" className="h-9 w-9" />
          <span className="font-display text-lg font-bold text-foreground">
            Goma <span className="text-primary">Hub</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1 flex-1 justify-center">
          {navGroups.map((item, idx) =>
            isGroup(item) ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                <button
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                    isGroupActive(item) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(item.label)}
                  <ChevronDown className={`h-3 w-3 transition-transform ${openDropdown === item.label ? "rotate-180" : ""}`} />
                </button>
                {openDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 min-w-[180px] glass rounded-lg border border-border shadow-lg py-1 z-50">
                    {item.items.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        className={`block px-4 py-2 text-sm transition-colors ${
                          isActive(sub.path) ? "text-primary bg-primary/5" : "text-muted-foreground hover:text-foreground hover:bg-primary/5"
                        }`}
                      >
                        {t(`nav.${sub.key}`)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.path}
                to={item.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {t(`nav.${item.key}`)}
              </Link>
            )
          )}
        </div>

        <div className="hidden lg:flex items-center gap-2">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden glass border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-1">
            {navGroups.map((item) =>
              isGroup(item) ? (
                <div key={item.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === item.label ? null : item.label)}
                    className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isGroupActive(item) ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {t(item.label)}
                    <ChevronDown className={`h-4 w-4 transition-transform ${mobileExpanded === item.label ? "rotate-180" : ""}`} />
                  </button>
                  {mobileExpanded === item.label && (
                    <div className="ml-4 flex flex-col gap-1">
                      {item.items.map((sub) => (
                        <Link
                          key={sub.path}
                          to={sub.path}
                          onClick={() => setMobileOpen(false)}
                          className={`px-3 py-2 text-sm rounded-md transition-colors ${
                            isActive(sub.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                          }`}
                        >
                          {t(`nav.${sub.key}`)}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive(item.path) ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t(`nav.${item.key}`)}
                </Link>
              )
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
