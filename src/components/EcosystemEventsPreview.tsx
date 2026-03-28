import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Calendar, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { strapiFetch } from "@/lib/strapi";

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

type EventData = {
  id: string;
  title: string;
  title_fr: string | null;
  description: string | null;
  description_fr: string | null;
  date: string;
  location: string;
  type: string;
  upcoming: boolean;
};

/** Aperçu événements sur la page Écosystème (#events) — défilement vers la page complète */
export const EcosystemEventsPreview = () => {
  const { t, i18n } = useTranslation();
  const isFr = i18n.language.startsWith("fr");
  const [events, setEvents] = useState<EventData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        type StrapiEventItem = {
          id: string | number;
          attributes?: {
            title?: string;
            title_fr?: string | null;
            description?: string | null;
            description_fr?: string | null;
            date?: string;
            location?: string;
            type?: string;
            upcoming?: boolean;
          };
        };

        const res = await strapiFetch<{ data: unknown[] }>(
          "/api/events?sort=createdAt:desc&populate=image&pagination[pageSize]=100"
        );
        const items = res.data || [];
        const mapped: EventData[] = items
          .map((item) => {
            const it = item as StrapiEventItem;
            return {
              id: String(it.id),
              title: it.attributes?.title ?? "",
              title_fr: it.attributes?.title_fr ?? null,
              description: it.attributes?.description ?? null,
              description_fr: it.attributes?.description_fr ?? null,
              date: it.attributes?.date ?? "",
              location: it.attributes?.location ?? "",
              type: it.attributes?.type ?? "",
              upcoming: !!it.attributes?.upcoming,
            };
          })
          .filter((e) => e.id && e.date && e.location && e.type);

        if (mapped.length) setEvents(mapped);
      } catch {
        // fallback hardcodé ci-dessous
      } finally {
        setLoading(false);
      }
    };

    fetchEvents();
  }, []);

  const isPast = (dateStr: string) => {
    try {
      const d = new Date(dateStr);
      return !isNaN(d.getTime()) && d < new Date();
    } catch {
      return false;
    }
  };

  const hardcoded: EventData[] = [
    {
      id: "1",
      title: t("events.event1Title"),
      title_fr: null,
      description: t("events.event1Desc"),
      description_fr: null,
      date: "2026-03-25",
      location: "Goma Innovation Center",
      type: "Workshop",
      upcoming: true,
    },
    {
      id: "2",
      title: t("events.event2Title"),
      title_fr: null,
      description: t("events.event2Desc"),
      description_fr: null,
      date: "2026-04-10",
      location: "Virunga Tech Park",
      type: "Hackathon",
      upcoming: true,
    },
    {
      id: "3",
      title: t("events.event3Title"),
      title_fr: null,
      description: t("events.event3Desc"),
      description_fr: null,
      date: "2026-04-20",
      location: "Goma Hub HQ",
      type: "Meetup",
      upcoming: true,
    },
  ];

  const source = events.length > 0 ? events : hardcoded;
  const upcoming = source.filter((e) => e.upcoming && !isPast(e.date)).slice(0, 6);

  const getTitle = (e: EventData) => (isFr && e.title_fr ? e.title_fr : e.title);
  const getDesc = (e: EventData) => (isFr && e.description_fr ? e.description_fr : e.description);

  return (
    <section
      id="events"
      className="scroll-mt-24 border-t border-border bg-muted/30 py-16 md:py-20 dark:bg-muted/10"
    >
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center md:mb-12">
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            <span className="gradient-text">{t("events.title")}</span>
          </h2>
          <p className="mt-3 text-lg text-muted-foreground">{t("events.subtitle")}</p>
        </div>

        {loading ? (
          <p className="py-8 text-center text-muted-foreground">{t("admin.loading")}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {upcoming.map((event, i) => (
              <motion.div
                key={event.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                className="glass rounded-xl p-6 transition-colors hover:border-primary/30"
              >
                <span className="mb-3 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {event.type}
                </span>
                <h3 className="font-display mb-2 text-xl font-semibold">{getTitle(event)}</h3>
                <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{getDesc(event)}</p>
                <div className="mb-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" /> {event.location}
                  </span>
                </div>
                <Button variant="outline-glow" size="sm" asChild>
                  <Link to={`/events/${event.id}`}>
                    {t("events.viewDetails")} <ArrowRight className="ml-1 h-3 w-3" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-10 flex justify-center">
          <Button variant="glow" size="lg" asChild>
            <Link to="/events">
              {t("home.viewAllEvents")}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
