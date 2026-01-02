# 🚀 Moya Integration Group - GitHub Pages Setup

## 📦 What's Included
- `index.html` - Main website
- `styles.css` - Palantir-inspired styling  
- `script.js` - Interactive functionality

---

## 🌐 Step 1: Deploy to GitHub Pages

### Create Repository:
1. Go to GitHub.com and create a new repository
2. Name it: `moyaintegrationgroup.com` (or any name)
3. Make it **Public**
4. Upload `index.html`, `styles.css`, and `script.js`

### Enable GitHub Pages:
1. Go to repository **Settings**
2. Scroll to **Pages** section (left sidebar)
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/repository-name/`

---

## 📧 Step 2: Setup Contact Form (Formspree)

### Why Formspree?
GitHub Pages can't run backend code, so you need Formspree to handle form submissions.

### Setup (2 minutes):
1. **Sign up**: Go to https://formspree.io/register (FREE)
2. **Verify email**: Check your inbox and verify
3. **Create form**: 
   - Click "New Form"
   - Name it: "Moya Contact Form"
   - Copy your **Form ID** (looks like `xyzabc123`)
4. **Update HTML**:
   - Open `index.html`
   - Find line with: `action="https://formspree.io/f/YOUR_FORM_ID"`
   - Replace `YOUR_FORM_ID` with your actual ID
   - Example: `action="https://formspree.io/f/xyzabc123"`
5. **Save and upload** to GitHub

### Test Your Form:
1. Visit your live GitHub Pages site
2. Fill out the contact form
3. Submit
4. Check your email - you should receive the submission!

---

## 🌍 Step 3: Connect Custom Domain (Optional)

### If you own moyaintegrationgroup.com:

1. **In your domain registrar** (GoDaddy, Namecheap, etc.):
   - Add these DNS records:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   
   Type: A
   Name: @
   Value: 185.199.109.153
   
   Type: A
   Name: @
   Value: 185.199.110.153
   
   Type: A
   Name: @
   Value: 185.199.111.153
   
   Type: CNAME
   Name: www
   Value: yourusername.github.io
   ```

2. **In GitHub repository settings**:
   - Go to **Settings** → **Pages**
   - Under **Custom domain**, enter: `moyaintegrationgroup.com`
   - Click **Save**
   - Check **Enforce HTTPS**

3. **Wait 24-48 hours** for DNS to propagate

---

## ✅ Verification Checklist

- [ ] GitHub repository created
- [ ] Files uploaded (index.html, styles.css, script.js)
- [ ] GitHub Pages enabled
- [ ] Site is live and accessible
- [ ] Formspree account created
- [ ] Form ID updated in index.html
- [ ] Contact form tested and working
- [ ] Custom domain connected (optional)

---

## 🆘 Troubleshooting

**Site not showing?**
- Wait 5-10 minutes after enabling Pages
- Check that files are in the root directory (not in a subfolder)
- Make sure index.html is spelled correctly (lowercase)

**Form not working?**
- Double-check your Formspree form ID
- Make sure you verified your Formspree email
- Check browser console for errors (F12)

**Custom domain not working?**
- DNS changes take 24-48 hours
- Verify DNS records are correct
- Make sure HTTPS enforcement is checked

---

## 📞 Next Steps

1. **Upload to GitHub** ✅
2. **Setup Formspree** ✅  
3. **Test everything** ✅
4. **Share your site!** 🎉

Your site will be live at:
- GitHub: `https://yourusername.github.io/repository-name/`
- Custom domain: `https://moyaintegrationgroup.com` (after DNS setup)

---

**Need help?** Check GitHub Pages docs: https://docs.github.com/pages
