# Step-by-Step: Deploy abc.com to Vercel

## 📋 Step 1: Push Code to GitHub (5-10 minutes)

### 1.1 Check Git Status
```bash
git status
```

### 1.2 Add All Files
```bash
git add .
```

### 1.3 Commit Changes
```bash
git commit -m "Ready for Vercel deployment with custom domain"
```

### 1.4 Create GitHub Repository
1. Go to https://github.com/new
2. Repository name: `saiux-website` (or any name)
3. **Don't** check "Initialize with README"
4. Click "Create repository"

### 1.5 Push to GitHub
```bash
# Replace YOUR_USERNAME and REPO_NAME
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
git branch -M main
git push -u origin main
```

**Example:**
```bash
git remote add origin https://github.com/john/saiux-website.git
git push -u origin main
```

---

## 🚀 Step 2: Deploy to Vercel (10-15 minutes)

### 2.1 Create Vercel Account
1. Go to https://vercel.com/signup
2. Sign up with GitHub (recommended) or email

### 2.2 Import Project
1. Click **"Add New..."** → **"Project"**
2. Click **"Import Git Repository"**
3. Find and select your repository
4. Click **"Import"**

### 2.3 Configure Project
Vercel auto-detects these settings (verify they're correct):

- **Framework Preset:** `Other`
- **Root Directory:** `./`
- **Build Command:** `npm run build` ✅
- **Output Directory:** (leave empty) ✅
- **Install Command:** `npm install` ✅

### 2.4 Environment Variables (Optional)
If you have environment variables:
1. Scroll to **"Environment Variables"**
2. Click **"Add"**
3. Add each variable:
   - Key: `NODE_ENV`
   - Value: `production`
   - Add others as needed

### 2.5 Deploy
1. Click **"Deploy"** button
2. Wait 2-5 minutes for build
3. ✅ Success! Your site is live at `https://your-project.vercel.app`

---

## 🌐 Step 3: Connect abc.com Domain (15-20 minutes)

### 3.1 Add Domain in Vercel
1. In Vercel Dashboard, go to your project
2. Click **"Settings"** tab (top right)
3. Click **"Domains"** in left sidebar
4. In the input field, type: `abc.com`
5. Click **"Add"**

### 3.2 Get Nameservers from Vercel
After adding the domain, Vercel will show:
- **Option 1:** Use Vercel Nameservers (Recommended)
  - `ns1.vercel-dns.com`
  - `ns2.vercel-dns.com`
  - `ns3.vercel-dns.com`

- **Option 2:** Use DNS Records (if keeping GoDaddy nameservers)
  - A Record: `@` → `76.76.21.21`
  - CNAME: `www` → `cname.vercel-dns.com.`

### 3.3 Configure GoDaddy DNS

#### Method A: Use Vercel Nameservers (EASIEST - Recommended)

1. **Login to GoDaddy:**
   - Go to https://godaddy.com
   - Click "Sign In" (top right)

2. **Navigate to DNS:**
   - Click "My Products" (top menu)
   - Find "abc.com" in your domains
   - Click **"DNS"** button (or "Manage DNS")

3. **Change Nameservers:**
   - Scroll to **"Nameservers"** section
   - Click **"Change"** button
   - Select **"Custom"** (not "Default")
   - Delete existing nameservers
   - Add these 3 nameservers:
     ```
     ns1.vercel-dns.com
     ns2.vercel-dns.com
     ns3.vercel-dns.com
     ```
   - Click **"Save"**

#### Method B: Use DNS Records (Keep GoDaddy Nameservers)

1. **In GoDaddy DNS Management:**
   - Go to DNS settings for abc.com
   - Delete existing A record for `@` (if exists)

2. **Add A Record:**
   - Click **"Add"** → Select **"A"**
   - **Name:** `@` (or leave blank)
   - **Value:** `76.76.21.21` (use IP from Vercel)
   - **TTL:** 600 (or default)
   - Click **"Save"**

3. **Add CNAME Record:**
   - Click **"Add"** → Select **"CNAME"**
   - **Name:** `www`
   - **Value:** `cname.vercel-dns.com.` (note the trailing dot)
   - **TTL:** 600
   - Click **"Save"**

### 3.4 Verify in Vercel
1. Go back to Vercel Dashboard → Domains
2. You should see:
   - `abc.com` with status "Valid Configuration" ✅
   - SSL Certificate: "Provisioning" (will be ready in 24-48 hours)

---

## ⏳ Step 4: Wait for DNS Propagation (1-2 hours)

### 4.1 What Happens
- DNS changes propagate worldwide
- Usually takes **1-2 hours** (can take up to 48 hours)
- Vercel automatically provisions SSL certificate

### 4.2 Check Status
1. **In Vercel:** Dashboard → Domains → Check status
2. **Test DNS:** Visit https://www.whatsmydns.net
   - Search for `abc.com`
   - Should show Vercel's IP address

### 4.3 Test Your Site
- Try visiting: `https://abc.com`
- Try visiting: `https://www.abc.com` (should redirect to abc.com)
- If not working, wait longer and clear browser cache

---

## ✅ Step 5: Verify Everything Works

### 5.1 Check Domain Status
- ✅ Vercel Dashboard → Domains → Should show "Valid Configuration"
- ✅ SSL Certificate should show "Valid" (after 24-48 hours)

### 5.2 Test Your Website
- ✅ Visit `https://abc.com` - Should load your site
- ✅ Visit `https://www.abc.com` - Should redirect to abc.com
- ✅ Test contact form - Should work
- ✅ Test all pages - Should work

### 5.3 Check HTTPS
- ✅ URL should show `https://` (not `http://`)
- ✅ Browser should show padlock icon 🔒

---

## 🎉 Success!

Your website is now live at **https://abc.com**!

### What Happens Next
- ✅ Every Git push to `main` branch → Auto-deploys
- ✅ SSL certificate auto-renews
- ✅ www.abc.com automatically redirects to abc.com
- ✅ Free HTTPS forever

---

## 🆘 Troubleshooting

### Domain Not Working After 2 Hours?
1. **Check Vercel Dashboard:**
   - Go to Domains → Look for error messages
   - Check if DNS is configured correctly

2. **Check GoDaddy:**
   - Verify nameservers are saved correctly
   - Make sure you clicked "Save"

3. **Wait Longer:**
   - DNS can take up to 48 hours
   - Try clearing browser cache
   - Try incognito/private mode

### Build Failed?
1. **Check Build Logs:**
   - Vercel Dashboard → Deployments → Click failed deployment
   - Read error messages

2. **Test Locally:**
   ```bash
   npm run build
   ```
   - Fix any errors locally first

### SSL Certificate Not Ready?
- Wait 24-48 hours after DNS propagation
- Vercel handles this automatically
- Check status in Vercel Dashboard → Domains

---

## 📞 Need Help?

- **Vercel Docs:** https://vercel.com/docs
- **Vercel Support:** https://vercel.com/support
- **GoDaddy Help:** https://www.godaddy.com/help

---

**Total Time: ~30 minutes setup + 1-2 hours DNS = Live website! 🚀**

