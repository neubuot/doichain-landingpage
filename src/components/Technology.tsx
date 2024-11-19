import React from 'react';
import { 
  Blocks, 
  Code2, 
  Cpu, 
  Network, 
  ShieldCheck, 
  Fingerprint,
  ArrowRight
} from 'lucide-react';

export default function Technology() {
  const techStack = [
    {
      icon: <Blocks className="h-6 w-6" />,
      title: "Blockchain-Technologie",
      description: "Basierend auf einer sicheren und skalierbaren Blockchain-Architektur für unveränderliche Datenspeicherung."
    },
    {
      icon: <Network className="h-6 w-6" />,
      title: "Dezentrales Netzwerk",
      description: "Verteiltes Peer-to-Peer-Netzwerk für maximale Ausfallsicherheit und Transparenz."
    },
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "Kryptographische Verifikation",
      description: "Fortschrittliche kryptographische Methoden zur sicheren Verifizierung von E-Mail-Opt-ins."
    }
  ];

  const features = [
    {
      title: "Smart Contracts",
      description: "Automatisierte Verarbeitung von Opt-in-Prozessen",
      items: ["Selbstausführende Verträge", "Transparente Regeln", "Automatische Compliance"]
    },
    {
      title: "API Integration",
      description: "Einfache Einbindung in bestehende Systeme",
      items: ["RESTful API", "WebSocket Support", "SDK Verfügbarkeit"]
    },
    {
      title: "Skalierbarkeit",
      description: "Designed für Wachstum und hohe Lasten",
      items: ["Horizontale Skalierung", "Load Balancing", "Hoher Durchsatz"]
    }
  ];

  return (
    <section id="technology" className="py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">
            Fortschrittliche <span className="text-blue-400">Technologie</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Unsere innovative Blockchain-Infrastruktur ermöglicht sichere und skalierbare E-Mail-Verifizierung
          </p>
        </div>

        {/* Tech Stack Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {techStack.map((tech, index) => (
            <div 
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-blue-500 transition-colors duration-300"
            >
              <div className="text-blue-400 mb-4">{tech.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{tech.title}</h3>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>

        {/* Technical Features */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index} className="relative">
              <div className="mb-4">
                <Cpu className="h-8 w-8 text-blue-400 mb-3" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-400">
            <a 
              href="#developers" 
              className="px-8 py-3 rounded-full bg-gray-900 hover:bg-gray-800 transition-colors duration-300"
            >
              <span className="flex items-center">
                <Code2 className="h-5 w-5 mr-2" />
                Technische Dokumentation
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}