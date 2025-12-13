import caseStudiesBg from '@assets/generated_images/Data_analytics_case_studies_33f889d4.png';
import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Zap, Award } from 'lucide-react';
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

    // Stronger tilt (±24°)
    setRy(((px / rect.width) - 0.5) * 24);
    setRx(-((py / rect.height) - 0.5) * 24);
    setMx(`${px}px`);
    setMy(`${py}px`);
  };

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={() => { setRx(0); setRy(0); }}
      style={{ transformStyle: 'preserve-3d', perspective: 1400 }}
      animate={{ rotateX: rx, rotateY: ry }}
      transition={{ type: 'spring', stiffness: 170, damping: 11, mass: 0.55 }}
      whileHover={{ scale: 1.10, boxShadow: '0 45px 100px rgba(0,0,0,0.6)' }}
      className="group relative"
    >
      {/* bigger, brighter shine */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(640px circle at ${mx} ${my}, rgba(255,255,255,0.14), transparent 46%)`,
          transform: 'translateZ(1px)',
        }}
      />
      {/* lift content more so it really pops */}
      <div style={{ transform: 'translateZ(28px)' }}>{children}</div>
    </motion.div>
  );
}

export default function CaseStudiesSection() {
  const methodology = [
    { step: '1', title: 'Understand', description: 'Business challenges' },
    { step: '2', title: 'Design', description: 'User-first solutions' },
    { step: '3', title: 'Integrate', description: 'Smart technology' },
    { step: '4', title: 'Measure', description: 'Results & optimize' },
    { step: '5', title: 'Scale', description: 'Growth strategies' },
  ];

  const benefits = [
    { icon: TrendingUp, stat: '45-65%', label: 'Cost savings through automation' },
    { icon: Zap,        stat: '3×',     label: 'Faster response times' },
    { icon: Award,      stat: 'Stronger', label: 'Digital footprint & brand credibility' },
    { icon: CheckCircle2, stat: 'AI-driven', label: 'Customer satisfaction' },
  ];

  const testimonials = [
    {
      quote:
        'SAIUX transformed our customer service with their AI agents. Response times improved dramatically and our customers love the instant support.',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart',
    },
    {
      quote:
        'The voice automation system they built for us handles thousands of calls daily with incredible accuracy. A game-changer for our business.',
      author: 'Michael Chen',
      role: 'Operations Director',
      company: 'FinServe Global',
    },
  ];

  return (
    <section
      id="case-studies"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${caseStudiesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Why Choose Us
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Proven success approach with measurable results
          </p>
        </div>

        {/* Methodology */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">Our Methodology</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 [perspective:1200px]">
            {methodology.map((item, index) => (
              <TiltCard key={index}>
                <Card
                  className="p-6 bg-background/10 backdrop-blur-sm border-foreground/10 text-center rounded-2xl"
                  data-testid={`methodology-step-${index}`}
                >
                  <div className="text-4xl font-bold text-blue-400 mb-2">{item.step}</div>
                  <h4 className="text-2xl text-purple-400 font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-white/70">{item.description}</p>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">What Our Partners Gain</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1200px]">
            {benefits.map((benefit, index) => (
              <TiltCard key={index}>
                <Card
                  className="p-6 bg-background/5 backdrop-blur-sm border-foreground/10 text-center rounded-2xl"
                  data-testid={`benefit-card-${index}`}
                >
                  <benefit.icon className="h-12 w-12 text-purple-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-130" />
                  <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.stat}</div>
                  <p className="text-white/80">{benefit.label}</p>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-2xl text-purple-400 font-semibold text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8 [perspective:1200px]">
            {testimonials.map((testimonial, index) => (
              <TiltCard key={index}>
                <Card
                  className="p-8 bg-background/10 backdrop-blur-md border-foreground/10 rounded-2xl"
                  data-testid={`testimonial-card-${index}`}
                >
                  <p className="text-lg text-white/90 mb-6 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-white/70">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-white/80 font-semibold text-sm">TRUSTED BY LEADING COMPANIES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
