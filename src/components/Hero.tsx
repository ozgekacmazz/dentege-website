import "../styles/Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="hero-simple">
            <div className="container hero-simple-content">
                <h1>
                    Manisa’da <span>Güvenilir</span> ve <span>Modern</span><br />
                    Diş Tedavisi
                </h1>

                <p>
                    Dent Ege olarak implant, estetik diş hekimliği ve çocuk diş sağlığı
                    alanında hasta odaklı hizmet sunuyoruz.
                </p>

                <div className="hero-buttons">
                    <Link to="/randevu" className="btn btn-primary">
                        Randevu Al
                    </Link>

                    <Link to="/tedaviler" className="btn btn-outline">
                        Tedavileri İncele
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
