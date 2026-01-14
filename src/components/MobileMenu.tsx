import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from './ui/button';
import { MenuIcon } from 'lucide-react';
import { HeaderMenu } from './HeaderMenu';
import { cn } from '@/lib/utils';

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

export const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger className="m-0 sm:hidden" asChild>
        <Button size="icon" variant="ghost" className="size-8">
          <MenuIcon className="size-7!" />
        </Button>
      </SheetTrigger>
      <SheetContent className="bg-secondary border-0 p-4">
        <SheetHeader className="flex items-start pt-2 pb-6">
          <img
            src="/images/gelbe-seiten-logo.svg"
            className="h-5"
            alt="Gelbe Seiten"
          />
        </SheetHeader>
        <nav className="flex flex-col text-lg font-medium">
          {navItems.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={cn(
                'border-b-2 border-black px-2 py-3 transition-colors duration-300 hover:border-black hover:text-black! hover:no-underline!'
              )}
            >
              {label}
            </a>
          ))}
        </nav>

        <Button className="mt-4 w-full">Firma eintragen</Button>
        <HeaderMenu />
      </SheetContent>
    </Sheet>
  );
};
