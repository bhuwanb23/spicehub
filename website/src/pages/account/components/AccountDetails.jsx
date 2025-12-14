import React, { useState } from 'react';

const AccountDetails = () => {
  const [formData, setFormData] = useState({
    fullName: 'Alex Morgan',
    email: 'alex.morgan@example.com',
    phone: '(555) 123-4567',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setIsEditing(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-serif font-bold text-brand-brown-700 mb-6">Account Details</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-brand-brown-700 mb-1">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                !isEditing ? 'bg-brand-cream' : ''
              }`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-brown-700 mb-1">Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                !isEditing ? 'bg-brand-cream' : ''
              }`}
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-brand-brown-700 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={!isEditing}
              className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                !isEditing ? 'bg-brand-cream' : ''
              }`}
            />
          </div>
        </div>
        
        <div className="border-t border-brand-tan pt-6">
          <h3 className="text-lg font-bold text-brand-brown-700 mb-4">Change Password</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Current Password</label>
              <input
                type="password"
                name="currentPassword"
                value={formData.currentPassword}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                  !isEditing ? 'bg-brand-cream' : ''
                }`}
              />
            </div>
            
            <div></div> {/* Empty div for spacing */}
            
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">New Password</label>
              <input
                type="password"
                name="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                  !isEditing ? 'bg-brand-cream' : ''
                }`}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-brand-brown-700 mb-1">Confirm New Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                disabled={!isEditing}
                className={`w-full px-3 py-2 border border-brand-tan rounded-lg focus:ring-2 focus:ring-brand-orange focus:border-brand-orange ${
                  !isEditing ? 'bg-brand-cream' : ''
                }`}
              />
            </div>
          </div>
        </div>
        
        <div className="flex space-x-3 pt-4">
          {!isEditing ? (
            <button
              type="button"
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
            >
              Edit Details
            </button>
          ) : (
            <>
              <button
                type="submit"
                className="px-4 py-2 bg-brand-orange text-white rounded-lg hover:bg-brand-orange/90 transition-colors"
              >
                Save Changes
              </button>
              <button
                type="button"
                onClick={() => setIsEditing(false)}
                className="px-4 py-2 text-brand-brown-700 border border-brand-tan rounded-lg hover:bg-brand-cream transition-colors"
              >
                Cancel
              </button>
            </>
          )}
        </div>
      </form>
    </div>
  );
};

export default AccountDetails;