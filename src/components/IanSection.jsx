import { useLanguage } from '../context/LanguageContext';

export default function IanSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <h3 className="specialepian-title highlight-purple">{t.specialepian.title}</h3>
      <p className="specialepian-title highlight-purple">{t.specialepian.date}</p>
      <p className="text-description">{t.specialepian.description}</p>
      <img 
        src="/images/specialepian-art.jpg" 
        alt="Album art for Ian" 
          className="original-size"
      />
      <a 
        href="https://distrokid.com/hyperfollow/themilliways/ian" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.specialepian.listenNow}
      </a>
    </section>
  );
}
