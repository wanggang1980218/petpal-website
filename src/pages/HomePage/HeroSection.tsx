import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, MonitorPlay } from 'lucide-react';

const HERO_IMAGE = 'https://aka.doubaocdn.com/s/kS2L1wssU1';

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="w-full pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary/10 via-background to-secondary/30"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Sparkles className="size-4" />
              AI 像素风桌宠定制
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              你的照片、你的毛孩子
              <br />
              变成
              <span className="bg-gradient-to-r from-primary to-orange-400 bg-clip-text text-transparent">
                {' '}桌面伙伴
              </span>
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
              上传一张宠物照片，AI 自动生成全套可动桌面宠物，
              支持 Windows / Mac，让毛孩子每天陪伴你的屏幕。
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => scrollTo('#customize')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all"
              >
                立即定制我的桌宠
                <ArrowRight className="size-4" />
              </button>
              <button
                onClick={() => scrollTo('#cases')}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-card border border-border text-foreground font-medium hover:bg-accent/50 hover:border-primary/30 transition-all"
              >
                <MonitorPlay className="size-4" />
                查看案例
              </button>
            </div>

            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500" />
                支持 Windows
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500" />
                支持 macOS
              </div>
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-green-500" />
                24h 交付
              </div>
            </div>
          </motion.div>

          {/* Right - Hero image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-orange-300/10 to-secondary/30 rounded-3xl blur-2xl -z-10" />
            <div className="relative rounded-2xl overflow-hidden border-4 border-white shadow-2xl bg-card">
              <img
                src={HERO_IMAGE}
                alt="桌面宠物在电脑上运行效果"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border/50"
            >
              <div className="text-xs text-muted-foreground">已定制</div>
              <div className="text-lg font-bold text-primary">3,280+</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-3 border border-border/50"
            >
              <div className="text-xs text-muted-foreground">好评率</div>
              <div className="text-lg font-bold text-green-600">99.2%</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
