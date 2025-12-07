import { useLanguage } from '../context/LanguageContext';

export default function Header() {
  const { t } = useLanguage();

  return (
    <header className="container header">
      <h1 className="title">themilliways</h1>
      <p className="tagline">{t.tagline}</p>
      <p className="bio" dangerouslySetInnerHTML={{ __html: t.bio }} />
    </header>
  );
}
