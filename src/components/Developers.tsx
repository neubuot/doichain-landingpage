import React from 'react';
import { 
  Code2, 
  Terminal, 
  Book, 
  Github, 
  MessageSquare,
  Boxes,
  Copy,
  CheckCircle2
} from 'lucide-react';

export default function Developers() {
  const [copied, setCopied] = React.useState(false);

  const codeExample = `// Initialize Doichain client
const doichain = new DoichainClient({
  network: 'mainnet',
  apiKey: 'your-api-key'
});

// Create a new DOI verification
const verification = await doichain.createVerification({
  email: 'user@example.com',
  name: 'John Doe',
  consent: 'newsletter-signup'
});`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeExample);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resources = [
    {
      icon: <Book className="h-6 w-6" />,
      title: "Dokumentation",
      description: "Ausführliche Guides und API-Referenzen",
      link: "#docs"
    },
    {
      icon: <Github className="h-6 w-6" />,
      title: "GitHub",
      description: "Open-Source Code und Beispiele",
      link: "#github"
    },
    {
      icon: <MessageSquare className="h-6 w-6" />,
      title: "Community",
      description: "Discord Server für Entwickler",
      link: "#discord"
    }
  ];

  const features = [
    {
      title: "RESTful API",
      description: "Moderne JSON-basierte API mit umfangreicher Dokumentation"
    },
    {
      title: "SDKs & Libraries",
      description: "Client-Bibliotheken für verschiedene Programmiersprachen"
    },
    {
      title: "Webhooks",
      description: "Echtzeit-Benachrichtigungen über Verifizierungsereignisse"
    }
  ];

  return (
    <section id="developers" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Code2 className="h-10 w-10 text-blue-600 mr-3" />
            <h2 className="text-4xl font-bold text-gray-900">
              Entwickler-<span className="gradient-text">Ressourcen</span>
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Integrieren Sie Doichain in Ihre Anwendung mit unseren umfangreichen Entwickler-Tools
          </p>
        </div>

        {/* Code Example */}
        <div className="mb-16">
          <div className="bg-gray-900 rounded-xl overflow-hidden shadow-2xl">
            <div className="flex items-center justify-between px-4 py-2 bg-gray-800">
              <div className="flex items-center">
                <Terminal className="h-5 w-5 text-gray-400 mr-2" />
                <span className="text-gray-400 text-sm">Beispiel-Integration</span>
              </div>
              <button
                onClick={copyToClipboard}
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                {copied ? (
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                ) : (
                  <Copy className="h-5 w-5" />
                )}
              </button>
            </div>
            <pre className="p-4 text-blue-400 overflow-x-auto">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <Boxes className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Resources */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="group bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              <div className="flex items-center mb-4">
                <div className="text-blue-600 group-hover:scale-110 transition-transform duration-300">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-semibold ml-3 text-gray-900">
                  {resource.title}
                </h3>
              </div>
              <p className="text-gray-600">
                {resource.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}