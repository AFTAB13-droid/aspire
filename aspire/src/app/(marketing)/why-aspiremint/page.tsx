import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Why AspireMint | The Elite Growth Partner",
  description: "Discover why top brands choose AspireMint over traditional marketing agencies.",
};

export default function WhyAspireMintPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <div style={{ display: 'inline-block', padding: '0.5rem 1.2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', background: 'rgba(255,255,255,0.03)', marginBottom: '1.5rem' }}>
              <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#ccc' }}>
                Stop Burning Money
              </span>
            </div>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Why <span className="text-gradient-yellow">AspireMint?</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: '700px' }}>
              The traditional marketing agency model is broken. They charge you for "brand awareness" and deliver zero ROI. We do things differently.
            </p>
          </div>

          {/* Comparison Table Section */}
          <div style={{ marginBottom: '8rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>The <span className="text-gradient-yellow">Difference</span></h2>
            
            <div style={{ background: 'var(--surface-black)', borderRadius: '16px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', background: '#0a0a0a', padding: '1.5rem', borderBottom: '1px solid #222', fontWeight: 600 }}>
                <div style={{ color: '#fff' }}>Metric</div>
                <div style={{ color: '#888' }}>Traditional Agencies</div>
                <div style={{ color: 'var(--primary-yellow)' }}>AspireMint</div>
              </div>
              
              {[
                { metric: "Primary Focus", trad: "Vanity Metrics (Likes/Views)", aspire: "Hard ROI & Revenue Growth" },
                { metric: "Algorithm Knowledge", trad: "Basic SEO", aspire: "Deep A9 & Flipkart Algorithm Engineering" },
                { metric: "Transparency", trad: "Vague Monthly Reports", aspire: "Real-time Live Analytics Dashboard" },
                { metric: "Speed of Execution", trad: "Weeks of planning", aspire: "Rapid Deployment & Testing" },
                { metric: "Reputation", trad: "Ignored", aspire: "Active 5-Star Generation & Defense" }
              ].map((row, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', padding: '1.5rem', borderBottom: '1px solid #1a1a1a', alignItems: 'center' }}>
                  <div style={{ color: '#ccc', fontWeight: 500 }}>{row.metric}</div>
                  <div style={{ color: '#666', textDecoration: 'line-through' }}>{row.trad}</div>
                  <div style={{ color: '#fff', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: 'var(--primary-yellow)' }}>✓</span> {row.aspire}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Growth Engine Methodology */}
          <div style={{ marginBottom: '6rem' }}>
            <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '4rem' }}>Our Proven <span className="text-gradient-yellow">Growth Engine</span></h2>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
              {[
                { step: "01", title: "The Deep Audit", desc: "We don't guess. We analyze your current listings, competitor ASINs, keyword gaps, and brand reputation to find exactly where you are losing money." },
                { step: "02", title: "The Optimization Phase", desc: "We deploy high-converting copy, optimized A+ content, and strategic PPC campaigns designed specifically to trick the marketplace algorithm into prioritizing your product." },
                { step: "03", title: "The Authority Flywheel", desc: "Once ranking improves, we inject targeted micro-influencer traffic and deploy our review-generation system to solidify your product as the absolute market leader." }
              ].map((item, idx) => (
                <div key={idx} style={{ display: 'flex', gap: '2rem', background: 'var(--surface-black)', padding: '2.5rem', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
                  <div style={{ fontSize: '3rem', fontWeight: 900, color: 'rgba(255,215,0,0.2)', fontFamily: 'Outfit', lineHeight: 1 }}>{item.step}</div>
                  <div>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '0.75rem', color: '#fff' }}>{item.title}</h3>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ textAlign: 'center', background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.9))', padding: '5rem 2rem', borderRadius: '24px', border: '1px solid rgba(255,215,0,0.2)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff' }}>Stop Losing Sales to Inferior Competitors</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>Let's build a custom growth architecture for your brand today.</p>
            <Link href="/contact" className="btn-premium" style={{ background: 'var(--primary-yellow)', color: '#000', padding: '1rem 3rem', fontSize: '1.1rem' }}>
              Claim Your Free Audit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
