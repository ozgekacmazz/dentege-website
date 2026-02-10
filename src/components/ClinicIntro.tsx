import introBg from '../assets/WhatsApp Image 2026-02-04 at 09.34.14.jpeg';
import { FaUserMd, FaTooth, FaBriefcaseMedical } from 'react-icons/fa';
import '../styles/ClinicIntro.css';
import { motion } from 'framer-motion';

const ClinicIntro = () => {
    const features = [
        {
            icon: <FaUserMd />,
            title: "Uzman Hekimler",
            desc: "Alanında deneyimli ve uzman diş hekimleri."
        },
        {
            icon: <FaTooth />,
            title: "Modern Teknoloji",
            desc: "Son teknoloji cihazlarla ağrısız tedavi."
        },
        {
            icon: <FaBriefcaseMedical />,
            title: "Yüksek Hijyen",
            desc: "Sterilizasyon standartlarına tam uyum."
        }
    ];

    return (
        <section className="section-padding container">
            <div className="intro-section">
                <motion.div
                    className="intro-image"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <img
                        src={introBg}
                        alt="Dent Ege Diş Kliniği Manisa Yunusemre klinik odaları ve koridoru"
                    />
                </motion.div>

                <motion.div
                    className="intro-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2>Neden Dent Ege?</h2>
                    <p>
                        Ağız ve diş sağlığınız bizim önceliğimizdir. Güvenilir, şeffaf ve kaliteli hizmet anlayışımızla,
                        sizlere en iyi tedavi deneyimini sunmayı hedefliyoruz. Kliniğimizde konforunuz ve sağlığınız
                        için her detay düşünüldü.
                    </p>

                    <div className="intro-features">
                        {features.map((feature, index) => (
                            <div className="feature-item" key={index}>
                                <div className="feature-icon">
                                    {feature.icon}
                                </div>
                                <div className="feature-text">
                                    <h4>{feature.title}</h4>
                                    <p>{feature.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default ClinicIntro;
