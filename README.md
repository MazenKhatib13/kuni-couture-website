# Kuni Couture Website

A sophisticated couture fashion website built with React, TypeScript, and Tailwind CSS. Inspired by high-end fashion websites like tamararalph.com, this site showcases the 2022 Kuni Couture collection with a focus on empowerment and self-expression.

## 🌟 Features

### Core Functionality

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Sticky Navigation**: Smooth scrolling navigation with active state indicators
- **Collection Gallery**: Grid layout showcasing couture gowns with hover effects
- **Contact Form**: Fully functional contact form with client-side validation
- **SEO Optimized**: Complete meta tags, sitemap, and robots.txt

### Brand Values

- **Love**: Self-love and acceptance at the heart of the brand
- **Strength**: Celebrating inner strength and resilience
- **Empowerment**: Designs that inspire confidence and authenticity

## 🛠 Tech Stack

- **Framework**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom brand colors and typography
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: React Router DOM for seamless navigation
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Vercel with automatic CI/CD

## 🎨 Design System

### Colors

- **Primary**: #006167 (Teal), #025157 (Dark Teal)
- **Accent**: #998543 (Gold)
- **Typography**: Malayalam MN (Headings), Open Sans (Body)

### Components

- Responsive navigation with mobile menu
- Hero sections with large typography
- Product grid layouts
- Contact forms with validation
- Footer with newsletter signup

## 🚀 Getting Started

### Prerequisites

- Node.js 20.12.2 or higher
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd kuni-couture-website
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to `http://localhost:5173`

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.tsx      # Navigation header
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Home.tsx        # Homepage with hero and featured content
│   ├── Collection.tsx   # Collection gallery
│   ├── About.tsx       # Brand story and values
│   └── Contact.tsx     # Contact form and info
├── types/              # TypeScript type definitions
├── assets/             # Static assets
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles and Tailwind imports
```

## 🌐 Pages

### Home (`/`)

- Hero section with brand tagline
- Featured collection teaser (3 signature pieces)
- Brand values preview
- Call-to-action sections

### Collection (`/collection`)

- Grid layout of all gowns (12 pieces)
- Hover effects and interaction states
- Individual piece information
- Inquiry CTAs

### About (`/about`)

- Brand story and philosophy
- Core values (Love, Strength, Empowerment)
- Founder biography
- Craftsmanship details

### Contact (`/contact`)

- Contact form with validation
- Contact information
- FAQ section
- Social media links

## 🎯 SEO & Performance

### SEO Features

- Unique page titles and meta descriptions
- Open Graph tags for social sharing
- Sitemap.xml for search engines
- Robots.txt for crawl instructions
- Semantic HTML structure

### Performance Optimizations

- Lazy loading for images
- Optimized bundle size with Vite
- Responsive image loading
- Minimal JavaScript footprint

## 🚀 Deployment

### Vercel Deployment

1. **Install Vercel CLI**

   ```bash
   npm install -g vercel
   ```

2. **Deploy to Vercel**

   ```bash
   vercel
   ```

3. **Configure Domain** (Optional)
   - Add custom domain in Vercel dashboard
   - Update sitemap URLs accordingly

### Manual Deployment

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Deploy `dist` folder** to your hosting provider

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```
VITE_GA_TRACKING_ID=your-ga-tracking-id
VITE_CONTACT_EMAIL=info@kunicouture.com
```

### Customization

- Update brand colors in `tailwind.config.js`
- Modify typography in the config file
- Replace placeholder images with actual photography
- Update contact information throughout the site

## 🎨 Brand Guidelines

### Typography

- **Headings**: Malayalam MN Bold (fallback: Montserrat Bold)
- **Body Text**: Malayalam MN Regular (fallback: Open Sans)

### Imagery

- High-resolution fashion photography
- Consistent aspect ratios (3:4 for portraits)
- Professional lighting and styling
- Brand-consistent color grading

## 📞 Support

For questions about the codebase or deployment:

- Create an issue in the repository
- Contact the development team

## 📄 License

This project is proprietary and confidential. All rights reserved by Kuni Couture.

---

**Built with ❤️ for Kuni Couture - Love Yourself, Unconditionally**
