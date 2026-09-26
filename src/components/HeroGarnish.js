// Decorative fruit/coffee "garnish" scattered around the hero cup —
// original flat-vector SVG icons (no external images), replacing the
// old plain color spheres. Purely decorative, so the whole group stays
// aria-hidden via its parent (.hero-art).
export default function HeroGarnish() {
  return (
    <>
      <svg className="garnish garnish-mint" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <linearGradient id="mintGrad" x1="15%" y1="0%" x2="85%" y2="100%">
            <stop offset="0%" stopColor="#c8f26b" />
            <stop offset="55%" stopColor="#7fc23f" />
            <stop offset="100%" stopColor="#3f7d1e" />
          </linearGradient>
        </defs>
        <path
          d="M50 6 C78 20 88 56 54 92 C50 95 48 95 44 92 C14 60 20 20 50 6 Z"
          fill="url(#mintGrad)"
        />
        <path
          d="M50 6 C78 20 88 56 54 92"
          fill="none"
          stroke="#3f7d1e"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M50 18 L50 82" stroke="#356b18" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 34 L66 26 M50 50 L68 44 M50 66 L64 62" stroke="#356b18" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 34 L34 28 M50 50 L32 46 M50 66 L36 64" stroke="#356b18" strokeWidth="2" strokeLinecap="round" />
        <path d="M40 22 C46 24 48 30 46 36" fill="none" stroke="rgba(255,255,255,.55)" strokeWidth="2.5" strokeLinecap="round" />
        <g transform="translate(78,20)">
          <g className="garnish-sparkle sparkle-a">
            <path d="M0 -9 L2 -2 L9 0 L2 2 L0 9 L-2 2 L-9 0 L-2 -2 Z" fill="#f3ffc9" />
          </g>
        </g>
        <g transform="translate(20,70)">
          <g className="garnish-sparkle sparkle-b">
            <path d="M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z" fill="#ffffff" />
          </g>
        </g>
        <g transform="translate(70,74)">
          <g className="garnish-sparkle sparkle-c">
            <path d="M0 -6 L1.4 -1.4 L6 0 L1.4 1.4 L0 6 L-1.4 1.4 L-6 0 L-1.4 -1.4 Z" fill="#f3ffc9" />
          </g>
        </g>
      </svg>

      <svg className="garnish garnish-kiwi" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="kiwiGrad" cx="38%" cy="34%" r="70%">
            <stop offset="0%" stopColor="#eef8a0" />
            <stop offset="60%" stopColor="#c3e453" />
            <stop offset="100%" stopColor="#8fb524" />
          </radialGradient>
        </defs>
        <circle cx="50" cy="50" r="47" fill="#8a6134" />
        <circle cx="50" cy="50" r="40" fill="url(#kiwiGrad)" />
        <circle cx="50" cy="50" r="17" fill="#f6f9e6" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 29;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return <ellipse key={i} cx={x} cy={y} rx="2.6" ry="4" fill="#2c2408" transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`} />;
        })}
      </svg>

      <svg className="garnish garnish-beans" viewBox="0 0 120 90" aria-hidden="true">
        <defs>
          <linearGradient id="beanGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8a5d3a" />
            <stop offset="100%" stopColor="#3f2717" />
          </linearGradient>
        </defs>
        <ellipse cx="40" cy="48" rx="26" ry="34" fill="url(#beanGrad)" transform="rotate(-18 40 48)" />
        <path d="M40 20 Q30 48 40 76" fill="none" stroke="#20130a" strokeWidth="3" strokeLinecap="round" transform="rotate(-18 40 48)" />
        <ellipse cx="30" cy="34" rx="5" ry="8" fill="rgba(255,255,255,.28)" transform="rotate(-18 40 48)" />
        <ellipse cx="78" cy="42" rx="22" ry="29" fill="url(#beanGrad)" transform="rotate(14 78 42)" />
        <path d="M78 17 Q69 42 78 67" fill="none" stroke="#20130a" strokeWidth="2.6" strokeLinecap="round" transform="rotate(14 78 42)" />
        <ellipse cx="68" cy="30" rx="4" ry="7" fill="rgba(255,255,255,.24)" transform="rotate(14 78 42)" />
      </svg>

      <svg className="garnish garnish-flowers" viewBox="0 0 100 100" aria-hidden="true">
        <defs>
          <radialGradient id="petalGrad" cx="50%" cy="20%" r="90%">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="100%" stopColor="#ffe3ea" />
          </radialGradient>
        </defs>
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="28"
            rx="10"
            ry="16"
            fill="url(#petalGrad)"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="9" fill="#f0c94a" />
        <circle cx="16" cy="78" r="6" fill="#ef7f9a" />
        <circle cx="30" cy="88" r="4" fill="#ef7f9a" />
      </svg>

      <svg className="garnish garnish-berries" viewBox="0 0 130 120" aria-hidden="true">
        <defs>
          <linearGradient id="splashGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ff9fb8" />
            <stop offset="100%" stopColor="#e0517a" />
          </linearGradient>
          <radialGradient id="berryGradA" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#4a2a4d" />
            <stop offset="100%" stopColor="#1c0f1f" />
          </radialGradient>
          <radialGradient id="berryGradB" cx="35%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#b23a5e" />
            <stop offset="100%" stopColor="#6e1730" />
          </radialGradient>
        </defs>
        <path
          d="M8 92 C2 74 18 56 40 60 C46 40 74 36 84 54 C104 50 122 66 116 86 C126 96 120 116 100 114 C82 128 54 122 50 104 C30 112 12 108 8 92 Z"
          fill="url(#splashGrad)"
          opacity="0.95"
        />
        {[
          [34, 40], [46, 30], [58, 40], [40, 52], [52, 52], [64, 46],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="url(#berryGradA)" />
        ))}
        {[
          [86, 30], [96, 22], [104, 32], [92, 40], [100, 44],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6.5" fill="url(#berryGradB)" />
        ))}
        <circle cx="43" cy="36" r="2" fill="rgba(255,255,255,.6)" />
        <circle cx="92" cy="27" r="2" fill="rgba(255,255,255,.6)" />
      </svg>
    </>
  );
}
