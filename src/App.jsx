import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
  Footer,
} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary min-h-screen text-white">
        {/* HERO */}
        <header className="bg-hero-pattern bg-cover bg-no-repeat bg-center min-h-screen">
          <Navbar />
          <Hero />
        </header>

        {/* MAIN */}
        <main className="bg-primary">
          <section className="section-spacing first-section-after-hero mb-20">
            <About />
          </section>

          <section id="work" className="section-spacing mb-20">
            <Experience />
          </section>

          <section id="tech" className="section-spacing mb-20">
            <Tech />
          </section>

          <section id="projects" className="section-spacing mb-20">
            <Works />
          </section>

          <section id="contact" className="relative z-0 section-spacing mb-20">
            <Contact />
            <StarsCanvas />
          </section>

          <Footer />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
