import { cn } from "@/lib/utils";

import { Container } from "@/components/Container";
import { Button } from "@/components/ui/button";
import { PersonStandingIcon } from "lucide-react";

interface HeaderProps {
  className?: string;
}

export const Header = ({ className }: HeaderProps) => {
  return (
    <header className={cn("bg-secondary py-10 transition-colors", className)}>
      <Container>
        <div className="flex justify-between items-center gap-8">
          <div className="logo flex-1">
            <h1 className="text-4xl font-bold text-white">Gelbe Seiten</h1>
          </div>

          <nav className="flex gap-6 font-medium text-xl text-white">
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

          <div className="tools flex gap-2 items-center">
            <Button>Firma eintragen</Button>
            <Button size="icon">
              <PersonStandingIcon className="size-7!" />
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
};
