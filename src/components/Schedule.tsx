"use client";

import { useState } from "react";
import styles from "./Schedule.module.css";

const weeklySchedule = [
    {
        day: "Субота",
        shortDay: "Сб",
        services: [
            { time: "08:00", name: "Утреня" },
            { time: "09:00", name: "Божественна Літургія" },
            { time: "17:00", name: "Велика Вечірня" },
        ],
    },
    {
        day: "Неділя",
        shortDay: "Нд",
        services: [
            { time: "09:00", name: "Утреня" },
            { time: "10:00", name: "Божественна Літургія, Сповідь та Причастя" },
            { time: "12:00", name: "Молебень" },
        ],
    },
    {
        day: "Понеділок",
        shortDay: "Пн",
        services: [
            { time: "09:00", name: "Божественна Літургія" },
        ],
    },
    {
        day: "Середа",
        shortDay: "Ср",
        services: [
            { time: "09:00", name: "Божественна Літургія" },
            { time: "18:00", name: "Акафіст" },
        ],
    },
    {
        day: "П'ятниця",
        shortDay: "Пт",
        services: [
            { time: "09:00", name: "Божественна Літургія" },
            { time: "17:00", name: "Вечірня" },
        ],
    },
];

const upcomingServices = [
    {
        date: "06.04",
        day: "Нд",
        feast: "Неділя Хрестопоклонна (3-тя Великого Посту)",
        type: "great",
        services: [
            { time: "09:00", name: "Утреня з Поклонінням Хресту" },
            { time: "10:00", name: "Божественна Літургія" },
        ],
    },
    {
        date: "07.04",
        day: "Пн",
        feast: "Благовіщення Пресвятої Богородиці",
        type: "great",
        services: [
            { time: "08:30", name: "Божественна Літургія" },
            { time: "17:00", name: "Всенічне Бдіння" },
        ],
    },
    {
        date: "13.04",
        day: "Нд",
        feast: "Неділя 4-та Великого Посту. Прп. Іоана Ліствичника",
        type: "regular",
        services: [
            { time: "10:00", name: "Божественна Літургія" },
        ],
    },
    {
        date: "17.04",
        day: "Чт",
        feast: "Великий Четвер. Тайна Вечеря",
        type: "great",
        services: [
            { time: "08:00", name: "Утреня" },
            { time: "09:00", name: "Літургія Василія Великого" },
            { time: "19:00", name: "Утреня Страсної П'ятниці (12 Євангелій)" },
        ],
    },
    {
        date: "18.04",
        day: "Пт",
        feast: "Страсна П'ятниця. Страждання Господні",
        type: "great",
        services: [
            { time: "14:00", name: "Вечірня з Виносом Плащаниці" },
            { time: "19:00", name: "Утреня Великої Суботи. Похорон Плащаниці" },
        ],
    },
    {
        date: "20.04",
        day: "Нд",
        feast: "ПАСХА ХРИСТОВА. Воскресіння Господнє",
        type: "pascha",
        services: [
            { time: "00:00", name: "Нічна Пасхальна Утреня та Літургія" },
            { time: "10:00", name: "Пасхальна Літургія" },
            { time: "17:00", name: "Пасхальна Вечірня" },
        ],
    },
];

export default function Schedule() {
    const [tab, setTab] = useState<"weekly" | "upcoming">("weekly");

    return (
        <section className={styles.schedule} id="schedule">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Богослужіння</span>
                    <h2 className="section-title" style={{ color: "var(--navy)" }}>
                        Розклад богослужінь
                    </h2>
                    <p className="section-subtitle" style={{ color: "var(--text-muted)", margin: "0 auto" }}>
                        Приєднуйтесь до спільної молитви. Храм відчинений щодня з 08:00 до 20:00.
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${tab === "weekly" ? styles.activeTab : ""}`}
                        onClick={() => setTab("weekly")}
                    >
                        Щотижневий розклад
                    </button>
                    <button
                        className={`${styles.tab} ${tab === "upcoming" ? styles.activeTab : ""}`}
                        onClick={() => setTab("upcoming")}
                    >
                        Найближчі свята
                    </button>
                </div>

                {tab === "weekly" && (
                    <div className={styles.weeklyGrid}>
                        {weeklySchedule.map((dayItem) => (
                            <div key={dayItem.day} className={styles.dayCard}>
                                <div className={styles.dayHeader}>
                                    <span className={styles.dayShort}>{dayItem.shortDay}</span>
                                    <span className={styles.dayFull}>{dayItem.day}</span>
                                </div>
                                <div className={styles.servicesList}>
                                    {dayItem.services.map((s, i) => (
                                        <div key={i} className={styles.serviceRow}>
                                            <span className={styles.timeTag}>{s.time}</span>
                                            <span className={styles.serviceName}>{s.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {tab === "upcoming" && (
                    <div className={styles.upcomingList}>
                        {upcomingServices.map((item, i) => (
                            <div
                                key={i}
                                className={`${styles.upcomingCard} ${
                                    item.type === "pascha" ? styles.paschaCard :
                                    item.type === "great" ? styles.greatCard : ""
                                }`}
                            >
                                <div className={styles.upcomingDate}>
                                    <span className={styles.upcomingDay}>{item.date}</span>
                                    <span className={styles.upcomingWeekday}>{item.day}</span>
                                    {item.type === "pascha" && <span className={styles.paschaTag}>ПАСХА</span>}
                                    {item.type === "great" && <span className={styles.greatTag}>Велике Свято</span>}
                                </div>
                                <div className={styles.upcomingContent}>
                                    <h4 className={styles.upcomingFeast}>{item.feast}</h4>
                                    <div className={styles.upcomingServices}>
                                        {item.services.map((s, si) => (
                                            <div key={si} className={styles.serviceRow}>
                                                <span className={styles.timeTag}>{s.time}</span>
                                                <span className={styles.serviceName}>{s.name}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <p className={styles.note}>
                    ✦ У святкові дні розклад може змінюватись. Слідкуйте за оголошеннями у соцмережах.
                </p>
            </div>
        </section>
    );
}
