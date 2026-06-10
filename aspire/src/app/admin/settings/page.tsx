"use client";

import { motion } from "framer-motion";
import { Save, Shield, Bell, User } from "lucide-react";

export default function SettingsPage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', fontFamily: 'Outfit' }}>Admin Settings</h1>
        <p style={{ color: '#888' }}>Manage your agency preferences, security, and notifications.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '250px 1fr', gap: '3rem' }}>
        {/* Settings Navigation */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: '#111', border: '1px solid #333', borderRadius: '8px', color: '#fff', textAlign: 'left', cursor: 'pointer' }}>
            <User size={18} color="var(--primary-yellow)" /> Profile Settings
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: '1px solid transparent', borderRadius: '8px', color: '#888', textAlign: 'left', cursor: 'pointer' }}>
            <Shield size={18} /> Security & Password
          </button>
          <button style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'transparent', border: '1px solid transparent', borderRadius: '8px', color: '#888', textAlign: 'left', cursor: 'pointer' }}>
            <Bell size={18} /> Notifications
          </button>
        </div>

        {/* Settings Content */}
        <div style={{ background: '#111', border: '1px solid #222', borderRadius: '16px', padding: '3rem' }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem', borderBottom: '1px solid #222', paddingBottom: '1rem' }}>Profile Information</h2>
          
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '500px' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888', fontSize: '0.9rem' }}>Agency Name</label>
              <input type="text" defaultValue="AspireMint" style={{ width: '100%', padding: '1rem', background: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888', fontSize: '0.9rem' }}>Admin Email</label>
              <input type="email" defaultValue="hello@aspiremint.com" style={{ width: '100%', padding: '1rem', background: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: '#888', fontSize: '0.9rem' }}>Notification Email (For new leads)</label>
              <input type="email" defaultValue="leads@aspiremint.com" style={{ width: '100%', padding: '1rem', background: '#000', border: '1px solid #333', borderRadius: '8px', color: '#fff', outline: 'none' }} />
            </div>

            <div style={{ marginTop: '1rem' }}>
              <button type="button" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'var(--primary-yellow)', color: '#000', padding: '0.75rem 2rem', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                <Save size={18} /> Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
