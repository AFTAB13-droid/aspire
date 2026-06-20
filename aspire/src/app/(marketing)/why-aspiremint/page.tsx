import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why AspireMint | AspireMint",
  description: "Discover why top brands choose AspireMint for their marketplace growth and reputation management.",
};

export default function WhyAspireMintPage() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Why <span>AspireMint</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            The premier choice for brands that demand performance, transparency, and scale.
          </p>
        </div>

        <div className="grid" style={{ gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>The <span>AspireMint Advantage</span></h2>
            <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              We don't just execute campaigns; we architect growth engines. Our data-driven approach ensures that every decision maximizes your ROI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
