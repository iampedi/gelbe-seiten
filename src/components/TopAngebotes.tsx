import { Container } from './Container';
import AngebotesCards from './AngebotesCards';

const personalAngebote = [
  {
    title: 'Angebote direkt einholen',
    description:
      'Wir helfen Ihnen passende Dienstleister zu finden und schnell Angebote zu erhalten.',
    icon: '/images/icons/ic_angebote.svg',
  },
  {
    title: 'Sprachsteuerung mit Alexa',
    description:
      'Suchen wird jetzt noch einfacher. Aktivieren Sie jetzt das neue Alexa Skill von Gelbe Seiten.',
    icon: '/images/icons/ic_sprachsteuerung.svg',
  },
  {
    title: 'Finden mit Apple Messages',
    description:
      'Mit der eigenen Nachrichten-App Unternehmen bei Gelbe Seiten finden.',
    icon: '/images/icons/ic_applemessages.svg',
  },
];

const firmenAngebote = [
  {
    title: 'Firmeneintrag erstellen',
    description:
      'Steigern Sie Ihre Sichtbarkeit und registrieren Sie jetzt kostenlos Ihr Unternehmen.',
    icon: '/images/icons/ic_firmeneintrag.svg',
  },
  {
    title: 'Termin-Buchungstool',
    description:
      'Bestätigen Sie Terminanfragen online und nutzen Sie die automatisierte Terminvergabe.',
    icon: '/images/icons/ic_termin.svg',
  },
  {
    title: 'Werbung',
    description:
      'Finden Sie passende Online Werbelösungen für Ihr Unternehmen.',
    icon: '/images/icons/ic_werbung.svg',
  },
];

export const TopAngebotes = () => {
  return (
    <section className="py-14">
      <Container>
        <div>
          <h2 className="bg-primary text-primary-foreground mx-auto mb-10 w-fit px-2 text-center text-3xl font-medium">
            Unsere Top-Angebote
          </h2>

          <div className="mb-10 space-y-3">
            <h3 className="text-xl font-medium">
              Vorteile für <span className="font-bold">Sie</span>
            </h3>

            <AngebotesCards angebote={personalAngebote} />
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">
              Vorteile für <span className="font-bold">Firmen</span>
            </h3>

            <AngebotesCards angebote={firmenAngebote} />
          </div>
        </div>
      </Container>
    </section>
  );
};
