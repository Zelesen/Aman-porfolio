export default function About() {
  return (
    <section className="chapter ch-about" id="ch-about" data-nr="02" aria-labelledby="about-title">
      {/* Dragon stage with WebGL canvas */}
      <div className="dragon-stage" id="dragon-stage" aria-hidden="true">
        <canvas id="dragon-fx" aria-hidden="true"></canvas>
        <div className="dragon-fallback">
          <img className="dragon-base" src="/dragon-skitched.webp" alt="" decoding="async" loading="lazy" width="1536" height="1024" />
          <img className="dragon-reveal" src="/dragon-filled.webp" alt="" decoding="async" loading="lazy" width="1536" height="1024" />
        </div>
        <div className="dragon-hover-zone" role="presentation"></div>
      </div>

      {/* Background rings */}
      <div className="bg-rings" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#5A0711" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M 1440 500 C 1440 461, 1400 430, 1350 430 C 1300 430, 1260 461, 1260 500 C 1260 539, 1300 570, 1350 570 C 1400 570, 1440 539, 1440 500 Z" />
          <path d="M 1510 500 C 1510 431, 1438 375, 1350 375 C 1262 375, 1190 431, 1190 500 C 1190 569, 1262 625, 1350 625 C 1438 625, 1510 569, 1510 500 Z" opacity="0.78" />
          <path d="M 1585 500 C 1585 399, 1480 317, 1350 317 C 1220 317, 1115 399, 1115 500 C 1115 601, 1220 683, 1350 683 C 1480 683, 1585 601, 1585 500 Z" opacity="0.66" />
          <path d="M 1665 500 C 1665 364, 1524 254, 1350 254 C 1176 254, 1035 364, 1035 500 C 1035 636, 1176 746, 1350 746 C 1524 746, 1665 636, 1665 500 Z" opacity="0.54" />
          <path d="M 1750 500 C 1750 328, 1571 188, 1350 188 C 1129 188, 950 328, 950 500 C 950 672, 1129 812, 1350 812 C 1571 812, 1750 672, 1750 500 Z" opacity="0.44" />
          <path d="M 1840 500 C 1840 289, 1621 118, 1350 118 C 1079 118, 860 289, 860 500 C 860 711, 1079 882, 1350 882 C 1621 882, 1840 711, 1840 500 Z" opacity="0.36" />
          <path d="M 1940 500 C 1940 246, 1676 40, 1350 40 C 1024 40, 760 246, 760 500 C 760 754, 1024 960, 1350 960 C 1676 960, 1940 754, 1940 500 Z" opacity="0.28" />
          <path d="M 2050 500 C 2050 199, 1737 -46, 1350 -46 C 963 -46, 650 199, 650 500 C 650 801, 963 1046, 1350 1046 C 1737 1046, 2050 801, 2050 500 Z" opacity="0.2" />
        </svg>
      </div>

      <div className="ch-head">
        <span className="ch-kicker"><span className="jp">二</span> · ABOUT</span>
        <span className="ch-meta">M.26 · 生きてる</span>
      </div>

      <h2 id="about-title" className="ch-hero-line fit-line" data-text-effect="char-variation-5">I&nbsp;AM&nbsp;STILL&nbsp;ALIVE.</h2>

      <div className="about-grid">
        <div className="about-copy">
          <p className="lede">
            Full Stack Developer. Based in <em>Vashi - MUmbai</em>. Survived 3 years of school,
            mastered 2 years of full-stack engineering. Still debugging my life.
          </p>
          <p>
            I build systems the way a sword gets forged — slow, obsessive, a little dramatic.
            Scalable backends, robust APIs, and the precise motion of the UI that binds them together.
          </p>
        </div>

        <aside className="about-chips" aria-label="Quick facts">
          <dl>
            <div><dt>LOCATION</dt><dd>Vashi - Mumbai <span className="jp">ムンバイ</span></dd></div>
            <div><dt>ROLE</dt><dd>Full Stack Engineer</dd></div>
            <div><dt>YEARS</dt><dd>2+ in the craft</dd></div>
            <div><dt>STATUS</dt><dd><span className="dot"></span> Available for work · 2026</dd></div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
