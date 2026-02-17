import { hotels } from "../data";

const STATUS_STYLE = {
  Confirmed: { bg: "#d8f3dc", color: "#2d6a4f" },
  Upcoming:  { bg: "#fff4d6", color: "#a0720a" },
  Completed: { bg: "#f0f0f0", color: "#555"    },
};

const BOOKINGS = [
  {
    id: "TMP-2025-001",
    hotel: "The Jungle Canopy Resort",
    location: "Bali, Indonesia",
    checkin: "Mar 15, 2025", checkout: "Mar 20, 2025",
    nights: 5, total: 963,
    status: "Confirmed",
    img: hotels[0].img,
  },
  {
    id: "TMP-2025-002",
    hotel: "Green Peak Sanctuary",
    location: "Kerala, India",
    checkin: "Apr 2, 2025", checkout: "Apr 6, 2025",
    nights: 4, total: 398,
    status: "Upcoming",
    img: hotels[2].img,
  },
  {
    id: "TMP-2024-089",
    hotel: "Serenity Islands Resort",
    location: "Phuket, Thailand",
    checkin: "Dec 20, 2024", checkout: "Dec 26, 2024",
    nights: 6, total: 1068,
    status: "Completed",
    img: hotels[5].img,
  },
];

export default function BookingsPage({ setPage }) {
  return (
    <div>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a3d2b, #2d6a4f)", padding: "80px 40px 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="badge"
            style={{
              marginBottom: 14,
              background: "rgba(116,198,157,0.15)", color: "#74c69d",
              border: "1px solid rgba(116,198,157,0.25)",
            }}
          >
            📋 Your Trips
          </div>
          <h1
            style={{ color: "white", fontFamily: "Playfair Display", fontSize: "2.8rem", fontWeight: 900, marginBottom: 8 }}
          >
            My Bookings
          </h1>
          <p style={{ color: "rgba(183,228,199,0.75)", fontSize: "1rem" }}>
            All your travel plans in one place.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "50px 40px" }}>

        {/* Summary cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20, marginBottom: 48 }}>
          {[
            ["🧳", "3",  "Total Bookings"],
            ["✅", "1",  "Confirmed"],
            ["📅", "1",  "Upcoming"],
            ["⭐", "15", "Nights Stayed"],
          ].map(([icon, n, l]) => (
            <div
              key={l}
              style={{
                background: "white", borderRadius: 18, padding: "24px 20px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.06)", textAlign: "center",
              }}
            >
              <div style={{ fontSize: "1.8rem", marginBottom: 8 }}>{icon}</div>
              <div style={{ fontFamily: "Playfair Display", fontSize: "1.8rem", fontWeight: 900, color: "#1a3d2b" }}>{n}</div>
              <div style={{ fontSize: "0.82rem", color: "#6b7c73" }}>{l}</div>
            </div>
          ))}
        </div>

        {/* Booking list */}
        <h2 style={{ fontFamily: "Playfair Display", fontSize: "1.6rem", fontWeight: 900, color: "#1a3d2b", marginBottom: 24 }}>
          All Bookings
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {BOOKINGS.map((b) => (
            <div
              key={b.id}
              style={{
                background: "white", borderRadius: 20, overflow: "hidden",
                boxShadow: "0 4px 20px rgba(0,0,0,0.07)", display: "flex",
              }}
            >
              <img src={b.img} alt={b.hotel} style={{ width: 180, objectFit: "cover", flexShrink: 0 }} />

              <div
                style={{
                  padding: "24px 28px", flex: 1,
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 8 }}>
                    <h3
                      style={{ fontFamily: "Playfair Display", fontSize: "1.2rem", fontWeight: 700, color: "#1a3d2b" }}
                    >
                      {b.hotel}
                    </h3>
                    <span
                      style={{
                        padding: "3px 12px", borderRadius: 20,
                        fontSize: "0.78rem", fontWeight: 700,
                        background: STATUS_STYLE[b.status].bg,
                        color:      STATUS_STYLE[b.status].color,
                      }}
                    >
                      {b.status}
                    </span>
                  </div>

                  <p style={{ color: "#6b7c73", fontSize: "0.88rem", marginBottom: 10 }}>
                    📍 {b.location} · Booking ID: {b.id}
                  </p>
                  <div style={{ display: "flex", gap: 20 }}>
                    <span style={{ fontSize: "0.88rem", color: "#4a5e53" }}>
                      📅 {b.checkin} → {b.checkout}
                    </span>
                    <span style={{ fontSize: "0.88rem", color: "#4a5e53" }}>
                      🌙 {b.nights} nights
                    </span>
                  </div>
                </div>

                <div style={{ textAlign: "right" }}>
                  <div
                    style={{
                      fontFamily: "Playfair Display", fontSize: "1.6rem",
                      fontWeight: 900, color: "#1a3d2b", marginBottom: 12,
                    }}
                  >
                    ${b.total}
                  </div>
                  <div style={{ display: "flex", gap: 8 }}>
                    {b.status !== "Completed" && (
                      <button className="btn-outline" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
                        Cancel
                      </button>
                    )}
                    <button className="btn-primary" style={{ padding: "8px 16px", fontSize: "0.82rem" }}>
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <p style={{ color: "#6b7c73", marginBottom: 16 }}>Ready for your next adventure?</p>
          <button className="btn-gold" onClick={() => setPage("Hotels")}>Explore More Hotels →</button>
        </div>
      </div>
    </div>
  );
}
