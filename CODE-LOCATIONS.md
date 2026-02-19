# 📍 Exact Code Locations for Customization

This file shows you **exactly where** to find and edit key parts of the website.

---

## 📧 Contact Form Setup (Formspree)

### File: `src/App.js`

**Line: ~500** (inside the `ContactPage` function)

```javascript
// FIND THIS:
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";  // ← CHANGE THIS!

// REPLACE YOUR_FORM_ID WITH YOUR ACTUAL FORMSPREE ID:
const FORMSPREE_URL = "https://formspree.io/f/xwkgpqle";  // Example
```

**How to get your Form ID:**
1. Sign up at [formspree.io](https://formspree.io) (free)
2. Create a new form called "Contact Form"
3. Copy the endpoint URL (e.g., `https://formspree.io/f/xwkgpqle`)
4. Replace `YOUR_FORM_ID` with your actual ID (`xwkgpqle`)

---

## 🔐 Login/Registration Form Setup (Formspree)

### File: `src/App.js`

**Line: ~670** (inside the `LoginPage` function)

```javascript
// FIND THIS:
const FORMSPREE_LOGIN = "https://formspree.io/f/YOUR_LOGIN_FORM_ID";  // ← CHANGE THIS!

// REPLACE YOUR_LOGIN_FORM_ID WITH YOUR ACTUAL FORMSPREE ID:
const FORMSPREE_LOGIN = "https://formspree.io/f/mblrabcd";  // Example
```

**How to set it up:**
1. In Formspree, create a **SECOND form** called "User Registrations"
2. Copy the endpoint URL for this new form
3. Replace `YOUR_LOGIN_FORM_ID` with your actual ID
4. When users sign up, you'll receive their registration details via email

**Note:** This is a simple registration capture system. For a real production app with user authentication, you'd need a proper backend with a database.

📄 **See full setup guide:** `FORMSPREE-SETUP.md`

---

## 🎨 Logo Location

### File: `src/App.js`

#### Navigation Bar Logo
**Line: ~148** (inside the `Navbar` function)

```jsx
// CURRENT CODE:
<div className="nav-logo" onClick={() => setPage("Home")}>
  🌿 Take Me <span>Places</span>
</div>

// TO CHANGE TO YOUR LOGO:
<div className="nav-logo" onClick={() => setPage("Home")}>
  <img src="/logo.png" alt="Logo" style={{height:"40px", marginRight:"8px"}} />
  Take Me <span>Places</span>
</div>

// OR LOGO ONLY (NO TEXT):
<div className="nav-logo" onClick={() => setPage("Home")}>
  <img src="/logo.png" alt="Take Me Places" style={{height:"40px"}} />
</div>
```

#### Footer Logo
**Line: ~176** (inside the `Footer` function)

```jsx
// CURRENT CODE:
<div className="footer-logo">
  🌿 Take Me <span>Places</span>
</div>

// TO CHANGE TO YOUR LOGO:
<div className="footer-logo">
  <img src="/logo.png" alt="Logo" style={{height:"35px", marginRight:"8px"}} />
  Take Me <span>Places</span>
</div>
```

---

## 🎨 Color Customization

### File: `src/App.js`

**Line: ~10-20** (inside the `STYLES` constant)

```jsx
:root {
  --jungle: #1a3d2b;   // Dark green - navigation, headings
  --forest: #2d6a4f;   // Medium green
  --fern: #40916c;     // Main brand green
  --leaf: #52b788;     // Light green
  --mint: #74c69d;     // Accent green
  --gold: #e9c46a;     // Gold/yellow - CTAs, accents
  --sand: #f4a261;     // Orange accent
  --cream: #fefdf9;    // Background color
}
```

**To change colors:** Simply replace the hex codes with your brand colors!

---

## 📝 Business Info Customization

### Company Name
**Line: ~148** (Navbar) and **Line: ~176** (Footer)
```jsx
Take Me <span>Places</span>  // Change this text
```

### Contact Information
**Line: ~431** (inside the `ContactPage` function)

```jsx
{[
  ["📍","Our Office","12 Greenway Tower, MG Road\nBangalore – 560001, India"],
  ["📞","Phone","+91 80 4567 8900\nMon – Sat, 9am – 6pm IST"],
  ["✉️","Email","hello@takemeplaces.in\nsupport@takemeplaces.in"],
  ["⏰","24/7 Helpline","+91 98765 43210\nFor urgent travel support"]
]}
```

**To change:** Edit the text inside the quotes.

### About Us Content
**Line: ~387** (inside the `AboutPage` function)

```jsx
// Company description:
"At Take Me Places Pvt Ltd, we believe travel should be a force for good..."

// Mission statement:
"We started in 2018 with a simple idea: make eco-conscious travel accessible..."
```

### Social Media Links
**Line: ~185** (inside the `Footer` function)

```jsx
{["🌍", "📘", "📸", "🐦"].map((icon, i) => ...
```

**To add real links:**
```jsx
{[
  {icon:"🌍", url:"https://instagram.com/yourcompany"},
  {icon:"📘", url:"https://facebook.com/yourcompany"},
  {icon:"📸", url:"https://instagram.com/yourcompany"},
  {icon:"🐦", url:"https://twitter.com/yourcompany"}
].map(({icon, url}) => (
  <a href={url} target="_blank" rel="noopener noreferrer" 
     style={{...existing styles...}}>
    {icon}
  </a>
))}
```

---

## 🏨 Hotel Data

### File: `src/App.js`

**Line: ~63** (inside the `HOTELS` array)

```jsx
const HOTELS = [
  { 
    id:1, 
    name:"The Jungle Canopy Resort", 
    location:"Bali, Indonesia",
    price:189, 
    rating:4.9, 
    reviews:1240, 
    tag:"Bestseller",
    img:"https://images.unsplash.com/...", 
    amenities:["🏊 Pool","🌿 Spa","🍃 Garden","🌅 View"],
    desc:"Nestled among ancient banyan trees..."
  },
  // Add more hotels here...
]
```

**To add your hotels:** Duplicate the object structure and fill in your data.

---

## 🌍 Destinations

### File: `src/App.js`

**Line: ~72** (inside the `DESTINATIONS` array)

```jsx
const DESTINATIONS = [
  { 
    name:"Bali", 
    country:"Indonesia", 
    hotels:1240, 
    img:"https://images.unsplash.com/..." 
  },
  // Add more destinations...
]
```

---

## 🔍 Quick Search Tips

Use your code editor's search (Ctrl+F or Cmd+F) to find:
- **Logo:** Search for `🌿 Take Me`
- **Colors:** Search for `--jungle:` or `--gold:`
- **Contact info:** Search for `Bangalore` or `hello@takemeplaces`
- **Hotels:** Search for `const HOTELS =`
- **Company name:** Search for `Take Me Places Pvt Ltd`

---

## 💡 Pro Tips

1. **Always save** `src/App.js` after making changes
2. **Refresh browser** to see changes (Ctrl+R or Cmd+R)
3. **Test on mobile** - resize your browser window to check responsiveness
4. **Keep backups** - save a copy of the original file before editing

---

Need help? All changes are in one file: **`src/App.js`** 🎯
