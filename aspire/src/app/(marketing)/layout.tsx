import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";

const VoiceChatbot = dynamic(() => import("@/components/VoiceChatbot"), { ssr: false });

export const metadata: Metadata = {
  title: "AspireMint | Scale Your Brand on Amazon, Flipkart & Google",
  description: "We help brands build trust, increase visibility & drive real sales through reviews, influencers & reputation management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="marketing-layout">
        <div className="premium-grid-bg">
          <div className="bg-noise"></div>
          <div className="ambient-spotlight"></div>
        </div>

        <Navbar />
        
        <main style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}>
          {children}
        </main>
        
        <footer className="footer">
          <div className="container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
              <div>
                <h4 className="navbar-logo" style={{ marginBottom: '1.5rem' }}>ASPIRE<span>MINT</span>.</h4>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                  We don't just market — we build trust that drives sales. A premium agency for scaling brands.
                </p>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Navigation</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li><Link href="/" style={{ color: 'var(--text-secondary)' }}>Home</Link></li>
                  <li><Link href="/about" style={{ color: 'var(--text-secondary)' }}>About Us</Link></li>
                  <li><Link href="/services" style={{ color: 'var(--text-secondary)' }}>Services</Link></li>
                  <li><Link href="/marketplaces" style={{ color: 'var(--text-secondary)' }}>Marketplaces</Link></li>
                  <li><Link href="/why-aspiremint" style={{ color: 'var(--text-secondary)' }}>Why AspireMint</Link></li>
                  <li><Link href="/clients" style={{ color: 'var(--text-secondary)' }}>Clients</Link></li>
                  <li><Link href="/success-stories" style={{ color: 'var(--text-secondary)' }}>Success Stories</Link></li>
                  <li><Link href="/testimonials" style={{ color: 'var(--text-secondary)' }}>Testimonials</Link></li>
                  <li><Link href="/contact" style={{ color: 'var(--text-secondary)' }}>Contact Us</Link></li>
                </ul>
              </div>
              <div>
                <h4 style={{ color: '#fff', marginBottom: '1.5rem' }}>Get in Touch</h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  <li style={{ color: 'var(--text-secondary)' }}><a href="mailto:info@aspiremint.in">info@aspiremint.in</a></li>
                  <li style={{ color: 'var(--text-secondary)' }}><a href="tel:+916289183844">+91 6289 183 844</a></li>
                  <li style={{ color: 'var(--text-secondary)' }}><a href="https://instagram.com/aspiremint" target="_blank" rel="noreferrer">Instagram: @aspiremint</a></li>
                  <li style={{ color: 'var(--text-secondary)' }}>Global Remote Agency</li>
                </ul>
              </div>
            </div>
            <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', color: 'var(--text-secondary)' }}>
              <p>&copy; {new Date().getFullYear()} AspireMint. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <VoiceChatbot />
    </div>
  );
}
