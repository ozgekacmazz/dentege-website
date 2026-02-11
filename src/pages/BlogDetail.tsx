import { Link, useParams } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Seo from "../components/Seo";
import "../styles/blog.css";

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString("tr-TR", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
    });

const BlogDetail = () => {
    const { slug } = useParams();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <section className="container blog-detail">
                <div className="blog-detail-card">
                    <h1>Yazı bulunamadı</h1>
                    <p>Aradığın içerik kaldırılmış olabilir.</p>
                    <Link className="blog-back" to="/blog">← Blog’a dön</Link>
                </div>
            </section>
        );
    }

    const related = blogPosts
        .filter((p) => p.slug !== post.slug)
        .filter((p) => p.tags.some((t) => post.tags.includes(t)))
        .slice(0, 3);

    return (
        <section className="container blog-detail">
            <Seo
                title={post.title}
                description={post.metaDescription}
            />

            <div className="blog-detail-top">
                <Link className="blog-back" to="/blog">← Blog</Link>
                <span className="blog-detail-date">{formatDate(post.date)}</span>
            </div>

            <article className="blog-detail-card">
                <h1 className="blog-detail-title">{post.title}</h1>

                <p className="blog-detail-excerpt">{post.excerpt}</p>

                <div className="blog-detail-tags">
                    {post.tags.map((tag) => (
                        <span key={tag} className="blog-tag">
              {tag}
            </span>
                    ))}
                </div>

                <div className="blog-detail-content">
                    {post.content.map((paragraph, idx) => (
                        <p key={idx}>{paragraph}</p>
                    ))}
                </div>
            </article>

            {related.length > 0 && (
                <div className="blog-related">
                    <h2 className="blog-related-title">Benzer Yazılar</h2>

                    <div className="blog-grid">
                        {related.map((p) => (
                            <div key={p.slug} className="blog-card">
                                <span className="blog-date">{formatDate(p.date)}</span>
                                <h2>{p.title}</h2>
                                <p>{p.excerpt}</p>

                                <div className="blog-tags">
                                    {p.tags.slice(0, 2).map((t) => (
                                        <span key={t}>{t}</span>
                                    ))}
                                </div>

                                <Link to={`/blog/${p.slug}`} className="blog-read-more">
                                    Yazıyı Oku →
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </section>
    );
};

export default BlogDetail;
