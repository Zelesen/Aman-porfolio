import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    // Load Cal.com embed script
    const script = document.createElement("script");
    script.src = "https://app.cal.com/embed/embed.js";
    script.async = true;
    document.head.appendChild(script);

    // Initialize Cal.com
    const initCal = setInterval(() => {
      if (window.Cal) {
        window.Cal("init", "inline", { origin: "https://cal.com" });
        window.Cal.ns.inline("inline", {
          elementOrSelector: "#cal-inline-embed",
          calLink: "aman-maurya/30min",
          layout: "month_view",
          config: { theme: "dark" },
        });
        window.Cal.ns.inline("ui", {
          theme: "dark",
          cssVarsPerTheme: {
            dark: {
              "cal-brand": "#B91729",
              "cal-brand-emphasis": "#E2293C",
              "cal-bg": "#0A0A0A",
              "cal-bg-emphasis": "#141414",
              "cal-bg-muted": "#111111",
              "cal-bg-subtle": "#181818",
              "cal-border": "#252525",
              "cal-border-subtle": "#1C1C1C",
              "cal-text": "#F3EDE3",
              "cal-text-emphasis": "#FFFFFF",
              "cal-text-subtle": "#9A958C",
              "cal-text-muted": "#6A6661",
            },
          },
          hideEventTypeDetails: false,
        });
        clearInterval(initCal);
      }
    }, 100);

    return () => clearInterval(initCal);
  }, []);

  return (
    <section className="chapter ch-contact ch-book" id="ch-contact" data-nr="08" aria-labelledby="contact-title">
      <div className="bg-mountains" aria-hidden="true">
        <svg viewBox="0 0 1920 600" preserveAspectRatio="xMidYMax slice" fill="none" stroke="#5A0711" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path opacity="0.45" d="M -20 310 C 80 250, 180 230, 260 250 C 340 270, 420 200, 520 230 C 600 250, 700 190, 820 220 C 920 250, 1020 200, 1140 240 C 1240 270, 1360 210, 1480 240 C 1580 260, 1700 220, 1820 250 C 1880 260, 1940 290, 1940 310" />
          <path opacity="0.65" d="M -20 400 C 100 360, 220 330, 340 360 C 440 380, 560 310, 680 340 C 780 360, 900 320, 1040 360 C 1160 390, 1280 330, 1420 360 C 1540 380, 1660 340, 1800 370 C 1880 390, 1940 400, 1940 400" />
          <path opacity="0.9" d="M -20 500 C 120 470, 260 450, 400 470 C 520 490, 660 450, 800 480 C 920 500, 1060 460, 1200 490 C 1320 510, 1460 470, 1600 490 C 1740 510, 1860 480, 1940 500" />
          <path opacity="0.28" strokeDasharray="2 6" d="M 180 180 C 420 140, 680 220, 940 190" />
          <path opacity="0.28" strokeDasharray="2 6" d="M 1040 150 C 1260 110, 1480 200, 1780 160" />
        </svg>
      </div>
      <canvas id="contact-fx" className="contact-fx" aria-hidden="true"></canvas>
      <div className="ch-head">
        <span className="ch-kicker"><span className="jp">八</span> · <span className="jp">予約</span> · BOOK A CALL</span>
        <span className="ch-meta">PICK A TIME</span>
      </div>

      <h2 id="contact-title" className="ch-hero-line ch-hero-line--bounded" data-text-effect="char-variation-5">LET'S&nbsp;CREATE<br/>SOMETHING&nbsp;TOGETHER</h2>

      <p className="book-intro">
        Pick a slot below — no back-and-forth emails.
        If your project is bigger than a 30-minute chat, we'll extend on the call.
      </p>

      {/* Cal.com inline embed target */}
      <div className="book-frame">
        <div className="book-frame-ornament" aria-hidden="true">
          <span className="book-frame-corner book-frame-corner--tl"></span>
          <span className="book-frame-corner book-frame-corner--tr"></span>
          <span className="book-frame-corner book-frame-corner--bl"></span>
          <span className="book-frame-corner book-frame-corner--br"></span>
        </div>
        <div
          id="cal-inline-embed"
          className="book-embed"
          data-cal-link="aman-maurya/30min"
          data-cal-namespace="inline"
          data-lenis-prevent
          aria-label="Booking calendar"
        >
          <noscript>
            <p className="book-noscript">
              JavaScript is disabled. Book directly at
              <a href="#" target="_blank" rel="noopener">cal.com/aman-maurya</a>.
            </p>
          </noscript>
        </div>
        <a className="book-fallback" href="#" target="_blank" rel="noopener">
          <span className="book-fallback-label">Calendar not loading?</span>
          <span className="book-fallback-link">Open on cal.com <span aria-hidden="true">↗</span></span>
        </a>
      </div>

      {/* Secondary: email + social fallback */}
      <div className="book-aside">
        <div className="book-aside-head">
          <span className="jp">連絡</span>
          <span className="book-aside-label">Or reach out the old-fashioned way</span>
        </div>

        <a className="book-email" href="mailto:amanmaurya917@gmail.com">
          <span className="book-email-label">Email</span>
          <span className="book-email-addr">amanmaurya917@gmail.com</span>
          <span className="book-email-arrow" aria-hidden="true">↗</span>
        </a>

        <ul className="contact-socials" aria-label="Elsewhere on the internet">
          <li>
            <a href="https://www.linkedin.com/in/" target="_blank" rel="noopener">
              <span className="soc-label">LinkedIn</span>
              <span className="soc-note">Professional DMs welcome. Keep it career-related… or not.</span>
              <span className="soc-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/zelesen" target="_blank" rel="noopener">
              <span className="soc-label">GitHub</span>
              <span className="soc-note">Open source and personal projects. Maybe find this site's code.</span>
              <span className="soc-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener">
              <span className="soc-label">Instagram</span>
              <span className="soc-note">Life outside the editor. Mostly coffee and katanas.</span>
              <span className="soc-arrow" aria-hidden="true">↗</span>
            </a>
          </li>
        </ul>
      </div>

      <footer className="site-foot">
        <span><img className="glyph-compass" src="/glyph-compass.svg" alt="" width="22" height="22" loading="lazy" decoding="async" aria-hidden="true" />AMAN MAURYA <span className="jp">永遠</span> © 2026</span>
        <span>M.26 · PORTFOLIO</span>
      </footer>
    </section>
  );
}
