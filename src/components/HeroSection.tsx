import { Header } from "./Header";

export const HeroSection = () => {
  return (
    <div className="relative min-h-screen">
      <Header className="absolute top-0 z-10 w-full bg-transparent" />

      <section className="absolute inset-0 size-full bg-black">
        <img
          src="/images/hero-bg.jpg"
          alt="a woman is working in a cafe"
          className="size-full object-cover"
        />
        <div className="absolute inset-0  bg-linear-to-t from-black to-secondary/30" />
      </section>

      <div className="relative z-0 pt-32 container mx-auto">
        {/* Hero text/content would go here */}
      </div>
    </div>
  );
};
