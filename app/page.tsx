'use client';

import CustomCursor from '@/components/CustomCursor';
import BackgroundEffects from '@/components/BackgroundEffects';
import ScrollProgress from '@/components/ScrollProgress';
import BackToTop from '@/components/BackToTop';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { useTheme } from '@/lib/hooks/useTheme';

export default function Home() {
  const { mounted } = useTheme();

  if (!mounted) {
    return <div className="min-h-screen bg-background" />;
  }

  return (
    <>
      <CustomCursor />
      <BackgroundEffects />
      <ScrollProgress />
      <BackToTop />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
