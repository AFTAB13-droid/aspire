"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Mic, Send, Volume2, VolumeX } from "lucide-react";

// TypeScript declarations for Web Speech API
declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

export default function VoiceChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  
  const [messages, setMessages] = useState<{role: 'user' | 'assistant', content: string}[]>([
    { role: 'assistant', content: 'Hello! I am the AspireMint AI. How can I help you scale your brand today?' }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Voice States
  const [isListening, setIsListening] = useState(false);
  const [voiceEnabled, setVoiceEnabled] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const recognitionRef = useRef<any>(null);

  // Auto-scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  // Init Web Speech API
  useEffect(() => {
    if (typeof window !== "undefined") {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      if (SpeechRecognition) {
        recognitionRef.current = new SpeechRecognition();
        recognitionRef.current.continuous = false;
        recognitionRef.current.interimResults = false;

        recognitionRef.current.onresult = (event: any) => {
          const transcript = event.results[0][0].transcript;
          setInput(transcript);
          handleSend(transcript);
        };

        recognitionRef.current.onend = () => {
          setIsListening(false);
        };
      }
    }
  }, [messages]); // Keep fresh closure of handleSend if needed

  const toggleVoice = () => {
    if (voiceEnabled) {
      // If we are turning it off, immediately stop speaking
      window.speechSynthesis.cancel();
      setVoiceEnabled(false);
    } else {
      setVoiceEnabled(true);
    }
  };

  const speakText = (text: string) => {
    if (!voiceEnabled || typeof window === "undefined") return;
    window.speechSynthesis.cancel();
    
    // Clean markdown bold/stars for speech
    const cleanText = text.replace(/[*_#]/g, '');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(v => v.name.includes("Google US English") || v.lang === "en-US");
    if (preferredVoice) utterance.voice = preferredVoice;
    
    window.speechSynthesis.speak(utterance);
  };

  const toggleListen = () => {
    if (isListening) {
      recognitionRef.current?.stop();
      setIsListening(false);
    } else {
      window.speechSynthesis.cancel(); // Stop talking if user wants to speak
      recognitionRef.current?.start();
      setIsListening(true);
    }
  };

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;

    // Stop speaking when user sends a new message
    window.speechSynthesis.cancel();

    // Add user message
    const newMessages = [...messages, { role: 'user' as const, content: textToSend }];
    setMessages(newMessages);
    setInput("");
    setIsTyping(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();
      const botReply = data.text || "I couldn't process that.";
      
      setMessages(prev => [...prev, { role: 'assistant', content: botReply }]);
      
      // Voice synthesis triggers automatically when disabled state is checked inside speakText
      speakText(botReply);
    } catch (err) {
      setMessages(prev => [...prev, { role: 'assistant', content: "Sorry, I encountered an error connecting to the server. Please try again." }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            style={{
              position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999,
              width: '60px', height: '60px', borderRadius: '50%',
              background: 'linear-gradient(135deg, var(--primary-yellow), #FF8C00)',
              border: 'none', boxShadow: '0 10px 25px rgba(255,215,0,0.4)',
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center'
            }}
          >
            <div style={{ position: 'absolute', width: '100%', height: '100%', borderRadius: '50%', border: '2px solid var(--primary-yellow)', animation: 'pulseGlow 2s infinite' }}></div>
            <MessageSquare color="#000" size={28} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            style={{
              position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 9999,
              width: '380px', height: '600px', maxHeight: '80vh',
              background: 'rgba(10, 10, 10, 0.85)', backdropFilter: 'blur(20px)',
              border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px',
              display: 'flex', flexDirection: 'column', overflow: 'hidden',
              boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
            }}
          >
            {/* Header */}
            <div style={{ background: 'linear-gradient(135deg, #1a1a1a, #0a0a0a)', padding: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#25D366', boxShadow: '0 0 10px #25D366' }}></div>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontFamily: 'Outfit', margin: 0, color: '#fff' }}>AspireMint AI</h3>
                  <div style={{ fontSize: '0.75rem', color: '#888' }}>Online - Instant Cloud</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <button onClick={toggleVoice} style={{ background: 'none', border: 'none', color: voiceEnabled ? 'var(--primary-yellow)' : '#666', cursor: 'pointer', transition: 'all 0.2s' }}>
                  {voiceEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
                </button>
                <button onClick={() => { setIsOpen(false); window.speechSynthesis.cancel(); }} style={{ background: 'none', border: 'none', color: '#888', cursor: 'pointer' }}>
                  <X size={24} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            <div style={{ flexGrow: 1, padding: '1.5rem', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {messages.map((msg, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  style={{ alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start', maxWidth: '80%' }}
                >
                  <div style={{ 
                    background: msg.role === 'user' ? 'var(--primary-yellow)' : '#1a1a1a', 
                    color: msg.role === 'user' ? '#000' : '#fff', 
                    padding: '1rem', borderRadius: '16px', 
                    borderBottomRightRadius: msg.role === 'user' ? 0 : '16px',
                    borderBottomLeftRadius: msg.role === 'user' ? '16px' : 0,
                    fontSize: '0.95rem', lineHeight: 1.5,
                    border: msg.role === 'user' ? 'none' : '1px solid #333'
                  }}>
                    {msg.content}
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <div style={{ alignSelf: 'flex-start', background: '#1a1a1a', border: '1px solid #333', padding: '1rem', borderRadius: '16px', borderBottomLeftRadius: 0 }}>
                  <div style={{ display: 'flex', gap: '4px' }}>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary-yellow)', borderRadius: '50%', animation: 'bounce 1s infinite' }}></div>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary-yellow)', borderRadius: '50%', animation: 'bounce 1s infinite 0.2s' }}></div>
                    <div style={{ width: '6px', height: '6px', background: 'var(--primary-yellow)', borderRadius: '50%', animation: 'bounce 1s infinite 0.4s' }}></div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
              
              <style>{`
                @keyframes bounce { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-5px); } }
                @keyframes spin { 100% { transform: rotate(360deg); } }
              `}</style>
            </div>

            {/* Input Area */}
            <div style={{ padding: '1rem', borderTop: '1px solid rgba(255,255,255,0.05)', background: '#050505', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <button 
                onClick={toggleListen}
                style={{ 
                  width: '45px', height: '45px', borderRadius: '50%', border: 'none', 
                  background: isListening ? '#ff4444' : '#1a1a1a', 
                  color: isListening ? '#fff' : '#888', 
                  cursor: 'pointer', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s',
                  boxShadow: isListening ? '0 0 15px rgba(255,68,68,0.5)' : 'none'
                }}
              >
                <Mic size={20} />
              </button>
              
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder={isListening ? "Listening..." : "Type your message..."}
                style={{ flexGrow: 1, background: 'transparent', border: 'none', color: '#fff', outline: 'none', padding: '0.5rem' }}
              />
              
              <button 
                onClick={() => handleSend()}
                disabled={!input.trim()}
                style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', border: 'none', 
                  background: input.trim() ? 'var(--primary-yellow)' : '#1a1a1a', 
                  color: input.trim() ? '#000' : '#888', 
                  cursor: input.trim() ? 'pointer' : 'not-allowed', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s' 
                }}
              >
                <Send size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
