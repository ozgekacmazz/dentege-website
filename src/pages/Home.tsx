import Hero from '../components/Hero';
import ClinicIntro from '../components/ClinicIntro';
import TreatmentCard from '../components/TreatmentCard';
import DoctorsSection from '../components/DoctorsSection';
import Seo from '../components/Seo';
import { FaTooth, FaGem, FaMagic, FaChild, FaTeeth, FaSmile } from 'react-icons/fa';

const Home = () => {
    const treatments = [
        {
            title: "İmplant Tedavisi",
            desc: "Eksik dişlerinizi, çene yapınıza uygun planlanan titanyum implantlarla doğal diş görünümüne en yakın şekilde tamamlıyoruz.",
            icon: <FaTooth />,
            link: "/tedaviler#implant"
        },
        {
            title: "Gülüş Tasarımı",
            desc: "Yüz hatlarınız, dudak formunuz ve diş etiniz birlikte değerlendirilerek size özel estetik gülüş tasarlıyoruz.",
            icon: <FaSmile />,
            link: "/tedaviler#gulus-tasarimi"
        },
        {
            title: "Zirkonyum Kaplama",
            desc: "Yüksek ışık geçirgenliğine sahip zirkonyum kaplamalar ile hem sağlam hem de doğal görünümlü dişler elde etmenize yardımcı oluyoruz.",
            icon: <FaGem />,
            link: "/tedaviler#zirkonyum"
        },
        {
            title: "Diş Beyazlatma",
            desc: "Klinik ortamında kontrollü olarak uyguladığımız beyazlatma işlemleriyle dişlerinizin tonunu güvenle açıyoruz.",
            icon: <FaMagic />,
            link: "/tedaviler#beyazlatma"
        },
        {
            title: "Ortodontik Tedavi",
            desc: "Çapraşık ve ayrık dişlerin, tel veya şeffaf plak tedavileriyle daha estetik ve sağlıklı bir hizalanmaya kavuşmasını sağlıyoruz.",
            icon: <FaTeeth />,
            link: "/tedaviler#ortodonti"
        },
        {
            title: "Çocuk Diş Hekimliği",
            desc: "0–13 yaş arası çocuklarımız için, onların dilinden anlayan ve korkuyu en aza indiren pedodonti hizmetleri sunuyoruz.",
            icon: <FaChild />,
            link: "/tedaviler#pedodonti"
        }
    ];

    return (
        <>
            <Seo
                title="Dent Ege Diş Kliniği | Manisa Yunusemre Diş Hekimi ve Diş Tedavileri"
                description="Manisa Yunusemre'de implant, diş beyazlatma, zirkonyum kaplama, gülüş tasarımı, ortodonti ve çocuk diş hekimliği için Dent Ege Diş Kliniği'nden randevu alabilirsiniz."
            />

            <Hero />
            <ClinicIntro />

            <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tedavilerimiz</h2>
                        <p style={{ color: '#64748b', maxWidth: '600px', margin: '0 auto' }}>
                            Modern diş hekimliğinin tüm imkanlarını kullanarak, ağız ve diş sağlığınız için geniş kapsamlı hizmetler sunuyoruz.
                        </p>
                    </div>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}>
                        {treatments.map((t, index) => (
                            <TreatmentCard
                                key={index}
                                title={t.title}
                                description={t.desc}
                                icon={t.icon}
                                link={t.link}
                                delay={index * 0.1}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/*  Yeni: Hekimlerimiz Bölümü */}
            <DoctorsSection />
        </>
    );
};

export default Home;
