# Cedartide Stone Website

A modern, responsive website for Cedartide Stone, featuring professional stonework and construction services. Built with Next.js and Tailwind CSS, inspired by the elegant design aesthetic of premium stonework companies, and optimized for Vercel deployment.

## Features

- **Responsive Design**: Mobile-first approach with clean, elegant styling
- **Modern Stack**: Built with Next.js 14, React 18, TypeScript, and Tailwind CSS
- **Vercel Ready**: Optimized for static export and Vercel deployment
- **Professional Aesthetic**: Inspired by natural stone craftsmanship themes
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Design Inspiration

This website features a clean, professional aesthetic inspired by premium stonework companies:
- Minimalist design focused on natural materials and craftsmanship
- Professional typography using serif fonts for elegance
- Stone-inspired color palette (grays, tans, earth tones)
- Emphasis on quality construction and durability
- Portfolio showcase and client-focused contact forms

## Content Structure

- **Homepage**: Company introduction with "Inspired by Nature. Built to Last" messaging
- **Portfolio**: Custom remodels and renovations gallery with project categories
- **Contact**: Professional contact form with 48-hour estimate promise

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Building for Production

```bash
npm run build
```

This creates an optimized static export in the `out` directory, ready for Vercel deployment.

## Deployment to Vercel

1. Push your code to a GitHub repository
2. Connect your repository to Vercel
3. Vercel will automatically detect the Next.js configuration and deploy

Alternatively, use the Vercel CLI:
```bash
npx vercel
```

## Customization

### Content
- Edit `app/page.tsx` for homepage content
- Modify navigation items in `components/Navigation.tsx`
- Update company information in the footer

### Styling
- Colors and typography are defined in `tailwind.config.js`
- Global styles in `app/globals.css`
- Component-specific styles use Tailwind utility classes

### Pages
Add new pages by creating files in the `app` directory following Next.js 13+ app router conventions.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Homepage
├── components/
│   └── Navigation.tsx       # Navigation component
├── public/                  # Static assets
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── package.json             # Dependencies and scripts
```

## Technologies Used

- **Next.js 14**: React framework with app router
- **React 18**: UI library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## License

This project is for educational and demonstration purposes.
