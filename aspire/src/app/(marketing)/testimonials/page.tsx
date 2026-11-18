import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Testimonials | AspireMint",
  description: "See what leading brands say about their growth partnerships with AspireMint.",
};

const testimonials = [
  {
    name: "Neelansh Bhati",
    company: "American Tourister",
    role: "Brand Growth Lead",
    text: "Working with AspireMint has been a remarkable experience for American Tourister. Their deep grasp of marketplace algorithms and listing optimization allowed us to scale category visibility across Amazon and Flipkart seamlessly. Their team operates with absolute professionalism and strategic depth.",
    image: "N",
    rating: 5,
  },
  {
    name: "Akarsh Makhija",
    company: "Flyberry",
    role: "Brand Head",
    text: "Partnering with AspireMint gave Flyberry the strategic momentum we needed in the competitive consumer segment. We worked with them to optimize our marketplace catalog, elevate customer engagement, and build organic search authority across all platforms without compromising brand essence.",
    image: "A",
    rating: 5,
  },
  {
    name: "Shivam Jindal",
    company: "Moonstruck",
    role: "Founder",
    text: "AspireMint completely revolutionized our digital presence. Working with their team on targeted creator alignment and marketplace discovery created an immense surge in organic brand recall and buyer conversion. They are true category leaders in growth marketing.",
    image: "S",
    rating: 5,
  },
  {
    name: "Yash",
    company: "Fuaark",
    role: "Head of Operations",
    text: "From day one, the AspireMint team understood our brand vision and athletic audience. We worked closely with them to refine our marketplace positioning and listing conversion rates, helping Fuaark establish a dominant and highly recognized footprint across major channels.",
    image: "Y",
    rating: 5,
  },
  {
    name: "Yogesh Beladiya",
    company: "Purela",
    role: "Director",
    text: "AspireMint built an exceptional foundation of consumer trust for Purela. Their proactive reputation management and review architecture established our brand credibility in a crowded market. Working together has been one of our most rewarding and reliable collaborations.",
    image: "Y",
    rating: 5,
  },
  {
    name: "Sujata",
    company: "MyAvni",
    role: "Co-Founder",
    text: "Collaborating with AspireMint has been seamless and high-impact. We worked together on authentic creator partnerships and marketplace reach, which connected MyAvni directly with the right demographic, cementing loyal customer trust and long-term brand equity.",
    image: "S",
    rating: 5,
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
              Don't just take our word for it. Here is what leading brand leaders have to say after collaborating with AspireMint.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
            {testimonials.map((t, index) => (
              <div key={index} className="glass-card" style={{ padding: '2.5rem', position: 'relative', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-yellow), #FF8C00)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold', color: '#000', fontSize: '1.2rem', flexShrink: 0 }}>
                    {t.image}
                  </div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem', color: '#fff' }}>{t.name}</h3>
                    <p style={{ color: 'var(--primary-yellow)', fontSize: '0.9rem', fontWeight: 600 }}>{t.role}, {t.company}</p>
                  </div>
                </div>
                <div style={{ color: 'var(--primary-yellow)', fontSize: '1.2rem', letterSpacing: '2px' }}>
                  {"★".repeat(Math.floor(t.rating))}{"☆".repeat(5 - Math.floor(t.rating))}
                </div>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.05rem', lineHeight: '1.7', fontStyle: 'italic', flexGrow: 1 }}>
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
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to Scale Your Brand?</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', marginBottom: '2.5rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
              Partner with the team trusted by India's top consumer brands to accelerate visibility and market authority.
            </p>
            <Link href="/contact" className="btn-premium" style={{ background: 'var(--primary-yellow)', color: '#000', padding: '1rem 2.5rem', display: 'inline-block' }}>
              Discuss Your Growth Plan
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
