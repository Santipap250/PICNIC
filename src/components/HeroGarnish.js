// Decorative fruit/coffee "garnish" scattered around the hero cup —
// original flat-vector SVG icons (no external images), replacing the
// old plain color spheres. Purely decorative, so the whole group stays
// aria-hidden via its parent (.hero-art).
export default function HeroGarnish() {
  return (
    <>
      <svg className="garnish garnish-mint" viewBox="0 0 100 100" aria-hidden="true">
        <path
          d="M50 6 C78 20 88 56 54 92 C50 95 48 95 44 92 C14 60 20 20 50 6 Z"
          fill="#79b83f"
        />
        <path
          d="M50 6 C78 20 88 56 54 92"
          fill="none"
          stroke="#4c7d24"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path d="M50 18 L50 82" stroke="#3f6a1d" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M50 34 L66 26 M50 50 L68 44 M50 66 L64 62" stroke="#3f6a1d" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 34 L34 28 M50 50 L32 46 M50 66 L36 64" stroke="#3f6a1d" strokeWidth="2" strokeLinecap="round" />
      </svg>

      <svg className="garnish garnish-kiwi" viewBox="0 0 100 100" aria-hidden="true">
        <circle cx="50" cy="50" r="47" fill="#8a6134" />
        <circle cx="50" cy="50" r="40" fill="#d7e878" />
        <circle cx="50" cy="50" r="17" fill="#f3f6e2" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i / 12) * Math.PI * 2;
          const r = 29;
          const x = 50 + Math.cos(angle) * r;
          const y = 50 + Math.sin(angle) * r;
          return <ellipse key={i} cx={x} cy={y} rx="2.6" ry="4" fill="#2c2408" transform={`rotate(${(angle * 180) / Math.PI + 90} ${x} ${y})`} />;
        })}
      </svg>

      <svg className="garnish garnish-beans" viewBox="0 0 120 90" aria-hidden="true">
        <ellipse cx="40" cy="48" rx="26" ry="34" fill="#5b3a24" transform="rotate(-18 40 48)" />
        <path d="M40 20 Q30 48 40 76" fill="none" stroke="#2f1c10" strokeWidth="3" strokeLinecap="round" transform="rotate(-18 40 48)" />
        <ellipse cx="78" cy="42" rx="22" ry="29" fill="#6b4830" transform="rotate(14 78 42)" />
        <path d="M78 17 Q69 42 78 67" fill="none" stroke="#331f11" strokeWidth="2.6" strokeLinecap="round" transform="rotate(14 78 42)" />
      </svg>

      <svg className="garnish garnish-flowers" viewBox="0 0 100 100" aria-hidden="true">
        {[0, 72, 144, 216, 288].map((deg) => (
          <ellipse
            key={deg}
            cx="50"
            cy="28"
            rx="10"
            ry="16"
            fill="#fbfaf4"
            transform={`rotate(${deg} 50 50)`}
          />
        ))}
        <circle cx="50" cy="50" r="9" fill="#e8c245" />
        <circle cx="16" cy="78" r="6" fill="#e7738a" />
        <circle cx="30" cy="88" r="4" fill="#e7738a" />
      </svg>

      <svg className="garnish garnish-berries" viewBox="0 0 130 120" aria-hidden="true">
        <path
          d="M8 92 C2 74 18 56 40 60 C46 40 74 36 84 54 C104 50 122 66 116 86 C126 96 120 116 100 114 C82 128 54 122 50 104 C30 112 12 108 8 92 Z"
          fill="#e77a92"
          opacity="0.9"
        />
        {[
          [34, 40], [46, 30], [58, 40], [40, 52], [52, 52], [64, 46],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="7" fill="#241626" />
        ))}
        {[
          [86, 30], [96, 22], [104, 32], [92, 40], [100, 44],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="6.5" fill="#7c1f3a" />
        ))}
        <circle cx="43" cy="36" r="2" fill="rgba(255,255,255,.5)" />
        <circle cx="92" cy="27" r="2" fill="rgba(255,255,255,.5)" />
      </svg>
    </>
  );
}
