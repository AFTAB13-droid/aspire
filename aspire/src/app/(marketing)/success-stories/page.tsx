import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Success Stories | AspireMint",
  description: "Read how we have helped brands achieve 10x growth and dominate their categories.",
};

export default function SuccessStoriesPage() {
  return (
    <section className="section" style={{ paddingTop: '8rem' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Success <span>Stories</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Real results. Real growth. See how we transform brands.
          </p>
        </div>

        <div className="grid" style={{ gap: '2rem' }}>
          <div className="card" style={{ padding: '3rem' }}>
            <h3 className="card-title" style={{ color: 'var(--primary-yellow)' }}>From Zero to Category Leader</h3>
            <p className="card-text">
              We helped a nascent brand scale to the #1 spot in their category within 6 months.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
