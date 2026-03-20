export default function AgeGate({ onVerify }) {
  return (
    <div style={{
      fontFamily: "'Inter', 'Helvetica Neue', sans-serif",
      background: "#1a1a1a",
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}>
      <style>{"@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=DM+Serif+Display&display=swap');"}</style>
      <div style={{
        textAlign: "center",
        padding: "48px 40px",
        maxWidth: 420,
        background: "#fff",
        borderRadius: 20,
        boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
      }}>
        <div style={{ fontSize: 48, marginBottom: 16 }}>{"\u{1F378}"}</div>
        <h1 style={{
          fontFamily: "'DM Serif Display', Georgia, serif",
          fontSize: 28,
          fontWeight: 400,
          color: "#1a1a1a",
          margin: "0 0 8px",
        }}>
          One Drink at a Time
        </h1>
        <p style={{ fontSize: 14, color: "#999", margin: "0 0 32px" }}>
          A cocktail journey
        </p>
        <div style={{
          width: 60,
          height: 1,
          background: "#e0e0e0",
          margin: "0 auto 32px",
        }} />
        <p style={{
          fontSize: 16,
          color: "#444",
          margin: "0 0 8px",
          fontWeight: 600,
        }}>
          Are you of legal drinking age?
        </p>
        <p style={{
          fontSize: 13,
          color: "#999",
          margin: "0 0 32px",
        }}>
          You must be 18 or older to enter this site
        </p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
          <button
            onClick={onVerify}
            style={{
              padding: "14px 40px",
              borderRadius: 30,
              border: "none",
              background: "#1a1a1a",
              color: "#fff",
              fontSize: 15,
              fontWeight: 700,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
          >
            Yes, I am 18+
          </button>
          <button
            onClick={() => window.location.href = "https://www.google.com"}
            style={{
              padding: "14px 40px",
              borderRadius: 30,
              border: "2px solid #e0e0e0",
              background: "#fff",
              color: "#888",
              fontSize: 15,
              fontWeight: 600,
              cursor: "pointer",
              fontFamily: "inherit",
              transition: "all 0.2s ease",
            }}
          >
            No
          </button>
        </div>
        <p style={{
          fontSize: 11,
          color: "#ccc",
          marginTop: 32,
          lineHeight: 1.5,
        }}>
          By entering this site you agree that you are of legal drinking age in your country of residence.
        </p>
      </div>
    </div>
  );
}
