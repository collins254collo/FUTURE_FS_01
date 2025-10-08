'use client';
import { useState, useEffect, useRef } from 'react';
import { Terminal, ExternalLink, Github, Folder, Code2, Loader2, AlertCircle } from 'lucide-react';

export default function TerminalProjects() {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  const bootLines = [
    "> loading projects.db...",
    "> fetching repository data...",
    "> initializing project showcase...",
  ];

  const commands = {
    help: 'Available commands: home, about, skills, projects, contact, clear, help',
    clear: 'Clears the command history',
    home: 'Navigate to home page',
    about: 'Navigate to about page',
    skills: 'Navigate to skills page',
    contact: 'Navigate to contact page',
    projects: 'You are already on the projects page',
    refresh: 'Reload projects from database',
  };

  // Fetch projects from database
  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Replace this URL with your actual API endpoint
      const response = await fetch('/api/projects', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setProjects(data.projects || data); // Handle different response formats
      setLoading(false);
    } catch (err) {
      console.error('Error fetching projects:', err);
      setError(err.message);
      setLoading(false);
      
      // Fallback to demo data if API fails
      setProjects([
        {
          id: 1,
          name: "E-Commerce Platform",
          description: "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard",
          tech: ["React", "Node.js", "MongoDB", "Stripe"],
          github: "https://github.com/yourusername/ecommerce",
          live: "https://demo-ecommerce.com",
          status: "deployed"
        },
        {
          id: 2,
          name: "Task Management App",
          description: "Collaborative project management tool with real-time updates and team collaboration features",
          tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
          github: "https://github.com/yourusername/taskapp",
          live: "https://taskapp-demo.com",
          status: "deployed"
        },
      ]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    if (currentLine < bootLines.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => [...prev, bootLines[currentLine]]);
        setCurrentLine(prev => prev + 1);
      }, 400);
      return () => clearTimeout(timer);
    } else if (!loading) {
      const successLine = error 
        ? '> Warning: Using cached data. Type "refresh" to retry.' 
        : `> const projects = await fetchProjects(); // ${projects.length} found`;
      setDisplayedLines(prev => [...prev, successLine]);
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, '> console.log("Projects loaded successfully");']);
        setAnimationComplete(true);
      }, 500);
    }
  }, [currentLine, loading, error, projects.length]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (animationComplete && inputRef.current) {
      inputRef.current.focus();
    }
  }, [animationComplete]);

  const handleCommand = (e) => {
    e.preventDefault();
    const command = inputValue.trim().toLowerCase();
    
    if (command === '') return;

    if (command === 'clear') {
      setCommandHistory([]);
      setInputValue('');
      return;
    }

    if (command === 'refresh') {
      setCommandHistory(prev => [
        ...prev,
        { type: 'input', text: command },
        { type: 'output', text: 'Reloading projects from database...' }
      ]);
      setInputValue('');
      fetchProjects();
      return;
    }

    const response = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`;
    
    setCommandHistory(prev => [
      ...prev,
      { type: 'input', text: command },
      { type: 'output', text: response }
    ]);
    
    setInputValue('');

    // Navigation logic
    if (command === 'home') {
      window.location.href = '/';
    } else if (command === 'about') {
      window.location.href = '/about';
    } else if (command === 'skills') {
      window.location.href = '/skills';
    } else if (command === 'contact') {
      window.location.href = '/contact';
    }
  };

  const handleTerminalClick = () => {
    if (animationComplete && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="min-h-screen w-screen bg-black flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="w-full max-w-6xl">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono">
                projects.dev
              </span>
            </div>
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          {/* Terminal Content */}
          <div 
            className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm overflow-y-auto max-h-[80vh] cursor-text"
            onClick={handleTerminalClick}
          >
            {/* Boot Animation */}
            {displayedLines.map((line, index) => (
              <div key={index} className="mb-2">
                <span className={line.includes('Warning') ? 'text-yellow-400' : 'text-green-400'}>
                  {line}
                </span>
              </div>
            ))}
            
            {loading && currentLine === bootLines.length && (
              <div className="flex items-center gap-2 mb-2">
                <Loader2 className="w-4 h-4 text-green-400 animate-spin" />
                <span className="text-green-400">Fetching projects from database...</span>
              </div>
            )}

            {/* Projects List */}
            {animationComplete && (
              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-green-400">$</span>
                  <span className="text-white">ls -la projects/</span>
                </div>

                {error && (
                  <div className="border border-yellow-500/50 rounded-lg p-4 bg-yellow-500/10 mb-6">
                    <div className="flex items-start gap-2">
                      <AlertCircle className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-yellow-400 text-xs sm:text-sm font-semibold mb-1">
                          Database Connection Issue
                        </p>
                        <p className="text-yellow-300/80 text-xs">
                          {error}. Showing cached data. Type 'refresh' to retry.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {projects.length === 0 && !loading ? (
                  <div className="border border-gray-800 rounded-lg p-8 text-center">
                    <Folder className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                    <p className="text-gray-400">No projects found in database.</p>
                    <p className="text-gray-500 text-xs mt-2">Type 'refresh' to reload.</p>
                  </div>
                ) : (
                  projects.map((project, index) => (
                    <div 
                      key={project.id}
                      className="border border-gray-800 rounded-lg p-4 sm:p-5 bg-gray-950 hover:border-green-400 transition-all duration-300 group"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {/* Project Header */}
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2 flex-1 min-w-0">
                          <Folder className="w-4 h-4 sm:w-5 sm:h-5 text-green-400 flex-shrink-0" />
                          <h3 className="text-white font-semibold text-sm sm:text-base truncate">
                            {project.name}
                          </h3>
                        </div>
                        <div className="flex items-center gap-2 flex-shrink-0">
                          <span className={`px-2 py-1 rounded text-xs ${
                            project.status === 'deployed' 
                              ? 'bg-green-400/20 text-green-400' 
                              : 'bg-yellow-400/20 text-yellow-400'
                          }`}>
                            {project.status}
                          </span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-400 text-xs sm:text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex items-center gap-2 mb-4 flex-wrap">
                        <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
                        {(Array.isArray(project.tech) ? project.tech : project.technologies || []).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="text-gray-500 text-xs bg-gray-800 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Links */}
                      <div className="flex items-center gap-3 pt-3 border-t border-gray-800">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 text-gray-400 hover:text-green-400 transition-colors text-xs sm:text-sm"
                          >
                            <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                            <span>Code</span>
                          </a>
                        )}
                        {project.live && (
                          <>
                            {project.github && <span className="text-gray-700">|</span>}
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1.5 text-gray-400 hover:text-green-400 transition-colors text-xs sm:text-sm"
                            >
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4" />
                              <span>Live Demo</span>
                            </a>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}

                {/* Command History */}
                <div className="mt-8 pt-6 border-t border-gray-800 space-y-2">
                  {commandHistory.map((entry, index) => (
                    <div key={index} className="text-gray-300">
                      {entry.type === 'input' ? (
                        <div className="flex items-center gap-2">
                          <span className="text-green-400">$</span>
                          <span className="text-white">{entry.text}</span>
                        </div>
                      ) : (
                        <div className="text-gray-400 ml-4">{entry.text}</div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Command Input */}
                <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-800">
                  <span className="text-green-400 flex-shrink-0">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="flex-1 bg-transparent text-white outline-none font-mono caret-green-400"
                    spellCheck="false"
                    autoComplete="off"
                    placeholder="type a command..."
                  />
                  <span className={`w-1.5 h-3 sm:w-2 sm:h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </form>

                {/* Footer Info */}
                <div className="mt-4 text-gray-500 text-xs">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">tip:</span>
                    <span>Type 'help' for commands | 'refresh' to reload | 'contact' to reach out</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Navigation Hint */}
        <div className="mt-4 text-center">
          <p className="text-gray-500 text-xs sm:text-sm font-mono">
            {'<'} Click terminal and type commands to navigate {'>'}
          </p>
        </div>
      </div>
    </div>
  );
}