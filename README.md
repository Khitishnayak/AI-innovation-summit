# AI Innovation Summit 2025 - The Great LPU's Hackathon

A modern event website for **AI Innovation Summit 2025** and **The Great LPU's Hackathon**, featuring smooth GSAP animations, responsive design, and comprehensive event information. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## 🎯 Event Overview

**Theme**: Empowering the Green Revolution through AI

**Duration**: 27th October - 11th November 2025 (14-day hackathon)

**Organizer**: Student Career Committee, School of Computer Science and Engineering, LPU

**Prize**: ₹45 Lakhs Seed Funding + Edu-Revolution Benefits + Startup Incubation

## 🎤 Distinguished Guests

- **Mr. Vivek Sridhar** - CTO, Microsoft for Startups | AI Advisor, Investor & Founder
- **Mr. Saurav Mittal** - CEO, SMG Electric Scooters Ltd. | Investor & Entrepreneur

## 🚀 Features

- ⚡ **Next.js 14+** with App Router for optimal performance
- 🎨 **Tailwind CSS** for utility-first styling
- ✨ **GSAP with ScrollTrigger** for professional animations
- 📱 **Fully Responsive** design for all devices
- 🎯 **TypeScript** for type safety
- 🌙 **Modern UI/UX** with gradient backgrounds and glassmorphism
- 🔥 **Turbopack** enabled for faster development
- 🎭 **Interactive animations** on scroll and hover

## 📦 Technologies Used

- **Framework**: Next.js 15.0.0
- **Language**: TypeScript 5.3.0
- **Styling**: Tailwind CSS 3.4.0
- **Animations**: GSAP 3.12.5 (with ScrollTrigger plugin)
- **Icons**: React Icons 5.0.0
- **Linting**: ESLint with Next.js config

## 🎨 GSAP Animations

This project uses GSAP (GreenSock Animation Platform) for all animations:

- **ScrollTrigger**: Animations triggered on scroll
- **Timeline Animations**: Choreographed entrance animations
- **Parallax Effects**: Background elements with depth
- **Counter Animations**: Animated number counting
- **Stagger Effects**: Sequential card reveals
- **Hover Interactions**: Smooth scale and movement effects
- **Mobile Menu**: Fluid open/close animations

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun

### Installation

1. Clone or use this repository
2. Install dependencies:

```bash
npm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
├── src/
│   ├── app/                  # Next.js App Router
│   │   ├── layout.tsx        # Root layout
│   │   ├── page.tsx          # Home page
│   │   └── globals.css       # Global styles + animations
│   ├── components/           # Reusable components
│   │   ├── Navbar.tsx        # Navigation with GSAP
│   │   ├── Footer.tsx        # Footer component
│   │   └── sections/         # Page sections
│   │       ├── Hero.tsx      # Hero with parallax
│   │       ├── Stats.tsx     # Animated counters
│   │       ├── Features.tsx  # Feature cards
│   │       ├── Gallery.tsx   # Image gallery
│   │       └── FAQ.tsx       # Accordion FAQ
├── public/                   # Static assets
├── .github/                  # GitHub configuration
├── tailwind.config.ts        # Tailwind configuration
├── tsconfig.json            # TypeScript configuration
├── next.config.ts           # Next.js configuration
└── package.json             # Project dependencies
```

## 🎨 Sections Included

1. **Hero** - Animated landing with gradient backgrounds and parallax
2. **Features** - "Why Choose Us" cards with stagger animations
3. **Stats** - Animated counter statistics with ScrollTrigger
4. **Gallery** - Image gallery with creative reveal animations
5. **FAQ** - Smooth accordion with expand/collapse animations

## 🎨 Customization

### Adding Your Content

1. **Update branding**: Edit logo and brand name in `src/components/Navbar.tsx`
2. **Modify hero section**: Update content in `src/components/sections/Hero.tsx`
3. **Change stats**: Edit statistics in `src/components/sections/Stats.tsx`
4. **Update features**: Modify feature cards in `src/components/sections/Features.tsx`
5. **Add images**: Replace placeholders in `src/components/sections/Gallery.tsx`
6. **Update FAQ**: Edit questions in `src/components/sections/FAQ.tsx`
7. **Update footer**: Modify links and information in `src/components/Footer.tsx`

### Adding New Sections

Create new section components in `src/components/sections/` and import them in `src/app/page.tsx`.

### Styling

The project uses:
- **Tailwind CSS** with custom animations defined in `tailwind.config.ts`
- **Custom CSS classes** in `globals.css` (gradient-text, glass-effect, etc.)
- **GSAP** for JavaScript-based animations

## 🎯 Animation Tips

To add GSAP animations to new components:

```typescript
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: "top 80%",
      },
      y: 100,
      opacity: 0,
      duration: 1,
    });
  });
  
  return () => ctx.revert();
}, []);
```

## 📝 Next Steps

1. ✅ Add your actual content and resources
2. ✅ Replace placeholder images in Gallery
3. ✅ Customize colors and branding
4. ⬜ Add team member profiles section
5. ⬜ Create a contact form
6. ⬜ Set up deployment (Vercel recommended)

## 🚀 Deployment

The easiest way to deploy is using [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to customize this template for your needs!

---

Built with ❤️ using Next.js, GSAP, and modern web technologies.
