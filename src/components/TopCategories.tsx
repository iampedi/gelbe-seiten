import * as React from 'react';
import { Container } from './Container';
import { Card, CardHeader } from './ui/card';
import { Button } from './ui/button';
import {
  Stethoscope,
  Briefcase,
  Hammer,
  Building2,
  Trees,
  SprayCan,
  Bug,
} from 'lucide-react';

const ITEMS_PER_STEP = 2;
const ITEMS_INITIAL = 2;

const items = [
  {
    icon: Stethoscope,
    list: 'Gesundheitswesen',
    items: ['Ärzte', 'Zahnärzte', 'Physiotherapie', 'Logopädie'],
  },
  {
    icon: Briefcase,
    list: 'Beratungsdienstleistungen',
    items: ['Rechtsanwälte', 'Steuerberatung', 'Bestattungen'],
  },
  {
    icon: Hammer,
    list: 'Handwerksbetriebe',
    items: [
      'Elektroinstallationen',
      'Sanitärinstallationen',
      'Heizungs- und Lüftungsbau',
      'Malerbetriebe',
      'Dachdeckereien',
      'Rohrreinigung',
      'Tischlereien',
      'Fenster',
      'Kanalreinigung',
    ],
  },
  {
    icon: Building2,
    list: 'Immobilien und Bauwesen',
    items: ['Bauunternehmen', 'Immobilien'],
  },
  {
    icon: Trees,
    list: 'Garten- und Landschaftsbau',
    items: ['Garten- und Landschaftsbau'],
  },
  {
    icon: SprayCan,
    list: 'Gebäudemanagement',
    items: ['Gebäudereinigung'],
  },
  {
    icon: Bug,
    list: 'Spezialdienstleistungen',
    items: ['Schädlingsbekämpfung'],
  },
] as const;

export const TopCategories = () => {
  const [visibleCount, setVisibleCount] = React.useState(ITEMS_INITIAL);

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;
  const isDirty = visibleCount > ITEMS_INITIAL; // یعنی کاربر کلیک کرده

  function handleShowMore() {
    setVisibleCount((count) => Math.min(count + ITEMS_PER_STEP, items.length));
  }

  function handleReset() {
    setVisibleCount(ITEMS_INITIAL);
  }

  return (
    <section className="py-14">
      <Container>
        <div className="space-y-6">
          <h2 className="bg-primary text-primary-foreground mx-auto mb-10 w-fit px-2 text-center text-3xl font-medium">
            Top-Branchen finden
          </h2>

          <div className="space-y-8">
            {visibleItems.map((category) => {
              const Icon = category.icon;

              return (
                <div key={category.list} className="space-y-2">
                  <h3 className="flex items-center gap-2 text-lg font-semibold">
                    <Icon className="size-5" />
                    {category.list}
                  </h3>

                  <div className="flex flex-wrap gap-2">
                    {category.items.map((sub) => (
                      <Card
                        key={sub}
                        className="group border-secondary hover:bg-secondary cursor-pointer rounded-md border-2 transition-colors duration-300"
                      >
                        <CardHeader className="px-4 py-2.5">
                          <h4 className="text-base font-medium">{sub}</h4>
                        </CardHeader>
                      </Card>
                    ))}
                  </div>
                </div>
              );
            })}
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
