import { ChevronRightIcon } from 'lucide-react';
import { Container } from './Container';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';
import { Button } from './ui/button';

interface Item {
  image: string;
  category: string;
  title: string;
  description: string;
  button: string;
}

const items: Item[] = [
  {
    image: '/images/blog-01.webp',
    category: 'ratgeber',
    title: 'Garten im Mai: Diese Gartenarbeiten liegen im Wonnemonat an',
    description:
      'Häufig sieht der Garten im Mai schon richtig toll aus: Frühlingsblumen locken Bienen und Schmetterlinge an, und alles grünt und wächst. Jetzt sollten Sie auch die Ärmel hochkrempeln und sich an die Gartenarbeit machen, denn im Wonnemonat liegt so einiges an.',
    button: 'Mehr erfahren',
  },
  {
    image: '/images/blog-02.webp',
    category: 'ratgeber',
    title: 'Erkältung, Grippe, Corona? Symptome richtig deuten',
    description:
      '„Bin ich nur erkältet, habe ich eine Grippe oder sogar Corona?“ Diese Frage lässt sich ohne ärztliche Untersuchung meist nicht hundertprozentig beantworten. Dennoch gibt es Symptome, in denen sich die Erkrankungen unterscheiden. Unser Ratgeber gibt Ihnen einen Überblick.',
    button: 'Jetzt informieren',
  },
  {
    image: '/images/blog-03.webp',
    category: 'Häufig gesucht',
    title: 'Profis für Heizungsbau',
    description:
      'Eine defekte Heizung im Winter ist nicht nur unangenehm, sondern kann auch erhebliche Schäden in Ihrem Zuhause zur Folge haben. Schnelles Handeln ist jetzt entscheidend, um eine Schimmelbildung und Frostschäden an den Rohren zu vermeiden. Ein Profi für Heizungsbau hilft Ihnen dabei.',
    button: 'Profi finden',
  },
];

export const ImFokus = () => {
  return (
    <section className="bg-secondary py-14">
      <Container>
        <div>
          <h2 className="bg-primary text-primary-foreground mx-auto mb-10 w-fit px-2 text-center text-3xl font-medium">
            Gelbe Seiten im Fokus
          </h2>

          <div className="mb-10 space-y-3">
            <h3 className="text-xl font-medium">
              Aktuelles aus <span className="font-bold">erster Hand</span>
            </h3>

            <div className="flex gap-5">
              {items.map(
                ({ image, category, title, description, button }: Item) => (
                  <Card
                    key={title}
                    className="group border-secondary flex cursor-pointer flex-col rounded-md border-3 bg-white shadow-none duration-300 hover:border-black"
                  >
                    <CardHeader className="rounded-t-md p-0">
                      <img src={image} alt={''} className="rounded-t" />
                    </CardHeader>

                    <CardContent className="flex max-h-full flex-1 flex-col pt-5">
                      <div className="text-muted-foreground mb-2 text-sm font-medium uppercase">
                        {category}
                      </div>
                      <h4 className="mb-2 flex flex-1 gap-1 text-lg leading-snug font-semibold transition-all duration-300 group-hover:gap-0.5">
                        {title}
                      </h4>

                      <p className="text-muted-foreground group-hover:text-primary leading-snug">
                        {description}
                      </p>
                    </CardContent>

                    <CardFooter className="pt-8">
                      <Button className="text-muted-foreground bg-transparent shadow-none group-hover:bg-black group-hover:text-white">
                        {button}
                      </Button>
                    </CardFooter>
                  </Card>
                )
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
