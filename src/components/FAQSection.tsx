import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the prerequisites for the Divemaster course?",
    answer: "To enroll in the Divemaster course, you need to be a certified PADI Advanced Open Water Diver, have at least 40 logged dives, be EFR (Emergency First Response) certified within the last 24 months, and be at least 18 years old. A medical clearance for diving is also required.",
  },
  {
    question: "How long does it take to become a PADI Instructor?",
    answer: "The path to becoming a PADI Instructor typically takes 4-8 weeks if done consecutively. This includes completing the Divemaster course (2-4 weeks), followed by the Assistant Instructor course (1-2 weeks), and finally the Instructor Development Course (IDC) with the Instructor Examination (IE) which takes about 2 weeks.",
  },
  {
    question: "Do you provide accommodation during the courses?",
    answer: "Yes! We offer comfortable accommodation options for our course participants. Air conditioning is available for an additional 300 THB per night. Contact us for current availability and package deals that include lodging with your course.",
  },
  {
    question: "What equipment do I need to bring?",
    answer: "We provide all necessary diving equipment during your courses. However, we recommend bringing your own mask, wetsuit, and dive computer if you have them. Personal items like reef-safe sunscreen, swimwear, and a logbook are also helpful.",
  },
  {
    question: "What is the difference between recreational and technical diving?",
    answer: "Recreational diving limits you to 40 meters depth with no decompression stops required. Technical diving goes beyond these limits, involving deeper dives, decompression procedures, mixed gases, and specialized equipment. Technical diving requires additional training and certification.",
  },
  {
    question: "Can I work anywhere in the world with a PADI Instructor certification?",
    answer: "Yes! PADI is the world's largest diving organization, and your certification is recognized globally. As a PADI Instructor, you can teach and certify divers at any PADI dive center or resort worldwide.",
  },
  {
    question: "What specialty courses do you offer?",
    answer: "We offer a wide range of specialty courses including Deep Diver, Enriched Air (Nitrox), Wreck Diver, Night Diver, Underwater Photography, Search and Recovery, and many more. Each specialty enhances your skills and can be counted toward your Master Scuba Diver rating.",
  },
  {
    question: "How do I book a course?",
    answer: "Simply contact us via the form below, email us at bas@prodiving.asia, or reach out through WhatsApp. We'll discuss your goals, check availability, and help you choose the right course for your diving journey.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-primary uppercase tracking-[0.2em] text-sm font-medium mb-4">
            Common Questions
          </p>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
            Frequently Asked
            <span className="text-gradient-ocean"> Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know about our diving courses and certifications.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border/50 px-6 shadow-card"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
