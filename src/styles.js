export const globalStyles = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

  :root {
    --jungle: #1a3d2b;
    --forest: #2d6a4f;
    --fern: #40916c;
    --leaf: #52b788;
    --mint: #74c69d;
    --mist: #b7e4c7;
    --foam: #d8f3dc;
    --teal: #0a7c6e;
    --ocean: #0d6e62;
    --gold: #e9c46a;
    --sand: #f4a261;
    --cream: #fefdf9;
    --white: #ffffff;
    --dark: #0d1f17;
    --gray: #6b7c73;
    --light-gray: #f0f7f4;
  }

  body {
    font-family: 'DM Sans', sans-serif;
    background: var(--cream);
    color: var(--dark);
    min-height: 100vh;
  }

  h1, h2, h3, h4 { font-family: 'Playfair Display', serif; }

  .nav {
    position: sticky; top: 0; z-index: 100;
    background: rgba(26, 61, 43, 0.97);
    backdrop-filter: blur(12px);
    padding: 0 40px;
    display: flex; align-items: center; justify-content: space-between;
    height: 70px;
    box-shadow: 0 2px 20px rgba(0,0,0,0.2);
  }
  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 1.4rem; font-weight: 900;
    color: var(--mint);
    cursor: pointer;
    display: flex; align-items: center; gap: 8px;
    letter-spacing: -0.5px;
  }
  .nav-logo span { color: var(--gold); }
  .nav-links { display: flex; gap: 6px; align-items: center; }
  .nav-link {
    color: var(--mist);
    background: none; border: none;
    padding: 8px 16px; border-radius: 8px;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; font-weight: 500;
    transition: all 0.2s;
  }
  .nav-link:hover, .nav-link.active {
    background: rgba(116,198,157,0.15);
    color: var(--mint);
  }
  .nav-cta {
    background: var(--gold);
    color: var(--dark); border: none;
    padding: 9px 20px; border-radius: 10px;
    cursor: pointer; font-family: 'DM Sans', sans-serif;
    font-size: 0.9rem; font-weight: 600;
    transition: all 0.2s;
    margin-left: 8px;
  }
  .nav-cta:hover { background: var(--sand); transform: translateY(-1px); }

  .btn-primary {
    background: linear-gradient(135deg, var(--fern), var(--teal));
    color: white; border: none;
    padding: 14px 32px; border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem; font-weight: 600;
    cursor: pointer; transition: all 0.25s;
    box-shadow: 0 4px 15px rgba(64,145,108,0.35);
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(64,145,108,0.45); }

  .btn-gold {
    background: linear-gradient(135deg, var(--gold), var(--sand));
    color: var(--dark); border: none;
    padding: 14px 32px; border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 1rem; font-weight: 700;
    cursor: pointer; transition: all 0.25s;
    box-shadow: 0 4px 15px rgba(233,196,106,0.4);
  }
  .btn-gold:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(233,196,106,0.5); }

  .btn-outline {
    background: transparent;
    color: var(--forest); border: 2px solid var(--forest);
    padding: 12px 28px; border-radius: 12px;
    font-family: 'DM Sans', sans-serif;
    font-size: 0.95rem; font-weight: 600;
    cursor: pointer; transition: all 0.25s;
  }
  .btn-outline:hover { background: var(--forest); color: white; }

  .card {
    background: white; border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 4px 20px rgba(0,0,0,0.08);
    transition: all 0.3s;
  }
  .card:hover { transform: translateY(-6px); box-shadow: 0 16px 40px rgba(0,0,0,0.14); }

  .badge {
    display: inline-block;
    background: var(--foam); color: var(--forest);
    padding: 4px 12px; border-radius: 20px;
    font-size: 0.78rem; font-weight: 600;
    letter-spacing: 0.5px;
  }
  .badge-gold { background: #fff4d6; color: #a0720a; }

  .section { padding: 80px 40px; max-width: 1200px; margin: 0 auto; }
  .section-title {
    font-size: 2.4rem; font-weight: 900;
    color: var(--jungle); margin-bottom: 12px;
    line-height: 1.2;
  }
  .section-sub {
    color: var(--gray); font-size: 1.05rem;
    margin-bottom: 48px; max-width: 520px;
    font-weight: 400; line-height: 1.6;
  }

  .footer { background: var(--jungle); color: var(--mist); padding: 60px 40px 30px; }
  .footer-grid {
    max-width: 1200px; margin: 0 auto;
    display: grid; grid-template-columns: 2fr 1fr 1fr 1fr;
    gap: 48px; margin-bottom: 48px;
  }
  .footer-logo { font-family: 'Playfair Display', serif; font-size: 1.5rem; font-weight: 900; color: var(--mint); margin-bottom: 14px; }
  .footer-logo span { color: var(--gold); }
  .footer p { font-size: 0.9rem; line-height: 1.7; opacity: 0.75; }
  .footer-col h4 { font-family: 'DM Sans', sans-serif; font-size: 0.85rem; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--mint); margin-bottom: 16px; }
  .footer-link { display: block; color: rgba(183,228,199,0.7); font-size: 0.9rem; margin-bottom: 10px; cursor: pointer; transition: color 0.2s; background: none; border: none; text-align: left; }
  .footer-link:hover { color: var(--mint); }
  .footer-bottom { border-top: 1px solid rgba(116,198,157,0.15); padding-top: 24px; max-width: 1200px; margin: 0 auto; display: flex; justify-content: space-between; align-items: center; }
  .footer-bottom p { font-size: 0.85rem; opacity: 0.5; }

  .input {
    width: 100%; padding: 12px 16px;
    border: 2px solid #e0ede8; border-radius: 10px;
    font-family: 'DM Sans', sans-serif; font-size: 0.95rem;
    color: var(--dark); background: white;
    transition: border-color 0.2s; outline: none;
  }
  .input:focus { border-color: var(--leaf); }
  .input-label { font-size: 0.82rem; font-weight: 600; color: var(--gray); margin-bottom: 6px; display: block; text-transform: uppercase; letter-spacing: 0.5px; }

  .stars { color: var(--gold); letter-spacing: 2px; }

  .amenity-tag {
    display: inline-flex; align-items: center; gap: 5px;
    background: var(--foam); color: var(--forest);
    padding: 5px 12px; border-radius: 8px;
    font-size: 0.82rem; font-weight: 500; margin: 3px;
  }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up  { animation: fadeUp 0.7s ease forwards; }
  .fade-up-2 { animation: fadeUp 0.7s 0.15s ease forwards; opacity: 0; }
  .fade-up-3 { animation: fadeUp 0.7s 0.30s ease forwards; opacity: 0; }
  .fade-up-4 { animation: fadeUp 0.7s 0.45s ease forwards; opacity: 0; }
`;
