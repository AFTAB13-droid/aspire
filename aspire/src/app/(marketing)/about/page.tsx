import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | AspireMint",
  description: "Learn more about AspireMint, our mission, vision, and why we started.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>About <span>AspireMint</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>
              We don't just market — we build trust that drives sales.
            </p>
          </div>

          <div className="grid" style={{ gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
            <div>
              <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>Who <span>We Are</span></h2>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                AspireMint is a specialized marketing agency built for the modern commerce landscape. We focus purely on performance, trust, and scale across major marketplaces like Amazon, Flipkart, Meesho, and Google.
              </p>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                Our team consists of marketplace veterans, growth hackers, and reputation managers who understand exactly what it takes to make a product rank, convert, and dominate its category.
              </p>
            </div>
            <div style={{ background: 'var(--surface-black)', border: '1px solid var(--border-color)', borderRadius: '8px', padding: '3rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', backgroundColor: 'var(--primary-yellow)' }}></div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>Why We Started</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                We saw too many great brands failing simply because they didn't understand the algorithms of marketplaces or lacked the trust needed to convert visitors. AspireMint was born to bridge that gap — giving excellent products the visibility and reputation they deserve.
              </p>
            </div>
          </div>

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 className="card-title" style={{ color: 'var(--primary-yellow)', fontSize: '2rem' }}>Our Mission</h3>
              <p className="card-text" style={{ fontSize: '1.1rem' }}>
                To empower brands with data-driven strategies and authentic reputation management that directly translate to scalable, long-term revenue growth.
              </p>
            </div>
            <div className="card" style={{ padding: '3rem' }}>
              <h3 className="card-title" style={{ color: 'var(--primary-yellow)', fontSize: '2rem' }}>Our Vision</h3>
              <p className="card-text" style={{ fontSize: '1.1rem' }}>
                To be the most trusted growth partner for emerging and established brands, setting the standard for marketplace marketing globally.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
