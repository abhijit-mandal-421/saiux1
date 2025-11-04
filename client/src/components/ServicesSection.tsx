import servicesBg from '@assets/generated_images/Digital_transformation_services_background_ef596c56.png';
import { Card } from '@/components/ui/card';
import { Bot, Mic, TrendingUp, ShoppingCart, Globe, Rocket, Radio } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      icon: Bot,
      title: 'AI Agents',
      subtitle: 'Automation that never sleeps',
      description: 'Intelligent chatbots, customer support, lead qualification, and industry-specific knowledge agents.',
      benefits: ['24/7 response capability', 'Reduced support cost', 'Enhanced customer satisfaction'],
    },
    {
      icon: Mic,
      title: 'Voice Agents',
      subtitle: 'Voice-first customer service',
      description: 'Smart voice systems for automating inbound & outbound calls with natural conversation flow.',
      benefits: ['AI Voice IVR', 'Appointment handling', 'Multilingual automation'],
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      subtitle: 'Turn presence into growth',
      description: 'SEO, paid advertising, social media growth, content strategy, and performance analytics.',
      benefits: ['More leads', 'More conversions', 'More revenue'],
    },
    {
      icon: ShoppingCart,
      title: 'Software Sales',
      subtitle: 'Premium business solutions',
      description: 'Certified reseller of productivity tools, business management software, and security solutions.',
      benefits: ['Expert recommendations', 'End-to-end support', 'Implementation assistance'],
    },
    {
      icon: Globe,
      title: 'Website Development',
      subtitle: 'Your digital first impression',
      description: 'UX-driven design, API development, hosting, security, and maintenance for performance and trust.',
      benefits: ['Responsive design', 'High performance', 'Secure & scalable'],
    },
    {
      icon: Rocket,
      title: 'Go-To-Market Strategy',
      subtitle: 'Launch. Scale. Repeat.',
      description: 'Market research, positioning, branding, distribution setup, and demand generation.',
      benefits: ['Market confidence', 'Strategic positioning', 'Revenue acceleration'],
    },
    {
      icon: Radio,
      title: 'Podcast Production',
      subtitle: 'Give your brand a voice',
      description: 'Scriptwriting, recording, audio editing, branding, and publishing on global platforms.',
      benefits: ['Industry authority', 'Global reach', 'Professional quality'],
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${servicesBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/65" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Our Services
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            A full spectrum of digital transformation services under one roof, enabling a seamless 
            journey from ideation to global market scale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-6 bg-background/10 backdrop-blur-md border-foreground/10 hover-elevate transition-all group"
              data-testid={`service-card-${index}`}
            >
              <service.icon className="h-12 w-12 text-blue-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
              <p className="text-sm text-purple-400 mb-3 font-medium">{service.subtitle}</p>
              <p className="text-foreground/80 mb-4">{service.description}</p>
              <ul className="space-y-2">
                {service.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-foreground/70 flex items-start">
                    <span className="text-blue-400 mr-2">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
