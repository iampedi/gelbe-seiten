import { Container } from "@/components/Container";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";

function App() {
  return (
    <>
      <HeroSection />

      <main>
        <Container>Main Section</Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
