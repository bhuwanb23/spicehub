import React, { createContext, useContext, useReducer, useEffect } from 'react';

// Define initial cart state
const initialState = {
  items: [],
  totalItems: 0,
  totalPrice: 0
};

// Cart reducer to handle cart actions
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(item => item.id === action.payload.id);
      let updatedItems;
      
      if (existingItem) {
        updatedItems = state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item
        );
      } else {
        updatedItems = [...state.items, action.payload];
      }
      
      return {
        ...state,
        items: updatedItems,
        totalItems: calculateTotalItems(updatedItems),
        totalPrice: calculateTotalPrice(updatedItems)
      };
      
    case 'REMOVE_FROM_CART':
      const filteredItems = state.items.filter(item => item.id !== action.payload);
      return {
        ...state,
        items: filteredItems,
        totalItems: calculateTotalItems(filteredItems),
        totalPrice: calculateTotalPrice(filteredItems)
      };
      
    case 'UPDATE_QUANTITY':
      const updatedQuantityItems = state.items.map(item =>
        item.id === action.payload.id
          ? { ...item, quantity: action.payload.quantity }
          : item
      );
      return {
        ...state,
        items: updatedQuantityItems,
        totalItems: calculateTotalItems(updatedQuantityItems),
        totalPrice: calculateTotalPrice(updatedQuantityItems)
      };
      
    case 'CLEAR_CART':
      return {
        ...state,
        items: [],
        totalItems: 0,
        totalPrice: 0
      };
      
    case 'SET_CART':
      return {
        ...state,
        items: action.payload,
        totalItems: calculateTotalItems(action.payload),
        totalPrice: calculateTotalPrice(action.payload)
      };
      
    default:
      return state;
  }
};

// Helper functions
const calculateTotalItems = (items) => {
  return items.reduce((total, item) => total + item.quantity, 0);
};

const calculateTotalPrice = (items) => {
  return items.reduce((total, item) => total + (item.price * item.quantity), 0);
};

// Create context
const CartContext = createContext();

// Custom hook to use cart context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Cart provider component
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState, () => {
    // Load cart from localStorage if available
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initialState;
  });

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(state));
  }, [state]);

  // Action creators
  const addToCart = (product, quantity = 1) => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity }
    });
  };

  const removeFromCart = (productId) => {
    dispatch({
      type: 'REMOVE_FROM_CART',
      payload: productId
    });
  };

  const updateQuantity = (productId, quantity) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    dispatch({
      type: 'UPDATE_QUANTITY',
      payload: { id: productId, quantity }
    });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const setCart = (items) => {
    dispatch({ type: 'SET_CART', payload: items });
  };

  // Calculate order summary
  const getOrderSummary = () => {
    const subtotal = state.totalPrice;
    const shipping = subtotal > 0 ? 5.00 : 0.00;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    return {
      subtotal: parseFloat(subtotal.toFixed(2)),
      shipping: parseFloat(shipping.toFixed(2)),
      tax: parseFloat(tax.toFixed(2)),
      total: parseFloat(total.toFixed(2))
    };
  };

  const value = {
    ...state,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    setCart,
    getOrderSummary
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};