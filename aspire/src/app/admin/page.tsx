"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { TrendingUp, Users, MessageSquare, Mail, MoreVertical } from "lucide-react";

export default function AdminDashboard() {
  const [queries, setQueries] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
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
    link.setAttribute("download", "aspiremint_dashboard_report.csv");
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

  const statCards = [
    { title: "Total Inquiries", value: queries.length.toString(), icon: <MessageSquare size={24} color="var(--primary-yellow)" />, trend: "+12% this week" },
    { title: "New Leads", value: queries.filter(q => q.status === 'new' || !q.status).length.toString(), icon: <Users size={24} color="#00E5FF" />, trend: "Requires attention" },
    { title: "Conversion Rate", value: "24.5%", icon: <TrendingUp size={24} color="#25D366" />, trend: "+4.2% vs last month" }
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
        <div>
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Dashboard Overview</h1>
          <p style={{ color: '#888' }}>Welcome back. Here is what's happening with your agency today.</p>
        </div>
        <button onClick={handleExport} className="btn-premium" style={{ background: 'var(--primary-yellow)', color: '#000', padding: '0.75rem 1.5rem', fontSize: '0.9rem', borderRadius: '8px', cursor: 'pointer' }}>
          Export Report
        </button>
      </div>

      {/* Metrics Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
        {statCards.map((stat, i) => (
          <div key={i} style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '2rem', position: 'relative', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
              <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {stat.icon}
              </div>
              <span style={{ fontSize: '0.85rem', color: '#888', background: '#1a1a1a', padding: '4px 10px', borderRadius: '20px' }}>
                {stat.trend}
              </span>
            </div>
            <h3 style={{ color: '#888', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{stat.title}</h3>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, fontFamily: 'Outfit' }}>{stat.value}</div>
          </div>
        ))}
      </div>

      {/* Advanced Data Table */}
      <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', overflow: 'hidden' }}>
        <div style={{ padding: '2rem', borderBottom: '1px solid #222', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontSize: '1.5rem', fontFamily: 'Outfit' }}>Recent Inquiries</h2>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <button onClick={() => router.push('/admin/queries')} style={{ background: 'transparent', border: '1px solid #333', color: '#fff', padding: '0.5rem 1rem', borderRadius: '6px', fontSize: '0.85rem', cursor: 'pointer' }}>View All Inquiries</button>
          </div>
        </div>
        
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: '#0a0a0a' }}>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Client</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Brand</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Status</th>
              <th style={{ padding: '1.5rem 2rem', color: '#666', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {queries.length === 0 ? (
              <tr>
                <td colSpan={4} style={{ padding: '3rem', textAlign: 'center', color: '#888' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                    <Mail size={48} color="#333" />
                    <div>No new inquiries at the moment.</div>
                  </div>
                </td>
              </tr>
            ) : (
              queries.slice(0, 5).map((q) => (
                <tr key={q._id} style={{ borderBottom: '1px solid #1a1a1a', transition: 'background 0.2s' }}>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>{q.name}</div>
                    <div style={{ fontSize: '0.85rem', color: '#888' }}>{q.email}</div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <div style={{ background: 'rgba(255,255,255,0.05)', display: 'inline-block', padding: '0.25rem 0.75rem', borderRadius: '6px', fontSize: '0.85rem', color: '#ccc' }}>
                      {q.brand || 'No Brand Specified'}
                    </div>
                  </td>
                  <td style={{ padding: '1.5rem 2rem' }}>
                    <span style={{ 
                      display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                      background: 'rgba(255,215,0,0.1)', color: 'var(--primary-yellow)', padding: '0.25rem 0.75rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 
                    }}>
                      <div style={{ width: '6px', height: '6px', background: 'var(--primary-yellow)', borderRadius: '50%' }}></div>
                      NEW LEAD
                    </span>
                  </td>
                  <td style={{ padding: '1.5rem 2rem', color: '#888', fontSize: '0.9rem' }}>
                    {new Date(q.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
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
