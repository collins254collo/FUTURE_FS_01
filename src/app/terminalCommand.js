'use client';
import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

export default function TerminalCommandInput({ currentPage = 'home' }) {
  const [inputValue, setInputValue] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [showCursor, setShowCursor] = useState(true);
  const inputRef = useRef(null);
  const router = useRouter();

  const commands = {
    help: 'Available commands: home, about, skills, projects, contact, clear, help',
    clear: 'Clears the command history',
    home: 'Navigate to home page',
    about: 'Navigate to about page',
    skills: 'Navigate to skills page',
    contact: 'Navigate to contact page',
    projects: 'Navigate to projects page',
  };

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleCommand = (e) => {
    if (e) e.preventDefault();
    const command = inputValue.trim().toLowerCase();
    
    if (command === '') return;

    if (command === 'clear') {
      setCommandHistory([]);
      setInputValue('');
      return;
    }

    // Navigation commands - navigate immediately without adding to history
    const navigationCommands = ['home', 'about', 'skills', 'projects', 'contact'];
    
    if (navigationCommands.includes(command)) {
      // Check if user is already on the page
      if (command === currentPage) {
        const response = `You are already on the ${command} page`;
        setCommandHistory(prev => [
          ...prev,
          { type: 'input', text: command },
          { type: 'output', text: response }
        ]);
        setInputValue('');
        return;
      }

      // Navigate immediately
      setInputValue('');
      
      if (command === 'home') {
        router.push('/');
      } else if (command === 'about') {
        router.push('/about');
      } else if (command === 'skills') {
        router.push('/skills');
      } else if (command === 'projects') {
        router.push('/projects');
      } else if (command === 'contact') {
        router.push('/contact');
      }
      return;
    }

    // For non-navigation commands, show response
    const response = commands[command] || `Command not found: ${command}. Type 'help' for available commands.`;
    
    setCommandHistory(prev => [
      ...prev,
      { type: 'input', text: command },
      { type: 'output', text: response }
    ]);
    
    setInputValue('');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleCommand();
    }
  };

  const handleTerminalClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div 
      className="w-full space-y-4 font-mono cursor-text"
      onClick={handleTerminalClick}
    >
      {/* Command History */}
      {commandHistory.length > 0 && (
        <div className="space-y-2">
          {commandHistory.map((entry, index) => (
            <div key={index} className="text-gray-300">
              {entry.type === 'input' ? (
                <div className="flex items-center gap-2">
                  <span className="text-green-400">$</span>
                  <span className="text-white">{entry.text}</span>
                </div>
              ) : (
                <div className="text-gray-400 ml-4 text-xs sm:text-sm">{entry.text}</div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Command Input */}
      <div className="flex items-center gap-2">
        <span className="text-green-400 flex-shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 bg-transparent text-white outline-none font-mono caret-green-400 text-sm"
          spellCheck="false"
          autoComplete="off"
          placeholder="type a command..."
        />
        <span className={`w-1.5 h-3 sm:w-2 sm:h-4 bg-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}></span>
      </div>

      {/* Help Text */}
      <div className="text-gray-500 text-xs">
        <span className="text-green-400">tip:</span>
        <span className="ml-2">Type 'help' for commands | 'clear' to reset</span>
      </div>
    </div>
  );
}