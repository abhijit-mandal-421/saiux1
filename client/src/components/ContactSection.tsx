import { useState } from 'react';
import emailjs from '@emailjs/browser';
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
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { Mail, Globe, MapPin } from 'lucide-react';

type FormData = {
  name: string;
  company: string;
  email: string;
  service: string;
  message: string;
};

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<Record<keyof FormData, string>>({
    name: '',
    company: '',
    email: '',
    service: '',
    message: '',
  });

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
    const newErrors = { ...errors };
    newErrors.name = formData.name.trim().length >= 2 ? '' : 'Name must be at least 2 characters';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    } else {
      newErrors.email = '';
    }
    newErrors.service = formData.service ? '' : 'Please select a service';
    newErrors.message =
      formData.message.trim().length >= 10 ? '' : 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.values(newErrors).every((v) => v === '');
  };

  const handleChange = <K extends keyof FormData>(field: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Format date & time
      const now = new Date();
      const sent_date = now.toLocaleDateString('en-IN', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      });
      const sent_time = now.toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
      });

      const templateParams = {
        from_name: formData.name,
        company: formData.company || 'Not provided',
        from_email: formData.email,
        service: formData.service,
        message: formData.message,
        sent_date,
        sent_time,
      };

      // 1️⃣ Send message to Admin (you)
      await emailjs.send(
        'service_tqtv6th', // Service ID
        'template_gb2e85b', // Admin template
        {
          ...templateParams,
          to_email: 'saichaitanya7893@gmail.com',
        },
        '83aHVbR0PnZzvFN0Y' // Public Key
      );

      // 2️⃣ Send Auto Reply to User
      await emailjs.send(
        'service_tqtv6th', // Service ID
        'template_cebtlax', // User template
        {
          ...templateParams,
          to_email: formData.email, // Send to user
        },
        '83aHVbR0PnZzvFN0Y'
      );

      toast({
        title: 'Message Sent Successfully!',
        description: 'You will receive a confirmation email shortly.',
        className: 'bg-green-600 border-green-500 text-white',
      });

      setFormData({
        name: '',
        company: '',
        email: '',
        service: '',
        message: '',
      });
      setErrors({
        name: '',
        company: '',
        email: '',
        service: '',
        message: '',
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast({
        title: 'Error Sending Message',
        description: 'Please try again or contact us directly at saichaitanya7893@gmail.com',
        variant: 'destructive',
        className: 'bg-red-600 border-red-500 text-white',
      });
    } finally {
      setIsSubmitting(false);
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
            Let&apos;s Build Your Intelligent Future
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Whether you are starting your digital journey or scaling exponentially — we are ready to
            support your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-background/10 backdrop-blur-md border-foreground/10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-white">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={(e) => handleChange('name', e.target.value)}
                      className={`bg-background/50 border-foreground/20 focus:border-blue-400 text-white placeholder:text-white/60 ${
                        errors.name ? 'border-red-500' : ''
                      }`}
                    />
                    {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company" className="text-white">
                      Company
                    </Label>
                    <Input
                      id="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={(e) => handleChange('company', e.target.value)}
                      className="bg-background/50 border-foreground/20 focus:border-blue-400 text-white placeholder:text-white/60"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    className={`bg-background/50 border-foreground/20 focus:border-blue-400 text-white placeholder:text-white/60 ${
                      errors.email ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.email && <p className="text-sm text-red-500">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="service" className="text-white">
                    Service Requirement *
                  </Label>
                  <Select
                    value={formData.service}
                    onValueChange={(value) => handleChange('service', value)}
                  >
                    <SelectTrigger
                      className={`bg-background/50 border-foreground/20 focus:border-blue-400 text-white ${
                        errors.service ? 'border-red-500' : ''
                      }`}
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
                  {errors.service && <p className="text-sm text-red-500">{errors.service}</p>}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-white">
                    Message *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={5}
                    className={`min-h-32 resize-none bg-background/50 border-foreground/20 focus:border-blue-400 text-white placeholder:text-white/60 ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                  />
                  {errors.message && <p className="text-sm text-red-500">{errors.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Submit & Our Experts Will Reach Out Soon'}
                </Button>
              </form>
            </Card>
          </div>

          {/* Right: Info Cards */}
          <div className="space-y-6">
            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <div className="flex items-start gap-4">
                <Mail className="h-10 w-10 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-blue-400 font-semibold text-lg mb-1">Email</h3>
                  <p className="text-white/80">info@saiux.com</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <div className="flex items-start gap-4">
                <Globe className="h-10 w-10 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-blue-400 font-semibold text-lg mb-1">Global Service</h3>
                  <p className="text-white/80">Worldwide Delivery</p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-background/10 backdrop-blur-md border-foreground/10">
              <div className="flex items-start gap-4">
                <MapPin className="h-10 w-10 text-purple-400 mt-1" />
                <div>
                  <h3 className="text-blue-400 font-semibold text-lg mb-1">Headquarters</h3>
                  <p className="text-white/80">India</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-2xl font-semibold text-white mb-2">Innovate. Automate. Elevate.</p>
          <p className="text-white/70">Start your transformation journey today.</p>
        </div>
      </div>
    </section>
  );
}
