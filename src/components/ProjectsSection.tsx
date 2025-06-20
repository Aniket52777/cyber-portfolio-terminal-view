
import { ExternalLink, Github, Play, Shield, Eye, Code } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Advanced Penetration Testing Framework",
      category: "Cybersecurity",
      description: "Custom penetration testing framework combining automated vulnerability scanning with manual testing methodologies. Features real-time reporting and integration with multiple security tools.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop",
      technologies: ["Python", "Metasploit", "Nmap", "Docker"],
      github: "#",
      demo: "#",
      type: "security"
    },
    {
      title: "3D Cybersecurity Training Simulation",
      category: "3D Visualization",
      description: "Interactive 3D environment for cybersecurity training using Unreal Engine. Simulates real-world network attacks and defense scenarios in an immersive virtual environment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=500&h=300&fit=crop",
      technologies: ["Unreal Engine", "Blender", "C++", "Python"],
      github: "#",
      demo: "#",
      type: "3d"
    },
    {
      title: "Network Traffic Analysis Dashboard",
      category: "Security Analytics",
      description: "Real-time network monitoring dashboard with AI-powered anomaly detection. Visualizes network traffic patterns and identifies potential security threats.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=300&fit=crop",
      technologies: ["React", "Python", "TensorFlow", "Wireshark"],
      github: "#",
      demo: "#",
      type: "security"
    },
    {
      title: "Forensic Evidence Visualization Tool",
      category: "Digital Forensics",
      description: "3D visualization tool for digital forensic evidence using Maya and custom scripts. Helps investigators understand complex data relationships in cybercrime cases.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=500&h=300&fit=crop",
      technologies: ["Maya", "Python", "PostgreSQL", "React"],
      github: "#",
      demo: "#",
      type: "3d"
    },
    {
      title: "Automated Vulnerability Scanner",
      category: "Security Tools",
      description: "Enterprise-grade vulnerability scanner with machine learning capabilities. Automatically identifies and prioritizes security vulnerabilities across network infrastructure.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=500&h=300&fit=crop",
      technologies: ["Python", "Docker", "Redis", "PostgreSQL"],
      github: "#",
      demo: "#",
      type: "security"
    },
    {
      title: "VR Security Training Platform",
      category: "Extended Reality",
      description: "Virtual reality platform for hands-on cybersecurity training. Students can practice penetration testing and incident response in safe, simulated environments.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop",
      technologies: ["Unreal Engine", "C#", "Oculus SDK", "Blender"],
      github: "#",
      demo: "#",
      type: "3d"
    }
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "security":
        return <Shield className="w-5 h-5" />;
      case "3d":
        return <Eye className="w-5 h-5" />;
      default:
        return <Code className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "security":
        return "text-red-400";
      case "3d":
        return "text-blue-400";
      default:
        return "text-green-400";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          <span className="text-red-400">[</span>PROJECTS<span className="text-red-400">]</span>
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="bg-gray-900 border-green-600 overflow-hidden hover:border-green-400 transition-all duration-300 group">
            <div className="relative overflow-hidden">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute top-4 left-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-mono bg-black/80 ${getTypeColor(project.type)}`}>
                  {getTypeIcon(project.type)}
                  <span className="ml-1">{project.category}</span>
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-bold text-green-400 mb-3">{project.title}</h3>
              <p className="text-green-300 text-sm mb-4 leading-relaxed">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-black border border-green-800 rounded text-xs font-mono text-green-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 font-mono text-xs text-green-400 border-green-600 hover:bg-green-900/20"
                >
                  <Github className="w-3 h-3 mr-1" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 font-mono text-xs text-green-400 border-green-600 hover:bg-green-900/20"
                >
                  <Play className="w-3 h-3 mr-1" />
                  Demo
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-900 border-green-600 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Open Source Contributions</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-black border border-green-800 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Github className="w-5 h-5 text-green-400 mr-2" />
              <span className="text-green-400 font-mono">Kali Linux Tools</span>
            </div>
            <p className="text-green-300 text-sm">Contributing to various penetration testing tools and security frameworks in the Kali Linux ecosystem.</p>
          </div>
          
          <div className="bg-black border border-green-800 rounded-lg p-4">
            <div className="flex items-center mb-3">
              <Eye className="w-5 h-5 text-blue-400 mr-2" />
              <span className="text-green-400 font-mono">Security Visualization</span>
            </div>
            <p className="text-green-300 text-sm">Open source 3D security visualization libraries and tools for the cybersecurity community.</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProjectsSection;
