import React, { useEffect, useRef } from 'react';

const contacts = [
  {
    icon: '📧',
    label: 'Email',
    value: 'joicesanket2@gmail.com',
    href: 'mailto:joicesanket2@gmail.com',
    iconBg: 'rgba(255,107,53,0.12)',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sanketjoice',
    href: 'https://linkedin.com/in/sanketjoice',
    iconBg: 'rgba(56,182,255,0.10)',
  },
  {
    icon: '📸',
    label: 'Instagram',
    value: '@sanktuary__',
    href: 'https://www.instagram.com/sanktuary__',
    iconBg: 'rgba(244,114,182,0.10)',
  },
  {
    icon: '📱',
    label: 'Phone',
    value: '+91 99863 81852',
    href: 'tel:+919986381852',
    iconBg: 'rgba(52,211,153,0.10)',
  },
];

export default function Contact() {
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
      id="contact"
      ref={ref}
      style={{
        padding: '7rem 3rem',
        background: 'linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(124,58,237,0.05) 100%)',
        borderTop: '1px solid rgba(255,255,255,0.06)',
      }}
    >
      <div style={{ maxWidth: 560 }}>
        <div className="sr" style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '2.5rem' }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(255,107,53,0.25)', border: '1px solid rgba(255,107,53,0.5)' }} />
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.2em', color: 'rgba(240,236,228,0.3)', textTransform: 'uppercase' }}>
            Contact
          </span>
        </div>

        <h2
          className="sr sr-d1"
          style={{ fontFamily: "'Cabinet Grotesk', sans-serif", fontSize: 'clamp(2.5rem,6vw,5rem)', fontWeight: 900, letterSpacing: '-0.04em', lineHeight: 1, marginBottom: '1.5rem', color: '#f0ece4' }}
        >
          Let's talk<span style={{ color: '#ff6b35' }}>.</span>
        </h2>

        <p
          className="sr sr-d2"
          style={{ fontSize: '1rem', lineHeight: 1.75, color: 'rgba(240,236,228,0.45)', marginBottom: '2.5rem' }}
        >
          Whether you have a project idea, a job opportunity, or just want to say hi,
          my inbox is always open. I'll get back to you.
        </p>

        <a
          className="sr sr-d3"
          href="mailto:joicesanket2@gmail.com"
          style={{
            display: 'inline-block',
            background: '#ff6b35',
            color: '#fff',
            fontFamily: "'Cabinet Grotesk', sans-serif",
            fontSize: '0.82rem',
            fontWeight: 700,
            padding: '0.8rem 1.8rem',
            borderRadius: 100,
            textDecoration: 'none',
            letterSpacing: '0.03em',
            transition: 'background 0.2s, transform 0.2s',
            marginBottom: '2rem',
          }}
          onMouseEnter={(e) => { e.target.style.background = '#e55a25'; e.target.style.transform = 'translateY(-2px)'; }}
          onMouseLeave={(e) => { e.target.style.background = '#ff6b35'; e.target.style.transform = 'translateY(0)'; }}
        >
          Send me an email
        </a>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginTop: '2rem' }}>
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel={c.href.startsWith('http') ? 'noreferrer' : undefined}
              className={`contact-row sr sr-d${Math.min(i + 2, 4)}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                padding: '1rem 1.2rem',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
                borderRadius: 12,
                textDecoration: 'none',
              }}
            >
              <div style={{ width: 36, height: 36, borderRadius: 9, background: c.iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', flexShrink: 0 }}>
                {c.icon}
              </div>
              <div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', color: 'rgba(240,236,228,0.3)', letterSpacing: '0.06em', marginBottom: 2 }}>
                  {c.label}
                </div>
                <div style={{ fontSize: '0.88rem', fontWeight: 600, color: '#f0ece4' }}>{c.value}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
