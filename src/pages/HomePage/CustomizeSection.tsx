import { useState, useRef, useCallback, type ChangeEvent, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Upload, X, Send, CheckCircle2, Mail, PawPrint, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ALLOWED_TYPES = ['image/jpeg', 'image/png', 'image/jpg'];

export default function CustomizeSection() {
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [plan, setPlan] = useState('recommended');
  const [notes, setNotes] = useState('');
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!ALLOWED_TYPES.includes(file.type)) {
      alert('请上传 JPG 或 PNG 格式的图片');
      return;
    }
    if (file.size > MAX_FILE_SIZE) {
      alert('图片大小不能超过 5MB');
      return;
    }

    setFileName(file.name);
    const reader = new FileReader();
    reader.onload = (ev) => {
      setPreviewUrl(ev.target?.result as string);
    };
    reader.readAsDataURL(file);
  }, []);

  const handleRemoveFile = useCallback(() => {
    setPreviewUrl(null);
    setFileName('');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  }, []);

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!petName.trim()) {
      alert('请输入宠物名字');
      return;
    }
    if (!email.trim() || !validateEmail(email)) {
      alert('请输入有效的邮箱地址');
      return;
    }
    if (!previewUrl) {
      alert('请上传宠物照片');
      return;
    }

    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <section
      id="customize"
      className="w-full py-16 md:py-24 bg-gradient-to-b from-secondary/20 to-background"
    >
      <div className="max-w-3xl mx-auto px-4 md:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            立即定制
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            提交你的宠物照片
          </h2>
          <p className="text-muted-foreground text-lg">
            填写信息后，我们会通过邮件与你确认订单细节
          </p>
        </motion.div>

        {/* Form card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="bg-card rounded-2xl border border-border/60 shadow-lg p-6 md:p-10">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  {/* Photo upload */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      上传宠物照片 <span className="text-red-500">*</span>
                    </Label>
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/jpeg,image/png,image/jpg"
                      onChange={handleFileChange}
                      className="hidden"
                      id="pet-photo"
                    />
                    {!previewUrl ? (
                      <label htmlFor="pet-photo" className="block cursor-pointer">
                        <div className="border-2 border-dashed border-border rounded-xl p-10 text-center hover:border-primary/50 hover:bg-primary/5 transition-all">
                          <div className="size-14 mx-auto mb-3 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                            <Upload className="size-6" />
                          </div>
                          <p className="font-medium text-foreground mb-1">点击上传宠物照片</p>
                          <p className="text-sm text-muted-foreground">支持 JPG / PNG 格式，最大 5MB</p>
                        </div>
                      </label>
                    ) : (
                      <div className="relative inline-block">
                        <div className="relative rounded-xl overflow-hidden border border-border shadow-sm">
                          <img src={previewUrl} alt="预览" className="w-40 h-40 object-cover" />
                        </div>
                        <button
                          type="button"
                          onClick={handleRemoveFile}
                          className="absolute -top-2 -right-2 z-20 size-7 rounded-full bg-red-500 text-white shadow-md flex items-center justify-center hover:bg-red-600 transition-colors"
                        >
                          <X className="size-4" />
                        </button>
                        <p className="text-xs text-muted-foreground mt-2 truncate max-w-[160px]">
                          {fileName}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Pet name */}
                  <div className="space-y-2">
                    <Label htmlFor="pet-name" className="text-sm font-medium text-foreground">
                      宠物名字 <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative">
                      <PawPrint className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="pet-name"
                        type="text"
                        value={petName}
                        onChange={(e) => setPetName(e.target.value)}
                        placeholder="例如：橘座"
                        className="pl-9 h-11"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-foreground">
                      你的邮箱 <span className="text-red-500">*</span>
                      <span className="text-muted-foreground font-normal ml-1">（用于收成品）</span>
                    </Label>
                    <div className="relative">
                      <Mail className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        className="pl-9 h-11"
                      />
                    </div>
                  </div>

                  {/* Plan select */}
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-foreground">
                      选择套餐 <span className="text-red-500">*</span>
                    </Label>
                    <select
                      value={plan}
                      onChange={(e) => setPlan(e.target.value)}
                      className="w-full h-11 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                    >
                      <option value="basic">基础版 ¥19.9</option>
                      <option value="recommended">推荐版 ¥49.9（最受欢迎）</option>
                      <option value="family">全家福 ¥99</option>
                    </select>
                  </div>

                  {/* Notes */}
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="text-sm font-medium text-foreground">
                      特殊要求
                      <span className="text-muted-foreground font-normal ml-1">（选填）</span>
                    </Label>
                    <div className="relative">
                      <FileText className="pointer-events-none absolute left-3 top-3 size-4 text-muted-foreground" />
                      <Textarea
                        id="notes"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="有什么特殊要求可以告诉我们，比如喜欢的颜色、动作偏好等~"
                        className="pl-9 min-h-[100px] resize-none"
                      />
                    </div>
                  </div>

                  {/* Submit */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-12 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white font-semibold shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all text-base"
                  >
                    {isSubmitting ? (
                      <>提交中...</>
                    ) : (
                      <>
                        <Send className="size-4" />
                        提交定制需求
                      </>
                    )}
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    提交即表示您同意我们的服务条款，我们会保护您的隐私
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="text-center py-8 space-y-5"
                >
                  <div className="size-20 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <CheckCircle2 className="size-10" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">感谢提交！</h3>
                    <p className="text-muted-foreground leading-relaxed max-w-md mx-auto">
                      我们会在 24 小时内通过邮件联系你确认订单细节，
                      请留意 <span className="font-medium text-foreground">{email}</span> 邮箱。
                    </p>
                  </div>
                  <div className="pt-4">
                    <Button
                      variant="secondary"
                      onClick={() => {
                        setIsSuccess(false);
                        setPetName('');
                        setEmail('');
                        setPlan('recommended');
                        setNotes('');
                        handleRemoveFile();
                      }}
                      className="rounded-full px-6"
                    >
                      再定制一只
                    </Button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
