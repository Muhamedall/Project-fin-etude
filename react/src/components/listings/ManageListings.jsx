import { useState } from 'react';

const Listings = () => {
  const [listings, setListings] = useState([
    { id: 1, title: 'Cozy Apartment', location: 'New York', price: '$1200', status: 'Active' },
    // Add more listings here
  ]);

  const deactivateListing = (id) => {
    setListings(listings.map(listing => listing.id === id ? { ...listing, status: 'Inactive' } : listing));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Manage Listings</h2>
      <ul className="mt-4">
        {listings.map(listing => (
          <li key={listing.id} className="p-4 bg-gray-100 dark:bg-gray-700 rounded mb-4 flex justify-between items-center">
            <div>
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">{listing.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{listing.location}</p>
              <p className="text-gray-600 dark:text-gray-400">{listing.price}</p>
            </div>
            <div>
              <span className={`inline-block px-3 py-1 text-sm font-semibold ${listing.status === 'Active' ? 'text-green-800 bg-green-200' : 'text-red-800 bg-red-200'} rounded-full`}>{listing.status}</span>
              {listing.status === 'Active' && (
                <button
                  className="ml-4 px-4 py-2 bg-red-500 text-white rounded"
                  onClick={() => deactivateListing(listing.id)}
                >
                  Deactivate
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listings;
