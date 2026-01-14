import { cn } from '@/lib/utils';

import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { MenuIcon, PersonStandingIcon } from 'lucide-react';
import { MobileMenu } from './MobileMenu';
import { HeaderMenu } from './HeaderMenu';

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header
      className={cn('bg-secondary py-5 transition-colors sm:py-8', className)}
    >
      <Container>
        <div className="flex items-center justify-between gap-6">
          <div className="logo flex-1">
            <img
              src="/images/gelbe-seiten-logo-white.svg"
              className="h-7"
              alt="Gelbe Seiten"
            />
          </div>

          <HeaderMenu />

          <div className="tools flex items-center gap-3 sm:gap-4">
            <Button className="hidden sm:block">Firma eintragen</Button>

            <MobileMenu />

            <Button
              size="icon"
              variant="outline"
              className="size-8 rounded-full border-white"
            >
              <PersonStandingIcon className="size-5" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
