'use client';
import { useState } from 'react';
import { Terminal, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare, User, FileText } from 'lucide-react';
import TerminalCommandInput from '../terminalCommand';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [commandOutput, setCommandOutput] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'your.njogucollins10397@gmail.com',
      link: 'mailto:njogucollins10397@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+254 745 733370',
      link: 'tel:+254745733370'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Nairobi, Kenya',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      username: '@yourusername',
      link: 'https://github.com/yourusername',
      color: 'hover:text-gray-300'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      username: '@yourusername',
      link: 'https://linkedin.com/in/yourusername',
      color: 'hover:text-blue-400'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      username: '@yourusername',
      link: 'https://twitter.com/yourusername',
      color: 'hover:text-sky-400'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setCommandOutput([
      '> Initializing contact protocol...',
      '> Validating input data...',
      '> Encrypting message...',
      '> Establishing connection...'
    ]);

    setTimeout(() => {
      setCommandOutput(prev => [
        ...prev,
        '> Message sent successfully! ✓',
        '> You will receive a response within 24 hours.',
        '> Connection closed.'
      ]);
      setIsSubmitting(false);
      
      setTimeout(() => {
        setFormData({ name: '', email: '', subject: '', message: '' });
        setCommandOutput([]);
      }, 3000);
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-black text-green-400 py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gray-900 rounded-lg border border-gray-800 overflow-hidden">
          <div className="bg-gray-800 px-3 py-2 sm:px-4 sm:py-3 flex items-center justify-between border-b border-gray-700">
            <div className="flex items-center gap-2">
              <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-green-400" />
              <span className="text-gray-400 text-xs sm:text-sm font-mono">contact.sh</span>
            </div>
            <div className="flex gap-1.5 sm:gap-2">
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="p-6 sm:p-8 md:p-10">
            <div className="mb-8">
              <div className="text-gray-500 text-xs sm:text-sm mb-4 font-mono">
                <span className="text-green-400">~/portfolio</span> $ ./contact.sh --mode interactive
              </div>
              <div className="text-green-400 font-mono text-lg sm:text-xl md:text-2xl mb-2">
                Let's Connect
              </div>
              <p className="text-gray-400 text-sm sm:text-base font-mono">
                Feel free to reach out for collaborations, opportunities, or just a friendly chat.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
              <div className="lg:col-span-1 space-y-6">
                <div className="space-y-4">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <div
                        key={info.label}
                        className="bg-gray-800 p-4 rounded-lg border border-gray-700 hover:border-green-400 transition-all duration-300 group"
                      >
                        {info.link ? (
                          <a href={info.link} className="flex items-start gap-3">
                            <Icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                            <div className="flex-1 min-w-0">
                              <div className="text-gray-500 text-xs font-mono mb-1">
                                {info.label}
                              </div>
                              <div className="text-gray-300 text-sm font-mono break-all group-hover:text-green-400 transition-colors">
                                {info.value}
                              </div>
                            </div>
                          </a>
                        ) : (
                          <div className="flex items-start gap-3">
                            <Icon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                            <div className="flex-1">
                              <div className="text-gray-500 text-xs font-mono mb-1">
                                {info.label}
                              </div>
                              <div className="text-gray-300 text-sm font-mono">
                                {info.value}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>

                <div className="bg-gray-800 p-5 rounded-lg border border-gray-700">
                  <h3 className="text-green-400 font-mono text-sm mb-4 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Social Media
                  </h3>
                  <div className="space-y-3">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.name}
                          href={social.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-3 text-gray-400 ${social.color} transition-colors group`}
                        >
                          <div className="w-10 h-10 bg-gray-900 rounded flex items-center justify-center group-hover:bg-gray-700 transition-colors">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="flex-1">
                            <div className="text-sm font-mono">{social.name}</div>
                            <div className="text-xs font-mono text-gray-600">
                              {social.username}
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg border border-green-400">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-green-400 font-mono text-sm font-semibold">
                      Available for work
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs font-mono">
                    Currently open to new opportunities and collaborations
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-gray-800 p-6 sm:p-8 rounded-lg border border-gray-700">
                  <h3 className="text-green-400 font-mono text-lg sm:text-xl mb-6 flex items-center gap-2">
                    <Send className="w-5 h-5" />
                    Send a Message
                  </h3>

                  <div className="space-y-5">
                    <div>
                      <label className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-2">
                        <User className="w-4 h-4 text-green-400" />
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-2">
                        <Mail className="w-4 h-4 text-green-400" />
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-2">
                        <FileText className="w-4 h-4 text-green-400" />
                        Subject
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none focus:border-green-400 transition-colors"
                        placeholder="Project Collaboration"
                      />
                    </div>

                    <div>
                      <label className="flex items-center gap-2 text-gray-400 text-sm font-mono mb-2">
                        <MessageSquare className="w-4 h-4 text-green-400" />
                        Message
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="6"
                        className="w-full bg-gray-900 border border-gray-700 rounded px-4 py-3 text-gray-300 font-mono text-sm focus:outline-none focus:border-green-400 transition-colors resize-none"
                        placeholder="Hi! I'd like to discuss..."
                      ></textarea>
                    </div>

                    {commandOutput.length > 0 && (
                      <div className="bg-gray-900 p-4 rounded border border-gray-700 font-mono text-xs sm:text-sm">
                        {commandOutput.map((line, index) => (
                          <div key={index} className="text-green-400 mb-1">
                            {line}
                          </div>
                        ))}
                      </div>
                    )}

                    <button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      className={`w-full sm:w-auto px-8 py-3 rounded font-mono font-semibold text-sm sm:text-base transition-all duration-300 flex items-center justify-center gap-2 ${
                        isSubmitting
                          ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                          : 'bg-green-500 text-black hover:bg-green-600 active:bg-green-700 hover:shadow-lg hover:shadow-green-400/50'
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
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

        <div className="mt-4 sm:mt-6 text-center">
          <p className="text-gray-600 text-xs sm:text-sm font-mono">
            <span className="text-green-400">~/portfolio</span> $ echo "Thanks for visiting!"
          </p>
        </div>
      </div>
    </div>
  );
}