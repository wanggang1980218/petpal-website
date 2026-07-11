import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { MOCK_FAQS, type IFaq } from '@/data/faq';

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>('1');

  const toggle = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            常见问题
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            你可能想知道
          </h2>
          <p className="text-muted-foreground text-lg">
            还有其他问题？随时通过邮箱联系我们
          </p>
        </motion.div>

        {/* FAQ list */}
        <div className="space-y-3">
          {MOCK_FAQS.map((item: IFaq, i: number) => {
            const isOpen = openId === item.id;
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'border-primary/30 bg-primary/[0.03] shadow-sm'
                    : 'border-border/60 bg-card hover:border-primary/20'
                }`}
              >
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex items-center gap-4 p-5 text-left"
                  aria-expanded={isOpen}
                >
                  <div
                    className={`size-8 rounded-lg flex items-center justify-center shrink-0 transition-colors ${
                      isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                    }`}
                  >
                    <HelpCircle className="size-4" />
                  </div>
                  <span className="flex-1 font-medium text-foreground">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`size-5 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-primary' : ''
                    }`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="px-5 pb-5">
                        <div className="pl-12 text-muted-foreground leading-relaxed">
                          {item.answer}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
