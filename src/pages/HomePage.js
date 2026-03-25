import Hero from '../components/Hero';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Clients from '../components/Clients';
import Testimonials from '../components/Testimonials';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      <Services />
      <Packages />
      <Clients />
      <Testimonials />
      <Team />
      <Contact />
    </main>
  );
}
