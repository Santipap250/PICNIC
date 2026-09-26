import Image from 'next/image';

// Renders a real product photo when `image` is set on the product,
// otherwise falls back to a lightweight CSS "3D" glass-cup placeholder
// (pure transforms/gradients — no WebGL, no JS animation loop) so the
// storefront looks finished before real photography exists.
export default function ProductVisual({ tone, image, alt, size = 'card' }) {
  if (image) {
    return (
      <div className={`drink-stage drink-photo drink-stage--${size}`}>
        <Image
          src={image}
          alt={alt || ''}
          fill
          sizes="(max-width: 620px) 90vw, 360px"
          style={{ objectFit: 'cover' }}
        />
      </div>
    );
  }

  return (
    <div className={`drink-stage tone-${tone} drink-stage--${size}`} aria-hidden="true">
      <div className="ambient ambient-a" />
      <div className="ambient ambient-b" />
      <div className="cup-shadow" />
      <div className="cup">
        <div className="cup-glass" />
        <div className="cup-liquid" />
        <div className="cup-cream" />
        <div className="cup-straw" />
        <div className="cup-shine" />
      </div>
      <div className="fruit-orb orb-one" />
      <div className="fruit-orb orb-two" />
    </div>
  );
}
