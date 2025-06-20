
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";

interface TerminalProps {
  onNavigate: (section: string) => void;
}

const TerminalComponent = ({ onNavigate }: TerminalProps) => {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "Welcome to Kali Linux Terminal",
    "Type 'help' for available commands",
    "────────────────────────────────────",
  ]);
  const [currentLine, setCurrentLine] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const commands = {
    help: () => [
      "Available commands:",
      "  about     - View about section",
      "  skills    - View skills and technologies",
      "  projects  - View my projects",
      "  experience - View work experience", 
      "  contact   - View contact information",
      "  whoami    - Display user information",
      "  ls        - List available sections",
      "  clear     - Clear terminal",
      "  hack      - Initialize security scan",
    ],
    whoami: () => [
      "User: CyberSec_Specialist",
      "Role: Cybersecurity Expert & 3D Artist",
      "Skills: Penetration Testing, Digital Forensics, 3D Modeling",
      "Status: Available for new opportunities",
    ],
    ls: () => [
      "drwxr-xr-x  about/",
      "drwxr-xr-x  skills/", 
      "drwxr-xr-x  projects/",
      "drwxr-xr-x  experience/",
      "drwxr-xr-x  contact/",
      "-rw-r--r--  resume.pdf",
    ],
    about: () => {
      onNavigate("about");
      return ["Navigating to about section..."];
    },
    skills: () => {
      onNavigate("skills");
      return ["Loading skills database..."];
    },
    projects: () => {
      onNavigate("projects");
      return ["Accessing project files..."];
    },
    experience: () => {
      onNavigate("experience");
      return ["Retrieving work history..."];
    },
    contact: () => {
      onNavigate("contact");
      return ["Opening communication channels..."];
    },
    clear: () => {
      setHistory([]);
      return [];
    },
    hack: () => [
      "Initiating security scan...",
      "[INFO] Scanning network interfaces...",
      "[INFO] Enumerating services...",
      "[SUCCESS] All systems secure!",
      "No vulnerabilities detected.",
    ],
  };

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const output = commands[command as keyof typeof commands];
    
    if (output) {
      const result = output();
      setHistory(prev => [...prev, `root@kali:~$ ${cmd}`, ...result]);
    } else {
      setHistory(prev => [...prev, `root@kali:~$ ${cmd}`, `Command '${cmd}' not found. Type 'help' for available commands.`]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input);
      setInput("");
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="bg-gray-900 border border-green-600 rounded-lg p-6 shadow-2xl">
      <div className="flex items-center mb-4 border-b border-green-800 pb-2">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-green-400 font-mono">Terminal - Kali Linux</span>
      </div>
      
      <div className="h-96 overflow-y-auto mb-4 font-mono text-sm">
        {history.map((line, index) => (
          <div key={index} className="text-green-400 whitespace-pre-wrap">
            {line}
          </div>
        ))}
        <div className="flex items-center text-green-400">
          <span className="text-red-400">root@kali</span>
          <span className="text-green-400">:~$ </span>
          <form onSubmit={handleSubmit} className="flex-1">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-transparent border-none outline-none text-green-400 w-full font-mono"
              placeholder="Enter command..."
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {Object.keys(commands).slice(0, 6).map((cmd) => (
          <Button
            key={cmd}
            variant="outline"
            size="sm"
            onClick={() => handleCommand(cmd)}
            className="font-mono text-xs text-green-400 border-green-600 hover:bg-green-900/20"
          >
            {cmd}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TerminalComponent;
