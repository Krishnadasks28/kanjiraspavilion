import { useParams, Link } from "react-router";
import { venues } from "../data/venues";
import { PageHero } from "../components/PageHero";
import { MetaTags } from "../components/MetaTags";
import { motion } from "motion/react";
import { Users, Check, ArrowLeft, Calendar } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useEffect } from "react";

export function VenueDetailPage() {
  const { slug } = useParams();
  const venue = venues.find((v) => v.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!venue) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[var(--ivory)]">
        <div className="text-center">
          <h1 className="text-4xl text-[var(--green-dark)] mb-4">Venue Not Found</h1>
          <Link to="/venues" className="text-[var(--gold)] hover:underline flex items-center justify-center gap-2">
            <ArrowLeft size={18} /> Back to Venues
          </Link>
        </div>
      </div>
    );
  }

  return (
    <main className="bg-[var(--ivory)] min-h-screen pb-20">
      <MetaTags />
      <PageHero 
        title={venue.name} 
        subtitle={venue.tagline} 
        backgroundImage={venue.image} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-20">
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-3 gap-0">
            {/* Main Content */}
            <div className="lg:col-span-2 p-8 md:p-12">
              <Link 
                to="/venues" 
                className="inline-flex items-center text-[var(--green-medium)] hover:text-[var(--gold)] transition-colors mb-8 group"
              >
                <ArrowLeft size={18} className="mr-2 transform group-hover:-translate-x-1 transition-transform" /> 
                Back to All Venues
              </Link>

              <div className="flex items-center gap-4 mb-6">
                 <div className="bg-[var(--gold)]/10 text-[var(--gold)] px-4 py-2 rounded-full flex items-center space-x-2">
                    <Users size={18} />
                    <span className="font-semibold">{venue.capacity} Guests Capacity</span>
                  </div>
              </div>

              <h2 className="text-3xl md:text-4xl text-[var(--green-dark)] mb-6 font-serif">
                About the {venue.name}
              </h2>

              <p className="text-lg text-[var(--green-medium)] leading-relaxed mb-8">
                {venue.longDescription}
              </p>

              {/* More Images Gallery */}
              <div className="mt-16">
                <h3 className="text-2xl text-[var(--green-dark)] mb-8 flex items-center gap-3">
                  <div className="w-8 h-px bg-[var(--gold)]" />
                  Venue Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {venue.gallery.map((img, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className={`overflow-hidden rounded-xl h-64 md:h-80 ${idx === 0 ? "md:col-span-2 md:h-96" : ""}`}
                    >
                      <ImageWithFallback
                        src={img}
                        alt={`${venue.name} gallery image ${idx + 1}`}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Details */}
            <div className="bg-[var(--green-dark)] p-8 md:p-12 text-white">
              <div className="sticky top-24">
                <h3 className="text-2xl text-[var(--gold-light)] mb-8 font-serif">Venue Highlights</h3>
                
                <div className="space-y-8">
                  <div>
                    <h4 className="text-[var(--gold)] uppercase tracking-widest text-xs mb-4">Features & Services</h4>
                    <ul className="space-y-3">
                      {venue.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3 text-sm text-white/80">
                          <Check size={16} className="text-[var(--gold)] mt-1 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-[var(--gold)] uppercase tracking-widest text-xs mb-4">Ideal For</h4>
                    <div className="flex flex-wrap gap-2">
                      {venue.idealFor.map((item) => (
                        <span key={item} className="text-xs px-3 py-1.5 border border-white/20 rounded-full bg-white/5">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10">
                    <p className="text-sm text-white/60 mb-6 italic">
                      Ready to host your dream celebration at {venue.name}?
                    </p>
                    <Link
                      to="/contact"
                      className="w-full flex items-center justify-center gap-2 py-4 bg-[var(--gold)] text-[var(--green-dark)] rounded-lg font-bold hover:bg-[var(--gold-light)] transition-all transform hover:-translate-y-1"
                    >
                      <Calendar size={20} />
                      Book this Venue
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
