import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="container footer">
      <div className="social-links">
        <a href="https://www.linkedin.com/in/jintaejoo/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://www.facebook.com/themiliways/" target="_blank" rel="noopener noreferrer">Facebook</a>
        <a href="https://www.instagram.com/themilliways_official/" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.youtube.com/@themilliways" target="_blank" rel="noopener noreferrer">YouTube</a>
        <a href="mailto:me@themilliways.com">Email</a>
      </div>
      <a href="https://jtjoo.com" className="button-footer">{t.footer.businessQuery}</a>
      <p className="copyright">{currentYear} {t.footer.copyright}</p>
    </footer>
  );
}
