import { Cities } from '@/components/Cities';
import { HeroSection } from '@/components/HeroSection';
import { ImFokus } from '@/components/ImFokus';
import { TopAngebotes } from '@/components/TopAngebotes';
import { TopCategories } from '@/components/TopCategories';

function App() {
  return (
    <>
      <HeroSection />

      <main>
        <TopAngebotes />

        <ImFokus />

        <TopCategories />

        <Cities />
      </main>

      {/* <Footer /> */}
    </>
  );
}

export default App;
