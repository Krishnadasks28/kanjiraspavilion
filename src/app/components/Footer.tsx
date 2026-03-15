import { motion } from "motion/react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Venues", href: "#venues" },
  { label: "Amenities", href: "#amenities" },
  { label: "Gallery", href: "#gallery" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/kanjiras_luxeves_pavilion/",
    label: "Instagram",
  },
  { icon: Twitter, href: "#", label: "Twitter" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--green-dark)] text-white">
      {/* SEO Content Band */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
            <div>
              <h4 className="text-[var(--gold)] text-sm mb-3 tracking-wide uppercase">
                Destination Wedding Venue in Kerala
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Kanjira's Luxeves Pavilion is Kerala's premier luxury backwater
                wedding destination, offering three world-class venue spaces —
                Grand Lawn (2000 guests), Celebration Pavilion (400 guests), and
                Intimate Pavilion (100 guests) — set along the scenic backwaters
                of Thripreyar, Kerala.
              </p>
            </div>

            <div>
              <h4 className="text-[var(--gold)] text-sm mb-3 tracking-wide uppercase">
                Backwater Wedding Venue
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Located in the serene Kerala backwater region, our outdoor
                wedding lawn and elegant covered pavilions create a breathtaking
                destination wedding venue surrounded by tranquil waters, lush
                coconut groves, and stunning natural beauty.
              </p>
            </div>

            <div>
              <h4 className="text-[var(--gold)] text-sm mb-3 tracking-wide uppercase">
                Wedding Events We Host
              </h4>
              <p className="text-white/60 text-xs leading-relaxed">
                Grand wedding ceremonies · Reception dinners · Engagement
                functions · Mehendi & Haldi events · Sangeet nights · Corporate
                events · Podcasts · Private celebrations in Kerala.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Brand Section */}
          <div className="max-w-xl">
            <h3
              className="text-3xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Kanjira's Luxeves Pavilion
            </h3>

            <p className="text-white/80 mb-3 leading-relaxed">
              Where backwaters meet beautiful beginnings. Experience the magic
              of Kerala's serene landscapes as the backdrop to your
              once-in-a-lifetime celebration.
            </p>

            <p className="text-white/50 text-xs mb-6 leading-relaxed">
              A luxury destination wedding venue in the Kerala backwaters —
              proudly hosting grand weddings, intimate ceremonies, and
              destination celebrations since 2025.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-white/80">
                <MapPin size={18} className="text-[var(--gold)]" />
                <span className="text-sm">
                  Boattukadavu Road, Thripreyar, Kerala
                </span>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <Phone size={18} className="text-[var(--gold)]" />
                <span className="text-sm">+91 9995427799</span>
                <span className="text-sm">+91 9577331122</span>
              </div>

              <div className="flex items-center space-x-3 text-white/80">
                <Mail size={18} className="text-[var(--gold)]" />
                <span className="text-sm">kanjiraspavilion@gmail.com</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-3 mt-5">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[var(--gold)] transition-all duration-300"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Icon size={16} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-xl mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Quick Links
            </h4>

            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-white/80 hover:text-[var(--gold)] transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[var(--gold)] to-transparent" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-white/60 text-xs text-center md:text-left">
          © 2026 Kanjira's Luxeves Pavilion. All rights reserved. | Luxury
          Backwater Wedding Destination in Kerala, India.
        </p>
      </div>
    </footer>
  );
}
