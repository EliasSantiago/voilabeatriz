interface PremiumSectionProps {
  title: string;
  description: string;
  cta: string;
}

export function PremiumSection({ title, description, cta }: PremiumSectionProps) {
  return (
    <section className="premium-card">
      <h2>{title}</h2>
      <p>{description}</p>
      <button type="button">{cta}</button>
    </section>
  );
}
