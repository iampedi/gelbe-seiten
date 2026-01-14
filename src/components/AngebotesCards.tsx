import { ChevronRightIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from './ui/card';

interface AngebotesCardsProps {
  angebote: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export default function AngebotesCards({ angebote }: AngebotesCardsProps) {
  return (
    <div className="flex gap-5">
      {angebote.map(({ title, description, icon }) => (
        <Card
          key={title}
          className="group bg-secondary/20 border-secondary hover:bg-secondary cursor-pointer rounded-md border-3 shadow-none duration-300"
        >
          <CardHeader>
            <span
              className="bg-secondary size-24 mask-contain mask-center mask-no-repeat transition-all duration-300 group-hover:-rotate-10 group-hover:bg-black"
              style={{
                maskImage: `url(${icon})`,
                WebkitMaskImage: `url(${icon})`,
              }}
            />
          </CardHeader>

          <CardContent>
            <h4 className="mb-2 flex items-center gap-1 text-lg font-semibold duration-300 group-hover:gap-0.5">
              {title} <ChevronRightIcon className="size-5" />
            </h4>
            <p className="text-muted-foreground group-hover:text-primary leading-snug">
              {description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
