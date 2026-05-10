import React, { useEffect, useRef } from 'react';

const projects = [
  {
    num: '01',
    type: 'Real Estate Platform',
    title: 'HomeLand',
    desc: "A real estate site where you can filter properties by price, type, and location. I wanted search to actually feel useful rather than just decorative. Built responsive layouts that work on any screen size.",
    stack: ['React.js', 'Tailwind CSS', 'Responsive'],
    accent: '#ff6b35',
  },
  {
    num: '02',
    type: 'Data Analytics',
    title: 'React Data',
    desc: "A data analytics dashboard that turns numbers into something you can actually look at. Clean charts, nice layouts, works well on all devices. Focused on making data feel approachable.",
    stack: ['React.js', 'Tailwind CSS', 'Data Viz'],
    accent: '#a78bfa',
  },
];

export default function Projects() {
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
    <section id="projects" ref={ref} style={{ padding: '0 3rem 7rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }} className="sr">
        <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,53,0.25)', border: '1px solid rgba(255,107,53,0.5)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,236,228,0.3)', textTransform: 'uppercase' }}>
          Projects
        </span>
      </div>

      <h2
        className="sr sr-d1"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3rem' }}
      >
        Stuff I{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,236,228,0.28)' }}>
          built
        </span>
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.4rem' }}>
        {projects.map((p, i) => (
          <div
            key={p.title}
            className={`proj-card sr sr-d${i + 1}`}
            style={{
              borderRadius: 18,
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.07)',
              background: 'rgba(255,255,255,0.025)',
            }}
          >
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', letterSpacing: '0.15em', color: 'rgba(240,236,228,0.2)', marginBottom: '1.4rem' }}>
              Project {p.num}
            </div>
            <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(240,236,228,0.3)', marginBottom: '0.7rem' }}>
              {p.type}
            </div>
            <h3 style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: '1.8rem', fontWeight: 900, letterSpacing: '-0.03em', marginBottom: '0.8rem', color: '#f0ece4' }}>
              {p.title}
            </h3>
            <p style={{ fontSize: '0.85rem', lineHeight: 1.75, color: 'rgba(240,236,228,0.45)', marginBottom: '1.5rem' }}>
              {p.desc}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
              {p.stack.map((s) => (
                <span
                  key={s}
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '0.62rem',
                    padding: '0.2rem 0.55rem',
                    borderRadius: 5,
                    background: `rgba(${p.accent === '#ff6b35' ? '255,107,53' : '167,139,250'},0.08)`,
                    border: `1px solid rgba(${p.accent === '#ff6b35' ? '255,107,53' : '167,139,250'},0.2)`,
                    color: p.accent,
                    letterSpacing: '0.04em',
                  }}
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
