'use client';
import { useState, useEffect, useRef } from 'react';
import { Terminal, Code2, Database, Layout, Server, GitBranch, Boxes, Wrench } from 'lucide-react';
import TerminalCommandInput from '../terminalCommand';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState('frontend');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const skills = {
    frontend: {
      icon: Layout,
      name: 'Frontend',
      color: 'text-blue-400',
      items: [
        { name: 'React.js', category: 'framework' },
        { name: 'Next.js', category: 'framework' },
        { name: 'TypeScript', category: 'language' },
        { name: 'JavaScript', category: 'language' },
        { name: 'Tailwind CSS', category: 'styling' },
        { name: 'HTML5', category: 'markup' },
        { name: 'CSS3', category: 'styling' },
        { name: 'Redux', category: 'state' }
      ]
    },
    backend: {
      icon: Server,
      name: 'Backend',
      color: 'text-purple-400',
      items: [
        { name: 'Node.js', category: 'runtime' },
        { name: 'Express.js', category: 'framework' },
        { name: 'Python', category: 'language' },
        { name: 'Django', category: 'framework' },
        { name: 'REST APIs', category: 'api' },
        { name: 'GraphQL', category: 'api' },
        { name: 'JWT', category: 'auth' },
        { name: 'OAuth', category: 'auth' }
      ]
    },
    database: {
      icon: Database,
      name: 'Database',
      color: 'text-orange-400',
      items: [
        { name: 'MongoDB', category: 'nosql' },
        { name: 'PostgreSQL', category: 'sql' },
        { name: 'MySQL', category: 'sql' },
        { name: 'Redis', category: 'cache' },
        { name: 'Firebase', category: 'baas' },
        { name: 'Prisma', category: 'orm' }
      ]
    },
    tools: {
      icon: Wrench,
      name: 'Tools & Others',
      color: 'text-green-400',
      items: [
        { name: 'Git', category: 'vcs' },
        { name: 'GitHub', category: 'platform' },
        { name: 'Docker', category: 'container' },
        { name: 'VS Code', category: 'editor' },
        { name: 'Figma', category: 'design' },
        { name: 'Linux', category: 'os' },
        { name: 'AWS', category: 'cloud' },
        { name: 'Vercel', category: 'deployment' }
      ]
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = Object.keys(skills);
  const currentSkills = skills[activeCategory];
  const Icon = currentSkills.icon;

  return (
    <div ref={sectionRef} className="min-h-screen bg-black text-green-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Terminal Window */}
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          {/* Terminal Header */}
          <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono">skills.json</span>
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
            <div className="mb-6 sm:mb-8">
              <div className="text-gray-500 text-xs sm:text-sm mb-2 font-mono">
                <span className="text-green-400">~/portfolio</span> $ tree skills/
              </div>
              <div className="text-green-400 font-mono text-sm sm:text-base mb-4">
                <span className="text-gray-500">├──</span> Exploring technical expertise...
              </div>
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-8">
              {categories.map((category) => {
                const CategoryIcon = skills[category].icon;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-lg border font-mono text-xs sm:text-sm transition-all duration-300 ${
                      activeCategory === category
                        ? 'bg-gray-800 border-green-400 text-green-400 shadow-lg shadow-green-400/20'
                        : 'bg-gray-900 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                    }`}
                  >
                    <CategoryIcon className="w-4 h-4" />
                    <span className="hidden sm:inline">{skills[category].name}</span>
                    <span className="sm:hidden capitalize">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Skills Display */}
            <div className="space-y-6">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${currentSkills.color}`} />
                <h3 className={`text-xl sm:text-2xl md:text-3xl font-bold font-mono ${currentSkills.color}`}>
                  {currentSkills.name}
                </h3>
                <div className="flex-1 h-px bg-gray-800"></div>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {currentSkills.items.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="bg-gray-800 p-4 sm:p-5 rounded-lg border border-gray-700 hover:border-green-400 hover:shadow-lg hover:shadow-green-400/20 transition-all duration-300 group cursor-pointer"
                    style={{
                      animation: isVisible ? `fadeInUp 0.5s ease-out ${index * 0.05}s both` : 'none'
                    }}
                  >
                    <div className="text-center">
                      <h4 className="text-gray-200 font-mono text-sm sm:text-base font-semibold group-hover:text-green-400 transition-colors mb-2">
                        {skill.name}
                      </h4>
                      <div className="inline-block px-2 py-1 bg-gray-900 rounded text-green-400 font-mono text-xs">
                        {skill.category}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Stats Summary */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-800">
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 font-mono mb-1">
                    {currentSkills.items.length}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-mono">
                    Technologies
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 font-mono mb-1">
                    {categories.length}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-mono">
                    Categories
                  </div>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg border border-gray-700 text-center col-span-2 sm:col-span-1">
                  <div className="text-2xl sm:text-3xl font-bold text-green-400 font-mono mb-1">
                    3+
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm font-mono">
                    Years Exp
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Terminal Command Input */}
        <div className="p-4 sm:p-6 md:p-8 border-t border-gray-700">
          <TerminalCommandInput />
          </div>
        </div>

        {/* Command Hint */}
        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-mono">
            <span className="text-green-400">~/portfolio</span> $ cd projects/
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}