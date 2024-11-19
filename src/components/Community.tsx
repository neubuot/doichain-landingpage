import React from 'react';
import { 
  Users,
  MessageCircle,
  Github,
  Twitter,
  Globe,
  Heart,
  Trophy,
  Target,
  Gift,
  Code,
  Bug,
  Lightbulb
} from 'lucide-react';
import CommunitySignupForm from './CommunitySignupForm';

// ... [Previous imports and component code remains the same until the CTA section]

export default function Community() {
  const [showSignupForm, setShowSignupForm] = React.useState(false);

  // ... [Previous component code remains the same until the CTA section]

  return (
    <section id="community" className="py-24 bg-white">
      {/* ... [Previous JSX remains the same until the CTA section] */}

      {/* Modified CTA Section */}
      <div className="mt-16 text-center">
        {!showSignupForm ? (
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
            <button 
              onClick={() => setShowSignupForm(true)}
              className="flex items-center px-8 py-3 rounded-full bg-white hover:bg-gray-50 transition-colors duration-300 text-gray-900"
            >
              <Target className="h-5 w-5 mr-2" />
              <span>Jetzt Mitglied werden</span>
            </button>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-8">Community Mitglied werden</h3>
            <CommunitySignupForm />
          </div>
        )}
      </div>
    </section>
  );
}