import { Outlet } from "react-router";
import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { ScrollProgress } from "../components/ScrollProgress";
import { ScrollToTop } from "../components/ScrollToTop";
import { PageLoader } from "../components/PageLoader";
import { WhatsAppButton } from "../components/WhatsAppButton";

export function Root() {
  return (
    <div className="min-h-screen">
      <PageLoader />
      <ScrollProgress />
      <Navigation />
      <Outlet />
      <Footer />
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}