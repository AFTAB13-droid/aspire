import type { Metadata } from "next";
import ClientsShowcase from "@/components/ClientsShowcase";

export const metadata: Metadata = {
  title: "Clients | AspireMint",
  description: "See the amazing brands and businesses we have partnered with to achieve exceptional growth.",
};

export default function ClientsPage() {
  return (
    <section className="section" style={{ paddingTop: '8rem', overflow: 'hidden' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '6rem' }}>
          <h1 className="hero-title" style={{ fontSize: 'clamp(3.5rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>Brands We've <span>Elevated</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto', fontSize: '1.2rem', maxWidth: '600px' }}>
            From emerging startups to global powerhouses, we engineer growth for the ambitious.
          </p>
        </div>

        <ClientsShowcase />
      </div>
    </section>
  );
}
