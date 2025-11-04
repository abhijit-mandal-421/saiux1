import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [ripples, setRipples] = useState<{ x: number; y: number; id: number }[]>([]);
  
  const fullText = 'AI Innovation Designed for Humans';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTypingComplete(true);
        clearInterval(typingInterval);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  const handleCTAClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();
    
    setRipples((prev) => [...prev, { x, y, id }]);
    
    setTimeout(() => {
      setRipples((prev) => prev.filter((ripple) => ripple.id !== id));
    }, 600);

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 z-10" />
      
      <div className="relative z-20 max-w-5xl mx-auto px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 min-h-[4.5rem] md:min-h-[5.5rem]">
          <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            {displayText}
            {!isTypingComplete && (
              <span className="inline-block w-1 h-12 md:h-16 bg-blue-500 ml-1 animate-blink" />
            )}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto">
          At SAIEX, we believe technology should simplify life — not complicate it.
        </p>
        
        <p className="text-lg md:text-xl text-foreground/70 mb-12 max-w-3xl mx-auto">
          We specialize in Artificial Intelligence solutions that are built with deep understanding 
          of human behavior, ensuring every interaction is smooth, intuitive, and delightful.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg"
            onClick={handleCTAClick}
            data-testid="button-cta-primary"
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                className="absolute bg-white/30 rounded-full animate-ripple pointer-events-none"
                style={{
                  left: ripple.x,
                  top: ripple.y,
                  width: '20px',
                  height: '20px',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
            Book a Free Strategy Call
          </Button>
          
          <Button
            size="lg"
            variant="outline"
            className="bg-background/10 backdrop-blur-md border-foreground/20 text-foreground hover:bg-background/20 px-8 py-6 text-lg"
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            data-testid="button-cta-secondary"
          >
            Explore Services
          </Button>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-foreground/50" />
        </div>
      </div>
    </section>
  );
}
