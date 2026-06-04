export default function Numbers() {
  return (
    <section className="chapter ch-numbers" id="ch-numbers" data-nr="03" aria-labelledby="numbers-title">
      <div className="bg-seigaiha-strip" aria-hidden="true"></div>
      <div className="ch-head">
        <span className="ch-kicker"><span className="jp">三</span> · <span className="jp">数字</span> · BY THE NUMBERS</span>
        <span className="ch-meta">TALLIED SO&nbsp;FAR</span>
      </div>

      <h2 id="numbers-title" className="sr-only">By the numbers</h2>

      <ul className="stat-grid">
        <li className="stat">
          <span className="stat-value" data-count="2">2</span>
          <span className="stat-label">Rotational Courses</span>
          <span className="stat-note">Still waiting for my Oscar.</span>
        </li>
        <li className="stat">
          <span className="stat-value" data-count="36">36<sup>+</sup></span>
          <span className="stat-label">Open-Source Contributions</span>
          <span className="stat-note">Giving back to the community.</span>
        </li>
        <li className="stat">
          <span className="stat-value" data-count="50">50<sup>+</sup></span>
          <span className="stat-label">Projects Completed</span>
          <span className="stat-note">Turning ideas into reality.</span>
        </li>
        <li className="stat stat-inf">
          <span className="stat-value" aria-label="Infinite">
            <svg className="stat-infinity" viewBox="0 0 200 100" aria-hidden="true" focusable="false">
              <path d="M50,50 C50,22 90,22 100,50 C110,78 150,78 150,50 C150,22 110,22 100,50 C90,78 50,78 50,50 Z"
                    fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </span>
          <span className="stat-label">Cups of Coffee</span>
          <span className="stat-note">Fueled by caffeine &amp; creativity.</span>
        </li>
      </ul>
    </section>
  );
}
