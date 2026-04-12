import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { NavLink, useLocation } from "react-router";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Venues", href: "/venues" },
  { label: "Amenities", href: "/amenities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50 || location.pathname !== "/");
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FAF8F0]/98 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <NavLink to="/">
              <motion.div
                className="flex-shrink-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <img
                  src="/images/Logo.PNG"
                  alt="Kanjira's Luxeves Pavilion"
                  className={`h-12 sm:h-12 md:h-14 w-auto transition-all duration-300 ${
                    isScrolled ? "brightness-0" : "brightness-0 invert"
                  }`}
                />
              </motion.div>
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-5 lg:space-x-8">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  <NavLink
                    to={item.href}
                    className={({ isActive }) =>
                      `text-[13px] transition-colors duration-300 hover:text-accent uppercase tracking-[0.2em] ${
                        isActive
                          ? "text-accent"
                          : isScrolled
                            ? "text-primary"
                            : "text-white"
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </div>

            {/* Menu Button */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`p-2 rounded-full transition-colors ${
                  isScrolled ? "text-primary" : "text-white"
                }`}
              >
                {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Menu - Slide-Out Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            {/* Dark Backdrop */}
            <motion.div
              className="fixed inset-0"
              style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Side Panel */}
            <motion.div
              className="fixed inset-y-0 right-0 w-[85vw] max-w-sm flex flex-col shadow-2xl overflow-y-auto"
              style={{
                backgroundColor: "#FAF8F0",
                backgroundImage:
                  "linear-gradient(rgba(250, 248, 240, 0.85), rgba(250, 248, 240, 0.85)), url('/images/bg-texture.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between h-20 px-4 sm:px-6 border-b border-accent/20">
                <div className="w-11" />{" "}
                {/* Spacer matched to button width to perfectly center logo */}
                <img
                  src="/images/Logo.PNG"
                  alt="Kanjira's Luxeves Pavilion"
                  className="h-10 w-auto brightness-0"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-full text-primary hover:text-accent transition-colors"
                >
                  <X size={28} />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col items-center px-8 pt-12 pb-8 space-y-6 text-center">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                  >
                    <NavLink
                      to={item.href}
                      className={({ isActive }) =>
                        `block text-3xl font-serif tracking-wide transition-colors duration-300 ${
                          isActive
                            ? "text-accent"
                            : "text-primary hover:text-accent"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  </motion.div>
                ))}
              </div>

              {/* Footer Section */}
              <div className="py-8 mx-8 border-t border-accent/20">
                <div className="flex justify-center space-x-6 mb-6">
                  <a
                    href="#"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-white transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/kanjiras_luxeves_pavilion/"
                    className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center text-primary hover:bg-accent hover:border-accent hover:text-white transition-all"
                  >
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="18"
                      width="18"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="20"
                        height="20"
                        x="2"
                        y="2"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                    </svg>
                  </a>
                </div>

                <div className="text-center space-y-2 text-primary/80 mb-6">
                  <p className="text-sm font-medium tracking-wider">
                    +91 9995427799
                  </p>
                  <p className="text-sm font-medium tracking-wider">
                    klpthrissur@gmail.com
                  </p>
                </div>

                <p className="text-center text-xs text-primary/50 uppercase tracking-widest">
                  © Copyright Kanjira
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
