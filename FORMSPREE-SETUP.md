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

### Step 2: Create Your Forms

You need **TWO forms** for this website:

#### Form 1: Contact Form
1. Click **"+ New Form"**
2. Name it: `Contact Form`
3. Click **"Create Form"**
4. Copy the endpoint (e.g., `https://formspree.io/f/xwkgpqle`)

#### Form 2: User Registration Form  
1. Click **"+ New Form"** again
2. Name it: `User Registrations`
3. Click **"Create Form"**
4. Copy the endpoint (e.g., `https://formspree.io/f/mblrabcd`)

---

### Step 3: Copy Your Form Endpoints

You'll have **TWO endpoints**:

**Contact Form:**
```
https://formspree.io/f/xwkgpqle
```

**Login/Registration Form:**
```
https://formspree.io/f/mblrabcd
```

📋 **COPY BOTH OF THESE!**

---

### Step 4: Add Them to Your Code

#### For Contact Form:
1. Open: **`src/App.js`**
2. Find **line ~500** (search for `FORMSPREE_URL`)
3. Replace:

```javascript
const FORMSPREE_URL = "https://formspree.io/f/YOUR_FORM_ID";
```

With:

```javascript
const FORMSPREE_URL = "https://formspree.io/f/xwkgpqle";  // Your actual contact form ID
```

#### For Login/Registration Form:
1. Stay in **`src/App.js`**
2. Find **line ~670** (search for `FORMSPREE_LOGIN`)
3. Replace:

```javascript
const FORMSPREE_LOGIN = "https://formspree.io/f/YOUR_LOGIN_FORM_ID";
```

With:

```javascript
const FORMSPREE_LOGIN = "https://formspree.io/f/mblrabcd";  // Your actual login form ID
```

5. **Save the file** (Ctrl+S or Cmd+S)

---

### Step 5: Test Both Forms!

1. Run your website:
   ```bash
   npm start
   ```

2. **Test Contact Form:**
   - Go to the **Contact** page
   - Fill out the form
   - Click "Send Message"
   - Check your email ✅

3. **Test Login/Registration Form:**
   - Click **"Login"** in the navigation
   - Click **"Sign Up"** tab
   - Fill in name, email, password
   - Click "Create Account"
   - Check your email for the registration notification ✅

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
