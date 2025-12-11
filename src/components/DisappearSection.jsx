import { useLanguage } from '../context/LanguageContext';

export default function DisappearSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <h3 className="disappear-title highlight-purple">{t.disappear.title}</h3>
      <p className="disappear-title highlight-purple">{t.disappear.date}</p>
      <p className="text-description">{t.disappear.description}</p>
      <img 
        src="/images/disappear-art.jpg" 
        alt="Album art for Disappear" 
        className="responsive-image max-w-[400px]"
      />
      <a 
        href="https://distrokid.com/hyperfollow/themilliways/disappear-2" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.disappear.listenNow}
      </a>
    </section>
  );
}
