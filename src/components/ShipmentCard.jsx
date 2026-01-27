import { useState } from 'react';

/**
 * ShipmentCard Component
 * Displays individual shipment information with premium styling and animations
 */
const ShipmentCard = ({ shipment }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Map status to professional color schemes
  const getStatusConfig = (status) => {
    const configs = {
      'Delivered': {
        gradient: 'from-emerald-500/20 to-teal-500/20',
        border: 'border-emerald-500/30',
        badge: 'bg-gradient-to-r from-emerald-500 to-teal-500',
        text: 'text-emerald-300',
        icon: '✓',
        lightBg: 'bg-emerald-500/10',
      },
      'In Transit': {
        gradient: 'from-amber-500/20 to-orange-500/20',
        border: 'border-amber-500/30',
        badge: 'bg-gradient-to-r from-amber-500 to-orange-500',
        text: 'text-amber-300',
        icon: '→',
        lightBg: 'bg-amber-500/10',
      },
      'Out for Delivery': {
        gradient: 'from-blue-500/20 to-cyan-500/20',
        border: 'border-blue-500/30',
        badge: 'bg-gradient-to-r from-blue-500 to-cyan-500',
        text: 'text-blue-300',
        icon: '🚚',
        lightBg: 'bg-blue-500/10',
      },
      'Pending': {
        gradient: 'from-rose-500/20 to-pink-500/20',
        border: 'border-rose-500/30',
        badge: 'bg-gradient-to-r from-rose-500 to-pink-500',
        text: 'text-rose-300',
        icon: '⏳',
        lightBg: 'bg-rose-500/10',
      },
      'Cancelled': {
        gradient: 'from-gray-500/20 to-slate-500/20',
        border: 'border-gray-500/30',
        badge: 'bg-gradient-to-r from-gray-500 to-slate-500',
        text: 'text-gray-300',
        icon: '✗',
        lightBg: 'bg-gray-500/10',
      }
    };
    return configs[status] || configs['Pending'];
  };

  const statusConfig = getStatusConfig(shipment.status);

  const handleViewDetails = () => {
    console.log('Shipment Details:', shipment);
    setIsExpanded(!isExpanded);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatTime = (dateString) => {
    return new Date(dateString).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className={`group glass-effect card-hover border-l-4 ${statusConfig.border} bg-gradient-to-br ${statusConfig.gradient} overflow-hidden`}>
      {/* Header Section */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-3">
              <div className={`${statusConfig.lightBg} p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}>
                <span className={`text-2xl block ${statusConfig.text}`}>{statusConfig.icon}</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-white leading-tight mb-1">
                  {shipment.trackingNumber}
                </h3>
                <p className="text-sm text-slate-400">Tracking ID</p>
              </div>
            </div>
          </div>
          <span className={`${statusConfig.badge} px-4 py-2 rounded-full font-semibold text-xs text-white whitespace-nowrap shadow-lg`}>
            {shipment.status}
          </span>
        </div>

        {/* Info Grid with enhanced styling */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">From</p>
            <p className="font-medium text-slate-200 text-sm">{shipment.sender}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">To</p>
            <p className="font-medium text-slate-200 text-sm">{shipment.receiver}</p>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10">
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Location</p>
            <p className="font-medium text-slate-200 text-sm">{shipment.lastLocation}</p>
          </div>
          <div className={`p-3 rounded-lg bg-white/5 border border-white/10`}>
            <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Delivery</p>
            <p className="font-medium text-slate-200 text-sm">{formatDate(shipment.estimatedDelivery)}</p>
          </div>
        </div>

        {/* Expandable Details with smooth animation */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Current Status</p>
                <p className={`text-sm font-medium ${statusConfig.text}`}>{shipment.currentLocation}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Last Update</p>
                  <p className="text-xs text-slate-300">{formatDate(shipment.lastUpdate)}</p>
                </div>
                <div className="p-3 rounded-lg bg-white/5 border border-white/10">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">Time</p>
                  <p className="text-xs text-slate-300">{formatTime(shipment.lastUpdate)}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Action Button */}
        <div className="mt-6 pt-4 border-t border-white/10">
          <button
            onClick={handleViewDetails}
            className={`w-full ${statusConfig.badge} btn-primary shadow-lg hover:shadow-2xl`}
          >
            {isExpanded ? 'Hide Details ▲' : 'View Details ▼'}
          </button>
        </div>
      </div>

      {/* Animated background gradient accent */}
      <div className={`absolute -top-40 -right-40 w-80 h-80 ${statusConfig.gradient} rounded-full blur-3xl opacity-20 group-hover:opacity-30 transition-opacity duration-500 -z-10`}></div>
    </div>
  );
};

export default ShipmentCard;
