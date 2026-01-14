import { Container } from '@/components/Container';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/HeroSection';
import TopAngebotes from '@/components/TopAngebotes';

function App() {
  return (
    <>
      <HeroSection />

      <main>
        <TopAngebotes />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
