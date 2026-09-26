const WORDS = ['REAL FRUIT', 'SMOOTH BLENDS', 'SPECIALTY COFFEE', 'MADE FRESH'];

export default function Ticker() {
  return (
    <section className="ticker" aria-label="จุดเด่นของร้าน">
      {WORDS.map((word, i) => (
        <span key={word}>
          {i > 0 && <i aria-hidden="true">✦</i>}
          {word}
        </span>
      ))}
      <i aria-hidden="true">✦</i>
      <span aria-hidden="true">{WORDS[0]}</span>
    </section>
  );
}
