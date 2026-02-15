import React from "react";
import { Link } from "react-router-dom";

export type BlogPost = {
    slug: string;
    title: string;
    date: string; // YYYY-MM-DD
    excerpt: string;
    tags: string[];
    content: (string | React.ReactNode)[];
    metaDescription: string;
};

export const blogPosts: BlogPost[] = [
        {
            slug: "dis-tasi-temizligi-detartraj-nedir",
            title: "Diş Taşı Temizliği (Detartraj) Nedir?",
            date: "2026-02-11",
            excerpt: "Diş taşı neden oluşur, temizliği acıtır mı, işlem ne kadar sürer?",
            tags: ["Ağız Sağlığı", "Diş Taşı"],
            metaDescription:
                "Detartraj nedir, diş taşı nasıl oluşur, işlem acıtır mı ve ne kadar sürer? Kısa ve net bilgiler.",
            content: [
                <>
                    Diş taşı (tartar), plakların zamanla mineralize olmasıyla oluşan sert
                birikintidir. Diş eti çizgisinde ve diş aralarında sık görülür. Diş eti
                kanaması ve ağız kokusu gibi şikayetlerde sık karşılaşılır. Estetik
                işlemlerle ilgili merak ettiklerin için{" "}
                <Link to="/blog/dis-beyazlatma-zararli-mi">diş beyazlatma</Link>{" "}
                yazımıza da göz atabilirsin.
                </>,
                <>
                Detartraj, bu birikintilerin ultrasonik cihazlar ve el aletleriyle
                temizlenmesidir. Çoğu hastada işlem ağrısızdır; hassasiyeti olanlarda
            kısa süreli sızlama olabilir. Daha kapsamlı tedavi seçenekleri için{" "}
        <Link to="/tedaviler">tedaviler</Link> sayfamızı inceleyebilirsin.
            </>,
            <>
            İşlem süresi ağızdaki birikime göre değişir. Ardından gerekirse polisaj
        (parlatma) yapılır ve ağız hijyeni önerileri verilir. Randevu almak için{" "}
        <Link to="/randevu">online randevu</Link> oluşturabilir veya{" "}
        <Link to="/iletisim">iletişime</Link> geçebilirsin.
            </>,
    ],
    },

    {
        slug: "implant-tedavisi-kimlere-uygulanir",
        title: "İmplant Tedavisi Kimlere Uygulanır?",
        date: "2026-02-11",
        excerpt: "İmplant için uygunluk kriterleri, iyileşme süreci ve sık sorulanlar.",
        tags: ["İmplant", "Tedaviler"],
        metaDescription:
        "İmplant kimlere yapılır? Kemik durumu, genel sağlık, iyileşme süreci ve sık sorulan soruların özeti.",
        content: [
            <>
            Dental implant, eksik dişin kökü yerine geçen titanyum bir yapıdır.
            Üstüne porselen/zirconyum gibi restorasyonlar yapılır. Kaplama
            alternatifleri için{" "}
            <Link to="/blog/zirkonyum-kaplama-mi-porselen-mi">
                zirkonyum mu porselen mi
            </Link>{" "}
            yazımızı da okuyabilirsin.
            </>,
            <>
            Uygunluk; kemik miktarı, diş eti sağlığı ve genel sağlık durumuna göre
            değerlendirilir. Gerekirse kemik grefti gibi destek işlemler planlanabilir.
            Klinik yaklaşım için{" "}
            <Link to="/hakkimizda">hakkımızda</Link> sayfamıza göz atabilirsin.
                </>,
                <>
                Planlama için muayene ve radyografik değerlendirme önemlidir. Süreç kişiye
            özel planlanır. Randevu için{" "}
            <Link to="/randevu">buradan</Link> başvurabilirsin.
                </>,
        ],
    },

    {
        slug: "zirkonyum-kaplama-mi-porselen-mi",
        title: "Zirkonyum Kaplama mı Porselen mi?",
        date: "2026-02-11",
        excerpt: "Estetik, dayanıklılık ve kullanım alanlarına göre karşılaştırma.",
        tags: ["Kaplama", "Estetik"],
        metaDescription:
        "Zirkonyum mu porselen mi? Estetik, dayanıklılık, renk uyumu ve hangi durumlarda hangisi tercih edilir.",
        content: [
            <>
            Zirkonyum, altyapısı beyaz olduğu için estetik açıdan avantajlıdır ve doğal
            görünüme yakındır. Daha estetik çözümler için{" "}
            <Link to="/blog/dis-beyazlatma-zararli-mi">diş beyazlatma</Link>{" "}
            yazımıza da bakabilirsin.
            </>,
            <>
            Porselen (metal destekli) bazı vakalarda uygun ve ekonomik bir seçenek
            olabilir; ancak metal yansıması estetiği etkileyebilir. Gülüş tasarımı
            hakkında okumak istersen{" "}
            <Link to="/blog/kanal-tedavisi-nedir-aci-tir-mi">kanal tedavisi</Link>{" "}
            değil  (bunu sonra gülüş tasarımı yazısı ekleyince ona bağlarız).
            </>,
            <>
            Hangi seçeneğin uygun olduğu; diş konumu, diş eti seviyesi, estetik
            beklenti ve bütçeye göre değerlendirilir. Detaylı hizmetler için{" "}
            <Link to="/tedaviler">tedaviler</Link> sayfasını incele.
                </>,
        ],
    },

    {
        slug: "dis-beyazlatma-zararli-mi",
        title: "Diş Beyazlatma Zararlı mı?",
        date: "2026-02-11",
        excerpt: "Beyazlatma güvenli mi, kimlere uygulanır ve etkisi ne kadar sürer?",
        tags: ["Beyazlatma", "Estetik"],
        metaDescription:
        "Diş beyazlatma zararlı mı? Kimlere uygulanır, hassasiyet olur mu ve etki süresi ne kadar?",
        content: [
            <>
            Hekim kontrolünde yapılan beyazlatma işlemleri genellikle güvenlidir.
            Uygun konsantrasyon ve doğru uygulama önemlidir. Diş eti sağlığı ve temizlik
            için{" "}
            <Link to="/blog/dis-tasi-temizligi-detartraj-nedir">
                diş taşı temizliği
            </Link>{" "}
            yazımızı da öneririm.
            </>,
            <>
            Geçici hassasiyet görülebilir. Bu durum çoğu kişide birkaç gün içinde azalır.
            </>,
            <>
            Kalıcı sonuç; beslenme alışkanlıkları, sigara ve ağız hijyenine göre değişir.
            Daha kapsamlı estetik seçenekler için{" "}
            <Link to="/tedaviler">tedaviler</Link> sayfamıza bakabilirsin.
                </>,
        ],
    },

    {
        slug: "kanal-tedavisi-nedir-aci-tir-mi",
        title: "Kanal Tedavisi Nedir, Acıtır mı?",
        date: "2026-02-11",
        excerpt: "Kanal tedavisi ne zaman gerekir, işlem ağrılı mı, kaç seansta biter?",
        tags: ["Kanal Tedavisi"],
        metaDescription:
        "Kanal tedavisi nedir, ne zaman gerekir ve acıtır mı? Süreç, seans sayısı ve sonrası hakkında net bilgi.",
        content: [
            <>
            Kanal tedavisi, dişin içindeki sinir-damar dokusunun (pulpa) enfekte olduğu
            durumlarda uygulanır. Amaç enfeksiyonu temizleyip dişi ağızda tutmaktır.
            </>,
            <>
            İşlem lokal anestezi ile yapılır; bu yüzden işlem sırasında ağrı beklenmez.
            Sonrasında 1–2 gün hassasiyet olabilir.
            </>,
            <>
            Seans sayısı dişin durumuna göre değişir. Bazı vakalarda tek seansta
            tamamlanabilir, bazı vakalarda ek seans gerekebilir. Randevu almak için{" "}
            <Link to="/randevu">buraya</Link> tıkla.
                </>,
        ],
    },

    {
        slug: "cocuklarda-dis-sagligi",
        title: "Çocuklarda Diş Sağlığı",
        date: "2026-02-11",
        excerpt: "İlk muayene ne zaman? Çürükten korunma ve günlük bakım önerileri.",
        tags: ["Pedodonti", "Çocuk Diş"],
        metaDescription:
        "Çocuklarda diş sağlığı: ilk muayene zamanı, çürükten korunma, fırçalama rutini ve öneriler.",
        content: [
            <>
            İlk diş hekimi kontrolü, ilk diş çıktıktan sonra veya 1 yaş civarında
            planlanabilir.
            </>,
            <>
            Şekerli gıdaların sıklığı çürük riskini artırır. Düzenli fırçalama ve hekim
            önerisiyle flor uygulamaları faydalı olabilir.
            </>,
            <>
            Süt dişleri önemlidir; çiğneme, konuşma ve yer tutuculuk açısından takip
            edilmelidir. İletişim için{" "}
            <Link to="/iletisim">bize ulaşın</Link>.
            </>,
        ],
    },
    ];
