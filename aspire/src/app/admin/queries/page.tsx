"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Mail, MoreVertical, Search, Filter, Download } from "lucide-react";

export default function QueriesPage() {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchQueries = async () => {
      try {
        const res = await fetch("/api/contact");
        if (res.status === 401) {
          router.push("/admin/login");
          return;
        }
        const data = await res.json();
        if (data.success) {
          setQueries(data.data);
        }
      } catch (error) {
        console.error("Failed to fetch queries", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQueries();
  }, [router]);

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," 
      + "Date,Name,Brand,Email,Message\n"
      + queries.map(q => `"${new Date(q.createdAt).toISOString()}","${q.name}","${q.brand || ''}","${q.email}","${q.message.replace(/"/g, '""')}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "aspiremint_inquiries.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%' }}>
        <div style={{ width: '40px', height: '40px', border: '3px solid rgba(255,215,0,0.3)', borderTopColor: 'var(--primary-yellow)', borderRadius: '50%', animation: 'spin 1s linear infinite' }}></div>
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  const filteredQueries = queries.filter(q => 
    q.name.toLowerCase().includes(search.toLowerCase()) || 
    q.email.toLowerCase().includes(search.toLowerCase()) || 
    (q.brand && q.brand.toLowerCase().includes(search.toLowerCase())) ||
    q.message.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Inbox & Inquiries</h1>
          <p style={{ color: '#888' }}>Manage all leads and messages from your website.</p>
        </div>
      </div>

      <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', overflow: 'hidden' }}>
        {/* Table Toolbar */}
        <div style={{ padding: '1.5rem 2rem', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#0a0a0a', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1a1a1a', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #333', width: '350px' }}>
            <Search size={16} color="#666" />
            <input 
              type="text" 
              placeholder="Search by name, email, or message..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '0.85rem' }} 
            />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={handleExport} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#1a1a1a', border: '1px solid #333', color: '#fff', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', cursor: 'pointer' }}>
              <Download size={16} /> Export CSV
            </button>
            <button style={{ background: 'var(--primary-yellow)', color: '#000', border: 'none', padding: '0.5rem 1rem', borderRadius: '8px', fontSize: '0.85rem', fontWeight: 600, cursor: 'pointer' }}>
              Mark All as Read
            </button>
          </div>
        </div>
        
        {/* Table */}
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#050505', borderBottom: '1px solid #222' }}>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Lead Contact</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brand / Company</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Message Preview</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Date Received</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredQueries.length === 0 ? (
              <tr>
                <td colSpan={5} style={{ padding: '4rem', textAlign: 'center', color: '#888' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Mail size={48} color="#333" />
                    <div>No inquiries found matching your search.</div>
                  </div>
                </td>
              </tr>
            ) : (
              filteredQueries.map((q) => (
                <tr key={q._id} style={{ borderBottom: '1px solid #1a1a1a', transition: 'background 0.2s', background: q.status === 'new' || !q.status ? 'rgba(255,215,0,0.02)' : 'transparent' }}>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem', color: q.status === 'new' || !q.status ? '#fff' : '#aaa' }}>{q.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#888' }}>{q.email}</div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#ccc' }}>
                      {q.brand || 'No Brand Specified'}
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', maxWidth: '300px' }}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', color: '#888', fontSize: '0.9rem' }} title={q.message}>
                      {q.message}
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', color: '#888', fontSize: '0.9rem' }}>
                    {new Date(q.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button style={{ background: 'transparent', border: '1px solid #333', color: '#fff', cursor: 'pointer', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.8rem' }}>
                        View
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </motion.div>
  );
}
