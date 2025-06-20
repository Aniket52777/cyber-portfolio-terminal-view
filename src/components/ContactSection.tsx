
import { Mail, Phone, MapPin, Github, Linkedin, Download, MessageSquare, Globe } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    subject: "",
    message: ""
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "security@cyberexpert.com",
      link: "mailto:security@cyberexpert.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "San Francisco, CA",
      link: "#"
    },
    {
      icon: Globe,
      label: "Website",
      value: "www.cyberexpert.com",
      link: "https://www.cyberexpert.com"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      value: "@cybersec-expert",
      link: "https://github.com/cybersec-expert",
      color: "text-gray-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "/in/cybersecurity-expert",
      link: "https://linkedin.com/in/cybersecurity-expert", 
      color: "text-blue-400"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          <span className="text-red-400">[</span>CONTACT<span className="text-red-400">]</span>
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Form */}
        <Card className="bg-gray-900 border-green-600 p-6">
          <div className="flex items-center mb-6">
            <MessageSquare className="w-6 h-6 text-red-400 mr-3" />
            <h2 className="text-xl font-bold text-green-400">Send Message</h2>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">Name</label>
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="bg-black border-green-600 text-green-400 focus:border-green-400 font-mono"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">Email</label>
              <Input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-black border-green-600 text-green-400 focus:border-green-400 font-mono"
                placeholder="your.email@domain.com"
              />
            </div>
            
            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">Subject</label>
              <Input
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="bg-black border-green-600 text-green-400 focus:border-green-400 font-mono"
                placeholder="Project inquiry / Consultation"
              />
            </div>
            
            <div>
              <label className="block text-green-400 font-mono text-sm mb-2">Message</label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-black border-green-600 text-green-400 focus:border-green-400 font-mono resize-none"
                placeholder="Tell me about your project or security needs..."
              />
            </div>
            
            <Button 
              type="submit"
              className="w-full bg-green-600 hover:bg-green-500 text-black font-mono font-bold"
            >
              SEND MESSAGE
            </Button>
          </form>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card className="bg-gray-900 border-green-600 p-6">
            <h2 className="text-xl font-bold text-green-400 mb-6">Contact Information</h2>
            
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center">
                  <info.icon className="w-5 h-5 text-red-400 mr-4" />
                  <div>
                    <div className="text-green-400 font-mono text-sm">{info.label}</div>
                    <a 
                      href={info.link}
                      className="text-green-300 hover:text-green-200 transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gray-900 border-green-600 p-6">
            <h2 className="text-xl font-bold text-green-400 mb-6">Social Links</h2>
            
            <div className="space-y-4">
              {socialLinks.map((social, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <social.icon className={`w-5 h-5 mr-4 ${social.color}`} />
                    <div>
                      <div className="text-green-400 font-mono text-sm">{social.label}</div>
                      <div className="text-green-300 text-sm">{social.value}</div>
                    </div>
                  </div>
                  <Button
                    variant="outline" 
                    size="sm"
                    className="font-mono text-xs text-green-400 border-green-600 hover:bg-green-900/20"
                  >
                    Visit
                  </Button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="bg-gray-900 border-green-600 p-6">
            <h2 className="text-xl font-bold text-green-400 mb-4">Download Resume</h2>
            <p className="text-green-300 text-sm mb-4">
              Get a comprehensive overview of my cybersecurity expertise and 3D visualization skills.
            </p>
            <Button 
              className="w-full bg-red-600 hover:bg-red-500 text-white font-mono font-bold"
            >
              <Download className="w-4 h-4 mr-2" />
              DOWNLOAD CV.PDF
            </Button>
          </Card>
        </div>
      </div>

      {/* Availability Status */}
      <Card className="bg-gray-900 border-green-600 p-6">
        <div className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <h2 className="text-xl font-bold text-green-400">Current Availability</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-green-400 font-mono text-sm mb-1">Status</div>
              <div className="text-green-300">Available for Projects</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-mono text-sm mb-1">Response Time</div>
              <div className="text-green-300">Within 24 Hours</div>
            </div>
            <div className="text-center">
              <div className="text-green-400 font-mono text-sm mb-1">Preferred Contact</div>
              <div className="text-green-300">Email or LinkedIn</div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ContactSection;
