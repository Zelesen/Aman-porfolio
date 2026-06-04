import "./Hero.css";
import { useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/assets/main.js"; // or your real file name
    script.type = "module"; // 🔥 THIS IS THE FIX

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
    }, []);
  return (
    <section className="hero" id="hero" aria-label="AMAN hero introduction">
      {/* Background topographic brush lines */}
      <div className="bg-topo" aria-hidden="true">
        <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" fill="none" stroke="#5A0711" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M-100 120 C 260 60, 540 220, 820 180 S 1380 60, 1720 180 S 2100 320, 2200 260" />
          <path d="M-100 240 C 280 180, 600 340, 900 300 S 1440 180, 1780 300 S 2120 440, 2200 380" opacity="0.75" />
          <path d="M-120 360 C 300 300, 640 460, 960 420 S 1500 300, 1840 420 S 2140 560, 2240 500" opacity="0.6" />
          <path d="M-140 480 C 320 420, 680 580, 1020 540 S 1560 420, 1900 540 S 2160 680, 2260 620" opacity="0.5" />
          <path d="M-160 600 C 340 540, 720 700, 1080 660 S 1620 540, 1960 660 S 2180 800, 2280 740" opacity="0.6" />
          <path d="M-180 720 C 360 660, 760 820, 1140 780 S 1680 660, 2020 780 S 2200 920, 2300 860" opacity="0.75" />
          <path d="M-200 840 C 380 780, 800 940, 1200 900 S 1740 780, 2080 900 S 2220 1040, 2320 980" opacity="0.55" />
          <path d="M-220 960 C 400 900, 840 1060, 1260 1020 S 1800 900, 2140 1020 S 2240 1160, 2340 1100" opacity="0.4" />
        </svg>
      </div>

      {/* Vertical vermillion seam */}
      <div className="bg-seam" aria-hidden="true"></div>

      {/* Cherry blossom silhouette petals (samurai side) */}
      <div className="bg-petals" aria-hidden="true">
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
        <span className="petal"></span>
      </div>

      {/* Top-left wordmark */}
      <div className="wordmark">
        <span className="line-1" data-text-effect="char-variation-5">AMAN</span>
        <span className="line-2" data-text-effect="char-variation-5">MAURYA</span>
        <span className="meta">Portfolio · M.26</span>
      </div>

      {/* Top-right navigation */}
      <nav className="top-nav" aria-label="Primary">
        <button className="btn-menu" id="btn-menu" aria-label="Open menu" aria-controls="site-drawer" aria-expanded="false">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M5 9 H19" />
            <path d="M5 15 H19" />
          </svg>
        </button>
      </nav>

      {/* Side label */}
      <div className="side-label side-r">Move to shift the reveal&nbsp;&nbsp;<span>◎</span></div>

      {/* Oversized background wordmark */}
      <div className="big-name" aria-hidden="true" data-text-effect="word-variation-1">AMAN&nbsp;MAURYA</div>

      {/* Diagonal marquee field */}
      <div className="mq-field" aria-hidden="true">
        <div className="mq mq-2"><div className="mq-track">
          <span>FRONTEND AS RITUAL</span><i className="sep"></i>
          <span className="jp">執念</span><i className="sep"></i>
          <span>CRAFT OVER HYPE</span><i className="sep"></i>
          <span className="jp">美学</span><i className="sep"></i>
          <span>EGO SOLD SEPARATELY</span><i className="sep"></i>
          <span className="jp">孤高</span><i className="sep"></i>
          <span>AMAN MAURYA</span><i className="sep"></i>
          <span className="jp">覚悟</span><i className="sep"></i>
          <span>THE FUTURE WEARS A MASK</span><i className="sep"></i>
          <span className="jp">侍</span><i className="sep"></i>
        </div></div>

        <div className="mq mq-5"><div className="mq-track">
          <span>ONE TAKE ONE CUT</span><i className="sep"></i>
          <span className="jp">覇王</span><i className="sep"></i>
          <span>PIXELS ARE A PROMISE</span><i className="sep"></i>
          <span className="jp">無双</span><i className="sep"></i>
          <span>HIRE ONCE</span><i className="sep"></i>
          <span className="jp">魂</span><i className="sep"></i>
          <span>CODE LIKE A SAMURAI</span><i className="sep"></i>
          <span className="jp">斬</span><i className="sep"></i>
          <span>NO SECOND TRY</span><i className="sep"></i>
          <span className="jp">決意</span><i className="sep"></i>
        </div></div>
      </div>

      {/* THE INTERACTIVE PORTRAIT STAGE */}
      <div className="portrait-stage" id="portrait-stage">
        <div className="samurai-wings" aria-hidden="true">
          <img className="wing wing-l" src="/sword.webp" alt="" decoding="async" />
          <img className="wing wing-r" src="/sword.webp" alt="" decoding="async" />
        </div>

        <canvas id="hero-fx" aria-hidden="true"></canvas>

        <div className="portrait-fallback" aria-hidden="false">
          <img className="layer-base" src="/mina-samurai.webp" alt="AMAN MAURYA as a samurai warrior wearing a black menpō mask" decoding="async" fetchPriority="high" />
          <img className="layer-reveal" src="/mina-modern.webp" alt="" aria-hidden="true" decoding="async" fetchPriority="high" />
        </div>

        <div className="hover-zones">
          <button className="zone" aria-label="Move pointer to shift the samurai reveal"></button>
        </div>
      </div>

      {/* Bottom-right availability badge */}
      <div className="avail-badge" role="status" aria-live="polite">
        <span className="dot" aria-hidden="true"></span>
        <span className="label">Available for work · 2026</span>
      </div>
    </section>
  );
}