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
        gradient: 'from-[#1BCFB4]/20 to-[#1BCFB4]/20',
        border: 'border-[#1BCFB4]',
        badge: 'bg-[#1BCFB4]',
        text: 'text-[#1BCFB4]',
        icon: '✓',
        lightBg: 'bg-[#1BCFB4]/10',
      },
      'In Transit': {
        gradient: 'from-[#FE9496]/20 to-[#FE9496]/20',
        border: 'border-[#FE9496]',
        badge: 'bg-[#FE9496]',
        text: 'text-[#FE9496]',
        icon: '→',
        lightBg: 'bg-[#FE9496]/10',
      },
      'Out for Delivery': {
        gradient: 'from-[#4BCBEB]/20 to-[#4BCBEB]/20',
        border: 'border-[#4BCBEB]',
        badge: 'bg-[#4BCBEB]',
        text: 'text-[#4BCBEB]',
        icon: '🚚',
        lightBg: 'bg-[#4BCBEB]/10',
      },
      'Pending': {
        gradient: 'from-[#A05AFF]/20 to-[#A05AFF]/20',
        border: 'border-[#A05AFF]',
        badge: 'bg-[#A05AFF]',
        text: 'text-[#A05AFF]',
        icon: '⏳',
        lightBg: 'bg-[#A05AFF]/10',
      },
      'Cancelled': {
        gradient: 'from-[#9E58FF]/20 to-[#9E58FF]/20',
        border: 'border-[#9E58FF]',
        badge: 'bg-[#9E58FF]',
        text: 'text-[#9E58FF]',
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
    <div className={`group card-hover border-l-4 ${statusConfig.border} ${statusConfig.lightBg} bg-white rounded-lg shadow-md hover:shadow-lg overflow-hidden transition-all`}>
      {/* Header Section */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-6">
          <div className="flex-1">
            <div className="flex items-start gap-4 mb-3">
              <div className={`${statusConfig.lightBg} p-3 rounded-xl transition-all duration-300 group-hover:scale-110`}>
                <span className={`text-2xl block ${statusConfig.text}`}>{statusConfig.icon}</span>
              </div>
              <div>
                <h3 className="font-poppins font-bold text-lg text-gray-800 leading-tight mb-1">
                  {shipment.trackingNumber}
                </h3>
                <p className="text-sm text-gray-500">Tracking ID</p>
              </div>
            </div>
          </div>
          <span className={`${statusConfig.badge} px-4 py-2 rounded-full font-semibold text-xs text-white whitespace-nowrap shadow-lg`}>
            {shipment.status}
          </span>
        </div>

        {/* Info Grid with enhanced styling */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="p-3 rounded-lg bg-white border border-[#1BCFB4]">
            <p className="text-xs font-semibold text-[#1BCFB4] uppercase tracking-wider mb-1">From</p>
            <p className="font-medium text-gray-800 text-sm">{shipment.sender}</p>
          </div>
          <div className="p-3 rounded-lg bg-white border border-[#FE9496]">
            <p className="text-xs font-semibold text-[#FE9496] uppercase tracking-wider mb-1">To</p>
            <p className="font-medium text-gray-800 text-sm">{shipment.receiver}</p>
          </div>
          <div className="p-3 rounded-lg bg-white border border-[#4BCBEB]">
            <p className="text-xs font-semibold text-[#4BCBEB] uppercase tracking-wider mb-1">Location</p>
            <p className="font-medium text-gray-800 text-sm">{shipment.lastLocation}</p>
          </div>
          <div className={`p-3 rounded-lg bg-white border border-[#A05AFF]`}>
            <p className="text-xs font-semibold text-[#A05AFF] uppercase tracking-wider mb-1">Delivery</p>
            <p className="font-medium text-gray-800 text-sm">{formatDate(shipment.estimatedDelivery)}</p>
          </div>
        </div>

        {/* Expandable Details with smooth animation */}
        {isExpanded && (
          <div className="mt-4 pt-4 border-t border-gray-200 animate-in fade-in slide-in-from-top-2 duration-300">
            <div className="space-y-3">
              <div className="p-3 rounded-lg bg-white border border-[#1BCFB4]">
                <p className="text-xs font-semibold text-[#1BCFB4] uppercase tracking-wider mb-2">Current Status</p>
                <p className={`text-sm font-medium ${statusConfig.text}`}>{shipment.currentLocation}</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 rounded-lg bg-white border border-[#4BCBEB]">
                  <p className="text-xs font-semibold text-[#4BCBEB] uppercase tracking-wider mb-1">Last Update</p>
                  <p className="text-xs text-gray-700">{formatDate(shipment.lastUpdate)}</p>
                </div>
                <div className="p-3 rounded-lg bg-white border border-[#A05AFF]">
                  <p className="text-xs font-semibold text-[#A05AFF] uppercase tracking-wider mb-1">Time</p>
                  <p className="text-xs text-gray-700">{formatTime(shipment.lastUpdate)}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Enhanced Action Button */}
        <div className="mt-6 pt-4 border-t border-gray-200">
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
