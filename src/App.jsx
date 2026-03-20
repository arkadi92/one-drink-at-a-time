import { useState } from "react";
import { cocktails } from "./data/cocktails";
import AgeGate from "./components/AgeGate";
import FilterBar from "./components/FilterBar";
import CocktailCard from "./components/CocktailCard";
import CocktailDetail from "./components/CocktailDetail";

const knownSpirits = ["Gin", "Tequila", "Vodka", "Rum", "Whiskey", "Wine"];
const spirits = ["All", ...knownSpirits, "Others"];

export default function App() {
  const [verified, setVerified] = useState(false);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");
  const [spirit, setSpirit] = useState("All");

  const filtered = cocktails.filter((c) => {
    const matchSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.ingredients.some((i) => i.toLowerCase().includes(search.toLowerCase()));
    const isOther = !knownSpirits.includes(c.spirit);
    const matchSpirit = spirit === "All" || (spirit === "Others" ? isOther : c.spirit === spirit);
    return matchSearch && matchSpirit;
  });

  if (!verified) {
    return <AgeGate onVerify={() => setVerified(true)} />;
  }

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
