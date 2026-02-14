const items = [
  {
    title: 'FREE SHIPPING',
    subtitle: 'ON ORDER OVER $100',
    color: '#e6b3d4',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M3 7h11v8H3z"/><path d="M14 9h4l3 3v3h-7z"/><circle cx="7.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    title: 'ALWAYS FRESH',
    subtitle: 'PRODUCT WELL PACKAGE',
    color: '#dbc48f',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <path d="M3 12s3-7 9-7 9 7 9 7-3 7-9 7-9-7-9-7z"/><path d="M12 5v14"/>
      </svg>
    ),
  },
  {
    title: 'SUPERIOR QUALITY',
    subtitle: 'QUALITY PRODUCTS',
    color: '#9cc8de',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="8" r="5"/><path d="M8 14l-3 7 7-3 7 3-3-7"/>
      </svg>
    ),
  },
  {
    title: 'SUPPORT',
    subtitle: '24/7 SUPPORT',
    color: '#d9d28a',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
        <circle cx="12" cy="12" r="7"/><path d="M7 12v-1a5 5 0 0 1 10 0v1"/><path d="M8 15h2"/><path d="M14 15h2"/>
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className="vf-features">
      {items.map((it) => (
        <div className="vf-feature" key={it.title}>
          <div className="vf-feature__icon" style={{ background: it.color }}>
            <div className="vf-feature__icon-inner">{it.icon}</div>
          </div>
          <div className="vf-feature__title">{it.title}</div>
          <div className="vf-feature__subtitle">{it.subtitle}</div>
        </div>
      ))}
    </section>
  );
}

