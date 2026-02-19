# 🌿 Take Me Places Pvt Ltd

A modern, full-featured hotel booking website built with React.

## 🚀 Quick Start

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### ⚡ Important: Contact Form Setup

The contact form requires Formspree to send emails:

1. Sign up at **[formspree.io](https://formspree.io)** (free, no credit card)
2. Create a new form and copy the endpoint URL
3. Add it to `src/App.js` line ~495 (search for `FORMSPREE_URL`)

📄 **Full step-by-step guide:** See `FORMSPREE-SETUP.md`

## 📁 Project Structure

```
take-me-places/
├── public/
│   ├── favicon.svg              ← Browser tab icon (tropical leaf)
│   ├── index.html
│   ├── manifest.json
│   ├── logo.png                 ← ADD YOUR LOGO HERE (optional)
│   └── LOGO-INSTRUCTIONS.txt    ← Detailed logo guide
├── src/
│   ├── App.js                   ← All pages + components (single file)
│   └── index.js
├── package.json
└── README.md
```

## 🎨 Adding Your Custom Logo

### Current State
The site uses a **🌿 emoji** as the logo in the navigation bar and footer.

### To Replace with Your Own Logo:

#### 1️⃣ Prepare Your Logo
- **Size:** 200px × 50px (or similar horizontal ratio)
- **Format:** PNG (transparent background) or SVG
- **Name it:** `logo.png`, `logo.svg`, or `logo.jpg`

#### 2️⃣ Add Logo to Project
Put your logo file in the `/public` folder:
```
public/
  logo.png  ← YOUR LOGO GOES HERE
  favicon.svg
  index.html
```

#### 3️⃣ Update the Code
Open **`src/App.js`** and find line **~148** in the `Navbar` function:

**BEFORE:**
```jsx
🌿 Take Me <span>Places</span>
```

**AFTER (logo + text):**
```jsx
<img src="/logo.png" alt="Logo" style={{height:"40px", marginRight:"8px"}} />
Take Me <span>Places</span>
```

**OR (logo only):**
```jsx
<img src="/logo.png" alt="Take Me Places" style={{height:"40px"}} />
```

#### 4️⃣ (Optional) Update Footer Logo
In **`src/App.js`** find line **~176** in the `Footer` function and make the same change.

### ⚙️ Adjusting Logo Size
Change the `height` value to fit your needs:
```jsx
style={{height:"30px"}}  // Smaller
style={{height:"50px"}}  // Larger
style={{width:"150px", height:"auto"}}  // Fixed width
```

### 🎨 Need a Logo?
Use these free tools to create one:
- [Canva](https://canva.com) - Free design tool
- [Looka](https://looka.com) - AI logo generator
- [Hatchful by Shopify](https://shopify.com/tools/logo-maker) - Free logo maker

---

## 📱 Website Features

### Pages
1. **Home** - Hero banner, search, destinations, featured hotels
2. **Hotels** - Browse all hotels with filters and search
3. **Hotel Detail** - Full info, amenities, reviews, live booking calculator
4. **About Us** - Company story, mission, team
5. **Contact** - Contact form + office info
6. **My Bookings** - User's trip dashboard
7. **Login/Signup** - User authentication (captures registrations via Formspree)

### Special Features
- **WhatsApp Button** - Floating button for instant messaging (bottom-right)
- **Formspree Integration** - Contact form and user registrations via email
- **Responsive Design** - Works perfectly on mobile and desktop

### Design
- **Colors:** Tropical greens & gold
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Animations:** Smooth transitions and hover effects

---

## 🏗️ Build for Production

```bash
npm run build
```

Creates an optimized production build in the `/build` folder.

---

## 🌐 Deploy

### Vercel (Recommended)
1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Deploy automatically! 🚀

### Other Options
- **Netlify:** [netlify.com](https://netlify.com)
- **GitHub Pages:** Add `gh-pages` package
- **Render:** [render.com](https://render.com)

---

## 🔧 Troubleshooting

### Logo Not Showing?
1. ✅ Check logo is in `/public` folder
2. ✅ Verify filename matches exactly (`logo.png` not `Logo.png`)
3. ✅ Clear browser cache: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
4. ✅ Restart dev server: Stop with `Ctrl+C`, then run `npm start` again

### Build Failing?
- Make sure you ran `npm install` first
- Check Node.js version (should be v16+)

---

## 📄 License

© 2025 Take Me Places Pvt Ltd. All rights reserved.

---

**Need help?** Open an issue on GitHub or check `LOGO-INSTRUCTIONS.txt` for detailed logo setup guide.
