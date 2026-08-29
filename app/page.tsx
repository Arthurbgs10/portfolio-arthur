import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { StackStrip } from '@/components/StackStrip';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Projects } from '@/components/Projects';
import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StackStrip />
        <About />
        <Skills />
        <Projects />
        <Cta />
      </main>
      <Footer />
    </>
  );
}
