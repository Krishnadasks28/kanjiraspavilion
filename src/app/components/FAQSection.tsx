import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What is the total guest capacity at Kanjira's Luxeves Pavilion?",
    answer:
      "Kanjira's Luxeves Pavilion offers three distinct wedding venue spaces to accommodate celebrations of every scale. The Grand Lawn — our flagship outdoor wedding lawn — can host up to 1,000 guests and is ideal for large grand wedding ceremonies and receptions. The Celebration Pavilion accommodates up to 400 guests in a covered, climate-controlled setting. The Intimate Pavilion is designed for up to 100 guests and is perfect for private pre-wedding events. In total, our destination wedding venue in Kerala can comfortably host wedding celebrations for groups of any size.",
  },
  {
    question: "Is Kanjira's Luxeves Pavilion suitable for destination weddings in Kerala?",
    answer:
      "Absolutely. Kanjira's Luxeves Pavilion is one of Kerala's most sought-after destination wedding venues, situated along the iconic Kerala backwaters in the Alleppey (Alappuzha) region. Our location, surrounded by tropical palm groves and serene waterways, provides the quintessential Kerala backwater wedding experience. We have hosted hundreds of destination weddings for couples flying in from across India and internationally, offering full event coordination, local accommodation arrangements, and seamless logistics support.",
  },
  {
    question: "What wedding events can be hosted at the venue?",
    answer:
      "Kanjira's Luxeves Pavilion is equipped to host every stage of your wedding celebration. This includes traditional Hindu wedding ceremonies (Muhurtam), Christian and interfaith weddings, Muslim Nikah ceremonies, engagement functions, Mehendi and Haldi ceremonies, bridal showers and bachelor parties, wedding reception dinners, Sangeet nights, and multi-day destination wedding packages. Each of our three venue spaces can be customized for specific events with tailored décor, seating, and catering arrangements.",
  },
  {
    question: "Is parking available for wedding guests at the venue?",
    answer:
      "Yes, Kanjira's Luxeves Pavilion provides ample on-site parking for all wedding guests. Our dedicated parking area can accommodate over 200 vehicles comfortably.We ensure a premium arrival experience for your guests from the moment they reach our backwater wedding venue.",
  },
  {
    question: "Are bridal preparation rooms available at the venue?",
    answer:
      "Yes. Our exclusive Bridal Suite is a beautifully designed private preparation room reserved for the bride and her wedding party. Equipped with full-length mirrors and professional vanity stations it provides the perfect sanctuary before the ceremony. A separate groom's preparation room is also available on request. Both spaces ensure that the wedding party begins their celebration day in comfort and luxury.",
  },
  {
    question: "Can the venue be decorated according to our theme?",
    answer:
      "Absolutely. All three venues at Kanjira's Luxeves Pavilion offer a blank-canvas setup that can be transformed to match any wedding theme — from traditional Kerala floral décor to royal Mughal-inspired setups, contemporary minimalist aesthetics, or romantic garden themes. Our in-house décor partners and our open-vendor policy allow couples to bring their preferred decorators to create the wedding environment of their dreams.",
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
      className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-[var(--ivory)]"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            className="w-16 h-1 bg-[var(--gold)] mx-auto mb-6"
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
            <HelpCircle className="text-[var(--gold)]" size={28} />
            <h2 className="text-4xl md:text-5xl text-[var(--green-dark)]">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <motion.p
            className="text-lg text-[var(--green-medium)] max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Everything you need to know about hosting your dream destination wedding at Kerala's most celebrated backwater venue.
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
                className={`bg-white rounded-xl shadow-sm overflow-hidden border transition-all duration-300 ${
                  openIndex === index
                    ? "border-[var(--gold)]/40 shadow-md"
                    : "border-transparent hover:border-[var(--gold)]/20"
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
                          ? "text-[var(--green-dark)]"
                          : "text-[var(--green-dark)] group-hover:text-[var(--green-medium)]"
                      }`}
                      style={{ fontFamily: "'Playfair Display', serif" }}
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
                          ? "text-[var(--gold)]"
                          : "text-[var(--green-medium)]"
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
                        <div className="w-full h-px bg-[var(--gold)]/20 mb-4" />
                        <p className="text-[var(--green-medium)] leading-relaxed text-sm md:text-base">
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
          className="mt-12 text-center p-8 bg-[var(--green-dark)] rounded-2xl"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p
            className="text-xl text-[var(--gold-light)] mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Still have questions?
          </p>
          <p className="text-white/80 text-sm mb-6">
            Our wedding specialists are available to help you plan every detail of your destination wedding in Kerala.
          </p>
          <button
            onClick={() => {
              const element = document.querySelector("#contact");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3 bg-[var(--gold)] text-[var(--green-dark)] rounded-md hover:bg-[var(--gold-light)] transition-all duration-300 hover:shadow-lg"
          >
            Contact Our Wedding Team
          </button>
        </motion.div>
      </div>
    </section>
  );
}
