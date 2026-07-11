import { motion } from 'framer-motion';
import { Box, KeyRound, Flame, Crown, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { MOCK_3D_PRODUCTS, type I3DProduct } from '@/data/three-d-print';

const ICON_MAP = {
  Box,
  KeyRound,
  Flame,
  Crown,
} as const;

export default function ThreeDPrintSection() {
  return (
    <section
      id="three-d-print"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="size-4" />
            新品上线 · 萌宠3D打印
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            萌宠3D打印 ·{' '}
            <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
              把爱宠握在手心
            </span>
          </h2>
          <p className="text-muted-foreground text-lg">
            基于宠物照片，高精度3D打印实体摆件，树脂/金属多种材质可选
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOCK_3D_PRODUCTS.map((product: I3DProduct, i: number) => {
            const Icon = ICON_MAP[product.iconName];
            return (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-card rounded-2xl border border-border/60 overflow-hidden shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300"
              >
                {/* Category badge */}
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white text-xs font-medium shadow-md">
                  {product.category}
                </div>

                {/* Image area */}
                <div
                  className={`relative aspect-square bg-gradient-to-br ${product.gradientFrom} via-primary/5 ${product.gradientTo} overflow-hidden flex items-center justify-center`}
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

                  {/* Product icon */}
                  <Icon
                    className="size-24 text-primary/60 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500"
                    strokeWidth={1.5}
                  />

                  {/* Pixel corner decorations */}
                  <div className="absolute top-3 right-3 size-3 border-t-2 border-r-2 border-primary/40" />
                  <div className="absolute bottom-3 left-3 size-3 border-b-2 border-l-2 border-primary/40" />
                  <div className="absolute bottom-3 right-3 size-3 border-b-2 border-r-2 border-primary/40" />
                </div>

                {/* Info */}
                <div className="p-5 space-y-3">
                  {/* Name + Price */}
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-foreground flex items-center gap-1">
                      {product.name}
                      <ArrowRight className="size-4 text-muted-foreground" />
                    </h3>
                    <span className="text-xl font-bold text-primary">¥{product.price}</span>
                  </div>

                  {/* Specs row 1: 工艺 + 尺寸 */}
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary shrink-0" />
                      工艺: {product.process}
                    </span>
                    <span className="text-border">|</span>
                    <span className="flex items-center gap-1.5">
                      <span className="size-1.5 rounded-full bg-primary shrink-0" />
                      {product.size}
                    </span>
                  </div>

                  {/* Lead time */}
                  <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                    <Clock className="size-3.5" />
                    工期: {product.leadTime}
                  </div>

                  {/* Features */}
                  <ul className="space-y-1.5 pt-3 border-t border-border/40">
                    {product.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-xs text-foreground/70"
                      >
                        <span className="size-1 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Button */}
                  <button
                    onClick={() => {
                      const el = document.querySelector('#customize');
                      if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-2 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:bg-accent/50 hover:border-primary/40 hover:text-primary transition-all inline-flex items-center justify-center gap-1"
                  >
                    了解详情
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          🎁 所有3D打印产品均支持萌宠照片定制，联系客服咨询具体方案
        </motion.p>
      </div>
    </section>
  );
}
