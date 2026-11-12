import './About.css';
import portrait from '../assets/rishav-profile.jpg';

export default function About() {
  return (
    <section className="about-section" id="about" aria-labelledby="about-title">
      <div className="about-inner">
        <div className="about-heading">
          <p className="about-eyebrow"><span>01</span> ABOUT ME</p>
          <h2 id="about-title">A little about <span>me.</span></h2>
        </div>

        <div className="about-content">
          <div className="about-portrait-frame">
            <img
              className="about-portrait"
              src={portrait}
              alt="Rishav looking toward the sunset on a city street"
            />
            <span className="about-portrait-caption">A MOMENT IN SEATTLE</span>
          </div>

          <div className="about-copy">
            <p className="about-lead">
              I’m <span className="about-name-placeholder">Rishav</span> — welcome to my corner of the internet.
            </p>
            <p>
              This is where I’ll share a little about myself, the questions I’m curious about,
              and the things I’m building. More about my background and interests is coming soon.
            </p>
            <div className="about-project-note">
              <span className="about-project-index" aria-hidden="true">↳</span>
              <div>
                <p className="about-project-label">ALGOVERSE AI RESEARCH</p>
                <p className="about-project-title">Chest X-ray AI fairness</p>
                <p className="about-project-description">
                  I’m studying whether age differences contribute to sex-based gaps in false negatives from chest X-ray AI. My project develops and evaluates ASBDC, a post-processing framework comparing age standardization and age-conditioned calibration on NIH ChestX-ray14 and CheXpert models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
