// Utility function to create a test user
const createTestUser = () => {
  const userData = {
    id: Date.now(),
    name: "Test User",
    email: "test@example.com",
  };
  
  const authToken = 'fake-jwt-token-' + Date.now();
  
  // Store in localStorage
  localStorage.setItem('authToken', authToken);
  localStorage.setItem('userData', JSON.stringify(userData));
  
  console.log('Test user created successfully!');
  console.log('Email: test@example.com');
  console.log('Password: (any password will work for this test account)');
  console.log('You can now log in to the application.');
  
  return { userData, authToken };
};

// Run the function
createTestUser();