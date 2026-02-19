# 💬 WhatsApp Button Customization Guide

The website includes a floating WhatsApp button in the bottom-right corner that pulses to grab attention!

---

## 📍 Current Setup

**Phone Number:** 9606252699  
**Pre-filled Message:** "Hi there! Welcome to Take Me Places 🌿...What destination are you dreaming of?"

---

## 🔧 How to Change the Phone Number

### Location: `src/App.js` (bottom of file, around line ~935)

Find this line:
```jsx
href="https://wa.me/9606252699?text=Hi%20there!%20Welcome%20to%20Take%20Me%20Places%20%F0%9F%8C%BF...What%20destination%20are%20you%20dreaming%20of?"
```

**Replace `9606252699` with your WhatsApp number:**

```jsx
href="https://wa.me/YOUR_PHONE_NUMBER?text=Hi%20there!..."
```

### Important Notes:
- ✅ Include country code (e.g., `919606252699` for India)
- ❌ NO `+` sign, NO dashes, NO spaces
- ✅ Example: India number 9606252699 → `919606252699`
- ✅ Example: US number (123) 456-7890 → `11234567890`

---

## ✍️ How to Change the Message

The text after `?text=` is the pre-filled message.

**Current message:**
```
Hi there! Welcome to Take Me Places 🌿...What destination are you dreaming of?
```

**To change it:**

1. Write your new message in plain English:
   ```
   Hello! I'm interested in booking a hotel.
   ```

2. Go to: https://www.urlencoder.org/

3. Paste your message and click "Encode"

4. Copy the encoded result (e.g., `Hello!%20I'm%20interested%20in%20booking%20a%20hotel.`)

5. Replace the text after `?text=` in the code

**Example:**
```jsx
href="https://wa.me/919606252699?text=Hello!%20I'm%20interested%20in%20booking%20a%20hotel."
```

---

## 🎨 Customizing Button Appearance

### Change Button Color

Find this in `src/App.js` around line ~76:
```css
.whatsapp-float {
  background: #25D366;  /* ← Change this color */
}
```

**Popular alternatives:**
- WhatsApp Green: `#25D366` (current)
- Darker Green: `#128C7E`
- Your brand color: `#40916c` (matches your site)

### Change Button Size

```css
.whatsapp-float {
  width: 60px;   /* ← Make larger or smaller */
  height: 60px;  /* ← Keep width and height equal */
}
```

### Change Button Position

```css
.whatsapp-float {
  bottom: 30px;  /* ← Distance from bottom */
  right: 30px;   /* ← Distance from right */
}
```

**Move to left side:**
```css
right: auto;
left: 30px;
```

---

## 🚫 How to Remove the Button

If you don't want the WhatsApp button, simply delete this entire section from `src/App.js`:

```jsx
{/* WhatsApp Floating Button */}
<a
  href="https://wa.me/9606252699?text=..."
  className="whatsapp-float"
  ...
>
  <i className="fab fa-whatsapp"></i>
</a>
```

---

## ✅ Testing

1. Save your changes
2. Run `npm start`
3. Click the WhatsApp button
4. It should open WhatsApp (or WhatsApp Web) with:
   - Your phone number
   - Your pre-filled message

---

## 📱 Multiple Contact Options

Want to add other messaging platforms?

### Telegram Button
```jsx
<a
  href="https://t.me/YOUR_USERNAME"
  className="telegram-float"
  style={{
    position: 'fixed',
    bottom: '100px',  /* Above WhatsApp */
    right: '30px',
    background: '#0088cc',
    /* ... copy other WhatsApp styles */
  }}
>
  <i className="fab fa-telegram"></i>
</a>
```

### Phone Call Button
```jsx
<a
  href="tel:+919606252699"
  className="phone-float"
  style={{
    position: 'fixed',
    bottom: '170px',  /* Above Telegram */
    right: '30px',
    background: '#007bff',
    /* ... copy other WhatsApp styles */
  }}
>
  <i className="fas fa-phone"></i>
</a>
```

---

## 🎯 Pro Tips

1. **Test on mobile** - The button should open WhatsApp app directly
2. **Keep message short** - Long pre-filled messages can look spammy
3. **Use emojis** - They work in WhatsApp messages! 🌿 ✈️ 🏨
4. **Monitor response time** - Users expect quick replies on WhatsApp

---

Need help? All WhatsApp button code is in **`src/App.js`** around lines 76-120 and 930-945.
