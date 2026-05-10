import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.5rem 3rem', borderBottom: '1px solid rgba(255,255,255,0.06)', position: 'sticky', top: 0, zIndex: 100, background: scrolled ? 'rgba(15,15,19,0.95)' : 'rgba(15,15,19,0.8)', backdropFilter: 'blur(14px)', transition: 'background 0.3s' }}>
      <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1rem', fontWeight: 900, letterSpacing: '-0.02em', color: '#f0ece4' }}>
        Sanket Joice
      </span>

      <div style={{ display: 'flex', gap: '2rem' }}>
        {['About', 'Skills', 'Work', 'Projects', 'Contact'].map((item) => (
          <a key={item} href={`#${item.toLowerCase()}`}
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '0.78rem', fontWeight: 500, color: 'rgba(240,236,228,0.4)', textDecoration: 'none', letterSpacing: '0.04em', transition: 'color 0.2s' }}
            onMouseEnter={(e) => (e.target.style.color = '#f0ece4')}
            onMouseLeave={(e) => (e.target.style.color = 'rgba(240,236,228,0.4)')}>
            {item}
          </a>
        ))}
      </div>

      {/* WhatsApp chat link instead of email */}
      <a href="https://wa.me/919986381852?text=Hey%20Sanket!%20👋"s
        target="_blank"
        rel="noopener noreferrer"
        style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', color: 'rgba(240,236,228,0.35)', letterSpacing: '0.1em', textDecoration: 'none', border: '1px solid rgba(255,255,255,0.1)', padding: '0.4rem 0.9rem', borderRadius: 100, transition: 'color 0.2s, border-color 0.2s' }}
        onMouseEnter={(e) => { e.target.style.color = '#f0ece4'; e.target.style.borderColor = 'rgba(255,255,255,0.3)'; }}
        onMouseLeave={(e) => { e.target.style.color = 'rgba(240,236,228,0.35)'; e.target.style.borderColor = 'rgba(255,255,255,0.1)'; }}>
        say hello
      </a>
    </nav>
  );
}
