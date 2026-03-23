import styles from "./About.module.css";

export default function About() {
    return (
        <section className={styles.about} id="about">
            <div className={`container ${styles.grid}`}>
                <div className={styles.imageCol}>
                    <div className={styles.imageWrapper}>
                        <img
                            src="/images/church-2.jpg"
                            alt="Храм Різдва Христового — вид збоку"
                            className={styles.image}
                        />
                        <div className={styles.imageDecor} />
                    </div>
                    <div className={styles.statCard}>
                        <span className={styles.statNumber}>2025</span>
                        <span className={styles.statLabel}>Рік побудови</span>
                    </div>
                </div>

                <div className={styles.textCol}>
                    <span className="section-label">Про храм</span>
                    <h2 className="section-title">
                        Серце нашої
                        <br />
                        духовної родини
                    </h2>
                    <p className={styles.text}>
                        Храм Різдва Христового — це не просто архітектурний проект. Це духовний магніт, який збирає навколо себе людей, що прагнуть світла, миру та єднання. Ми будуємо не лише стіни, а міцну християнську родину.
                    </p>
                    <p className={styles.text}>
                        Наше УТП (Унікальна Творча Пропозиція) — це поєднання багатовікових традицій УГКЦ із сучасними підходами до служіння громаді. Кожна деталь храму — від фундаменту до хреста на куполі — наповнена глибоким сакральним змістом.
                    </p>

                    <div className={styles.features}>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🕊</div>
                            <div>
                                <h4 className={styles.featureTitle}>Духовний простір</h4>
                                <p className={styles.featureText}>
                                    Створений для молитви та внутрішнього спокою
                                </p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🤝</div>
                            <div>
                                <h4 className={styles.featureTitle}>Громада</h4>
                                <p className={styles.featureText}>
                                    Об&apos;єднуємо людей через віру та спільні цінності
                                </p>
                            </div>
                        </div>
                        <div className={styles.feature}>
                            <div className={styles.featureIcon}>🏛</div>
                            <div>
                                <h4 className={styles.featureTitle}>Архітектура</h4>
                                <p className={styles.featureText}>
                                    Сучасний дизайн із традиційними сакральними елементами
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
