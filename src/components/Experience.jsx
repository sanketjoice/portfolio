import React, { useEffect, useRef } from 'react';

const jobs = [
  {
    company: 'Utiltyx',
    role: 'Software Engineer',
    period: 'Jul 2025 — Present',
    type: 'Full-time',
    typeColor: '#ff6b35',
    typeBg: 'rgba(255,107,53,0.12)',
    typeBorder: 'rgba(255,107,53,0.25)',
    points: [
      'Built API modules with full CRUD, then refactored them into their own microservice so things wouldn\'t keep getting tangled together.',
      'Made dashboards with charts, maps, and tables that actually help users understand their data at a glance.',
      'Used TanStack React Query to handle caching and reduce unnecessary API calls, the app got noticeably snappier.',
      'Broke down a big ball of React code into clean, reusable components. Ended up cutting duplicate code by about 40%.',
    ],
    tech: ['Node.js', 'Express.js', 'Elasticsearch', 'React', 'TanStack Query', 'TypeScript'],
  },
  {
    company: 'Antei Limited',
    role: 'React Developer Intern',
    period: 'Jan 2025 — Mar 2025',
    type: 'Internship',
    typeColor: '#a78bfa',
    typeBg: 'rgba(167,139,250,0.10)',
    typeBorder: 'rgba(167,139,250,0.25)',
    points: [
      'Built an AI skincare app, users upload a photo, it gives back a skin analysis. Connected it to a FastAPI backend for auth and profiles.',
      'Took an old static website and rebuilt it in React + Tailwind. Much faster, much easier to update going forward.',
      'Worked on an HR SaaS dashboard with charts, code snippets in questions, and a bunch of different assessment formats.',
    ],
    tech: ['React', 'Tailwind CSS', 'FastAPI', 'DaisyUI'],
  },
];

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('vis'); }),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll('.sr, .exp-card').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section id="work" ref={ref} style={{ padding: '7rem 3rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }} className="sr">
        <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,53,0.25)', border: '1px solid rgba(255,107,53,0.5)' }} />
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,236,228,0.3)', textTransform: 'uppercase' }}>
          Experience
        </span>
      </div>

      <h2
        className="sr sr-d1"
        style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(2rem,4vw,3.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.05, marginBottom: '3.5rem' }}
      >
        Where I've{' '}
        <span style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'rgba(240,236,228,0.28)' }}>
          worked
        </span>
      </h2>

      {/* Timeline */}
      <div style={{ position: 'relative' }}>
        {/* Vertical line */}
        <div style={{ position: 'absolute', left: '1.1rem', top: 0, bottom: 0, width: 1, background: 'rgba(255,255,255,0.06)' }} />

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {jobs.map((job, i) => (
            <div
              key={job.company}
              className="exp-card"
              style={{ display: 'grid', gridTemplateColumns: '2.4rem 1fr', gap: '1.5rem', paddingBottom: '2.5rem', transitionDelay: `${i * 0.12}s` }}
            >
              {/* Dot */}
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: 4 }}>
                <div style={{ width: 10, height: 10, borderRadius: '50%', border: '2px solid #ff6b35', background: '#0f0f13', flexShrink: 0, position: 'relative', zIndex: 1 }} />
              </div>

              {/* Card */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.07)',
                  borderRadius: 14,
                  padding: '1.5rem',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem', flexWrap: 'wrap', gap: '0.5rem' }}>
                  <div>
                    <div style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.02em', color: '#f0ece4' }}>{job.company}</div>
                    <div style={{ fontSize: '0.78rem', fontWeight: 500, color: 'rgba(240,236,228,0.35)', marginTop: 2, letterSpacing: '0.02em' }}>
                      {job.role} · {job.period} · Remote
                    </div>
                  </div>
                  <div
                    style={{
                      fontSize: '0.62rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      padding: '0.25rem 0.7rem',
                      borderRadius: 100,
                      background: job.typeBg,
                      border: `1px solid ${job.typeBorder}`,
                      color: job.typeColor,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {job.type}
                  </div>
                </div>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.55rem', marginBottom: '1.2rem' }}>
                  {job.points.map((pt) => (
                    <li
                      key={pt}
                      style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'rgba(240,236,228,0.5)', paddingLeft: '1rem', position: 'relative' }}
                    >
                      <span style={{ position: 'absolute', left: 0, top: '0.6em', width: 4, height: 4, borderRadius: '50%', background: '#ff6b35', display: 'block' }} />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: "'JetBrains Mono', monospace",
                        fontSize: '0.62rem',
                        padding: '0.2rem 0.55rem',
                        borderRadius: 5,
                        background: 'rgba(255,255,255,0.05)',
                        color: 'rgba(240,236,228,0.4)',
                        border: '1px solid rgba(255,255,255,0.07)',
                        letterSpacing: '0.04em',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
