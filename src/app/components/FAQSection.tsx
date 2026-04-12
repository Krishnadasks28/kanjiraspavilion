import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the total guest capacity at Kanjira's Luxeves Pavilion?",
    answer:
      "Kanjira's Luxeves Pavilion offers three distinct wedding venue spaces to accommodate celebrations of every scale. Venue 1 — our flagship outdoor wedding lawn — can host up to 2,000 guests and is ideal for large grand wedding ceremonies and receptions. Venue 2 accommodates up to 400 guests in a roof covered open venue. Venue 3 is designed for up to 100 guests and is perfect for private pre-wedding events, Birthday parties etc. In total, our destination wedding venue in Kerala can comfortably host wedding celebrations for groups of any size.",
  },
  {
    question:
      "Is Kanjira's Luxeves Pavilion suitable for destination weddings in Kerala?",
    answer:
      "Absolutely. Kanjira’s Luxeves Pavilion is an ideal choice for destination weddings in Kerala, set along the serene Canoly Canal and surrounded by lush coconut groves and tranquil backwaters. Its picturesque riverside setting offers an authentic and elegant backdrop for wedding celebrations.",
  },
  {
    question: "What events can be hosted at the venue?",
    answer:
      "Kanjira’s Luxeves Pavilion is designed to host a wide range of celebrations and gatherings of every scale. From weddings, receptions, engagements, Mehendi, Haldi, and Sangeet ceremonies to corporate events, cultural programs, private parties, and social gatherings, the venue adapts seamlessly to every occasion.",
  },
  {
    question: "Is parking available for guests at the venue?",
    answer:
      "Yes, Kanjira's Luxeves Pavilion provides ample on-site parking for all guests. Our dedicated parking area can accommodate over 200 vehicles comfortably.We ensure a premium arrival experience for your guests from the moment they reach our backwater wedding venue.",
  },
  {
    question: "Are bridal preparation rooms available at the venue?",
    answer:
      "Yes. Our exclusive Bridal Suite is a beautifully designed private preparation room reserved for the bride and her wedding party. Equipped with full-length mirrors and professional vanity stations it provides the perfect sanctuary before the ceremony. A separate groom's preparation room is also available on request. Both spaces ensure that the wedding party begins their celebration day in comfort and luxury.",
  },
  {
    question: "Can the venue be decorated according to our theme?",
    answer:
      "Absolutely. All three venues at Kanjira’s Luxeves Pavilion offer flexible, blank-canvas spaces that can be customized to suit your vision. With both in-house support and an open-vendor policy, you have the freedom to work with your preferred decorators and create a setting that reflects your style seamlessly.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      ref={ref}
      className="py-24 md:py-40 px-4 sm:px-6 lg:px-8 bg-secondary"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-1 bg-accent mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isInView ? { width: 64 } : {}}
            transition={{ duration: 0.8 }}
          />

          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <HelpCircle className="text-accent" size={28} />
            <h2 className="text-4xl md:text-5xl text-primary font-serif">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything you need to know about hosting your dream destination
            wedding at Kerala's most celebrated backwater venue.
          </motion.p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.07 }}
            >
              <div
                className={`bg-white rounded-lg shadow-sm overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? "border-accent/40 shadow-md"
                    : "border-transparent hover:border-accent/20"
                }`}
              >
                {/* Question Button */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-start justify-between px-6 py-5 text-left group"
                  aria-expanded={openIndex === index}
                >
                  <div className="flex items-start gap-4 flex-1 pr-4">
                    <span
                      className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-xs mt-0.5 transition-all duration-300 ${
                        openIndex === index
                          ? "bg-[var(--gold)] text-white"
                          : "bg-[var(--gold)]/15 text-[var(--gold)]"
                      }`}
                    >
                      {index + 1}
                    </span>
                    <span
                      className={`text-base leading-snug transition-colors duration-300 ${
                        openIndex === index
                          ? "text-primary font-serif font-bold"
                          : "text-primary group-hover:text-muted-foreground"
                      }`}
                    >
                      {faq.question}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0 mt-0.5"
                  >
                    <ChevronDown
                      size={20}
                      className={`transition-colors duration-300 ${
                        openIndex === index
                          ? "text-accent"
                          : "text-muted-foreground"
                      }`}
                    />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 ml-11">
                        <div className="w-full h-px bg-accent/20 mb-4" />
                        <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below FAQ */}
        <motion.div
          className="mt-12 text-center p-8 bg-primary rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-xl text-accent-foreground mb-3 font-serif">
            Still have questions?
          </p>
          <p className="text-white/80 text-sm mb-6">
            Our specialists are available to help you plan every detail of your
            destination wedding in Kerala.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/80 transition-all duration-300 hover:shadow-lg"
          >
            Contact Our Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
