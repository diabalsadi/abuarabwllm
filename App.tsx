
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AiAssistant from './components/AiAssistant';
import { LanguageProvider } from './components/LanguageContext';

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col transition-all duration-300">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <Clients />
          <About />
          <Services />
          <Projects />
          <Contact />
        </main>
        <Footer />
        {/* <AiAssistant /> */}
      </div>
    </LanguageProvider>
  );
};

export default App;
