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
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>hello@aspiremint.com</p>
              <p style={{ color: 'var(--text-secondary)', marginTop: '0.5rem' }}>For general inquiries & partnerships</p>
            </div>

            <div className="glass-card" style={{ marginBottom: '2rem', padding: '2rem' }}>
              <h3 className="card-title" style={{ fontSize: '1.25rem', color: '#25D366' }}>WhatsApp</h3>
              <p style={{ color: 'var(--text-primary)', fontSize: '1.1rem' }}>+1 (234) 567-8900</p>
              <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="btn-premium" style={{ borderColor: '#25D366', color: '#25D366', width: '100%', marginTop: '1rem' }}>
                Chat Now
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

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input type="text" id="name" name="name" className="form-control" placeholder="John Doe" required style={{ background: 'rgba(0,0,0,0.5)' }} />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input type="email" id="email" name="email" className="form-control" placeholder="john@company.com" required style={{ background: 'rgba(0,0,0,0.5)' }} />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="brand">Brand Name</label>
                <input type="text" id="brand" name="brand" className="form-control" placeholder="Your Brand Ltd." style={{ background: 'rgba(0,0,0,0.5)' }} />
              </div>
              
              <div className="form-group">
                <label className="form-label" htmlFor="message">How can we help?</label>
                <textarea id="message" name="message" className="form-control" placeholder="Tell us about your goals..." required style={{ background: 'rgba(0,0,0,0.5)' }}></textarea>
              </div>
              
              <button type="submit" className="btn-premium" style={{ width: '100%', marginTop: '1rem', background: status === 'loading' ? '#333' : 'var(--primary-yellow)', color: status === 'loading' ? '#fff' : 'var(--bg-black)' }} disabled={status === 'loading'}>
                {status === 'loading' ? 'Sending...' : 'Submit Inquiry'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
