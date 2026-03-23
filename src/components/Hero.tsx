import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={styles.hero} id="hero">
            <div className={styles.bgOverlay} />
            <div className={styles.particles}>
                {[...Array(6)].map((_, i) => (
                    <div key={i} className={styles.particle} style={{ animationDelay: `${i * 0.8}s` }} />
                ))}
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.badge}>
                    <span className={styles.badgeCross}>☦</span>
                    <span>Українська Греко-Католицька Церква</span>
                </div>

                <h1 className={styles.title}>
                    Будуємо храм —
                    <br />
                    <span className={styles.titleAccent}>Відроджуємо душу</span>
                </h1>

                <p className={styles.subtitle}>
                    Приєднайтеся до творення духовної спадщини. Кожна цеглина — це ваша інвестиція у вічність та майбутнє нашої громади.
                </p>

                <div className={styles.actions}>
                    <a href="#patronage" className="btn-gold">
                        Стати меценатом
                    </a>
                    <a href="#about" className="btn-outline" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff' }}>
                        Про проект
                    </a>
                </div>

                <div className={styles.scrollIndicator}>
                    <div className={styles.scrollLine} />
                </div>
            </div>
        </section>
    );
}
