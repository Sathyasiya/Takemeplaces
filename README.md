# 🌿 Take Me Places Pvt Ltd

A modern, full-featured hotel booking website built with React.

## 🖥️ Pages

| Page | Description |
|------|-------------|
| **Home** | Hero section, search bar, popular destinations, featured hotels, why-us section |
| **Hotels** | Full hotel listing with filter by category, search, and sort |
| **Hotel Detail** | Hotel info, amenities, guest reviews, live booking calculator |
| **About Us** | Company story, mission, values, and team |
| **Contact** | Contact form + office details |
| **My Bookings** | Dashboard showing confirmed, upcoming, and completed trips |

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone or download this repository**
   ```bash
   git clone https://github.com/YOUR_USERNAME/take-me-places.git
   cd take-me-places
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Project Structure

```
take-me-places/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── pages/
│   │   ├── HomePage.js
│   │   ├── HotelsPage.js
│   │   ├── HotelDetailPage.js
│   │   ├── AboutPage.js
│   │   ├── ContactPage.js
│   │   └── BookingsPage.js
│   ├── App.js          # Main app & routing
│   ├── components.js   # Shared components (Navbar, Footer, HotelCard…)
│   ├── data.js         # Hotel & destination data
│   ├── styles.js       # Global CSS-in-JS styles
│   └── index.js        # React entry point
├── .gitignore
├── package.json
└── README.md
```

## 🎨 Design

- **Color palette:** Tropical green & teal
- **Fonts:** Playfair Display (headings) + DM Sans (body)
- **Framework:** React 18 (Create React App)

## 📦 Build for Production

```bash
npm run build
```

This creates an optimised production build in the `/build` folder.

## 🌐 Deploy to GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```
2. Add to `package.json`:
   ```json
   "homepage": "https://YOUR_USERNAME.github.io/take-me-places",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Deploy:
   ```bash
   npm run deploy
   ```

---

© 2025 Take Me Places Pvt Ltd. All rights reserved.
