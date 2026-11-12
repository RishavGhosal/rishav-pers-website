import "./Papers.css";

const papers = [
  {
    number: "01",
    name: "IT2FIS",
    title: "Interval Type-2 Fuzzy Inference Systems",
    summary:
      "This work explores interval type-2 fuzzy inference systems, a fuzzy-logic approach for reasoning when the boundaries of category membership are uncertain.",
    status: "LINK COMING SOON",
  },
  {
    number: "02",
    name: "scRNA-seq",
    title: "Synthetic single-cell expression data",
    summary:
      "This project explores generating synthetic single-cell RNA-seq data with scGFT and scDesign3 using Tabula Muris data. I evaluate whether generated cells retain gene-expression patterns and neighborhood structure from the original data.",
    status: "LINK COMING SOON",
  },
  {
    number: "03",
    name: "Algoverse · Medical AI",
    title:
      "Measuring Sex Disparities in Chest X-Ray AI Systems under Age Calibration with a Permuted Age Control",
    summary:
      "This paper studies whether age standardization and age-conditioned calibration change observed sex disparities in false negatives from chest X-ray AI. A permuted-age control helps test whether any apparent benefit comes from meaningful age information rather than the calibration process alone.",
    status: "LINK COMING SOON",
  },
];

export default function Papers() {
  return (
    <section className="papers-section" id="papers" aria-labelledby="papers-title">
      <div className="papers-inner">
        <div className="papers-heading">
          <p className="papers-eyebrow"><span aria-hidden="true">03</span> SELECTED WRITING</p>
          <h2 className="papers-title" id="papers-title">Research &amp; papers<span>.</span></h2>
          <p className="papers-intro">
            Research spanning fuzzy systems, medical AI, and synthetic single-cell data.
          </p>
        </div>

        <div className="papers-list">
          {papers.map((paper) => (
            <article className="paper-card" key={paper.name}>
              <span className="paper-number" aria-hidden="true">{paper.number}</span>
              <div className="paper-content">
                <p className="paper-topic">{paper.name}</p>
                <h3 className="paper-title">{paper.title}</h3>
                <p className="paper-summary">{paper.summary}</p>
              </div>
              <span className="paper-link-placeholder" aria-label={`${paper.name}: ${paper.status.toLowerCase()}`}>
                {paper.status}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

