# Cedartide Stone - Quick Start Guide

> **Get up and running in 5 minutes**

---

## 🚀 For Developers

### Clone & Install
```bash
git clone https://github.com/bettercallzaal/cedartide.git
cd cedartide
npm install
```

### Run Development Server
```bash
npm run dev
# Open http://localhost:3000
```

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
```bash
npx vercel
```

---

## 📸 For Kevin (Content Updates)

### Adding Project Photos

**Step 1:** Prepare photos
- High quality JPG/PNG
- At least 1920px wide
- Compress at [tinypng.com](https://tinypng.com)

**Step 2:** Upload to correct folder
- Fireplaces → `public/images/gallery/fireplaces/`
- Interiors → `public/images/gallery/interiors/`
- Landscape → `public/images/gallery/landscape/`
- etc.

**Step 3:** Update gallery page
Open `app/gallery/[category]/page.tsx` and change:
```typescript
image: "/images/placeholder.svg"
// to
image: "/images/gallery/fireplaces/your-photo.jpg"
```

### Updating Contact Info

**Search and replace in all files:**
- Phone: `(860) 670-7250`
- Email: `k.jepeal@gmail.com`

**Files to check:**
- `app/page.tsx`
- `app/contact/page.tsx`
- All gallery pages

---

## 📋 Production Checklist

### Before Launch (Critical)
- [ ] Add 12-18 project photos
- [ ] Verify license/insurance numbers
- [ ] Confirm service area details
- [ ] Purchase domain name
- [ ] Set up Google Business Profile

### Nice to Have
- [ ] Add 3-5 more testimonials
- [ ] Professional headshot
- [ ] Detailed service descriptions
- [ ] Case studies

---

## 📚 Documentation

**Full Details:** See [PROJECT_OVERVIEW.md](PROJECT_OVERVIEW.md)  
**Content Updates:** See [CONTENT_GUIDE.md](CONTENT_GUIDE.md)  
**Deployment:** See [DEPLOYMENT_GUIDE.md](DEPLOYMENT_GUIDE.md)  
**Main Docs:** See [README.md](README.md)

---

## 🔗 Important Links

**Live Site:** [cedartide.vercel.app](https://cedartide.vercel.app)  
**GitHub:** [github.com/bettercallzaal/cedartide](https://github.com/bettercallzaal/cedartide)  
**Original Site:** [kjepeal.wixsite.com/cedartide](https://kjepeal.wixsite.com/cedartide)

---

## 💡 Quick Tips

**Need to update text?**
- Homepage: `app/page.tsx`
- Contact: `app/contact/page.tsx`
- Portfolio: `app/portfolio/page.tsx`

**Need to add photos?**
- Upload to `public/images/gallery/[category]/`
- Update gallery page array
- Replace placeholder paths

**Need help?**
- Check CONTENT_GUIDE.md
- Check PROJECT_OVERVIEW.md
- Contact developer

---

## ✅ Current Status

**Development:** ✅ 100% Complete  
**Content:** 🚧 40% Complete (needs photos)  
**Deployment:** ✅ 100% Complete  
**Documentation:** ✅ 100% Complete

**Ready for:** Content population and launch!

---

*For complete project details, see PROJECT_OVERVIEW.md*
