import { useLanguage } from '../context/LanguageContext';

export default function ThirdAirSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <h2 className="third-air-title">{t.thirdAir.title}</h2>
      <a href="https://themilliways.hearnow.com/3rd-air" target="_blank" rel="noopener noreferrer">
        <img 
          src="/images/3rd-air-art.png" 
          alt="Album art for 3rd air" 
          className="responsive-image max-w-[450px]"
        />
      </a>
      <p className="text-text-gray">{t.thirdAir.released}</p>
      <p className="text-description">{t.thirdAir.description}</p>
      <a 
        href="https://themilliways.hearnow.com/3rd-air" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.thirdAir.button}
      </a>
    </section>
  );
}
