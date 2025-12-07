import { useLanguage } from '../context/LanguageContext';

export default function PaypalSection() {
  const { t } = useLanguage();

  return (
    <section className="content-block">
      <p className="text-text-gray text-lg">{t.paypal.title}</p>
      <img 
        src="/images/paypal-qr.png" 
        alt="PayPal QR Code" 
        className="responsive-image w-[180px]"
      />
      <a 
        href="https://www.paypal.com/ncp/payment/EW8NV5MALLNTN" 
        className="button" 
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.paypal.button}
      </a>
    </section>
  );
}
