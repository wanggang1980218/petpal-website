import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles, Monitor, Box, ArrowRight, Clock } from 'lucide-react';
import {
  MOCK_PRICING_PLANS,
  MOCK_3D_PRODUCTS,
  type IPricingPlan,
  type I3DProduct,
} from '@/data/pricing';

type TabType = 'desktop' | '3dprint';

export default function PricingSection() {
  const [activeTab, setActiveTab] = useState<TabType>('desktop');

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="pricing" className="w-full py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-8"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            定价方案
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            选择适合你的方案
          </h2>
          <p className="text-muted-foreground text-lg">淘宝 / 微店下单，安全有保障</p>
        </motion.div>

        {/* Tab switcher */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-center mb-12"
        >
          <div className="inline-flex p-1 rounded-full bg-secondary border border-border">
            <button
              onClick={() => setActiveTab('desktop')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === 'desktop'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Monitor className="size-4" />
              桌面定制
            </button>
            <button
              onClick={() => setActiveTab('3dprint')}
              className={`flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === '3dprint'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              <Box className="size-4" />
              3D打印
            </button>
          </div>
        </motion.div>

        {/* Desktop pricing cards */}
        {activeTab === 'desktop' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {MOCK_PRICING_PLANS.map((plan: IPricingPlan, i: number) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`relative rounded-2xl border p-6 lg:p-8 flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                  plan.isPopular
                    ? 'border-primary bg-gradient-to-b from-primary/5 to-card shadow-xl shadow-primary/10 lg:scale-105'
                    : 'border-border/60 bg-card shadow-sm hover:shadow-lg hover:border-primary/30'
                }`}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-md flex items-center gap-1">
                    <Sparkles className="size-3.5" />
                    最受欢迎
                  </div>
                )}

                {/* Plan name */}
                <h3 className="text-xl font-bold text-foreground mb-1">{plan.name}</h3>
                <p className="text-sm text-muted-foreground mb-5">{plan.description}</p>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-4xl lg:text-5xl font-bold text-foreground">
                    ¥{plan.price}
                  </span>
                  <span className="text-muted-foreground text-sm ml-1">/ 只</span>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <div className="size-5 rounded-full bg-primary/10 text-primary flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="size-3.5" />
                      </div>
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Button */}
                <button
                  onClick={() => scrollTo('#customize')}
                  className={`w-full py-3 rounded-full text-center font-medium transition-all ${
                    plan.isPopular
                      ? 'bg-primary text-white shadow-md hover:shadow-lg'
                      : 'bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* 3D Print pricing cards */}
        {activeTab === '3dprint' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {MOCK_3D_PRODUCTS.map((product: I3DProduct, i: number) => (
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
                <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full bg-primary text-white text-xs font-medium shadow-md">
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

                  {/* Product icon placeholder */}
                  <div className="size-24 rounded-2xl bg-white/60 backdrop-blur-sm border border-white/80 flex items-center justify-center text-primary/40 group-hover:scale-110 transition-transform duration-500">
                    <Box className="size-12" strokeWidth={1} />
                  </div>

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

                  {/* Specs */}
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
                    {product.features.slice(0, 3).map((feature) => (
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
                    onClick={() => scrollTo('#customize')}
                    className="w-full mt-2 py-2.5 rounded-full border border-border text-sm font-medium text-muted-foreground hover:bg-accent/50 hover:border-primary/40 hover:text-primary transition-all inline-flex items-center justify-center gap-1"
                  >
                    了解详情
                    <ArrowRight className="size-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Bottom notice */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center text-sm text-muted-foreground mt-10"
        >
          💡 所有订单通过淘宝 / 微店交易，不支持网站直接支付，保障您的交易安全
        </motion.p>
      </div>
    </section>
  );
}
