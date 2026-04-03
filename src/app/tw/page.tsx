"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";

// ─── SVG Icons ────────────────────────────────────────────────────────────────

function CruxSvg({ size = 24, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 28" fill="none" className={className} aria-hidden="true">
      <line x1="10" y1="1" x2="10" y2="27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="4" y1="8" x2="16" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="1.5" y1="14" x2="18.5" y2="14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="5.5" y1="22.5" x2="10" y2="20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="10" y1="20" x2="14.5" y2="22.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function SparkSvg({ size = 12, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 12 12" fill="currentColor" className={className} aria-hidden="true">
      <path d="M6 0l1.1 4.9L12 6l-4.9 1.1L6 12 4.9 7.1 0 6l4.9-1.1z"/>
    </svg>
  );
}

function ArrowNESvg({ size = 16, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function ArrowRightSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" className={className} aria-hidden="true">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function PinSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 2a5 5 0 0 0-5 5c0 3.75 5 11 5 11s5-7.25 5-11a5 5 0 0 0-5-5z" stroke="currentColor" strokeWidth="1.4"/>
      <circle cx="10" cy="7" r="1.8" fill="currentColor"/>
    </svg>
  );
}

function PhoneSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M5.5 2.5h3l1.5 4-1.75 1.75C9.3 10.3 11.2 12.2 13.25 13.25L15 11.5l4 1.5v3A1.5 1.5 0 0 1 17.5 17.5C9 17.5 2.5 11 2.5 2.5A1.5 1.5 0 0 1 4 1l1.5 1.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"/>
    </svg>
  );
}

function MailSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M2 7l8 5 8-5" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function ClockSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M10 6v4l3 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}

function StreamSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="4" width="15" height="12" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M17 7.5l5-3v9l-5-3V7.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

function CandleSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3c-1-1-2-2-2-3.2C10 .5 11 0 12 0s2 .5 2 1.2C14 2.5 13 3 12 3z" fill="currentColor"/>
      <rect x="9" y="3" width="6" height="15" rx="1.5" stroke="currentColor" strokeWidth="1.5"/>
      <ellipse cx="12" cy="18.5" rx="5" ry="2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function BookSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 4h8a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M13 5h7a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-7" stroke="currentColor" strokeWidth="1.5"/>
      <line x1="13" y1="5" x2="13" y2="21" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function CrossSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 3v18M3 10h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function CalSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M3 9h18M8 2v4M16 2v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

function ChoirSvg({ size = 22, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 19V6l12-2v13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="6" cy="19" r="3" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="18" cy="17" r="3" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  );
}

function CheckSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 14 14" fill="none" className={className} aria-hidden="true">
      <path d="M2 7l4 4 6-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function BellSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <path d="M10 2a6 6 0 0 0-6 6v4l-2 2v1h16v-1l-2-2V8a6 6 0 0 0-6-6z" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M8 15a2 2 0 0 0 4 0" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function ColumnSvg({ size = 18, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 20 20" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="3" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="8.5" y="3" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
      <rect x="15" y="3" width="3" height="14" rx="1" stroke="currentColor" strokeWidth="1.4"/>
    </svg>
  );
}

function FbSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

function YtSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M10 9l5 3-5 3V9z" fill="currentColor"/>
    </svg>
  );
}

function IgSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.5"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  );
}

function TgSvg({ size = 14, className = "" }: { size?: number; className?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M22 2L2 10l7 3 2 7 4-4 5 4 2-18z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M9 13l5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Scroll Reveal ────────────────────────────────────────────────────────────
function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll("[data-reveal]");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const delay = (entry.target as HTMLElement).dataset.delay ?? "0";
            setTimeout(() => {
              (entry.target as HTMLElement).dataset.visible = "true";
            }, parseInt(delay));
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    targets.forEach((t) => io.observe(t));
    return () => io.disconnect();
  }, []);
}

// ─── Navigation ───────────────────────────────────────────────────────────────
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { label: "Про храм", href: "#about" },
    { label: "Будівництво", href: "#construction" },
    { label: "Послуги", href: "#services" },
    { label: "Меценати", href: "#donation" },
    { label: "Контакти", href: "#contact" },
  ];

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
      <a href="#" className={styles.navLogo}>
        <span className={styles.navCross}><CruxSvg size={22} /></span>
        <div className={styles.navLogoText}>
          <strong>Собор Св. Георгія</strong>
          <span>Переможця</span>
        </div>
      </a>

      <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ""}`}>
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} onClick={() => setMenuOpen(false)}>{l.label}</a>
          </li>
        ))}
        <li>
          <a href="#donation" className={styles.navCta} onClick={() => setMenuOpen(false)}>
            Підтримати
          </a>
        </li>
      </ul>

      <button
        className={`${styles.navBurger} ${menuOpen ? styles.navBurgerOpen : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Меню"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.heroBg} />
      <div className={styles.heroGrain} />
      <div className={styles.heroLines}>
        <span /><span /><span />
      </div>
      <div className={styles.heroDecoYear}>2020</div>

      <div className={`container ${styles.heroInner}`}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgeDot} />
          <span>Собор Святого великомученика Георгія переможця</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleRow1}>Собор</span>
          <span className={styles.heroTitleRow2}><em>Святого</em></span>
          <span className={styles.heroTitleRow3}>Георгія Переможця</span>
        </h1>

        <div className={styles.heroFooter}>
          <p className={styles.heroDesc}>
            Будуємо духовний центр для громади — місце молитви, культури та єднання.
            Кожна цеглина — ваша інвестиція у вічність.
          </p>
          <div className={styles.heroActions}>
            <a href="#donation" className={styles.heroPrimary}>
              <span>Стати меценатом</span>
              <span className={styles.heroArrow}><ArrowNESvg size={16} /></span>
            </a>
            <a href="#about" className={styles.heroSecondary}>Про проект</a>
          </div>
        </div>
      </div>

      <div className={styles.heroStatBar}>
        {[
          { num: "2 500+", label: "Парафіян" },
          { num: "68%",    label: "Готовність" },
          { num: "₴14M",  label: "Зібрано" },
          { num: "5",      label: "Років разом" },
        ].map((s, i) => (
          <div key={i} className={styles.heroStat}>
            <strong>{s.num}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className={styles.heroScroll}>
        <div className={styles.heroScrollBar} />
        <span>Гортати</span>
      </div>
    </section>
  );
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  const features = [
    { title: "Богослужіння", text: "Щоденні служби та великі свята у повній красі традиції" },
    { title: "Громада",      text: "Понад 2 500 парафіян — наша велика духовна родина" },
    { title: "Культура",     text: "Хор, недільна школа, молодіжне об'єднання та катехизис" },
  ];

  return (
    <section className={styles.about} id="about">
      <div className="container">
        <div className={styles.aboutGrid}>

          <div className={styles.aboutImageCol}>
            <div className={styles.aboutImgWrap} data-reveal data-delay="0">
              <div className={styles.aboutImg}>
                <img src="/images/church-1.jpg" alt="Храм зовні" />
              </div>
              <div className={styles.aboutFloatCard}>
                <strong>2020</strong>
                <span>Рік заснування</span>
              </div>
            </div>
            <div className={styles.aboutDecoNumber}>01</div>
          </div>

          <div className={styles.aboutTextCol}>
            <div className={styles.sectionLabel} data-reveal data-delay="0">
              <span /><span>Про храм</span>
            </div>
            <h2 className={styles.aboutTitle} data-reveal data-delay="80">
              Наша місія —<br /><em>єднати громаду</em>
            </h2>
            <p className={styles.aboutDesc} data-reveal data-delay="160">
              Собор Святого Великомученика Георгія Переможця — це не просто будівля. Це духовний осередок
              для тисяч вірян, місце, де народжується спільнота, зберігається традиція та виховується
              наступне покоління.
            </p>

            <div className={styles.aboutFeatures} data-reveal data-delay="240">
              {features.map((f, i) => (
                <div key={i} className={styles.aboutFeature}>
                  <span className={styles.aboutFeatureIcon}><SparkSvg size={12} /></span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#construction" className={styles.aboutLink} data-reveal data-delay="320">
              <span>Прогрес будівництва</span>
              <span className={styles.aboutLinkArrow}><ArrowRightSvg size={14} /></span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Stats Band ───────────────────────────────────────────────────────────────
function StatsBand() {
  const stats = [
    { num: "2 500+", label: "Парафіян",  sub: "Активних членів громади" },
    { num: "68%",    label: "Завершено", sub: "Загального будівництва" },
    { num: "₴14M",  label: "Зібрано",   sub: "Від меценатів та вірян" },
    { num: "120+",   label: "Меценатів", sub: "Підтримують будівництво" },
  ];

  return (
    <section className={styles.statsBand}>
      <div className={`container ${styles.statsBandInner}`}>
        {stats.map((s, i) => (
          <div key={i} className={styles.statItem} data-reveal data-delay={`${i * 80}`}>
            <strong className={styles.statNum}>{s.num}</strong>
            <span className={styles.statLabel}>{s.label}</span>
            <p className={styles.statSub}>{s.sub}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Construction ─────────────────────────────────────────────────────────────
const MILESTONES = [
  { year: "2020", title: "Заснування",   text: "Реєстрація громади, отримання земельної ділянки та початок проектування" },
  { year: "2021", title: "Фундамент",    text: "Закладка фундаменту, підземних комунікацій та цокольного поверху", done: true },
  { year: "2022", title: "Стіни",        text: "Зведення основних несучих стін першого та другого поверхів", done: true },
  { year: "2023", title: "Купол і Дах",  text: "Монтаж металевого даху, встановлення центрального купола та хрестів", active: true },
  { year: "2024", title: "Оздоблення",   text: "Внутрішнє оздоблення, вітражі, іконостас та меблювання" },
  { year: "2025", title: "Освячення",    text: "Урочисте освячення та відкриття храму для всієї громади" },
];

function MilestoneCard({ m, className }: { m: typeof MILESTONES[0]; className: string }) {
  return (
    <div className={className}>
      <div className={styles.milestonePoint}>
        <div className={styles.milestoneDot} />
        <span className={styles.milestoneYear}>{m.year}</span>
      </div>
      <div className={styles.milestoneBody}>
        <h3>{m.title}</h3>
        <p>{m.text}</p>
        {m.active && <span className={styles.milestoneTag}>Зараз</span>}
      </div>
    </div>
  );
}

function Construction() {
  return (
    <section className={styles.construction} id="construction">
      <div className="container">
        <div className={styles.constructionHeader}>
          <div>
            <div className={styles.sectionLabel} data-reveal data-delay="0">
              <span /><span>Будівництво</span>
            </div>
            <h2 className={styles.constructionTitle} data-reveal data-delay="80">
              Хроніка<br /><em>зведення храму</em>
            </h2>
          </div>

          <div className={styles.constructionProgress} data-reveal data-delay="160">
            <div className={styles.progressRing}>
              <svg viewBox="0 0 120 120">
                <circle cx="60" cy="60" r="52" className={styles.progressTrack} />
                <circle cx="60" cy="60" r="52" className={styles.progressArc} />
              </svg>
              <div className={styles.progressCenter}>
                <strong>68%</strong>
                <span>готово</span>
              </div>
            </div>
          </div>
        </div>

        {/* Vertical alternating timeline */}
        <div className={styles.timelineWrap}>
          <div className={styles.timelineCenterLine} />
          <div className={styles.timelineSideLine} />

          {MILESTONES.map((m, i) => {
            const isRight = i % 2 === 1;
            const cardCls = `${styles.timelineCard} ${m.done ? styles.timelineCardDone : ""} ${m.active ? styles.timelineCardActive : ""}`;
            const dotCls  = `${styles.timelineDot} ${m.done ? styles.timelineDotDone : ""} ${m.active ? styles.timelineDotActive : ""}`;

            return (
              <div key={i} className={styles.timelineItem} data-reveal data-delay={`${i * 60}`}>
                {/* Desktop: alternating */}
                <div className={styles.timelineItemDesktop}>
                  <div className={styles.timelineLeft}>
                    {!isRight && <MilestoneCard m={m} className={cardCls} />}
                  </div>
                  <div className={styles.timelineRight}>
                    {isRight && <MilestoneCard m={m} className={cardCls} />}
                  </div>
                </div>

                {/* Mobile: single column */}
                <div className={styles.timelineItemMobile}>
                  <MilestoneCard m={m} className={cardCls} />
                </div>

                <div className={dotCls} />
              </div>
            );
          })}
        </div>

        {/* Gallery */}
        <div className={styles.constructionGallery} data-reveal data-delay="100">
          <div className={styles.galleryImg}>
            <img src="/images/church-1.jpg" alt="Будівництво — стан сьогодні" />
            <div className={styles.galleryLabel}>Стан сьогодні</div>
          </div>
          <div className={`${styles.galleryImg} ${styles.galleryImgTall}`}>
            <img src="/images/church-2.jpg" alt="Фасад храму" />
            <div className={styles.galleryLabel}>Фасад</div>
          </div>
          <div className={styles.galleryCard}>
            <span className={styles.galleryCardIcon}><CruxSvg size={28} /></span>
            <strong>Завершення у 2025</strong>
            <p>Ваша підтримка наближає освячення</p>
            <a href="#donation" className={styles.galleryCardBtn}>Підтримати</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services ─────────────────────────────────────────────────────────────────
const SERVICE_ITEMS = [
  { Icon: StreamSvg, num: "01", title: "Трансляції богослужінь", text: "Дивіться всі служби та свята наживо або в записі — де б ви не знаходилися" },
  { Icon: CandleSvg, num: "02", title: "Свічка онлайн",         text: "Запаліть свічку дистанційно — ваша молитва досягне вівтаря" },
  { Icon: BookSvg,   num: "03", title: "Молитовник",            text: "Тексти молитов та піснеспівів у зручному форматі" },
  { Icon: CrossSvg,  num: "04", title: "Записки",               text: "Подайте записки за здоров'я та упокій онлайн у будь-який час" },
  { Icon: CalSvg,    num: "05", title: "Розклад служб",         text: "Повний розклад богослужінь та треб на місяць наперед" },
  { Icon: ChoirSvg,  num: "06", title: "Хор",                   text: "Слухайте наш церковний хор — живі записи та архів" },
];

function Services() {
  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.servicesHeader}>
          <div>
            <div className={styles.sectionLabel} data-reveal>
              <span /><span>Онлайн послуги</span>
            </div>
            <h2 className={styles.servicesTitle} data-reveal data-delay="80">
              Храм у вашому<br /><em>домі</em>
            </h2>
          </div>
          <p className={styles.servicesHeaderRight} data-reveal data-delay="160">
            Всі духовні послуги доступні онлайн
          </p>
        </div>

        <div className={styles.servicesList}>
          {SERVICE_ITEMS.map((s, i) => (
            <a
              key={i}
              href="#"
              className={styles.serviceRow}
              data-reveal
              data-delay={`${i * 50}`}
            >
              <span className={styles.serviceRowNum}>{s.num}</span>
              <div className={styles.serviceRowIconBox}>
                <s.Icon size={22} />
              </div>
              <div className={styles.serviceRowContent}>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              <span className={styles.serviceRowArrow}><ArrowNESvg size={18} /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quick Donate ─────────────────────────────────────────────────────────────
const PRESET_AMOUNTS = [100, 200, 500, 1000, 2000, 5000];

const PURPOSES = [
  { id: "будівництво", label: "Будівництво", Icon: ColumnSvg },
  { id: "іконостас",   label: "Іконостас",   Icon: CrossSvg },
  { id: "дзвони",      label: "Дзвони",      Icon: BellSvg },
  { id: "загальне",    label: "Загальне",    Icon: CruxSvg },
];

function QuickDonate() {
  const [selected, setSelected] = useState<number | null>(500);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("будівництво");
  const [sent, setSent] = useState(false);

  const amount = custom ? parseInt(custom.replace(/\D/g, "")) || 0 : selected ?? 0;
  const handleCustom = (v: string) => { setCustom(v.replace(/\D/g, "")); setSelected(null); };
  const handlePreset = (v: number)  => { setSelected(v); setCustom(""); };
  const handleSubmit = (e: { preventDefault(): void }) => { e.preventDefault(); if (amount > 0) setSent(true); };

  return (
    <section className={styles.quickDonate} id="give">
      <div className="container">
        <div className={styles.qdGrid}>

          <div>
            <div className={styles.sectionLabel} data-reveal>
              <span /><span>Пожертва</span>
            </div>
            <h2 className={styles.qdTitle} data-reveal data-delay="80">
              Зробіть внесок<br /><em>прямо зараз</em>
            </h2>
            <p className={styles.qdDesc} data-reveal data-delay="160">
              Будь-яка сума допомагає. Ваша пожертва іде безпосередньо на будівництво собору
              і підтримку громади.
            </p>
            <div className={styles.qdPurposes} data-reveal data-delay="240">
              {PURPOSES.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`${styles.qdPurposeBtn} ${purpose === p.id ? styles.qdPurposeActive : ""}`}
                  onClick={() => setPurpose(p.id)}
                >
                  <p.Icon size={14} />
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          <div className={styles.qdRight} data-reveal data-delay="100">
            {sent ? (
              <div className={styles.qdSuccess}>
                <span className={styles.qdSuccessIcon}><CruxSvg size={48} /></span>
                <h3>Слава Богу!</h3>
                <p>Дякуємо за вашу пожертву <strong>₴{amount.toLocaleString("uk-UA")}</strong>.<br />Нехай Господь винагородить вашу щедрість.</p>
                <button className={styles.qdSuccessReset} onClick={() => { setSent(false); setCustom(""); setSelected(500); }}>
                  Зробити ще одну
                </button>
              </div>
            ) : (
              <form className={styles.qdForm} onSubmit={handleSubmit}>
                <div className={styles.qdFormLabel}>Оберіть суму</div>
                <div className={styles.qdAmounts}>
                  {PRESET_AMOUNTS.map((v) => (
                    <button
                      key={v}
                      type="button"
                      className={`${styles.qdAmountBtn} ${selected === v && !custom ? styles.qdAmountActive : ""}`}
                      onClick={() => handlePreset(v)}
                    >
                      ₴{v.toLocaleString("uk-UA")}
                    </button>
                  ))}
                </div>
                <div className={styles.qdCustomWrap}>
                  <span className={styles.qdCurrency}>₴</span>
                  <input
                    type="text"
                    inputMode="numeric"
                    placeholder="Своя сума"
                    value={custom}
                    onChange={(e) => handleCustom(e.target.value)}
                    className={`${styles.qdCustomInput} ${custom ? styles.qdCustomActive : ""}`}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Ваше ім'я (необов'язково)"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={styles.qdNameInput}
                />
                <div className={styles.qdTotal}>
                  <span>Сума пожертви:</span>
                  <strong>{amount > 0 ? `₴${amount.toLocaleString("uk-UA")}` : "—"}</strong>
                </div>
                <button type="submit" className={styles.qdSubmit} disabled={amount <= 0}>
                  <span>Пожертвувати</span>
                  <span className={styles.qdSubmitArrow}><ArrowNESvg size={16} /></span>
                </button>
                <p className={styles.qdNote}>
                  Кошти надходять безпосередньо на рахунок собору · ЄДРПОУ 44312578
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Donation ─────────────────────────────────────────────────────────────────
function Donation() {
  const tiers = [
    {
      name: "Благодійник",
      amount: "₴1 000",
      perks: ["Запис у книгу благодійників", "Щомісячна згадка в молитві", "Грамота подяки"],
    },
    {
      name: "Меценат",
      amount: "₴10 000",
      perks: ["Іменна цегла на стіні храму", "Сертифікат мецената", "Вдячна таблиця з іменем", "Особисте запрошення"],
      featured: true,
    },
    {
      name: "Патрон",
      amount: "₴50 000+",
      perks: ["Іменна каплиця або вівтар", "Вічна пам'ять в богослужінні", "VIP місце на освяченні"],
    },
  ];

  return (
    <section className={styles.donation} id="donation">
      <div className={styles.donationBgWrap}>
        <div className={styles.donationBg} />
        <div className={styles.donationBgGrain} />
      </div>

      <div className={`container ${styles.donationInner}`}>
        <div className={styles.donationHeader}>
          <div>
            <div className={styles.sectionLabel} data-reveal>
              <span /><span>Меценатство</span>
            </div>
            <h2 className={styles.donationTitle} data-reveal data-delay="80">
              Ваш внесок<br />у <em>вічність</em>
            </h2>
          </div>
          <p className={styles.donationDesc} data-reveal data-delay="160">
            Оберіть форму підтримки, яка відповідає вашим можливостям. Кожна гривня наближає
            відкриття храму.
          </p>
        </div>

        <div className={styles.donationTiers}>
          {tiers.map((t, i) => (
            <div
              key={i}
              className={`${styles.tierCard} ${t.featured ? styles.tierFeatured : ""}`}
              data-reveal
              data-delay={`${i * 100}`}
            >
              {t.featured && <div className={styles.tierBadge}>Найпопулярніше</div>}
              <div className={styles.tierTop}>
                <span className={styles.tierName}>{t.name}</span>
                <strong className={styles.tierAmount}>{t.amount}</strong>
              </div>
              <ul className={styles.tierPerks}>
                {t.perks.map((p, j) => (
                  <li key={j}>
                    <span className={styles.tierPerkIcon}><CheckSvg size={14} /></span>
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className={`${styles.tierBtn} ${t.featured ? styles.tierBtnFeatured : ""}`}>
                Обрати рівень
              </a>
            </div>
          ))}
        </div>

        <div className={styles.donationBank} data-reveal data-delay="100">
          <div className={styles.donationBankLabel}>
            <span className={styles.donationBankIcon}><CruxSvg size={18} /></span>
            <span>Реквізити для переказу</span>
          </div>
          <div className={styles.donationBankGrid}>
            {[
              { label: "IBAN",       value: "UA21 3996 2200 0002 6007 2996 5001" },
              { label: "Отримувач", value: "Собор Св. Великомученика Георгія Переможця УГКЦ" },
              { label: "ЄДРПОУ",    value: "44312578" },
              { label: "Банк",      value: "АТ «Ощадбанк»" },
            ].map((item, i) => (
              <div key={i} className={styles.donationBankItem}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Contact ──────────────────────────────────────────────────────────────────
const CONTACT_INFO = [
  { Icon: PinSvg,   label: "Адреса",  value: "вул. Шевченка 42, м. Львів" },
  { Icon: PhoneSvg, label: "Телефон", value: "+38 (032) 242-78-90" },
  { Icon: MailSvg,  label: "Email",   value: "info@church-nativity.ua" },
  { Icon: ClockSvg, label: "Розклад", value: "Пн–Сб 8:00 · Нд 9:00 та 11:00" },
];

const SOCIAL_LINKS = [
  { Icon: FbSvg, label: "Facebook" },
  { Icon: YtSvg, label: "YouTube" },
  { Icon: IgSvg, label: "Instagram" },
  { Icon: TgSvg, label: "Telegram" },
];

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contactGrid}>

          <div>
            <div className={styles.sectionLabel} data-reveal>
              <span /><span>Контакти</span>
            </div>
            <h2 className={styles.contactTitle} data-reveal data-delay="80">
              Завітайте<br />до <em>нас</em>
            </h2>

            <div className={styles.contactItems} data-reveal data-delay="160">
              {CONTACT_INFO.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <div className={styles.contactItemIconBox}>
                    <item.Icon size={18} />
                  </div>
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.contactSocial} data-reveal data-delay="240">
              {SOCIAL_LINKS.map((s, i) => (
                <a key={i} href="#" className={styles.contactSocialItem}>
                  <s.Icon size={14} />
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.contactRight} data-reveal data-delay="200">
            <div className={styles.contactMap}>
              <span className={styles.contactMapCross}><CruxSvg size={52} /></span>
              <p>Собор Св. Георгія Переможця</p>
              <span>вул. Шевченка 42, Львів</span>
            </div>
            <div className={styles.contactDecoText}>Храм</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <span className={styles.footerCross}><CruxSvg size={28} /></span>
            <div>
              <strong>Собор Св. Георгія Переможця</strong>
              <span>Собор Святого великомученика Георгія переможця</span>
            </div>
          </div>

          <div className={styles.footerCols}>
            <div>
              <h4>Навігація</h4>
              {["Про храм", "Будівництво", "Послуги", "Меценати"].map((l, i) => (
                <a key={i} href="#">{l}</a>
              ))}
            </div>
            <div>
              <h4>Контакти</h4>
              <a href="#">вул. Шевченка 42, Львів</a>
              <a href="#">+38 (032) 242-78-90</a>
              <a href="#">info@church-nativity.ua</a>
            </div>
          </div>
        </div>

        <div className={styles.footerDivider} />

        <div className={styles.footerBottom}>
          <p>© 2024 Собор Святого Великомученика Георгія Переможця УГКЦ. Всі права захищені.</p>
          <p className={styles.footerQuote}>«Христос народився — Славімо Його»</p>
        </div>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function TwPage() {
  useScrollReveal();

  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <StatsBand />
        <Construction />
        <Services />
        <QuickDonate />
        <Donation />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
