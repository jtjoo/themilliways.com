import { useLanguage } from '../context/LanguageContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="language-toggle">
      <div className="lang-toggle-widget">
        <button 
          className={`lang-option lang-en ${language === 'en' ? 'active' : ''}`}
          onClick={() => setLanguage('en')}
        >
          English
        </button>
        <button 
          className={`lang-option lang-ko ${language === 'ko' ? 'active' : ''}`}
          onClick={() => setLanguage('ko')}
        >
          한국어
        </button>
      </div>
    </div>
  );
}
