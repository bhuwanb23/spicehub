# SpiceHub - Premium Spices & Herbs E-commerce

A modern, responsive e-commerce website for a premium spices and herbs retailer built with React, Vite, and Tailwind CSS.

## Features

- **Fully Responsive Design**: Works on all device sizes
- **User Authentication**: Login and registration system
- **Product Catalog**: Browse spices by category
- **Shopping Cart**: Add/remove items with quantity adjustment
- **Checkout Process**: Multi-step checkout with shipping and payment
- **User Account**: Personalized dashboard with order history
- **Search Functionality**: Instant search with suggestions
- **Order Tracking**: Track order status and delivery

## Pages

- Home
- Shop (All products)
- Category (Filtered by spice type)
- Product Details
- Shopping Cart
- Checkout
- User Account (Dashboard, Orders, Addresses, etc.)
- About/Our Story
- Contact Us
- Login/Register

## Tech Stack

- **Frontend**: React.js with Hooks
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Routing**: React Router v6
- **State Management**: React Context API
- **Local Storage**: For data persistence

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bhuwanb23/spicehub.git
   ```

2. Navigate to the project directory:
   ```bash
   cd spicehub/website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open your browser and visit:
   ```
   http://localhost:5173
   ```

### Building for Production

To create a production build:
```bash
npm run build
```

To preview the production build:
```bash
npm run preview
```

## Authentication

This is a frontend-only implementation with simulated authentication:

- **Register**: Visit `/register` to create an account
- **Login**: Visit `/login` to sign in
- **Test Account**: 
  - Email: `test@example.com`
  - Password: Any password will work

Note: User data is stored in localStorage and persists between sessions.

## Project Structure

```
src/
├── components/          # Reusable components
├── constants/           # Static data and product information
├── context/             # React context providers
├── pages/               # Page components
│   ├── about/
│   ├── account/
│   ├── auth/
│   ├── cart/
│   ├── category/
│   ├── checkout/
│   ├── contact/
│   ├── home/
│   ├── product/
│   ├── search/
│   └── shop/
└── utils/              # Utility functions
```

## Key Features Implementation

### Authentication System
- Protected routes for account, cart, and checkout pages
- Login/logout functionality
- User data persistence using localStorage

### Shopping Experience
- Product browsing by category
- Search with autocomplete suggestions
- Shopping cart with quantity adjustment
- Multi-step checkout process

### User Account
- Dashboard overview
- Order history with tracking
- Address management
- Account settings

## Design Principles

- **Earth-inspired Color Palette**: Warm browns, muted greens, and cream tones
- **Typography**: Serif fonts for headings, clean sans-serif for body text
- **Layout**: Minimalist design with generous spacing and rounded elements
- **Responsive**: Mobile-first approach with adaptive layouts

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Product images and descriptions for premium spices
- Design inspiration from modern e-commerce platforms
- Icons from Font Awesome