import Header from '@/components/tectum/Header';
import { Hero } from '@/components/tectum/Hero';
import { Mission } from '@/components/tectum/Mission';
import { ServicesPreview } from '@/components/tectum/ServicesPreview';
import { WhyTectum } from '@/components/tectum/WhyTectum';
import { Founder } from '@/components/tectum/Founder';
import { Services } from '@/components/tectum/Services';
import { Contact } from '@/components/tectum/Contact';
import { Footer } from '@/components/tectum/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Mission />
        <ServicesPreview />
        <WhyTectum />
        <Founder />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}