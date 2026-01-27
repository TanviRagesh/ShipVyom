import shipmentsData from '../data/shipments.json';

/**
 * Simulates an API call with a loading delay
 * @returns {Promise<Array>} Array of shipment objects
 */
export const fetchShipments = async () => {
  return new Promise((resolve, reject) => {
    // Simulate network delay
    const delay = Math.random() * 1500 + 500; // 500-2000ms
    
    setTimeout(() => {
      // Simulate occasional API failures (10% chance)
      if (Math.random() < 0.1) {
        reject(new Error('Failed to fetch shipments. Please try again later.'));
      } else {
        resolve(shipmentsData);
      }
    }, delay);
  });
};

/**
 * Get unique statuses from shipments
 * @param {Array} shipments - Array of shipment objects
 * @returns {Array} Array of unique status strings
 */
export const getUniqueStatuses = (shipments) => {
  return [...new Set(shipments.map(s => s.status))].sort();
};
