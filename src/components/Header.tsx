import { cn } from '@/lib/utils';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('bg-secondary py-8 transition-colors', className)}>
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div className="logo flex-1">
            <h1 className="text-4xl font-bold text-white">Gelbe Seiten</h1>
          </div>

          <nav className="flex gap-8 text-lg font-medium text-white">
            <a href="#" className="hover:underline">
              Suchen
            </a>
            <a href="#" className="hover:underline">
              Service
            </a>
            <a href="#" className="hover:underline">
              Ratgeber
            </a>
          </nav>

          <div className="tools flex items-center gap-4">
            <Button>Firma eintragen</Button>

            <Button
              size="icon"
              variant="outline"
              className="size-8 rounded-full border-white"
            >
              <PersonStandingIcon className="size-5!" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
