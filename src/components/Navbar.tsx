import React from 'react';
import { Menu, X, ChevronDown, Shield, Mail, Lock } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Mail className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Doichain</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 transition">Features</a>
            <a href="#technology" className="text-gray-700 hover:text-blue-600 transition">Technology</a>
            <a href="#developers" className="text-gray-700 hover:text-blue-600 transition">Developers</a>
            <a href="#community" className="text-gray-700 hover:text-blue-600 transition">Community</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Get Started
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Features</a>
            <a href="#technology" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Technology</a>
            <a href="#developers" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Developers</a>
            <a href="#community" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 rounded-md">Community</a>
            <button className="w-full text-left px-3 py-2 bg-blue-600 text-white rounded-md">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}