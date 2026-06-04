export default function Hitomi() {
  return (
    <section className="chapter ch-hitomi" id="ch-hitomi" data-nr="06" aria-labelledby="hitomi-title">
      <h2 id="hitomi-title" className="sr-only">Hitomi — inspirations that pass through the eye</h2>
      <div className="hitomi-runway">
        <div className="hitomi-stick">

          <div className="hitomi-head">
            <span className="kicker"><span className="jp">六</span> · HITOMI · <span className="jp">瞳に映る</span></span>
            <span className="meta">INSPIRATIONS · FOUR REFLECTIONS</span>
          </div>

          <div className="hitomi-stage">

            <div className="hitomi-canvas-wrap">
              <img className="hitomi-fallback"
                   src="/inspiration-frames/frame_0001.webp"
                   alt="Close-up of an eye, reflecting complex system architectures and interfaces."
                   width="1400" height="628" />
              <canvas id="hitomi-canvas" aria-hidden="true"></canvas>
            </div>
            <div className="hitomi-overlay" aria-hidden="true"></div>

            <div className="hitomi-story" aria-label="What I watch, what I keep">

              {/* 映 · layout A: eyebrow + headline LEFT, body RIGHT */}
              <article className="hitomi-chapter" data-show="0.06" data-hide="0.28">
                <div className="h-side h-side-left">
                  <div className="h-eyebrow">
                    <span className="h-kanji">映</span>
                    <span className="h-tag">Utsu · Reflect</span>
                  </div>
                  <h3 className="h-headline">
                    <span className="h-line"><span className="h-line-inner">Data flows,</span></span>
                    <span className="h-line"><span className="h-line-inner">UI reflects.</span></span>
                  </h3>
                </div>
                <div className="h-side h-side-right">
                  <p className="h-body">
                    <span className="h-line"><span className="h-line-inner">Every architecture I've studied,</span></span>
                    <span className="h-line"><span className="h-line-inner">every logic gate I've closed —</span></span>
                    <span className="h-line"><span className="h-line-inner">the eye doesn't forget.</span></span>
                  </p>
                </div>
              </article>

              {/* 観 · layout B: body LEFT, eyebrow + headline RIGHT */}
              <article className="hitomi-chapter" data-show="0.28" data-hide="0.50">
                <div className="h-side h-side-left">
                  <p className="h-body">
                    <span className="h-line"><span className="h-line-inner">System Design · Distributed Systems.</span></span>
                    <span className="h-line"><span className="h-line-inner">AWS · Redis · Docker.</span></span>
                    <span className="h-line"><span className="h-line-inner">Studying how the systems scale.</span></span>
                  </p>
                </div>
                <div className="h-side h-side-right">
                  <div className="h-eyebrow">
                    <span className="h-kanji">観</span>
                    <span className="h-tag">Kan · Observe</span>
                  </div>
                  <h3 className="h-headline">
                    <span className="h-line"><span className="h-line-inner">Watch</span></span>
                    <span className="h-line"><span className="h-line-inner">the masters.</span></span>
                  </h3>
                </div>
              </article>

              {/* 蔵 · layout A */}
              <article className="hitomi-chapter" data-show="0.50" data-hide="0.72">
                <div className="h-side h-side-left">
                  <div className="h-eyebrow">
                    <span className="h-kanji">蔵</span>
                    <span className="h-tag">Kura · Archive</span>
                  </div>
                  <h3 className="h-headline">
                    <span className="h-line"><span className="h-line-inner">A library</span></span>
                    <span className="h-line"><span className="h-line-inner">behind the eyes.</span></span>
                  </h3>
                </div>
                <div className="h-side h-side-right">
                  <p className="h-body">
                    <span className="h-line"><span className="h-line-inner">Micro-interactions I've saved.</span></span>
                    <span className="h-line"><span className="h-line-inner">Easings I've stolen with my eyes.</span></span>
                    <span className="h-line"><span className="h-line-inner">Quiet details, archived.</span></span>
                  </p>
                </div>
              </article>

              {/* 創 · layout B */}
              <article className="hitomi-chapter" data-show="0.72" data-hide="0.92">
                <div className="h-side h-side-left">
                  <p className="h-body">
                    <span className="h-line"><span className="h-line-inner">Everything I've seen</span></span>
                    <span className="h-line"><span className="h-line-inner">comes back as my work —</span></span>
                    <span className="h-line"><span className="h-line-inner">reflected, rebuilt, released.</span></span>
                  </p>
                </div>
                <div className="h-side h-side-right">
                  <div className="h-eyebrow">
                    <span className="h-kanji">創</span>
                    <span className="h-tag">Sō · Forge</span>
                  </div>
                  <h3 className="h-headline">
                    <span className="h-line"><span className="h-line-inner">Then</span></span>
                    <span className="h-line"><span className="h-line-inner">I forge mine.</span></span>
                  </h3>
                </div>
              </article>

            </div>
          </div>

          <div className="hitomi-outro" aria-hidden="true">
            <span className="rule"></span>
            <span>NEXT · THE TIME</span>
            <span className="rule"></span>
          </div>

        </div>
      </div>
    </section>
  );
}
