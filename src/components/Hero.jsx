import React, { useEffect, useRef, useState } from 'react';
import sanketPhoto from '../sanket.jpg';

const phrases = [
  'I love clean code.',
  'I obsess over details.',
  'I ship real things.',
  'I keep learning.',
  'I care about UX.',
];

export default function Hero() {
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const phrase = phrases[phraseIdx];
    let timeout;
    if (!deleting) {
      if (typedText.length < phrase.length) {
        timeout = setTimeout(() => setTypedText(phrase.slice(0, typedText.length + 1)), 60);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (typedText.length > 0) {
        timeout = setTimeout(() => setTypedText(typedText.slice(0, -1)), 30);
      } else {
        setDeleting(false);
        setPhraseIdx((i) => (i + 1) % phrases.length);
      }
    }
    return () => clearTimeout(timeout);
  }, [typedText, deleting, phraseIdx]);

  useEffect(() => {
    const els = heroRef.current?.querySelectorAll('.sr');
    if (!els) return;
    const t = setTimeout(() => els.forEach((el) => el.classList.add('vis')), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      ref={heroRef}
      id="home"
      style={{
        padding: '4rem 3rem 4rem',
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background blobs */}
      <div className="blob" style={{ width: 520, height: 520, background: '#ff6b35', right: -80, top: -120, opacity: 0.11 }} />
      <div className="blob" style={{ width: 360, height: 360, background: '#7c3aed', left: -90, bottom: 0, opacity: 0.12 }} />
      <div className="blob" style={{ width: 300, height: 300, background: '#f7c948', right: '35%', bottom: -80, opacity: 0.09 }} />

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 420px',
        gap: '5rem',
        alignItems: 'center',
        width: '100%',
        maxWidth: 1140,
        margin: '0 auto',
      }}>
        {/* LEFT — text */}
        <div>
          <div className="sr" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.7rem', letterSpacing: '0.18em', color: '#ff6b35', marginBottom: '1.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
            <span style={{ width: 28, height: 1, background: '#ff6b35', display: 'inline-block' }} />
            Full-Stack Developer
          </div>

          <h1 className="sr sr-d1" style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(3.5rem, 7.5vw, 7rem)', fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em', marginBottom: '0.5rem', color: '#f0ece4' }}>
            Hey, I'm<br />Sanket.
          </h1>

          <div className="sr sr-d2" style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)', color: 'rgba(240,236,228,0.28)', marginBottom: '2rem', letterSpacing: '-0.01em' }}>
            I build things for the web.
          </div>

          <div className="sr sr-d2" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.88rem', color: 'rgba(240,236,228,0.5)', marginBottom: '2.2rem', height: '1.4em' }}>
            <span style={{ color: '#ff6b35' }}>{'> '}</span>
            <span style={{ color: 'rgba(240,236,228,0.7)' }}>{typedText}</span>
            <span style={{ display: 'inline-block', width: 2, height: '1em', background: '#ff6b35', marginLeft: 2, verticalAlign: 'middle', animation: 'pulse-dot 1s step-end infinite' }} />
          </div>

          <p className="sr sr-d3" style={{ fontSize: '0.97rem', lineHeight: 1.78, color: 'rgba(240,236,228,0.45)', maxWidth: 460, marginBottom: '2.4rem', fontWeight: 400 }}>
            I'm a developer who loves turning ideas into real, working products.
            Currently at{' '}
            <strong style={{ color: '#f0ece4', fontWeight: 700 }}>Utiltyx</strong>,
            doing everything from APIs to dashboards. I care a lot about how things
            feel, not just how they work.
          </p>

          <div className="sr sr-d3" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a href="#work"
              style={{ background: '#ff6b35', color: '#fff', fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 700, padding: '0.75rem 1.7rem', borderRadius: 100, textDecoration: 'none', letterSpacing: '0.03em', transition: 'background 0.2s, transform 0.2s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.target.style.background = '#e55a25'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.background = '#ff6b35'; e.target.style.transform = 'translateY(0)'; }}>
              See my work
            </a>
            <a href="#contact"
              style={{ background: 'transparent', border: '1px solid rgba(240,236,228,0.2)', color: 'rgba(240,236,228,0.7)', fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '0.82rem', fontWeight: 500, padding: '0.75rem 1.7rem', borderRadius: 100, textDecoration: 'none', letterSpacing: '0.03em', transition: 'border-color 0.2s, color 0.2s, transform 0.2s', display: 'inline-block' }}
              onMouseEnter={(e) => { e.target.style.borderColor = 'rgba(240,236,228,0.5)'; e.target.style.color = '#f0ece4'; e.target.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.target.style.borderColor = 'rgba(240,236,228,0.2)'; e.target.style.color = 'rgba(240,236,228,0.7)'; e.target.style.transform = 'translateY(0)'; }}>
              Get in touch
            </a>
          </div>

          <div className="sr sr-d4" style={{ display: 'flex', gap: '3rem', marginTop: '3.2rem', paddingTop: '2.2rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {[
              { n: '2+', label: 'Years building' },
              { n: '8.5/10', label: 'GPA — BCA' },
            ].map(({ n, label }) => (
              <div key={label}>
                <div style={{ fontSize: '1.75rem', fontWeight: 900, letterSpacing: '-0.03em', color: '#f0ece4' }}>
                  {n.includes('/') ? (
                    <>{n.split('/')[0]}<span style={{ color: '#ff6b35' }}>/{n.split('/')[1]}</span></>
                  ) : (
                    <>{n.replace('+', '')}<span style={{ color: '#ff6b35' }}>+</span></>
                  )}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.63rem', color: 'rgba(240,236,228,0.3)', letterSpacing: '0.06em', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Photo, centered and contained */}
        <div className="sr sr-d2" style={{ position: 'relative', flexShrink: 0, width: 380, margin: '0 auto', transform: 'translateY(-70px)' }}>
          {/* Spinning dashed ring */}
          <svg
            className="animate-spin-slow"
            style={{ position: 'absolute', inset: -22, width: 'calc(100% + 44px)', height: 'calc(100% + 44px)', pointerEvents: 'none' }}
            viewBox="0 0 424 544"
          >
            <rect x="4" y="4" width="416" height="536" rx="26" fill="none" stroke="rgba(255,107,53,0.3)" strokeWidth="1.5" strokeDasharray="12 8" />
          </svg>

          {/* Counter-spin accent ring */}
          <svg
            style={{ position: 'absolute', inset: -7, width: 'calc(100% + 14px)', height: 'calc(100% + 14px)', pointerEvents: 'none', animation: 'spin-slow 14s linear infinite reverse' }}
            viewBox="0 0 394 514"
          >
            <rect x="2" y="2" width="390" height="510" rx="20" fill="none" stroke="rgba(247,201,72,0.18)" strokeWidth="1" strokeDasharray="6 16" />
          </svg>

          {/* Photo — centered crop via object-position */}
          <div style={{ position: 'relative', borderRadius: 20, overflow: 'hidden', width: 380, height: 500 }}>
            <img
              src={sanketPhoto}
              alt="Sanket Joice"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 15%',
                display: 'block',
              }}
            />
            {/* Bottom fade */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 55%, rgba(15,15,19,0.6) 100%)' }} />
          </div>

          {/* Floating badge */}
          <div
            className="animate-float"
            style={{ position: 'absolute', bottom: -16, left: -20, background: '#0f0f13', border: '1px solid rgba(255,107,53,0.3)', borderRadius: 12, padding: '0.65rem 1rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}
          >
            <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#34d399' }} className="animate-pulse-dot" />
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.63rem', color: 'rgba(240,236,228,0.6)', letterSpacing: '0.06em' }}>available now</span>
          </div>
        </div>
      </div>
    </section>
  );
}
