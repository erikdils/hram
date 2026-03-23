import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section className={styles.contact} id="contact">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Контакти</span>
                    <h2 className="section-title">Як нас знайти</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Ми завжди раді бачити вас у нашому храмі. Завітайте до нас!
                    </p>
                </div>

                <div className={styles.grid}>
                    <div className={styles.info}>
                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📍</div>
                            <div>
                                <h4 className={styles.infoTitle}>Адреса</h4>
                                <p className={styles.infoText}>
                                    вул. Соборна, 1<br />
                                    м. Київ, Україна
                                </p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>📞</div>
                            <div>
                                <h4 className={styles.infoTitle}>Телефон</h4>
                                <p className={styles.infoText}>
                                    <a href="tel:+380441234567">+38 (044) 123-45-67</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>✉️</div>
                            <div>
                                <h4 className={styles.infoTitle}>Email</h4>
                                <p className={styles.infoText}>
                                    <a href="mailto:info@hram-rizdva.ua">info@hram-rizdva.ua</a>
                                </p>
                            </div>
                        </div>

                        <div className={styles.infoCard}>
                            <div className={styles.infoIcon}>🕐</div>
                            <div>
                                <h4 className={styles.infoTitle}>Графік роботи</h4>
                                <p className={styles.infoText}>
                                    Щодня: 07:00 – 20:00
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.mapWrapper}>
                        <div className={styles.mapPlaceholder}>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2540.545!2d30.52252!3d50.45034!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z0JrQuNGX0LI!5e0!3m2!1suk!2sua!4v1"
                                width="100%"
                                height="100%"
                                style={{ border: 0, borderRadius: "var(--radius-md)" }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Карта розташування храму"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
