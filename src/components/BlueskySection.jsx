import { useLanguage } from '../context/LanguageContext';

export default function BlueskySection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <a href="https://bsky.app/profile/themilliways.com" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/bluesky-logo.png" 
          alt="BlueSky Logo" 
          className="responsive-image w-20"
        />
      </a>
      <a 
        href="https://bsky.app/profile/themilliways.com" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.bluesky}
      </a>
    </section>
  );
}
