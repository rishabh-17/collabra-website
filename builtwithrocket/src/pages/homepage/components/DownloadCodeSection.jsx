import React, { useState } from 'react';
import JSZip from 'jszip';
import Icon from '../../../components/AppIcon';

const DownloadCodeButton = () => {
    const [isGenerating, setIsGenerating] = useState(false);

    const handleDownload = async () => {
        setIsGenerating(true);

        try {
            const zip = new JSZip();

            // Package.json
            zip?.file('package.json', JSON.stringify({
                "name": "collabrah-tech-website",
                "version": "1.0.0",
                "private": true,
                "type": "module",
                "dependencies": {
                    "react": "^18.2.0",
                    "react-dom": "^18.2.0",
                    "react-router-dom": "6.0.2",
                    "framer-motion": "^10.16.4",
                    "lucide-react": "^0.484.0",
                    "tailwind-merge": "^3.3.1",
                    "clsx": "^2.1.1"
                },
                "scripts": {
                    "start": "vite",
                    "build": "vite build",
                    "serve": "vite preview"
                },
                "devDependencies": {
                    "@vitejs/plugin-react": "4.3.4",
                    "vite": "5.0.0",
                    "tailwindcss": "3.4.6",
                    "autoprefixer": "10.4.2",
                    "postcss": "8.4.8"
                }
            }, null, 2));

            // README.md
            zip?.file('README.md', `# Collabrah Tech Website

A modern, responsive React website built with Vite and Tailwind CSS.

## Features
- Dynamic hero section with animations
- Client showcase and testimonials
- Services overview
- Responsive design
- Modern UI components

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Start development server:
\`\`\`bash
npm start
\`\`\`

3. Build for production:
\`\`\`bash
npm run build
\`\`\`

## Project Structure

\`\`\`
src/
├── components/       # Reusable UI components
├── pages/           # Page components
│   └── homepage/    # Homepage sections
├── styles/          # Global styles
└── utils/           # Utility functions
\`\`\`

## Technologies Used
- React 18
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React Icons
- React Router DOM

## License
MIT
`);

            // Vite config
            zip?.file('vite.config.js', `import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
`);

            // Tailwind config
            zip?.file('tailwind.config.js', `/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D2A4A',
        secondary: '#2FA4A9',
      },
    },
  },
  plugins: [],
}
`);

            // PostCSS config
            zip?.file('postcss.config.js', `export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`);

            // Index.html
            zip?.file('index.html', `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Collabrah Tech - Digital Solutions</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.jsx"></script>
  </body>
</html>
`);

            // .gitignore
            zip?.file('.gitignore', `# Dependencies
node_modules

# Production
build
dist

# Environment
.env
.env.local

# IDE
.vscode
.idea

# OS
.DS_Store
Thumbs.db

# Logs
npm-debug.log*
yarn-debug.log*
`);

            // Source files
            const srcFolder = zip?.folder('src');

            // Main entry files
            srcFolder?.file('index.jsx', `import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../../../App';
import './styles/tailwind.css';
import './styles/index.css';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`);

            srcFolder?.file('App.jsx', `import React from 'react';
import Routes from '../../../Routes';

function App() {
  return <Routes />;
}

export default App;
`);

            srcFolder?.file('Routes.jsx', `import React from 'react';
import { BrowserRouter, Routes as RouterRoutes, Route } from 'react-router-dom';
import Homepage from './pages/homepage';
import NotFound from '../../NotFound';

const Routes = () => {
  return (
    <BrowserRouter>
      <RouterRoutes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
    </BrowserRouter>
  );
};

export default Routes;
`);

            // Styles
            const stylesFolder = srcFolder?.folder('styles');
            stylesFolder?.file('tailwind.css', `@tailwind base;
@tailwind components;
@tailwind utilities;
`);

            stylesFolder?.file('index.css', `* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`);

            // Utils
            const utilsFolder = srcFolder?.folder('utils');
            utilsFolder?.file('cn.js', `import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}
`);

            // Components
            const componentsFolder = srcFolder?.folder('components');

            componentsFolder?.file('AppIcon.jsx', `import React from 'react';
import * as LucideIcons from 'lucide-react';

const Icon = ({ name, size = 24, color = 'currentColor', className = '', ...props }) => {
  const IconComponent = LucideIcons[name];
  
  if (!IconComponent) {
    console.warn(\`Icon \"\${name}\" not found\`);
    return null;
  }
  
  return <IconComponent size={size} color={color} className={className} {...props} />;
};

export default Icon;
`);

            componentsFolder?.file('AppImage.jsx', `import React from 'react';

const AppImage = ({ src, alt = '', className = '', ...props }) => {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      {...props}
    />
  );
};

export default AppImage;
`);

            // Pages
            const pagesFolder = srcFolder?.folder('pages');

            pagesFolder?.file('NotFound.jsx', `import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
        <p className="text-xl text-gray-600 mb-8">Page not found</p>
        <Link to="/" className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
`);

            // Homepage folder
            const homepageFolder = pagesFolder?.folder('homepage');

            homepageFolder?.file('index.jsx', `import React from 'react';
import HeroSection from './HeroSection';
import ClientLogoSection from './ClientLogoSection';
import ValuePropositionSection from './ValuePropositionSection';
import ServicesOverviewSection from './ServicesOverviewSection';
import TestimonialSection from './TestimonialSection';
import CTASection from './CTASection';
import FooterSection from './FooterSection';

const Homepage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ClientLogoSection />
      <ValuePropositionSection />
      <ServicesOverviewSection />
      <TestimonialSection />
      <CTASection />
      <FooterSection />
    </div>
  );
};

export default Homepage;
`);

            // Homepage components with placeholder implementations
            const homepageComponentsFolder = homepageFolder?.folder('components');

            const componentTemplate = (name, title) => `import React from 'react';

const ${name} = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">${title}</h2>
        <p className="text-center text-gray-600">Component implementation here</p>
      </div>
    </section>
  );
};

export default ${name};
`;

            homepageComponentsFolder?.file('HeroSection.jsx', componentTemplate('HeroSection', 'Welcome to Collabrah Tech'));
            homepageComponentsFolder?.file('ClientLogoSection.jsx', componentTemplate('ClientLogoSection', 'Our Clients'));
            homepageComponentsFolder?.file('ValuePropositionSection.jsx', componentTemplate('ValuePropositionSection', 'Our Values'));
            homepageComponentsFolder?.file('ServicesOverviewSection.jsx', componentTemplate('ServicesOverviewSection', 'Our Services'));
            homepageComponentsFolder?.file('TestimonialSection.jsx', componentTemplate('TestimonialSection', 'What Our Clients Say'));
            homepageComponentsFolder?.file('CTASection.jsx', componentTemplate('CTASection', 'Get Started Today'));
            homepageComponentsFolder?.file('FooterSection.jsx', `import React from 'react';

const FooterSection = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p>&copy; 2026 Collabrah Tech. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterSection;
`);

            // Public folder
            const publicFolder = zip?.folder('public');
            publicFolder?.file('robots.txt', `User-agent: *
Allow: /
`);

            // Generate and download
            const content = await zip?.generateAsync({ type: 'blob' });
            const url = window.URL?.createObjectURL(content);
            const link = document.createElement('a');
            link.href = url;
            link.download = `collabrah-tech-source-code-${new Date()?.toISOString()?.split('T')?.[0]}.zip`;
            document.body?.appendChild(link);
            link?.click();
            document.body?.removeChild(link);
            window.URL?.revokeObjectURL(url);
        } catch (error) {
            console.error('Error generating zip:', error);
            alert('Failed to generate download. Please try again.');
        } finally {
            setIsGenerating(false);
        }
    };

    return (
        <div className="bg-gradient-to-r from-[#0D2A4A] to-[#2FA4A9] py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                        onClick={handleDownload}
                        disabled={isGenerating}
                        className="group flex items-center gap-3 bg-white text-[#0D2A4A] px-6 py-3 rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                        {isGenerating ? (
                            <>
                                <Icon name="Loader2" size={20} color="#0D2A4A" className="animate-spin" />
                                <span>Generating...</span>
                            </>
                        ) : (
                            <>
                                <Icon name="Download" size={20} color="#0D2A4A" />
                                <span>Download Source Code</span>
                                <Icon
                                    name="Code2"
                                    size={18}
                                    color="#0D2A4A"
                                    className="group-hover:rotate-12 transition-transform duration-300"
                                />
                            </>
                        )}
                    </button>
                    <p className="text-white/80 text-sm text-center sm:text-left">
                        Get the complete React source code for this website
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DownloadCodeButton;