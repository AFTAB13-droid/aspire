"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      brand: formData.get("brand"),
      message: formData.get("message"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section className="section" style={{ paddingTop: '8rem', minHeight: '100vh' }}>
      <div className="container animate-fade-in">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Let's <span>Connect</span></h1>
          <p className="hero-subtitle" style={{ margin: '0 auto' }}>
            Ready to scale? Drop us a message and our team will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid" style={{ gap: '4rem', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          
          {/* Contact Info */}
          <div>
            <div className="glass-card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: 'var(--primary-yellow)' }}>Email Us</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>info@aspiremint.in</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>For general inquiries & partnerships</p>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: '#25D366' }}>Phone / WhatsApp</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>+91 6289 183 844</p>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                <a href="tel:+916289183844" className="btn-premium" style={{ borderColor: 'var(--primary-yellow)', color: 'var(--primary-yellow)', width: '100%', padding: '0.8rem' }}>
                  Call
                </a>
                <a href="https://wa.me/916289183844" target="_blank" rel="noreferrer" className="btn-premium" style={{ borderColor: '#25D366', color: '#25D366', width: '100%', padding: '0.8rem' }}>
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: '#E1306C' }}>Instagram</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>@aspiremint</p>
              <a href="https://instagram.com/aspiremint" target="_blank" rel="noreferrer" className="btn-premium" style={{ borderColor: '#E1306C', color: '#E1306C', width: '100%', marginTop: '1rem', padding: '0.8rem' }}>
                Follow Us
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card" style={{ padding: '3rem' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-primary)' }}>Send a Message</h2>
            
            {status === "success" && (
              <div style={{ padding: '1rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', borderRadius: '8px', color: '#25D366', marginBottom: '2rem' }}>
                Message sent successfully! We will contact you shortly.
              </div>
            )}

            {status === "error" && (
              <div style={{ padding: '1rem', background: 'rgba(255, 0, 0, 0.1)', border: '1px solid red', borderRadius: '8px', color: 'red', marginBottom: '2rem' }}>
                Something went wrong. Please try again.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div>
                <label htmlFor="name" style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Full Name</label>
                <input type="text" id="name" name="name" placeholder="John Doe" required style={{ width: '100%', padding: '1.2rem 1.5rem', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-yellow)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
              </div>
              
              <div>
                <label htmlFor="email" style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Email Address</label>
                <input type="email" id="email" name="email" placeholder="john@company.com" required style={{ width: '100%', padding: '1.2rem 1.5rem', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-yellow)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
              </div>

              <div>
                <label htmlFor="brand" style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>Brand Name</label>
                <input type="text" id="brand" name="brand" placeholder="Your Brand Ltd." style={{ width: '100%', padding: '1.2rem 1.5rem', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-yellow)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'} />
              </div>
              
              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.85rem', letterSpacing: '2px', textTransform: 'uppercase', fontWeight: 600 }}>How can we help?</label>
                <textarea id="message" name="message" rows={5} placeholder="Tell us about your goals..." required style={{ width: '100%', padding: '1.2rem 1.5rem', background: 'rgba(10, 10, 10, 0.8)', border: '1px solid rgba(255, 255, 255, 0.08)', borderRadius: '12px', color: '#fff', fontSize: '1rem', outline: 'none', transition: 'border-color 0.3s ease', resize: 'vertical', boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.5)' }} onFocus={(e) => e.target.style.borderColor = 'var(--primary-yellow)'} onBlur={(e) => e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)'}></textarea>
              </div>
              
              <button type="submit" className="btn-premium" style={{ width: '100%', marginTop: '1rem', padding: '1.2rem', fontSize: '1rem', borderRadius: '12px', justifyContent: 'center' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'SENDING...' : 'SUBMIT INQUIRY'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
