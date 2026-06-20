import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplaces | AspireMint",
  description: "Explore the marketplaces we help you dominate, including Amazon, Flipkart, Meesho, and Google.",
};

export default function MarketplacesPage() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Our <span>Marketplaces</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            We specialize in scaling your brand across the most impactful digital platforms.
          </p>
        </div>

        <div className="grid" style={{ gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--primary-yellow)', fontSize: '2rem' }}>Amazon</h3>
            <p className="card-text" style={{ fontSize: '1.1rem' }}>
              Dominate the world's largest marketplace with our proven ranking and review strategies.
            </p>
          </div>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--primary-yellow)', fontSize: '2rem' }}>Flipkart</h3>
            <p className="card-text" style={{ fontSize: '1.1rem' }}>
              Capture the Indian e-commerce market with specialized visibility and reputation management.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
