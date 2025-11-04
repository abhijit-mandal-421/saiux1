import aboutBg from '@assets/generated_images/AI_neural_network_background_92e116f4.png';
import { Card } from '@/components/ui/card';
import { Lightbulb, Users, Shield, Award } from 'lucide-react';

export default function AboutSection() {
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Never settle — always elevate',
    },
    {
      icon: Users,
      title: 'User-Centricity',
      description: 'People first, technology second',
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'Honest delivery and transparent communication',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality without compromise',
    },
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
          <p className="text-xl text-foreground/90 max-w-4xl mx-auto mb-4">
            SAIEX Pvt Ltd is a new-age technology company that approaches AI differently.
          </p>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            We bridge the gap between complex intelligence systems and human-centered design, 
            creating digital solutions that truly engage people.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10">
            <h3 className="text-2xl font-semibold mb-4 text-blue-400">Our Vision</h3>
            <p className="text-foreground/90">
              To empower organizations worldwide with AI + UX solutions that deliver meaningful 
              impact and sustainable growth.
            </p>
          </Card>
          
          <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10">
            <h3 className="text-2xl font-semibold mb-4 text-purple-400">Our Mission</h3>
            <p className="text-foreground/90">
              To make advanced technology accessible, usable, and profitable for every business 
              through automation, voice-based interfaces, and powerful digital branding.
            </p>
          </Card>
        </div>

        <div className="mb-12">
          <h3 className="text-3xl font-semibold text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 bg-background/5 backdrop-blur-sm border-foreground/10 hover-elevate transition-all"
                data-testid={`value-card-${index}`}
              >
                <value.icon className="h-10 w-10 text-blue-400 mb-4" />
                <h4 className="text-xl font-semibold mb-2">{value.title}</h4>
                <p className="text-foreground/80">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">The SAIEX Advantage</h3>
          <p className="text-2xl text-blue-400 font-semibold">
            AI + User Experience = Technology that works. Experiences that wow.
          </p>
        </div>
      </div>
    </section>
  );
}
