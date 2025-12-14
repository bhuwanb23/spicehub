import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is authenticated on app load
  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('userData');
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setIsAuthenticated(true);
        setUser(parsedUser);
      } catch (e) {
        // If there's an error parsing, clear the data
        localStorage.removeItem('authToken');
        localStorage.removeItem('userData');
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // In a real app, this would be an API call
    // For now, we'll simulate authentication
    if (email && password) {
      const userData = {
        id: Date.now(),
        email,
        name: email.split('@')[0], // Simple name extraction
      };
      
      // Store in localStorage
      localStorage.setItem('authToken', 'fake-jwt-token-' + Date.now());
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: 'Invalid credentials' };
  };

  const register = (name, email, password) => {
    // In a real app, this would be an API call
    // For now, we'll simulate registration
    if (name && email && password) {
      const userData = {
        id: Date.now(),
        name,
        email,
      };
      
      // Store in localStorage
      localStorage.setItem('authToken', 'fake-jwt-token-' + Date.now());
      localStorage.setItem('userData', JSON.stringify(userData));
      
      setIsAuthenticated(true);
      setUser(userData);
      return { success: true };
    }
    return { success: false, message: 'Please fill all fields' };
  };

  const logout = () => {
    // Clear auth data
    localStorage.removeItem('authToken');
    localStorage.removeItem('userData');
    
    setIsAuthenticated(false);
    setUser(null);
  };

  const value = {
    isAuthenticated,
    user,
    login,
    register,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};