import { useState } from 'react';
import { PawPrint, Mail, BookOpen, Info } from 'lucide-react';

export default function Footer() {
  const [tutorialOpen, setTutorialOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <footer className="w-full bg-foreground text-background py-12 mt-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Left - Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                <PawPrint className="size-5" />
              </div>
              <span className="font-bold text-lg">萌宠桌宠 PetPal</span>
            </div>
            <p className="text-sm text-background/70">
              © 2026 PetPal. 让毛孩子陪伴你的每一天。
            </p>
          </div>

          {/* Middle - Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-background/90">快速链接</h4>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setAboutOpen(true)}
                className="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2 w-fit text-left"
              >
                <Info className="size-4" /> 关于我们
              </button>
              <button
                onClick={() => setTutorialOpen(true)}
                className="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2 w-fit text-left"
              >
                <BookOpen className="size-4" /> 使用教程
              </button>
              <a
                href="mailto:hello@petpal.com"
                className="text-sm text-background/70 hover:text-primary transition-colors inline-flex items-center gap-2 w-fit"
              >
                <Mail className="size-4" /> 联系邮箱
              </a>
            </div>
          </div>

          {/* Right - Notice */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm text-background/90">温馨提示</h4>
            <p className="text-sm text-background/70 leading-relaxed">
              本站仅展示样品，所有交易通过第三方平台（淘宝/微店）完成，
              不支持网站直接支付，保障您的交易安全。
            </p>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/10 text-center text-xs text-background/50">
          Made with 🧡 for pet lovers everywhere
        </div>
      </div>

      {/* 使用教程弹窗 */}
      {tutorialOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setTutorialOpen(false)}>
          <div className="bg-card rounded-2xl max-w-lg w-full p-6 text-foreground" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <BookOpen className="size-5 text-primary" />
              使用教程
            </h3>
            <p className="text-muted-foreground mb-4">桌宠安装与使用指南，超简单三步搞定</p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="size-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h4 className="font-semibold mb-1">下载解压</h4>
                  <p className="text-sm text-muted-foreground">收到邮件后下载桌宠压缩包，解压到任意文件夹。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h4 className="font-semibold mb-1">运行程序</h4>
                  <p className="text-sm text-muted-foreground">Windows：双击 Shimeji-ee.exe；Mac：双击 Shimeji.app。</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="size-8 shrink-0 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h4 className="font-semibold mb-1">开始玩耍</h4>
                  <p className="text-sm text-muted-foreground">桌宠会出现在桌面上到处走动，右键点击可以切换动作~</p>
                </div>
              </div>
              <div className="rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                💡 提示：Mac 用户首次打开可能需要在「系统设置 → 隐私与安全性」中允许运行。
              </div>
            </div>
            <button
              onClick={() => setTutorialOpen(false)}
              className="w-full mt-6 py-3 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white font-medium"
            >
              我知道了
            </button>
          </div>
        </div>
      )}

      {/* 关于我们弹窗 */}
      {aboutOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={() => setAboutOpen(false)}>
          <div className="bg-card rounded-2xl max-w-lg w-full p-6 text-foreground" onClick={(e) => e.stopPropagation()}>
            <h3 className="text-xl font-bold mb-2 flex items-center gap-2">
              <Info className="size-5 text-primary" />
              关于我们
            </h3>
            <p className="text-muted-foreground mb-4">萌宠桌宠 PetPal — 让毛孩子陪伴你的每一天</p>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                PetPal 是一个专注于 AI 像素风桌面宠物定制的小团队。我们相信每一只毛孩子都是独一无二的，
                都值得拥有属于自己的专属桌宠。
              </p>
              <p>
                借助先进的 AI 图像生成技术，我们可以把你家宠物的照片变成可爱的像素风格桌宠，
                让它们在你的电脑桌面上跑来跑去、卖萌撒娇，陪伴你工作和学习的每一刻。
              </p>
              <p className="text-foreground font-medium">
                🐱🐶🐰 猫咪、狗狗、仓鼠、兔子…你家的毛孩子，我们都能做！
              </p>
            </div>
            <button
              onClick={() => setAboutOpen(false)}
              className="w-full mt-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium"
            >
              关闭
            </button>
          </div>
        </div>
      )}
    </footer>
  );
}
