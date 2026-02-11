import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import '../styles/Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // Scroll olunca navbar gölgesi artsın
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'navbar-scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link to="/" className="navbar-logo">
                    Dent<span>Ege</span>
                </Link>

                <div
                    className="navbar-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </div>

                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li>
                        <Link to="/" onClick={() => setIsOpen(false)}>
                            Ana Sayfa
                        </Link>
                    </li>
                    <li>
                        <Link to="/tedaviler" onClick={() => setIsOpen(false)}>
                            Tedaviler
                        </Link>
                    </li>
                    <li>
                        <Link to="/hakkimizda" onClick={() => setIsOpen(false)}>
                            Hakkımızda
                        </Link>
                    </li>
                    <li>
                        <Link to="/iletisim" onClick={() => setIsOpen(false)}>
                            İletişim
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/randevu"
                            className="btn btn-primary"
                            onClick={() => setIsOpen(false)}
                        >
                            Randevu Al
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
