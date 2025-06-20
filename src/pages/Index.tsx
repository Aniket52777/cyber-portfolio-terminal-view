
import { useState, useEffect } from "react";
import { Terminal, Shield, Code, Eye, Mail, Github, Linkedin, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import TerminalComponent from "@/components/TerminalComponent";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [currentSection, setCurrentSection] = useState("terminal");
  const [showMatrix, setShowMatrix] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowMatrix(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const sections = [
    { id: "terminal", label: "Terminal", icon: Terminal },
    { id: "about", label: "About", icon: Shield },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Eye },
    { id: "experience", label: "Experience", icon: Shield },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  const renderSection = () => {
    switch (currentSection) {
      case "terminal":
        return <TerminalComponent onNavigate={setCurrentSection} />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "projects":
        return <ProjectsSection />;
      case "experience":
        return <ExperienceSection />;
      case "contact":
        return <ContactSection />;
      default:
        return <TerminalComponent onNavigate={setCurrentSection} />;
    }
  };

  if (showMatrix) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden">
        <div className="matrix-rain">
          {Array.from({ length: 50 }).map((_, i) => (
            <div
              key={i}
              className="matrix-column"
              style={{
                left: `${i * 2}%`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            >
              {Array.from({ length: 20 }).map((_, j) => (
                <span
                  key={j}
                  className="matrix-char text-green-400"
                  style={{ animationDelay: `${j * 0.1}s` }}
                >
                  {String.fromCharCode(33 + Math.random() * 94)}
                </span>
              ))}
            </div>
          ))}
        </div>
        <div className="text-center z-10">
          <h1 className="text-6xl font-mono text-green-400 mb-4 animate-pulse">
            INITIALIZING...
          </h1>
          <div className="text-green-400 font-mono">
            <span className="animate-pulse">[</span>
            <span className="text-red-400">●</span>
            <span className="animate-pulse">] LOADING SECURITY PROTOCOLS</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      {/* Header */}
      <header className="border-b border-green-800 bg-black/90 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Shield className="w-8 h-8 text-red-400" />
              <span className="text-2xl font-bold">
                <span className="text-red-400">KALI</span>
                <span className="text-green-400">_PORTFOLIO</span>
              </span>
            </div>
            <nav className="flex space-x-1">
              {sections.map((section) => (
                <Button
                  key={section.id}
                  variant={currentSection === section.id ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setCurrentSection(section.id)}
                  className={`font-mono ${
                    currentSection === section.id
                      ? "bg-green-600 text-black hover:bg-green-500"
                      : "text-green-400 hover:text-green-300 hover:bg-green-900/20"
                  }`}
                >
                  <section.icon className="w-4 h-4 mr-2" />
                  {section.label}
                </Button>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="animate-fade-in">{renderSection()}</div>
      </main>

      {/* Footer */}
      <footer className="border-t border-green-800 bg-black/90 mt-20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="text-sm text-green-600">
              © 2024 Cybersecurity Portfolio | Built with React & Tailwind
            </div>
            <div className="flex space-x-4">
              <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-green-400 hover:text-green-300">
                <Download className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
