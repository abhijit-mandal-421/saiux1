import { useState } from 'react';
import contactBg from '@assets/generated_images/Contact_workspace_background_8c25f232.png';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from '@/components/ui/select';
import { Mail, MapPin, Globe } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const services = [
    'AI Agents',
    'Voice Agents',
    'Digital Marketing',
    'Software Sales',
    'Website Development',
    'Go-To-Market Strategy',
    'Podcast Production',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      console.log('Form submitted:', formData);
      toast({
        title: 'Message Sent!',
        description: 'Thank you for reaching out. Our team will contact you soon.',
      });
      
      setFormData({
        name: '',
        company: '',
        email: '',
        service: '',
        message: '',
      });
      setErrors({});
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
      style={{
        backgroundImage: `url(${contactBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black/70" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Build Your Intelligent Future
          </h2>
          <p className="text-xl text-foreground/90 max-w-3xl mx-auto">
            Whether you are starting your digital journey or scaling exponentially — 
            we are ready to support your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`bg-background/50 border-foreground/20 focus:border-blue-400 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                      data-testid="input-name"
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="bg-background/50 border-foreground/20 focus:border-blue-400"
                      data-testid="input-company"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`bg-background/50 border-foreground/20 focus:border-blue-400 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                    data-testid="input-email"
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service">Service Requirement *</Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                  >
                    <SelectTrigger
                      className={`bg-background/50 border-foreground/20 focus:border-blue-400 ${
                        errors.service ? 'border-red-500' : ''
                      }`}
                      data-testid="select-service"
                    >
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {services.map((service) => (
                        <SelectItem key={service} value={service}>
                          {service}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service && (
                    <p className="text-sm text-red-500">{errors.service}</p>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`bg-background/50 border-foreground/20 focus:border-blue-400 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    data-testid="textarea-message"
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500">{errors.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  data-testid="button-submit"
                >
                  Submit & Our Experts Will Reach Out Soon
                </Button>
              </form>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <Mail className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Email</h3>
              <p className="text-foreground/80">contact@saiux.com</p>
            </Card>

            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <Globe className="h-10 w-10 text-purple-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Global Service</h3>
              <p className="text-foreground/80">Worldwide Delivery</p>
            </Card>

            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <MapPin className="h-10 w-10 text-blue-400 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Headquarters</h3>
              <p className="text-foreground/80">India</p>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold mb-2">Innovate. Automate. Elevate.</p>
          <p className="text-foreground/70">Start your transformation journey today.</p>
        </div>
      </div>
    </section>
  );
}
