import React from 'react';

import { Cities } from '@/components/Cities';
import { HeroSection } from '@/components/HeroSection';
import { ImFokus } from '@/components/ImFokus';
import { TopAngebotes } from '@/components/TopAngebotes';
import { TopCategories } from '@/components/TopCategories';
import { Footer } from '@/components/Footer';

function App() {
  const nextSectionRef = React.useRef<HTMLElement | null>(null);

  return (
    <>
      <HeroSection nextSectionRef={nextSectionRef} />

      <main>
        <TopAngebotes ref={nextSectionRef} />
        <ImFokus />
        <TopCategories />
        <Cities />
      </main>

      <Footer />
    </>
  );
}

export default App;
