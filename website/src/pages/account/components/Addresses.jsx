import React, { useState } from 'react';
import { useUser } from '../../../context/UserContext';

const Addresses = () => {
  const { addresses, addAddress, updateAddress, deleteAddress, setDefaultAddress } = useUser();
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);

  const handleDeleteAddress = (id) => {
    deleteAddress(id);
  };

  const handleSetDefault = (id) => {
    setDefaultAddress(id);
  };

  const handleSaveAddress = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const addressData = {
      label: formData.get('label'),
      name: formData.get('name'),
      street: formData.get('street'),
      city: formData.get('city'),
      state: formData.get('state'),
      zip: formData.get('zip'),
      country: formData.get('country')
    };

    if (editingAddress) {
      updateAddress({ ...addressData, id: editingAddress.id, isDefault: editingAddress.isDefault });
    } else {
      addAddress({ ...addressData, isDefault: false });
    }

    setShowAddForm(false);
    setEditingAddress(null);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-serif font-bold text-brand-brown-700">Addresses</h2>
        <button 
          onClick={() => setShowAddForm(true)}
          className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
        >
          Add New Address
        </button>
      </div>
      
      {showAddForm && (
        <div className="mb-8 p-6 border border-brand-tan rounded-lg bg-brand-cream">
          <h3 className="text-lg font-bold text-brand-brown-700 mb-4">
            {editingAddress ? 'Edit Address' : 'Add New Address'}
          </h3>
          <form onSubmit={handleSaveAddress} className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Label</label>
              <select 
                name="label"
                defaultValue={editingAddress ? editingAddress.label : 'Home'}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
              >
                <option>Home</option>
                <option>Work</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Full Name</label>
              <input 
                type="text" 
                name="name"
                defaultValue={editingAddress ? editingAddress.name : ''}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Enter full name"
                required
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Street Address</label>
              <input 
                type="text" 
                name="street"
                defaultValue={editingAddress ? editingAddress.street : ''}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Enter street address"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">City</label>
              <input 
                type="text" 
                name="city"
                defaultValue={editingAddress ? editingAddress.city : ''}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Enter city"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">State</label>
              <input 
                type="text" 
                name="state"
                defaultValue={editingAddress ? editingAddress.state : ''}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Enter state"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">ZIP Code</label>
              <input 
                type="text" 
                name="zip"
                defaultValue={editingAddress ? editingAddress.zip : ''}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
                placeholder="Enter ZIP code"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Country</label>
              <select 
                name="country"
                defaultValue={editingAddress ? editingAddress.country : 'United States'}
                className="w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange"
              >
                <option>United States</option>
                <option>Canada</option>
                <option>United Kingdom</option>
              </select>
            </div>
            <div className="md:col-span-2 flex space-x-3 pt-2">
              <button 
                type="submit"
                className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                Save Address
              </button>
              <button 
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingAddress(null);
                }}
                className="px-4 py-2 text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-brand-cream transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {addresses.map((address) => (
          <div key={address.id} className="border border-brand-tan rounded-lg p-5">
            <div className="flex justify-between items-start mb-4">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-bold text-brand-brown-700">{address.label}</h3>
                  {address.isDefault && (
                    <span className="px-2 py-1 bg-brand-green/10 text-brand-green text-xs rounded-full">
                      Default
                    </span>
                  )}
                </div>
                <p className="text-brand-brown-500 text-sm">{address.name}</p>
              </div>
              <div className="flex space-x-2">
                <button 
                  onClick={() => {
                    setEditingAddress(address);
                    setShowAddForm(true);
                  }}
                  className="p-2 text-brand-brown-500 hover:text-brand-brown-700 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 192.4 221.7zM416 320c0 26.5-21.5 48-48 48c-5.7 0-11.2-.8-16.4-2.3l-89.8 89.8c-2.3 2.3-5.4 3.5-8.5 3.5s-6.2-1.2-8.5-3.5l-64-64c-4.5-4.5-7-10.6-7-17s2.5-12.4 7-16.9l89.8-89.8c-1.5-5.2-2.3-10.7-2.3-16.4 0-26.5 21.5-48 48-48s48 21.5 48 48c0 5.7-.8 11.2-2.3 16.4l89.8 89.8c4.5 4.5 7 10.6 7 16.9s-2.5 12.4-7 16.9l-64 64c-4.5 4.5-10.6 7-17 7z"/>
                  </svg>
                </button>
                <button 
                  onClick={() => handleDeleteAddress(address.id)}
                  className="p-2 text-brand-brown-500 hover:text-brand-red transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 448 512">
                    <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
                  </svg>
                </button>
              </div>
            </div>
            
            <div className="text-brand-brown-700">
              <p>{address.street}</p>
              <p>{address.city}, {address.state} {address.zip}</p>
              <p>{address.country}</p>
            </div>
            
            <div className="flex space-x-3 mt-4">
              {!address.isDefault && (
                <button 
                  onClick={() => handleSetDefault(address.id)}
                  className="text-sm font-medium text-brand-orange hover:text-brand-orange/80"
                >
                  Set as Default
                </button>
              )}
              <button 
                onClick={() => {
                  setEditingAddress(address);
                  setShowAddForm(true);
                }}
                className="text-sm font-medium text-brand-brown-700 hover:text-brand-brown-900"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Addresses;