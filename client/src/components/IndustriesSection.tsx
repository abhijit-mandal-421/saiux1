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
  Package 
} from 'lucide-react';

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
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            We proudly deliver solutions for diverse sectors, adapting to your scale and ambition.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {industries.map((industry, index) => (
            <Card
              key={index}
              className="p-6 bg-background/10 backdrop-blur-sm border-foreground/10 hover-elevate transition-all group text-center"
              data-testid={`industry-card-${index}`}
            >
              <industry.icon className="h-12 w-12 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground/90">{industry.name}</h3>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-foreground/80">
            Whether your organization is local, national, or global — SAIEX adapts to your scale and ambition.
          </p>
        </div>
      </div>
    </section>
  );
}
