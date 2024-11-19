import React from 'react';
import { 
  Rocket,
  FileCode2,
  Settings2,
  CheckCircle,
  ArrowRight,
  Download,
  Key,
  Mail
} from 'lucide-react';

export default function GetStarted() {
  const steps = [
    {
      icon: <Download className="h-8 w-8 text-blue-600" />,
      title: "Installation",
      description: "Installieren Sie das Doichain SDK über npm oder yarn",
      code: "npm install @doichain/sdk"
    },
    {
      icon: <Key className="h-8 w-8 text-blue-600" />,
      title: "API-Schlüssel generieren",
      description: "Erstellen Sie Ihren API-Schlüssel im Dashboard",
      code: "DOICHAIN_API_KEY=your-api-key"
    },
    {
      icon: <Mail className="h-8 w-8 text-blue-600" />,
      title: "Integration",
      description: "Fügen Sie Doichain in Ihre E-Mail-Flows ein",
      code: "await doichain.verify(email, consent)"
    }
  ];

  const features = [
    "Schnelle Integration in bestehende Systeme",
    "Umfangreiche Dokumentation",
    "Technischer Support",
    "Skalierbare Infrastruktur"
  ];

  return (
    <section id="get-started" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Rocket className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Starten Sie mit <span className="gradient-text">Doichain</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In wenigen Schritten zu sicherer E-Mail-Verifizierung
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="bg-blue-50 rounded-lg w-16 h-16 flex items-center justify-center mb-4">
                {step.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {step.description}
              </p>
              <div className="bg-gray-900 rounded-lg p-3">
                <code className="text-blue-400 text-sm">
                  {step.code}
                </code>
              </div>
            </div>
          ))}
        </div>

        {/* Features & CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Alles was Sie brauchen
              </h3>
              <ul className="space-y-4">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 mr-3 text-blue-200" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-center lg:text-right">
              <div className="inline-flex flex-col space-y-4">
                <a 
                  href="#documentation"
                  className="inline-flex items-center px-6 py-3 bg-white text-gray-900 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                >
                  <FileCode2 className="h-5 w-5 mr-2" />
                  Dokumentation
                </a>
                <a 
                  href="#dashboard"
                  className="inline-flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
                >
                  <Settings2 className="h-5 w-5 mr-2" />
                  Dashboard öffnen
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="#tutorial"
            className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Video Tutorial</h4>
              <p className="text-gray-600">Schritt-für-Schritt Anleitung zur Integration</p>
            </div>
            <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
          <a 
            href="#examples"
            className="group flex items-center justify-between p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
          >
            <div>
              <h4 className="text-lg font-semibold text-gray-900">Code Beispiele</h4>
              <p className="text-gray-600">Praktische Implementierungsbeispiele</p>
            </div>
            <ArrowRight className="h-5 w-5 text-blue-600 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
}