import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | AspireMint",
  description: "See what our clients are saying about their explosive growth with AspireMint.",
};

const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "TechNova Electronics",
    role: "CEO",
    text: "AspireMint completely changed our Amazon strategy. Within 3 months, our daily orders went from 50 to 450. Their algorithm mastery is unmatched.",
    image: "R",
    rating: 5,
  },
  {
    name: "Sneha Patel",
    company: "Luxe Beauty Organics",
    role: "Founder",
    text: "Before AspireMint, we were invisible on Flipkart. They not only ranked our hero products to page 1 but also fixed our negative reviews. We are now doing 5X our previous revenue.",
    image: "S",
    rating: 5,
  },
  {
    name: "Arjun Mehta",
    company: "FitGear Pro",
    role: "Head of E-Commerce",
    text: "The data-driven approach is what sold me. We get a clear dashboard, precise ROI tracking, and absolute transparency. They manage $50k/mo of our ad spend profitably.",
    image: "A",
    rating: 5,
  },
  {
    name: "Priya Sharma",
    company: "HomeEssentials",
    role: "Marketing Director",
    text: "Their influencer matrix was a game changer for our D2C launch. The influencers they picked were highly relevant, bringing in highly engaged traffic that converted instantly.",
    image: "P",
    rating: 4.8,
  },
];

export default function TestimonialsPage() {
  return (
    <>
      <section className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem' }}>
        <div className="container animate-fade-in">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h1 className="hero-title" style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)' }}>Client <span>Success</span></h1>
            <p className="hero-subtitle" style={{ margin: '0 auto', maxWidth: '700px' }}>
              Don't just take our word for it. Here is what brands have to say after partnering with the AspireMint growth ecosystem.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, index) => (
              <div key={index} className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-yellow), #FF8C00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000', fontSize: '1.2rem' }}>
                    {t.image}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: '#fff' }}>{t.name}</h3>
                    <p style={{ color: 'var(--primary-yellow)', fontSize: '0.9rem' }}>{t.role}, {t.company}</p>
                  </div>
                </div>
                <div style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem', letterSpacing: '2px' }}>
                  {"★".repeat(Math.floor(t.rating))}{"☆".repeat(5 - Math.floor(t.rating))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6', fontStyle: 'italic', flexGrow: 1 }}>
                  "{t.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: '8rem' }}>
        <div className="container">
          <div style={{ background: 'var(--surface-black)', borderRadius: '16px', padding: '4rem', textAlign: 'center', border: '1px solid var(--border-color)' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to be our next success story?</h2>
            <a href="/contact" className="btn-premium" style={{ background: 'var(--primary-yellow)', color: '#000', padding: '1rem 2.5rem' }}>Get Your Free Audit</a>
          </div>
        </div>
      </section>
    </>
  );
}
