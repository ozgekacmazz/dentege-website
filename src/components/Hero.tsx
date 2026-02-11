import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import heroBg from '../assets/WhatsApp Image 2026-02-04 at 09.32.20.jpeg';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section
            className="hero"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundPosition: 'center center'
            }}
            aria-label="Dent Ege Diş Kliniği Manisa Yunusemre resepsiyon alanı"
        >
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hero-text"
                >
                    <h1>Gülüşünüz, <br /><span>En Değerli</span> İmzamızdır</h1>
                    <p>
                        Özel Dent Ege Ağız ve Diş Sağlığı Polikliniği olarak, modern teknolojimiz ve uzman hekimlerimizle
                        ağız ve diş sağlığınız için en iyi hizmeti sunuyoruz.
                    </p>
                    <div className="hero-buttons">
                        <Link to="/randevu" className="btn btn-primary">Randevu Al</Link>
                        <Link to="/tedaviler" className="btn btn-secondary">Tedavilerimiz</Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
