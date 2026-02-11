import { FaWhatsapp } from "react-icons/fa";
import "../styles/WhatsAppFloat.css";

const WhatsAppFloat = () => {
    const WHATSAPP_URL = "https://wa.me/905065364145";

    return (
        <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="WhatsApp ile randevu alın"
            title="WhatsApp ile randevu alın"
        >
            <FaWhatsapp />
            <span className="whatsapp-float-text">WhatsApp</span>
        </a>
    );
};

export default WhatsAppFloat;
