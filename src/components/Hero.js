'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import HeroGarnish from './HeroGarnish';

export default function Hero() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = true;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      video.play().catch(() => {
        // Poster remains visible when autoplay is blocked.
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
          preload="metadata"
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
            Fruit,
            <br />
            <em>but make it art.</em>
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
          <p className="hero-wordmark">ปิกนิก</p>
          <div className="hero-cup">
            <div className="hero-cup-photo">
              <Image
                src="/images/hero-cup.png"
                alt=""
                fill
                sizes="(max-width: 620px) 55vw, 260px"
                style={{ objectFit: 'contain' }}
                priority
              />
            </div>
          </div>
          <HeroGarnish />
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
