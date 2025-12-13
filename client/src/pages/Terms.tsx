import React from "react";
import { Mail, MapPin, Globe } from "lucide-react";

export default function Terms() {
  return (
    <section className="min-h-screen bg-black text-white py-20 px-6 md:px-16 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
          Terms & Conditions
        </h1>

        {/* Intro */}
        <p className="text-white/80 mb-6">
          Welcome to <strong>SAIUX Pvt Ltd</strong>. These Terms & Conditions govern your use of
          our website and services. By accessing or engaging with us, you agree to these terms.
        </p>

        {/* Sections */}
        <h2 className="text-2xl font-semibold text-blue-400 mt-10 mb-3">
          1. Use of Our Services
        </h2>
        <p className="text-white/70 mb-6">
          You agree to use our services only for lawful purposes and in compliance with applicable
          laws. You shall not misuse or interfere with our systems, data, or intellectual property.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-10 mb-3">
          2. Intellectual Property Rights
        </h2>
        <p className="text-white/70 mb-6">
          All content, including software, visuals, and text displayed on our website, are owned or
          licensed by <strong>SAIUX Pvt Ltd</strong>. Reproduction or distribution without prior
          written consent is strictly prohibited.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-10 mb-3">
          3. Limitation of Liability
        </h2>
        <p className="text-white/70 mb-6">
          SAIUX Pvt Ltd shall not be held liable for any direct, indirect, or consequential losses
          resulting from the use of our website or services.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-10 mb-3">
          4. Privacy and Data Protection
        </h2>
        <p className="text-white/70 mb-6">
          Your personal data is handled in accordance with our{" "}
          <a
            href="/privacy-policy"
            className="text-purple-400 underline hover:text-purple-300"
          >
            Privacy Policy
          </a>
          . Please review it to understand how we collect and process your data.
        </p>

        <h2 className="text-2xl font-semibold text-blue-400 mt-10 mb-3">
          5. Governing Law
        </h2>
        <p className="text-white/70 mb-6">
          These Terms shall be governed by the laws of India. Any disputes will be resolved under
          the jurisdiction of Indian courts.
        </p>

        {/* Divider */}
        <div className="my-12 border-t border-white/10" />

        {/* Contact Section */}
        <div className="mt-10">
          <h2 className="text-3xl font-semibold text-purple-400 mb-6 text-center">
            Contact Us
          </h2>
          <p className="text-white/80 text-center mb-8">
            If you have any questions about these Terms & Conditions or need further information,
            feel free to reach out to us using the contact details below.
          </p>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto text-center">
            {/* Email */}
            <div className="bg-background/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <Mail className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg text-blue-400 font-semibold mb-1">Email</h3>
<a
  href="mailto:saichaitanya7893@gmail.com"
  className="block text-white/80 hover:text-purple-400 transition-colors break-all text-center"
>
  saichaitanya7893@gmail.com
</a>

            </div>

            {/* Global Service */}
            <div className="bg-background/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <Globe className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg text-blue-400 font-semibold mb-1">Global Service</h3>
              <p className="text-white/80">Worldwide Delivery</p>
            </div>

            {/* Headquarters */}
            <div className="bg-background/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl">
              <MapPin className="h-8 w-8 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg text-blue-400 font-semibold mb-1">Headquarters</h3>
              <p className="text-white/80">India</p>
            </div>
          </div>
        </div>

        <p className="text-sm text-white/60 italic mt-12 text-center">
          Last updated: November 5, 2025
        </p>
      </div>
    </section>
  );
}
