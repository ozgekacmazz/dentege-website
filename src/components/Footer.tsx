import {
    FaFacebook,
    FaInstagram,
    FaWhatsapp,
    FaPhone,
    FaMapMarkerAlt,
    FaEnvelope,
} from 'react-icons/fa';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const INSTAGRAM_URL =
        'https://www.instagram.com/dentege_poliklinigi/?igsh=dWs1bDZ4eHk0OTJu';

    const FACEBOOK_URL = ''; // varsa ekle
    const WHATSAPP_URL = 'https://wa.me/905065364145';

    const EMAIL = 'info@dentege.com.tr';
    const FIXED_TEL_LINK = '+902362344044';

    const MAPS_URL =
        'https://www.google.com/maps/search/?api=1&query=Ayni+Ali+Sakarya+Cad+118A+Yunusemre+Manisa';

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">
                        Dent<span>Ege</span>
                    </h3>
                    <p className="footer-desc">
                        Sağlıklı gülüşleriniz için modern teknoloji ve uzman kadromuzla hizmetinizdeyiz.
                    </p>

                    <div className="footer-socials">
                        {FACEBOOK_URL ? (
                            <a
                                href={FACEBOOK_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                            >
                                <FaFacebook />
                            </a>
                        ) : null}

                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <FaInstagram />
                        </a>

                        <a
                            href={WHATSAPP_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                        >
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <div className="footer-col">
                    <h4>Hızlı Bağlantılar</h4>
                    <ul>
                        <li><Link to="/">Ana Sayfa</Link></li>
                        <li><Link to="/tedaviler">Tedaviler</Link></li>
                        <li><Link to="/hakkimizda">Hakkımızda</Link></li>
                        <li><Link to="/iletisim">İletişim</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Tedaviler</h4>
                    <ul>
                        <li><Link to="/tedaviler#implant">İmplant Tedavisi</Link></li>
                        <li><Link to="/tedaviler#zirkonyum">Zirkonyum Kaplama</Link></li>
                        <li><Link to="/tedaviler#beyazlatma">Diş Beyazlatma</Link></li>
                        <li><Link to="/tedaviler#gulus-tasarimi">Gülüş Tasarımı</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>İletişim</h4>
                    <ul className="contact-list">
                        <li>
                            <FaMapMarkerAlt className="icon" />
                            <span>
                <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Google Haritalar'da aç"
                >
                  DENT EGE AĞIZ VE DİŞ SAĞLIĞI POLİKLİNİĞİ<br />
                  Ayni Ali, Sakarya Cad. no:118/A<br />
                  45120 Yunusemre / Manisa
                </a>
              </span>
                        </li>

                        <li>
                            <FaPhone className="icon" />
                            <span>
                <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
                  +90 506 536 41 45 (WhatsApp)
                </a>
                <br />
                <a href={`tel:${FIXED_TEL_LINK}`}>0236 234 40 44 (Sabit)</a>
              </span>
                        </li>

                        <li>
                            <FaEnvelope className="icon" />
                            <span>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="footer-bottom">
                <p>
                    &copy; {new Date().getFullYear()} Özel Dent Ege Ağız ve Diş Sağlığı Polikliniği.
                    Tüm hakları saklıdır.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
