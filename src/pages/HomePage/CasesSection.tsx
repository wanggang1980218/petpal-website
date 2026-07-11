import { motion } from 'framer-motion';
import { MOCK_CASES, type ICase } from '@/data/cases';
import { Cat, Dog, Rabbit, Zap } from 'lucide-react';

// Hamster icon not in lucide, use custom SVG
const HamsterIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="9" />
    <circle cx="9" cy="10" r="1.5" fill="currentColor" />
    <circle cx="15" cy="10" r="1.5" fill="currentColor" />
    <path d="M8 14c1.5 2 4.5 2 6 0" />
    <path d="M6 8c-1-1-2 0-1.5 1.5" />
    <path d="M18 8c1-1 2 0 1.5 1.5" />
  </svg>
);

const ICON_MAP = {
  Cat,
  Dog,
  Hamster: HamsterIcon,
  Rabbit,
} as const;

export default function CasesSection() {
  return (
    <section id="cases" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            案例展示
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            看看他们的桌面伙伴
          </h2>
          <p className="text-muted-foreground text-lg">
            猫咪、狗狗、异宠都能做，每一只都是独一无二的小可爱
          </p>
        </motion.div>

        {/* Case cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_CASES.map((item: ICase, i: number) => {
            const Icon = ICON_MAP[item.iconName];
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Image area with gradient background */}
                <div
                  className={`relative aspect-square bg-gradient-to-br ${item.gradientFrom} via-primary/5 ${item.gradientTo} overflow-hidden flex items-center justify-center`}
                >
                  {/* Decorative dot pattern */}
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage:
                        'radial-gradient(circle, hsl(24 100% 63%) 1px, transparent 1px)',
                      backgroundSize: '20px 20px',
                    }}
                  />

                  {/* Icon */}
                  <Icon
                    className="size-24 text-primary/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    strokeWidth={1.5}
                  />

                  {/* Pixel corner decorations */}
                  <div className="absolute top-3 left-3 size-3 border-t-2 border-l-2 border-primary/40" />
                  <div className="absolute top-3 right-3 size-3 border-t-2 border-r-2 border-primary/40" />
                  <div className="absolute bottom-3 left-3 size-3 border-b-2 border-l-2 border-primary/40" />
                  <div className="absolute bottom-3 right-3 size-3 border-b-2 border-r-2 border-primary/40" />
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-foreground">{item.name}</h3>
                    <span className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground font-medium">
                      {item.petType}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Zap className="size-4 text-primary" />
                    <span>
                      <span className="font-semibold text-foreground">{item.actionCount}</span> 个动作
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
