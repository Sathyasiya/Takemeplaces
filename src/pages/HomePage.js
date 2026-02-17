import { useState } from "react";
import { HotelCard } from "../components";
import { hotels, destinations } from "../data";

export default function HomePage({ setPage, setSelectedHotel }) {
  const [search, setSearch] = useState({ dest: "", checkin: "", checkout: "", guests: "2" });

  return (
    <div>
      {/* ── HERO ── */}
      <div
        style={{
          minHeight: "92vh", position: "relative", overflow: "hidden",
          background: "linear-gradient(160deg, #0d2e1e 0%, #1a5c3a 50%, #0a7c6e 100%)",
          display: "flex", alignItems: "center",
        }}
      >
        {/* Background image overlay */}
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=60")`,
            backgroundSize: "cover", backgroundPosition: "center", opacity: 0.18,
          }}
        />
        <div
          style={{
            position: "absolute", top: -80, right: -80, width: 500, height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(116,198,157,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute", bottom: -100, left: -100, width: 600, height: 600,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(10,124,110,0.15) 0%, transparent 70%)",
          }}
        />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", padding: "0 40px", width: "100%" }}>
          <div style={{ maxWidth: 660 }}>
            <div
              className="badge fade-up"
              style={{
                marginBottom: 20,
                background: "rgba(116,198,157,0.15)", color: "#74c69d",
                border: "1px solid rgba(116,198,157,0.3)",
              }}
            >
              🌿 Discover Your Paradise
            </div>

            <h1
              className="fade-up-2"
              style={{ fontSize: "4.2rem", fontWeight: 900, color: "white", lineHeight: 1.1, marginBottom: 24 }}
            >
              The World is<br />
              <span style={{ color: "#74c69d" }}>Waiting</span> for You
            </h1>

            <p
              className="fade-up-3"
              style={{
                fontSize: "1.2rem", color: "rgba(183,228,199,0.85)", lineHeight: 1.7,
                marginBottom: 48, fontWeight: 300,
              }}
            >
              From misty rainforests to turquoise lagoons — we find you the perfect stay
              for every journey you dream of.
            </p>

            {/* Search Box */}
            <div
              className="fade-up-4"
              style={{
                background: "rgba(255,255,255,0.96)", borderRadius: 20,
                padding: "28px 28px 24px",
                boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              }}
            >
              <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1fr", gap: 16, alignItems: "end" }}>
                <div>
                  <label className="input-label">Destination</label>
                  <input
                    className="input"
                    placeholder="🌍  Where are you going?"
                    value={search.dest}
                    onChange={(e) => setSearch({ ...search, dest: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Check-in</label>
                  <input
                    className="input" type="date"
                    value={search.checkin}
                    onChange={(e) => setSearch({ ...search, checkin: e.target.value })}
                  />
                </div>
                <div>
                  <label className="input-label">Check-out</label>
                  <input
                    className="input" type="date"
                    value={search.checkout}
                    onChange={(e) => setSearch({ ...search, checkout: e.target.value })}
                  />
                </div>
                <button
                  className="btn-primary"
                  onClick={() => setPage("Hotels")}
                  style={{ height: 48 }}
                >
                  Search 🔍
                </button>
              </div>

              <div style={{ marginTop: 16, display: "flex", gap: 10, flexWrap: "wrap" }}>
                {["Bali", "Maldives", "Kerala", "Phuket", "Costa Rica"].map((d) => (
                  <button
                    key={d}
                    onClick={() => setPage("Hotels")}
                    style={{
                      background: "#f0f7f4", border: "none", borderRadius: 8,
                      padding: "6px 14px", fontSize: "0.85rem", cursor: "pointer",
                      color: "#2d6a4f", fontWeight: 500, transition: "all 0.2s",
                    }}
                    onMouseOver={(e) => { e.target.style.background = "#d8f3dc"; }}
                    onMouseOut={(e) => { e.target.style.background = "#f0f7f4"; }}
                  >
                    {d}
                  </button>
                ))}
                <span style={{ fontSize: "0.82rem", color: "#6b7c73", alignSelf: "center" }}>
                  Popular destinations →
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Ribbon */}
        <div
          style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            background: "rgba(13,31,23,0.6)", backdropFilter: "blur(10px)",
            borderTop: "1px solid rgba(116,198,157,0.15)",
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "18px 40px", display: "flex", gap: 60 }}>
            {[
              ["50,000+", "Hotels Worldwide"],
              ["180+", "Destinations"],
              ["2M+", "Happy Guests"],
              ["4.9★", "Average Rating"],
            ].map(([n, l]) => (
              <div key={l}>
                <div style={{ color: "#74c69d", fontWeight: 800, fontSize: "1.3rem", fontFamily: "Playfair Display, serif" }}>{n}</div>
                <div style={{ color: "rgba(183,228,199,0.6)", fontSize: "0.82rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── POPULAR DESTINATIONS ── */}
      <div className="section" style={{ paddingBottom: 0 }}>
        <div className="badge" style={{ marginBottom: 12 }}>🗺 Top Picks</div>
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Handpicked tropical havens loved by thousands of travellers every season.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {destinations.map((d) => (
            <div
              key={d.name}
              className="card"
              style={{ cursor: "pointer", position: "relative", overflow: "hidden", borderRadius: 20, height: 280 }}
              onClick={() => setPage("Hotels")}
            >
              <img
                src={d.img} alt={d.name}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s" }}
                onMouseOver={(e) => { e.target.style.transform = "scale(1.07)"; }}
                onMouseOut={(e) => { e.target.style.transform = "scale(1)"; }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,23,0.85) 0%, transparent 55%)" }} />
              <div style={{ position: "absolute", bottom: 20, left: 20 }}>
                <div style={{ color: "white", fontFamily: "Playfair Display", fontWeight: 700, fontSize: "1.35rem" }}>{d.name}</div>
                <div style={{ color: "rgba(183,228,199,0.8)", fontSize: "0.85rem" }}>{d.country} · {d.hotels.toLocaleString()} hotels</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED HOTELS ── */}
      <div className="section">
        <div className="badge" style={{ marginBottom: 12 }}>🏨 Featured</div>
        <h2 className="section-title">Top-Rated Stays</h2>
        <p className="section-sub">Exceptional hotels loved by our guests, curated just for you.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {hotels.slice(0, 3).map((h) => (
            <HotelCard key={h.id} hotel={h} setPage={setPage} setSelectedHotel={setSelectedHotel} />
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <button className="btn-outline" onClick={() => setPage("Hotels")}>View All Hotels →</button>
        </div>
      </div>

      {/* ── WHY US ── */}
      <div style={{ background: "linear-gradient(135deg, #f0f7f4, #d8f3dc)", padding: "80px 40px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <div className="badge" style={{ marginBottom: 12 }}>✨ Why Us</div>
            <h2 className="section-title">Why Choose Take Me Places?</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
            {[
              ["🌿", "Eco-Conscious", "We partner only with sustainable hotels committed to protecting nature."],
              ["💰", "Best Price Guarantee", "Found it cheaper? We'll match it — no questions asked."],
              ["🛎", "24/7 Concierge", "Our travel experts are always a call or chat away to help you."],
              ["🔒", "Secure Booking", "Your payments and personal data are always fully protected."],
            ].map(([icon, title, desc]) => (
              <div
                key={title}
                style={{
                  textAlign: "center", padding: "32px 20px",
                  background: "white", borderRadius: 20,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
                }}
              >
                <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{icon}</div>
                <h3 style={{ fontSize: "1.1rem", fontFamily: "DM Sans", fontWeight: 700, color: "#1a3d2b", marginBottom: 10 }}>{title}</h3>
                <p style={{ fontSize: "0.9rem", color: "#6b7c73", lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA BANNER ── */}
      <div style={{ background: "linear-gradient(135deg, #1a3d2b, #0a7c6e)", padding: "80px 40px", textAlign: "center" }}>
        <h2 style={{ color: "white", fontSize: "2.8rem", fontFamily: "Playfair Display", fontWeight: 900, marginBottom: 16 }}>
          Ready for Your Next Adventure?
        </h2>
        <p style={{ color: "rgba(183,228,199,0.8)", fontSize: "1.1rem", marginBottom: 36 }}>
          Join over 2 million happy travellers who found their perfect stay with us.
        </p>
        <button className="btn-gold" onClick={() => setPage("Hotels")}>Explore Hotels Now →</button>
      </div>
    </div>
  );
}
