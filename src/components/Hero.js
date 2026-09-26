'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    // Belt-and-braces: some browsers only honor autoplay when `muted`
    // is set as a DOM property, not just the JSX/HTML attribute.
    video.muted = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      video.play().catch(() => {
        // Autoplay can still be blocked by the browser — the poster
        // image stays visible as a perfectly fine static fallback.
      });
    }
  }, []);

  return (
    <section id="top" className="hero">
      <div className="hero-bg" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-bg-video"
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/picnic-hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-bg-overlay" />
      </div>

      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">FRESHLY BLENDED · DAILY</p>
          <h1>
            ปิกนิก,
            <br />
            <em>Smoothies & Coffee.</em>
          </h1>
          <p className="hero-text">
            สมูทตี้ผลไม้ กาแฟ และซิกเนเจอร์ดริงก์ที่ตั้งใจทำให้ทั้งอร่อยและน่าจดจำ
          </p>
          <div className="hero-actions">
            <a className="primary-button" href="#menu">
              เลือกเมนู <span>↗</span>
            </a>
            <a className="text-button" href="#story">
              ดูเรื่องราวร้าน
            </a>
          </div>
          <div className="hero-trust">
            <span>✦</span> Fresh fruit · No compromise · Made to order
          </div>
        </div>

        <div className="hero-art" aria-hidden="true">
          <div className="hero-ring ring-one" />
          <div className="hero-ring ring-two" />
          <div className="hero-glow" />
          <div className="hero-cup">
            <div className="hero-cup-top" />
            <div className="hero-cup-body" />
            <div className="hero-cup-label">
              PICNIC
              <br />
              <small>LIMITED EDITION</small>
            </div>
            <div className="hero-cup-shine" />
            <div className="hero-straw" />
          </div>
          <div className="hero-orb orb-left" />
          <div className="hero-orb orb-right" />
          <div className="hero-badge">
            <b>01</b>
            <span>
              Crafted
              <br />
              in layers
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
