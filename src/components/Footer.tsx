import { FaFacebook, FaInstagram, FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';
import '../styles/Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-col">
                    <h3 className="footer-logo">Dent<span>Ege</span></h3>
                    <p className="footer-desc">
                        Sağlıklı gülüşleriniz için modern teknoloji ve uzman kadromuzla hizmetinizdeyiz.
                    </p>
                    <div className="footer-socials">
                        <a href="#" aria-label="Facebook"><FaFacebook /></a>
                        <a href="#" aria-label="Instagram"><FaInstagram /></a>
                        <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
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
                            <span>Özel Dent Ege<br />İzmir, Türkiye</span>
                        </li>
                        <li>
                            <FaPhone className="icon" />
                            <span>+90 555 123 45 67</span>
                        </li>
                        <li>
                            <FaEnvelope className="icon" />
                            <span>info@dentege.com</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Özel Dent Ege Ağız ve Diş Sağlığı Polikliniği. Tüm hakları saklıdır.</p>
            </div>
        </footer>
    );
};

export default Footer;
