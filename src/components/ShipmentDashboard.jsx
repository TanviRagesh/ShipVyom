import { useState, useEffect } from 'react';
import ShipmentCard from './ShipmentCard';
import { fetchShipments, getUniqueStatuses } from '../services/fetchShipments';

/**
 * ShipmentDashboard Component
 * Main container with premium design, animations, and user interactions
 */
const ShipmentDashboard = () => {
  const [shipments, setShipments] = useState([]);
  const [filteredShipments, setFilteredShipments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filterStatus, setFilterStatus] = useState('All');
  const [sortBy, setSortBy] = useState('date');
  const [statuses, setStatuses] = useState([]);

  // Fetch shipments on component mount
  useEffect(() => {
    const loadShipments = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchShipments();
        setShipments(data);
        setFilteredShipments(data);
        setStatuses(['All', ...getUniqueStatuses(data)]);
      } catch (err) {
        setError(err.message);
        setShipments([]);
        setFilteredShipments([]);
      } finally {
        setLoading(false);
      }
    };

    loadShipments();
  }, []);

  // Apply filtering and sorting
  useEffect(() => {
    let result = shipments;

    // Filter by status
    if (filterStatus !== 'All') {
      result = result.filter(s => s.status === filterStatus);
    }

    // Sort by selected option
    if (sortBy === 'date') {
      result = result.sort((a, b) => 
        new Date(a.estimatedDelivery) - new Date(b.estimatedDelivery)
      );
    } else if (sortBy === 'status') {
      result = result.sort((a, b) => 
        a.status.localeCompare(b.status)
      );
    } else if (sortBy === 'tracking') {
      result = result.sort((a, b) => 
        a.trackingNumber.localeCompare(b.trackingNumber)
      );
    }

    setFilteredShipments(result);
  }, [shipments, filterStatus, sortBy]);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    const loadShipments = async () => {
      try {
        const data = await fetchShipments();
        setShipments(data);
        setFilteredShipments(data);
        setStatuses(['All', ...getUniqueStatuses(data)]);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadShipments();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl animate-float animation-delay-2000"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-cyan-600/20 rounded-full blur-3xl animate-float animation-delay-4000"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 glass-effect border-b border-white/20 backdrop-blur-xl sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-4 mb-2">
                <div className="text-4xl animate-bounce">📦</div>
                <div>
                  <h1 className="text-4xl sm:text-5xl font-poppins font-bold gradient-text">
                    Shipment Dashboard
                  </h1>
                </div>
              </div>
              <p className="text-slate-400 text-sm sm:text-base">Track your packages in real-time with live updates</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Loading State */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-24">
            <div className="relative w-20 h-20 mb-6">
              <div className="absolute inset-0 rounded-full border-4 border-slate-600"></div>
              <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-blue-500 animate-spin"></div>
            </div>
            <p className="text-xl font-poppins font-semibold text-white mb-2">Loading shipments...</p>
            <p className="text-sm text-slate-400">Fetching real-time tracking data</p>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="glass-effect border-l-4 border-rose-500/50 p-8 rounded-2xl mb-8 animate-in fade-in slide-in-from-top duration-300">
            <div className="flex items-start gap-6">
              <span className="text-4xl">⚠️</span>
              <div className="flex-1">
                <h3 className="text-2xl font-poppins font-bold text-white mb-2">Unable to Load Shipments</h3>
                <p className="text-slate-300 mb-6">{error}</p>
                <button
                  onClick={handleRetry}
                  className="btn-primary bg-gradient-to-r from-rose-500 to-pink-500 shadow-lg hover:shadow-rose-500/50"
                >
                  Try Again
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Controls */}
        {!loading && !error && shipments.length > 0 && (
          <div className="glass-effect border border-white/20 p-8 rounded-2xl mb-10 animate-in fade-in slide-in-from-top duration-300">
            <h2 className="text-xl font-poppins font-bold text-white mb-6">Filters & Sorting</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Filter by Status */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">Filter by Status</label>
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-white/15"
                >
                  {statuses.map(status => (
                    <option key={status} value={status} className="bg-slate-800">
                      {status}
                    </option>
                  ))}
                </select>
              </div>

              {/* Sort by */}
              <div>
                <label className="block text-sm font-semibold text-slate-200 mb-3">Sort by</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-300 hover:bg-white/15"
                >
                  <option value="date" className="bg-slate-800">Estimated Delivery Date</option>
                  <option value="status" className="bg-slate-800">Status</option>
                  <option value="tracking" className="bg-slate-800">Tracking Number</option>
                </select>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
              <p className="text-slate-300">
                Showing <span className="font-semibold text-white">{filteredShipments.length}</span> of <span className="font-semibold text-white">{shipments.length}</span> shipments
              </p>
            </div>
          </div>
        )}

        {/* Shipments Grid */}
        {!loading && !error && (
          <>
            {filteredShipments.length === 0 ? (
              <div className="glass-effect border border-white/20 rounded-2xl p-16 text-center animate-in fade-in duration-300">
                <div className="text-7xl mb-6 animate-bounce">📭</div>
                <h3 className="text-3xl font-poppins font-bold text-white mb-3">No Shipments Found</h3>
                <p className="text-slate-400 mb-8 text-lg">
                  {shipments.length === 0 
                    ? "There are no shipments to display."
                    : "No shipments match the selected filters."}
                </p>
                {shipments.length > 0 && (
                  <button
                    onClick={() => {
                      setFilterStatus('All');
                      setSortBy('date');
                    }}
                    className="btn-primary bg-gradient-to-r from-cyan-500 to-blue-500 shadow-lg hover:shadow-blue-500/50"
                  >
                    Clear Filters
                  </button>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {filteredShipments.map((shipment, index) => (
                  <div key={shipment.id} className="animate-in fade-in slide-in-from-bottom duration-300" style={{ animationDelay: `${index * 50}ms` }}>
                    <ShipmentCard shipment={shipment} />
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};

export default ShipmentDashboard;
