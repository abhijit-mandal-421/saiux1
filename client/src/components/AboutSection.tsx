import aboutBg from '@assets/generated_images/AI_neural_network_background_92e116f4.png';
import { Card } from '@/components/ui/card';
import { Lightbulb, Users, Shield, Award } from 'lucide-react';
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
        scale: 1.08,
        boxShadow: '0 35px 80px rgba(0,0,0,0.55)',
      }}
      className="group relative"
    >
      {/* shine layer */}
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-200 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${mx} ${my}, rgba(255,255,255,0.12), transparent 45%)`,
          transform: 'translateZ(1px)',
        }}
      />
      <div style={{ transform: 'translateZ(25px)' }}>{children}</div>
    </motion.div>
  );
}

export default function AboutSection() {
  const values = [
    { icon: Lightbulb, title: 'Innovation', description: 'Never settle — always elevate' },
    { icon: Users, title: 'User-Centricity', description: 'People first, technology second' },
    { icon: Shield, title: 'Integrity', description: 'Honest delivery and transparent communication' },
    { icon: Award, title: 'Excellence', description: 'Quality without compromise' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${aboutBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Who We Are
          </h2>
          <p className="text-xl text-white/90 max-w-4xl mx-auto mb-4">
            SAIUX Pvt Ltd is a new-age technology company that approaches AI differently.
          </p>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            We bridge the gap between complex intelligence systems and human-centered design, 
            creating digital solutions that truly engage people.
          </p>
        </div>

        {/* Vision & Mission with 3D tilt */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 [perspective:1200px]">
          <TiltCard>
            <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Vision</h3>
              <p className="text-white/90">
                To empower organizations worldwide with AI + UX solutions that deliver meaningful 
                impact and sustainable growth.
              </p>
            </Card>
          </TiltCard>

          <TiltCard>
            <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10 rounded-2xl">
              <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
              <p className="text-white/90">
                To make advanced technology accessible, usable, and profitable for every business 
                through automation, voice-based interfaces, and powerful digital branding.
              </p>
            </Card>
          </TiltCard>
        </div>

        {/* Values with 3D pop-up */}
        <div className="mb-12">
          <h3 className="text-3xl text-purple-400 font-semibold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 [perspective:1200px]">
            {values.map((value, index) => (
              <TiltCard key={index}>
                <Card
                  className="p-6 bg-background/5 backdrop-blur-sm border-foreground/10 rounded-2xl text-center"
                  data-testid={`value-card-${index}`}
                >
                  <value.icon className="h-10 w-10 text-blue-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-125" />
                  <h4 className="text-2xl text-purple-400 font-semibold mb-2">{value.title}</h4>
                  <p className="text-white/80">{value.description}</p>
                </Card>
              </TiltCard>
            ))}
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center">
          <h3 className="text-3xl text-purple-400 font-semibold mb-4">The SAIUX Advantage</h3>
          <p className="text-2xl text-white/90 font-semibold">
            AI + User Experience = Technology that works. Experiences that wow.
          </p>
        </div>
      </div>
    </section>
  );
}
