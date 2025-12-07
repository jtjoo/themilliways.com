import { useLanguage } from '../context/LanguageContext';

export default function BandcampSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <h3 className="bandcamp-title">{t.bandcamp.title}</h3>
      <p 
        className="bandcamp-subtitle" 
        dangerouslySetInnerHTML={{ __html: t.bandcamp.subtitle }}
      />
      <a 
        href="https://your-bandcamp-url.com" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.bandcamp.link}
      </a>
    </section>
  );
}
