"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import dynamic from "next/dynamic";

const Nav3D = dynamic(() => import("@/components/Nav3D"), { ssr: false });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar" style={{ padding: scrolled ? '1rem 0' : '1.5rem 0', background: scrolled ? 'rgba(5, 5, 5, 0.9)' : 'rgba(5, 5, 5, 0.6)' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link href="/" className="navbar-logo" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <div style={{ width: '32px', height: '32px', cursor: 'pointer' }}>
              <Nav3D />
            </div>
            <div>ASPIRE<span>MINT</span>.</div>
          </Link>
          
          <div className="navbar-links">
            <Link href="/" className="nav-link">Home</Link>
            <Link href="/about" className="nav-link">About</Link>
            <Link href="/services" className="nav-link">Services</Link>
            <Link href="/contact" className="nav-link">Contact</Link>
            <Link href="/contact" className="btn-premium" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem' }}>Get Started</Link>
          </div>

          <div className="mobile-menu-btn" onClick={() => setIsOpen(true)}>
            <Menu size={28} color="#fff" />
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "tween", duration: 0.3 }}
            style={{ 
              position: 'fixed', top: 0, right: 0, width: '100vw', height: '100vh', 
              background: '#030303', zIndex: 1000, padding: '2rem',
              display: 'flex', flexDirection: 'column'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4rem' }}>
              <div className="navbar-logo">ASPIRE<span>MINT</span>.</div>
              <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#fff', cursor: 'pointer' }}>
                <X size={32} />
              </button>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', fontSize: '1.5rem', fontFamily: 'Outfit', fontWeight: 600 }}>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>Our Services</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
            </div>

            <div style={{ marginTop: 'auto', paddingBottom: '2rem' }}>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-premium" style={{ width: '100%', textAlign: 'center' }}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
