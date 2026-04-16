# 🚀 DEPLOY YOUR PORTFOLIO ON GITHUB PAGES + redwanislam.com

This is a **complete step-by-step guide** to host your portfolio for FREE on GitHub Pages with your custom domain redwanislam.com.

---

## WHAT YOU NEED
- A GitHub account (free) — sign up at github.com
- Your domain **redwanislam.com** (you need access to its DNS settings)
- The portfolio files (this folder)

---

## STEP 1 — Create a GitHub Repository

1. Go to **github.com** → click the **+** icon → **New repository**
2. Name it exactly: `redwanislam.com` (or `portfolio`)
3. Set it to **Public**
4. **Do NOT** tick "Add a README file" (keep it empty)
5. Click **Create repository**

---

## STEP 2 — Upload Your Portfolio Files

### Option A — Via GitHub website (easiest, no coding needed)
1. On your new empty repo page, click **"uploading an existing file"**
2. Drag and drop your entire portfolio folder contents:
   - `index.html`
   - `experience.html`, `education.html`, `projects.html`
   - `publications.html`, `skills.html`, `contact.html`
   - `cms.html`
   - `assets/` folder (css, js, img subfolders)
   - `CNAME` file (see Step 4)
3. Scroll down → click **"Commit changes"**

### Option B — Via Git (for future updates)
```bash
cd your-portfolio-folder
git init
git add .
git commit -m "Initial portfolio launch"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/redwanislam.com.git
git push -u origin main
```

---

## STEP 3 — Enable GitHub Pages

1. In your repo, go to **Settings** tab
2. In the left sidebar, click **Pages**
3. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **Save**

GitHub will show: *"Your site is being published at https://YOUR_USERNAME.github.io/REPO_NAME"*

---

## STEP 4 — Add the CNAME File (Custom Domain)

1. In your repo, click **"Add file"** → **"Create new file"**
2. Name it exactly: `CNAME` (no extension, all caps)
3. File contents — just one line:
   ```
   redwanislam.com
   ```
4. Click **Commit changes**

---

## STEP 5 — Configure Your Domain DNS

Log into your domain registrar (wherever you bought redwanislam.com — e.g. GoDaddy, Namecheap, Google Domains) and update the DNS records:

### Add these 4 A Records (for root domain):
| Type | Name | Value          |
|------|------|----------------|
| A    | @    | 185.199.108.153 |
| A    | @    | 185.199.109.153 |
| A    | @    | 185.199.110.153 |
| A    | @    | 185.199.111.153 |

### Add this CNAME Record (for www):
| Type  | Name | Value                        |
|-------|------|------------------------------|
| CNAME | www  | YOUR_USERNAME.github.io      |

> ⚠️ Replace YOUR_USERNAME with your actual GitHub username.
> DNS changes can take 10 minutes to 48 hours to propagate.

---

## STEP 6 — Enable HTTPS (Free SSL Certificate)

1. Go back to repo **Settings → Pages**
2. Under **Custom domain**, type: `redwanislam.com`
3. Click **Save**
4. Tick the **"Enforce HTTPS"** checkbox

Your site will now be live at **https://redwanislam.com** 🎉

---

## STEP 7 — Add Your CV PDF

1. Place your CV PDF file in the `assets/` folder
2. Name it: `Redwan_Islam_CV.pdf`
3. In `assets/js/data.js`, make sure this line reads:
   ```javascript
   cv_file: "assets/Redwan_Islam_CV.pdf",
   ```
4. Upload/push to GitHub

The **Download CV** button on the site will now work automatically.

---

## HOW TO UPDATE CONTENT (Using the CMS)

1. Go to **https://redwanislam.com/cms.html**
2. Log in with your password (default: `redwan2025`)
3. Edit any section — experience, projects, bio, photo, etc.
4. Go to the **Export** tab → click **"Export data.js"**
5. Save the downloaded `data.js` file
6. Upload it to your GitHub repo at `assets/js/data.js` (replacing the old one)
7. Done — site updates within seconds!

---

## HOW TO ADD YOUR PHOTO

1. Open CMS → **Photo** section
2. Upload your photo → click **Download Photo File**
3. Rename the file to `photo.jpg`
4. Upload it to your GitHub repo at `assets/img/photo.jpg`
5. In `data.js`, update:
   ```javascript
   photo: "assets/img/photo.jpg",
   ```
6. Push/upload to GitHub

---

## FOLDER STRUCTURE REFERENCE

```
your-portfolio/
├── index.html          ← Home / About
├── experience.html     ← Work Experience
├── education.html      ← Education
├── projects.html       ← Projects
├── publications.html   ← Publications & Conferences
├── skills.html         ← Skills & Honours
├── contact.html        ← Contact
├── cms.html            ← Content Management System
├── CNAME               ← Custom domain file (just: redwanislam.com)
└── assets/
    ├── css/
    │   └── style.css
    ├── js/
    │   ├── data.js     ← ALL CONTENT LIVES HERE
    │   └── render.js
    └── img/
        └── photo.jpg   ← Your headshot (add manually)
```

---

## COST BREAKDOWN

| Item             | Cost  |
|------------------|-------|
| GitHub Pages     | FREE  |
| SSL Certificate  | FREE  |
| Domain (already owned) | £0 extra |
| **Total**        | **FREE** |

---

## TROUBLESHOOTING

**Site not loading?**
- Wait up to 48 hours for DNS to propagate
- Check Settings → Pages for any error messages

**Custom domain not working?**
- Make sure the `CNAME` file exists in your repo root
- Verify DNS A records are exactly as above

**CV download not working?**
- Confirm `Redwan_Islam_CV.pdf` is in the `assets/` folder
- Check the path in `data.js` matches exactly

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- GitHub Pages can take 1–3 minutes to rebuild after a push

---

*Guide accurate as of 2025. GitHub Pages is a free static hosting service by GitHub.*
