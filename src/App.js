import { useState } from "react";

// ─── GLOBAL STYLES ────────────────────────────────────────────────────────────
const STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --jungle: #1a3d2b; --forest: #2d6a4f; --fern: #40916c;
    --leaf: #52b788;   --mint: #74c69d;   --mist: #b7e4c7;
    --foam: #d8f3dc;   --teal: #0a7c6e;   --gold: #e9c46a;
    --sand: #f4a261;   --cream: #fefdf9;  --dark: #0d1f17;
    --gray: #6b7c73;   --light: #f0f7f4;
  }

  body { font-family: 'DM Sans', sans-serif; background: var(--cream); color: var(--dark); }
  h1,h2,h3,h4 { font-family: 'Playfair Display', serif; }

  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(26,61,43,0.97); backdrop-filter: blur(12px);
    padding: 0 40px; display: flex; align-items: center;
    justify-content: space-between; height: 70px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
  }
  .nav-logo { font-family:'Playfair Display',serif; font-size:1.4rem; font-weight:900; color:var(--mint); cursor:pointer; display:flex; align-items:center; gap:8px; }
  .nav-logo span { color: var(--gold); }
  .nav-links { display:flex; gap:6px; align-items:center; }
  .nav-link { color:var(--mist); background:none; border:none; padding:8px 16px; border-radius:8px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:0.9rem; font-weight:500; transition:all 0.2s; }
  .nav-link:hover, .nav-link.active { background:rgba(116,198,157,0.15); color:var(--mint); }
  .nav-cta { background:var(--gold); color:var(--dark); border:none; padding:9px 20px; border-radius:10px; cursor:pointer; font-family:'DM Sans',sans-serif; font-size:0.9rem; font-weight:600; transition:all 0.2s; margin-left:8px; }
  .nav-cta:hover { background:var(--sand); transform:translateY(-1px); }

  .btn-primary { background:linear-gradient(135deg,var(--fern),var(--teal)); color:white; border:none; padding:14px 32px; border-radius:12px; font-family:'DM Sans',sans-serif; font-size:1rem; font-weight:600; cursor:pointer; transition:all 0.25s; box-shadow:0 4px 15px rgba(64,145,108,0.35); }
  .btn-primary:hover { transform:translateY(-2px); box-shadow:0 8px 25px rgba(64,145,108,0.45); }
  .btn-gold { background:linear-gradient(135deg,var(--gold),var(--sand)); color:var(--dark); border:none; padding:14px 32px; border-radius:12px; font-family:'DM Sans',sans-serif; font-size:1rem; font-weight:700; cursor:pointer; transition:all 0.25s; }
  .btn-gold:hover { transform:translateY(-2px); }
  .btn-outline { background:transparent; color:var(--forest); border:2px solid var(--forest); padding:12px 28px; border-radius:12px; font-family:'DM Sans',sans-serif; font-size:0.95rem; font-weight:600; cursor:pointer; transition:all 0.25s; }
  .btn-outline:hover { background:var(--forest); color:white; }

  .card { background:white; border-radius:20px; overflow:hidden; box-shadow:0 4px 20px rgba(0,0,0,0.08); transition:all 0.3s; }
  .card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(0,0,0,0.14); }

  .badge { display:inline-block; background:var(--foam); color:var(--forest); padding:4px 12px; border-radius:20px; font-size:0.78rem; font-weight:600; letter-spacing:0.5px; }
  .badge-gold { background:#fff4d6; color:#a0720a; }

  .section { padding:80px 40px; max-width:1200px; margin:0 auto; }
  .section-title { font-size:2.4rem; font-weight:900; color:var(--jungle); margin-bottom:12px; line-height:1.2; }
  .section-sub { color:var(--gray); font-size:1.05rem; margin-bottom:48px; max-width:520px; line-height:1.6; }

  .footer { background:var(--jungle); color:var(--mist); padding:60px 40px 30px; }
  .footer-grid { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:48px; margin-bottom:48px; }
  .footer-logo { font-family:'Playfair Display',serif; font-size:1.5rem; font-weight:900; color:var(--mint); margin-bottom:14px; }
  .footer-logo span { color:var(--gold); }
  .footer p { font-size:0.9rem; line-height:1.7; opacity:0.75; }
  .footer-col h4 { font-family:'DM Sans',sans-serif; font-size:0.85rem; font-weight:700; letter-spacing:1.5px; text-transform:uppercase; color:var(--mint); margin-bottom:16px; }
  .footer-link { display:block; color:rgba(183,228,199,0.7); font-size:0.9rem; margin-bottom:10px; cursor:pointer; background:none; border:none; text-align:left; }
  .footer-link:hover { color:var(--mint); }
  .footer-bottom { border-top:1px solid rgba(116,198,157,0.15); padding-top:24px; max-width:1200px; margin:0 auto; display:flex; justify-content:space-between; align-items:center; }
  .footer-bottom p { font-size:0.85rem; opacity:0.5; }

  .input { width:100%; padding:12px 16px; border:2px solid #e0ede8; border-radius:10px; font-family:'DM Sans',sans-serif; font-size:0.95rem; color:var(--dark); background:white; outline:none; transition:border-color 0.2s; }
  .input:focus { border-color:var(--leaf); }
  .input-label { font-size:0.82rem; font-weight:600; color:var(--gray); margin-bottom:6px; display:block; text-transform:uppercase; letter-spacing:0.5px; }

  .stars { color:var(--gold); letter-spacing:2px; }
  .amenity-tag { display:inline-flex; align-items:center; gap:5px; background:var(--foam); color:var(--forest); padding:5px 12px; border-radius:8px; font-size:0.82rem; font-weight:500; margin:3px; }

  @keyframes fadeUp { from{opacity:0;transform:translateY(30px)} to{opacity:1;transform:translateY(0)} }
  .fade-up  { animation:fadeUp 0.7s ease forwards; }
  .fade-up-2 { animation:fadeUp 0.7s 0.15s ease forwards; opacity:0; }
  .fade-up-3 { animation:fadeUp 0.7s 0.30s ease forwards; opacity:0; }
  .fade-up-4 { animation:fadeUp 0.7s 0.45s ease forwards; opacity:0; }

  ::-webkit-scrollbar { width:6px; }
  ::-webkit-scrollbar-track { background:var(--foam); }
  ::-webkit-scrollbar-thumb { background:var(--mint); border-radius:10px; }
`;

// ─── DATA ─────────────────────────────────────────────────────────────────────
const HOTELS = [
  { id:1, name:"The Jungle Canopy Resort", location:"Bali, Indonesia",   price:189, rating:4.9, reviews:1240, tag:"Bestseller",  img:"https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&q=80", amenities:["🏊 Pool","🌿 Spa","🍃 Garden","🌅 View"],       desc:"Nestled among ancient banyan trees, this award-winning eco-resort blends seamlessly into Bali's lush landscape. Each room is crafted with local materials for maximum comfort and sustainability." },
  { id:2, name:"Emerald Bay Lodge",         location:"Maldives",          price:320, rating:4.8, reviews:876,  tag:"Luxury",      img:"https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=600&q=80", amenities:["🤿 Diving","🏝 Private Beach","🍹 Bar","🛥 Transfers"], desc:"Overwater bungalows surrounded by crystal-clear turquoise lagoons with direct ocean access and butler service included." },
  { id:3, name:"Green Peak Sanctuary",      location:"Kerala, India",     price:95,  rating:4.7, reviews:2103, tag:"Eco-Friendly", img:"https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&q=80", amenities:["🧘 Yoga","🌿 Ayurveda","🍃 Organic","🏞 Trails"],   desc:"An Ayurvedic sanctuary in the Western Ghats, surrounded by spice plantations. Reconnect with nature through daily yoga and farm-to-table cuisine." },
  { id:4, name:"Tulum Treehouse Hotel",     location:"Tulum, Mexico",     price:145, rating:4.6, reviews:932,  tag:"Trending",    img:"https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80", amenities:["🌴 Jungle","🌊 Cenote","🍽 Restaurant","📶 WiFi"],  desc:"Bohemian treehouse suites above the Mayan jungle, minutes from turquoise cenotes and white-sand beaches." },
  { id:5, name:"Rainforest Retreat",        location:"Costa Rica",        price:210, rating:4.9, reviews:654,  tag:"Top Rated",   img:"https://images.unsplash.com/photo-1439130490301-25e322d88054?w=600&q=80", amenities:["🦜 Wildlife","♾ Infinity Pool","🌿 Organic","🚶 Hiking"], desc:"An intimate retreat perched above the treetops of Costa Rica's biodiverse cloud forest. Wake up to toucans and howler monkeys." },
  { id:6, name:"Serenity Islands Resort",   location:"Phuket, Thailand",  price:175, rating:4.7, reviews:1567, tag:"Family Pick", img:"https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=600&q=80", amenities:["🏊 Kids Pool","🏖 Beach","🎭 Entertainment","🍜 Dining"], desc:"A family paradise with vibrant tropical gardens, kids clubs, and Thailand's most stunning sunsets." },
];

const DESTINATIONS = [
  { name:"Bali",     country:"Indonesia",     hotels:1240, img:"https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80" },
  { name:"Maldives", country:"Indian Ocean",  hotels:380,  img:"https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80" },
  { name:"Kerala",   country:"India",         hotels:720,  img:"https://images.unsplash.com/photo-1609920658906-8223bd289001?w=400&q=80" },
  { name:"Phuket",   country:"Thailand",      hotels:930,  img:"https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=400&q=80" },
];

// ─── SHARED COMPONENTS ────────────────────────────────────────────────────────
function StarRating({ rating }) {
  return <span className="stars">{"★".repeat(Math.floor(rating))}{"☆".repeat(5 - Math.floor(rating))}</span>;
}

function HotelCard({ hotel, setPage, setSelectedHotel }) {
  return (
    <div className="card" style={{ cursor:"pointer" }} onClick={() => { setSelectedHotel(hotel); setPage("HotelDetail"); }}>
      <div style={{ position:"relative", height:220, overflow:"hidden" }}>
        <img src={hotel.img} alt={hotel.name}
          style={{ width:"100%", height:"100%", objectFit:"cover", transition:"transform 0.4s" }}
          onMouseOver={e => { e.target.style.transform="scale(1.06)"; }}
          onMouseOut={e  => { e.target.style.transform="scale(1)"; }} />
        <div style={{ position:"absolute", top:14, left:14 }}><span className="badge badge-gold">{hotel.tag}</span></div>
      </div>
      <div style={{ padding:"20px 22px" }}>
        <h3 style={{ fontSize:"1.05rem", fontFamily:"Playfair Display", fontWeight:700, color:"#1a3d2b", lineHeight:1.3, marginBottom:6 }}>{hotel.name}</h3>
        <p style={{ fontSize:"0.85rem", color:"#6b7c73", marginBottom:10 }}>📍 {hotel.location}</p>
        <div style={{ display:"flex", alignItems:"center", gap:8, marginBottom:14 }}>
          <StarRating rating={hotel.rating} />
          <span style={{ fontSize:"0.82rem", color:"#6b7c73" }}>{hotel.rating} ({hotel.reviews.toLocaleString()} reviews)</span>
        </div>
        <div style={{ display:"flex", flexWrap:"wrap", gap:4, marginBottom:16 }}>
          {hotel.amenities.slice(0,3).map(a => <span key={a} className="amenity-tag">{a}</span>)}
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", paddingTop:14, borderTop:"1px solid #f0f7f4" }}>
          <div>
            <span style={{ fontFamily:"Playfair Display", fontSize:"1.4rem", fontWeight:900, color:"#1a3d2b" }}>${hotel.price}</span>
            <span style={{ fontSize:"0.82rem", color:"#6b7c73" }}> / night</span>
          </div>
          <button className="btn-primary" style={{ padding:"9px 18px", fontSize:"0.85rem" }}>Book Now</button>
        </div>
      </div>
    </div>
  );
}

function Navbar({ page, setPage }) {
  const links = ["Home","Hotels","About","Contact","My Bookings"];
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => setPage("Home")}>🌿 Take Me <span>Places</span></div>
      <div className="nav-links">
        {links.map(l => <button key={l} className={`nav-link ${page===l?"active":""}`} onClick={() => setPage(l)}>{l}</button>)}
        <button className="nav-cta" onClick={() => setPage("Hotels")}>Book Now</button>
      </div>
    </nav>
  );
}

function Footer({ setPage }) {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="footer-logo">🌿 Take Me <span>Places</span></div>
          <p>Your gateway to the world's most breathtaking tropical destinations. We craft unforgettable experiences, one stay at a time.</p>
        </div>
        <div className="footer-col">
          <h4>Explore</h4>
          {["Hotels","Destinations","Deals","Luxury Stays"].map(l => <button key={l} className="footer-link" onClick={() => setPage("Hotels")}>{l}</button>)}
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          {["About Us","Careers","Press","Blog"].map(l => <button key={l} className="footer-link" onClick={() => setPage("About")}>{l}</button>)}
        </div>
        <div className="footer-col">
          <h4>Support</h4>
          {["Contact Us","Help Center","Cancellation","Privacy Policy"].map(l => <button key={l} className="footer-link" onClick={() => setPage("Contact")}>{l}</button>)}
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 Take Me Places Pvt Ltd. All rights reserved.</p>
        <p>Made with 🌿 for wanderers everywhere</p>
      </div>
    </footer>
  );
}

// ─── PAGE: HOME ───────────────────────────────────────────────────────────────
function HomePage({ setPage, setSelectedHotel }) {
  const [dest, setDest]       = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");

  return (
    <div>
      {/* HERO */}
      <div style={{ minHeight:"92vh", position:"relative", overflow:"hidden", background:"linear-gradient(160deg,#0d2e1e 0%,#1a5c3a 50%,#0a7c6e 100%)", display:"flex", alignItems:"center" }}>
        <div style={{ position:"absolute", inset:0, backgroundImage:`url("https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1800&q=60")`, backgroundSize:"cover", backgroundPosition:"center", opacity:0.18 }} />
        <div style={{ position:"relative", zIndex:2, maxWidth:1200, margin:"0 auto", padding:"0 40px", width:"100%" }}>
          <div style={{ maxWidth:660 }}>
            <div className="badge fade-up" style={{ marginBottom:20, background:"rgba(116,198,157,0.15)", color:"#74c69d", border:"1px solid rgba(116,198,157,0.3)" }}>🌿 Discover Your Paradise</div>
            <h1 className="fade-up-2" style={{ fontSize:"4.2rem", fontWeight:900, color:"white", lineHeight:1.1, marginBottom:24 }}>The World is<br /><span style={{ color:"#74c69d" }}>Waiting</span> for You</h1>
            <p className="fade-up-3" style={{ fontSize:"1.2rem", color:"rgba(183,228,199,0.85)", lineHeight:1.7, marginBottom:48, fontWeight:300 }}>From misty rainforests to turquoise lagoons — we find you the perfect stay for every journey you dream of.</p>
            {/* Search */}
            <div className="fade-up-4" style={{ background:"rgba(255,255,255,0.96)", borderRadius:20, padding:"28px 28px 24px", boxShadow:"0 20px 60px rgba(0,0,0,0.3)" }}>
              <div style={{ display:"grid", gridTemplateColumns:"2fr 1fr 1fr 1fr", gap:16, alignItems:"end" }}>
                <div><label className="input-label">Destination</label><input className="input" placeholder="🌍  Where are you going?" value={dest} onChange={e => setDest(e.target.value)} /></div>
                <div><label className="input-label">Check-in</label><input className="input" type="date" value={checkin} onChange={e => setCheckin(e.target.value)} /></div>
                <div><label className="input-label">Check-out</label><input className="input" type="date" value={checkout} onChange={e => setCheckout(e.target.value)} /></div>
                <button className="btn-primary" onClick={() => setPage("Hotels")} style={{ height:48 }}>Search 🔍</button>
              </div>
              <div style={{ marginTop:16, display:"flex", gap:10, flexWrap:"wrap" }}>
                {["Bali","Maldives","Kerala","Phuket","Costa Rica"].map(d => (
                  <button key={d} onClick={() => setPage("Hotels")} style={{ background:"#f0f7f4", border:"none", borderRadius:8, padding:"6px 14px", fontSize:"0.85rem", cursor:"pointer", color:"#2d6a4f", fontWeight:500 }}>{d}</button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Stats */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, background:"rgba(13,31,23,0.6)", backdropFilter:"blur(10px)", borderTop:"1px solid rgba(116,198,157,0.15)" }}>
          <div style={{ maxWidth:1200, margin:"0 auto", padding:"18px 40px", display:"flex", gap:60 }}>
            {[["50,000+","Hotels Worldwide"],["180+","Destinations"],["2M+","Happy Guests"],["4.9★","Average Rating"]].map(([n,l]) => (
              <div key={l}><div style={{ color:"#74c69d", fontWeight:800, fontSize:"1.3rem", fontFamily:"Playfair Display,serif" }}>{n}</div><div style={{ color:"rgba(183,228,199,0.6)", fontSize:"0.82rem" }}>{l}</div></div>
            ))}
          </div>
        </div>
      </div>

      {/* DESTINATIONS */}
      <div className="section" style={{ paddingBottom:0 }}>
        <div className="badge" style={{ marginBottom:12 }}>🗺 Top Picks</div>
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-sub">Handpicked tropical havens loved by thousands of travellers every season.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20 }}>
          {DESTINATIONS.map(d => (
            <div key={d.name} className="card" style={{ cursor:"pointer", position:"relative", overflow:"hidden", borderRadius:20, height:280 }} onClick={() => setPage("Hotels")}>
              <img src={d.img} alt={d.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
              <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,31,23,0.85) 0%,transparent 55%)" }} />
              <div style={{ position:"absolute", bottom:20, left:20 }}>
                <div style={{ color:"white", fontFamily:"Playfair Display", fontWeight:700, fontSize:"1.35rem" }}>{d.name}</div>
                <div style={{ color:"rgba(183,228,199,0.8)", fontSize:"0.85rem" }}>{d.country} · {d.hotels.toLocaleString()} hotels</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FEATURED HOTELS */}
      <div className="section">
        <div className="badge" style={{ marginBottom:12 }}>🏨 Featured</div>
        <h2 className="section-title">Top-Rated Stays</h2>
        <p className="section-sub">Exceptional hotels loved by our guests, curated just for you.</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {HOTELS.slice(0,3).map(h => <HotelCard key={h.id} hotel={h} setPage={setPage} setSelectedHotel={setSelectedHotel} />)}
        </div>
        <div style={{ textAlign:"center", marginTop:40 }}>
          <button className="btn-outline" onClick={() => setPage("Hotels")}>View All Hotels →</button>
        </div>
      </div>

      {/* WHY US */}
      <div style={{ background:"linear-gradient(135deg,#f0f7f4,#d8f3dc)", padding:"80px 40px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:56 }}>
            <div className="badge" style={{ marginBottom:12 }}>✨ Why Us</div>
            <h2 className="section-title">Why Choose Take Me Places?</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:32 }}>
            {[["🌿","Eco-Conscious","We partner only with sustainable hotels committed to protecting nature."],["💰","Best Price Guarantee","Found it cheaper? We'll match it — no questions asked."],["🛎","24/7 Concierge","Our travel experts are always a call or chat away to help you."],["🔒","Secure Booking","Your payments and personal data are always fully protected."]].map(([icon,title,desc]) => (
              <div key={title} style={{ textAlign:"center", padding:"32px 20px", background:"white", borderRadius:20, boxShadow:"0 4px 20px rgba(0,0,0,0.06)" }}>
                <div style={{ fontSize:"2.5rem", marginBottom:16 }}>{icon}</div>
                <h3 style={{ fontSize:"1.1rem", fontFamily:"DM Sans", fontWeight:700, color:"#1a3d2b", marginBottom:10 }}>{title}</h3>
                <p style={{ fontSize:"0.9rem", color:"#6b7c73", lineHeight:1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div style={{ background:"linear-gradient(135deg,#1a3d2b,#0a7c6e)", padding:"80px 40px", textAlign:"center" }}>
        <h2 style={{ color:"white", fontSize:"2.8rem", fontFamily:"Playfair Display", fontWeight:900, marginBottom:16 }}>Ready for Your Next Adventure?</h2>
        <p style={{ color:"rgba(183,228,199,0.8)", fontSize:"1.1rem", marginBottom:36 }}>Join over 2 million happy travellers who found their perfect stay with us.</p>
        <button className="btn-gold" onClick={() => setPage("Hotels")}>Explore Hotels Now →</button>
      </div>
    </div>
  );
}

// ─── PAGE: HOTELS ─────────────────────────────────────────────────────────────
function HotelsPage({ setPage, setSelectedHotel }) {
  const [filter, setFilter] = useState("All");
  const [sort,   setSort]   = useState("rating");
  const [search, setSearch] = useState("");
  const TAGS = ["All","Luxury","Eco-Friendly","Trending","Bestseller","Top Rated","Family Pick"];

  const filtered = HOTELS
    .filter(h => filter === "All" || h.tag === filter)
    .filter(h => h.name.toLowerCase().includes(search.toLowerCase()) || h.location.toLowerCase().includes(search.toLowerCase()))
    .sort((a,b) => sort==="price" ? a.price-b.price : b.rating-a.rating);

  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a3d2b,#2d6a4f)", padding:"60px 40px 50px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="badge" style={{ marginBottom:14, background:"rgba(116,198,157,0.15)", color:"#74c69d", border:"1px solid rgba(116,198,157,0.25)" }}>🏨 Browse All Hotels</div>
          <h1 style={{ color:"white", fontFamily:"Playfair Display", fontSize:"2.8rem", fontWeight:900, marginBottom:16 }}>Find Your Perfect Stay</h1>
          <div style={{ display:"flex", gap:14, alignItems:"center", flexWrap:"wrap" }}>
            <input className="input" placeholder="🔍 Search by name or destination..." value={search} onChange={e => setSearch(e.target.value)} style={{ maxWidth:380, background:"rgba(255,255,255,0.1)", border:"1px solid rgba(116,198,157,0.3)", color:"white" }} />
            <select className="input" value={sort} onChange={e => setSort(e.target.value)} style={{ width:"auto", background:"rgba(255,255,255,0.1)", border:"1px solid rgba(116,198,157,0.3)", color:"white" }}>
              <option value="rating" style={{ color:"#1a3d2b" }}>Sort: Top Rated</option>
              <option value="price"  style={{ color:"#1a3d2b" }}>Sort: Lowest Price</option>
            </select>
          </div>
        </div>
      </div>
      <div style={{ maxWidth:1200, margin:"0 auto", padding:"40px" }}>
        <div style={{ display:"flex", gap:10, marginBottom:36, flexWrap:"wrap" }}>
          {TAGS.map(t => (
            <button key={t} onClick={() => setFilter(t)} style={{ padding:"8px 20px", borderRadius:30, border:"2px solid", borderColor:filter===t?"#40916c":"#d8f3dc", background:filter===t?"#40916c":"white", color:filter===t?"white":"#2d6a4f", fontFamily:"DM Sans", fontWeight:600, fontSize:"0.88rem", cursor:"pointer", transition:"all 0.2s" }}>{t}</button>
          ))}
        </div>
        <p style={{ color:"#6b7c73", marginBottom:28, fontSize:"0.9rem" }}>{filtered.length} properties found</p>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:24 }}>
          {filtered.map(h => <HotelCard key={h.id} hotel={h} setPage={setPage} setSelectedHotel={setSelectedHotel} />)}
        </div>
        {filtered.length === 0 && (
          <div style={{ textAlign:"center", padding:"80px 20px", color:"#6b7c73" }}>
            <div style={{ fontSize:"3rem", marginBottom:16 }}>🌿</div>
            <p style={{ fontSize:"1.1rem" }}>No hotels found. Try a different search!</p>
          </div>
        )}
      </div>
    </div>
  );
}

// ─── PAGE: HOTEL DETAIL ───────────────────────────────────────────────────────
function HotelDetailPage({ hotel, setPage }) {
  const [nights, setNights] = useState(3);
  const [booked, setBooked] = useState(false);

  if (!hotel) return (
    <div style={{ padding:80, textAlign:"center" }}>
      <p style={{ color:"#6b7c73", marginBottom:24 }}>No hotel selected.</p>
      <button className="btn-primary" onClick={() => setPage("Hotels")}>Browse Hotels</button>
    </div>
  );

  const handleBook = () => { setBooked(true); setTimeout(() => setPage("My Bookings"), 1800); };
  const extra = ["🚿 Hot Shower","📺 Smart TV","❄️ Air Con","🅿️ Parking","🌐 Free WiFi"];

  return (
    <div>
      <div style={{ height:420, position:"relative", overflow:"hidden" }}>
        <img src={hotel.img} alt={hotel.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(to top,rgba(13,31,23,0.7) 0%,transparent 60%)" }} />
        <button onClick={() => setPage("Hotels")} style={{ position:"absolute", top:30, left:30, background:"rgba(255,255,255,0.95)", border:"none", borderRadius:12, padding:"10px 18px", cursor:"pointer", fontFamily:"DM Sans", fontWeight:600, fontSize:"0.9rem", color:"#1a3d2b" }}>← Back to Hotels</button>
      </div>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"0 40px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"1fr 340px", gap:48, marginTop:-60, position:"relative", zIndex:2 }}>
          <div>
            <div style={{ background:"white", borderRadius:24, padding:"36px", boxShadow:"0 8px 40px rgba(0,0,0,0.1)", marginBottom:24 }}>
              <div style={{ display:"flex", gap:10, marginBottom:16 }}>
                <span className="badge badge-gold">{hotel.tag}</span>
                <span className="badge">Verified Property</span>
              </div>
              <h1 style={{ fontFamily:"Playfair Display", fontSize:"2.2rem", fontWeight:900, color:"#1a3d2b", marginBottom:8 }}>{hotel.name}</h1>
              <p style={{ color:"#6b7c73", marginBottom:14 }}>📍 {hotel.location}</p>
              <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:20 }}>
                <StarRating rating={hotel.rating} />
                <span style={{ fontWeight:700, color:"#1a3d2b" }}>{hotel.rating}</span>
                <span style={{ color:"#6b7c73", fontSize:"0.9rem" }}>({hotel.reviews.toLocaleString()} reviews)</span>
              </div>
              <p style={{ color:"#4a5e53", lineHeight:1.75 }}>{hotel.desc}</p>
            </div>
            <div style={{ background:"white", borderRadius:24, padding:"28px 32px", boxShadow:"0 4px 20px rgba(0,0,0,0.07)", marginBottom:24 }}>
              <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.3rem", fontWeight:700, color:"#1a3d2b", marginBottom:18 }}>Amenities</h3>
              <div style={{ display:"flex", flexWrap:"wrap" }}>
                {[...hotel.amenities,...extra].map(a => <span key={a} className="amenity-tag" style={{ margin:4 }}>{a}</span>)}
              </div>
            </div>
            <div style={{ background:"white", borderRadius:24, padding:"28px 32px", boxShadow:"0 4px 20px rgba(0,0,0,0.07)" }}>
              <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.3rem", fontWeight:700, color:"#1a3d2b", marginBottom:20 }}>Guest Reviews</h3>
              {[{name:"Sarah M.",text:"Absolutely magical! The lush surroundings and eco-friendly vibe made our trip unforgettable.",rating:5},{name:"James T.",text:"Best resort I've ever stayed in. The staff was incredible and the food was fresh and local.",rating:5},{name:"Priya R.",text:"A true paradise. We're already planning our return trip!",rating:4}].map(r => (
                <div key={r.name} style={{ padding:"18px 0", borderBottom:"1px solid #f0f7f4" }}>
                  <div style={{ display:"flex", justifyContent:"space-between", marginBottom:8 }}>
                    <strong style={{ color:"#1a3d2b" }}>{r.name}</strong><StarRating rating={r.rating} />
                  </div>
                  <p style={{ fontSize:"0.9rem", color:"#6b7c73", lineHeight:1.6 }}>{r.text}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Booking box */}
          <div>
            <div style={{ background:"white", borderRadius:24, padding:"28px", boxShadow:"0 8px 40px rgba(0,0,0,0.12)", position:"sticky", top:90 }}>
              <div style={{ marginBottom:20, paddingBottom:20, borderBottom:"1px solid #f0f7f4" }}>
                <span style={{ fontFamily:"Playfair Display", fontSize:"2rem", fontWeight:900, color:"#1a3d2b" }}>${hotel.price}</span>
                <span style={{ color:"#6b7c73", fontSize:"0.9rem" }}> / night</span>
              </div>
              <div style={{ marginBottom:16 }}><label className="input-label">Check-in</label><input className="input" type="date" /></div>
              <div style={{ marginBottom:16 }}><label className="input-label">Check-out</label><input className="input" type="date" /></div>
              <div style={{ marginBottom:16 }}><label className="input-label">Guests</label><select className="input"><option>1 guest</option><option>2 guests</option><option>3 guests</option><option>4+ guests</option></select></div>
              <div style={{ marginBottom:16 }}>
                <label className="input-label">Nights</label>
                <div style={{ display:"flex", alignItems:"center", gap:12 }}>
                  <button onClick={() => setNights(Math.max(1,nights-1))} style={{ width:36, height:36, borderRadius:8, border:"2px solid #d8f3dc", background:"white", cursor:"pointer", fontSize:"1.1rem", color:"#40916c" }}>−</button>
                  <span style={{ fontWeight:700, fontSize:"1.1rem", color:"#1a3d2b" }}>{nights}</span>
                  <button onClick={() => setNights(nights+1)} style={{ width:36, height:36, borderRadius:8, border:"2px solid #d8f3dc", background:"white", cursor:"pointer", fontSize:"1.1rem", color:"#40916c" }}>+</button>
                </div>
              </div>
              <div style={{ background:"#f0f7f4", borderRadius:12, padding:"14px 16px", marginBottom:20 }}>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.9rem", color:"#4a5e53", marginBottom:6 }}><span>${hotel.price} × {nights} nights</span><span>${hotel.price*nights}</span></div>
                <div style={{ display:"flex", justifyContent:"space-between", fontSize:"0.9rem", color:"#4a5e53", marginBottom:6 }}><span>Service fee</span><span>$18</span></div>
                <div style={{ display:"flex", justifyContent:"space-between", fontWeight:700, color:"#1a3d2b", paddingTop:8, borderTop:"1px solid #d8f3dc" }}><span>Total</span><span>${hotel.price*nights+18}</span></div>
              </div>
              {booked
                ? <div style={{ textAlign:"center", padding:"16px", background:"#d8f3dc", borderRadius:12, color:"#2d6a4f", fontWeight:700 }}>✅ Booking Confirmed! Redirecting…</div>
                : <button className="btn-primary" style={{ width:"100%", padding:"16px" }} onClick={handleBook}>Confirm Booking</button>
              }
              <p style={{ textAlign:"center", fontSize:"0.78rem", color:"#6b7c73", marginTop:12 }}>🔒 Free cancellation · No hidden fees</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop:60 }} />
    </div>
  );
}

// ─── PAGE: ABOUT ──────────────────────────────────────────────────────────────
function AboutPage() {
  const team = [
    { name:"Arjun Mehta",  role:"Founder & CEO",          img:"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80" },
    { name:"Priya Nair",   role:"Head of Experiences",    img:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" },
    { name:"David Lim",    role:"Sustainability Director", img:"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80" },
    { name:"Rhea Kapoor",  role:"Guest Experience Lead",  img:"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80" },
  ];
  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a3d2b 0%,#0a7c6e 100%)", padding:"100px 40px 80px", textAlign:"center" }}>
        <div className="badge" style={{ marginBottom:16, background:"rgba(116,198,157,0.15)", color:"#74c69d", border:"1px solid rgba(116,198,157,0.25)" }}>🌿 Our Story</div>
        <h1 style={{ color:"white", fontFamily:"Playfair Display", fontSize:"3.2rem", fontWeight:900, marginBottom:20 }}>We Are Take Me Places</h1>
        <p style={{ color:"rgba(183,228,199,0.85)", fontSize:"1.2rem", maxWidth:580, margin:"0 auto", lineHeight:1.7 }}>Born from a love of travel and a deep respect for the planet, we connect wanderers with extraordinary places.</p>
      </div>
      <div className="section">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:60, alignItems:"center", marginBottom:80 }}>
          <div>
            <div className="badge" style={{ marginBottom:14 }}>🎯 Our Mission</div>
            <h2 style={{ fontFamily:"Playfair Display", fontSize:"2.2rem", fontWeight:900, color:"#1a3d2b", marginBottom:20, lineHeight:1.3 }}>Travel That Leaves the World Better</h2>
            <p style={{ color:"#4a5e53", lineHeight:1.8, marginBottom:16 }}>At Take Me Places Pvt Ltd, we believe travel should be a force for good. Every hotel on our platform is vetted for sustainability, community impact, and exceptional guest experience.</p>
            <p style={{ color:"#4a5e53", lineHeight:1.8 }}>We started in 2018 with a simple idea: make eco-conscious travel accessible to everyone without compromising on quality or the planet.</p>
          </div>
          <div style={{ height:400, borderRadius:24, overflow:"hidden", boxShadow:"0 20px 60px rgba(0,0,0,0.15)" }}>
            <img src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=700&q=80" alt="Travel" style={{ width:"100%", height:"100%", objectFit:"cover" }} />
          </div>
        </div>
        <div style={{ textAlign:"center", marginBottom:48 }}><h2 className="section-title">What We Stand For</h2></div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(3,1fr)", gap:28, marginBottom:80 }}>
          {[["🌱","Sustainability First","We certify every property against strict environmental standards."],["🤝","Community Impact","30% of our partner hotels are locally owned, keeping tourism dollars in local communities."],["💚","Authentic Experiences","We go beyond the ordinary to bring you stays that create lifelong memories."]].map(([icon,title,desc]) => (
            <div key={title} style={{ padding:"36px 28px", background:"linear-gradient(135deg,#f0f7f4,white)", borderRadius:24, border:"1px solid #d8f3dc" }}>
              <div style={{ fontSize:"2.5rem", marginBottom:16 }}>{icon}</div>
              <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.3rem", fontWeight:700, color:"#1a3d2b", marginBottom:12 }}>{title}</h3>
              <p style={{ color:"#6b7c73", lineHeight:1.7 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginBottom:48 }}><h2 className="section-title">Meet Our Team</h2></div>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:24 }}>
          {team.map(p => (
            <div key={p.name} className="card" style={{ textAlign:"center", padding:"0 0 24px" }}>
              <div style={{ height:200, overflow:"hidden" }}><img src={p.img} alt={p.name} style={{ width:"100%", height:"100%", objectFit:"cover" }} /></div>
              <div style={{ padding:"20px 16px 0" }}>
                <h4 style={{ fontFamily:"Playfair Display", fontSize:"1.05rem", fontWeight:700, color:"#1a3d2b", marginBottom:4 }}>{p.name}</h4>
                <p style={{ fontSize:"0.85rem", color:"#6b7c73" }}>{p.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: CONTACT ────────────────────────────────────────────────────────────
function ContactPage() {
  const [form, setForm] = useState({ name:"", email:"", subject:"", msg:"" });
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // ╔══════════════════════════════════════════════════════════════════════════╗
  // ║  🔧 FORMSPREE SETUP - ADD YOUR FORM ENDPOINT HERE                        ║
  // ╠══════════════════════════════════════════════════════════════════════════╣
  // ║  1. Go to: https://formspree.io/                                         ║
  // ║  2. Sign up for free (no credit card needed)                             ║
  // ║  3. Create a new form                                                    ║
  // ║  4. Copy your form endpoint URL                                          ║
  // ║  5. Replace YOUR_FORM_ID below with your actual form ID                  ║
  // ║                                                                           ║
  // ║  Example:                                                                ║
  // ║  If your endpoint is: https://formspree.io/f/xwkgpqle                    ║
  // ║  Then change line below to:                                              ║
  // ║  const FORMSPREE_URL = "https://formspree.io/f/xwkgpqle";               ║
  // ╚══════════════════════════════════════════════════════════════════════════╝
  
  const FORMSPREE_URL = "https://formspree.io/forms";  // ← CHANGE THIS!

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.msg) return;

    setSubmitting(true);
    try {
      const response = await fetch(FORMSPREE_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.msg,
        }),
      });

      if (response.ok) {
        setSent(true);
        setForm({ name:"", email:"", subject:"", msg:"" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Failed to send message. Please check your connection.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a3d2b,#2d6a4f)", padding:"80px 40px 60px", textAlign:"center" }}>
        <div className="badge" style={{ marginBottom:14, background:"rgba(116,198,157,0.15)", color:"#74c69d", border:"1px solid rgba(116,198,157,0.25)" }}>💬 Get in Touch</div>
        <h1 style={{ color:"white", fontFamily:"Playfair Display", fontSize:"3rem", fontWeight:900, marginBottom:16 }}>We'd Love to Hear From You</h1>
        <p style={{ color:"rgba(183,228,199,0.8)", fontSize:"1.1rem" }}>Our travel experts are always ready to help plan your dream trip.</p>
      </div>
      <div className="section">
        <div style={{ display:"grid", gridTemplateColumns:"1fr 1.4fr", gap:60 }}>
          <div>
            <h2 style={{ fontFamily:"Playfair Display", fontSize:"1.8rem", fontWeight:900, color:"#1a3d2b", marginBottom:28 }}>Contact Information</h2>
            {[["📍","Our Office","12 Greenway Tower, MG Road\nBangalore – 560001, India"],["📞","Phone","+91 80 4567 8900\nMon – Sat, 9am – 6pm IST"],["✉️","Email","hello@takemeplaces.in\nsupport@takemeplaces.in"],["⏰","24/7 Helpline","+91 98765 43210\nFor urgent travel support"]].map(([icon,label,val]) => (
              <div key={label} style={{ display:"flex", gap:16, marginBottom:28 }}>
                <div style={{ width:48, height:48, borderRadius:14, background:"#f0f7f4", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"1.4rem", flexShrink:0 }}>{icon}</div>
                <div><div style={{ fontWeight:700, fontSize:"0.9rem", color:"#1a3d2b", marginBottom:4 }}>{label}</div><div style={{ fontSize:"0.9rem", color:"#6b7c73", lineHeight:1.6, whiteSpace:"pre-line" }}>{val}</div></div>
              </div>
            ))}
          </div>
          <div style={{ background:"white", borderRadius:24, padding:"40px", boxShadow:"0 8px 40px rgba(0,0,0,0.08)" }}>
            {sent ? (
              <div style={{ textAlign:"center", padding:"60px 20px" }}>
                <div style={{ fontSize:"4rem", marginBottom:20 }}>🌿</div>
                <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.8rem", color:"#1a3d2b", marginBottom:12 }}>Message Sent!</h3>
                <p style={{ color:"#6b7c73", lineHeight:1.7 }}>Thank you, {form.name}! Our team will get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.6rem", color:"#1a3d2b", marginBottom:28, fontWeight:900 }}>Send a Message</h3>
                <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr", gap:18, marginBottom:18 }}>
                  <div><label className="input-label">Your Name</label><input className="input" name="name" placeholder="Your name" value={form.name} onChange={e => setForm({...form,name:e.target.value})} required /></div>
                  <div><label className="input-label">Email Address</label><input className="input" type="email" name="email" placeholder="you@email.com" value={form.email} onChange={e => setForm({...form,email:e.target.value})} required /></div>
                </div>
                <div style={{ marginBottom:18 }}>
                  <label className="input-label">Subject</label>
                  <select className="input" name="subject" value={form.subject} onChange={e => setForm({...form,subject:e.target.value})}>
                    <option value="">Select a topic…</option>
                    <option>Booking Support</option><option>General Enquiry</option><option>Cancellation Request</option><option>Partnership</option><option>Other</option>
                  </select>
                </div>
                <div style={{ marginBottom:28 }}><label className="input-label">Your Message</label><textarea className="input" name="message" rows={5} placeholder="Tell us how we can help you…" value={form.msg} onChange={e => setForm({...form,msg:e.target.value})} style={{ resize:"vertical" }} required /></div>
                <button className="btn-primary" type="submit" style={{ width:"100%", padding:"16px" }} disabled={submitting}>
                  {submitting ? "Sending..." : "Send Message →"}
                </button>
                <p style={{ textAlign:"center", fontSize:"0.8rem", color:"#6b7c73", marginTop:12 }}>We typically reply within 2–4 hours 🌿</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── PAGE: MY BOOKINGS ────────────────────────────────────────────────────────
function BookingsPage({ setPage }) {
  const BOOKINGS = [
    { id:"TMP-2025-001", hotel:"The Jungle Canopy Resort", location:"Bali, Indonesia",   checkin:"Mar 15, 2025", checkout:"Mar 20, 2025", nights:5, total:963,  status:"Confirmed", img:HOTELS[0].img },
    { id:"TMP-2025-002", hotel:"Green Peak Sanctuary",     location:"Kerala, India",     checkin:"Apr 2, 2025",  checkout:"Apr 6, 2025",  nights:4, total:398,  status:"Upcoming",  img:HOTELS[2].img },
    { id:"TMP-2024-089", hotel:"Serenity Islands Resort",  location:"Phuket, Thailand",  checkin:"Dec 20, 2024", checkout:"Dec 26, 2024", nights:6, total:1068, status:"Completed", img:HOTELS[5].img },
  ];
  const STATUS = { Confirmed:{bg:"#d8f3dc",color:"#2d6a4f"}, Upcoming:{bg:"#fff4d6",color:"#a0720a"}, Completed:{bg:"#f0f0f0",color:"#555"} };
  return (
    <div>
      <div style={{ background:"linear-gradient(135deg,#1a3d2b,#2d6a4f)", padding:"80px 40px 60px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="badge" style={{ marginBottom:14, background:"rgba(116,198,157,0.15)", color:"#74c69d", border:"1px solid rgba(116,198,157,0.25)" }}>📋 Your Trips</div>
          <h1 style={{ color:"white", fontFamily:"Playfair Display", fontSize:"2.8rem", fontWeight:900, marginBottom:8 }}>My Bookings</h1>
          <p style={{ color:"rgba(183,228,199,0.75)" }}>All your travel plans in one place.</p>
        </div>
      </div>
      <div style={{ maxWidth:1100, margin:"0 auto", padding:"50px 40px" }}>
        <div style={{ display:"grid", gridTemplateColumns:"repeat(4,1fr)", gap:20, marginBottom:48 }}>
          {[["🧳","3","Total Bookings"],["✅","1","Confirmed"],["📅","1","Upcoming"],["⭐","15","Nights Stayed"]].map(([icon,n,l]) => (
            <div key={l} style={{ background:"white", borderRadius:18, padding:"24px 20px", boxShadow:"0 4px 20px rgba(0,0,0,0.06)", textAlign:"center" }}>
              <div style={{ fontSize:"1.8rem", marginBottom:8 }}>{icon}</div>
              <div style={{ fontFamily:"Playfair Display", fontSize:"1.8rem", fontWeight:900, color:"#1a3d2b" }}>{n}</div>
              <div style={{ fontSize:"0.82rem", color:"#6b7c73" }}>{l}</div>
            </div>
          ))}
        </div>
        <h2 style={{ fontFamily:"Playfair Display", fontSize:"1.6rem", fontWeight:900, color:"#1a3d2b", marginBottom:24 }}>All Bookings</h2>
        <div style={{ display:"flex", flexDirection:"column", gap:20 }}>
          {BOOKINGS.map(b => (
            <div key={b.id} style={{ background:"white", borderRadius:20, overflow:"hidden", boxShadow:"0 4px 20px rgba(0,0,0,0.07)", display:"flex" }}>
              <img src={b.img} alt={b.hotel} style={{ width:180, objectFit:"cover", flexShrink:0 }} />
              <div style={{ padding:"24px 28px", flex:1, display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                <div>
                  <div style={{ display:"flex", gap:10, alignItems:"center", marginBottom:8 }}>
                    <h3 style={{ fontFamily:"Playfair Display", fontSize:"1.2rem", fontWeight:700, color:"#1a3d2b" }}>{b.hotel}</h3>
                    <span style={{ padding:"3px 12px", borderRadius:20, fontSize:"0.78rem", fontWeight:700, background:STATUS[b.status].bg, color:STATUS[b.status].color }}>{b.status}</span>
                  </div>
                  <p style={{ color:"#6b7c73", fontSize:"0.88rem", marginBottom:10 }}>📍 {b.location} · Booking ID: {b.id}</p>
                  <div style={{ display:"flex", gap:20 }}>
                    <span style={{ fontSize:"0.88rem", color:"#4a5e53" }}>📅 {b.checkin} → {b.checkout}</span>
                    <span style={{ fontSize:"0.88rem", color:"#4a5e53" }}>🌙 {b.nights} nights</span>
                  </div>
                </div>
                <div style={{ textAlign:"right" }}>
                  <div style={{ fontFamily:"Playfair Display", fontSize:"1.6rem", fontWeight:900, color:"#1a3d2b", marginBottom:12 }}>${b.total}</div>
                  <div style={{ display:"flex", gap:8 }}>
                    {b.status !== "Completed" && <button className="btn-outline" style={{ padding:"8px 16px", fontSize:"0.82rem" }}>Cancel</button>}
                    <button className="btn-primary" style={{ padding:"8px 16px", fontSize:"0.82rem" }}>View Details</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:"center", marginTop:48 }}>
          <p style={{ color:"#6b7c73", marginBottom:16 }}>Ready for your next adventure?</p>
          <button className="btn-gold" onClick={() => setPage("Hotels")}>Explore More Hotels →</button>
        </div>
      </div>
    </div>
  );
}

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function App() {
  const [page,          setPage]          = useState("Home");
  const [selectedHotel, setSelectedHotel] = useState(null);

  const renderPage = () => {
    switch (page) {
      case "Home":        return <HomePage        setPage={setPage} setSelectedHotel={setSelectedHotel} />;
      case "Hotels":      return <HotelsPage      setPage={setPage} setSelectedHotel={setSelectedHotel} />;
      case "HotelDetail": return <HotelDetailPage hotel={selectedHotel} setPage={setPage} />;
      case "About":       return <AboutPage />;
      case "Contact":     return <ContactPage />;
      case "My Bookings": return <BookingsPage    setPage={setPage} />;
      default:            return <HomePage        setPage={setPage} setSelectedHotel={setSelectedHotel} />;
    }
  };

  return (
    <>
      <style>{STYLES}</style>
      <div style={{ minHeight:"100vh", display:"flex", flexDirection:"column" }}>
        <Navbar page={page} setPage={setPage} />
        <main style={{ flex:1 }}>{renderPage()}</main>
        <Footer setPage={setPage} />
      </div>
    </>
  );
}
