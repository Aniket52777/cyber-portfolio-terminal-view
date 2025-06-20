
import { Code, Shield, Monitor, Cpu, Database, Network } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Security Tools",
      icon: Shield,
      skills: [
        { name: "Kali Linux", level: 95 },
        { name: "Metasploit", level: 90 },
        { name: "Wireshark", level: 88 },
        { name: "Nmap", level: 92 },
        { name: "Burp Suite", level: 85 },
      ]
    },
    {
      title: "3D Software",
      icon: Monitor,
      skills: [
        { name: "Blender", level: 90 },
        { name: "Maya", level: 85 },
        { name: "Unreal Engine", level: 80 },
        { name: "Substance Painter", level: 75 },
        { name: "ZBrush", level: 70 },
      ]
    },
    {
      title: "Programming",
      icon: Code,
      skills: [
        { name: "Python", level: 88 },
        { name: "JavaScript", level: 82 },
        { name: "Bash/Shell", level: 90 },
        { name: "C++", level: 75 },
        { name: "PowerShell", level: 80 },
      ]
    },
    {
      title: "Frameworks & Databases",
      icon: Database,
      skills: [
        { name: "React", level: 85 },
        { name: "Node.js", level: 80 },
        { name: "PostgreSQL", level: 78 },
        { name: "MongoDB", level: 75 },
        { name: "Docker", level: 82 },
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
            
            <div className="space-y-4">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-green-300 font-mono text-sm">{skill.name}</span>
                    <span className="text-green-400 font-mono text-xs">{skill.level}%</span>
                  </div>
                  <Progress 
                    value={skill.level} 
                    className="h-2 bg-gray-800"
                  />
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
