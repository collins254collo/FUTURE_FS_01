'use client';
import { useState, useEffect, useRef } from 'react';
import { Terminal, Code, Zap } from 'lucide-react';
import TerminalCommandInput from './terminalCommand';

export default function TerminalIntro() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const inputRef = useRef(null);
  
 const lines = [
  "> booting up system...",
  "> loading env variables...",
  "> connecting to creativity@colman.tech...",
  "> const developer = {",
  '>   name: "Collins Njogu",',
  '>   title: "Full-Stack Developer",',
  '>   focus: "Clean code & intuitive design",',
  "> };",
  '> console.log("Portfolio initialized successfully ");'
];


  const commands = {
    help: 'Available commands: home, about, skills, projects, contact, clear, help',
  };

  useEffect(() => {
    if (currentLine < lines.length) {
      const currentText = lines[currentLine];
      let charIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (charIndex <= currentText.length) {
          setDisplayedText(currentText.slice(0, charIndex));
          charIndex++;
        } else {
          clearInterval(typingInterval);
          setTimeout(() => {
            setCurrentLine(prev => prev + 1);
            setDisplayedText('');
          }, 500);
        }
      }, 50);

      return () => clearInterval(typingInterval);
    } else {
      setAnimationComplete(true);
    }
  }, [currentLine]);

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

    const response = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`;
    
    setCommandHistory(prev => [
      ...prev,
      { type: 'input', text: command },
      { type: 'output', text: response }
    ]);
    
    setInputValue('');

  
  };

  const handleTerminalClick = () => {
    if (animationComplete && inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="h-screen w-screen bg-black flex items-center justify-center px-4 py-8 sm:px-6 lg:px-8 overflow-hidden">
      <div className="w-full h-full max-w-5xl max-h-screen flex items-center justify-center">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg shadow-2xl border border-gray-800 overflow-hidden h-[85vh] sm:h-[80vh] flex flex-col w-full">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-700 flex-shrink-0">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono truncate">
                portfolio.dev
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
            className="p-4 sm:p-6 md:p-8 font-mono text-xs sm:text-sm md:text-base overflow-y-auto flex-1 cursor-text"
            onClick={handleTerminalClick}
          >
            <div className="w-full">
              {/* Initial Animation */}
              {lines.slice(0, currentLine).map((line, index) => (
                <div key={index} className="mb-1.5 sm:mb-2">
                  <span className="text-green-400 break-all">{line}</span>
                </div>
              ))}
              {currentLine < lines.length && (
                <div className="mb-1.5 sm:mb-2">
                  <span className="text-green-400 break-all">{displayedText}</span>
                  <span className={`inline-block w-1.5 h-3 sm:w-2 sm:h-4 md:h-5 bg-green-400 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
                </div>
              )}
              
              {/* Interactive Section */}
              {animationComplete && (
                <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
                  {/* Profile Image */}
                  <div className="flex justify-center mb-6">
                    <div className="relative group">
                      <div className="absolute inset-0 bg-green-400 rounded-full blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
                      <div className="relative w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border-2 border-green-400 overflow-hidden bg-gray-800">
                        <img 
                          src="/portfolio.jpg" 
                          alt="Profile" 
                          className="w-full h-full object-cover"
                        />
                       
                      </div>
                      
                    </div>
                  </div>

               

                  {/* Command History */}
                  <div className="mt-6 space-y-2">
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

                 {/* Terminal Command Input */}
                        <div className="p-4 sm:p-6 md:p-8 border-t border-gray-700">
                          <TerminalCommandInput />
                          </div>
                </div>
              )}
            </div>
          </div>
         
        </div>

        {/* Additional Info */}
        <div className="absolute bottom-4 left-0 right-0 text-center px-2">
          <p className="text-gray-500 text-xs sm:text-sm font-mono break-words">
            <span className="hidden sm:inline">{'<'} Click terminal and type commands to navigate {'>'}</span>
            <span className="sm:hidden">{'<'} Tap & type to navigate {'>'}</span>
          </p>
        </div>
      </div>
    </div>
  );
}