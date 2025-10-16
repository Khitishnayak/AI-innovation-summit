# Project Setup Instructions

## Project Type: AI Innovation Summit 2025 - Event Website

### ✅ Completed Steps:
- [x] Create copilot-instructions.md file
- [x] Get project setup information
- [x] Scaffold Next.js project with TypeScript
- [x] Install dependencies (Tailwind CSS, GSAP, React Icons)
- [x] Create project structure (components, sections, app router)
- [x] Configure styling and animations (Tailwind + GSAP)
- [x] Build base components (Navbar, Footer, Hero, Stats)
- [x] Add event-specific sections (Features, Speakers, Timeline, Tracks, FAQ)
- [x] Implement GSAP ScrollTrigger animations throughout
- [x] Update all content with event information
- [x] Test and compile (Development server running successfully)

### 🎯 Event Information:
- **Event**: AI Innovation Summit & The Great LPU's Hackathon 2025
- **Theme**: Empowering the Green Revolution through AI
- **Duration**: 27th October - 11th November 2025
- **Prize**: ₹45 Lakhs Seed Funding
- **Organizer**: Student Career Committee, SCSE, LPU

### 🚀 Technologies:
- Next.js 15.5.5 (App Router with Turbopack)
- TypeScript 5.3.0
- Tailwind CSS 3.4.0
- **GSAP 3.12.5** with ScrollTrigger plugin
- React Icons 5.0.0
- PostCSS & Autoprefixer
- ESLint with Next.js config

### 📦 Project Structure:
```
src/
├── app/
│   ├── layout.tsx      # Root layout with event metadata
│   ├── page.tsx        # Home page with all sections
│   └── globals.css     # Global styles with Tailwind + custom animations
├── components/
│   ├── Navbar.tsx      # Responsive navigation
│   ├── Footer.tsx      # Footer with event info
│   └── sections/
│       ├── Hero.tsx        # Hero with event announcement
│       ├── Stats.tsx       # Event highlights
│       ├── Features.tsx    # Rewards & Recognition
│       ├── Speakers.tsx    # Distinguished guests
│       ├── Timeline.tsx    # 14-day event schedule
│       ├── Tracks.tsx      # 7 Innovation tracks
│       └── FAQ.tsx         # Event FAQs
```

### 🎨 Event Sections:
- **Hero**: Main announcement with ₹45L funding highlight
- **Stats**: Event highlights (Funding, Duration, Tracks)
- **Features**: Rewards & Recognition details
- **Speakers**: Profiles of Mr. Vivek Sridhar & Mr. Saurav Mittal
- **Timeline**: Complete 14-day schedule with evaluations
- **Tracks**: 7 Innovation problem statements
- **FAQ**: Event-specific questions and answers

### � GSAP Animations Implemented:
- **ScrollTrigger**: Scroll-based animations on all sections
- **Counter Animations**: Animated statistics counting up
- **Parallax Effects**: Background elements moving at different speeds
- **Stagger Animations**: Sequential reveal of cards and items
- **Hover Effects**: Interactive scale and movement on hover
- **Mobile Menu**: Smooth open/close animations
- **Page Load**: Choreographed entrance animations

### 🎯 Next Steps:
1. Add your content and resources
2. Replace placeholder images in Gallery section
3. Customize colors and branding
4. Add team member profiles
5. Deploy to Vercel

### 🔧 Development Commands:
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### 🌐 Local Development:
- Server: http://localhost:3000
- Hot reload enabled with Turbopack
- GSAP ScrollTrigger enabled for smooth animations
