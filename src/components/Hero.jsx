import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="home" aria-labelledby="hero-title">
      <div className="hero__inner">
        <div className="hero__copy">
          <p className="hero__eyebrow"><span className="hero__status-dot" /> PERSONAL PORTFOLIO <span className="hero__eyebrow-divider">/</span> LLM SECURITY</p>
          <h1 id="hero-title">Hello, I’m<br /><span>Rishav</span></h1>
          <p className="hero__intro">I’m getting into LLM security, especially abliteration, and exploring how model behavior and safeguards can be understood.</p>
          <div className="hero__actions">
            <a className="hero__button hero__button--primary" href="#work">Explore my work <span aria-hidden="true">↘</span></a>
            <a className="hero__button hero__button--secondary" href="#papers">Read my papers <span aria-hidden="true">↗</span></a>
          </div>
          <p className="hero__note"><span aria-hidden="true">●</span> Learning by researching, building, and testing ideas.</p>
        </div>
        <div className="hero__visual" aria-hidden="true">
          <div className="hero__visual-orb hero__visual-orb--one" />
          <div className="hero__visual-orb hero__visual-orb--two" />
          <div className="hero__focus-card hero__focus-card--security">
            <span>AREA OF INTEREST</span>
            <strong>LLM<br />SECURITY</strong>
          </div>
          <div className="hero__focus-card hero__focus-card--abliteration">
            <span>CURRENTLY EXPLORING</span>
            <strong>Abliteration</strong>
          </div>
          <div className="hero__visual-note">CURIOUS BY DESIGN</div>
        </div>
      </div>
      <div className="hero__footer">
        <span>PORTFOLIO / 2026</span>
        <a href="#about">SCROLL TO DISCOVER <span aria-hidden="true">↓</span></a>
        <span>01 — 04</span>
      </div>
    </section>
  );
}
