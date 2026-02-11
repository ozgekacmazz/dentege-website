import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';
import Seo from '../components/Seo';

const Contact = () => {
    return (
        <div className="section-padding">
            <div className="container">
                <Seo
                    title="İletişim | Dent Ege Diş Kliniği Manisa Yunusemre Adres ve Telefon"
                    description="Dent Ege Diş Kliniği iletişim bilgileri: Ayni Ali, Sakarya Cad. No:118/A, 45120 Yunusemre/Manisa. Telefon: 0 506 536 41 45 ve 0 236 234 40 44. Konumu haritada görüntüleyin ve hemen arayın."
                />
                <h1 style={{ textAlign: 'center', marginBottom: '3rem' }}>İletişim</h1>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                    <div className="contact-info">
                        <h3 style={{ marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>İletişim Bilgileri</h3>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '50px', height: '50px', backgroundColor: 'var(--color-accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', color: 'var(--color-primary)', fontSize: '1.2rem', flexShrink: 0
                            }}>
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Adres</h4>
                                <p style={{ color: 'var(--color-text-light)' }}>
                                    DENT EGE AĞIZ VE DİŞ SAĞLIĞI POLİKLİNİĞİ<br />
                                    Ayni Ali, Sakarya Cad. no:118/A, 45120 Yunusemre/Manisa
                                </p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '50px', height: '50px', backgroundColor: 'var(--color-accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', color: 'var(--color-primary)', fontSize: '1.2rem', flexShrink: 0
                            }}>
                                <FaPhone />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Telefon</h4>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <a href="tel:+905065364145" style={{ color: 'var(--color-text-light)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        +90 506 536 41 45 (GSM)
                                    </a>
                                    <a href="https://wa.me/905065364145" target="_blank" rel="noopener noreferrer" style={{ color: '#25D366', textDecoration: 'none', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                        WhatsApp'tan Yazın
                                    </a>
                                    <a href="tel:+902362344044" style={{ color: 'var(--color-text-light)', textDecoration: 'none' }}>
                                        0236 234 40 44 (Sabit)
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                            <div style={{
                                width: '50px', height: '50px', backgroundColor: 'var(--color-accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', color: 'var(--color-primary)', fontSize: '1.2rem', flexShrink: 0
                            }}>
                                <FaEnvelope />
                            </div>
                            <div>
                            <h4 style={{ marginBottom: '0.5rem' }}>E-posta</h4>
                            <p style={{ color: 'var(--color-text-light)' }}>info@dentege.com.tr</p>
                            </div>
                        </div>

                        <div style={{ display: 'flex', gap: '1rem' }}>
                            <div style={{
                                width: '50px', height: '50px', backgroundColor: 'var(--color-accent)',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                borderRadius: '50%', color: 'var(--color-primary)', fontSize: '1.2rem', flexShrink: 0
                            }}>
                                <FaClock />
                            </div>
                            <div>
                                <h4 style={{ marginBottom: '0.5rem' }}>Çalışma Saatleri</h4>
                                <p style={{ color: 'var(--color-text-light)' }}>
                                    Pazartesi - Cuma  : 09:00 - 00:00<br />
                                    Cumartesi - Pazar : 09:00 - 18:00
                                </p>
                            </div>
                        </div>

                    </div>

                    <div className="contact-map">
                        <h3 style={{ marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Konum</h3>
                        <div style={{
                            width: '100%', height: '400px', backgroundColor: '#e2e8f0',
                            borderRadius: 'var(--radius-lg)', overflow: 'hidden'
                        }}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3117.498839256768!2d27.4197664!3d38.6144038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa147759e4d190813%3A0xc05de5e3087f0211!2zREVOVCBFR0UgQcSeSVogVkUgRMSwxZ4gU0HEnkxJxJ5JIFBPTMSwS0zEsE7EsMSexLA!5e0!3m2!1str!2str!4v1769200378431!5m2!1str!2str"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen={true}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Dent Ege Location"
                            ></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
