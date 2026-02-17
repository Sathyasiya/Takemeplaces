export default function AboutPage() {
  const team = [
    { name: "Arjun Mehta",  role: "Founder & CEO",          img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
    { name: "Priya Nair",   role: "Head of Experiences",    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
    { name: "David Lim",    role: "Sustainability Director", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
    { name: "Rhea Kapoor",  role: "Guest Experience Lead",  img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  ];

  return (
    <div>
      {/* Hero */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a3d2b 0%, #0a7c6e 100%)",
          padding: "100px 40px 80px", textAlign: "center",
        }}
      >
        <div
          className="badge"
          style={{
            marginBottom: 16,
            background: "rgba(116,198,157,0.15)", color: "#74c69d",
            border: "1px solid rgba(116,198,157,0.25)",
          }}
        >
          🌿 Our Story
        </div>
        <h1
          style={{
            color: "white", fontFamily: "Playfair Display",
            fontSize: "3.2rem", fontWeight: 900, marginBottom: 20,
          }}
        >
          We Are Take Me Places
        </h1>
        <p
          style={{
            color: "rgba(183,228,199,0.85)", fontSize: "1.2rem",
            maxWidth: 580, margin: "0 auto", lineHeight: 1.7,
          }}
        >
          Born from a love of travel and a deep respect for the planet, we connect
          wanderers with extraordinary places.
        </p>
      </div>

      <div className="section">
        {/* Mission */}
        <div
          style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 60, alignItems: "center", marginBottom: 80,
          }}
        >
          <div>
            <div className="badge" style={{ marginBottom: 14 }}>🎯 Our Mission</div>
            <h2
              style={{
                fontFamily: "Playfair Display", fontSize: "2.2rem",
                fontWeight: 900, color: "#1a3d2b", marginBottom: 20, lineHeight: 1.3,
              }}
            >
              Travel That Leaves the World Better
            </h2>
            <p style={{ color: "#4a5e53", lineHeight: 1.8, fontSize: "1rem", marginBottom: 16 }}>
              At Take Me Places Pvt Ltd, we believe travel should be a force for good.
              Every hotel on our platform is vetted for sustainability, community impact,
              and exceptional guest experience.
            </p>
            <p style={{ color: "#4a5e53", lineHeight: 1.8, fontSize: "1rem" }}>
              We started in 2018 with a simple idea: make eco-conscious travel accessible
              to everyone — from backpackers to luxury seekers — without compromising
              on quality or the planet.
            </p>
          </div>
          <div style={{ height: 400, borderRadius: 24, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}>
            <img
              src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80"
              alt="Travel"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
        </div>

        {/* Values */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">What We Stand For</h2>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28, marginBottom: 80 }}>
          {[
            ["🌱", "Sustainability First", "We certify every property against strict environmental standards. No greenwashing — just real impact."],
            ["🤝", "Community Impact",    "30% of our partner hotels are locally owned, keeping tourism dollars in the hands of local communities."],
            ["💚", "Authentic Experiences","We go beyond the ordinary to bring you stays that create lifelong memories and genuine connections."],
          ].map(([icon, title, desc]) => (
            <div
              key={title}
              style={{
                padding: "36px 28px",
                background: "linear-gradient(135deg, #f0f7f4, white)",
                borderRadius: 24, border: "1px solid #d8f3dc",
              }}
            >
              <div style={{ fontSize: "2.5rem", marginBottom: 16 }}>{icon}</div>
              <h3 style={{ fontFamily: "Playfair Display", fontSize: "1.3rem", fontWeight: 700, color: "#1a3d2b", marginBottom: 12 }}>
                {title}
              </h3>
              <p style={{ color: "#6b7c73", lineHeight: 1.7, fontSize: "0.95rem" }}>{desc}</p>
            </div>
          ))}
        </div>

        {/* Team */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-sub" style={{ margin: "0 auto 48px" }}>
            Passionate travellers who live and breathe every destination we offer.
          </p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
          {team.map((p) => (
            <div key={p.name} className="card" style={{ textAlign: "center", padding: "0 0 24px" }}>
              <div style={{ height: 200, overflow: "hidden" }}>
                <img src={p.img} alt={p.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
              </div>
              <div style={{ padding: "20px 16px 0" }}>
                <h4 style={{ fontFamily: "Playfair Display", fontSize: "1.05rem", fontWeight: 700, color: "#1a3d2b", marginBottom: 4 }}>
                  {p.name}
                </h4>
                <p style={{ fontSize: "0.85rem", color: "#6b7c73" }}>{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
