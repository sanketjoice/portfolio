import React, { useEffect, useRef } from 'react';

const categories = [
  {
    name: 'Languages',
    chips: [
      { label: 'TypeScript', color: '#3b82f6' },
      { label: 'JavaScript (ES6+)', color: '#f59e0b' },
      { label: 'Python', color: '#60a5fa' },
      { label: 'HTML', color: '#f97316' },
      { label: 'CSS / SCSS', color: '#c084fc' },
    ],
  },
  {
    name: 'Frontend',
    chips: [
      { label: 'React.js', color: '#22d3ee' },
      { label: 'TanStack Query', color: '#f43f5e' },
      { label: 'Tailwind CSS', color: '#38bdf8' },
      { label: 'Apache ECharts', color: '#a78bfa' },
      { label: 'Figma', color: '#fb923c' },
    ],
  },
  {
    name: 'Backend & Data',
    chips: [
      { label: 'Node.js', color: '#4ade80' },
      { label: 'Express.js', color: '#86efac' },
      { label: 'Elasticsearch', color: '#fbbf24' },
      { label: 'RESTful APIs', color: '#67e8f9' },
      { label: 'JSON / XML', color: '#94a3b8' },
    ],
  },
  {
    name: 'Tools & Platforms',
    chips: [
      { label: 'Git / GitHub', color: '#f87171' },
      { label: 'VSCode', color: '#60a5fa' },
      { label: 'Adobe Experience Manager', color: '#fb7185' },
      { label: 'NPM', color: '#f97316' },
      { label: 'FastAPI', color: '#34d399' },
    ],
  },
];

export default function Skills() {
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
    <section
      id="skills"
      ref={ref}
      style={{ background: '#0a0a0e', padding: '7rem 3rem' }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }} className="sr">
        <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,53,0.25)', border: '1px solid rgba(255,107,53,0.5)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,236,228,0.3)', textTransform: 'uppercase' }}>
          Skills
        </span>
      </div>

      <h2
        className="sr sr-d1"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3.5rem' }}
      >
        What I work{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,236,228,0.28)' }}>
          with
        </span>
      </h2>

      <div className="sr sr-d2" style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
        {categories.map((cat) => (
          <div
            key={cat.name}
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.07)',
              borderRadius: 16,
              padding: '1.4rem 1.6rem',
            }}
          >
            <div
              style={{
                fontFamily: "'JetBrains Mono', monospace",
                fontSize: '0.65rem',
                fontWeight: 400,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(240,236,228,0.3)',
                marginBottom: '1rem',
              }}
            >
              {cat.name}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {cat.chips.map((chip) => (
                <div
                  key={chip.label}
                  className="skill-chip"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.45rem',
                    padding: '0.45rem 0.9rem',
                    borderRadius: 8,
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    fontFamily: "'Cabinet Grotesk', sans-serif",
                    background: 'rgba(255,255,255,0.04)',
                    border: `1px solid rgba(255,255,255,0.1)`,
                    color: '#d4d0c8',
                  }}
                >
                  {/* Color dot */}
                  <span style={{ width: 7, height: 7, borderRadius: '50%', background: chip.color, flexShrink: 0, display: 'inline-block' }} />
                  {chip.label}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
