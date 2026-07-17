import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories & Case Studies | AspireMint",
  description: "Real data, real growth. See how AspireMint scales e-commerce brands.",
};

const caseStudies = [
  {
    title: "Scaling a Beauty Brand to ₹1.5Cr/Month",
    category: "Amazon SEO & PPC",
    metrics: [
      { label: "Revenue Growth", value: "+450%" },
      { label: "ACoS Reduction", value: "-22%" },
      { label: "Timeframe", value: "4 Months" }
    ],
    description: "This organic beauty brand had a great product but zero visibility on Amazon. We completely revamped their listing SEO, optimized A+ content, and restructured their PPC campaigns to aggressively target competitor ASINs. The result was category dominance within 120 days.",
  },
  {
    title: "Fixing Reputation for a Tech Gadget Startup",
    category: "Reputation Management",
    metrics: [
      { label: "Rating Increase", value: "3.2 to 4.7" },
      { label: "Positive Reviews", value: "+1,200" },
      { label: "Conversion Rate", value: "+3x" }
    ],
    description: "A bad batch of products ruined this brand's Flipkart rating, halting sales. We implemented a robust post-purchase customer satisfaction funnel and legally disputed malicious reviews. With their reputation restored, conversion rates tripled.",
  },
  {
    title: "D2C Launch via Micro-Influencer Matrix",
    category: "Influencer Marketing",
    metrics: [
      { label: "Total Reach", value: "5.2M+" },
      { label: "Engagement", value: "12%" },
      { label: "Launch Day Sales", value: "₹25L" }
    ],
    description: "To bypass the high costs of Google/FB ads for a new fitness apparel launch, we orchestrated a synchronized campaign with 40 micro-influencers. The authentic UGC content created a viral loop resulting in a massively profitable day-1 launch.",
  }
];

export default function SuccessStoriesPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
        <div className="container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Case <span>Studies</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: '700px' }}>
              We don't talk about theoretical marketing. We deal in hard data, engineered algorithms, and aggressive growth. Here is proof.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
            {caseStudies.map((study, idx) => (
              <div key={idx} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', background: 'var(--surface-black)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255,215,0,0.1)', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: 'var(--primary-yellow)' }}></div>
                
                <div>
                  <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(255,215,0,0.1)', color: 'var(--primary-yellow)', borderRadius: '30px', fontSize: '0.85rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {study.category}
                  </div>
                  <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem', color: '#fff', lineHeight: 1.3 }}>{study.title}</h2>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.7 }}>
                    {study.description}
                  </p>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: '1.5rem' }}>
                  {study.metrics.map((metric, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.5rem', background: 'rgba(0,0,0,0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                      <span style={{ color: '#888', fontSize: '1rem' }}>{metric.label}</span>
                      <span style={{ color: 'var(--primary-yellow)', fontSize: '1.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>{metric.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
