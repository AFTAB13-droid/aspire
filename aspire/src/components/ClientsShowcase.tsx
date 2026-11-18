"use client";

import { motion } from "framer-motion";

const brands = [
  "Del Monte", "American Tourister", "Pilgrim", "pTron", "XECH", 
  "Flyberry", "NoStrain", "Nutrabud", "X tep", "Palladium", 
  "Avni", "Paradyse Perfume", "Fuaark", "HealthOxide", "Shrida", 
  "Moonstruck", "Koparo", "Purela"
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100 } }
};

export default function ClientsShowcase() {
  return (
    <>
      <div style={{ overflow: 'hidden', padding: '4rem 0', background: 'var(--surface-black)', marginBottom: '6rem', transform: 'rotate(-2deg) scale(1.05)' }}>
        <div style={{ display: 'flex', whiteSpace: 'nowrap' }}>
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ ease: "linear", duration: 40, repeat: Infinity }}
            style={{ display: 'flex', gap: '4rem', fontSize: '5rem', fontFamily: 'Outfit', fontWeight: 900, textTransform: 'uppercase', color: 'transparent', WebkitTextStroke: '2px rgba(255, 215, 0, 0.4)' }}
          >
            {brands.map((brand, i) => (
              <span key={`marquee1-${i}`}>{brand}</span>
            ))}
            {brands.map((brand, i) => (
              <span key={`marquee2-${i}`}>{brand}</span>
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        style={{ 
          display: 'flex', 
          overflowX: 'auto', 
          gap: '2rem', 
          paddingBottom: '2rem', 
          marginBottom: '5rem',
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch'
        }}
        className="horizontal-scroll"
      >
        {brands.map((brand, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -10, backgroundColor: 'rgba(255, 215, 0, 0.08)', borderColor: 'rgba(255, 215, 0, 0.3)' }}
            className="glass-card" 
            style={{ 
              minWidth: '240px',
              scrollSnapAlign: 'start',
              padding: '3rem 2rem', 
              textAlign: 'center', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              justifyContent: 'center',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '16px',
              cursor: 'default',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
              flexShrink: 0
            }}
          >
            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'linear-gradient(135deg, rgba(255,215,0,0.1), rgba(255,215,0,0.02))', border: '1px solid rgba(255,215,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(255,215,0,0.05)' }}>
              <span style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--primary-yellow)' }}>{brand.charAt(0)}</span>
            </div>
            <h3 style={{ fontSize: '1.4rem', color: '#fff', fontFamily: 'Outfit', letterSpacing: '0.5px' }}>{brand}</h3>
          </motion.div>
        ))}
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', padding: '4rem', background: 'linear-gradient(135deg, rgba(20,20,20,0.8), rgba(5,5,5,0.9))', borderRadius: '24px', border: '1px solid rgba(255,215,0,0.1)' }}
      >
        <p style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', lineHeight: 1.8, maxWidth: '900px', margin: '0 auto' }}>
          And many other growing brands across <span style={{ color: 'var(--primary-yellow)', fontWeight: 600 }}>FMCG, Beauty, Lifestyle, Fashion, Electronics, Health & Wellness, Home Care, Travel Accessories, and Consumer Goods</span> categories.
        </p>
      </motion.div>
    </>
  );
}
