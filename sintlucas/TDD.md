# Technical Design Document - Avenoir Clothing Catalogue

## Tools/Versions
* Framework: Next.js
* Styling: Tailwind
* Animations: Framer-motion
* API: Next.js API routes
* Database: Supabase
* Authentication: NextAuth.js, Supabase Auth
* Deployment: Vercel
* Detection and bg removal: TensorFlow

## Programming techniques
* Functional Requirement: Loading garments
    * Garments will be fetched from Supabase using async API calls in Next.js API routes. Data will be loaded on the server side for SEO and performance, and hydrated on the client side for interactivity.
    * Error handling will be implemented to show fallback UI if the fetch fails.
    * Loading states will be managed using React state.

* Functional Requirement: Uploading new garments
    * Users can upload images and garment data via a modal form (see `UploadModal.jsx`).
    * Images are processed with TensorFlow for background removal before upload.
    * Data is validated on the client and server side before being stored in Supabase.
    * Optimistic UI updates will be used for a responsive experience.

* Functional Requirement: Authentication
    * NextAuth.js and Supabase Auth will be used for user authentication.
    * Protected routes and UI elements will be conditionally rendered based on authentication state.

* Functional Requirement: Animations
    * Framer-motion will be used for smooth transitions
    * Animations will be optimized for performance using layout animations and lazy loading.

* Functional Requirement: Responsive design
    * Tailwind CSS utility classes will ensure the UI is responsive across devices.
    * Custom breakpoints will be used for fine-tuned control.

* Classes/Modules:
    * `GarmentSection.jsx`: Displays a list of garments, handles section transitions.
    * `Garment.jsx`: Represents a single garment, handles image display and animation.
    * `UploadModal.jsx`: Handles garment upload form, validation, and submission.
    * `anim.js`: Contains animation variants and helpers for Framer-motion.
    * `garmentsData.js`: Handles data fetching and transformation from Supabase.

* External References:
    * Supabase: Table structure includes garments (id, name, image_url, description, category, created_at, user_id).
    * Next.js API routes: `/api/garments` for CRUD operations.
    * TensorFlow.js: Used for client-side image background removal.

* Optimization Strategies:
    * Use of server-side rendering (SSR) for initial garment load.
    * Incremental Static Regeneration (ISR) for catalogue updates.
    * Debounced search/filter input to reduce API calls.
    * Lazy loading images and components for faster initial load.
    * Caching garment data on the client for quick navigation.

* Special Techniques:
    * Use of React Context for global state (e.g., user session, garment filters).
    * Custom hooks for data fetching and authentication logic.
    * Error boundaries for robust error handling.
    * Accessibility best practices for forms and navigation.

* Examples:
    * Naming a functional requirement and explaining how it will be created in code.
    * Listing the classes you will need and what variables and functions they will have.
    * Detailing special techniques you will use like classes that use inheritance, state machines, the use of interfaces, etc.
    * External things you will reference like API's, databases and their stucture or packages that you will use.
    * Any optimization strategies you will use.