import { spiritIcons } from "../data/cocktails";

export default function FilterBar({ spirits, active, onChange }) {
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
