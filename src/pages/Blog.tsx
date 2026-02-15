import { Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import Seo from "../components/Seo";
import "../styles/Blog.css";

const Blog = () => {
    return (
        <section className="blog-page container">
            <Seo
                title="Blog | DentEge"
                description="Ağız ve diş sağlığı hakkında kısa ve faydalı bilgiler, ipuçları ve merak edilenler."
                canonical="/blog"
                ogType="website"
            />

            <h1 className="blog-title">Blog</h1>
            <p className="blog-subtitle">
                Ağız ve diş sağlığı hakkında kısa ve faydalı bilgiler.
            </p>

            <div className="blog-grid">
                {blogPosts.map((post) => (
                    <div key={post.slug} className="blog-card">
            <span className="blog-date">
              {new Date(post.date).toLocaleDateString("tr-TR", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
              })}
            </span>

                        <h2>{post.title}</h2>
                        <p>{post.excerpt}</p>

                        <div className="blog-tags">
                            {post.tags.map((tag) => (
                                <span key={tag}>{tag}</span>
                            ))}
                        </div>

                        <Link to={`/blog/${post.slug}`} className="blog-read-more">
                            Yazıyı Oku →
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Blog;
