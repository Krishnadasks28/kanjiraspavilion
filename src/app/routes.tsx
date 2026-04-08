import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { AboutPage } from "./pages/AboutPage";
import { VenuesPage } from "./pages/VenuesPage";
import { AmenitiesPage } from "./pages/AmenitiesPage";
import { GalleryPage } from "./pages/GalleryPage";
import { FAQPage } from "./pages/FAQPage";
import { LocationPage } from "./pages/LocationPage";
import { BookingPage } from "./pages/BookingPage";
import { VenueDetailPage } from "./pages/VenueDetailPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: AboutPage },
      { path: "venues", Component: VenuesPage },
      { path: "venues/:slug", Component: VenueDetailPage },
      { path: "amenities", Component: AmenitiesPage },
      { path: "gallery", Component: GalleryPage },
      { path: "faq", Component: FAQPage },
      { path: "location", Component: LocationPage },
      { path: "contact", Component: BookingPage },
    ],
  },
]);
