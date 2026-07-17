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

          <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '6rem' }}>
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

          {/* New Data & Stats Section */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">The Data Behind <span className="text-gradient-yellow">AspireMint</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Numbers speak louder than words. Here is the scale at which we operate.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
            {[
              { number: "₹50Cr+", label: "Client Revenue Generated" },
              { number: "120+", label: "Brands Scaled" },
              { number: "98%", label: "Client Retention Rate" },
              { number: "5M+", label: "Reviews Managed" }
            ].map((stat, idx) => (
              <div key={idx} style={{ background: 'var(--surface-black)', padding: '3rem 2rem', borderRadius: '16px', textAlign: 'center', border: '1px solid rgba(255,215,0,0.1)' }}>
                <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-yellow)', fontFamily: 'Outfit', marginBottom: '1rem' }}>{stat.number}</div>
                <div style={{ color: '#aaa', fontSize: '1.1rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
          </div>


          {/* Unique Core DNA Bento Grid */}
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="section-title">Our <span className="text-gradient-yellow">Core DNA</span></h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>What makes AspireMint completely different from traditional marketing agencies.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            <div className="glass-card" style={{ gridColumn: 'span 8', padding: '3rem', background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.9))' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>1. Algorithm-First Engineering</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>We don't guess. We reverse-engineer the A9 (Amazon) and Flipkart search algorithms. We know exactly which keywords trigger visibility and how to manipulate conversion rates to force organic ranking.</p>
            </div>
            <div className="glass-card" style={{ gridColumn: 'span 4', padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>2. Zero BS</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>No vanity metrics. No "brand awareness" fluff. If it doesn't generate ROI or directly improve your conversion rate, we don't do it.</p>
            </div>
            <div className="glass-card" style={{ gridColumn: 'span 12', padding: '3rem', border: '1px solid rgba(255,215,0,0.2)', background: 'rgba(255,215,0,0.02)' }}>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--primary-yellow)' }}>3. The Growth Ecosystem</h3>
              <p style={{ color: '#fff', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '800px' }}>While other agencies focus on just one thing, we build a flywheel. Influencer traffic drives sales, sales drive algorithm ranking, ranking drives organic traffic, and managed reviews drive conversions. It's a closed-loop system designed for absolute market dominance.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
