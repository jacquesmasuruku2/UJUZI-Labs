import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PageLoader } from "@/components/feedback/PageLoader";
import { AdminRoute } from "@/features/admin/components/AdminRoute";

const HomePage = lazy(() => import("@/pages/home/HomePage"));
const AboutPage = lazy(() => import("@/pages/about/AboutPage"));
const EventsPage = lazy(() => import("@/pages/events/EventsPage"));
const EventDetailPage = lazy(() => import("@/pages/events/EventDetailPage"));
const ProjectsPage = lazy(() => import("@/pages/projects/ProjectsPage"));
const CommunityPage = lazy(() => import("@/pages/community/CommunityPage"));
const ResourcesPage = lazy(() => import("@/pages/resources/ResourcesPage"));
const BlogPage = lazy(() => import("@/pages/blog/BlogPage"));
const BlogPostPage = lazy(() => import("@/pages/blog/BlogPostPage"));
const PartnersPage = lazy(() => import("@/pages/partners/PartnersPage"));
const ContactPage = lazy(() => import("@/pages/contact/ContactPage"));
const ValidatorsPage = lazy(() => import("@/pages/validators/ValidatorsPage"));
const DocumentationPage = lazy(() => import("@/pages/documentation/DocumentationPage"));
const ToolsPage = lazy(() => import("@/pages/tools/ToolsPage"));
const OnboardingProgramPage = lazy(() => import("@/pages/onboarding/OnboardingProgramPage"));
const MtidanoProjectPage = lazy(() => import("@/pages/projects/MtidanoProjectPage"));
const AdminLoginPage = lazy(() => import("@/pages/admin/AdminLoginPage"));
const AdminDashboardPage = lazy(() => import("@/pages/admin/AdminDashboardPage"));
const NotFoundPage = lazy(() => import("@/pages/not-found/NotFoundPage"));

/**
 * Déclaration centralisée des routes avec code splitting par page.
 */
export function AppRouter() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetailPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/partners" element={<PartnersPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/validators" element={<ValidatorsPage />} />
        <Route path="/documentation" element={<DocumentationPage />} />
        <Route path="/tools" element={<ToolsPage />} />
        <Route path="/onboarding" element={<OnboardingProgramPage />} />
        <Route path="/projects/mtidano" element={<MtidanoProjectPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboardPage />
            </AdminRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
