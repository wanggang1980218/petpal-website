import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, PawPrint } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: '首页', href: '#hero' },
  { label: '案例展示', href: '#cases' },
  { label: '定价方案', href: '#pricing' },
  { label: '立即定制', href: '#customize' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-[hsl(30_60%_97%)]/85 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link
          to="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
          className="flex items-center gap-2 font-bold text-lg text-foreground hover:text-primary transition-colors"
        >
          <div className="size-9 rounded-xl bg-gradient-to-br from-primary to-orange-400 text-white flex items-center justify-center shadow-md">
            <PawPrint className="size-5" />
          </div>
          <span className="tracking-tight">
            萌宠桌宠 <span className="text-primary">PetPal</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all text-muted-foreground hover:text-foreground hover:bg-accent/50"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#customize"
            onClick={(e) => { e.preventDefault(); handleNavClick('#customize'); }}
            className="ml-2 px-5 py-2 rounded-full bg-gradient-to-r from-primary to-orange-400 text-white text-sm font-medium shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all"
          >
            立即定制
          </a>
        </nav>

        {/* Mobile menu button */}
        {isMobile && (
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            aria-label="菜单"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        )}
      </div>

      {/* Mobile menu */}
      {isMobile && mobileOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md border-b border-border/40">
          <nav className="max-w-7xl mx-auto px-4 py-3 flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                className="px-4 py-3 rounded-lg text-sm font-medium transition-all text-foreground hover:bg-accent/50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
