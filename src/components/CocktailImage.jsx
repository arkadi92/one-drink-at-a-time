export default function CocktailImage({ cocktail, height = 280 }) {
  if (cocktail.image) {
    return (
      <div style={{ width: "100%", height: height, overflow: "hidden" }}>
        <img
          src={cocktail.image}
          alt={cocktail.name}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
      </div>
    );
  }
  const id = "grad-" + cocktail.id;
  return (
    <svg width="100%" height={height} viewBox="0 0 400 350" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id={id} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={cocktail.gradient[0]} />
          <stop offset="100%" stopColor={cocktail.gradient[1]} />
        </linearGradient>
        <radialGradient id={id + "-glow"} cx="50%" cy="60%" r="40%">
          <stop offset="0%" stopColor="rgba(255,255,255,0.2)" />
          <stop offset="100%" stopColor="rgba(255,255,255,0)" />
        </radialGradient>
      </defs>
      <rect width="400" height="350" fill={"url(#" + id + ")"} />
      <rect width="400" height="350" fill={"url(#" + id + "-glow)"} />
      <circle cx="320" cy="60" r="80" fill="rgba(255,255,255,0.06)" />
      <circle cx="80" cy="300" r="60" fill="rgba(255,255,255,0.05)" />
      <circle cx="200" cy="180" r="120" fill="rgba(255,255,255,0.03)" />
      <text x="200" y="170" textAnchor="middle" dominantBaseline="middle" fontSize="72" opacity="0.9">
        {cocktail.emoji}
      </text>
      <text x="200" y="240" textAnchor="middle" fontFamily="Inter, Helvetica, sans-serif" fontSize="18" fontWeight="700" fill="rgba(255,255,255,0.9)" letterSpacing="2">
        {cocktail.name.toUpperCase()}
      </text>
      <line x1="160" y1="258" x2="240" y2="258" stroke="rgba(255,255,255,0.4)" strokeWidth="1" />
      <text x="200" y="280" textAnchor="middle" fontFamily="Inter, Helvetica, sans-serif" fontSize="11" fill="rgba(255,255,255,0.6)" letterSpacing="1.5">
        {cocktail.glass.toUpperCase()}
      </text>
    </svg>
  );
}
