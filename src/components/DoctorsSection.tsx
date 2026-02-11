import ozanImg from "../assets/WhatsApp Image 2026-02-04 at 09.26.05.jpeg";
import mehmetEminImg from "../assets/WhatsApp Image 2026-02-04 at 09.26.19.jpeg";
import mehmetKarakilincImg from "../assets/WhatsApp Image 2026-02-04 at 09.26.32.jpeg";
import "../styles/DoctorsSection.css";

const DoctorsSection = () => {
    const doctors = [
        {
            name: "Ozan Kaçmaz",
            title: "Diş Hekimi",
            img: ozanImg,
            alt: "Diş Hekimi Ozan Kaçmaz - Dent Ege Diş Kliniği Manisa",
        },
        {
            name: "Mehmet Emin Silkîn",
            title: "Diş Hekimi",
            img: mehmetEminImg,
            alt: "Diş Hekimi Mehmet Emin Silkîn - Dent Ege Diş Kliniği Manisa",
        },
        {
            name: "Mehmet Karakılınç",
            title: "Diş Hekimi",
            img: mehmetKarakilincImg,
            alt: "Diş Hekimi Mehmet Karakılınç - Dent Ege Diş Kliniği Manisa",
        },
    ];

    return (
        <section className="doctors-section">
            <div className="container">
                <div className="doctors-head">
                    <h2>Hekimlerimiz</h2>
                    <p>
                        Uzman kadromuz ve modern yaklaşımımızla ağız ve diş sağlığınız için
                        güvenle yanınızdayız.
                    </p>
                </div>

                <div className="doctors-grid">
                    {doctors.map((d) => (
                        <div className="doctor-card" key={d.name}>
                            <div className="doctor-img-wrap">
                                <img src={d.img} alt={d.alt} loading="lazy" />
                            </div>
                            <h3>{d.name}</h3>
                            <p>{d.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DoctorsSection;
