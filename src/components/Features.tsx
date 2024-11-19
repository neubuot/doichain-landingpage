import React from 'react';
import { 
  Shield, 
  Lock, 
  Globe, 
  Database, 
  Server, 
  Key,
  CheckCircle,
  Zap,
  Clock
} from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-600" />,
      title: "DSGVO-Konform",
      description: "Vollständige Compliance mit europäischen Datenschutzrichtlinien durch unveränderliche Blockchain-Einwilligungsnachweise."
    },
    {
      icon: <Lock className="h-8 w-8 text-blue-600" />,
      title: "Sicheres Double Opt-In",
      description: "Kryptographisch gesicherte Verifizierung von E-Mail-Einwilligungen durch dezentrale Blockchain-Technologie."
    },
    {
      icon: <Globe className="h-8 w-8 text-blue-600" />,
      title: "Dezentrales Netzwerk",
      description: "Verteilte Infrastruktur ohne zentrale Kontrollinstanz für maximale Ausfallsicherheit und Transparenz."
    },
    {
      icon: <Database className="h-8 w-8 text-blue-600" />,
      title: "Unveränderliche Aufzeichnungen",
      description: "Permanente und manipulationssichere Speicherung aller Einwilligungen in der Blockchain."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-600" />,
      title: "Einfache Integration",
      description: "Reibungslose Einbindung in bestehende E-Mail-Marketing-Systeme durch moderne APIs."
    },
    {
      icon: <Key className="h-8 w-8 text-blue-600" />,
      title: "Kryptographische Sicherheit",
      description: "Modernste Verschlüsselungstechnologie zum Schutz sensibler Daten und Einwilligungen."
    }
  ];

  const benefits = [
    {
      icon: <CheckCircle className="h-6 w-6 text-green-500" />,
      text: "Reduzierte rechtliche Risiken"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      text: "Verbesserte E-Mail-Zustellbarkeit"
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      text: "Zeitersparnis durch Automatisierung"
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Revolutionäre <span className="gradient-text">Features</span> für sicheres E-Mail-Marketing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Doichain vereint Blockchain-Technologie mit E-Mail-Marketing für maximale Sicherheit und Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Vorteile für Ihr Unternehmen</h3>
            <p className="text-blue-100">
              Maximieren Sie die Effektivität Ihres E-Mail-Marketings mit Doichain
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="flex items-center space-x-3 bg-white/10 rounded-lg p-4"
              >
                {benefit.icon}
                <span className="font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}