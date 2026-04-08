import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { ScrollToTop } from "../components/ScrollToTop";
import { PageLoader } from "../components/PageLoader";
import { FloatingActions } from "../components/FloatingActions";
import { ScrollToTopOnNavigate } from "../components/ScrollToTopOnNavigate";

export function Root() {
  return (
    <div className="min-h-screen">
      <ScrollToTopOnNavigate />
      <PageLoader />
      <ScrollProgress />
      <Navigation />
      <FloatingActions />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
}