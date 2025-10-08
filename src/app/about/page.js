'use client';
import { useState, useEffect } from 'react';
import { Terminal, User, Code2, Briefcase, GraduationCap, MapPin, Mail, Github, Linkedin, Twitter } from 'lucide-react';
import TerminalCommandInput from '../terminalCommand';

export default function AboutSection() {
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const introText = "Full Stack Developer | Problem Solver | Tech Enthusiast";

  useEffect(() => {
    if (isTyping && typedText.length < introText.length) {
      const timeout = setTimeout(() => {
        setTypedText(introText.slice(0, typedText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (typedText.length === introText.length) {
      setIsTyping(false);
    }
  }, [typedText, isTyping]);

  return (
    <div className="min-h-screen bg-black text-green-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono">whoami.sh</span>
            </div>
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 sm:p-8 md:p-10">
            {/* Command Prompt */}
            <div className="mb-8">
              <div className="text-gray-500 text-xs sm:text-sm mb-4 font-mono">
                <span className="text-green-400">~/portfolio</span> $ cat about.txt
              </div>
            </div>

            {/* Profile Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column - Image & Quick Info */}
              <div className="lg:col-span-1 space-y-6">
                {/* Profile Image */}
                <div className="flex justify-center lg:justify-start">
                  <div className="relative group">
                    <div className="absolute inset-0 bg-green-400 rounded-lg blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-lg border-2 border-green-400 overflow-hidden bg-gray-800">
                      <img 
                        src="/portfolio.jpg" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                   
                    </div>
                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-green-400 text-black text-xs font-mono font-bold rounded">
                      AVAILABLE
                    </div>
                  </div>
                </div>

                {/* Quick Info Cards */}
                <div className="space-y-3">
                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                      <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-gray-500 font-mono">Location</div>
                        <div className="text-gray-300">Nairobi, Kenya</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                      <Briefcase className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-gray-500 font-mono">Experience</div>
                        <div className="text-gray-300">1+ Years</div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded border border-gray-700">
                    <div className="flex items-center gap-3 text-xs sm:text-sm">
                      <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <div>
                        <div className="text-gray-500 font-mono">Email</div>
                        <div className="text-gray-300 break-all">njogucollins10397@gmail.com</div>
                      </div>
                    </div>
                  </div>
                </div>

               
              </div>

              {/* Right Column - About Content */}
              <div className="lg:col-span-2 space-y-6 sm:space-y-8 font-mono">
                {/* Header with Typing Effect */}
                <div>
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-400 mb-2">
                    Collins Njogu
                  </h1>
                  <p className="text-gray-400 text-sm sm:text-base">
                    {typedText}
                    <span className="animate-pulse">_</span>
                  </p>
                </div>

                {/* Bio */}
                <div className="space-y-4 text-gray-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    <span className="text-green-400">{'> '}</span>
                    Hey there! I'm a passionate Full Stack Developer with a love for creating elegant solutions to complex problems. My journey in tech started with curiosity and has evolved into a career I'm genuinely excited about every single day.
                  </p>
                  <p>
                    <span className="text-green-400">{'> '}</span>
                    I specialize in building scalable web applications using modern technologies like React, Next.js, Node.js, and more. Whether it's crafting pixel-perfect user interfaces or architecting robust backend systems, I thrive on turning ideas into reality.
                  </p>
                  <p>
                    <span className="text-green-400">{'> '}</span>
                    When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community. I believe in continuous learning and staying ahead of the curve in this ever-evolving tech landscape.
                  </p>
                </div>

                {/* What I Do */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="bg-gray-800 p-5 rounded border border-gray-700 hover:border-green-400 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Code2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Frontend Development</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Crafting responsive and intuitive user interfaces with React, Next.js, and modern CSS frameworks.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-5 rounded border border-gray-700 hover:border-green-400 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <Terminal className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">Backend Development</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Building scalable APIs and server-side applications with Node.js, Express, and various databases.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-5 rounded border border-gray-700 hover:border-green-400 transition-colors">
                    <div className="flex items-start gap-3 mb-3">
                      <User className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="text-green-400 font-semibold mb-2 text-sm sm:text-base">UI/UX Design</h3>
                        <p className="text-gray-400 text-xs sm:text-sm">
                          Designing user-centered experiences that are both beautiful and functional.
                        </p>
                      </div>
                    </div>
                  </div>

                  
                </div>

                {/* CTA Button */}
                <div className="pt-4">
                <a
                    href="/final_resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    download
                    className="inline-block"
                  >
                    <button className="px-6 py-3 bg-green-500 hover:bg-green-600 active:bg-green-700 text-black font-semibold rounded transition-colors duration-200 text-sm sm:text-base cursor-pointer"> Download Resume </button>
                  </a>

                </div>
              </div>
            </div>
          </div>
            {/* Terminal Command Input */}
        <div className="mt-6 sm:mt-8">
          <TerminalCommandInput />
        </div>
        
        </div>
      

        {/* Command Hint */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-mono">
            <span className="text-green-400">~/portfolio</span> $ ls skills/
          </p>
        </div>
      </div>
    </div> 
  );
}