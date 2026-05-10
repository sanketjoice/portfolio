import React, { useEffect, useRef } from 'react';

const certs = [
  {
    name: 'Intro to Model Context Protocol',
    org: 'Anthropic',
    year: '2024',
    icon: '◈',
    color: '#ff6b35',
    bg: 'rgba(255,107,53,0.08)',
    border: 'rgba(255,107,53,0.2)',
    tag: 'AI & Dev Tools',
  },
  {
    name: 'Industrial Cyber Security — IEC62443',
    org: 'Udemy',
    year: '2024',
    icon: '⬡',
    color: '#a78bfa',
    bg: 'rgba(167,139,250,0.08)',
    border: 'rgba(167,139,250,0.2)',
    tag: 'Security',
  },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.sr').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="about" ref={ref} style={{ padding: '7rem 3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }} className="sr">
        <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,53,0.25)', border: '1px solid rgba(255,107,53,0.5)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,236,228,0.3)', textTransform: 'uppercase' }}>
          About me
        </span>
      </div>

      <h2
        className="sr sr-d1"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3.5rem' }}
      >
        The person{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,236,228,0.28)' }}>
          behind
        </span>{' '}
        the code
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>
        {/* Text */}
        <div>
          {[
            `I graduated with a BCA from A.M.E.S Degree College and pretty much taught myself how to build things on the internet along the way. No internship at Google, no fancy bootcamp, just curiosity and a lot of time on YouTube tutorials.`,
            `Right now I'm a Software Engineer at Utiltyx, where I build APIs, design data dashboards, and try to keep the codebase from becoming a mess. I cut down code duplication by 40% just by being slightly obsessive about clean components.`,
            `Outside of work I like learning new tools and thinking about why some apps feel great and others feel like a chore. I'm also certified in MCP by Anthropic and Industrial Cyber Security.`,
          ].map((text, i) => (
            <p
              key={i}
              className={`sr sr-d${i + 1}`}
              style={{ fontSize: '0.95rem', lineHeight: 1.85, color: 'rgba(240,236,228,0.5)', marginBottom: '1.2rem', fontWeight: 400 }}
            >
              {text.includes('Utiltyx') ? (
                <>
                  {text.split('Utiltyx')[0]}
                  <span
                    style={{
                      display: 'inline-block',
                      background: 'rgba(247,201,72,0.12)',
                      border: '1px solid rgba(247,201,72,0.3)',
                      color: '#f7c948',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      padding: '0.15rem 0.65rem',
                      borderRadius: 100,
                      letterSpacing: '0.03em',
                    }}
                  >
                    Utiltyx
                  </span>
                  {text.split('Utiltyx')[1]}
                </>
              ) : (
                text
              )}
            </p>
          ))}
        </div>

        {/* Creative cert section */}
        <div className="sr sr-d2">
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.18em', color: 'rgba(240,236,228,0.25)', textTransform: 'uppercase', marginBottom: '1.4rem' }}>
            Certifications
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {certs.map((cert) => (
              <div
                key={cert.name}
                className="cert-card"
                style={{
                  background: cert.bg,
                  border: `1px solid ${cert.border}`,
                  borderRadius: 16,
                  padding: '1.4rem 1.4rem 1.2rem',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {/* Large ghost icon */}
                <div style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', fontSize: '4rem', opacity: 0.06, color: cert.color, lineHeight: 1, pointerEvents: 'none', fontFamily: 'monospace' }}>
                  {cert.icon}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
                  {/* Colored dot + tag */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: cert.color, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', color: cert.color, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      {cert.tag}
                    </span>
                  </div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'rgba(240,236,228,0.2)', letterSpacing: '0.08em' }}>
                    {cert.year}
                  </span>
                </div>

                <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#f0ece4', marginBottom: '0.3rem', lineHeight: 1.3 }}>
                  {cert.name}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(240,236,228,0.35)', fontWeight: 500 }}>
                  Issued by {cert.org}
                </div>
              </div>
            ))}
          </div>

          {/* Small personal touch card */}
          <div
            style={{
              marginTop: '1rem',
              background: 'rgba(255,255,255,0.02)',
              border: '1px solid rgba(255,255,255,0.06)',
              borderRadius: 14,
              padding: '1rem 1.2rem',
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            <div style={{ fontSize: '1.4rem' }}>🎓</div>
            <div>
              <div style={{ fontSize: '0.82rem', fontWeight: 700, color: '#f0ece4', marginBottom: 2 }}>BCA — A.M.E.S Degree College</div>
              <div style={{ fontSize: '0.72rem', color: 'rgba(240,236,228,0.35)' }}>GPA 8.5/10 &nbsp;·&nbsp; 2021–2024</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
