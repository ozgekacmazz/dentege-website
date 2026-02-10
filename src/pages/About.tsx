import ClinicIntro from '../components/ClinicIntro';
import Seo from '../components/Seo';
import { FaCheckCircle } from 'react-icons/fa';
import ozanImg from '../assets/WhatsApp Image 2026-02-04 at 09.26.05.jpeg';
import mehmetEminImg from '../assets/WhatsApp Image 2026-02-04 at 09.26.19.jpeg';
import mehmetKarakilincImg from '../assets/WhatsApp Image 2026-02-04 at 09.26.32.jpeg';

const About = () => {
    return (
        <div>
            <div className="container section-padding">
                <Seo
                    title="Hakkımızda | Dent Ege Diş Kliniği Manisa Yunusemre"
                    description="Dent Ege Diş Kliniği, Manisa Yunusemre'de hasta odaklı, modern ve hijyenik bir ağız ve diş sağlığı polikliniği olarak hizmet vermektedir. Misyonumuz ve değerlerimizi keşfedin."
                />
                <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Hakkımızda</h1>
                <p style={{ maxWidth: '800px', margin: '0 auto 4rem auto', textAlign: 'center', color: 'var(--color-text-light)' }}>
                    Özel Dent Ege Ağız ve Diş Sağlığı Polikliniği, Manisa Yunusemre'de modern diş hekimliği hizmetlerini
                    etik değerlere ve hasta haklarına bağlı kalarak sunmak amacıyla kurulmuştur.
                </p>

                <ClinicIntro />

                {/* Hekimlerimiz */}
                <section style={{ marginTop: '4rem' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>
                        Hekimlerimiz
                    </h2>
                    <div
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                            gap: '2rem',
                            alignItems: 'stretch'
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: 'var(--color-white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                textAlign: 'center',
                                padding: '1.5rem'
                            }}
                        >
                            <img
                                src={ozanImg}
                                alt="Diş Hekimi Ozan Kaçmaz - Dent Ege Diş Kliniği Manisa"
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
                            />
                            <h3>Ozan Kaçmaz</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>Diş Hekimi</p>
                        </div>

                        <div
                            style={{
                                backgroundColor: 'var(--color-white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                textAlign: 'center',
                                padding: '1.5rem'
                            }}
                        >
                            <img
                                src={mehmetEminImg}
                                alt="Diş Hekimi Mehmet Emin Silkîn - Dent Ege Diş Kliniği Manisa"
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
                            />
                            <h3>Mehmet Emin Silkîn</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>Diş Hekimi</p>
                        </div>

                        <div
                            style={{
                                backgroundColor: 'var(--color-white)',
                                borderRadius: 'var(--radius-lg)',
                                boxShadow: 'var(--shadow-md)',
                                textAlign: 'center',
                                padding: '1.5rem'
                            }}
                        >
                            <img
                                src={mehmetKarakilincImg}
                                alt="Diş Hekimi Mehmet Karakılınç - Dent Ege Diş Kliniği Manisa"
                                style={{ width: '100%', height: 'auto', borderRadius: 'var(--radius-lg)' }}
                            />
                            <h3>Mehmet Karakılınç</h3>
                            <p style={{ color: 'var(--color-text-light)' }}>Diş Hekimi</p>
                        </div>
                    </div>
                </section>

                <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>

                    <div className="about-card" style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Misyonumuz</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Hastalarımıza uluslararası standartlarda, koruyucu ve tedavi edici diş hekimliği hizmetlerini;
                            bilimsel, etik ve vicdani değerlerden ödün vermeden sunmak.
                        </p>
                    </div>

                    <div className="about-card" style={{ backgroundColor: 'var(--color-white)', padding: '2rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-md)' }}>
                        <h3 style={{ color: 'var(--color-primary-dark)', marginBottom: '1rem' }}>Vizyonumuz</h3>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Ağız ve diş sağlığı alanında teknolojik gelişmeleri yakından takip eden,
                            hasta memnuniyetini en üst düzeyde tutan, referans bir sağlık kurumu olmak.
                        </p>
                    </div>

                </div>

                <div style={{ marginTop: '4rem' }}>
                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--color-primary-dark)' }}>Değerlerimiz</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                        {['Hasta Odaklılık', 'Güvenilirlik', 'Şeffaflık', 'Sürekli Gelişim', 'Hijyen ve Sterilizasyon'].map((val, i) => (
                            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--color-accent)', padding: '1rem', borderRadius: 'var(--radius-md)' }}>
                                <FaCheckCircle style={{ color: 'var(--color-primary)' }} />
                                <span style={{ fontWeight: '500', color: 'var(--color-primary-dark)' }}>{val}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
