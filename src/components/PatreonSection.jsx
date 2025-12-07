import { useLanguage } from '../context/LanguageContext';

export default function PatreonSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <a href="https://patreon.com/themilliways" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/patreon-banner.png" 
          alt="Patreon Banner" 
          className="responsive-image max-w-[500px]"
        />
      </a>
      <p className="patreon-title">{t.patreon.title}</p>
      <a 
        href="https://patreon.com/themilliways" 
        target="_blank" 
        rel="noopener noreferrer"
        className="patreon-link block"
      >
        https://patreon.com/themilliways
      </a>
    </section>
  );
}
