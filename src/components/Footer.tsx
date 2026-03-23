import styles from "./Footer.module.css";

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.inner}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <div className={styles.logo}>
                            <span className={styles.cross}>✦</span>
                            <div className={styles.logoText}>
                                <span className={styles.name}>Храм Різдва</span>
                                <span className={styles.sub}>Христового</span>
                            </div>
                        </div>
                        <p className={styles.tagline}>
                            Місце молитви, духовного зростання та єднання нашої громади.
                        </p>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>Навігація</h4>
                        <a href="#about" className={styles.link}>Про храм</a>
                        <a href="#schedule" className={styles.link}>Розклад богослужінь</a>
                        <a href="#donation" className={styles.link}>Пожертвування</a>
                        <a href="#contact" className={styles.link}>Контакти</a>
                    </div>

                    <div className={styles.links}>
                        <h4 className={styles.linksTitle}>Спільнота</h4>
                        <a href="#" className={styles.link}>Facebook</a>
                        <a href="#" className={styles.link}>Instagram</a>
                        <a href="#" className={styles.link}>YouTube</a>
                        <a href="#" className={styles.link}>Telegram</a>
                    </div>
                </div>

                <div className={styles.divider} />

                <div className={styles.bottom}>
                    <p className={styles.copyright}>
                        © {year} Храм Різдва Христового. Усі права захищено.
                    </p>
                    <p className={styles.quote}>
                        «Де двоє або троє зібрані в Ім&apos;я Моє, там і Я посеред них» (Мт 18:20)
                    </p>
                </div>
            </div>
        </footer>
    );
}
