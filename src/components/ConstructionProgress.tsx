import styles from "./ConstructionProgress.module.css";

const milestones = [
    { year: "2022", title: "Отримання благословення", desc: "Початок проектування та підготовка документації." },
    { year: "2023", title: "Закладка фундаменту", desc: "Урочисте освячення місця під будівництво." },
    { year: "2024", title: "Зведення стін", desc: "Активна фаза будівництва основного корпусу." },
    { year: "2025", title: "Оздоблювальні роботи", desc: "Внутрішній іконопис та встановлення куполів." },
];

export default function ConstructionProgress() {
    return (
        <section className={styles.progress} id="progress">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Етапи творення</span>
                    <h2 className="section-title">Хід будівництва</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Ми пройшли великий шлях і продовжуємо рухатися вперед завдяки вашій підтримці.
                    </p>
                </div>

                <div className={styles.timeline}>
                    {milestones.map((m, i) => (
                        <div key={i} className={styles.milestone}>
                            <div className={styles.mYear}>{m.year}</div>
                            <div className={styles.mPoint} />
                            <div className={styles.mContent}>
                                <h4 className={styles.mTitle}>{m.title}</h4>
                                <p className={styles.mDesc}>{m.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className={styles.visuals}>
                    <div className={styles.vBlock}>
                        <h3 className={styles.vTitle}>Рендери (Outdoor)</h3>
                        <div className={styles.vGrid}>
                            <div className={styles.vPlaceholder}>Зовнішній вигляд храму</div>
                            <div className={styles.vPlaceholder}>Дзвіниця та вхід</div>
                        </div>
                    </div>
                    <div className={styles.vBlock}>
                        <h3 className={styles.vTitle}>Інтер&apos;єр (Indoor)</h3>
                        <div className={styles.vGrid}>
                            <div className={styles.vPlaceholder}>Головний зал</div>
                            <div className={styles.vPlaceholder}>Баптистерій нижнього храму</div>
                        </div>
                    </div>
                </div>

                <div className={styles.architecture}>
                    <h3 className={styles.archTitle}>Архітектурна концепція</h3>
                    <p className={styles.archText}>
                        Наш комплекс включає три основні рівні: верхній храм Різдва Христового, нижній храм для заупокійних служб та баптистерій для таїнства хрещення. Кожен рівень має своє унікальне оздоблення та сакральну атмосферу.
                    </p>
                </div>
            </div>
        </section>
    );
}
