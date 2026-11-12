import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Papers from './components/Papers.jsx';

const repositories = [
  {
    number: '01',
    name: 'RescueRoute',
    kind: 'GITHUB REPOSITORY',
    url: 'https://github.com/RishavGhosal/RescueRoute',
    note: 'A human-reviewed crisis logistics prototype that turns simulated disaster reports into ranked routes and supply recommendations.',
  },
  {
    number: '02',
    name: 'PathologyAI',
    kind: 'GITHUB REPOSITORY',
    url: 'https://github.com/RishavGhosal/PathologyAI',
    note: 'A research prototype for organizing pathology images into a human review queue with image-quality checks and reviewer feedback.',
  },
  {
    number: '03',
    name: 'Rishav Ghosal on GitHub',
    kind: 'GITHUB PROFILE',
    url: 'https://github.com/RishavGhosal',
    note: 'Browse my projects, code, and activity on GitHub.',
  },
];

function Work() {
  return (
    <section className="work section-wrap" id="work" aria-labelledby="work-title">
      <div className="section-heading">
        <div>
          <p className="eyebrow"><span>02</span> SELECTED WORK</p>
          <h2 id="work-title">Projects &amp;<br />repositories.</h2>
        </div>
        <p className="section-intro">A few of my projects and repositories on GitHub.</p>
      </div>
      <div className="repo-grid">
        {repositories.map((repo) => (
          <a className="repo-card" key={repo.number} href={repo.url} target="_blank" rel="noopener noreferrer">
            <div className="repo-card-top"><span>{repo.kind}</span><span>{repo.number}</span></div>
            <div className={`repo-art repo-art--${repo.number}`} aria-hidden="true" />
            <h3>{repo.name}</h3>
            <p className="repo-note">{repo.note}</p>
            <span className="repo-status">VIEW ON GITHUB <span aria-hidden="true">↗</span></span>
          </a>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Back to top"><span className="wordmark-mark" aria-hidden="true" /> RISHAV</a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Projects</a>
          <a href="#papers">Papers</a>
        </nav>
        <a className="header-contact" href="mailto:your.email@example.com">CONTACT <span aria-hidden="true">↗</span></a>
      </header>
      <main id="top">
        <Hero />
        <About />
        <Work />
        <Papers />
      </main>
      <footer className="site-footer">
        <a className="wordmark" href="#top"><span className="wordmark-mark" aria-hidden="true" /> RISHAV</a>
        <p>DESIGNED TO KEEP GROWING <span>© 2026</span></p>
        <a href="#top">BACK TO TOP ↑</a>
      </footer>
    </>
  );
}

export default App;
