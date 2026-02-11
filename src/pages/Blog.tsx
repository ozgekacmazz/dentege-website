import Seo from "../components/Seo";

const posts = [
    {
        title: "Diş Taşı Temizliği (Detartraj) Nedir?",
        date: "2026-02-11",
        excerpt:
            "Diş taşı neden oluşur, temizliği acıtır mı, işlem ne kadar sürer? Merak edilenleri net şekilde anlattık.",
        tags: ["Ağız Sağlığı", "Diş Taşı"],
    },
    {
        title: "İmplant Tedavisi Kimlere Uygulanır?",
        date: "2026-02-11",
        excerpt:
            "İmplant için uygunluk kriterleri, iyileşme süreci ve sık sorulan sorular bu yazıda.",
        tags: ["İmplant", "Tedaviler"],
    },
    {
        title: "Zirkonyum Kaplama mı Porselen mi?",
        date: "2026-02-11",
        excerpt:
            "Estetik, dayanıklılık ve kullanım alanlarına göre zirkonyum/porselen karşılaştırması.",
        tags: ["Kaplama", "Estetik"],
    },
];

export default function Blog() {
    return (
        <>
            <Seo
                title="Blog | DentEge"
                description="DentEge blog: ağız ve diş sağlığı, tedaviler ve sık sorulan sorular hakkında bilgilendirici içerikler."
                canonical="https://dentege.com.tr/blog"
            />

            <main className="mx-auto max-w-6xl px-4 py-10">
                <h1 className="text-3xl font-semibold tracking-tight">Blog</h1>
                <p className="mt-2 text-gray-600">
                    Ağız ve diş sağlığı hakkında kısa ve faydalı bilgiler.
                </p>

                <div className="mt-8 grid gap-6 md:grid-cols-2">
                    {posts.map((p) => (
                        <article
                            key={p.title}
                            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
                        >
                            <div className="text-sm text-gray-500">{p.date}</div>
                            <h2 className="mt-2 text-xl font-semibold">{p.title}</h2>
                            <p className="mt-2 text-gray-700">{p.excerpt}</p>

                            <div className="mt-4 flex flex-wrap gap-2">
                                {p.tags.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700"
                                    >
                    {t}
                  </span>
                                ))}
                            </div>

                            <div className="mt-5 text-sm text-gray-500">
                                Yakında: yazı detay sayfaları (slug) ✅
                            </div>
                        </article>
                    ))}
                </div>
            </main>
        </>
    );
}
