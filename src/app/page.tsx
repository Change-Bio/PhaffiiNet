import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';

interface Strain {
  strain_name: string;
  strain_description: string;
  order?: number;
}

export default function Home() {
  // Read home page content
  const homePath = path.join(process.cwd(), 'content', 'home.md');
  let homeData = {
    hero_title: 'Placeholder',
    hero_subtitle: 'Placeholder',
    strains_title: 'Placeholder',
    strains_content: 'Placeholder',
  };

  if (fs.existsSync(homePath)) {
    const fileContents = fs.readFileSync(homePath, 'utf8');
    const { data } = matter(fileContents);
    homeData = { ...homeData, ...data };
  }

  // Read strains
  const strainsDir = path.join(process.cwd(), 'content', 'strains');
  let strains: Strain[] = [];

  if (fs.existsSync(strainsDir)) {
    const files = fs.readdirSync(strainsDir);
    strains = files
      .filter((file) => file.endsWith('.md'))
      .map((file) => {
        const filePath = path.join(strainsDir, file);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);
        return data as Strain;
      })
      .sort((a, b) => (a.order || 0) - (b.order || 0));
  }


  // Read settings
  const settingsPath = path.join(process.cwd(), 'content', 'settings.md');
  let settings = { primary_color: '#D4AF37', company_name: 'Placeholder' };
  if (fs.existsSync(settingsPath)) {
    const fileContents = fs.readFileSync(settingsPath, 'utf8');
    const { data } = matter(fileContents);
    settings = { ...settings, ...data };
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
          <div className="text-xl font-bold" style={{ color: settings.primary_color }}>
	  PhaffiiNet
          </div>
          <nav className="flex gap-8">
            <a href="#strains" className="text-gray-700 hover:text-black transition-colors">
              The strains
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center px-8 overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 blur-sm"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40 z-10"></div>

        {/* Hero Text */}
        <div className="relative z-20 max-w-6xl mx-auto w-full">
          <div className="text-center">
            <h1
              className="text-6xl md:text-8xl font-bold mb-6 text-white"
              style={{
                textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              {homeData.hero_title}
            </h1>
            <div
              className="text-3xl md:text-4xl text-white font-light"
              style={{
                textShadow: '0 0 20px rgba(0,0,0,0.9), 0 0 10px rgba(0,0,0,0.9), 2px 2px 4px rgba(0,0,0,0.8)'
              }}
            >
              <ReactMarkdown
                components={{
                  p: ({ children }) => <span>{children}</span>,
                  em: ({ children }) => <em>{children}</em>,
                }}
              >
                {homeData.hero_subtitle}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </section>

      {/* Strains Section */}
      <section id="strains" className="py-12 px-4 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2
            className="text-4xl font-bold mb-8 text-center"
            style={{ color: settings.primary_color }}
          >
            {homeData.strains_title}
          </h2>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {strains.map((strain) => (
              <div
                key={strain.strain_name}
                className="bg-gray-100 rounded-lg p-8 text-center hover:bg-gray-200 transition-colors"
              >
                <h3 className="text-2xl font-bold text-black mb-3">
                  {strain.strain_name}
                </h3>
                <div className="text-gray-700 mb-6 text-lg">
                  <ReactMarkdown
                    components={{
                      p: ({ children }) => <span>{children}</span>,
                      em: ({ children }) => <em>{children}</em>,
                    }}
                  >
                    {strain.strain_description}
                  </ReactMarkdown>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="py-8 px-4 bg-white border-t border-gray-300">
        <div className="max-w-5xl mx-auto text-center text-gray-600 text-sm">
          <p>{new Date().getFullYear()} {settings.company_name}.</p>
        </div>
      </footer>
    </div>
  );
}
