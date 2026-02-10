import { FaWhatsapp } from 'react-icons/fa';
import { HiCalendar } from 'react-icons/hi';
import Seo from '../components/Seo';

const Appointment = () => {
    return (
        <div className="section-padding" style={{ backgroundColor: 'var(--color-bg)' }}>
            <div className="container">
                <Seo
                    title="Online Randevu | Dent Ege Diş Kliniği Manisa WhatsApp Randevu"
                    description="Dent Ege Diş Kliniği Manisa Yunusemre için WhatsApp üzerinden hızlı ve kolay diş randevusu alın. Mesaj gönderin, size uygun tarihi birlikte planlayalım."
                />
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <div style={{
                        width: '80px', height: '80px', backgroundColor: 'var(--color-accent)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 1.5rem auto', color: 'var(--color-primary)', fontSize: '2.5rem'
                    }}>
                        <HiCalendar />
                    </div>
                    <h1 style={{ marginBottom: '1rem' }}>Randevu Alın</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)', fontSize: '1.1rem' }}>
                        Randevu almak için aşağıdaki butona tıklayarak WhatsApp hattımız üzerinden bizimle iletişime geçebilirsiniz. Size en kısa sürede dönüş yaparak uygun zamanı planlayalım.
                    </p>
                </div>

                <div style={{ textAlign: 'center' }}>
                    <a
                        href="https://wa.me/905065364145"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                        style={{
                            display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
                            padding: '1rem 2.5rem', fontSize: '1.2rem', backgroundColor: '#25D366',
                            borderColor: '#25D366', textDecoration: 'none'
                        }}
                    >
                        <FaWhatsapp style={{ fontSize: '1.5rem' }} />
                        WhatsApp ile Randevu Al
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Appointment;
