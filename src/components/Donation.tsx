"use client";

import { useState } from "react";
import styles from "./Donation.module.css";

const patronageTiers = [
    {
        id: "stone",
        name: "Камінчик",
        price: "від 100 €",
        desc: "Камінець із освяченої землі у льняному мішечку — символ вашого фундаментального внеску.",
        gift: "Освячений камінець",
        icon: "🪨",
    },
    {
        id: "coin",
        name: "Колекційна монета",
        price: "від 250 €",
        desc: "Пам'ятна монета з образом нашого храму, пронумерована (серія 001–991).",
        gift: "Пронумерована монета",
        icon: "🪙",
    },
    {
        id: "key",
        name: "Духовний ключ миру",
        price: "від 500 €",
        desc: "Унікальний набір із трьох ключів — символ Трійці й відчинених дверей до спасіння.",
        gift: "Набір 3 ключів",
        icon: "🗝️",
    },
    {
        id: "brick",
        name: "Іменна цеглина",
        price: "від 1 000 €",
        desc: "Ваше ім'я буде навічно вписане у стіни святині. Сертифікат мецената + фото.",
        gift: "Сертифікат + фото",
        icon: "🧱",
    },
    {
        id: "tree",
        name: "Посадити дерево",
        price: "від 8 000 €",
        desc: "Лаврове або оливкове дерево в саду при храмі з іменною табличкою вашої родини.",
        gift: "Іменна табличка у саду",
        icon: "🌳",
    },
    {
        id: "building",
        name: "Патронат будівлі",
        price: "від 50 000 €",
        desc: "Повне шефство над одним із корпусів комплексу. Меморіальна плита з іменем родини.",
        gift: "Меморіальна плита",
        icon: "⛪",
    },
];

const CARD_NUMBER = "4246 0010 0375 9432";
const MONO_LINK = "https://send.monobank.ua/jar/example"; // placeholder
const IBAN = "UA12 3456 7890 0000 0012 3456 7890";
const RECIPIENT = "Релігійна громада Храму Різдва Христового";

export default function Donation() {
    const [amount, setAmount] = useState<number | "">("");
    const [copied, setCopied] = useState<string | null>(null);
    const [activeTab, setActiveTab] = useState<"patronage" | "donate">("patronage");

    const copy = (text: string, key: string) => {
        navigator.clipboard.writeText(text);
        setCopied(key);
        setTimeout(() => setCopied(null), 2000);
    };

    return (
        <section className={styles.donation} id="patronage">
            <div className="container">
                <div className={styles.header}>
                    <span className="section-label">Підтримайте нас</span>
                    <h2 className="section-title">Станьте частиною великої справи</h2>
                    <p className="section-subtitle" style={{ margin: "0 auto" }}>
                        Кожен внесок — це цеглина в стінах майбутньої святині. Оберіть зручний спосіб підтримати будівництво Храму Різдва Христового.
                    </p>
                </div>

                {/* Tabs */}
                <div className={styles.tabs}>
                    <button
                        className={`${styles.tab} ${activeTab === "patronage" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("patronage")}
                    >
                        Меценатство
                    </button>
                    <button
                        className={`${styles.tab} ${activeTab === "donate" ? styles.activeTab : ""}`}
                        onClick={() => setActiveTab("donate")}
                    >
                        Пожертва
                    </button>
                </div>

                {activeTab === "patronage" && (
                    <>
                        {/* Patronage Tiers */}
                        <div className={styles.patronageGrid}>
                            {patronageTiers.map((tier) => (
                                <div key={tier.id} className={styles.tierCard}>
                                    <div className={styles.tierEmoji}>{tier.icon}</div>
                                    <h3 className={styles.tierName}>{tier.name}</h3>
                                    <div className={styles.tierPrice}>{tier.price}</div>
                                    <p className={styles.tierDesc}>{tier.desc}</p>
                                    <div className={styles.tierGift}>
                                        <span className={styles.giftLabel}>Подарунок:</span> {tier.gift}
                                    </div>
                                    <a href="#payment-details" className={styles.tierBtn}>Підтримати</a>
                                </div>
                            ))}
                        </div>

                        {/* What the money goes to */}
                        <div className={styles.purposeBlock}>
                            <h3 className={styles.purposeTitle}>На що йдуть кошти?</h3>
                            <div className={styles.purposeGrid}>
                                {[
                                    { icon: "🏗️", text: "Будівельні матеріали — стіни, купол, покрівля" },
                                    { icon: "🎨", text: "Іконостас та внутрішнє оздоблення" },
                                    { icon: "🌳", text: "Благоустрій прилеглої території та саду" },
                                    { icon: "📚", text: "Недільна школа та просвітницькі програми" },
                                    { icon: "🕯️", text: "Бабтистерій та поминальна капличка" },
                                    { icon: "🎥", text: "Онлайн-трансляції та цифровий розвиток громади" },
                                ].map((item, i) => (
                                    <div key={i} className={styles.purposeItem}>
                                        <span className={styles.purposeIcon}>{item.icon}</span>
                                        <span>{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                )}

                {activeTab === "donate" && (
                    <div className={styles.donationBlock}>
                        {/* Quick amounts */}
                        <div className={styles.formCol}>
                            <h3 className={styles.formTitle}>Довільна пожертва</h3>
                            <p className={styles.formSubtitle}>Кожна гривня наближає нас до мети.</p>

                            <div className={styles.amountGrid}>
                                {[100, 500, 1000, 5000].map((val) => (
                                    <button
                                        key={val}
                                        className={`${styles.amountBtn} ${amount === val ? styles.activeAmount : ""}`}
                                        onClick={() => setAmount(val)}
                                    >
                                        {val} ₴
                                    </button>
                                ))}
                            </div>

                            <div className={styles.inputWrapper}>
                                <input
                                    type="number"
                                    placeholder="Інша сума"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                                    className={styles.input}
                                />
                                <span className={styles.currency}>₴</span>
                            </div>

                            <a href={MONO_LINK} target="_blank" rel="noopener noreferrer" className="btn-gold" style={{ width: "100%", marginTop: "24px", display: "flex" }}>
                                Пожертвувати через Monobank
                            </a>
                        </div>

                        {/* Payment details */}
                        <div className={styles.paymentCol} id="payment-details">
                            <h3 className={styles.formTitle}>Реквізити для переказу</h3>

                            <div className={styles.payCard}>
                                <div className={styles.payRow}>
                                    <span className={styles.payLabel}>Отримувач</span>
                                    <span className={styles.payValue}>{RECIPIENT}</span>
                                </div>
                                <div className={styles.payRow}>
                                    <span className={styles.payLabel}>IBAN</span>
                                    <span className={styles.payValue}>{IBAN}</span>
                                    <button className={styles.copyBtn} onClick={() => copy(IBAN, "iban")}>
                                        {copied === "iban" ? "✓" : "⎘"}
                                    </button>
                                </div>
                                <div className={styles.payRow}>
                                    <span className={styles.payLabel}>Картка</span>
                                    <span className={styles.payValue}>{CARD_NUMBER}</span>
                                    <button className={styles.copyBtn} onClick={() => copy(CARD_NUMBER.replace(/\s/g, ""), "card")}>
                                        {copied === "card" ? "✓" : "⎘"}
                                    </button>
                                </div>
                                <div className={styles.payRow}>
                                    <span className={styles.payLabel}>Призначення</span>
                                    <span className={styles.payValue}>Пожертва на будівництво храму</span>
                                </div>
                            </div>

                            <div className={styles.payMethods}>
                                <span className={styles.payMethodLabel}>Приймаємо через:</span>
                                <div className={styles.payMethodList}>
                                    <span className={styles.payMethod}>Monobank</span>
                                    <span className={styles.payMethod}>PrivatBank</span>
                                    <span className={styles.payMethod}>LiqPay</span>
                                    <span className={styles.payMethod}>SWIFT/IBAN</span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
