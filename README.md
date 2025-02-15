# Drawzy Landing Page

## Overview
Drawzy is an AI-powered drawing and guessing game that leverages advanced sketch recognition and reinforcement learning to provide an interactive experience. This repository contains the landing page for Drawzy, built using **Next.js**. The landing page is designed to captivate users with engaging visuals, a compelling tagline, and a clear call-to-action that guides users into the game.

## Implemented Features

- **Engaging Visuals:**
  - A full-screen background image that sets the artistic tone and immerses users right from the start.
  
- **Interactive Tagline:**
  - A prominent message that introduces Drawzy and explains its innovative, AI-powered features.

- **Call-to-Action Button:**
  - A clearly visible button ("Get Started") that navigates users to the main application (authentication or game screen) using Next.js routing.

- **Responsive Design:**
  - Built with Next.js and React, ensuring a seamless and adaptive experience across various devices and screen sizes.

- **SEO & Performance:**
  - Next.js’s built-in SEO capabilities and fast server-side rendering ensure that the landing page is both discoverable and performant.

## Technology Stack

- **Next.js** – A React framework for production, with built-in support for server-side rendering, static site generation, and routing.
- **React** – For building dynamic UI components.
- **Tailwind Modules / Styled Components** – For modular and maintainable styles (depending on your chosen styling approach).
- **Node.js** – Underlying runtime for Next.js.

## Setup & Installation

### Prerequisites

- **Node.js** (v14 or above)
- **npm** or **Yarn**

### Steps

1. **Clone the Repository:**
   ```sh
   git clone https://github.com/yourusername/drawzy-landing.git
   cd drawzy-landing
   ```

2. **Install Dependencies:**
   ```sh
   npm install
   ```
   or if using Yarn:
   ```sh
   yarn
   ```

3. **Configure Environment Variables:**
   - Create a `.env.local` file in the root directory.
   - Add any required environment variables (for example, API endpoints or analytics keys) as needed:
     ```env
     NEXT_PUBLIC_API_URL=https://your-api-url.com
     ```

4. **Run the Development Server:**
   ```sh
   npm run dev
   ```
   or:
   ```sh
   yarn dev
   ```
   - Open [http://localhost:3000](http://localhost:3000) in your browser to view the landing page.

5. **Build for Production:**
   ```sh
   npm run build
   npm start
   ```
   or with Yarn:
   ```sh
   yarn build
   yarn start
   ```

## File Structure

```
/drawzy-landing
├── public
│   └── images
│       └── background.jpg         // Full-screen background image
├── src
│   ├── components
│   │   └── Header.js              // Contains the interactive tagline and CTA button
│   ├── pages
│   │   ├── index.js               // Main landing page
│   └── styles
│       └── Home.module.css        // Landing page styles (using CSS Modules)
├── .env.local                     // Environment variables (if any)
├── package.json
└── README.md
```

## Future Enhancements
- **Finish the landing page:** Finish the landing page.
- **Enhanced Animations:** Introduce smooth transitions and animated effects to further engage users.
- **Localization:** Support multiple languages to cater to a global audience.
- **Dynamic Content:** Implement seasonal or user-specific themes for a more personalized experience.
- **Analytics Integration:** Track user interactions and optimize the landing page based on user behavior.

---

Happy Coding!
