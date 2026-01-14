import React from 'react';
import { MouseIcon, SearchIcon } from 'lucide-react';
import { Container } from './Container';
import { Header } from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface HeroSectionProps {
  nextSectionRef: React.RefObject<HTMLElement | null>;
}

export const HeroSection = ({ nextSectionRef }: HeroSectionProps) => {
  const scrollToNext = () => {
    nextSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <div className="relative min-h-screen">
      <section className="absolute inset-0 size-full bg-black">
        <img
          src="/images/hero-bg.jpg"
          alt="a woman is working in a cafe"
          className="size-full object-cover"
        />
        <div className="to-secondary/30 absolute inset-0 bg-linear-to-t from-black" />
      </section>

      <div className="absolute z-10 flex size-full flex-col">
        <Header className="bg-transparent" />

        <div className="relative flex flex-1 items-center justify-center">
          <Container>
            <div className="mx-auto flex w-full flex-col gap-4 sm:w-2/3">
              <h2 className="text-primary-foreground/90 mx-auto w-2/3 text-center text-2xl font-normal uppercase sm:w-full">
                Dienstleister schneller finden
              </h2>

              <div className="group flex rounded-full bg-white/50 px-4 py-2">
                <Input
                  placeholder="Was"
                  className="rounded-none border-0 text-center text-lg text-white shadow-none placeholder:text-lg placeholder:text-white focus:placeholder-transparent focus-visible:ring-transparent"
                />

                <Input
                  placeholder="Wo"
                  className="rounded-none border-0 text-center text-lg text-white shadow-none placeholder:text-lg placeholder:text-white focus:placeholder-transparent focus-visible:ring-transparent"
                />

                <Button
                  variant="ghost"
                  className="min-w-24 justify-end gap-1 p-0 hover:bg-transparent focus-visible:ring-transparent"
                >
                  <SearchIcon className="group-hover:text-secondary size-7! text-white transition-all duration-500 ease-out" />
                  <span className="max-w-0 translate-x-[-5px] overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-out group-hover:max-w-[80px] group-hover:translate-x-0 group-hover:opacity-100">
                    Finden
                  </span>
                </Button>
              </div>

              <div className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row">
                <div>
                  <h2 className="text-primary-foreground/90 text-center font-light">
                    Mehrfach <span className="font-normal">ausgezeichnet</span>
                  </h2>
                </div>

                <div className="flex h-14 items-center justify-center gap-4 sm:h-10">
                  <div className="flex h-full items-center">
                    <img
                      src="/images/germanCustomerAward_2023.png"
                      className="max-h-full w-auto object-contain"
                      alt=""
                    />
                  </div>

                  <div className="flex h-full items-center">
                    <img
                      src="/images/ntv_2023.png"
                      className="max-h-full w-auto object-contain"
                      alt=""
                    />
                  </div>

                  <div className="flex h-full items-center">
                    <img
                      src="/images/besteOnlinePortale_2023.png"
                      className="max-h-full w-auto object-contain"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </Container>

          <MouseIcon
            role="button"
            tabIndex={0}
            onClick={scrollToNext}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') scrollToNext();
            }}
            className="absolute bottom-6 left-1/2 size-7 -translate-x-1/2 rotate-180 animate-bounce cursor-pointer text-white/50"
          />
        </div>
      </div>
    </div>
  );
};
