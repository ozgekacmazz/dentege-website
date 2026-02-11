import Seo from '../components/Seo';

const Blog = () => {
    return (
        <div className="section-padding" style={{ backgroundColor: '#f9fafb' }}>
            <div className="container">
                <Seo
                    title="Blog | Dent Ege Diş Kliniği Manisa Yunusemre"
                    description="Dent Ege Diş Kliniği blog yazılarıyla implant tedavisi, çocuklarda diş sağlığı ve doğru ağız bakımı hakkında pratik ve anlaşılır bilgiler edinin."
                />

                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h1>Blog</h1>
                    <p style={{ maxWidth: '720px', margin: '0 auto', color: 'var(--color-text-light)' }}>
                        Manisa Yunusemre&apos;deki Dent Ege Diş Kliniği olarak, tedavi öncesi ve sonrası aklınıza gelebilecek
                        sorulara yanıt vermek ve ağız-diş sağlığı konusunda sizi bilgilendirmek için bu sayfayı hazırladık.
                    </p>
                </div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    {/* İmplant Sonrası Bakım */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            İmplant Sonrası Nelere Dikkat Etmeliyim?
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            İmplant uygulamasından sonraki ilk 24 saat, iyileşmenin en kritik dönemidir. Bu süreçte
                            sigara ve alkol tüketmemek, sıcak yiyecek ve içeceklerden kaçınmak önemlidir. İlk gün
                            mümkün olduğunca operasyon bölgesiyle çiğneme yapmamanız, bölgeyi zorlamamanız gerekir.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Hekiminizin önerdiği ağrı kesici ve antibiyotikleri düzenli kullanmak, hem ağrı kontrolü
                            hem de enfeksiyon riskini azaltmak için gereklidir. Hafif şişlik ve morluklar normal
                            kabul edilir; bu dönemde buz uygulaması şikâyetleri azaltmaya yardımcı olur.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            İyileşme tamamlandıktan sonra implantın uzun ömürlü olması için düzenli fırçalama,
                            diş ipi ve arayüz fırçası kullanımı çok önemlidir. Kontrollerinizi aksatmamanız,
                            implantlarınızın yıllarca sağlıklı kalmasına katkı sağlar.
                        </p>
                    </article>

                    {/* Çocuklarda ilk muayene */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            Çocuklarda İlk Diş Hekimi Kontrolü Ne Zaman Olmalı?
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Çocukların ilk diş hekimi muayenesinin, ilk süt dişi sürdükten sonra ve en geç 1 yaş
                            civarında yapılması önerilir. Bu erken kontrol, hem dişlerin sağlıklı gelişimini takip
                            etmeye hem de çürük oluşmadan önlem almaya imkân tanır.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            İlk ziyaretin amacı çoğu zaman tedavi değil, çocukların diş hekimi ortamını tanıması ve
                            korku geliştirmemesidir. Bu nedenle randevuların sakin bir zamanda planlanması ve ailenin
                            çocuğa olumlu bir dille yaklaşması önemlidir.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Düzenli kontrollerle birlikte yapılan fissür örtücü ve flor uygulamaları, süt ve daimi
                            dişlerde çürük riskini azaltmaya yardımcı olur. Böylece çocuklar, yetişkinlik dönemine
                            daha sağlıklı bir ağız ve diş yapısıyla geçebilir.
                        </p>
                    </article>

                    {/* Doğru ağız bakımı + SSS mini özet */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            Doğru Ağız Bakımı ve Sık Sorulan Sorular
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Günde en az iki kez, yumuşak kıllı bir fırçayla ve uygun teknikle diş fırçalamak; diş aralarını
                            ise diş ipi veya arayüz fırçası ile temizlemek sağlıklı bir ağız bakımı için temel adımdır.
                            Asitli içecekleri ve sık atıştırmayı azaltmak, diş minesini korumaya yardımcı olur.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Sık sorulan sorulardan bazıları şunlardır: “Diş beyazlatma zararlı mı?”, “Ortodontik tedavi
                            için geç kaldım mı?” veya “Diş taşları mutlaka temizlenmeli mi?”. Bu soruların ortak
                            cevabı; doğru planlanmış profesyonel işlemlerin, düzenli kontrollerle birlikte ağız ve diş
                            sağlığını korumaya yardımcı olduğudur.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Size en uygun ağız bakım ürünleri ve tedavi seçenekleri için, Manisa Yunusemre&apos;deki Dent Ege
                            Diş Kliniği&apos;nde yapılacak kısa bir muayene çoğu sorununuzu netleştirecektir. Dilerseniz
                            sorularınızı telefon veya WhatsApp hattımız üzerinden de iletebilirsiniz.
                        </p>
                    </article>

                    {/* Zirkonyum ve estetik dolgular */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            Zirkonyum Kaplama mı, Porselen mi?
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Zirkonyum kaplamalar, metal destekli porselenlere göre daha yüksek ışık geçirgenliğine sahiptir
                            ve bu sayede doğal diş görünümüne daha çok yaklaşır. Özellikle ön diş bölgesinde estetik
                            beklentisi yüksek olan hastalarda sıkça tercih edilir.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Hangi kaplama türünün sizin için daha uygun olduğuna; diş yapınız, kapanışınız, estetik
                            beklentiniz ve ağız alışkanlıklarınız birlikte değerlendirilerek karar verilir. Muayene sırasında
                            hekimimiz tüm seçenekleri artıları ve eksileriyle size açıklayacaktır.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Hem estetik hem de dayanıklılık açısından doğru malzemenin seçilmesi, uzun vadede daha konforlu
                            bir kullanım sağlar. Bu nedenle internetten okunan genel bilgiler yerine, kişiye özel bir
                            değerlendirme yapılması en sağlıklı yaklaşımdır.
                        </p>
                    </article>

                    {/* Diş sıkma / gece plağı */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            Diş Sıkma (Bruksizm) ve Gece Plağı Kullanımı
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Gündüz fark edilmeden, gece ise çoğu zaman uyku sırasında ortaya çıkan diş sıkma ve gıcırdatma
                            şikâyetleri; çene ekleminde ağrı, baş-boyun bölgesinde gerginlik ve dişlerde aşınmaya yol açabilir.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Kişiye özel hazırlanan gece plakları, üst ve alt dişler arasına bariyer oluşturarak dişlerin
                            birbirine zarar vermesini engeller ve çene eklemi üzerindeki yükü azaltır. Stres yönetimi
                            ve gerektiğinde ek tedavilerle birlikte ele alınması en ideal yaklaşımdır.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Sabahları çene yorgunluğu, dişlerde hassasiyet veya baş ağrısı ile uyanıyorsanız, bir diş
                            hekimi tarafından değerlendirilmeniz faydalı olacaktır. Erken müdahale, ileride oluşabilecek
                            eklem problemlerinin önüne geçmeye yardımcı olur.
                        </p>
                    </article>

                    {/* Diş taşı temizliği ve periyodik kontroller */}
                    <article
                        style={{
                            backgroundColor: 'var(--color-white)',
                            borderRadius: 'var(--radius-lg)',
                            boxShadow: 'var(--shadow-md)',
                            padding: '1.75rem'
                        }}
                    >
                        <h2 style={{ marginBottom: '1rem', color: 'var(--color-primary-dark)', fontSize: '1.3rem' }}>
                            Diş Taşı Temizliği Ne Sıklıkla Yapılmalı?
                        </h2>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Diş taşı, fırçalama ile uzaklaştırılamayan, sertleşmiş bakteri plağıdır ve diş eti
                            hastalıklarının en önemli nedenlerinden biridir. Diş taşı temizliği, uygun frekansta
                            yapıldığında dişlere zarar vermez; tam tersine diş eti sağlığını korumaya yardımcı olur.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', marginBottom: '0.75rem' }}>
                            Genel olarak 6 ayda bir yapılacak rutin kontrol ve gerekirse diş taşı temizliği, hem diş eti
                            problemlerinin hem de çürüklerin erken dönemde fark edilmesini sağlar. Bazı hastalarda bu
                            süre, sigara kullanımı veya sistemik hastalıklar gibi nedenlerle daha sık olabilir.
                        </p>
                        <p style={{ color: 'var(--color-text-light)' }}>
                            Manisa Yunusemre&apos;deki Dent Ege Diş Kliniği&apos;nde yapılacak düzenli kontrollerle, ağız ve diş
                            sağlığınızı koruyabilir ve daha kapsamlı tedavilere ihtiyaç duymadan sağlıklı bir gülüşe
                            sahip olabilirsiniz.
                        </p>
                    </article>
                </div>
            </div>
        </div>
    );
};

export default Blog;

