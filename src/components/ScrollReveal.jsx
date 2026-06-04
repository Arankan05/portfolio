import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.05,
        rootMargin: '0px 0px -60px 0px',
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-[1000ms] ease-[cubic-bezier(0.16,1,0.3,1)] transform ${
        isVisible
          ? 'opacity-100 translate-y-0 rotate-0 scale-100'
          : 'opacity-0 translate-y-12 -rotate-3 scale-95 pointer-events-none'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
