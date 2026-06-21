import { useTheme } from './hooks/useTheme';
import { GlowingCursor } from './components/GlowingCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Achievements } from './components/Achievements';

import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  const { mounted } = useTheme();

  if (!mounted) {
    return <div className="min-h-screen bg-dark" />;
  }

  return (
    <>
      <GlowingCursor />
      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Achievements />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
