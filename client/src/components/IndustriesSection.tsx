import industriesBg from '@assets/generated_images/Smart_city_industries_background_1484a958.png';
import { Card } from '@/components/ui/card';
import {
  Laptop,
  Heart,
  DollarSign,
  ShoppingBag,
  Home,
  GraduationCap,
  Plane,
  Package,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useState } from 'react';

function TiltCard({ children }: { children: React.ReactNode }) {
  const [rx, setRx] = useState(0);
  const [ry, setRy] = useState(0);
  const [mx, setMx] = useState('50%');
  const [my, setMy] = useState('50%');

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const px = e.clientX - rect.left;
    const py = e.clientY - rect.top;

    // Increase tilt intensity (was ±14°, now ±20°)
    setRy(((px / rect.width) - 0.5) * 20);
    setRx(-((py / rect.height) - 0.5) * 20);
    setMx(`${px}px`);
    setMy(`${py}px`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => {
        setRx(0);
        setRy(0);
      }}
      style={{ transformStyle: 'preserve-3d', perspective: 1200 }}
      animate={{ rotateX: rx, rotateY: ry }}
      transition={{ type: 'spring', stiffness: 160, damping: 12, mass: 0.6 }}
      whileHover={{
        scale: 1.08, // pop-up intensity (was 1.04)
        boxShadow: '0 35px 80px rgba(0,0,0,0.55)', // deeper shadow
      }}
      className="group relative"
    >
      {/* Shine effect */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mx} ${my}, rgba(255,255,255,0.12), transparent 45%)`,
          transform: 'translateZ(1px)',
        }}
      />
      {/* Content layer */}
      <div style={{ transform: 'translateZ(25px)' }}>{children}</div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  const industries = [
    { icon: Laptop, name: 'IT & SaaS' },
    { icon: Heart, name: 'Healthcare' },
    { icon: DollarSign, name: 'Financial Services' },
    { icon: ShoppingBag, name: 'Retail & E-commerce' },
    { icon: Home, name: 'Real Estate' },
    { icon: GraduationCap, name: 'Education' },
    { icon: Plane, name: 'Hospitality & Travel' },
    { icon: Package, name: 'Manufacturing' },
  ];

  return (
    <section
      id="industries"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${industriesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Industries We Serve
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            We proudly deliver solutions for diverse sectors, adapting to your scale and ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 [perspective:1400px]">
          {industries.map((industry, index) => (
            <TiltCard key={index}>
              <Card
                className="p-8 bg-background/10 backdrop-blur-md border-white/10 rounded-2xl text-center transition-transform duration-200"
                data-testid={`industry-card-${index}`}
              >
                <industry.icon className="h-14 w-14 text-blue-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-125" />
                <h3 className="font-semibold text-white/90 text-lg">{industry.name}</h3>
              </Card>
            </TiltCard>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-white/80">
            Whether your organization is local, national, or global — SAIUX adapts to your scale and ambition.
          </p>
        </div>
      </div>
    </section>
  );
}
