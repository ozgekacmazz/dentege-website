import heroImg from '../assets/hero-clinic.jpg';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImg})` }}
        >
            <div className="hero-overlay"></div>

            <div className="container hero-content">
                <div className="hero-text">
          <span className="hero-location">
            Manisa Yunusemre'de Modern Diş Hekimliği
          </span>

                    <h1>
                        Gülüşünüz,
                        <br />
                        <span>En Değerli İmzamızdır.</span>
                    </h1>

                    <p>
                        Özel Dent Ege Ağız ve Diş Sağlığı Polikliniği olarak
                        modern teknolojimiz ve uzman hekim kadromuz ile
                        sağlıklı ve estetik gülüşler tasarlıyoruz.
                    </p>

                    <div className="hero-buttons">
                        <Link to="/randevu" className="btn btn-primary">
                            Randevu Al
                        </Link>

                        <Link to="/tedaviler" className="btn btn-outline">
                            Tedavilerimiz
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
