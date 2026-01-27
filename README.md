# 📦 ShipVyom - Shipment Status Dashboard

A modern, responsive React application for tracking logistics shipments in real-time. This frontend-only dashboard demonstrates best practices in React component design, state management, and UI/UX with a professional glass-morphism design.

## 🎯 Project Overview

ShipVyom is a fully functional web application that displays the status of logistics shipments with real-time filtering, sorting, and expandable details. It features a sleek dark theme with smooth animations and responsive design.

### Key Features

- ✅ **Real-time Shipment Tracking** - View live status updates for multiple shipments
- 🎨 **Status-Based Visual Indicators** - Color-coded gradients and emoji indicators for quick status recognition
- 🔍 **Advanced Filtering** - Filter shipments by delivery status
- 📊 **Smart Sorting** - Sort by estimated delivery date, status, or tracking number
- ⚡ **Loading States** - Professional loading animation while fetching data
- ⚠️ **Error Handling** - Graceful error messages with retry functionality
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Interactive Cards** - Expandable shipment details with smooth animations
- 🌌 **Premium Styling** - Glass-morphism effects with animated background
- 🌐 **Mock API Integration** - Simulated API with realistic delays (500-2000ms) and 10% failure rate

## 🧱 Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **React.js** | UI Framework & Hooks | 19.2.0 |
| **Vite** | Build Tool & Dev Server | 7.2.4 |
| **Tailwind CSS** | Utility-first CSS Framework | 3.3.0 |
| **PostCSS** | CSS Processing Pipeline | 8.4.31 |
| **Autoprefixer** | Browser Vendor Prefixes | 10.4.16 |
| **Google Fonts** | Typography (Inter, Poppins) | Latest |

## 📦 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (v16 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** - [Download Git](https://git-scm.com/)
- **Code Editor** (VS Code recommended) - [Download VS Code](https://code.visualstudio.com/)

### Verify Installation

```bash
node --version      # Should show v16 or higher
npm --version       # Should show 8 or higher
git --version       # Should show latest version
```

## 🚀 Quick Start Guide

### Step 1: Clone the Repository

```bash
git clone https://github.com/TanviRagesh/ShipVyom.git
cd ShipVyom
```

### Step 2: Install Dependencies

```bash
npm install
```

This command installs all required packages listed in `package.json`:
- React and React DOM
- Vite and build tools
- Tailwind CSS with PostCSS
- ESLint for code quality

### Step 3: Start the Development Server

```bash
npm run dev
```

The terminal will display:
```
  VITE v7.2.4  ready in 290 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```

### Step 4: Open in Browser

Open your browser and navigate to:
```
http://localhost:5173/
```

You should now see the Shipment Status Dashboard with:
- Dark gradient background with animated floating orbs
- Shipment filter and sort controls
- 5 sample shipments displaying with different statuses
- Fully interactive cards that expand on click

## 📋 Available Scripts

Run these commands from the project root directory:

### Development Server
```bash
npm run dev
```
Starts Vite dev server with hot module replacement (HMR) at `http://localhost:5173/`

### Build for Production
```bash
npm run build
```
Creates an optimized production build in the `dist/` folder

### Preview Production Build
```bash
npm run preview
```
Serves the production build locally at `http://localhost:4173/`

### Run ESLint
```bash
npm run lint
```
Checks code quality and identifies potential issues

## 📁 Project Structure

```
ShipVyom/
├── src/
│   ├── components/
│   │   ├── ShipmentCard.jsx           # Reusable shipment card component
│   │   └── ShipmentDashboard.jsx      # Main dashboard with filtering & sorting
│   ├── services/
│   │   └── fetchShipments.js          # Mock API service with delays
│   ├── data/
│   │   └── shipments.json             # Sample shipment data (5 shipments)
│   ├── App.jsx                        # Root component
│   ├── main.jsx                       # React DOM entry point
│   └── index.css                      # Global Tailwind styles
├── public/
│   └── vite.svg                       # Public assets
├── index.html                         # HTML template
├── package.json                       # Dependencies & scripts
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS customization
├── postcss.config.js                  # PostCSS configuration
├── .gitignore                         # Git ignore rules
└── README.md                          # This file
```

## 🎨 Component Breakdown

### ShipmentDashboard.jsx
**Main container component** that manages:
- Fetching mock shipment data
- Loading and error states
- Filtering by status
- Sorting (date, status, tracking number)
- Responsive grid layout (1 column mobile, 2 columns desktop)

**State Variables:**
- `shipments` - All fetched shipments
- `filteredShipments` - After filtering/sorting
- `loading` - Loading animation toggle
- `error` - Error message display
- `filterStatus` - Selected status filter
- `sortBy` - Sort criteria

### ShipmentCard.jsx
**Individual shipment display component** featuring:
- Status-based gradient backgrounds (Delivered→Green, In Transit→Orange, etc.)
- Expandable details section
- Sender/receiver information
- Current location and last update timestamp
- Estimated delivery date
- Smooth fade-in animations

### fetchShipments.js
**Mock API service** that:
- Simulates network delay (500-2000ms random)
- Returns 5 sample shipments
- Includes 10% random failure rate for error testing
- Provides `getUniqueStatuses()` utility function

## 💾 Sample Data

The dashboard comes with 5 pre-loaded shipments:

| ID | Tracking # | Status | Sender | Receiver | Location | Delivery Date |
|---|---|---|---|---|---|---|
| 1 | SHP-2025-001 | Delivered | TechCorp | John Smith | New York, NY | 2025-01-20 |
| 2 | SHP-2025-002 | In Transit | Global Electronics | Sarah Johnson | Chicago, IL | 2025-01-28 |
| 3 | SHP-2025-003 | Out for Delivery | Premium Goods | Michael Chen | Los Angeles, CA | 2025-01-27 |
| 4 | SHP-2025-004 | Pending | FastShip Logistics | Emily Davis | Houston, TX | 2025-02-02 |
| 5 | SHP-2025-005 | Cancelled | Express Delivery | Robert Martinez | Denver, CO | 2025-01-25 |

## 🎨 Styling & Design

### Color Scheme
- **Background**: Dark gradient (slate-900 → slate-800)
- **Status Colors**:
  - Delivered: Emerald to Teal gradient
  - In Transit: Amber to Orange gradient
  - Out for Delivery: Blue to Cyan gradient
  - Pending: Rose to Pink gradient
  - Cancelled: Gray to Slate gradient

### Typography
- **Headers**: Poppins (600-800 weight)
- **Body Text**: Inter (300-800 weight)
- Both imported from Google Fonts

### Animations
- Loading spinner pulse animation
- Card hover effects
- Smooth expandable transitions
- Floating background orbs

## 🔧 Customization Guide

### Adding New Shipments
Edit `src/data/shipments.json`:
```json
{
  "id": 6,
  "trackingNumber": "SHP-2025-006",
  "status": "In Transit",
  "sender": "Your Company",
  "receiver": "Customer Name",
  "currentLocation": "City, State",
  "lastLocation": "Previous City, State",
  "lastUpdate": "2025-01-27T10:30:00Z",
  "estimatedDelivery": "2025-02-01"
}
```

### Modifying Colors
Edit `tailwind.config.js` in the theme extend section:
```javascript
colors: {
  status: {
    delivered: '#10b981',
    transit: '#f59e0b',
    // Add your colors here
  }
}
```

### Connecting to Real API
Replace the `fetchShipments()` function in `src/services/fetchShipments.js`:
```javascript
export const fetchShipments = async () => {
  const response = await fetch('https://your-api.com/shipments');
  return response.json();
};
```

## 🐛 Troubleshooting

### Port Already in Use
If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Dependencies Not Installing
Clear npm cache and reinstall:
```bash
npm cache clean --force
npm install
```

### Tailwind Classes Not Showing
Restart the dev server:
```bash
# Press Ctrl+C to stop
# Then run
npm run dev
```

### Module Not Found Errors
Ensure `node_modules` is installed:
```bash
npm install
```

## 📝 Git Workflow

### First Time Setup
```bash
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Making Changes
```bash
git add .
git commit -m "Description of changes"
git push origin main
```

## 📦 Building for Production

### Create Optimized Build
```bash
npm run build
```

This generates a `dist/` folder ready for deployment.

### Deploy Options
- **Vercel**: Connect GitHub repo, auto-deploys on push
- **Netlify**: Drag & drop `dist/` folder or connect GitHub
- **GitHub Pages**: Push `dist/` to gh-pages branch
- **Traditional Hosting**: Upload `dist/` contents to your server

### Deployment Command (for Netlify/Vercel)
```bash
npm run build
# Deploy the dist/ folder
```

## 📚 Learning Resources

- [React Documentation](https://react.dev/)
- [Vite Guide](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [JavaScript ES6+](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide)

## 🤝 Contributing

Want to improve ShipVyom? Here's how:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit changes (`git commit -m 'Add amazing feature'`)
5. Push to branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Ragesh**
- GitHub: [@TanviRagesh](https://github.com/TanviRagesh)

## 🙏 Acknowledgments

- React team for the amazing UI library
- Vite team for the blazing fast build tool
- Tailwind CSS for the utility-first CSS framework
- Font providers for beautiful typography

## ❓ Need Help?

If you encounter any issues:

1. Check the [Troubleshooting](#troubleshooting) section
2. Review the [Project Structure](#-project-structure)
3. Open an issue on GitHub
4. Check existing issues for similar problems

---

**Ready to track shipments? Start with `npm install && npm run dev`** 🚀
