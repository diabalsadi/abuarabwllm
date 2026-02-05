import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const BaseRoute = () => {
     return <div className="min-h-screen flex flex-col transition-all duration-300">
       
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
}

export default BaseRoute;