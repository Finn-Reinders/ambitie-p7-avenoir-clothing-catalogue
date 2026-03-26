# MoSCoW

## Must
- **User uploads:** Users can upload garments (image + metadata) via a modal form; images validated and background-processed before storage.
- **Authentication & accounts:** Users can register, log in, and have a private board tied to their account (only visible to them).
- **Public catalogue:** A public gallery of user-uploaded garments accessible without login.
- **Load garments from DB:** Garments are fetched from Supabase via Next.js API routes and displayed dynamically (server-side rendered for SEO where appropriate).
- **Search & basic filters:** Search by name and filter by category/type (shirt, pants, etc.) and labels (colour, size, fit).
- **Dynamic routing:** Each garment has a dynamic detail page with unique URL (click-through from gallery).
- **SEO & performance basics:** Proper HTML tags, SSR for initial load, lazy-loading of images, avoid unnecessary re-renders.

## Should
- **Image processing:** Client-side TensorFlow background removal before upload; server-side validation of processed images.
- **Optimistic UI & loading states:** Optimistic updates when adding garments, with clear loading and error states.
- **Animations & UX polish:** Framer Motion-based transitions for lists and modals, optimized for performance.

## Could
- **Advanced filters:** filtering (materials, season, custom tags) and saved filter presets.
- **User profiles & sharing:** Optional public user profiles and sharing links for garments.
- **Mobile-first responsive enhancements:** Extend responsive design and breakpoints for mobile (planned after desktop baseline).
- **Admin moderation tools:** Lightweight CMS for moderators to flag/remove content (initially as a simple tool rather than full CMS).
- **Image edit tools:** Simple in-browser cropping/adjustment before background removal.

## Won't
- **Payments / e-commerce:** Selling, cart, or payments.
- **Heavy mobile-first redesign:** Full mobile UX overhaul postponed until desktop experience is stable.
- **Complex admin dashboard:** Full-featured admin system