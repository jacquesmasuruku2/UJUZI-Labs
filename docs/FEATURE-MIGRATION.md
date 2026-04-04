# Migration feature-based — état et rapports

## Rapport par route (vue d’ensemble)

| Route | Fichier page (`src/pages/`) | Domaine `features/` | Statut | Notes |
|--------|-----------------------------|---------------------|--------|--------|
| `/` | `home/HomePage.tsx` | `landing` (à créer) | Non migré | |
| `/about` | `about/AboutPage.tsx` | `marketing` | Non migré | Dossier `pages/about/` |
| `/events` | `events/EventsPage.tsx` | `events` | Non migré | Dossier `pages/events/` |
| `/events/:id` | `events/EventDetailPage.tsx` | `events` | Non migré | |
| `/projects` | `projects/ProjectsPage.tsx` | `projects` | Non migré | |
| `/projects/mtidano` | `projects/MtidanoProjectPage.tsx` | `projects` | Non migré | |
| `/community` | `community/CommunityPage.tsx` | `marketing` | Non migré | |
| `/resources` | `resources/ResourcesPage.tsx` | `content` | Non migré | |
| `/blog` | `blog/BlogPage.tsx` | **`blog`** | **Migré** | `useBlogPosts`, `BlogListView` |
| `/blog/:id` | `blog/BlogPostPage.tsx` | **`blog`** | **Migré** | `useBlogPostDetail`, `BlogPostArticleSection`, `BlogPostCommentsSection` |
| `/partners` | `partners/PartnersPage.tsx` | `marketing` | Non migré | |
| `/contact` | `contact/ContactPage.tsx` | `marketing` | Non migré | Dossier `pages/contact/` |
| `/validators` | `validators/ValidatorsPage.tsx` | `tools` | Non migré | |
| `/documentation` | `documentation/DocumentationPage.tsx` | `content` | Non migré | |
| `/tools` | `tools/ToolsPage.tsx` | `tools` | Non migré | |
| `/onboarding` | `onboarding/OnboardingProgramPage.tsx` | `programs` | Non migré | |
| `/admin/login` | `admin/AdminLoginPage.tsx` | `admin` | Partiel | `AdminRoute` déjà dans `features/admin` |
| `/admin` | `admin/AdminDashboardPage.tsx` | `admin` | Non migré | |
| `*` | `not-found/NotFoundPage.tsx` | `system` | Non migré | |

Le routeur (`src/app/router.tsx`) importe toujours les **pages** en lazy ; les pages migrées importent leurs vues depuis `src/features/<domaine>/`.

## Rapport de rendu (développement)

En développement, le hook `useRenderReport(label)` dans `src/hooks/useRenderReport.ts` écrit dans la **console du navigateur** une ligne par rendu :

```text
[render] BlogPage #1
[render] BlogListView #1
```

- **En production** (`import.meta.env.PROD`), le hook ne fait rien (aucun `console.log`).
- Avec **React Strict Mode**, les composants peuvent monter deux fois en dev : les numéros `#` peuvent augmenter plus vite ; c’est attendu.

### Où l’activer

Ajouter `useRenderReport("NomDuComposant")` en tête du corps du composant à observer. **Blog liste :** `BlogPage`, `BlogListView`. **Article :** `BlogPostPage`, `BlogPostArticleSection`, `BlogPostCommentsSection`.

Pour un rapport détaillé (temps CPU, arbre), utiliser en complément **React DevTools → Profiler**.

## Conventions de dossiers par domaine (cible)

```
src/features/<domaine>/
  components/     # UI spécifique au domaine
  hooks/          # logique et données
  api/            # (optionnel) appels dédiés
  types.ts        # types partagés du domaine
```
