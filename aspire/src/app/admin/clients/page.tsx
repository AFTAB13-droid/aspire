"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Search, MoreHorizontal, X, Edit, Trash2 } from "lucide-react";

export default function ClientsPage() {
  const [clients, setClients] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  
  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentClient, setCurrentClient] = useState<any>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: "", category: "", status: "Active", mrr: "", since: "" });

  const fetchClients = async () => {
    try {
      const res = await fetch("/api/clients");
      const data = await res.json();
      if (data.success) setClients(data.data);
    } catch (error) {
      console.error("Failed to fetch clients", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  const handleOpenModal = (client: any = null) => {
    if (client) {
      setCurrentClient(client);
      setFormData({ name: client.name, category: client.category, status: client.status, mrr: client.mrr, since: client.since });
    } else {
      setCurrentClient(null);
      setFormData({ name: "", category: "", status: "Active", mrr: "", since: "" });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => setIsModalOpen(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const url = currentClient ? `/api/clients/${currentClient._id}` : "/api/clients";
    const method = currentClient ? "PUT" : "POST";

    const res = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      handleCloseModal();
      fetchClients();
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this client?")) {
      const res = await fetch(`/api/clients/${id}`, { method: "DELETE" });
      if (res.ok) fetchClients();
    }
  };

  const filteredClients = clients.filter(c => 
    c.name.toLowerCase().includes(search.toLowerCase()) || 
    c.category.toLowerCase().includes(search.toLowerCase())
  );

  const totalMRR = filteredClients.reduce((acc, client) => {
    const num = parseFloat(client.mrr.replace(/[^0-9.-]+/g,""));
    return acc + (isNaN(num) ? 0 : num);
  }, 0);

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
        <div>
          <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Active Clients</h1>
          <p style={{ color: '#888' }}>Manage your current client roster and retainers.</p>
        </div>
        <button onClick={() => handleOpenModal()} className="btn-premium" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-yellow)', color: '#000', padding: '0.75rem 1.5rem', fontSize: '0.9rem', borderRadius: '8px' }}>
          <Plus size={18} /> Add New Client
        </button>
      </div>

      <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '2rem', marginBottom: '2rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: '#1a1a1a', padding: '0.5rem 1rem', borderRadius: '8px', border: '1px solid #333', width: '300px' }}>
            <Search size={16} color="#666" />
            <input 
              type="text" 
              placeholder="Search clients..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#fff', width: '100%', outline: 'none', fontSize: '0.85rem' }} 
            />
          </div>
          <div style={{ color: '#888', fontSize: '0.9rem' }}>
            Total MRR: <strong style={{ color: '#fff', fontSize: '1.2rem' }}>₹{totalMRR.toLocaleString()}</strong>
          </div>
        </div>

        {loading ? (
          <div style={{ textAlign: 'center', padding: '3rem', color: '#888' }}>Loading clients...</div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
            {filteredClients.map((client) => (
              <div key={client._id} style={{ background: '#0a0a0a', border: '1px solid #222', borderRadius: '12px', padding: '1.5rem', position: 'relative', overflow: 'hidden' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: 'linear-gradient(135deg, #222, #111)', border: '1px solid #333', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>
                    {client.name.charAt(0)}
                  </div>
                  <span style={{ 
                    background: client.status === 'Active' ? 'rgba(37, 211, 102, 0.1)' : client.status === 'Onboarding' ? 'rgba(255, 215, 0, 0.1)' : 'rgba(255,255,255,0.05)', 
                    color: client.status === 'Active' ? '#25D366' : client.status === 'Onboarding' ? 'var(--primary-yellow)' : '#888', 
                    padding: '4px 10px', borderRadius: '20px', fontSize: '0.75rem', fontWeight: 600 
                  }}>
                    {client.status}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem' }}>{client.name}</h3>
                <p style={{ color: '#888', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{client.category}</p>
                
                <div style={{ borderTop: '1px solid #222', paddingTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Monthly Retainer</div>
                    <div style={{ fontWeight: 600 }}>{client.mrr}</div>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontSize: '0.75rem', color: '#666', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.25rem' }}>Client Since</div>
                    <div style={{ color: '#aaa', fontSize: '0.9rem' }}>{client.since}</div>
                  </div>
                </div>

                {/* Actions Hover Layer */}
                <div style={{ position: 'absolute', top: '1rem', right: '1rem', display: 'flex', gap: '0.5rem' }}>
                  <button onClick={() => handleOpenModal(client)} style={{ background: 'rgba(255,255,255,0.1)', border: 'none', color: '#fff', cursor: 'pointer', padding: '0.4rem', borderRadius: '6px' }}>
                    <Edit size={16} />
                  </button>
                  <button onClick={() => handleDelete(client._id)} style={{ background: 'rgba(255,0,0,0.1)', border: 'none', color: '#ff4444', cursor: 'pointer', padding: '0.4rem', borderRadius: '6px' }}>
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            ))}
            {filteredClients.length === 0 && (
              <div style={{ gridColumn: '1 / -1', padding: '4rem', textAlign: 'center', color: '#666' }}>No clients found.</div>
            )}
          </div>
        )}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'rgba(0,0,0,0.8)', zIndex: 999, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div 
              initial={{ scale: 0.95 }} animate={{ scale: 1 }} exit={{ scale: 0.95 }}
              style={{ background: '#111', border: '1px solid #333', padding: '2rem', borderRadius: '16px', width: '100%', maxWidth: '500px', position: 'relative' }}
            >
              <button onClick={handleCloseModal} style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                <X size={24} />
              </button>
              <h2 style={{ marginBottom: '1.5rem' }}>{currentClient ? "Edit Client" : "Add New Client"}</h2>
              
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>Client Name</label>
                  <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '6px' }} />
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>Category / Service</label>
                  <input type="text" required value={formData.category} onChange={e => setFormData({...formData, category: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '6px' }} />
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>Status</label>
                    <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '6px' }}>
                      <option>Active</option>
                      <option>Onboarding</option>
                      <option>Paused</option>
                    </select>
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>MRR (e.g. ₹5,000)</label>
                    <input type="text" required value={formData.mrr} onChange={e => setFormData({...formData, mrr: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '6px' }} />
                  </div>
                </div>
                <div>
                  <label style={{ display: 'block', marginBottom: '0.5rem', fontSize: '0.85rem', color: '#888' }}>Client Since (e.g. Jun 2026)</label>
                  <input type="text" required value={formData.since} onChange={e => setFormData({...formData, since: e.target.value})} style={{ width: '100%', padding: '0.75rem', background: '#000', border: '1px solid #333', color: '#fff', borderRadius: '6px' }} />
                </div>
                <button type="submit" style={{ background: 'var(--primary-yellow)', color: '#000', padding: '1rem', border: 'none', borderRadius: '8px', fontWeight: 600, marginTop: '1rem', cursor: 'pointer' }}>
                  {currentClient ? "Update Client" : "Save Client"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
