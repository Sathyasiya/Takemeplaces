# 📧 Formspree Setup Guide

## What is Formspree?

Formspree is a free service that lets your contact form send emails to your inbox **without needing a backend server**. Perfect for static websites!

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Formspree

1. Go to **[https://formspree.io](https://formspree.io)**
2. Click **"Sign Up"** (top right)
3. Create a free account:
   - Email: your-email@example.com
   - Password: (create one)
4. Verify your email address

---

### Step 2: Create a New Form

1. Once logged in, click **"+ New Form"**
2. Give it a name: `Take Me Places Contact Form`
3. Click **"Create Form"**

---

### Step 3: Copy Your Form Endpoint

You'll see a screen that says **"Your form endpoint is:"**

It will look like this:
```
https://formspree.io/f/xwkgpqle
```

The part after `/f/` is your **Form ID** (e.g., `xwkgpqle`)

📋 **COPY THIS ENTIRE URL!**

---

### Step 4: Add It to Your Code

1. Open: **`src/App.js`**
2. Find **line ~495** (search for `FORMSPREE_URL`)
3. You'll see this:

```javascript
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";  // ← CHANGE THIS!
```

4. **Replace** `YOUR_FORM_ID` with your actual form ID:

**BEFORE:**
```javascript
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
```

**AFTER:**
```javascript
const FORMSPREE_URL = "https://formspree.io/f/xwkgpqle";  // Your actual ID
```

5. **Save the file** (Ctrl+S or Cmd+S)

---

### Step 5: Test It!

1. Run your website:
   ```bash
   npm start
   ```

2. Go to the **Contact** page

3. Fill out the form with test data:
   - Name: Test User
   - Email: test@example.com
   - Message: This is a test message

4. Click **"Send Message"**

5. Check your email inbox — you should receive the message! ✅

---

## 🎯 Where to Receive Form Submissions

By default, Formspree sends submissions to **the email you used to sign up**.

### To Change the Email Address:

1. Go to your Formspree dashboard
2. Click on your form name
3. Go to **"Settings"**
4. Under **"Email Notifications"**, change the recipient email
5. Save changes

---

## 🔧 Troubleshooting

### Form not sending?

1. ✅ **Check you saved the file** after adding your Form ID
2. ✅ **Restart the dev server**: Stop with `Ctrl+C`, then run `npm start` again
3. ✅ **Check the Form ID is correct**: No typos, exact match from Formspree
4. ✅ **Check browser console** for errors (F12 → Console tab)

### Getting error "Form not found"?

- Your Form ID is wrong. Go back to Formspree dashboard and copy it again.

### Email not arriving?

- Check your **spam folder**
- Verify your email in Formspree settings
- Make sure Formspree account is verified

---

## 💰 Pricing (Free Plan Limits)

Formspree's **free plan** includes:
- ✅ **50 submissions per month**
- ✅ **Unlimited forms**
- ✅ **Email notifications**
- ✅ **Spam filtering**

For most small businesses, the free plan is enough!

### If you need more:
- **$10/month**: 1,000 submissions
- **$40/month**: 10,000 submissions

---

## 🎨 Customization Options

### Add Auto-Reply to Users

In Formspree dashboard:
1. Go to **Form Settings**
2. Enable **"Send Auto Reply"**
3. Customize the message users receive after submitting

### Add Spam Protection

Formspree includes built-in spam filtering, but you can add:
- **reCAPTCHA** (in Formspree settings)
- **Honeypot fields** (already included in the code)

---

## 🔄 Alternative Services (if you want)

If Formspree doesn't work for you, here are alternatives:

| Service | Free Limit | Link |
|---------|-----------|------|
| **Formspree** | 50/month | [formspree.io](https://formspree.io) |
| **Form Submit** | 100/month | [formsubmit.co](https://formsubmit.co) |
| **Getform** | 50/month | [getform.io](https://getform.io) |
| **Formspark** | 50/month | [formspark.io](https://formspark.io) |

To use an alternative, just replace the `FORMSPREE_URL` with their endpoint!

---

## 📊 Viewing Form Submissions

You can view all submissions in:
1. Your **email inbox** (automatic)
2. **Formspree dashboard** → Forms → Your form name
3. Export as **CSV** (Formspree dashboard)

---

## ✅ Final Checklist

- [ ] Signed up for Formspree
- [ ] Created a new form
- [ ] Copied form endpoint URL
- [ ] Updated `src/App.js` with your Form ID
- [ ] Saved the file
- [ ] Tested the contact form
- [ ] Received test email

---

**Need help?** Contact Formspree support or check their docs at [help.formspree.io](https://help.formspree.io)
