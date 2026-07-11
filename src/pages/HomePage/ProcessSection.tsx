import { motion } from 'framer-motion';
import { Upload, Sparkles, Mail } from 'lucide-react';

const STEPS = [
  {
    icon: Upload,
    title: '上传照片',
    desc: '上传一张清晰的宠物正面照，光线充足效果最好',
    color: 'bg-primary',
    num: '01',
  },
  {
    icon: Sparkles,
    title: 'AI 生成',
    desc: '人工智能自动生成全套动画精灵图，像素风超可爱',
    color: 'bg-primary',
    num: '02',
  },
  {
    icon: Mail,
    title: '邮件交付',
    desc: '24 小时内收到完整桌宠包，解压即用超简单',
    color: 'bg-primary',
    num: '03',
  },
];

export default function ProcessSection() {
  return (
    <section
      id="process"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            定制流程
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            三步拥有专属桌宠
          </h2>
          <p className="text-muted-foreground text-lg">
            简单三步，让你的毛孩子跃然屏幕之上
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-border via-primary/30 to-border" />

          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10"
              >
                <div className="bg-card rounded-2xl border border-border/60 p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300 text-center h-full">
                  {/* Step number badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-primary text-white text-xs font-bold shadow-md">
                    第 {step.num} 步
                  </div>

                  {/* Icon circle */}
                  <div
                    className={`size-14 mx-auto mb-5 rounded-full ${step.color} text-white flex items-center justify-center shadow-md`}
                  >
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">{step.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
