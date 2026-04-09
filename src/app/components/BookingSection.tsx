import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { Calendar, Users, Phone, User, Send } from "lucide-react";
import emailjs from "@emailjs/browser"

export function BookingSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    eventDate: "",
    guestCount: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  const templateParams = {
    name: formData.name,
    phone: formData.phone,
    event_date: formData.eventDate,
    guest_count: formData.guestCount,
  };

  emailjs
    .send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      templateParams,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
    .then(
      () => {
        alert(
          "Thank you for your enquiry! We will contact you soon to confirm availability."
        );

        setFormData({
          name: "",
          phone: "",
          eventDate: "",
          guestCount: "",
        });
      },
      (error) => {
        console.error("EmailJS Error:", error);
        alert("Something went wrong. Please try again.");
      }
    );
};

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background with overlay */}
      <div className="absolute inset-0 bg-primary">
        {/* Decorative pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="w-16 h-1 bg-accent mb-6"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            <h2 className="text-4xl md:text-5xl text-white font-serif mb-6">
              Begin Your Journey
            </h2>

            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Let us help you create the wedding of your dreams at Kanjira's
              Luxeves Pavilion. Our dedicated team is ready to make your
              celebration extraordinary.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-white/90">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Phone size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Call Us</p>
                  <p className="text-lg">+91 9995427799</p>
                  <p className="text-lg">+91 9577331122</p>

                </div>
              </div>

              <div className="flex items-center space-x-4 text-white/90">
                <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                  <Calendar size={20} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm text-white/70">Visit Hours</p>
                  <p className="text-lg">Mon - Sun: 9 AM - 6 PM</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-2xl p-8">
              <h3 className="text-2xl text-primary font-serif mb-6">
                Check Availability
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-sm text-primary mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm text-primary mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                {/* Event Date */}
                <div>
                  <label className="block text-sm text-primary mb-2">
                    Event Date
                  </label>
                  <div className="relative">
                    <Calendar
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <input
                      type="date"
                      name="eventDate"
                      value={formData.eventDate}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white"
                    />
                  </div>
                </div>

                {/* Guest Count */}
                <div>
                  <label className="block text-sm text-primary mb-2">
                    Expected Guest Count
                  </label>
                  <div className="relative">
                    <Users
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                      size={20}
                    />
                    <select
                      name="guestCount"
                      value={formData.guestCount}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-3 border border-primary/20 rounded-md focus:outline-none focus:ring-2 focus:ring-accent bg-white appearance-none"
                    >
                      <option value="">Select guest count</option>
                      <option value="50-100">50-100 guests</option>
                      <option value="100-200">100-200 guests</option>
                      <option value="200-400">200-400 guests</option>
                      <option value="400-600">400-600 guests</option>
                      <option value="600+">600+ guests</option>
                    </select>
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-accent text-white py-3 rounded-md hover:bg-accent/80 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Check Availability</span>
                  <Send size={20} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
