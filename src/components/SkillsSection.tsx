import { Code, Shield, Monitor, Cpu, Database, Network } from "lucide-react";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "3D Software",
      icon: Monitor,
      skills: [
        { name: "Blender" },
        { name: "Maya" },
        { name: "Unreal Engine" },
        { name: "Substance Painter" },
        { name: "ZBrush" },
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Python" },
        { name: "JavaScript" },
        { name: "C" },
        { name: "C#" },
        { name: "C++" },
        { name: "PHP" },
        { name: "Java" },
        { name: "Bash/Shell" },
        { name: "PowerShell" },
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "PostgreSQL" },
        { name: "MySQL" },
        { name: "MongoDB" },
      ]
    },
    {
      title: "Frameworks & Tools",
      icon: Shield,
      skills: [
        { name: "React" },
        { name: "Node.js" },
        { name: "Docker" },
        { name: "Git" },
        { name: "Linux" },
      ]
    }
  ];

  const certifications = [
    "Certified Ethical Hacker (CEH)",
    "CISSP - Certified Information Systems Security Professional",
    "CompTIA Security+",
    "OSCP - Offensive Security Certified Professional",
    "AWS Security Specialty",
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          <span className="text-red-400">[</span>SKILLS<span className="text-red-400">]</span>
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <Card key={index} className="bg-gray-900 border-green-600 p-6">
            <div className="flex items-center mb-6">
              <category.icon className="w-6 h-6 text-red-400 mr-3" />
              <h2 className="text-xl font-bold text-green-400">{category.title}</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="flex items-center p-3 bg-black border border-green-800 rounded-lg hover:border-green-400 transition-colors">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                  <span className="text-green-300 font-mono text-sm">{skill.name}</span>
                </div>
              ))}
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-900 border-green-600 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Certifications & Achievements</h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-black border border-green-800 rounded-lg p-4 hover:border-green-400 transition-colors">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse"></div>
                <span className="text-green-300 font-mono text-sm">{cert}</span>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="bg-gray-900 border border-green-600 rounded-lg p-6">
        <h3 className="text-lg font-bold text-green-400 mb-4">Current Focus Areas</h3>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-black border border-green-800 rounded-lg">
            <Cpu className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-green-400 font-mono text-sm">AI Security</div>
          </div>
          <div className="text-center p-4 bg-black border border-green-800 rounded-lg">
            <Network className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-green-400 font-mono text-sm">Cloud Security</div>
          </div>
          <div className="text-center p-4 bg-black border border-green-800 rounded-lg">
            <Monitor className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <div className="text-green-400 font-mono text-sm">VR/AR Security</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
