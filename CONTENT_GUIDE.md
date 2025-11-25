# Content Update Guide for Cedartide Stone Website

> Quick reference for Kevin to update website content without technical knowledge

---

## 📸 Adding Project Photos

### Step 1: Prepare Your Photos
1. **Format:** Save as JPG or PNG
2. **Size:** At least 1920px wide (high quality)
3. **File Names:** Use descriptive names (e.g., `fireplace-project-1.jpg`)
4. **Compress:** Use a tool like [TinyPNG](https://tinypng.com/) to reduce file size

### Step 2: Organize by Category
Place photos in the appropriate folder:
- Fireplaces: `public/images/gallery/fireplaces/`
- Interiors: `public/images/gallery/interiors/`
- Landscape: `public/images/gallery/landscape/`
- Stone Details: `public/images/gallery/stone-details/`
- Stone Houses: `public/images/gallery/stone-houses/`
- Commercial: `public/images/gallery/commercial/`

### Step 3: Update Gallery Page
Open the corresponding gallery file (e.g., `app/gallery/fireplaces/page.tsx`) and update the projects array:

```typescript
// Change this:
image: "/images/placeholder.svg"

// To this:
image: "/images/gallery/fireplaces/your-photo-name.jpg"
```

---

## ✍️ Updating Text Content

### Homepage (`app/page.tsx`)

**Hero Section (Lines 12-20)**
```typescript
<h1>At Cedartide Stone, we're inspired by nature.</h1>
<p>Your company description here...</p>
```

**Trust Signals (Lines 45-59)**
Update the statistics:
- Years of Experience
- Licensed & Insured status
- Projects Completed

**Testimonials (Lines 68-85)**
Add or modify client quotes and attributions.

### Contact Page (`app/contact/page.tsx`)

**Business Hours (Lines 54-58)**
```typescript
<p>Mon - Sat: 8AM - 6PM</p>
<p>Sun: Closed</p>
```

**Service Area (Lines 62-66)**
Update the service area description.

---

## 📝 Adding Testimonials

### Format
```typescript
<blockquote>
  <p className="text-lg italic">
    "Your client's testimonial quote here..."
  </p>
  <footer className="text-stone-600 mt-4">
    <cite className="not-italic font-medium">Client Name</cite>
    <div className="text-sm">Project Type, Location</div>
  </footer>
</blockquote>
```

### Location
Add to `app/page.tsx` in the Testimonials Section (around line 65).

---

## 🎯 Updating Service Descriptions

### Our Expertise Page (`app/expertise/page.tsx`)

Update service descriptions in the grid sections (lines 33-90):
- Stone Construction Mastery
- Landscape Integration
- Traditional Techniques
- Modern Applications

---

## 📞 Updating Contact Information

Contact info appears in multiple places. Search and replace:

**Email:** `k.jepeal@gmail.com`
**Phone:** `(860) 670-7250`

Files to update:
- `app/page.tsx` (footer)
- `app/contact/page.tsx` (contact section)
- `app/portfolio/page.tsx` (footer)
- All gallery pages (footers)

---

## 🚀 Publishing Changes

### If You Have Git/GitHub Access:
```bash
git add .
git commit -m "Update project photos and content"
git push
```

### If You Need Help:
Send the following to your developer:
1. New photos (via Google Drive, Dropbox, etc.)
2. Text changes (in a document)
3. Which pages need updates

---

## 🆘 Common Tasks

### Change Business Hours
**File:** `app/contact/page.tsx`  
**Lines:** 54-58

### Add New Gallery Category
1. Create folder: `public/images/gallery/new-category/`
2. Create page: `app/gallery/new-category/page.tsx`
3. Copy structure from existing gallery page
4. Add link in `app/portfolio/page.tsx`

### Update "40+ Years Experience"
**File:** `app/page.tsx`  
**Line:** 46 (Trust Signals section)

### Change Phone Number
**Search:** `(860) 670-7250`  
**Replace:** Your new number  
**Files:** All footer sections

---

## 📋 Quick Reference

### File Locations
- **Homepage:** `app/page.tsx`
- **Portfolio:** `app/portfolio/page.tsx`
- **Contact:** `app/contact/page.tsx`
- **Our Story:** `app/story/page.tsx`
- **Our Expertise:** `app/expertise/page.tsx`
- **Galleries:** `app/gallery/[category]/page.tsx`

### Image Locations
- **Project Photos:** `public/images/gallery/[category]/`
- **Placeholders:** `public/images/`

### Important Notes
- Always keep backup of original files
- Test changes locally before publishing
- Maintain consistent image sizes
- Keep file names descriptive and lowercase

---

## 💡 Tips for Best Results

1. **Photos:** Use high-quality, well-lit images
2. **Testimonials:** Get written permission from clients
3. **Descriptions:** Keep text clear and concise
4. **Updates:** Make changes in batches, not one at a time
5. **Testing:** Preview changes before going live

---

## 📞 Need Help?

If you need assistance updating content:
1. Document what you want to change
2. Gather all new photos/text
3. Contact your developer
4. They can make updates quickly

**Remember:** The website is built to be easily updatable. Don't hesitate to make improvements!
