import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", msg: "" });
  const [sent, setSent]  = useState(false);

  const handleSubmit = () => {
    if (form.name && form.email && form.msg) setSent(true);
  };

  return (
    <div>
      {/* Header */}
      <div
        style={{
          background: "linear-gradient(135deg, #1a3d2b, #2d6a4f)",
          padding: "80px 40px 60px", textAlign: "center",
        }}
      >
        <div
          className="badge"
          style={{
            marginBottom: 14,
            background: "rgba(116,198,157,0.15)", color: "#74c69d",
            border: "1px solid rgba(116,198,157,0.25)",
          }}
        >
          💬 Get in Touch
        </div>
        <h1
          style={{
            color: "white", fontFamily: "Playfair Display",
            fontSize: "3rem", fontWeight: 900, marginBottom: 16,
          }}
        >
          We'd Love to Hear From You
        </h1>
        <p style={{ color: "rgba(183,228,199,0.8)", fontSize: "1.1rem" }}>
          Our travel experts are always ready to help plan your dream trip.
        </p>
      </div>

      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 60 }}>

          {/* Contact info */}
          <div>
            <h2
              style={{
                fontFamily: "Playfair Display", fontSize: "1.8rem",
                fontWeight: 900, color: "#1a3d2b", marginBottom: 28,
              }}
            >
              Contact Information
            </h2>

            {[
              ["📍", "Our Office",   "12 Greenway Tower, MG Road\nBangalore – 560001, India"],
              ["📞", "Phone",        "+91 80 4567 8900\nMon – Sat, 9am – 6pm IST"],
              ["✉️", "Email",        "hello@takemeplaces.in\nSupport: support@takemeplaces.in"],
              ["⏰", "24/7 Helpline","+91 98765 43210\nFor urgent travel support"],
            ].map(([icon, label, val]) => (
              <div key={label} style={{ display: "flex", gap: 16, marginBottom: 28 }}>
                <div
                  style={{
                    width: 48, height: 48, borderRadius: 14, background: "#f0f7f4",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1.4rem", flexShrink: 0,
                  }}
                >
                  {icon}
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: "0.9rem", color: "#1a3d2b", marginBottom: 4 }}>{label}</div>
                  <div style={{ fontSize: "0.9rem", color: "#6b7c73", lineHeight: 1.6, whiteSpace: "pre-line" }}>{val}</div>
                </div>
              </div>
            ))}

            <div
              style={{
                background: "linear-gradient(135deg, #f0f7f4, #d8f3dc)",
                borderRadius: 20, padding: 24, marginTop: 12,
              }}
            >
              <p style={{ fontFamily: "Playfair Display", fontSize: "1.1rem", color: "#1a3d2b", fontWeight: 700, marginBottom: 6 }}>
                Follow Our Journey
              </p>
              <p style={{ fontSize: "0.85rem", color: "#6b7c73", marginBottom: 14 }}>
                Get daily travel inspiration on social media.
              </p>
              <div style={{ display: "flex", gap: 10 }}>
                {["📸 Instagram", "📘 Facebook", "🐦 Twitter"].map((s) => (
                  <span
                    key={s}
                    style={{
                      background: "white", borderRadius: 10, padding: "7px 12px",
                      fontSize: "0.82rem", fontWeight: 600, color: "#2d6a4f",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div
            style={{
              background: "white", borderRadius: 24, padding: "40px",
              boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            }}
          >
            {sent ? (
              <div style={{ textAlign: "center", padding: "60px 20px" }}>
                <div style={{ fontSize: "4rem", marginBottom: 20 }}>🌿</div>
                <h3 style={{ fontFamily: "Playfair Display", fontSize: "1.8rem", color: "#1a3d2b", marginBottom: 12 }}>
                  Message Sent!
                </h3>
                <p style={{ color: "#6b7c73", lineHeight: 1.7 }}>
                  Thank you, {form.name}! Our team will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                <h3
                  style={{
                    fontFamily: "Playfair Display", fontSize: "1.6rem",
                    color: "#1a3d2b", marginBottom: 28, fontWeight: 900,
                  }}
                >
                  Send a Message
                </h3>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 18 }}>
                  <div>
                    <label className="input-label">Your Name</label>
                    <input
                      className="input" placeholder="Arjun Mehta"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="input-label">Email Address</label>
                    <input
                      className="input" type="email" placeholder="you@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                  </div>
                </div>

                <div style={{ marginBottom: 18 }}>
                  <label className="input-label">Subject</label>
                  <select
                    className="input"
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  >
                    <option value="">Select a topic…</option>
                    <option>Booking Support</option>
                    <option>General Enquiry</option>
                    <option>Cancellation Request</option>
                    <option>Partnership</option>
                    <option>Other</option>
                  </select>
                </div>

                <div style={{ marginBottom: 28 }}>
                  <label className="input-label">Your Message</label>
                  <textarea
                    className="input" rows={5}
                    placeholder="Tell us how we can help you…"
                    value={form.msg}
                    onChange={(e) => setForm({ ...form, msg: e.target.value })}
                    style={{ resize: "vertical" }}
                  />
                </div>

                <button
                  className="btn-primary"
                  style={{ width: "100%", padding: "16px" }}
                  onClick={handleSubmit}
                >
                  Send Message →
                </button>
                <p style={{ textAlign: "center", fontSize: "0.8rem", color: "#6b7c73", marginTop: 12 }}>
                  We typically reply within 2–4 hours 🌿
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
