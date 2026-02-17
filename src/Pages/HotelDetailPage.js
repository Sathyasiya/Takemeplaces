import { useState } from "react";
import { StarRating } from "../components";

export default function HotelDetailPage({ hotel, setPage }) {
  const [nights, setNights] = useState(3);
  const [booked, setBooked]  = useState(false);

  if (!hotel) {
    return (
      <div style={{ padding: 80, textAlign: "center" }}>
        <p style={{ color: "#6b7c73", marginBottom: 24 }}>No hotel selected.</p>
        <button className="btn-primary" onClick={() => setPage("Hotels")}>Browse Hotels</button>
      </div>
    );
  }

  const handleBook = () => {
    setBooked(true);
    setTimeout(() => setPage("My Bookings"), 1800);
  };

  const extraAmenities = ["🚿 Hot Shower", "📺 Smart TV", "❄️ Air Con", "🅿️ Parking", "🌐 Free WiFi"];

  return (
    <div>
      {/* Hero image */}
      <div style={{ height: 420, position: "relative", overflow: "hidden" }}>
        <img src={hotel.img} alt={hotel.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,31,23,0.7) 0%, transparent 60%)" }} />
        <button
          onClick={() => setPage("Hotels")}
          style={{
            position: "absolute", top: 30, left: 30,
            background: "rgba(255,255,255,0.95)", border: "none", borderRadius: 12,
            padding: "10px 18px", cursor: "pointer",
            fontFamily: "DM Sans", fontWeight: 600, fontSize: "0.9rem", color: "#1a3d2b",
          }}
        >
          ← Back to Hotels
        </button>
      </div>

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 40px" }}>
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr 340px", gap: 48,
            marginTop: -60, position: "relative", zIndex: 2,
          }}
        >
          {/* ── LEFT: details ── */}
          <div>
            {/* Title card */}
            <div style={{ background: "white", borderRadius: 24, padding: "36px", boxShadow: "0 8px 40px rgba(0,0,0,0.1)", marginBottom: 24 }}>
              <div style={{ display: "flex", gap: 10, marginBottom: 16, flexWrap: "wrap" }}>
                <span className="badge badge-gold">{hotel.tag}</span>
                <span className="badge">Verified Property</span>
              </div>
              <h1 style={{ fontFamily: "Playfair Display", fontSize: "2.2rem", fontWeight: 900, color: "#1a3d2b", marginBottom: 8 }}>
                {hotel.name}
              </h1>
              <p style={{ color: "#6b7c73", fontSize: "1rem", marginBottom: 14 }}>📍 {hotel.location}</p>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <StarRating rating={hotel.rating} />
                <span style={{ fontWeight: 700, color: "#1a3d2b" }}>{hotel.rating}</span>
                <span style={{ color: "#6b7c73", fontSize: "0.9rem" }}>({hotel.reviews.toLocaleString()} reviews)</span>
              </div>
              <p style={{ color: "#4a5e53", lineHeight: 1.75, fontSize: "1rem" }}>{hotel.desc}</p>
            </div>

            {/* Amenities */}
            <div style={{ background: "white", borderRadius: 24, padding: "28px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)", marginBottom: 24 }}>
              <h3 style={{ fontFamily: "Playfair Display", fontSize: "1.3rem", fontWeight: 700, color: "#1a3d2b", marginBottom: 18 }}>Amenities</h3>
              <div style={{ display: "flex", flexWrap: "wrap" }}>
                {[...hotel.amenities, ...extraAmenities].map((a) => (
                  <span key={a} className="amenity-tag" style={{ margin: 4 }}>{a}</span>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div style={{ background: "white", borderRadius: 24, padding: "28px 32px", boxShadow: "0 4px 20px rgba(0,0,0,0.07)" }}>
              <h3 style={{ fontFamily: "Playfair Display", fontSize: "1.3rem", fontWeight: 700, color: "#1a3d2b", marginBottom: 20 }}>Guest Reviews</h3>
              {[
                { name: "Sarah M.", text: "Absolutely magical! The lush surroundings and eco-friendly vibe made our trip unforgettable.", rating: 5 },
                { name: "James T.", text: "Best resort I've ever stayed in. The staff was incredible and the food was fresh and local.", rating: 5 },
                { name: "Priya R.", text: "A true paradise. We're already planning our return trip!", rating: 4 },
              ].map((r) => (
                <div key={r.name} style={{ padding: "18px 0", borderBottom: "1px solid #f0f7f4" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 8 }}>
                    <strong style={{ fontSize: "0.95rem", color: "#1a3d2b" }}>{r.name}</strong>
                    <StarRating rating={r.rating} />
                  </div>
                  <p style={{ fontSize: "0.9rem", color: "#6b7c73", lineHeight: 1.6 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: booking box ── */}
          <div>
            <div
              style={{
                background: "white", borderRadius: 24, padding: "28px",
                boxShadow: "0 8px 40px rgba(0,0,0,0.12)",
                position: "sticky", top: 90,
              }}
            >
              <div style={{ marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid #f0f7f4" }}>
                <span style={{ fontFamily: "Playfair Display", fontSize: "2rem", fontWeight: 900, color: "#1a3d2b" }}>
                  ${hotel.price}
                </span>
                <span style={{ color: "#6b7c73", fontSize: "0.9rem" }}> / night</span>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="input-label">Check-in</label>
                <input className="input" type="date" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="input-label">Check-out</label>
                <input className="input" type="date" />
              </div>
              <div style={{ marginBottom: 16 }}>
                <label className="input-label">Guests</label>
                <select className="input">
                  <option>1 guest</option>
                  <option>2 guests</option>
                  <option>3 guests</option>
                  <option>4+ guests</option>
                </select>
              </div>

              <div style={{ marginBottom: 16 }}>
                <label className="input-label">Nights</label>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <button
                    onClick={() => setNights(Math.max(1, nights - 1))}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      border: "2px solid #d8f3dc", background: "white",
                      cursor: "pointer", fontSize: "1.1rem", color: "#40916c",
                    }}
                  >−</button>
                  <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "#1a3d2b" }}>{nights}</span>
                  <button
                    onClick={() => setNights(nights + 1)}
                    style={{
                      width: 36, height: 36, borderRadius: 8,
                      border: "2px solid #d8f3dc", background: "white",
                      cursor: "pointer", fontSize: "1.1rem", color: "#40916c",
                    }}
                  >+</button>
                </div>
              </div>

              {/* Price breakdown */}
              <div style={{ background: "#f0f7f4", borderRadius: 12, padding: "14px 16px", marginBottom: 20 }}>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#4a5e53", marginBottom: 6 }}>
                  <span>${hotel.price} × {nights} nights</span>
                  <span>${hotel.price * nights}</span>
                </div>
                <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem", color: "#4a5e53", marginBottom: 6 }}>
                  <span>Service fee</span><span>$18</span>
                </div>
                <div
                  style={{
                    display: "flex", justifyContent: "space-between",
                    fontWeight: 700, fontSize: "1rem", color: "#1a3d2b",
                    paddingTop: 8, borderTop: "1px solid #d8f3dc",
                  }}
                >
                  <span>Total</span>
                  <span>${hotel.price * nights + 18}</span>
                </div>
              </div>

              {booked ? (
                <div
                  style={{
                    textAlign: "center", padding: "16px",
                    background: "#d8f3dc", borderRadius: 12,
                    color: "#2d6a4f", fontWeight: 700,
                  }}
                >
                  ✅ Booking Confirmed! Redirecting…
                </div>
              ) : (
                <button
                  className="btn-primary"
                  style={{ width: "100%", padding: "16px" }}
                  onClick={handleBook}
                >
                  Confirm Booking
                </button>
              )}

              <p style={{ textAlign: "center", fontSize: "0.78rem", color: "#6b7c73", marginTop: 12 }}>
                🔒 Free cancellation · No hidden fees
              </p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: 60 }} />
    </div>
  );
}
