export default function Manifesto() {
  return (
    <section className="chapter ch-manifesto" id="ch-manifesto" data-nr="01" aria-labelledby="manifesto-title">
      {/* <img className="ornament-enso" src="/ornament-enso.svg" alt="" width="400" height="400" loading="lazy" decoding="async" aria-hidden="true" /> */}
      <div className="ch-head">
        <span className="ch-kicker"><span className="jp">一</span> · MANIFESTO</span>
        <span className="ch-meta">SO… WHY WILL YOU HIRE ME?</span>
      </div>

      <h2 id="manifesto-title" className="manifesto-head" data-text-effect="word-variation-1">
        What pulled me in.
        <span className="manifesto-jp jp" aria-hidden="true">惹</span>
      </h2>

      <figure className="manifesto-quote">
        <span className="mq-mark mq-open" aria-hidden="true">&ldquo;</span>
        <blockquote>
          <p data-scroll-reveal>
            I was drawn to a world where <em>design meets logic</em> — a space where
            I can <em>imagine and engineer entire systems</em>. That's what pulled me into
            <em>full stack development</em>.
          </p>
        </blockquote>
        <span className="mq-mark mq-close" aria-hidden="true">&rdquo;</span>
        <figcaption className="mq-attrib">
          <span className="mq-rule" aria-hidden="true"></span>
          <span className="mq-sign">AMAN · <span className="jp">志</span> · M.26</span>
          <span className="mq-rule" aria-hidden="true"></span>
        </figcaption>
      </figure>
    </section>
  );
}
