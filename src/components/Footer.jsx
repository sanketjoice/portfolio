import React from 'react';

export default function Footer() {
  return (
    <footer
      style={{
        padding: '1.8rem 3rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <span style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '0.75rem', color: 'rgba(240,236,228,0.2)', fontWeight: 400 }}>
        © 2026 Sanket Joice. All rights reserved.
      </span>
      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'rgba(240,236,228,0.2)', letterSpacing: '0.1em' }}>
        Built with care
      </span>
    </footer>
  );
}
