import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Our Services | AspireMint",
  description: "Marketplace growth, influencer marketing, Google business reviews, and brand reputation management.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Marketplace Growth",
      platforms: ["Amazon", "Flipkart", "Meesho", "Myntra"],
      desc: "Dominate the platforms where your customers are already shopping. We handle end-to-end marketplace management, SEO optimization, sponsored ads, and listing enhancement to ensure you rank #1 in your category."
    },
    {
      title: "Influencer Marketing",
      platforms: ["Instagram", "YouTube", "TikTok"],
      desc: "Connect with authentic creators who drive real conversions, not just empty views. We specialize in micro and niche influencer campaigns tailored specifically to your brand's target demographic."
    },
    {
      title: "Google Business Reviews",
      platforms: ["Google My Business"],
      desc: "Local search is powerful. We help you generate authentic, 5-star Google reviews from real customers to improve your local SEO, build immediate trust, and convert map searchers into paying buyers."
    },
    {
      title: "Brand Reputation Management",
      platforms: ["Web", "Social Media", "Review Sites"],
      desc: "Your brand is your most valuable asset. We actively monitor sentiment, handle customer feedback, suppress negative narratives, and proactively build a positive, trusted brand image across the internet."
    }
  ];

  return (
    <>
      <section className="section" style={{ paddingTop: '8rem' }}>
        <div className="container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Our <span>Services</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto' }}>
              Comprehensive growth solutions tailored for modern brands.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {services.map((service, index) => (
              <div key={index} className="card" style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h2 className="card-title" style={{ fontSize: '2rem', color: 'var(--primary-yellow)', margin: 0 }}>
                  {service.title}
                </h2>
                <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                  {service.platforms.map((platform, i) => (
                    <span key={i} style={{ 
                      backgroundColor: 'var(--bg-black)', 
                      padding: '0.25rem 1rem', 
                      borderRadius: '20px', 
                      fontSize: '0.875rem',
                      border: '1px solid var(--border-color)',
                      color: 'var(--text-secondary)'
                    }}>
                      {platform}
                    </span>
                  ))}
                </div>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '5rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem' }}>Ready to start your campaign?</h3>
            <Link href="/contact" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
