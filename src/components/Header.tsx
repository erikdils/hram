"use client";

import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = [
    { label: "Про храм", href: "#about" },
    { label: "Розклад", href: "#schedule" },
    { label: "Меценатство", href: "#patronage" },
    { label: "Онлайн послуги", href: "#services" },
    { label: "Контакти", href: "#contact" },
];

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleNavClick = () => setMenuOpen(false);

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
            <div className={`container ${styles.inner}`}>
                <a href="#" className={styles.logo}>
                    <span className={styles.cross}>✦</span>
                    <div className={styles.logoText}>
                        <span className={styles.logoName}>Храм Різдва</span>
                        <span className={styles.logoSub}>Христового</span>
                    </div>
                </a>

                <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className={styles.navLink}
                            onClick={handleNavClick}
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href="#donation" className={styles.donateBtn} onClick={handleNavClick}>
                        Підтримати
                    </a>
                </nav>

                <button
                    className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Меню"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    );
}
