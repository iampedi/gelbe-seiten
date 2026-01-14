import React from 'react';
import { MouseIcon, SearchIcon } from 'lucide-react';
import { Container } from './Container';
import { Header } from './Header';
import { Button } from './ui/button';
import { Input } from './ui/input';

type HeroSectionProps = {
  nextSectionRef: React.RefObject<HTMLElement | null>;
};

export const HeroSection = ({ nextSectionRef }: HeroSectionProps) => {
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
                  <SearchIcon className="group-hover:text-secondary size-7 text-white transition-all duration-500 ease-out" />
                  <span className="max-w-0 translate-x-[-5px] overflow-hidden whitespace-nowrap opacity-0 transition-all duration-500 ease-out group-hover:max-w-[80px] group-hover:translate-x-0 group-hover:opacity-100">
                    Finden
                  </span>
                </Button>
              </div>

              {/* awards... */}
            </div>
          </Container>

          <MouseIcon
            role="button"
            tabIndex={0}
            onClick={() =>
              nextSectionRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
              })
            }
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                nextSectionRef.current?.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start',
                });
              }
            }}
            className="absolute bottom-6 left-1/2 size-7 -translate-x-1/2 rotate-180 animate-bounce cursor-pointer text-white/50 transition-colors hover:text-white"
          />
        </div>
      </div>
    </div>
  );
};
