
import { Shield, Code, Eye, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-green-400">
          <span className="text-red-400">[</span>ABOUT<span className="text-red-400">]</span>
        </h1>
        <div className="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <Card className="bg-gray-900 border-green-600 p-6">
          <div className="flex items-center mb-4">
            <Shield className="w-6 h-6 text-red-400 mr-2" />
            <h2 className="text-xl font-bold text-green-400">Cybersecurity Specialist</h2>
          </div>
          <p className="text-green-300 leading-relaxed">
            Passionate cybersecurity professional with expertise in penetration testing, 
            digital forensics, and threat analysis. I combine technical security skills 
            with creative 3D modeling and visualization to provide comprehensive security 
            solutions and engaging presentations.
          </p>
        </Card>

        <Card className="bg-gray-900 border-green-600 p-6">
          <div className="flex items-center mb-4">
            <Code className="w-6 h-6 text-red-400 mr-2" />
            <h2 className="text-xl font-bold text-green-400">Creative Technologist</h2>
          </div>
          <p className="text-green-300 leading-relaxed">
            My unique blend of cybersecurity expertise and 3D artistry allows me to 
            create compelling visualizations of security concepts, training materials, 
            and interactive demonstrations that bridge the gap between technical 
            complexity and user understanding.
          </p>
        </Card>
      </div>

      <Card className="bg-gray-900 border-green-600 p-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Core Competencies</h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <Shield className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">Security Analysis</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Penetration Testing</li>
              <li>• Vulnerability Assessment</li>
              <li>• Digital Forensics</li>
              <li>• Network Security</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Eye className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">3D Visualization</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Blender Modeling</li>
              <li>• Maya Animation</li>
              <li>• Unreal Engine</li>
              <li>• Security Simulations</li>
            </ul>
          </div>
          
          <div className="text-center">
            <Target className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-green-400 mb-2">Strategic Planning</h3>
            <ul className="text-green-300 text-sm space-y-1">
              <li>• Risk Assessment</li>
              <li>• Security Architecture</li>
              <li>• Incident Response</li>
              <li>• Training & Education</li>
            </ul>
          </div>
        </div>
      </Card>

      <div className="bg-gray-900 border border-green-600 rounded-lg p-6">
        <div className="flex items-center mb-4">
          <div className="w-3 h-3 bg-green-400 rounded-full mr-2 animate-pulse"></div>
          <h3 className="text-lg font-bold text-green-400">Mission Statement</h3>
        </div>
        <blockquote className="text-green-300 italic border-l-4 border-red-400 pl-4">
          "To protect digital assets through innovative security solutions while creating 
          immersive experiences that educate and inspire the next generation of cybersecurity 
          professionals."
        </blockquote>
      </div>
    </div>
  );
};

export default AboutSection;
