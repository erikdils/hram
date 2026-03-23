import styles from "./OnlineServices.module.css";

const services = [
    {
        icon: "📝",
        title: "Подати записку",
        text: "Подайте імена за здоров'я чи за упокій для поминання на Літургії.",
        action: "Подати онлайн",
    },
    {
        icon: "🙏",
        title: "Замовити молебень",
        text: "Замовте спільну молитву у конкретному наміренні за ваших близьких.",
        action: "Замовити",
    },
    {
        icon: "🕊️",
        title: "40 просфор",
        text: "Особливе прохання на Проскомідії за сорок Божественних Літургій.",
        action: "Замовити 40",
    },
    {
        icon: "🕯️",
        title: "Запалити лампаду",
        text: "Ми запалимо лампаду перед образами в храмі за вашим проханням.",
        action: "Запалити",
    },
];

export default function OnlineServices() {
    return (
        <section className={styles.services} id="services">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Духовні послуги</span>
                    <h2 className="section-title">Онлайн послуги храму</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Ви можете долучитися до молитви та замовити духовні треби дистанційно, де б ви не перебували.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((item, i) => (
                        <div key={i} className={styles.card}>
                            <div className={styles.icon}>{item.icon}</div>
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardText}>{item.text}</p>
                            <button className={styles.cardBtn}>{item.action}</button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
