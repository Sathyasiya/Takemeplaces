import { useState } from "react";

// ── Navbar ────────────────────────────────────────────────────────────────────
export function Navbar({ page, setPage }) {
  const links = ["Home", "Hotels", "About", "Contact", "My Bookings"];
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage("Home")}>
        🌿 Take Me <span>Places</span>
      </div>
      <div className="nav-links">
        {links.map((l) => (
          <button
            key={l}
            className={`nav-link ${page === l ? "active" : ""}`}
            onClick={() => setPage(l)}
          >
            {l}
          </button>
        ))}
        <button className="nav-cta" onClick={() => setPage("Hotels")}>
          Book Now
        </button>
      </div>
    </nav>
  );
}

// ── Footer ────────────────────────────────────────────────────────────────────
export function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">
            🌿 Take Me <span>Places</span>
          </div>
          <p>
            Your gateway to the world's most breathtaking tropical destinations.
            We craft unforgettable experiences, one stay at a time.
          </p>
          <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
            {["🌍", "📘", "📸", "🐦"].map((icon, i) => (
              <div
                key={i}
                style={{
                  width: 36, height: 36, borderRadius: 10,
                  background: "rgba(116,198,157,0.12)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  cursor: "pointer", fontSize: "1.1rem",
                }}
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          {["Hotels", "Destinations", "Deals", "Luxury Stays"].map((l) => (
            <button key={l} className="footer-link" onClick={() => setPage("Hotels")}>
              {l}
            </button>
          ))}
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          {["About Us", "Careers", "Press", "Blog"].map((l) => (
            <button key={l} className="footer-link" onClick={() => setPage("About")}>
              {l}
            </button>
          ))}
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          {["Contact Us", "Help Center", "Cancellation", "Privacy Policy"].map((l) => (
            <button key={l} className="footer-link" onClick={() => setPage("Contact")}>
              {l}
            </button>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Take Me Places Pvt Ltd. All rights reserved.</p>
        <p>Made with 🌿 for wanderers everywhere</p>
      </div>
    </footer>
  );
}

// ── StarRating ────────────────────────────────────────────────────────────────
export function StarRating({ rating }) {
  return (
    <span className="stars">
      {"★".repeat(Math.floor(rating))}
      {"☆".repeat(5 - Math.floor(rating))}
    </span>
  );
}

// ── HotelCard ─────────────────────────────────────────────────────────────────
export function HotelCard({ hotel, setPage, setSelectedHotel }) {
  return (
    <div
      className="card"
      style={{ cursor: "pointer" }}
      onClick={() => {
        setSelectedHotel(hotel);
        setPage("HotelDetail");
      }}
    >
      <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
        <img
          src={hotel.img}
          alt={hotel.name}
          style={{
            width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s",
          }}
          onMouseOver={(e) => { e.target.style.transform = "scale(1.06)"; }}
          onMouseOut={(e) => { e.target.style.transform = "scale(1)"; }}
        />
        <div style={{ position: "absolute", top: 14, left: 14 }}>
          <span className="badge badge-gold">{hotel.tag}</span>
        </div>
        <div
          style={{
            position: "absolute", top: 14, right: 14,
            background: "rgba(255,255,255,0.95)", borderRadius: 10,
            padding: "6px 12px", fontSize: "0.85rem", fontWeight: 700, color: "#1a3d2b",
          }}
        >
          ❤
        </div>
      </div>

      <div style={{ padding: "20px 22px" }}>
        <h3
          style={{
            fontSize: "1.05rem", fontFamily: "Playfair Display", fontWeight: 700,
            color: "#1a3d2b", lineHeight: 1.3, marginBottom: 6,
          }}
        >
          {hotel.name}
        </h3>
        <p style={{ fontSize: "0.85rem", color: "#6b7c73", marginBottom: 10 }}>
          📍 {hotel.location}
        </p>
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
          <StarRating rating={hotel.rating} />
          <span style={{ fontSize: "0.82rem", color: "#6b7c73" }}>
            {hotel.rating} ({hotel.reviews.toLocaleString()} reviews)
          </span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 16 }}>
          {hotel.amenities.slice(0, 3).map((a) => (
            <span key={a} className="amenity-tag">{a}</span>
          ))}
        </div>
        <div
          style={{
            display: "flex", justifyContent: "space-between", alignItems: "center",
            paddingTop: 14, borderTop: "1px solid #f0f7f4",
          }}
        >
          <div>
            <span
              style={{ fontFamily: "Playfair Display", fontSize: "1.4rem", fontWeight: 900, color: "#1a3d2b" }}
            >
              ${hotel.price}
            </span>
            <span style={{ fontSize: "0.82rem", color: "#6b7c73" }}> / night</span>
          </div>
          <button className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
