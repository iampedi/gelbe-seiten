import { cn } from '@/lib/utils';
import { Container } from '@/components/Container';
import { Button } from '@/components/ui/button';
import { PersonStandingIcon } from 'lucide-react';

interface HeaderProps {
  className?: string;
}

const navItems = [
  {
    label: 'Suchen',
    href: '#',
  },
  {
    label: 'Service',
    href: '#',
  },
  {
    label: 'Ratgeber',
    href: '#',
  },
];

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn('bg-secondary py-8 transition-colors', className)}>
      <Container>
        <div className="flex items-center justify-between gap-6">
          {/* Logo */}
          <div className="logo flex-1">
            <h1 className="text-4xl font-bold text-white">Gelbe Seiten</h1>
          </div>

          {/* Navigation */}
          <nav className="flex gap-8 text-lg font-medium text-white">
            {navItems.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={cn(
                  'border-b-3 border-transparent transition-colors duration-300 hover:border-black hover:text-black! hover:no-underline!'
                )}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Tools */}
          <div className="tools flex items-center gap-4">
            <Button>Firma eintragen</Button>

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
