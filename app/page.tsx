import Header from '@/components/tectum/Header';
import { Hero } from '@/components/tectum/Hero';
import { Mission } from '@/components/tectum/Mission';
import { WhyTectum } from '@/components/tectum/WhyTectum';
import { Services } from '@/components/tectum/Services';
import { Founder } from '@/components/tectum/Founder';
import { Contact } from '@/components/tectum/Contact';
import { Footer } from '@/components/tectum/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <WhyTectum />
        <Services />
        <Founder />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
