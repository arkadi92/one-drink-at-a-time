import CocktailImage from "./CocktailImage";

export default function CocktailCard({ cocktail, onClick, priority }) {
  return (
    <button
      type="button"
      className="cocktail-card"
      aria-label={`View ${cocktail.name} recipe`}
      onClick={() => onClick(cocktail)}
      style={{
        border: 0, padding: 0, textAlign: "left", fontFamily: "inherit", width: "100%",
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        transition: "all 0.3s ease",
      }}
    >
      <CocktailImage cocktail={cocktail} priority={priority} />
      <div style={{ padding: "18px 20px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h2 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a1a1a" }}>
            {cocktail.name}
          </h2>
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 20,
              background: "#f5f5f5",
              color: "#888",
              textTransform: "uppercase",
              letterSpacing: 0.5,
            }}
          >
            {cocktail.spirit}
          </span>
        </div>
        <p style={{ margin: "6px 0 0", fontSize: 14, color: "#888", fontStyle: "italic" }}>
          {cocktail.tagline}
        </p>
        <div style={{ marginTop: 12, display: "flex", gap: 6, flexWrap: "wrap" }}>
          {cocktail.ingredients.slice(0, 3).map((ing, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                padding: "3px 9px",
                borderRadius: 20,
                background: cocktail.color + "15",
                color: cocktail.color,
                fontWeight: 500,
              }}
            >
              {ing.replace(/[\d.]+\s*ml\s*/g, "").replace(/^\d+\s+(pcs|dashes|Fresh\s+)?/i, "")}
            </span>
          ))}
        </div>
      </div>
    </button>
  );
}
