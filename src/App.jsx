import { useState } from "react";

const cocktails = [
  {
    id: 1,
    name: "Negroni",
    tagline: "Bitter, bold & beautiful",
    spirit: "Gin",
    ingredients: ["30ml Gin", "30ml Campari", "30ml Sweet Vermouth"],
    garnish: "Orange peel",
    glass: "Rocks glass",
    method: "Add all ingredients to a mixing glass with ice. Stir for 30 seconds until well-chilled. Strain into a rocks glass over a large ice cube. Express an orange peel over the drink and drop it in.",
    color: "#E8453C",
    gradient: ["#E8453C", "#C62828"],
    emoji: "\u{1F943}",
  },
  {
    id: 2,
    name: "Margarita",
    tagline: "Bright, citrusy & refreshing",
    spirit: "Tequila",
    ingredients: ["50ml Tequila Blanco", "30ml Fresh Lime Juice", "20ml Triple Sec", "10ml Agave Syrup"],
    garnish: "Lime wheel, salt rim",
    glass: "Coupe glass",
    method: "Add all ingredients to a shaker with ice. Shake vigorously for 15 seconds. Strain into a salt-rimmed glass. Garnish with a lime wheel on the rim.",
    color: "#7CB342",
    gradient: ["#AED581", "#558B2F"],
    emoji: "\u{1F34B}",
  },
  {
    id: 3,
    name: "Espresso Martini",
    tagline: "Rich, velvety & energizing",
    spirit: "Vodka",
    ingredients: ["50ml Vodka", "30ml Fresh Espresso", "20ml Coffee Liqueur", "10ml Simple Syrup"],
    garnish: "Three coffee beans",
    glass: "Coupe glass",
    method: "Brew a fresh shot of espresso and let it cool slightly. Add all ingredients to a shaker with ice. Shake hard for 15 seconds to build a nice foam. Double strain into a chilled coupe glass. Float three coffee beans on the foam.",
    color: "#5D4037",
    gradient: ["#795548", "#3E2723"],
    emoji: "\u2615",
  },
  {
    id: 4,
    name: "Daiquiri",
    tagline: "Simple, elegant & perfectly balanced",
    spirit: "Rum",
    ingredients: ["60ml White Rum", "30ml Fresh Lime Juice", "20ml Simple Syrup"],
    garnish: "Lime wheel",
    glass: "Coupe glass",
    method: "Add all ingredients to a shaker with ice. Shake vigorously for 12 seconds. Double strain into a chilled coupe glass. Garnish with a lime wheel.",
    color: "#F9A825",
    gradient: ["#FFF176", "#F9A825"],
    emoji: "\u{1F379}",
  },
  {
    id: 5,
    name: "Old Fashioned",
    tagline: "Timeless, smooth & sophisticated",
    spirit: "Whiskey",
    ingredients: ["60ml Bourbon or Rye Whiskey", "10ml Simple Syrup", "2 dashes Angostura Bitters", "1 dash Orange Bitters"],
    garnish: "Orange peel, Luxardo cherry",
    glass: "Rocks glass",
    method: "Add simple syrup and bitters to a rocks glass. Add a large ice cube. Pour whiskey over the ice. Stir gently for 20 seconds. Express an orange peel over the drink, rub it on the rim, and drop it in. Add a cherry.",
    color: "#D84315",
    gradient: ["#FF8A65", "#BF360C"],
    emoji: "\u{1F943}",
  },
  {
    id: 6,
    name: "Mojito",
    tagline: "Fresh, minty & tropical",
    spirit: "Rum",
    ingredients: ["50ml White Rum", "30ml Fresh Lime Juice", "20ml Simple Syrup", "8 Mint Leaves", "Soda Water"],
    garnish: "Mint sprig, lime wheel",
    glass: "Highball glass",
    method: "Gently muddle mint leaves with simple syrup in a shaker - do not shred them. Add rum, lime juice, and ice. Shake briefly. Strain into a highball glass filled with crushed ice. Top with soda water. Garnish with a mint sprig and lime wheel.",
    color: "#2E7D32",
    gradient: ["#81C784", "#1B5E20"],
    emoji: "\u{1F33F}",
  },
  {
    id: 7,
    name: "Whiskey Sour",
    tagline: "Silky, tangy & warming",
    spirit: "Whiskey",
    ingredients: ["50ml Bourbon", "30ml Fresh Lemon Juice", "20ml Simple Syrup", "15ml Egg White (optional)"],
    garnish: "Angostura bitters drops, lemon peel",
    glass: "Coupe glass",
    method: "Add all ingredients to a shaker without ice. Dry shake for 10 seconds to emulsify the egg white. Add ice and shake hard for another 15 seconds. Double strain into a chilled coupe glass. Add a few drops of Angostura bitters on the foam and drag a toothpick through them for design.",
    color: "#F9A825",
    gradient: ["#FFD54F", "#E65100"],
    emoji: "\u{1F34B}",
  },
  {
    id: 8,
    name: "Aperol Spritz",
    tagline: "Light, bubbly & bittersweet",
    spirit: "Aperol",
    ingredients: ["90ml Prosecco", "60ml Aperol", "30ml Soda Water"],
    garnish: "Orange slice",
    glass: "Wine glass",
    method: "Fill a large wine glass with ice. Pour in the Prosecco first, then the Aperol. Top with a splash of soda water. Gently stir once or twice. Garnish with a fresh orange slice.",
    color: "#FF6F00",
    gradient: ["#FFB74D", "#E65100"],
    emoji: "\u{1F34A}",
  },
];

const spiritIcons = {
  All: "\u{1F378}",
  Gin: "\u{1FAD2}",
  Tequila: "\u{1F335}",
  Vodka: "\u{1F9CA}",
  Rum: "\u{1F3DD}",
  Whiskey: "\u{1F943}",
  Wine: "\u{1F377}",
  Others: "\u2728",
};

function CocktailImage({ cocktail, height = 280 }) {
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

function CocktailCard({ cocktail, onClick }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={() => onClick(cocktail)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        cursor: "pointer",
        borderRadius: 16,
        overflow: "hidden",
        background: "#fff",
        boxShadow: hovered ? "0 20px 40px rgba(0,0,0,0.12)" : "0 4px 16px rgba(0,0,0,0.06)",
        transform: hovered ? "translateY(-6px) scale(1.01)" : "translateY(0) scale(1)",
        transition: "all 0.3s ease",
      }}
    >
      <CocktailImage cocktail={cocktail} />
      <div style={{ padding: "18px 20px 22px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <h3 style={{ margin: 0, fontSize: 20, fontWeight: 700, color: "#1a1a1a" }}>
            {cocktail.name}
          </h3>
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
              {ing.replace(/\d+ml\s*/g, "")}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function CocktailDetail({ cocktail, onBack }) {
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

function FilterBar({ spirits, active, onChange }) {
  return (
    <div style={{ display: "flex", gap: 8, justifyContent: "center", flexWrap: "wrap", marginBottom: 40 }}>
      {spirits.map((s) => {
        const isActive = s === active;
        return (
          <button
            key={s}
            onClick={() => onChange(s)}
            style={{
              padding: "9px 20px",
              borderRadius: 30,
              border: isActive ? "2px solid #1a1a1a" : "2px solid #e8e8e8",
              background: isActive ? "#1a1a1a" : "#fff",
              color: isActive ? "#fff" : "#666",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s ease",
              fontFamily: "inherit",
              display: "flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <span style={{ fontSize: 15 }}>{spiritIcons[s]}</span>
            {s}
          </button>
        );
      })}
    </div>
  );
}

export default function App() {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [spirit, setSpirit] = useState("All");

  const knownSpirits = ["Gin", "Tequila", "Vodka", "Rum", "Whiskey", "Wine"];
  const spirits = ["All", ...knownSpirits, "Others"];

  const filtered = cocktails.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.ingredients.some((i) => i.toLowerCase().includes(search.toLowerCase()));
    const isOther = !knownSpirits.includes(c.spirit);
    const matchSpirit = spirit === "All" || (spirit === "Others" ? isOther : c.spirit === spirit);
    return matchSearch && matchSpirit;
  });

  return (
    <div style={{ fontFamily: "'Inter', 'Helvetica Neue', sans-serif", background: "#FAFAFA", minHeight: "100vh" }}>
      <style>{
        "@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap');" +
        "@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }" +
        "* { box-sizing: border-box; }" +
        "@media (max-width: 768px) { .grid { grid-template-columns: 1fr !important; } .detail-grid { grid-template-columns: 1fr !important; } }"
      }</style>

      <header
        style={{
          background: "rgba(255,255,255,0.95)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
          padding: "16px 24px",
          position: "sticky",
          top: 0,
          zIndex: 100,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div
            style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: 12 }}
            onClick={() => { setSelected(null); setSearch(""); setSpirit("All"); }}
          >
            <div>
              <div style={{ fontSize: 18, fontWeight: 800, color: "#1a1a1a", letterSpacing: -0.3, lineHeight: 1 }}>
                One Drink at a Time
              </div>
              <div style={{ fontSize: 10, color: "#bbb", textTransform: "uppercase", letterSpacing: 2, marginTop: 3 }}>
                A cocktail journey
              </div>
            </div>
          </div>
          {!selected && (
            <input
              type="text"
              placeholder="Search cocktails or ingredients..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                padding: "10px 18px",
                borderRadius: 30,
                border: "1px solid #e0e0e0",
                fontSize: 14,
                width: 280,
                outline: "none",
                background: "#f8f8f8",
                transition: "border-color 0.2s, box-shadow 0.2s",
                fontFamily: "inherit",
              }}
              onFocus={(e) => { e.target.style.borderColor = "#bbb"; e.target.style.boxShadow = "0 0 0 3px rgba(0,0,0,0.04)"; }}
              onBlur={(e) => { e.target.style.borderColor = "#e0e0e0"; e.target.style.boxShadow = "none"; }}
            />
          )}
        </div>
      </header>

      <main style={{ maxWidth: 1100, margin: "0 auto", padding: "40px 24px 80px" }}>
        {selected ? (
          <CocktailDetail cocktail={selected} onBack={() => setSelected(null)} />
        ) : (
          <>
            <div style={{ textAlign: "center", marginBottom: 32 }}>
              <h1
                style={{
                  fontFamily: "'DM Serif Display', Georgia, serif",
                  fontSize: 46,
                  fontWeight: 400,
                  color: "#1a1a1a",
                  margin: "0 0 10px",
                  letterSpacing: -0.5,
                }}
              >
                One Drink at a Time
              </h1>
              <p style={{ fontSize: 17, color: "#999", margin: 0 }}>
                {cocktails.length} recipes and counting {"\u00B7"} a cocktail journey
              </p>
            </div>

            <FilterBar spirits={spirits} active={spirit} onChange={setSpirit} />

            <div
              className="grid"
              style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }}
            >
              {filtered.map((c) => (
                <CocktailCard key={c.id} cocktail={c} onClick={setSelected} />
              ))}
            </div>

            {filtered.length === 0 && (
              <div style={{ textAlign: "center", padding: "60px 0", color: "#bbb" }}>
                <p style={{ fontSize: 48, margin: "0 0 12px" }}>{"\u{1F50D}"}</p>
                <p style={{ fontSize: 16 }}>
                  {"No cocktails found" + (search ? ' for "' + search + '"' : "") + (spirit !== "All" ? " in " + spirit : "")}
                </p>
              </div>
            )}
          </>
        )}
      </main>

      <footer style={{ textAlign: "center", padding: "24px", borderTop: "1px solid #eee", color: "#ccc", fontSize: 13 }}>
        {"One Drink at a Time \u00B7 Made with \u{1F378} & love"}
      </footer>
    </div>
  );
}
