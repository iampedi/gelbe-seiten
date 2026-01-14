import { Container } from './Container';

const footerMenu = [
  {
    heading: 'Dialog & Hilfe',
    items: [
      {
        title: 'Ansprechpartner',
        href: '/',
      },
      {
        title: 'Häufige Fragen',
        href: '/',
      },
      {
        title: 'Übersicht aller Städte',
        href: '/',
      },
    ],
  },
  {
    heading: 'Unsere Partner',
    items: [
      {
        title: 'Kooperationspartner',
        href: '/',
      },
      {
        title: 'Das Telefonbuch',
        href: '/',
      },
      {
        title: 'Das Örtliche',
        href: '/',
      },
    ],
  },
  {
    heading: 'Zu finden auf',
    items: [
      {
        title: 'Instagram',
        href: '/',
      },
      {
        title: 'Facebook',
        href: '/',
      },
      {
        title: 'Pinterest',
        href: '/',
      },
      {
        title: 'TikTok',
        href: '/',
      },
    ],
  },
  {
    heading: 'Über Gelbe Seiten',
    items: [
      {
        title: 'Newsroom',
        href: '/',
      },
      {
        title: 'Gelbe Seiten als App',
        href: '/',
      },
      {
        title: 'Gelbe Seiten für Messenger',
        href: '/',
      },
      {
        title: 'Gelbe Seiten als Alexa Skill',
        href: '/',
      },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary pt-10 sm:pt-20">
      <Container>
        <div className="grid gap-8 sm:grid-cols-4">
          {footerMenu.map((item) => (
            <div key={item.heading}>
              <h2 className="mb-4 text-lg font-semibold">{item.heading}</h2>
              <ul className="space-y-1.5">
                {item.items.map((item) => (
                  <li key={item.title}>
                    <a href={item.href}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-8 border-b-2 border-dashed border-black pb-10 sm:grid-cols-6">
          <div className="sm:col-span-2 sm:col-start-2">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Gelbe Seiten als App
            </h2>

            <div className="flex h-16 items-center justify-center gap-2">
              <div className="flex h-9 items-center">
                <img
                  src="/images/google-play-badge.png"
                  className="max-h-full w-auto object-contain"
                  alt=""
                />
              </div>

              <div className="flex h-9 items-center">
                <img
                  src="/images/app-store-badge.png"
                  className="max-h-full w-auto object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>

          <div className="sm:col-span-2">
            <h2 className="mb-4 text-center text-lg font-semibold">
              Mehrfach ausgezeichnet
            </h2>

            <div className="flex h-16 items-center justify-center gap-6">
              <div className="flex h-full items-center">
                <img
                  src="/images/germanCustomerAward_2023.png"
                  className="max-h-full w-auto object-contain"
                  alt=""
                />
              </div>

              <div className="flex h-full items-center">
                <img
                  src="/images/ntv_2023.png"
                  className="max-h-full w-auto object-contain"
                  alt=""
                />
              </div>

              <div className="flex h-full items-center">
                <img
                  src="/images/besteOnlinePortale_2023.png"
                  className="max-h-full w-auto object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-between space-y-8 py-4 sm:py-6">
          <nav>
            <ul className="flex flex-wrap gap-x-6 gap-y-1 sm:gap-6">
              <li>
                <a href="/">Impressum</a>
              </li>
              <li>
                <a href="/">Datenschutzerklärung</a>
              </li>
              <li>
                <a href="/">Datenschutz-Einstellungen</a>
              </li>
              <li>
                <a href="/">AGB</a>
              </li>
            </ul>
          </nav>

          <div className="space-y-3">
            <div>
              <img src="/images/gelbe-seiten-logo.svg" className="h-6" alt="" />
            </div>
            <p>
              Ein Service Ihrer
              <br /> Gelbe Seiten Verlage
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};
