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

export const HeaderMenu = () => {
  return (
    <nav className="hidden gap-8 text-lg font-medium text-white sm:flex">
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
  );
};
