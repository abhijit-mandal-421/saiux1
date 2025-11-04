import caseStudiesBg from '@assets/generated_images/Data_analytics_case_studies_33f889d4.png';
import { Card } from '@/components/ui/card';
import { CheckCircle2, TrendingUp, Zap, Award } from 'lucide-react';

export default function CaseStudiesSection() {
  const methodology = [
    { step: '1', title: 'Understand', description: 'Business challenges' },
    { step: '2', title: 'Design', description: 'User-first solutions' },
    { step: '3', title: 'Integrate', description: 'Smart technology' },
    { step: '4', title: 'Measure', description: 'Results & optimize' },
    { step: '5', title: 'Scale', description: 'Growth strategies' },
  ];

  const benefits = [
    {
      icon: TrendingUp,
      stat: '45-65%',
      label: 'Cost savings through automation',
    },
    {
      icon: Zap,
      stat: '3×',
      label: 'Faster response times',
    },
    {
      icon: Award,
      stat: 'Stronger',
      label: 'Digital footprint & brand credibility',
    },
    {
      icon: CheckCircle2,
      stat: 'AI-driven',
      label: 'Customer satisfaction',
    },
  ];

  const testimonials = [
    {
      quote: 'SAIEX transformed our customer service with their AI agents. Response times improved dramatically and our customers love the instant support.',
      author: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart',
    },
    {
      quote: 'The voice automation system they built for us handles thousands of calls daily with incredible accuracy. A game-changer for our business.',
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
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Proven success approach with measurable results
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">Our Methodology</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {methodology.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-background/10 backdrop-blur-sm border-foreground/10 text-center hover-elevate transition-all"
                data-testid={`methodology-step-${index}`}
              >
                <div className="text-4xl font-bold text-blue-400 mb-2">{item.step}</div>
                <h4 className="text-lg font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-foreground/70">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-center mb-12">What Our Partners Gain</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <Card
                key={index}
                className="p-6 bg-background/5 backdrop-blur-sm border-foreground/10 text-center hover-elevate transition-all"
                data-testid={`benefit-card-${index}`}
              >
                <benefit.icon className="h-12 w-12 text-purple-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-blue-400 mb-2">{benefit.stat}</div>
                <p className="text-foreground/80">{benefit.label}</p>
              </Card>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-semibold text-center mb-12">Client Testimonials</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="p-8 bg-background/10 backdrop-blur-md border-foreground/10"
                data-testid={`testimonial-card-${index}`}
              >
                <p className="text-lg text-foreground/90 mb-6 italic">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
                  <p className="text-sm text-foreground/70">{testimonial.role}</p>
                  <p className="text-sm text-blue-400">{testimonial.company}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-8 flex-wrap justify-center">
            <div className="text-foreground/50 font-semibold text-sm">TRUSTED BY LEADING COMPANIES</div>
          </div>
        </div>
      </div>
    </section>
  );
}
