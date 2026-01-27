# 📦 Shipment Status Dashboard

A modern, responsive React application for tracking logistics shipments in real-time. This frontend-only dashboard demonstrates best practices in React component design, state management, and UI/UX with a clean, professional interface.

## 🎯 Project Overview

The Shipment Status Dashboard is a simplified yet fully functional web application that displays the status of logistics shipments. It fetches mock shipment data, renders it dynamically with real-time filtering and sorting, and provides an intuitive user interface for tracking packages.

### Key Features

- ✅ **Real-time Shipment Tracking** - View live status updates for multiple shipments
- 🎨 **Status-Based Visual Indicators** - Color-coded badges and emoji indicators for quick status recognition
- 🔍 **Advanced Filtering** - Filter shipments by delivery status (Pending, In Transit, Out for Delivery, Delivered, Cancelled)
- 📊 **Smart Sorting** - Sort by estimated delivery date, status, or tracking number
- ⚡ **Loading States** - Professional loading animation while fetching data
- ⚠️ **Error Handling** - Graceful error messages with retry functionality
- 📱 **Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- 🎯 **Interactive Cards** - Expandable shipment details with smooth animations
- 🌐 **Mock API Integration** - Simulated API calls with realistic delays

## 🧱 Tech Stack

| Technology | Purpose | Version |
|---|---|---|
| **React.js** | UI Framework | 19.2.0 |
| **Vite** | Build Tool & Dev Server | 7.2.4 |
| **Tailwind CSS** | Styling & Responsiveness | 3.3.0 |
| **React Hooks** | State Management | Built-in |
| **PostCSS** | CSS Processing | 8.4.31 |
| **Autoprefixer** | Browser Compatibility | 10.4.16 |

## 📁 Project Structure

```
src/
├── components/
│   ├── ShipmentCard.jsx          # Individual shipment card component
│   └── ShipmentDashboard.jsx     # Main dashboard container
├── services/
│   └── fetchShipments.js         # Mock API service
├── data/
│   └── shipments.json            # Sample shipment data
├── App.jsx                        # Main app component
├── main.jsx                       # Entry point
└── index.css                      # Global Tailwind styles

public/
└── vite.svg

index.html                          # HTML template
package.json                        # Dependencies & scripts
tailwind.config.js                  # Tailwind configuration
postcss.config.js                   # PostCSS configuration
vite.config.js                      # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd shipment-dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - The application will be available at `http://localhost:5173`
   - Vite automatically opens the browser window

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 📊 Data Structure

Each shipment object contains:

```json
{
  "id": 1,
  "trackingNumber": "SHP-2025-001",
  "status": "Delivered",
  "lastLocation": "New York, NY",
  "estimatedDelivery": "2025-01-20",
  "sender": "TechCorp Industries",
  "receiver": "John Smith",
  "currentLocation": "Delivered to recipient",
  "lastUpdate": "2025-01-20T14:30:00Z"
}
```

### Status Values

- **Delivered** (🟢 Green) - Package has been delivered successfully
- **In Transit** (🟠 Orange) - Package is on its way to destination
- **Out for Delivery** (🟠 Orange) - Package is being delivered today
- **Pending** (🔴 Red) - Package is awaiting pickup or processing
- **Cancelled** (⚫ Gray) - Shipment has been cancelled

## 🧩 Component Architecture

### ShipmentDashboard

**Responsibilities:**
- Fetches shipment data from mock API
- Manages loading, error, and data states
- Handles filtering by status
- Handles sorting options
- Renders responsive grid layout
- Displays empty state and error states

**Key Features:**
- Uses `useState` for state management
- Uses `useEffect` for data fetching
- Implements try-catch error handling
- Simulates API failure scenarios
- Responsive grid (1 column mobile, 2 columns desktop)

### ShipmentCard

**Responsibilities:**
- Displays individual shipment information
- Applies status-based styling and colors
- Handles expand/collapse for detailed view
- Logs shipment details to console
- Formats dates and times

**Key Features:**
- Status-specific color configurations
- Emoji indicators for visual recognition
- Expandable details section with animation
- Responsive layout for all screen sizes
- Professional card-based design

### fetchShipments Service

**Responsibilities:**
- Simulates API call with realistic delay (500-2000ms)
- Handles occasional failures (10% chance)
- Returns mock shipment data
- Provides utility to extract unique statuses

**Key Features:**
- Returns Promise for async/await usage
- Configurable delay for testing
- Error simulation for UX testing
- Reusable utility functions

## 🎨 Styling & Design Decisions

### Color Scheme

- **Primary:** Indigo/Blue gradient background
- **Status Colors:**
  - Delivered: Green (#10b981)
  - In Transit/Out for Delivery: Orange (#f97316)
  - Pending: Red (#ef4444)
  - Cancelled: Gray (#6b7280)

### Responsive Breakpoints

- **Mobile:** Single column layout (< 768px)
- **Tablet:** Single column with medium cards (768px - 1024px)
- **Desktop:** Two-column grid layout (> 1024px)

### Typography

- Headers: Bold, large font sizes for hierarchy
- Labels: Small caps for metadata
- Body: Readable sans-serif with proper line-height

### Interactive Elements

- Hover effects on buttons and cards
- Smooth transitions and animations
- Active state scaling for tactile feedback
- Loading animations with pulse effect
- Smooth expand/collapse transitions

## 🧪 Testing the Application

### Test Scenarios

1. **Initial Load**
   - App displays loading state
   - Data loads within 500-2000ms
   - Shipments display correctly

2. **Filtering**
   - Filter by each status option
   - "All" shows all shipments
   - Count updates correctly

3. **Sorting**
   - Sort by delivery date
   - Sort by status alphabetically
   - Sort by tracking number

4. **Error Handling**
   - Occasionally fails to load (10% chance)
   - Error message displays with retry button
   - Retry button successfully reloads data

5. **Responsiveness**
   - Desktop: 2-column grid layout
   - Mobile: Single column stack layout
   - Tablet: Flexible responsive layout

6. **Interactive Features**
   - Click "View Details" to expand card
   - Expanded details show additional information
   - Button text changes to "Hide Details"
   - Console logs shipment details

## 📝 Code Quality

### Best Practices Implemented

- ✅ **Component Composition** - Small, reusable components with single responsibility
- ✅ **Props Validation** - Clear prop usage and documentation
- ✅ **State Management** - Proper use of React Hooks (useState, useEffect)
- ✅ **Error Handling** - Try-catch blocks and user-friendly error messages
- ✅ **Performance** - Efficient re-renders and memoization where needed
- ✅ **Accessibility** - Semantic HTML, proper labels, and keyboard support
- ✅ **Documentation** - JSDoc comments and clear variable naming
- ✅ **Responsive Design** - Mobile-first approach with Tailwind CSS

### Code Style

- Consistent indentation (2 spaces)
- Clear, descriptive variable names
- Comments for complex logic
- JSDoc for component documentation
- Functional component pattern throughout

## 🎯 Features Breakdown

### 1. Data Fetching
- Mock API with configurable delay
- Loading state management
- Error handling with retry functionality
- Real-world simulation (10% failure rate)

### 2. Filtering
- Filter by shipment status
- "All" option to show all shipments
- Real-time filter updates
- Shows count of filtered results

### 3. Sorting
- Sort by estimated delivery date
- Sort by status (alphabetical)
- Sort by tracking number
- Maintains filter while sorting

### 4. Status Indicators
- Color-coded background
- Emoji indicators (✓, →, 🚚, ⏳, ✗)
- Status badge with text
- Descriptive status messages

### 5. Responsive Design
- Mobile-first approach
- Flexible grid layout
- Touch-friendly buttons
- Readable on all screen sizes

### 6. User Feedback
- Loading animation
- Error messages
- Empty state handling
- Results counter
- Interactive buttons with feedback

## 🚦 Browser Compatibility

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔄 Future Improvements

### Potential Enhancements

1. **Real Backend Integration**
   - Connect to actual API endpoints
   - Authentication and authorization
   - Database persistence

2. **Advanced Features**
   - Search functionality by tracking number
   - Date range picker for filtering
   - Shipment details modal dialog
   - Timeline view of status updates
   - Shipment notifications

3. **Performance**
   - Pagination for large datasets
   - Virtual scrolling for many items
   - Lazy loading of shipment details
   - Service worker for offline support

4. **User Experience**
   - Dark mode toggle
   - Bookmark/save favorite shipments
   - Export shipment data (PDF, CSV)
   - Custom date range filters
   - Advanced search with AND/OR logic

5. **Testing**
   - Unit tests with Jest
   - Component tests with React Testing Library
   - End-to-end tests with Cypress
   - Performance testing

6. **Development**
   - TypeScript support
   - State management library (Redux/Zustand)
   - API mocking with MSW
   - Storybook for component documentation

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open-source and available under the MIT License.

## 📞 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository or contact the development team.

## 🙏 Acknowledgments

- React team for the excellent framework
- Vite team for the lightning-fast build tool
- Tailwind CSS team for the utility-first styling approach
- The JavaScript community for continuous innovation

---

**Built with ❤️ using React, Vite, and Tailwind CSS**

*Last Updated: January 2025*
