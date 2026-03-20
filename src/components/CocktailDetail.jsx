import CocktailImage from "./CocktailImage";

export default function CocktailDetail({ cocktail, onBack }) {
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: "0 24px", animation: "fadeIn 0.3s ease" }}>
      <button
        onClick={onBack}
        style={{
          background: "none",
          border: "none",
          cursor: "pointer",
          fontSize: 15,
          color: "#888",
          padding: "8px 0",
          marginBottom: 16,
          display: "flex",
          alignItems: "center",
          gap: 6,
          fontFamily: "inherit",
        }}
      >
        <span style={{ fontSize: 20 }}>{"\u2190"}</span> Back to all cocktails
      </button>
      <div
        className="detail-grid"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "start" }}
      >
        <div style={{ borderRadius: 16, overflow: "hidden", boxShadow: "0 8px 30px rgba(0,0,0,0.1)" }}>
          <CocktailImage cocktail={cocktail} height={460} />
        </div>
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12 }}>
            <span
              style={{
                display: "inline-block",
                background: cocktail.color + "18",
                color: cocktail.color,
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 20,
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              {cocktail.glass}
            </span>
            <span
              style={{
                display: "inline-block",
                background: "#f5f5f5",
                color: "#666",
                fontSize: 12,
                fontWeight: 600,
                padding: "6px 14px",
                borderRadius: 20,
                letterSpacing: 0.5,
                textTransform: "uppercase",
              }}
            >
              {cocktail.spirit}
            </span>
          </div>
          <h1 style={{ margin: "0 0 6px", fontSize: 36, fontWeight: 800, color: "#1a1a1a", letterSpacing: -0.5 }}>
            {cocktail.name}
          </h1>
          <p style={{ margin: "0 0 32px", fontSize: 17, color: "#999", fontStyle: "italic" }}>
            {cocktail.tagline}
          </p>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#bbb", margin: "0 0 14px" }}>
              Ingredients
            </h3>
            {cocktail.ingredients.map((ing, i) => (
              <div
                key={i}
                style={{
                  padding: "10px 0",
                  borderBottom: "1px solid #f0f0f0",
                  fontSize: 15,
                  color: "#444",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: cocktail.color, flexShrink: 0 }} />
                {ing}
              </div>
            ))}
          </div>
          <div style={{ marginBottom: 28 }}>
            <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#bbb", margin: "0 0 10px" }}>
              Garnish
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#444" }}>{cocktail.garnish}</p>
          </div>
          <div>
            <h3 style={{ fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: 1.5, color: "#bbb", margin: "0 0 10px" }}>
              Method
            </h3>
            <p style={{ margin: 0, fontSize: 15, color: "#444", lineHeight: 1.7 }}>{cocktail.method}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
