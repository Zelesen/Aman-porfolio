import { useEffect, useState } from "react";
import Hero from "./Hero";
import Manifesto from "./Manifesto";
import SamuraiSlash from "./SamuraiSlash";
import About from "./About";
import Numbers from "./Numbers";
import Kitsune from "./Kitsune";
import ChapterDivider from "./ChapterDivider";
import Hitomi from "./Hitomi";
import CTA from "./CTA";
import Contact from "./Contact";

export default function Layout() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);

  useEffect(() => {
    const btnMenu = document.getElementById("btn-menu");
    const drawerScrim = document.getElementById("drawer-scrim");
    const drawer = document.getElementById("site-drawer");
    const drawerClose = document.getElementById("drawer-close");
    const audioToggle = document.getElementById("audio-toggle");
    const themeAudio = document.getElementById("theme-audio");

    const openDrawer = () => {
      setDrawerOpen(true);
      if (drawer) {
        drawer.setAttribute("aria-hidden", "false");
        drawer.dataset.open = "true";
      }
      if (btnMenu) btnMenu.setAttribute("aria-expanded", "true");
      if (drawerScrim) drawerScrim.removeAttribute("hidden");
    };

    const closeDrawer = () => {
      setDrawerOpen(false);
      if (drawer) {
        drawer.setAttribute("aria-hidden", "true");
        drawer.removeAttribute("data-open");
      }
      if (btnMenu) btnMenu.setAttribute("aria-expanded", "false");
      if (drawerScrim) drawerScrim.setAttribute("hidden", "");
    };

    // Menu button handler
    if (btnMenu) {
      btnMenu.addEventListener("click", openDrawer);
    }

    if (drawerClose) drawerClose.addEventListener("click", closeDrawer);
    if (drawerScrim) drawerScrim.addEventListener("click", closeDrawer);

    // Audio toggle handler
    const toggleAudio = () => {
      setAudioEnabled(!audioEnabled);
      if (themeAudio) {
        if (!audioEnabled) {
          themeAudio.play().catch(() => {
            // Autoplay might be blocked by browser
          });
          audioToggle.setAttribute("aria-pressed", "true");
        } else {
          themeAudio.pause();
          audioToggle.setAttribute("aria-pressed", "false");
        }
      }
    };

    if (audioToggle) audioToggle.addEventListener("click", toggleAudio);

    return () => {
      if (btnMenu) btnMenu.removeEventListener("click", openDrawer);
      if (drawerClose) drawerClose.removeEventListener("click", closeDrawer);
      if (drawerScrim) drawerScrim.removeEventListener("click", closeDrawer);
      if (audioToggle) audioToggle.removeEventListener("click", toggleAudio);
    };
  }, [audioEnabled]);

  return (
    <>
      {/* PRELOADER */}
      <div id="preloader" className="preloader" role="progressbar" aria-busy="true"
           aria-label="Loading portfolio — assemble in progress">
        <canvas className="preloader-canvas" aria-hidden="true"></canvas>
        <div className="p-halo" aria-hidden="true"></div>

        <div className="preloader-ui">
          <div className="p-tl">
            <span className="kanji">零</span>
            <span className="label">
              <span>CHAPTER</span>
              <b>00 / ENTERING</b>
            </span>
          </div>

          <div className="p-tr">
            <span className="pulse"><b>BUILD · M.26</b></span>
            <span>AMAN MAURYA / 2026</span>
          </div>

          <div className="p-bl">
            <div className="preloader-pct">
              <span className="num">000</span><span className="sign">%</span>
            </div>
            <div className="stack">
              <span><b>ASSEMBLING</b></span>
              <span className="divider"></span>
              <span>SHADERS · PORTRAIT</span>
            </div>
          </div>

          <div className="p-br">
            <div className="kanji"><span className="jp">散華</span>SANGE · PETALS SCATTER</div>
            <div className="preloader-bar"></div>
            <div className="hint">TAP TO ENTER · AUDIO ON FOR FULL EXPERIENCE</div>
          </div>
        </div>
      </div>

      {/* AUDIO TOGGLE */}
      <audio id="theme-audio" src="/theme-shamisen.mp3" loop preload="auto" aria-hidden="true"></audio>
      <button id="audio-toggle" className="audio-toggle" type="button" aria-label="Toggle audio" aria-pressed="false">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path className="ico-on" d="M4 10v4h4l5 4V6L8 10H4z M16 8a5 5 0 0 1 0 8 M19 5a9 9 0 0 1 0 14" />
          <path className="ico-off" d="M4 10v4h4l5 4V6L8 10H4z M17 9l5 6 M22 9l-5 6" />
        </svg>
      </button>

      <main role="main">
        {/* HERO SECTION */}
        <Hero />

        {/* MANIFESTO / CHAPTER 01 */}
        <Manifesto />

        {/* SAMURAI SLASH DIVIDER */}
        <SamuraiSlash />

        {/* ABOUT / CHAPTER 02 */}
        <About />

        {/* NUMBERS / CHAPTER 03 */}
        <Numbers />

        {/* KITSUNE / CHAPTER 04 */}
        <Kitsune />

      

        {/* CHAPTER DIVIDER */}
        <ChapterDivider />

        {/* HITOMI / CHAPTER 06 */}
        <Hitomi />

        {/* CTA / CHAPTER 07 */}
        <CTA />

        {/* CONTACT/BOOK / CHAPTER 08 */}
        <Contact />

        {/* DOCUMENT-LEVEL OVERLAYS */}
        <div className="grain" aria-hidden="true"></div>

        {/* CHAPTER COUNTER RAIL */}
        <nav className="chapter-rail" aria-label="Chapter counter">
          <ol>
            <li data-ch="0" className="is-active"><a href="#hero"><span className="ch-num jp">零</span><span className="ch-label">HERO</span></a></li>
            <li data-ch="1"><a href="#ch-manifesto"><span className="ch-num jp">一</span><span className="ch-label">MANIFESTO</span></a></li>
            <li data-ch="2"><a href="#ch-about"><span className="ch-num jp">二</span><span className="ch-label">ABOUT</span></a></li>
            <li data-ch="3"><a href="#ch-numbers"><span className="ch-num jp">三</span><span className="ch-label">NUMBERS</span></a></li>
            <li data-ch="4"><a href="#ch-kitsune"><span className="ch-num jp">四</span><span className="ch-label">KITSUNE</span></a></li>
            <li data-ch="6"><a href="#ch-hitomi"><span className="ch-num jp">六</span><span className="ch-label">HITOMI</span></a></li>
            <li data-ch="7"><a href="#ch-cta"><span className="ch-num jp">七</span><span className="ch-label">READY</span></a></li>
            <li data-ch="8"><a href="#ch-contact"><span className="ch-num jp">八</span><span className="ch-label">BOOK</span></a></li>
          </ol>
        </nav>
      </main>

      {/* DRAWER NAVIGATION */}
      <div className="drawer-scrim" id="drawer-scrim" hidden></div>
      <aside className="drawer" id="site-drawer" role="dialog" aria-modal="true"
             aria-labelledby="drawer-title" aria-hidden="true">
          <div className="drawer-content" id="drawer-content">
          <div className="drawer-strips" aria-hidden="true">
            <i></i><i></i><i></i><i></i><i></i>
          </div>
          <button className="drawer-close" id="drawer-close" type="button" aria-label="Close menu">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6 L18 18" />
              <path d="M18 6 L6 18" />
            </svg>
          </button>
          <header className="drawer-head">
            <span id="drawer-title"><span className="jp">目次</span>Index · M/26</span>
            <span>Portfolio — AMAN MAURYA</span>
          </header>
          <nav className="drawer-nav" aria-label="Primary drawer navigation">
            <ol>
              <li><a href="#hero"><span className="nav-jp">零</span><span className="nav-label" data-text="HOME">HOME</span><span className="nav-num">00</span></a></li>
              <li><a href="#ch-manifesto"><span className="nav-jp">一</span><span className="nav-label" data-text="MANIFESTO">MANIFESTO</span><span className="nav-num">01</span></a></li>
              <li><a href="#ch-about"><span className="nav-jp">二</span><span className="nav-label" data-text="ABOUT">ABOUT</span><span className="nav-num">02</span></a></li>
              <li><a href="#ch-numbers"><span className="nav-jp">三</span><span className="nav-label" data-text="NUMBERS">NUMBERS</span><span className="nav-num">03</span></a></li>
              <li><a href="#ch-kitsune"><span className="nav-jp">四</span><span className="nav-label" data-text="KITSUNE">KITSUNE</span><span className="nav-num">04</span></a></li>
              <li><a href="#ch-contact"><span className="nav-jp">八</span><span className="nav-label" data-text="CONTACT">CONTACT</span><span className="nav-num">08</span></a></li>
            </ol>
          </nav>
          <footer className="drawer-meta">
            <span className="avail"><span className="dot" aria-hidden="true"></span>Available for work · 2026</span>
            <ul>
              <li><a href="https://www.instagram.com/" target="_blank" rel="noopener" aria-label="Instagram">IG</a></li>
              <li><a href="https://github.com/" target="_blank" rel="noopener" aria-label="GitHub">GH</a></li>
              <li><a href="https://www.linkedin.com/in/" target="_blank" rel="noopener" aria-label="LinkedIn">IN</a></li>
            </ul>
          </footer>
        </div>
      </aside>
    </>
  );
}
