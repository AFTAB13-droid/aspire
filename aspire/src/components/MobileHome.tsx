"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, TrendingUp, Shield, Star } from "lucide-react";

export default function MobileHome() {
  return (
    <div style={{ minHeight: '100vh', padding: '100px 1.5rem 2rem', position: 'relative', overflowX: 'hidden' }}>
      
      {/* High-tech ambient background */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '40vh', background: 'radial-gradient(circle at 50% 0%, rgba(255, 215, 0, 0.15), transparent 70%)', zIndex: -1 }}></div>

      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <div style={{ display: 'inline-block', padding: '0.4rem 1rem', background: 'rgba(255, 215, 0, 0.1)', border: '1px solid rgba(255, 215, 0, 0.3)', borderRadius: '20px', color: 'var(--primary-yellow)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '1px', marginBottom: '1.5rem' }}>
          THE ELITE AGENCY
        </div>
        
        <h1 style={{ fontSize: '3rem', lineHeight: 1.1, marginBottom: '1rem', fontFamily: 'Outfit', fontWeight: 900, letterSpacing: '-1px' }}>
          Scale <br />
          <span style={{ color: 'transparent', WebkitTextStroke: '1px var(--primary-yellow)', background: 'linear-gradient(135deg, #FFD700, #FF8C00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            Faster.
          </span>
        </h1>
        
        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '2rem' }}>
          We build algorithmic dominance & unbreakable trust for premium brands.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <a href="tel:+916289183844" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'var(--primary-yellow)', color: '#000', padding: '1rem', borderRadius: '12px', fontWeight: 800, fontSize: '1.1rem' }}>
            <Phone size={20} /> Call Now
          </a>
          <a href="https://wa.me/916289183844" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', background: 'rgba(37, 211, 102, 0.1)', border: '1px solid #25D366', color: '#25D366', padding: '1rem', borderRadius: '12px', fontWeight: 800, fontSize: '1.1rem' }}>
            <MessageCircle size={20} /> WhatsApp Us
          </a>
        </div>
      </motion.div>

      {/* High-Tech Statistics Carousel */}
      <div style={{ display: 'flex', overflowX: 'auto', gap: '1rem', paddingBottom: '1rem', margin: '0 -1.5rem', padding: '0 1.5rem 1rem', scrollSnapType: 'x mandatory' }}>
        <motion.div 
          whileTap={{ scale: 0.95 }}
          style={{ minWidth: '220px', scrollSnapAlign: 'start', background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9))', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', background: 'var(--primary-yellow)', filter: 'blur(30px)', opacity: 0.2 }}></div>
          <TrendingUp size={24} color="var(--primary-yellow)" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.2rem' }}>300%</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Average ROI Increase</p>
        </motion.div>

        <motion.div 
          whileTap={{ scale: 0.95 }}
          style={{ minWidth: '220px', scrollSnapAlign: 'start', background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9))', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', background: '#25D366', filter: 'blur(30px)', opacity: 0.2 }}></div>
          <Star size={24} color="#25D366" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.2rem' }}>#1</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Category Rankings</p>
        </motion.div>
        
        <motion.div 
          whileTap={{ scale: 0.95 }}
          style={{ minWidth: '220px', scrollSnapAlign: 'start', background: 'linear-gradient(145deg, rgba(20,20,20,0.9), rgba(5,5,5,0.9))', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}
        >
          <div style={{ position: 'absolute', top: 0, right: 0, width: '50px', height: '50px', background: '#4A00E0', filter: 'blur(30px)', opacity: 0.2 }}></div>
          <Shield size={24} color="#4A00E0" style={{ marginBottom: '1rem' }} />
          <h3 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.2rem' }}>100+</h3>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>Brands Scaled</p>
        </motion.div>
      </div>

      {/* Services Stack */}
      <div style={{ marginTop: '3rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800 }}>Core Architecture</h2>
          <Link href="/services" style={{ color: 'var(--primary-yellow)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '4px' }}>
            View All <ArrowRight size={14} />
          </Link>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {['Algorithmic Dominance', 'Reputation Control', 'Influencer Matrix', 'Data-Driven Scale'].map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              style={{ padding: '1.2rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
            >
              <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>{service}</span>
              <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <ArrowRight size={14} color="var(--primary-yellow)" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Brands Marquee - Mobile Optimized */}
      <div style={{ marginTop: '4rem', margin: '4rem -1.5rem 0', padding: '3rem 0', background: 'linear-gradient(90deg, rgba(15,15,15,0.95), rgba(5,5,5,1))', borderTop: '1px solid rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.03)', overflow: 'hidden', position: 'relative' }}>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '2rem', fontWeight: 600, position: 'relative', zIndex: 10 }}>Trusted By Leaders</p>
        
        {/* Edge Fade Masks */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: '25%', height: '100%', background: 'linear-gradient(90deg, rgba(5,5,5,1), transparent)', zIndex: 5, pointerEvents: 'none' }}></div>
        <div style={{ position: 'absolute', top: 0, right: 0, width: '25%', height: '100%', background: 'linear-gradient(-90deg, rgba(5,5,5,1), transparent)', zIndex: 5, pointerEvents: 'none' }}></div>

        <div style={{ display: 'flex', whiteSpace: 'nowrap', position: 'relative' }}>
          <motion.div 
            animate={{ x: ["-50%", "0%"] }}
            transition={{ ease: "linear", duration: 25, repeat: Infinity }}
            style={{ display: 'flex', gap: '3rem', fontSize: '2.2rem', fontFamily: 'Outfit', fontWeight: 800, textTransform: 'uppercase', color: '#ffffff', opacity: 0.15 }}
          >
            {["Del Monte", "American Tourister", "Pilgrim", "pTron", "XECH", "Nutrabud"].map((brand, i) => (
              <span key={`mb1-${i}`}>{brand}</span>
            ))}
            {["Del Monte", "American Tourister", "Pilgrim", "pTron", "XECH", "Nutrabud"].map((brand, i) => (
              <span key={`mb2-${i}`}>{brand}</span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
