"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

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
        <span className={styles.navCross}>☦</span>
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
          <span>Собор Святого великомученика Георигия переможця</span>
        </div>

        <h1 className={styles.heroTitle}>
          <span className={styles.heroTitleRow1}>Собор</span>
          <span className={styles.heroTitleRow2}>
            <em>Святого</em>
          </span>
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
              <span className={styles.heroArrow}>↗</span>
            </a>
            <a href="#about" className={styles.heroSecondary}>
              Про проект
            </a>
          </div>
        </div>
      </div>

      <div className={styles.heroStatBar}>
        {[
          { num: "2 500+", label: "Парафіян" },
          { num: "68%", label: "Готовність" },
          { num: "₴14M", label: "Зібрано" },
          { num: "5", label: "Років разом" },
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
    { icon: "✦", title: "Богослужіння", text: "Щоденні служби та великі свята у повній красі традиції" },
    { icon: "✦", title: "Громада", text: "Понад 2 500 парафіян — наша велика духовна родина" },
    { icon: "✦", title: "Культура", text: "Хор, недільна школа, молодіжне об'єднання та катехизис" },
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
            <div className={styles.aboutDecoNumber} data-reveal data-delay="150">01</div>
          </div>

          <div className={styles.aboutTextCol}>
            <div className={styles.sectionLabel} data-reveal data-delay="0">
              <span />
              <span>Про храм</span>
            </div>

            <h2 className={styles.aboutTitle} data-reveal data-delay="80">
              Наша місія —<br />
              <em>єднати громаду</em>
            </h2>

            <p className={styles.aboutDesc} data-reveal data-delay="160">
              Собор Святого Великомученика Георгія Переможця — це не просто будівля. Це духовний осередок для тисяч вірян,
              місце, де народжується спільнота, зберігається традиція та виховується наступне покоління.
            </p>

            <div className={styles.aboutFeatures} data-reveal data-delay="240">
              {features.map((f, i) => (
                <div key={i} className={styles.aboutFeature}>
                  <span className={styles.aboutFeatureIcon}>{f.icon}</span>
                  <div>
                    <strong>{f.title}</strong>
                    <p>{f.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <a href="#construction" className={styles.aboutLink} data-reveal data-delay="320">
              <span>Прогрес будівництва</span>
              <span className={styles.aboutLinkArrow}>→</span>
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
    { num: "2 500+", label: "Парафіян", sub: "Активних членів громади" },
    { num: "68%", label: "Завершено", sub: "Загального будівництва" },
    { num: "₴14M", label: "Зібрано", sub: "Від меценатів та вірян" },
    { num: "120+", label: "Меценатів", sub: "Підтримують будівництво" },
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
function Construction() {
  const milestones = [
    { year: "2020", title: "Заснування", text: "Реєстрація громади, отримання земельної ділянки та початок проектування" },
    { year: "2021", title: "Фундамент", text: "Закладка фундаменту, підземних комунікацій та цокольного поверху", done: true },
    { year: "2022", title: "Стіни", text: "Зведення основних несучих стін першого та другого поверхів", done: true },
    { year: "2023", title: "Купол і Дах", text: "Монтаж металевого даху, встановлення центрального купола та хрестів", active: true },
    { year: "2024", title: "Оздоблення", text: "Внутрішнє оздоблення, вітражі, іконостас та меблювання" },
    { year: "2025", title: "Освячення", text: "Урочисте освячення та відкриття храму для всієї громади" },
  ];

  return (
    <section className={styles.construction} id="construction">
      <div className="container">
        <div className={styles.constructionHeader}>
          <div>
            <div className={styles.sectionLabel} data-reveal data-delay="0">
              <span />
              <span>Будівництво</span>
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

        <div className={styles.timeline}>
          <div className={styles.timelineLine} />
          {milestones.map((m, i) => (
            <div
              key={i}
              className={`${styles.milestone} ${m.done ? styles.milestoneDone : ""} ${m.active ? styles.milestoneActive : ""}`}
              data-reveal
              data-delay={`${i * 80}`}
            >
              <div className={styles.milestonePoint}>
                <div className={styles.milestoneDot} />
                <span className={styles.milestoneYear}>{m.year}</span>
              </div>
              <div className={styles.milestoneBody}>
                <h3>{m.title}</h3>
                <p>{m.text}</p>
                {m.active && (
                  <span className={styles.milestoneTag}>Зараз</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.constructionGallery} data-reveal data-delay="100">
          <div className={styles.galleryImg}>
            <img src="/images/church-1.jpg" alt="Будівництво 1" />
            <div className={styles.galleryLabel}>Стан сьогодні</div>
          </div>
          <div className={`${styles.galleryImg} ${styles.galleryImgTall}`}>
            <img src="/images/church-2.jpg" alt="Будівництво 2" />
            <div className={styles.galleryLabel}>Фасад</div>
          </div>
          <div className={styles.galleryCard}>
            <span className={styles.galleryCardIcon}>☦</span>
            <strong>Завершення у 2025</strong>
            <p>Ваша підтримка наближає освячення</p>
            <a href="#donation" className={styles.galleryCardBtn}>Підтримати</a>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Online Services ──────────────────────────────────────────────────────────
function Services() {
  const services = [
    { icon: "📺", title: "Трансляції богослужінь", text: "Дивіться всі служби та свята наживо або в записі", span: 2 },
    { icon: "🕯️", title: "Свічка онлайн", text: "Запаліть свічку дистанційно" },
    { icon: "📖", title: "Молитовник", text: "Тексти молитов та піснеспівів" },
    { icon: "✝️", title: "Записки", text: "Подайте записки за здоров'я та упокій онлайн" },
    { icon: "📅", title: "Розклад служб", text: "Повний розклад богослужінь та треб на місяць", span: 2 },
    { icon: "🎵", title: "Хор", text: "Слухайте наш церковний хор" },
  ];

  return (
    <section className={styles.services} id="services">
      <div className="container">
        <div className={styles.servicesHeader}>
          <div className={styles.sectionLabel} data-reveal>
            <span />
            <span>Онлайн послуги</span>
          </div>
          <div className={styles.servicesHeaderRight}>
            <h2 className={styles.servicesTitle} data-reveal data-delay="80">
              Храм у вашому<br /><em>домі</em>
            </h2>
            <p className={styles.servicesDesc} data-reveal data-delay="160">
              Всі духовні послуги доступні онлайн — де б ви не знаходилися
            </p>
          </div>
        </div>

        <div className={styles.servicesBento}>
          {services.map((s, i) => (
            <div
              key={i}
              className={`${styles.serviceCard} ${s.span === 2 ? styles.serviceCardWide : ""}`}
              data-reveal
              data-delay={`${(i % 3) * 80}`}
            >
              <span className={styles.serviceIcon}>{s.icon}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <span className={styles.serviceArrow}>↗</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Quick Donate ─────────────────────────────────────────────────────────────
const PRESET_AMOUNTS = [100, 200, 500, 1000, 2000, 5000];

function QuickDonate() {
  const [selected, setSelected] = useState<number | null>(500);
  const [custom, setCustom] = useState("");
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("будівництво");
  const [sent, setSent] = useState(false);

  const amount = custom ? parseInt(custom.replace(/\D/g, "")) || 0 : selected ?? 0;

  const handleCustom = (v: string) => {
    setCustom(v.replace(/\D/g, ""));
    setSelected(null);
  };

  const handlePreset = (v: number) => {
    setSelected(v);
    setCustom("");
  };

  const handleSubmit = (e: { preventDefault(): void }) => {
    e.preventDefault();
    if (amount > 0) setSent(true);
  };

  return (
    <section className={styles.quickDonate} id="give">
      <div className="container">
        <div className={styles.qdGrid}>

          {/* Left — info */}
          <div className={styles.qdLeft}>
            <div className={styles.sectionLabel} data-reveal>
              <span />
              <span>Пожертва</span>
            </div>
            <h2 className={styles.qdTitle} data-reveal data-delay="80">
              Зробіть внесок<br /><em>прямо зараз</em>
            </h2>
            <p className={styles.qdDesc} data-reveal data-delay="160">
              Будь-яка сума допомагає. Ваша пожертва іде безпосередньо на будівництво собору і підтримку громади.
            </p>
            <div className={styles.qdPurposes} data-reveal data-delay="240">
              {[
                { id: "будівництво", label: "🏛️ Будівництво" },
                { id: "іконостас", label: "✦ Іконостас" },
                { id: "дзвони", label: "🔔 Дзвони" },
                { id: "загальне", label: "☦ Загальне" },
              ].map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className={`${styles.qdPurposeBtn} ${purpose === p.id ? styles.qdPurposeActive : ""}`}
                  onClick={() => setPurpose(p.id)}
                >
                  {p.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className={styles.qdRight} data-reveal data-delay="100">
            {sent ? (
              <div className={styles.qdSuccess}>
                <span className={styles.qdSuccessIcon}>☦</span>
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

                <div className={styles.qdNameWrap}>
                  <input
                    type="text"
                    placeholder="Ваше ім'я (необов'язково)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className={styles.qdNameInput}
                  />
                </div>

                <div className={styles.qdTotal}>
                  <span>Сума пожертви:</span>
                  <strong>{amount > 0 ? `₴${amount.toLocaleString("uk-UA")}` : "—"}</strong>
                </div>

                <button
                  type="submit"
                  className={styles.qdSubmit}
                  disabled={amount <= 0}
                >
                  <span>Пожертвувати</span>
                  <span className={styles.qdSubmitArrow}>↗</span>
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

      <div className="container">
        <div className={styles.donationHeader}>
          <div className={styles.sectionLabelLight} data-reveal>
            <span />
            <span>Меценатство</span>
          </div>
          <h2 className={styles.donationTitle} data-reveal data-delay="80">
            Ваш внесок<br />у <em>вічність</em>
          </h2>
          <p className={styles.donationDesc} data-reveal data-delay="160">
            Оберіть форму підтримки, яка відповідає вашим можливостям. Кожна гривня наближає відкриття храму.
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
              {t.featured && (
                <div className={styles.tierBadge}>Найпопулярніше</div>
              )}
              <div className={styles.tierTop}>
                <span className={styles.tierName}>{t.name}</span>
                <strong className={styles.tierAmount}>{t.amount}</strong>
              </div>
              <ul className={styles.tierPerks}>
                {t.perks.map((p, j) => (
                  <li key={j}>
                    <span className={styles.tierPerkIcon}>✦</span>
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
            <span className={styles.donationBankIcon}>☦</span>
            <span>Реквізити для переказу</span>
          </div>
          <div className={styles.donationBankGrid}>
            {[
              { label: "IBAN", value: "UA21 3996 2200 0002 6007 2996 5001" },
              { label: "Отримувач", value: "Собор Св. Великомученика Георгія Переможця УГКЦ" },
              { label: "ЄДРПОУ", value: "44312578" },
              { label: "Банк", value: "АТ «Ощадбанк»" },
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
function Contact() {
  const info = [
    { icon: "📍", label: "Адреса", value: "вул. Шевченка 42, м. Львів" },
    { icon: "📞", label: "Телефон", value: "+38 (032) 242-78-90" },
    { icon: "✉️", label: "Email", value: "info@church-nativity.ua" },
    { icon: "🕐", label: "Розклад", value: "Пн–Сб 8:00 · Нд 9:00 та 11:00" },
  ];

  return (
    <section className={styles.contact} id="contact">
      <div className="container">
        <div className={styles.contactGrid}>
          <div className={styles.contactLeft}>
            <div className={styles.sectionLabel} data-reveal>
              <span />
              <span>Контакти</span>
            </div>
            <h2 className={styles.contactTitle} data-reveal data-delay="80">
              Завітайте<br />до <em>нас</em>
            </h2>

            <div className={styles.contactItems} data-reveal data-delay="160">
              {info.map((item, i) => (
                <div key={i} className={styles.contactItem}>
                  <span className={styles.contactItemIcon}>{item.icon}</span>
                  <div>
                    <span>{item.label}</span>
                    <strong>{item.value}</strong>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.contactSocial} data-reveal data-delay="240">
              {["Facebook", "YouTube", "Instagram", "Telegram"].map((s, i) => (
                <a key={i} href="#" className={styles.contactSocialItem}>{s}</a>
              ))}
            </div>
          </div>

          <div className={styles.contactRight} data-reveal data-delay="200">
            <div className={styles.contactMap}>
              <div className={styles.contactMapInner}>
                <span className={styles.contactMapCross}>☦</span>
                <p>Собор Св. Георгія Переможця</p>
                <span>вул. Шевченка 42, Львів</span>
              </div>
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
            <span className={styles.footerCross}>☦</span>
            <div>
              <strong>Собор Св. Георгія Переможця</strong>
              <span>Собор Святого великомученика Георигия переможця</span>
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
export default function TestPage() {
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
