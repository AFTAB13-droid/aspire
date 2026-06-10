"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, MessageSquare, Settings, LogOut, Search, Bell, Menu, X } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // If we are on the login page, don't show the sidebar
  if (pathname === '/admin/login') {
    return <div style={{ minHeight: '100vh', background: '#050505' }}>{children}</div>;
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#050505', color: '#fff' }}>
      
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.5)', zIndex: 999 }}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`admin-sidebar ${sidebarOpen ? 'open' : ''}`}>
        <div style={{ padding: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: '1.5rem', fontWeight: 900, fontFamily: 'Outfit', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ width: '12px', height: '12px', background: 'var(--primary-yellow)', borderRadius: '50%', boxShadow: '0 0 10px var(--primary-yellow)' }}></span>
            ASPIRE<span style={{ color: 'var(--primary-yellow)' }}>ADMIN</span>
          </div>
          <button className="admin-mobile-toggle" onClick={() => setSidebarOpen(false)} style={{ background: 'none', border: 'none', color: '#fff' }}>
            <X size={24} />
          </button>
        </div>

        <nav style={{ flexGrow: 1, padding: '2rem 1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <Link href="/admin" onClick={() => setSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', background: pathname === '/admin' ? 'rgba(255,215,0,0.1)' : 'transparent', color: pathname === '/admin' ? 'var(--primary-yellow)' : '#888', transition: 'all 0.3s' }}>
            <LayoutDashboard size={20} />
            <span style={{ fontWeight: 500 }}>Dashboard</span>
          </Link>
          <Link href="/admin/queries" onClick={() => setSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', color: pathname.includes('/queries') ? 'var(--primary-yellow)' : '#888', transition: 'all 0.3s' }}>
            <MessageSquare size={20} />
            <span style={{ fontWeight: 500 }}>Inquiries</span>
            <span style={{ marginLeft: 'auto', background: 'var(--primary-yellow)', color: '#000', padding: '2px 8px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 'bold' }}>New</span>
          </Link>
          <Link href="/admin/clients" onClick={() => setSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', color: pathname.includes('/clients') ? 'var(--primary-yellow)' : '#888', transition: 'all 0.3s' }}>
            <Users size={20} />
            <span style={{ fontWeight: 500 }}>Clients</span>
          </Link>
          <Link href="/admin/settings" onClick={() => setSidebarOpen(false)} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', color: pathname.includes('/settings') ? 'var(--primary-yellow)' : '#888', transition: 'all 0.3s' }}>
            <Settings size={20} />
            <span style={{ fontWeight: 500 }}>Settings</span>
          </Link>
        </nav>

        <div style={{ padding: '2rem 1rem', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '8px', color: '#888' }}>
            <LogOut size={20} />
            <span style={{ fontWeight: 500 }}>Back to Site</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main style={{ flexGrow: 1, display: 'flex', flexDirection: 'column', minWidth: 0 }}>
        {/* Top Header */}
        <header style={{ height: '80px', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 1.5rem', background: 'rgba(10,10,10,0.8)', backdropFilter: 'blur(10px)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button className="admin-mobile-toggle" onClick={() => setSidebarOpen(true)} style={{ background: 'none', border: 'none', color: '#fff' }}>
              <Menu size={24} />
            </button>
            <div className="admin-search-bar" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#111', padding: '0.75rem 1.5rem', borderRadius: '30px', border: '1px solid #222', width: '300px' }}>
              <Search size={18} color="#666" />
              <input type="text" placeholder="Search..." style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '0.9rem' }} />
            </div>
            <style>{`@media(max-width: 768px) { .admin-search-bar { display: none !important; } }`}</style>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
            <div style={{ position: 'relative', cursor: 'pointer' }}>
              <Bell size={22} color="#888" />
              <span style={{ position: 'absolute', top: '-4px', right: '-4px', width: '10px', height: '10px', background: 'var(--primary-yellow)', borderRadius: '50%' }}></span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <div style={{ textAlign: 'right', display: 'none', '@media(min-width: 768px)': { display: 'block' } } as any}>
                <div style={{ fontSize: '0.9rem', fontWeight: 600 }}>Admin</div>
              </div>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary-yellow), #FF8C00)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#000', fontWeight: 'bold' }}>
                A
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div style={{ flexGrow: 1, padding: '2rem', overflowY: 'auto', overflowX: 'hidden' }}>
          {children}
        </div>
      </main>
    </div>
  );
}
