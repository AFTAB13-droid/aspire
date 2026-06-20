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
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

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
          
          <div className="navbar-links" style={{ gap: '0.2rem', alignItems: 'center' }} onMouseLeave={() => setHoveredPath(null)}>
            
            <div style={{ position: 'relative', padding: '0.5rem 1rem' }} onMouseEnter={() => setHoveredPath('/')}>
              {hoveredPath === '/' && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <Link href="/" className="nav-link-modern">Home</Link>
            </div>

            <div style={{ position: 'relative', padding: '0.5rem 1rem' }} onMouseEnter={() => setHoveredPath('/services')}>
              {hoveredPath === '/services' && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <Link href="/services" className="nav-link-modern">Services</Link>
            </div>

            <div style={{ position: 'relative', padding: '0.5rem 1rem' }} onMouseEnter={() => setHoveredPath('/marketplaces')}>
              {hoveredPath === '/marketplaces' && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <Link href="/marketplaces" className="nav-link-modern">Marketplaces</Link>
            </div>
            
            <div 
              onMouseEnter={() => { setIsMoreOpen(true); setHoveredPath('more'); }} 
              onMouseLeave={() => setIsMoreOpen(false)}
              style={{ position: 'relative', padding: '0.5rem 1rem', cursor: 'pointer' }}
            >
              {hoveredPath === 'more' && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <span className="nav-link-modern" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                More
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </span>
              
              <AnimatePresence>
                {isMoreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      top: '100%',
                      left: '50%',
                      marginLeft: '-100px',
                      background: 'rgba(5, 5, 5, 0.95)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderRadius: '12px',
                      padding: '1.5rem',
                      minWidth: '200px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1.2rem',
                      boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
                      backdropFilter: 'blur(20px)',
                    }}
                  >
                    <Link href="/about" className="nav-link" style={{ padding: 0 }}>About Us</Link>
                    <Link href="/why-aspiremint" className="nav-link" style={{ padding: 0 }}>Why AspireMint</Link>
                    <Link href="/clients" className="nav-link" style={{ padding: 0 }}>Clients</Link>
                    <Link href="/success-stories" className="nav-link" style={{ padding: 0 }}>Success Stories</Link>
                    <Link href="/testimonials" className="nav-link" style={{ padding: 0 }}>Testimonials</Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div style={{ position: 'relative', padding: '0.5rem 1rem' }} onMouseEnter={() => setHoveredPath('/contact')}>
              {hoveredPath === '/contact' && (
                <motion.div layoutId="nav-pill" style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(255, 255, 255, 0.08)', borderRadius: '20px', zIndex: -1 }} transition={{ type: "spring", stiffness: 400, damping: 30 }} />
              )}
              <Link href="/contact" className="nav-link-modern">Contact Us</Link>
            </div>

            <div style={{ paddingLeft: '0.5rem' }}>
              <a href="tel:+916289183844" className="btn-premium" style={{ padding: '0.6rem 1.5rem', fontSize: '0.8rem', background: 'var(--primary-yellow)', color: '#000', whiteSpace: 'nowrap' }}>Call Us</a>
            </div>
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
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.5rem', fontFamily: 'Outfit', fontWeight: 600, overflowY: 'auto' }}>
              <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
              <Link href="/about" onClick={() => setIsOpen(false)}>About Us</Link>
              <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
              <Link href="/marketplaces" onClick={() => setIsOpen(false)}>Marketplaces</Link>
              <Link href="/why-aspiremint" onClick={() => setIsOpen(false)}>Why AspireMint</Link>
              <Link href="/clients" onClick={() => setIsOpen(false)}>Clients</Link>
              <Link href="/success-stories" onClick={() => setIsOpen(false)}>Success Stories</Link>
              <Link href="/testimonials" onClick={() => setIsOpen(false)}>Testimonials</Link>
              <Link href="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
            </div>

            <div style={{ marginTop: 'auto', paddingBottom: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <a href="tel:+916289183844" className="btn-premium" style={{ width: '100%', textAlign: 'center', background: 'var(--primary-yellow)', color: '#000' }}>
                Call Us
              </a>
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
