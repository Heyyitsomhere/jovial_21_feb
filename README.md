# Jovial Water Technologies - Website

A professional, modern React website for Jovial Water Technologies Pvt. Ltd., a leading provider of water and wastewater treatment solutions.

## Features

- **Multi-page React application** with React Router
- **Responsive design** for mobile, tablet, and desktop
- **Fixed navbar** with scroll effect (changes appearance when scrolling)
- **Mobile hamburger menu** for navigation on small screens
- **Clean, professional design** suitable for B2B industrial company
- **Contact form** with client-side validation
- **Multiple solution pages** (STP, ETP, WTP, RO)

## Tech Stack

- React 19
- Vite (build tool)
- React Router DOM (routing)
- Plain CSS (no Tailwind or CSS frameworks)
- Google Fonts (Roboto)

## Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx      # Navigation bar with scroll effect
│   ├── Navbar.css
│   ├── Footer.jsx      # Footer component
│   └── Footer.css
├── pages/              # Page components
│   ├── Home.jsx        # Home page
│   ├── Home.css
│   ├── About.jsx       # About page
│   ├── About.css
│   ├── Solutions.jsx   # Solutions overview
│   ├── Solutions.css
│   ├── SolutionPage.jsx  # Generic solution page template
│   ├── SolutionPage.css
│   ├── STP.jsx         # Sewage Treatment Plant page
│   ├── ETP.jsx         # Effluent Treatment Plant page
│   ├── WTP.jsx         # Water Treatment Plant page
│   ├── RO.jsx          # Reverse Osmosis page
│   ├── Projects.jsx    # Projects gallery page
│   ├── Projects.css
│   ├── Contact.jsx     # Contact page with form
│   └── Contact.css
├── styles/             # Shared styles (if needed)
├── App.jsx             # Main app component with routes
├── App.css
├── main.jsx            # Entry point
└── index.css           # Global styles
```

## How to Run

### Prerequisites

- Node.js (v16 or higher)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
   ```bash
   cd jovial_water
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the development server:

```bash
npm run dev
```

The website will be available at `http://localhost:5173` (or the port shown in the terminal).

### Build for Production

Create a production build:

```bash
npm run build
```

The built files will be in the `dist/` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

## Pages

- **Home** (`/`) - Hero section, services overview, why choose us, industries, projects preview
- **About** (`/about`) - Company overview, vision, mission, values
- **Solutions** (`/solutions`) - Overview of all solutions
- **STP** (`/solutions/stp`) - Sewage Treatment Plant details
- **ETP** (`/solutions/etp`) - Effluent Treatment Plant details
- **WTP** (`/solutions/wtp`) - Water Treatment Plant details
- **RO** (`/solutions/ro`) - Reverse Osmosis details
- **Projects** (`/projects`) - Project gallery and statistics
- **Contact** (`/contact`) - Contact information and inquiry form

## Key Features Explained

### Navbar Scroll Effect

The navbar starts transparent and becomes solid with a shadow when the user scrolls past 80px. This is implemented using:
- `useState` to track scroll state
- `useEffect` to listen to scroll events
- Conditional CSS classes based on scroll position

### Mobile Menu

On screens smaller than 768px, the desktop menu is hidden and a hamburger icon appears. Clicking it toggles a vertical mobile menu.

### Contact Form Validation

The contact form includes client-side validation:
- Name: Required
- Email: Required, must be valid email format
- Phone: Required, must be 10 digits
- Message: Required, minimum 10 characters

Form data is currently logged to the console on submission. In a production environment, this would be sent to a backend API.

## Styling

- **Color Palette**: Blue/gray theme suitable for industrial B2B company
- **Typography**: Roboto font from Google Fonts
- **Responsive**: Mobile-first approach with breakpoints at 768px and 480px
- **No animations**: Simple hover effects and transitions only

## Browser Support

Modern browsers (Chrome, Firefox, Safari, Edge) with ES6+ support.

## License

Copyright © 2024 Jovial Water Technologies Pvt. Ltd.
