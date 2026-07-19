# TechNova Client

A modern web application frontend for **TechNova** — a platform for browsing, managing, and purchasing tech products. Built as the client-side of the TechNova project, this app delivers a polished user experience with authentication, product management, a shopping flow, and admin dashboard capabilities.

## Overview

TechNova is a React-based single-page application (SPA) that serves as the customer-facing interface for a tech product store. It handles everything from product discovery and detailed views to a checkout flow, user authentication, and an admin dashboard for managing the product catalog (add/update products) backed by Firebase and Cloudinary for media storage.

## Main Technologies

- **React 19** — UI library for building the component-based interface
- **Vite 7** — Fast build tool and development server with HMR
- **React Router 7** — Client-side routing and navigation
- **Tailwind CSS 4** (with `@tailwindcss/vite`) — Utility-first styling
- **DaisyUI 5** — Component library built on Tailwind CSS
- **Headless UI** — Accessible, unstyled UI primitives
- **Firebase 12** — Authentication and backend services
- **Cloudinary** — Image and media upload/management
- **Axios** — HTTP client for API requests
- **Font Awesome & React Icons** — Icon libraries
- **SweetAlert2** — Beautiful, responsive alert/dialogs

## Key Features

- **User Authentication** — Sign up, login, and protected routes via Firebase Auth and a custom `AuthProvider`.
- **Product Catalog** — Browse all products, view detailed product pages, and search/filter.
- **Product Management** — Admin dashboard to add, update, and manage products.
- **Shopping & Checkout** — Add-to-cart style flow with a dedicated checkout page.
- **Contact Page** — Get in touch form/section for customer communication.
- **Developer Page** — Information about the developers/team behind TechNova.
- **Image Uploads** — Product images handled via Cloudinary integration.
- **Responsive UI** — Fully responsive design using Tailwind CSS, DaisyUI, and Headless UI.
- **Loading States** — Dedicated loading components for smooth UX.

## Dependencies & Packages

### Runtime Dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `react` | ^19.2.0 | UI library |
| `react-dom` | ^19.2.0 | React DOM renderer |
| `react-router` | ^7.12.0 | Routing |
| `axios` | ^1.13.2 | HTTP client |
| `firebase` | ^12.8.0 | Auth & backend |
| `cloudinary` | ^2.9.0 | Media storage |
| `tailwindcss` | ^4.1.18 | Styling |
| `@tailwindcss/vite` | ^4.1.18 | Tailwind Vite plugin |
| `daisyui` | ^5.5.14 | UI components |
| `@headlessui/react` | ^2.2.9 | Accessible primitives |
| `@fortawesome/fontawesome-svg-core` | ^7.1.0 | Icon engine |
| `@fortawesome/free-brands-svg-icons` | ^7.1.0 | Brand icons |
| `@fortawesome/free-regular-svg-icons` | ^7.1.0 | Regular icons |
| `@fortawesome/free-solid-svg-icons` | ^7.1.0 | Solid icons |
| `@fortawesome/react-fontawesome` | ^3.1.1 | Font Awesome React component |
| `react-icons` | ^5.5.0 | Icon library |
| `sweetalert2` | ^11.26.17 | Alert/dialogs |

### Development Dependencies

| Package | Version | Purpose |
| --- | --- | --- |
| `vite` | ^7.2.4 | Build tool / dev server |
| `@vitejs/plugin-react` | ^5.1.1 | React Vite plugin |
| `eslint` | ^9.39.1 | Linting |
| `@eslint/js` | ^9.39.1 | ESLint config |
| `eslint-plugin-react-hooks` | ^7.0.1 | React hooks lint rules |
| `eslint-plugin-react-refresh` | ^0.4.24 | Fast Refresh lint rules |
| `globals` | ^16.5.0 | Global variable definitions |
| `@types/react` | ^19.2.5 | React type definitions |
| `@types/react-dom` | ^19.2.3 | React DOM type definitions |

## Local Setup & Run Guide

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- npm (comes with Node.js)
- A Firebase project (for authentication/backend)
- A Cloudinary account (for media uploads)

### Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/MishkatMukit/technova-client.git
   cd technova-client
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment variables**

   Create a `.env` (or `.env.local`) file in the project root and add your Firebase and Cloudinary credentials. For example:

   ```env
   # Firebase
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id

   # Cloudinary
   VITE_CLOUDINARY_CLOUD_NAME=your_cloud_name
   VITE_CLOUDINARY_UPLOAD_PRESET=your_upload_preset
   ```

   > Note: Update `src/Firebase/firebase.init.js` and Cloudinary config to read from these variables if not already wired up.

4. **Run the development server**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173` (Vite's default port).

5. **Build for production**
   ```bash
   npm run build
   ```

6. **Preview the production build**
   ```bash
   npm run preview
   ```

7. **Lint the codebase**
   ```bash
   npm run lint
   ```

## Relevant Links

- **GitHub Repository:** https://github.com/MishkatMukit/technova-client
- **Live Demo:** _Coming soon — add the deployed link here (e.g., Firebase Hosting / Netlify / Vercel)_
- **API Documentation:** _To be added (if a separate backend/API exists)_
- **Design Files:** _To be added (e.g., Figma link)_

> Feel free to replace the placeholder links above with the actual deployment, API docs, and design resources once available.
