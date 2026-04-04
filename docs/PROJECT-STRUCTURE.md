# Structure du dépôt UJUZI Labs (frontend)

Arborescence cible alignée sur l’organisation **app / features / pages par domaine / services**. Point d’entrée Vite : `index.html` → `src/app/main.tsx`.

```
ujuzi-labs/
├── public/
│   ├── robots.txt
│   ├── site.webmanifest
│   └── …
├── src/
│   ├── app/
│   │   ├── main.tsx
│   │   ├── App.tsx
│   │   ├── providers.tsx
│   │   ├── router.tsx
│   │   └── ErrorBoundary.tsx
│   ├── assets/
│   │   ├── images/
│   │   ├── fonts/
│   │   └── icons/
│   ├── components/
│   │   ├── ui/              # shadcn / primitives
│   │   ├── layout/          # Navbar, Footer, NavLink, …
│   │   └── feedback/        # PageLoader, …
│   ├── config/
│   │   ├── env.ts
│   │   └── site.ts
│   ├── features/
│   │   ├── admin/
│   │   ├── auth/            # point d’entrée auth (réexport Strapi)
│   │   ├── blog/
│   │   ├── events/          # réservé
│   │   └── contact/         # réservé
│   ├── hooks/
│   ├── layouts/
│   │   ├── RootLayout.tsx
│   │   ├── MarketingLayout.tsx
│   │   └── DashboardLayout.tsx
│   ├── pages/
│   │   ├── home/HomePage.tsx
│   │   ├── blog/BlogPage.tsx, BlogPostPage.tsx
│   │   ├── not-found/NotFoundPage.tsx
│   │   ├── about/AboutPage.tsx
│   │   ├── events/EventsPage.tsx, EventDetailPage.tsx
│   │   ├── contact/ContactPage.tsx
│   │   ├── partners/PartnersPage.tsx
│   │   ├── community/CommunityPage.tsx
│   │   ├── resources/ResourcesPage.tsx
│   │   ├── documentation/DocumentationPage.tsx
│   │   ├── tools/ToolsPage.tsx
│   │   ├── validators/ValidatorsPage.tsx
│   │   ├── projects/ProjectsPage.tsx, MtidanoProjectPage.tsx
│   │   ├── onboarding/OnboardingProgramPage.tsx
│   │   ├── admin/AdminLoginPage.tsx, AdminDashboardPage.tsx
│   │   └── …                # variantes legacy (Index.tsx, …)
│   ├── services/
│   │   ├── api/             # client.ts, query-keys.ts
│   │   ├── storage/
│   │   └── index.ts
│   ├── lib/
│   ├── styles/
│   │   ├── globals.css
│   │   └── tailwind.css
│   ├── types/
│   ├── utils/               
│   └── test/
├── .env.example
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.ts
├── components.json
└── package.json
```

**Remarques :** le thème `ThemeProvider` (next-themes) est monté dans `app/main.tsx` au-dessus de `App`. Les autres providers (Query, Router, auth Strapi) sont dans `app/providers.tsx`. Les pages legacy (`Index.tsx`, etc.) peuvent rester dans `pages/` jusqu’à suppression ou migration.
