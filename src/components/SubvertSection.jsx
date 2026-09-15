import { useLanguage } from '../context/LanguageContext';

export default function SubvertSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <a href="https://subvert.fm/themilliways" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/subvert.png" 
          alt="Subvert themilliways" 
          className="original-size"
        />
      </a>
      <p className="subvert-title">{t.subvert.title}</p>
      <p className="subvert-description" dangerouslySetInnerHTML={{ __html: t.subvert.description }} />
      <a 
        href="https://subvert.fm/themilliways" 
        target="_blank" 
        rel="noopener noreferrer"
        className="subvert-link block"
      >
        https://www.subvert.fm/themilliways
      </a>
    </section>
  );
}
