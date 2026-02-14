import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function HeroCarousel({ slides = [], interval = 5000 }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), interval);
    return () => clearInterval(id);
  }, [slides.length, interval]);

  const current = slides[index];
  if (!current) return null;

  return (
    <div className="vf-hero" style={{ position: 'relative', height: 520 }}>
      <AnimatePresence initial={false}>
        <motion.div
          key={current.image}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.7 }}
          style={{
            position: 'absolute',
            inset: 0,
            background: `url("${current.image}") center/cover no-repeat`,
          }}
        />
      </AnimatePresence>
      <div className="vf-hero__inner">
        <div className="vf-hero__title">{current.title}</div>
        <div className="vf-hero__subtitle">{current.subtitle}</div>
        {current.cta && <a href={current.cta.href} className="vf-btn">{current.cta.label}</a>}
      </div>
    </div>
  );
}
