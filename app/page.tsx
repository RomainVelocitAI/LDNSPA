import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import WhyChooseUs from '@/components/sections/WhyChooseUs';
import Products from '@/components/sections/Products';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Products />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
