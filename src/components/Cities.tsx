import * as React from 'react';
import { Container } from './Container';
import { Card, CardHeader } from './ui/card';
import { Button } from './ui/button';

const ITEMS_PER_STEP = 3;
const ITEMS_INITIAL = 3;

const items = [
  { image: 'augsburg', name: 'Augsburg', state: 'Bayern', population: 289584 },
  { image: 'berlin', name: 'Berlin', state: 'Berlin', population: 3520031 },
  { image: 'bremen', name: 'Bremen', state: 'bremen', population: 565719 },
  { image: 'chemnitz', name: 'Chemnitz', state: 'sachsen', population: 246353 },
  {
    image: 'dortmund',
    name: 'Dortmund',
    state: 'nordrhein-westfalen',
    population: 565719,
  },
  { image: 'dresden', name: 'Dresden', state: 'sachsen', population: 547172 },
  {
    image: 'duisburg',
    name: 'Duisburg',
    state: 'nordrhein-westfalen',
    population: 499845,
  },
  {
    image: 'duesseldorf',
    name: 'Düsseldorf',
    state: 'nordrhein-westfalen',
    population: 613230,
  },
  {
    image: 'essen',
    name: 'Essen',
    state: 'nordrhein-westfalen',
    population: 583084,
  },
] as const;

export const Cities = () => {
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_INITIAL);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const isDirty = visibleCount > ITEMS_INITIAL;

  function handleShowMore() {
    setVisibleCount((count) => Math.min(count + ITEMS_PER_STEP, items.length));
  }

  function handleReset() {
    setVisibleCount(ITEMS_INITIAL);
  }

  return (
    <section className="bg-secondary py-14">
      <Container>
        <div className="space-y-6">
          <h2 className="bg-primary text-primary-foreground mx-auto mb-10 w-fit px-2 text-center text-3xl font-medium">
            Deutschland entdecken mit Gelbe Seiten
          </h2>

          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-lg font-semibold">
              Ihr Reiseführer für Deutschland
            </h3>

            <div className="grid grid-cols-3 gap-4">
              {visibleItems.map((city) => (
                <Card
                  key={city.name}
                  className="group relative cursor-pointer overflow-hidden border-none bg-red-400 shadow-none"
                >
                  <div className="relative p-0">
                    <img
                      src={`/images/cities/${city.image}.jpg`}
                      alt={city.name}
                      className="w-full rounded-md object-cover transition-all duration-300 group-hover:scale-105"
                    />

                    {/* overlay */}
                    <div className="pointer-events-none absolute inset-0 rounded-md bg-linear-to-t from-black/95 to-transparent" />

                    {/* text */}
                    <div className="absolute bottom-0 z-10 p-5">
                      <p className="text-xs text-white/70 uppercase">
                        {city.state}
                      </p>
                      <h4 className="mt-2 text-lg font-semibold text-white">
                        {city.name}
                      </h4>
                      <p className="flex gap-1 text-sm text-white">
                        {city.population.toLocaleString('de-DE')}
                        <span>Einwohner</span>
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="space-x-3 pt-6 text-center">
            {hasMore && (
              <Button onClick={handleShowMore} className="rounded-full px-6">
                Mehr anzeigen
              </Button>
            )}

            {isDirty && (
              <Button
                onClick={handleReset}
                variant="secondary"
                className="rounded-full px-6"
              >
                Zurücksetzen
              </Button>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};
