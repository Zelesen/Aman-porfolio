export default function Kitsune() {
  return (
    <section className="chapter ch-kitsune" id="ch-kitsune" data-nr="04" aria-labelledby="kitsune-title">
      <h2 id="kitsune-title" className="sr-only">Kitsune — how I work, mapped through nine tails</h2>
      <div className="kitsune-runway">
        <div className="kitsune-stick">

          <div className="kitsune-head">
            <span className="kicker"><span className="jp">四</span> · KITSUNE · <span className="jp">九尾の狐</span></span>
            <span className="meta">HOW I WORK · IN FOUR MOVEMENTS</span>
          </div>

          <div className="kitsune-stage">

            <div className="kitsune-canvas-wrap">
              <img className="kitsune-fallback"
                   src="/kitsune-frames/frame_0001.webp"
                   alt="Sumi-e illustration of a nine-tailed kitsune spirit."
                   width="900" height="1350" />
              <canvas id="kitsune-canvas" aria-hidden="true"></canvas>
            </div>

            <div className="kitsune-story" aria-label="How I work">

              {/* 智 · layout A: eyebrow + headline LEFT, body RIGHT */}
              <article className="kitsune-chapter" data-show="0.06" data-hide="0.28">
                <div className="k-side k-side-left">
                  <div className="k-eyebrow">
                    <span className="k-kanji">智</span>
                    <span className="k-tag">Chi · Intelligence</span>
                  </div>
                  <h3 className="k-headline">
                    <span className="k-line"><span className="k-line-inner">Read the</span></span>
                    <span className="k-line"><span className="k-line-inner">unwritten.</span></span>
                  </h3>
                </div>
                <div className="k-side k-side-right">
                  <p className="k-body">
                    <span className="k-line"><span className="k-line-inner">Logic first, architecture second.</span></span>
                    <span className="k-line"><span className="k-line-inner">I map the data paths —</span></span>
                    <span className="k-line"><span className="k-line-inner">every pattern, every tell.</span></span>
                  </p>
                </div>
              </article>

              {/* 九 · layout B: body LEFT, eyebrow + headline RIGHT */}
              <article className="kitsune-chapter" data-show="0.28" data-hide="0.50">
                <div className="k-side k-side-left">
                  <p className="k-body">
                    <span className="k-line"><span className="k-line-inner">React · Node · Postgres · K8s.</span></span>
                    <span className="k-line"><span className="k-line-inner">Architecture · Scalability · DevOps.</span></span>
                    <span className="k-line"><span className="k-line-inner">Each tail earned — on purpose.</span></span>
                  </p>
                </div>
                <div className="k-side k-side-right">
                  <div className="k-eyebrow">
                    <span className="k-kanji">九</span>
                    <span className="k-tag">Kyū · Nine Tails</span>
                  </div>
                  <h3 className="k-headline">
                    <span className="k-line"><span className="k-line-inner">Nine tails,</span></span>
                    <span className="k-line"><span className="k-line-inner">one hand.</span></span>
                  </h3>
                </div>
              </article>

              {/* 霊 · layout A */}
              <article className="kitsune-chapter" data-show="0.50" data-hide="0.72">
                <div className="k-side k-side-left">
                  <div className="k-eyebrow">
                    <span className="k-kanji">霊</span>
                    <span className="k-tag">Rei · Fox-fire</span>
                  </div>
                  <h3 className="k-headline">
                    <span className="k-line"><span className="k-line-inner">Light the</span></span>
                    <span className="k-line"><span className="k-line-inner">corridor.</span></span>
                  </h3>
                </div>
                <div className="k-side k-side-right">
                  <p className="k-body">
                    <span className="k-line"><span className="k-line-inner">Debugging isn't guessing.</span></span>
                    <span className="k-line"><span className="k-line-inner">I walk the stack with a flame</span></span>
                    <span className="k-line"><span className="k-line-inner">until the bug has nowhere left.</span></span>
                  </p>
                </div>
              </article>

              {/* 神 · layout B */}
              <article className="kitsune-chapter" data-show="0.72" data-hide="0.92">
                <div className="k-side k-side-left">
                  <p className="k-body">
                    <span className="k-line"><span className="k-line-inner">Database schema to deployment.</span></span>
                    <span className="k-line"><span className="k-line-inner">System design to production —</span></span>
                    <span className="k-line"><span className="k-line-inner">without dropping a pixel.</span></span>
                  </p>
                </div>
                <div className="k-side k-side-right">
                  <div className="k-eyebrow">
                    <span className="k-kanji">神</span>
                    <span className="k-tag">Shin · Between Worlds</span>
                  </div>
                  <h3 className="k-headline">
                    <span className="k-line"><span className="k-line-inner">Carry it</span></span>
                    <span className="k-line"><span className="k-line-inner">across.</span></span>
                  </h3>
                </div>
              </article>

            </div>

          </div>

          <div className="kitsune-outro" aria-hidden="true">
            <span className="rule"></span>
            <span>NEXT · THE ROAD</span>
            <span className="rule"></span>
          </div>

        </div>
      </div>
    </section>
  );
}
