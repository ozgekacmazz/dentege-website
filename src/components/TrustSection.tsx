import "../styles/TrustSection.css";

const TrustSection = () => {
    const GOOGLE_REVIEWS_URL =
        "https://www.google.com/search?sca_esv=b1aa0ebf47929ca9&rlz=1C1GCEU_trTR1079TR1079&sxsrf=ANbL-n7gKk9Mk-2MHCqtU-8-a_R7K7wCIA:1770825756641&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOVENMaKNVbQ_FOCY3h2RqMWh039srMK6Dwhj5Q78qiDDzTowxYzk4ey8lDUlBGE8LB4YslzBmboDnTHTErjEjE8w_YfSIyq7jeNu4VotlWy6O48c6SRrmlfgFPN7SR2nc5isSdUDttAupSe1XmSjYjt7vBB2&q=DENT+EGE+A%C4%9EIZ+VE+D%C4%B0%C5%9E+SA%C4%9ELI%C4%9EI+POL%C4%B0KL%C4%B0N%C4%B0%C4%9E%C4%B0+Yorumlar&sa=X&ved=2ahUKEwjH3buB6NGSAxXKBNsEHRLBGNwQ0bkNegQIRhAH&biw=840&bih=777&dpr=1.15";

    return (
        <section className="trust-section">
            <div className="container">
                <div className="reviews-clean">
                    <div className="reviews-left">
                        <h3>Google Yorumları</h3>
                        <div className="reviews-score">
                            <div className="stars" aria-label="5 yıldız">★★★★★</div>
                            <span className="reviews-note">
                Tüm yorumlarımızı Google üzerinden görüntüleyebilirsiniz.
              </span>
                        </div>
                    </div>

                    <div className="reviews-right">
                        <a
                            className="reviews-btn"
                            href={GOOGLE_REVIEWS_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Google’da Yorumları Gör
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustSection;
