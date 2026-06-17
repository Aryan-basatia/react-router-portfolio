# 🚀 React Router Portfolio

A modern, single-page portfolio application built with **React** and **React Router**, demonstrating dynamic routing, nested layouts, and form handling in a single-page application architecture.

## ✨ Description

This project is a portfolio website that showcases the power of client-side routing with React Router v7. It features multiple pages, nested routes, a dashboard with layout composition, and form-based navigation. The app is optimized for fast development and production builds using **Vite**.

## 🎯 Features

- **Multi-page Navigation**: Seamless routing between Home, Projects, Contact, and Dashboard pages
- **Dynamic Project Details**: View individual project information using URL parameters (`/projects/:id`)
- **Nested Routes & Layouts**: Dashboard layout with sidebar and nested Profile, Settings, and Activity pages
- **Form Handling**: Contact form with programmatic navigation using `useNavigate` hook
- **Navbar Component**: Global navigation bar across all pages
- **404 Fallback**: Catch-all route for undefined paths
- **Success Page**: Confirmation page after form submission with state passing
- **Fast Development**: Hot Module Replacement (HMR) with Vite

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|-----------|---------|---------|
| React | ^19.2.6 | UI library |
| React Router DOM | ^7.18.0 | Client-side routing |
| React DOM | ^19.2.6 | DOM rendering |
| Vite | ^8.0.12 | Build tool & dev server |
| ESLint | ^10.3.0 | Code linting |
| Vite React Plugin | ^6.0.1 | Vite integration with React |

## 📋 Prerequisites

- **Node.js** (version 14 or higher recommended)
- **npm** or **yarn** package manager

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Aryan-basatia/react-router-portfolio.git
cd react-router-portfolio
```

2. Install dependencies:
```bash
npm install
```

## 🚀 Usage

### Development Server

Start the development server with hot module replacement:
```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or the port shown in your terminal).

### Build for Production

Create an optimized production build:
```bash
npm run build
```

Output files will be generated in the `dist/` directory.

### Preview Production Build

Preview the production build locally:
```bash
npm run preview
```

### Lint Code

Run ESLint to check code quality:
```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   └── Navbar.jsx              # Global navigation component
├── layouts/
│   └── DashboardLayout.jsx     # Dashboard wrapper with sidebar
├── pages/
│   ├── Home.jsx                # Homepage
│   ├── Project.jsx             # Projects listing page
│   ├── ProjectDetail.jsx       # Individual project details
│   ├── Contact.jsx             # Contact form page
│   ├── Profile.jsx             # User profile page (dashboard)
│   ├── Setting.jsx             # Settings page (dashboard)
│   ├── Activity.jsx            # Activity page (dashboard)
│   ├── Success.jsx             # Success confirmation page
│   └── Notfound.jsx            # 404 fallback page
├── App.jsx                     # Main app with route definitions
└── main.jsx                    # Entry point

```

## 🗺️ Route Map

| Path | Component | Description |
|------|-----------|-------------|
| `/` | Home | Homepage |
| `/projects` | Project | Projects listing |
| `/projects/:id` | ProjectDetail | Individual project details |
| `/contact` | Contact | Contact form |
| `/success` | Success | Form submission confirmation |
| `/dashboard` | DashboardLayout > Profile | User dashboard (default) |
| `/dashboard/settings` | DashboardLayout > Setting | Dashboard settings |
| `/dashboard/activity` | DashboardLayout > Activity | User activity |
| `*` | Notfound | 404 fallback page |

## 🎨 Key Components & Concepts

### Navbar Component
Global navigation bar rendered on every page using React Router's `Link` component for client-side navigation.

### Dynamic Routes
- Project detail page uses URL parameters: `/projects/:id`
- Access via `useParams()` hook in components

### Nested Routes & Layouts
The Dashboard uses a layout pattern:
- Parent route: `/dashboard`
- Child routes nested with `<Outlet />` for flexible page composition
- Sidebar layout managed in `DashboardLayout`

### Form Navigation
Contact page demonstrates programmatic navigation:
```javascript
const navigate = useNavigate();
navigate("/success", { state: { name: "Alice" } });
```

### 404 Handling
Catch-all route (`*`) displays a not found page for undefined routes.

## 🧪 Development Workflow

1. **Hot Module Replacement**: Changes to components are reflected instantly without full page reload
2. **ESLint Configuration**: Ensures code quality with React-specific linting rules
3. **Fast Build Times**: Vite provides sub-second HMR and optimized production builds

## 📝 License

This project is licensed under the **MIT License** — feel free to use, modify, and distribute it.

## 👤 Author

Created by [Aryan-basatia](https://github.com/Aryan-basatia)

---

**Happy routing! 🎉** Build amazing single-page applications with React and React Router.
