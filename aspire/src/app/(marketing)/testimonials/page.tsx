import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Testimonials | AspireMint",
  description: "Hear what our clients have to say about working with AspireMint.",
};

export default function TestimonialsPage() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Client <span>Testimonials</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Don't just take our word for it. Hear from the brands we've scaled.
          </p>
        </div>

        <div className="grid" style={{ gap: '2rem' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <p className="card-text" style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>
              "AspireMint completely transformed our marketplace presence. Our sales doubled in the first quarter alone."
            </p>
            <h4 style={{ color: 'var(--primary-yellow)' }}>— CEO, Leading Tech Brand</h4>
          </div>
        </div>
      </div>
    </section>
  );
}
