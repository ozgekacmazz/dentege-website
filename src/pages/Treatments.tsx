import TreatmentCard from "../components/TreatmentCard";
import Seo from "../components/Seo";
import digitalMeasureImg from "../assets/image.png";
import {
    FaTooth,
    FaGem,
    FaMagic,
    FaLayerGroup,
    FaImage,
    FaUserMd,
    FaHeartbeat,
    FaChild,
    FaSmile,
    FaMedkit,
} from "react-icons/fa";

const Treatments = () => {
    const allTreatments = [
        {
            id: "implant",
            title: "İmplant Tedavisi",
            desc: "Kaybedilen dişlerin yerine, çene kemiğine yerleştirilen titanyum implantlar sayesinde sabit ve doğal görünümlü dişler elde edilir. Doğru planlanan implant tedavisi, çiğneme konforunu ve gülüş estetiğini uzun yıllar korumaya yardımcı olur.",
            icon: <FaTooth />,
        },
        {
            id: "zirkonyum",
            title: "Zirkonyum Kaplama",
            desc: "Zirkonyum kaplamalar, ışık geçirgenliği sayesinde doğal diş görünümüne çok yakın, metal desteksiz estetik kaplamalardır. Özellikle ön bölge dişlerde hem dayanıklılık hem de estetik beklentisi olan hastalar için tercih edilir.",
            icon: <FaGem />,
        },
        {
            id: "gulus-tasarimi",
            title: "Gülüş Tasarımı",
            desc: "Gülüş tasarımı; dişlerin şekli, rengi, dizilimi ile dudak ve diş etinin uyumunu birlikte değerlendirerek size en çok yakışan estetik gülüşün planlanmasıdır. Amaç, hem doğal görünen hem de yüzünüzle uyumlu bir sonuç elde etmektir.",
            icon: <FaSmile />,
        },
        {
            id: "beyazlatma",
            title: "Diş Beyazlatma",
            desc: "Diş beyazlatma, dişlerin yapısına zarar vermeden, kontrollü ajanlar kullanılarak birkaç ton daha açık ve daha aydınlık bir diş rengine ulaşmayı hedefleyen bir işlemdir. Çay, kahve ve sigara lekelerinin görünümünü azaltmaya yardımcı olur.",
            icon: <FaMagic />,
        },
        {
            id: "laminate",
            title: "Laminate Veneer",
            desc: "Laminate veneer (yaprak porselen), dişlerin yalnızca ön yüzeyine minimum aşındırma ile uygulanan ince porselen tabakalardır. Renklenmiş, aralıklı veya şekil bozukluğu olan dişlerde estetik bir gülüş elde etmek için sıkça tercih edilir.",
            icon: <FaLayerGroup />,
        },
        {
            id: "kanal",
            title: "Kanal Tedavisi",
            desc: "Kanal tedavisi, derin çürük veya travma nedeniyle enfekte olan diş sinirinin temizlenip kanalların doldurulması işlemidir. Amaç, dişi çekmeden ağızda tutmak ve çiğneme fonksiyonunu korumaktır.",
            icon: <FaMedkit />,
        },
        {
            id: "ortodonti",
            title: "Ortodontik Tedavi",
            desc: "Ortodontik tedavi, çapraşık veya aralıklı dişlerin tel tedavisi ya da şeffaf plaklar ile daha estetik ve fonksiyonel bir dizilime getirilmesini sağlar. Hem çocuklarda hem erişkinlerde uygulanabilen uzun vadeli bir tedavidir.",
            icon: <FaTooth />,
        },
        {
            id: "pedodonti",
            title: "Çocuk Diş Hekimliği",
            desc: "Çocuk diş hekimliği (pedodonti), 0–13 yaş arası çocukların süt ve daimi dişlerinin sağlıklı gelişimini takip eder. Çürük tedavileri, fissür örtücü ve flor uygulamaları gibi koruyucu işlemlerle çocukları diş hekimi korkusu oluşturmadan tedavi etmeyi amaçlar.",
            icon: <FaChild />,
        },
        {
            id: "dis-eti",
            title: "Diş Eti Tedavisi (Periodontoloji)",
            desc: "Diş eti tedavisi, diş etlerinde kanama, kızarıklık, şişlik ve çekilme gibi sorunların giderilmesine yönelik işlemleri kapsar. Erken dönemde yapılan periodontolojik tedaviler, diş kayıplarının önüne geçmeye yardımcı olur.",
            icon: <FaHeartbeat />,
        },
        {
            id: "cerrahi",
            title: "Cerrahi İşlemler",
            desc: "Ağız, diş ve çene cerrahisi kapsamında; gömülü diş çekimi, kist operasyonları ve diğer cerrahi müdahaleler, steril ameliyathane koşullarına uygun şekilde planlanır. Amaç, dokulara en az travmayla sağlıklı iyileşme sağlamaktır.",
            icon: <FaUserMd />,
        },
        {
            id: "rontgen",
            title: "Panoramik Çene Röntgeni",
            desc: "Panoramik çene röntgeni, tüm dişler ve çene kemiklerinin tek bir film üzerinde değerlendirilmesine imkân tanır. Tedavi planlaması ve olası problemleri erken teşhis etmek için güvenilir bir görüntüleme yöntemidir.",
            icon: <FaImage />,
        },
    ];

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
            {
                "@type": "Question",
                name: "İmplant tedavisi ağrılı mıdır?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "İmplant uygulaması lokal anestezi altında yapılır, bu nedenle işlem sırasında ağrı hissetmeniz beklenmez. Sonrasında oluşabilecek hafif hassasiyetler ise hekiminizin önereceği ağrı kesicilerle genellikle kısa sürede kontrol altına alınır.",
                },
            },
            {
                "@type": "Question",
                name: "Diş beyazlatma dişlerime zarar verir mi?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Uzman diş hekimi kontrolünde ve uygun dozlarda yapılan profesyonel beyazlatma işlemi diş minesine zarar vermez. İşlem sonrası oluşan geçici hassasiyet, kısa sürelidir ve koruyucu ürünlerle azaltılabilir.",
                },
            },
            {
                "@type": "Question",
                name: "Ortodontik tedavi için geç kalmış olabilir miyim?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ortodontik tedavi sadece çocuklara özel değildir; diş ve diş eti sağlığı uygun olan her yaştaki bireyde uygulanabilir. Erişkin hastalar için de tel tedavisi veya şeffaf plaklarla estetik ve fonksiyonel sonuçlar elde edilebilir.",
                },
            },
            {
                "@type": "Question",
                name: "Çocuğumu ilk ne zaman diş hekimine götürmeliyim?",
                acceptedAnswer: {
                    "@type": "Answer",
                    text: "İlk süt dişinin sürmesinden itibaren, en geç 1 yaş civarında çocukların diş hekimi kontrolüne getirilmesi önerilir. Erken dönemde yapılan kontroller, hem çürüklerin önüne geçmeye hem de çocukların diş hekimine alışmasına yardımcı olur.",
                },
            },
        ],
    };

    return (
        <div className="section-padding" style={{ backgroundColor: "#f9fafb" }}>
            <div className="container">
                <Seo
                    title="Diş Tedavileri | İmplant, Zirkonyum, Gülüş Tasarımı – Dent Ege Diş Kliniği Manisa"
                    description="Dent Ege Diş Kliniği'nde implant tedavisi, zirkonyum kaplama, diş beyazlatma, gülüş tasarımı, ortodonti, çocuk diş hekimliği ve diş eti tedavileri hakkında detaylı bilgi alın."
                    canonical="/tedaviler"
                    ogType="website"
                    jsonLd={faqSchema}
                />

                <div style={{ textAlign: "center", marginBottom: "4rem" }}>
                    <h1>Tedavilerimiz</h1>
                    <p style={{ maxWidth: "700px", margin: "0 auto", color: "var(--color-text-light)" }}>
                        Özel Dent Ege olarak, ağız ve diş sağlığınızın her alanında, uzman hekimlerimiz ve modern ekipmanlarımızla hizmet veriyoruz.
                    </p>
                </div>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                        gap: "2rem",
                    }}
                >
                    {allTreatments.map((t, index) => (
                        <div id={t.id} key={t.id}>
                            <TreatmentCard
                                title={t.title}
                                description={t.desc}
                                icon={t.icon}
                                link={`/randevu?treatment=${t.id}`}
                                delay={index * 0.05}
                            />
                        </div>
                    ))}
                </div>

                {/* Dijital Ölçü Teknolojisi */}
                <section style={{ marginTop: "4rem" }}>
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                            gap: "2rem",
                            alignItems: "center",
                        }}
                    >
                        <div>
                            <h2 style={{ marginBottom: "1rem", color: "var(--color-primary-dark)" }}>
                                Dijital Ölçü Teknolojisi (3Shape)
                            </h2>
                            <p style={{ color: "var(--color-text-light)", marginBottom: "0.75rem" }}>
                                Protetik diş tedavisinde (porselen, zirkonyum, laminate veneer vb.) artık klasik manuel ölçüler yerine tamamen bilgisayar ve yapay zeka destekli dijital ölçü alıyoruz.
                            </p>
                            <p style={{ color: "var(--color-text-light)" }}>
                                Dijital ölçü sayesinde sapma oranlarını ve tekrar ölçü alma ihtiyacını en aza indirirken, tedavi sürecini de kısaltmış oluyoruz. Bu süreci, dijital ölçü alanında dünya çapında lider kabul edilen <strong>3Shape</strong> teknolojisi ile gerçekleştiriyoruz.
                            </p>
                        </div>

                        <div
                            style={{
                                borderRadius: "var(--radius-lg)",
                                overflow: "hidden",
                                boxShadow: "var(--shadow-md)",
                            }}
                        >
                            <img
                                src={digitalMeasureImg}
                                alt="Dent Ege Diş Kliniği'nde 3Shape dijital ölçü sistemi ve tarayıcı"
                                style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                            />
                        </div>
                    </div>
                </section>

                {/* Sık Sorulan Sorular */}
                <section style={{ marginTop: "4rem" }}>
                    <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>Sık Sorulan Sorular</h2>

                    <div
                        style={{
                            maxWidth: "800px",
                            margin: "0 auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "1.5rem",
                        }}
                    >
                        <div
                            style={{
                                backgroundColor: "var(--color-white)",
                                padding: "1.5rem",
                                borderRadius: "var(--radius-md)",
                                boxShadow: "var(--shadow-sm)",
                            }}
                        >
                            <h3 style={{ marginBottom: "0.5rem" }}>İmplant tedavisi ağrılı mıdır?</h3>
                            <p style={{ color: "var(--color-text-light)" }}>
                                İmplant uygulaması, lokal anestezi altında yapılır ve işlem sırasında ağrı hissetmeniz beklenmez. Sonrasında oluşabilecek hafif hassasiyetler, hekiminizin önereceği ağrı kesicilerle genellikle kısa sürede kontrol altına alınır.
                            </p>
                        </div>

                        <div
                            style={{
                                backgroundColor: "var(--color-white)",
                                padding: "1.5rem",
                                borderRadius: "var(--radius-md)",
                                boxShadow: "var(--shadow-sm)",
                            }}
                        >
                            <h3 style={{ marginBottom: "0.5rem" }}>Diş beyazlatma dişlerime zarar verir mi?</h3>
                            <p style={{ color: "var(--color-text-light)" }}>
                                Uzman diş hekimi kontrolünde ve uygun dozlarda yapılan profesyonel beyazlatma işlemi, diş minesine zarar vermez. İşlem sonrası geçici hassasiyet görülebilir, bu durum genelde kısa sürelidir ve koruyucu ürünlerle desteklenir.
                            </p>
                        </div>

                        <div
                            style={{
                                backgroundColor: "var(--color-white)",
                                padding: "1.5rem",
                                borderRadius: "var(--radius-md)",
                                boxShadow: "var(--shadow-sm)",
                            }}
                        >
                            <h3 style={{ marginBottom: "0.5rem" }}>Ortodontik tedavi için geç kalmış olabilir miyim?</h3>
                            <p style={{ color: "var(--color-text-light)" }}>
                                Ortodontik tedavi sadece çocuklara özel değildir; diş ve diş eti sağlığı uygun olan her yaştaki bireyde uygulanabilir. Erişkin hastalar için de tel tedavisi veya şeffaf plak seçenekleri ile estetik ve fonksiyonel sonuçlar almak mümkündür.
                            </p>
                        </div>

                        <div
                            style={{
                                backgroundColor: "var(--color-white)",
                                padding: "1.5rem",
                                borderRadius: "var(--radius-md)",
                                boxShadow: "var(--shadow-sm)",
                            }}
                        >
                            <h3 style={{ marginBottom: "0.5rem" }}>Çocuğumu ilk ne zaman diş hekimine götürmeliyim?</h3>
                            <p style={{ color: "var(--color-text-light)" }}>
                                İlk süt dişinin sürmesinden itibaren, en geç 1 yaş civarında çocukların diş hekimi kontrolüne getirilmesi önerilir. Erken dönemde yapılan kontroller, hem çürüklerin önüne geçmeye hem de çocukların diş hekimine alışmasına yardımcı olur.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Treatments;
