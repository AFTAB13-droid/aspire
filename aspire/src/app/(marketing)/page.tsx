"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";

const Interactive3D = dynamic(() => import("@/components/Interactive3D"), { ssr: false });
const MobileHome = dynamic(() => import("@/components/MobileHome"), { ssr: false });

// Modern Magnetic Button Effect
const MagneticButton = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
      style={{ display: 'inline-block' }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Animation Variants
  const staggerContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <>
    <div className="desktop-only">
    <div ref={containerRef}>
      {/* Dynamic Hero Section */}
      <section className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
        
        {/* 3D Interactive WebGL Background */}
        <div className="hero-spline-container">
          <Interactive3D />
        </div>

        <motion.div 
          className="container"
          style={{ y, opacity, zIndex: 10, position: 'relative', paddingTop: '8rem' }}
        >
          <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
            <motion.div initial="hidden" animate="show" variants={staggerContainer}>
              <motion.div variants={fadeUp} style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '0.5rem 1.2rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '30px', background: 'rgba(255,255,255,0.03)', backdropFilter: 'blur(10px)', marginBottom: '2.5rem' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary-yellow)', boxShadow: '0 0 10px var(--primary-yellow)' }}></span>
                <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', color: '#ccc' }}>
                  The Elite Growth Partner
                </span>
              </motion.div>
              
              <motion.h1 variants={fadeUp} style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)', lineHeight: 1.05, marginBottom: '2rem', letterSpacing: '-2px', fontFamily: 'Outfit' }}>
                Dominate Your <br/>
                <span className="text-gradient-yellow">Marketplace.</span>
              </motion.h1>
              
              <motion.p variants={fadeUp} style={{ fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', color: 'var(--text-secondary)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: 1.6 }}>
                We engineer scalable growth, absolute trust, and unfair algorithmic advantages for brands on Amazon, Flipkart, and Google.
              </motion.p>
              
              <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                <MagneticButton>
                  <Link href="/contact" className="btn-premium" style={{ background: 'var(--primary-yellow)', color: 'var(--bg-black)', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
                    Start Scaling
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link href="/services" className="btn-premium" style={{ border: '1px solid rgba(255,255,255,0.2)', padding: '1.2rem 3rem', fontSize: '1.1rem', color: '#fff' }}>
                    Our Ecosystem
                  </Link>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Trending Bento Grid Layout */}
      <section className="section" style={{ position: 'relative', zIndex: 20 }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', letterSpacing: '-1px' }}>
              The AspireMint <span className="text-gradient-yellow">Architecture</span>
            </h2>
          </motion.div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(12, 1fr)', 
            gridAutoRows: 'minmax(300px, auto)', 
            gap: '1.5rem' 
          }}>
            {/* Bento Item 1: Large */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="glass-card"
              style={{ gridColumn: 'span 8', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '3rem', background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.9))' }}
            >
              <div>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff' }}>Algorithmic Dominance</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '500px', lineHeight: 1.6 }}>
                  Amazon and Flipkart are search engines. We hack their algorithms through precise SEO, optimized listings, and high-converting sponsored ads to guarantee you rank #1.
                </p>
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: '3rem' }}>
                <span style={{ padding: '0.5rem 1.5rem', background: 'rgba(255,215,0,0.1)', color: 'var(--primary-yellow)', borderRadius: '30px', fontSize: '0.9rem' }}>SEO Optimization</span>
                <span style={{ padding: '0.5rem 1.5rem', background: 'rgba(255,215,0,0.1)', color: 'var(--primary-yellow)', borderRadius: '30px', fontSize: '0.9rem' }}>PPC Management</span>
              </div>
            </motion.div>

            {/* Bento Item 2: Vertical */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="glass-card"
              style={{ gridColumn: 'span 4', display: 'flex', flexDirection: 'column', padding: '3rem', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '150px', height: '150px', background: 'var(--primary-yellow)', filter: 'blur(80px)', opacity: 0.4 }}></div>
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Reputation Control</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6, flexGrow: 1 }}>
                Trust is the ultimate currency. We proactively generate 5-star Google reviews and suppress negative sentiment to build an unbreakable brand image.
              </p>
              <div style={{ fontSize: '3rem', fontWeight: 900, color: 'var(--primary-yellow)', marginTop: '2rem' }}>4.9★</div>
            </motion.div>

            {/* Bento Item 3: Square */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="glass-card"
              style={{ gridColumn: 'span 5', padding: '3rem' }}
            >
              <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Influencer Matrix</h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                Connect with highly-engaged micro and macro creators. We engineer viral campaigns that translate directly to conversions, not just empty views.
              </p>
            </motion.div>

            {/* Bento Item 4: Horizontal */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="glass-card"
              style={{ gridColumn: 'span 7', padding: '3rem', display: 'flex', alignItems: 'center', gap: '2rem', background: 'rgba(255,215,0,0.02)' }}
            >
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: '#fff' }}>Data-Driven Scale</h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: 1.6 }}>
                  Every decision is backed by hard data. We provide transparent, real-time analytics so you know exactly what your ROI is at all times.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Infinite Scroll Marquee */}
      <section style={{ padding: '3rem 0', background: 'var(--primary-yellow)', color: 'var(--bg-black)', overflow: 'hidden', transform: 'rotate(-2deg) scale(1.05)', marginTop: '4rem', position: 'relative', zIndex: 30 }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 15, repeat: Infinity }}
            style={{ display: 'flex', gap: '3rem', fontSize: '2.5rem', fontFamily: 'Outfit', fontWeight: 900, textTransform: 'uppercase' }}
          >
            <span>+300% ROI AVERAGE</span> • <span>100+ BRANDS SCALED</span> • <span>#1 RANKINGS</span> • <span>MILLIONS MANAGED</span> •
            <span>+300% ROI AVERAGE</span> • <span>100+ BRANDS SCALED</span> • <span>#1 RANKINGS</span> • <span>MILLIONS MANAGED</span> •
          </motion.div>
        </div>
      </section>

      {/* Refined Brand Marquee */}
      <section style={{ padding: '4rem 0', overflow: 'hidden', background: 'linear-gradient(90deg, rgba(15,15,15,0.95), rgba(5,5,5,1))', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 10 }}>
          <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '4px', marginBottom: '2.5rem', fontWeight: 600 }}>Trusted by Industry Leaders</p>
        </div>
        
        {/* Edge Fade Masks */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '20%', height: '100%', background: 'linear-gradient(90deg, rgba(5,5,5,1), transparent)', zIndex: 5, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '20%', height: '100%', background: 'linear-gradient(-90deg, rgba(5,5,5,1), transparent)', zIndex: 5, pointerEvents: 'none' }}></div>

        <div style={{ display: 'flex', whiteSpace: 'nowrap', position: 'relative' }}>
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 35, repeat: Infinity }}
            style={{ display: 'flex', gap: '5rem', fontSize: '3rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', opacity: 0.15 }}
          >
            {["Del Monte", "American Tourister", "Pilgrim", "pTron", "XECH", "Flyberry", "NoStrain", "Nutrabud", "X tep", "Palladium", "Moonstruck", "Fuaark", "Purela"].map((brand, i) => (
              <span key={`b1-${i}`} style={{ letterSpacing: '1px' }}>{brand}</span>
            ))}
            {["Del Monte", "American Tourister", "Pilgrim", "pTron", "XECH", "Flyberry", "NoStrain", "Nutrabud", "X tep", "Palladium", "Moonstruck", "Fuaark", "Purela"].map((brand, i) => (
              <span key={`b2-${i}`} style={{ letterSpacing: '1px' }}>{brand}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Modern Split CTA Section */}
      <section className="section" style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              background: 'linear-gradient(90deg, #111 0%, #050505 100%)', 
              borderRadius: '24px', 
              border: '1px solid rgba(255,255,255,0.05)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
              overflow: 'hidden'
            }}
          >
            <div style={{ padding: '6rem 4rem', position: 'relative' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'radial-gradient(circle at top left, rgba(255,215,0,0.1), transparent 70%)' }}></div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '1.5rem', position: 'relative', zIndex: 2 }}>
                Ready to stop playing <span className="text-gradient-yellow">small?</span>
              </h2>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', lineHeight: 1.6, marginBottom: '3rem', position: 'relative', zIndex: 2 }}>
                Join the fastest growing brands on the internet. Let's build your custom growth architecture today.
              </p>
              <div style={{ position: 'relative', zIndex: 2 }}>
                <Link href="/contact" className="btn-premium" style={{ background: 'var(--text-primary)', color: 'var(--bg-black)', borderColor: 'var(--text-primary)' }}>
                  Get Your Proposal
                </Link>
              </div>
            </div>
            
            {/* Visual Abstract Element */}
            <div style={{ background: 'rgba(255,215,0,0.02)', padding: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center', borderLeft: '1px solid rgba(255,255,255,0.02)' }}>
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                style={{ width: '250px', height: '250px', border: '1px dashed rgba(255,215,0,0.3)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}
              >
                <div style={{ width: '180px', height: '180px', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '50%', position: 'absolute' }}></div>
                <div style={{ width: '100px', height: '100px', background: 'var(--primary-yellow)', borderRadius: '50%', filter: 'blur(30px)', opacity: 0.5 }}></div>
                <div style={{ fontWeight: 800, fontSize: '1.5rem', color: '#fff', position: 'absolute', fontFamily: 'Outfit' }}>ASPIREMINT</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </div>
    <div className="mobile-only">
      <MobileHome />
    </div>
    </>
  );
}
