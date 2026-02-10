import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import '../styles/TreatmentCard.css';
import { motion } from 'framer-motion';

interface TreatmentCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    link: string;
    delay?: number;
}

const TreatmentCard: React.FC<TreatmentCardProps> = ({ title, description, icon, link, delay = 0 }) => {
    return (
        <motion.div
            className="treatment-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <div className="treatment-icon">
                {icon}
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link to={link} className="treatment-link">
                Detaylı Bilgi <FaArrowRight />
            </Link>
        </motion.div>
    );
};

export default TreatmentCard;
