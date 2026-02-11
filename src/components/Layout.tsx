import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main style={{ minHeight: '80vh', paddingTop: '0.5rem' }}>
                {children}
            </main>

            {/* Sağ altta sabit WhatsApp butonu */}
            <WhatsAppFloat />

            <Footer />
        </div>
    );
};

export default Layout;
