
import { Calendar, MapPin, Award, TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Cybersecurity Analyst",
      company: "SecureTech Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading penetration testing initiatives and security assessments for Fortune 500 clients. Developed custom security tools and 3D training simulations.",
      achievements: [
        "Reduced client security incidents by 65% through proactive threat hunting",
        "Created interactive 3D security training that improved team efficiency by 40%",
        "Led red team exercises for 20+ enterprise clients",
        "Developed automated vulnerability assessment framework"
      ],
      technologies: ["Kali Linux", "Metasploit", "Python", "Blender", "Unreal Engine"]
    },
    {
      title: "Cybersecurity Consultant",
      company: "CyberGuard Consulting",
      location: "Austin, TX", 
      period: "2020 - 2022",
      type: "Contract",
      description: "Specialized in digital forensics and incident response. Created 3D visualizations for complex cybercrime cases and court presentations.",
      achievements: [
        "Successfully handled 50+ digital forensics cases",
        "Developed 3D evidence visualization tools used by law enforcement",
        "Provided expert testimony in 15+ cybercrime court cases",
        "Trained 200+ professionals in digital forensics techniques"
      ],
      technologies: ["EnCase", "FTK", "Wireshark", "Maya", "Python", "PostgreSQL"]
    },
    {
      title: "Information Security Analyst",
      company: "TechCorp Industries",
      location: "Seattle, WA",
      period: "2018 - 2020", 
      type: "Full-time",
      description: "Responsible for network security monitoring and incident response. Began incorporating 3D modeling for security awareness training.",
      achievements: [
        "Implemented SIEM solution reducing detection time by 80%",
        "Created company's first VR security training program",
        "Managed security for 5000+ employee organization",
        "Achieved 99.9% network uptime during tenure"
      ],
      technologies: ["Splunk", "Nessus", "Burp Suite", "Blender", "Unity"]
    }
  ];

  const education = [
    {
      degree: "Master of Science in Cybersecurity",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2016 - 2018",
      details: "Specialized in Digital Forensics and Network Security"
    },
    {
      degree: "Bachelor of Science in Computer Science",
      school: "UC Berkeley",
      location: "Berkeley, CA", 
      period: "2012 - 2016",
      details: "Minor in Digital Art and 3D Design"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          <span className="text-red-400">[</span>EXPERIENCE<span className="text-red-400">]</span>
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold text-green-400 mb-6">Professional Experience</h2>
        
        {experiences.map((exp, index) => (
          <Card key={index} className="bg-gray-900 border-green-600 p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-bold text-green-400 mb-1">{exp.title}</h3>
                <div className="text-lg text-green-300 mb-2">{exp.company}</div>
                <div className="flex items-center text-green-600 text-sm space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {exp.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exp.period}
                  </span>
                </div>
              </div>
              <span className="mt-2 md:mt-0 px-3 py-1 bg-green-900/30 border border-green-600 rounded-full text-xs font-mono text-green-400">
                {exp.type}
              </span>
            </div>
            
            <p className="text-green-300 mb-4">{exp.description}</p>
            
            <div className="mb-4">
              <h4 className="text-sm font-bold text-green-400 mb-2 flex items-center">
                <Award className="w-4 h-4 mr-2" />
                Key Achievements
              </h4>
              <ul className="space-y-1">
                {exp.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-green-300 text-sm flex items-start">
                    <span className="text-red-400 mr-2">▸</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-green-400 mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-2 py-1 bg-black border border-green-800 rounded text-xs font-mono text-green-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="space-y-6">
        <h2 className="text-2xl font-bold text-green-400 mb-6">Education</h2>
        
        {education.map((edu, index) => (
          <Card key={index} className="bg-gray-900 border-green-600 p-6">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start">
              <div>
                <h3 className="text-lg font-bold text-green-400 mb-1">{edu.degree}</h3>
                <div className="text-green-300 mb-2">{edu.school}</div>
                <div className="flex items-center text-green-600 text-sm space-x-4">
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {edu.location}
                  </span>
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {edu.period}
                  </span>
                </div>
                <p className="text-green-300 text-sm mt-2">{edu.details}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Card className="bg-gray-900 border-green-600 p-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Career Highlights</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">100+</div>
            <div className="text-green-400 font-mono text-sm">Security Assessments</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">50+</div>
            <div className="text-green-400 font-mono text-sm">Forensics Cases</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-red-400 mb-2">500+</div>
            <div className="text-green-400 font-mono text-sm">Professionals Trained</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ExperienceSection;
