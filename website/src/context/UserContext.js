import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial user state
const initialState = {
  addresses: [
    {
      id: 1,
      label: 'Home',
      name: 'Alex Morgan',
      street: '123 Main Street',
      city: 'San Francisco',
      state: 'CA',
      zip: '94105',
      country: 'United States',
      isDefault: true
    },
    {
      id: 2,
      label: 'Work',
      name: 'Alex Morgan',
      street: '456 Market Street, Suite 1200',
      city: 'San Francisco',
      state: 'CA',
      zip: '94103',
      country: 'United States',
      isDefault: false
    }
  ],
  orders: []
};

// User reducer to handle user actions
const userReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ADDRESS':
      return {
        ...state,
        addresses: [...state.addresses, action.payload]
      };
      
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(address =>
          address.id === action.payload.id ? action.payload : address
        )
      };
      
    case 'DELETE_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.filter(address => address.id !== action.payload)
      };
      
    case 'SET_DEFAULT_ADDRESS':
      return {
        ...state,
        addresses: state.addresses.map(address => ({
          ...address,
          isDefault: address.id === action.payload
        }))
      };
      
    case 'ADD_ORDER':
      return {
        ...state,
        orders: [...state.orders, action.payload]
      };
      
    case 'SET_ORDERS':
      return {
        ...state,
        orders: action.payload
      };
      
    case 'SET_USER_DATA':
      return {
        ...state,
        ...action.payload
      };
      
    default:
      return state;
  }
};

// Create context
const UserContext = createContext();

// Custom hook to use user context
export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

// User provider component
export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState, () => {
    // Load user data from localStorage if available
    const savedUserData = localStorage.getItem('userData');
    if (savedUserData) {
      try {
        const parsedData = JSON.parse(savedUserData);
        // Ensure backward compatibility by adding missing properties
        return {
          ...initialState,
          ...parsedData,
          orders: parsedData.orders || [] // Ensure orders array exists
        };
      } catch (e) {
        console.error('Failed to parse user data from localStorage', e);
        return initialState;
      }
    }
    return initialState;
  });

  // Save user data to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(state));
  }, [state]);

  // Action creators
  const addAddress = (address) => {
    dispatch({
      type: 'ADD_ADDRESS',
      payload: { ...address, id: Date.now() } // Simple ID generation
    });
  };

  const updateAddress = (address) => {
    dispatch({
      type: 'UPDATE_ADDRESS',
      payload: address
    });
  };

  const deleteAddress = (addressId) => {
    dispatch({
      type: 'DELETE_ADDRESS',
      payload: addressId
    });
  };

  const setDefaultAddress = (addressId) => {
    dispatch({
      type: 'SET_DEFAULT_ADDRESS',
      payload: addressId
    });
  };

  const addOrder = (order) => {
    dispatch({
      type: 'ADD_ORDER',
      payload: { 
        ...order, 
        id: order.id || Date.now() // Use existing id or generate new one
      }
    });
  };

  const setOrders = (orders) => {
    dispatch({
      type: 'SET_ORDERS',
      payload: orders
    });
  };

  const setUserData = (userData) => {
    dispatch({
      type: 'SET_USER_DATA',
      payload: userData
    });
  };

  const value = {
    ...state,
    addAddress,
    updateAddress,
    deleteAddress,
    setDefaultAddress,
    addOrder,
    setOrders,
    setUserData
  };

  return React.createElement(
    UserContext.Provider,
    { value: value },
    children
  );
};