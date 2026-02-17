import { useState } from "react";
import { HotelCard } from "../components";
import { hotels } from "../data";

const TAGS = ["All", "Luxury", "Eco-Friendly", "Trending", "Bestseller", "Top Rated", "Family Pick"];

export default function HotelsPage({ setPage, setSelectedHotel }) {
  const [filter, setFilter] = useState("All");
  const [sort, setSort]     = useState("rating");
  const [search, setSearch] = useState("");

  const filtered = hotels
    .filter((h) => filter === "All" || h.tag === filter)
    .filter((h) =>
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.location.toLowerCase().includes(search.toLowerCase())
    )
    .sort((a, b) => (sort === "price" ? a.price - b.price : b.rating - a.rating));

  return (
    <div>
      {/* Header */}
      <div style={{ background: "linear-gradient(135deg, #1a3d2b, #2d6a4f)", padding: "60px 40px 50px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div
            className="badge"
            style={{
              marginBottom: 14,
              background: "rgba(116,198,157,0.15)", color: "#74c69d",
              border: "1px solid rgba(116,198,157,0.25)",
            }}
          >
            🏨 Browse All Hotels
          </div>
          <h1
            style={{ color: "white", fontFamily: "Playfair Display", fontSize: "2.8rem", fontWeight: 900, marginBottom: 16 }}
          >
            Find Your Perfect Stay
          </h1>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <input
              className="input"
              placeholder="🔍 Search by name or destination..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                maxWidth: 380,
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(116,198,157,0.3)",
                color: "white",
              }}
            />
            <select
              className="input"
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              style={{
                width: "auto",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(116,198,157,0.3)",
                color: "white",
              }}
            >
              <option value="rating" style={{ color: "#1a3d2b" }}>Sort: Top Rated</option>
              <option value="price"  style={{ color: "#1a3d2b" }}>Sort: Lowest Price</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "40px" }}>
        {/* Filter chips */}
        <div style={{ display: "flex", gap: 10, marginBottom: 36, flexWrap: "wrap" }}>
          {TAGS.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              style={{
                padding: "8px 20px", borderRadius: 30, border: "2px solid",
                borderColor: filter === t ? "#40916c" : "#d8f3dc",
                background:  filter === t ? "#40916c" : "white",
                color:       filter === t ? "white"   : "#2d6a4f",
                fontFamily: "DM Sans", fontWeight: 600, fontSize: "0.88rem",
                cursor: "pointer", transition: "all 0.2s",
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <p style={{ color: "#6b7c73", marginBottom: 28, fontSize: "0.9rem" }}>
          {filtered.length} {filtered.length === 1 ? "property" : "properties"} found
        </p>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {filtered.map((h) => (
            <HotelCard key={h.id} hotel={h} setPage={setPage} setSelectedHotel={setSelectedHotel} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 20px", color: "#6b7c73" }}>
            <div style={{ fontSize: "3rem", marginBottom: 16 }}>🌿</div>
            <p style={{ fontSize: "1.1rem" }}>No hotels found. Try a different search!</p>
          </div>
        )}
      </div>
    </div>
  );
}
