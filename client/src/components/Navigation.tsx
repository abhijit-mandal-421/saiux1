import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface NavigationProps {
  activeSection: string;
}

export default function Navigation({ activeSection }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const leftNavItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'case-studies', label: 'Case Studies' },
    
  ];

  const rightNavItems = [{ id: 'contact', label: 'Contact' }];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <nav
        role="navigation"
        aria-label="Main navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled
            ? 'bg-gradient-to-r from-black/90 via-slate-900/85 to-black/90 backdrop-blur-xl border-white/10 shadow-lg'
            : 'bg-gradient-to-r from-black/40 via-slate-800/30 to-black/40 backdrop-blur-md border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* LOGO */}
            <a
              href="https://saiux-site.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline group whitespace-nowrap"
            >
              <div className="flex items-center transition-transform duration-300 group-hover:scale-[1.05]">
                <img
                  src="/favicon.png"
                  alt="SAIUX Logo"
                  className="w-20 h-20 sm:w-16 sm:h-20 object-contain drop-shadow-[0_0_12px_rgba(139,92,246,0.5)]
                    group-hover:drop-shadow-[0_0_18px_rgba(139,92,246,0.7)] transition-all duration-500 ease-in-out"
                />
                <div className="flex flex-col leading-tight">
                  <span
                    className="text-2xl sm:text-2xl font-extrabold tracking-tight
                      bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent
                      drop-shadow-[0_0_10px_rgba(139,92,246,0.4)]
                      group-hover:drop-shadow-[0_0_14px_rgba(139,92,246,0.6)]
                      transition-all duration-300"
                  >
                    SAIUX
                  </span>
                  <span className="text-xs sm:text-sm text-white/80 font-medium tracking-wide group-hover:text-purple-300 transition-colors duration-300">
                    Tech Private Limited
                  </span>
                </div>
              </div>
            </a>

            {/* DESKTOP MENU — RIGHT ALIGNED */}
            <div className="hidden md:flex items-center gap-10 ml-auto">
              {/* LEFT NAV ITEMS */}
              <div className="flex items-center gap-2">
                {leftNavItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-white/80'
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}
              </div>

              {/* RIGHT NAV + POLICIES */}
              <div className="flex items-center ">
                {/* CONTACT */}
                {rightNavItems.map((item) => (
                  <Button
                    key={item.id}
                    variant="ghost"
                    onClick={() => scrollToSection(item.id)}
                    className={`${
                      activeSection === item.id
                        ? 'bg-primary/10 text-primary'
                        : 'text-white/80'
                    }`}
                  >
                    {item.label}
                  </Button>
                ))}

                {/* POLICIES DROPDOWN */}
                <div className="relative group">
                  <Button variant="ghost" className="text-white/80">
                    Policies ▾
                  </Button>
                  <div className="absolute right-0 mt-2 hidden group-hover:block bg-black/90 border border-white/20 rounded-lg p-4 w-52 space-y-3 shadow-xl">
                    <a href="TermsandConditions.html" className="block text-white/80 hover:text-white">Terms of Service</a>
                    <a href="PrivacyPolicy.html" className="block text-white/80 hover:text-white">Privacy Policy</a>
                    <a href="RefundPolicy.html" className="block text-white/80 hover:text-white">Refund Policy</a>
                    <a href="ShippingPolicy.html" className="block text-white/80 hover:text-white">Shipping Policy</a>
                    <a href="ContactInformation.html" className="block text-white/80 hover:text-white">Contact Information</a>
                  </div>
                </div>
              </div>
            </div>

            {/* MOBILE BUTTON */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg md:hidden pt-20">
          <div className="flex flex-col items-center gap-4 p-8">
            {[...leftNavItems, ...rightNavItems, { id: 'policies', label: 'Policies' }].map(
              (item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  size="lg"
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full text-lg ${
                    activeSection === item.id
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground'
                  }`}
                >
                  {item.label}
                </Button>
              )
            )}
          </div>
        </div>
      )}
    </>
  );
}
