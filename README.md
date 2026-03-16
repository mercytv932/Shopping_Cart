# Shopping Cart Web App

A simple and interactive **Shopping Cart Web Application** built with **HTML, CSS, and Vanilla JavaScript**.  
This project demonstrates dynamic DOM manipulation, cart state management, and browser storage using `localStorage`.

The application allows users to browse products, add items to a cart, adjust quantities, and calculate the total price in real time.

---

## Features

- Display products dynamically from a JavaScript array
- Add items to cart
- Increase or decrease product quantity
- Remove items from cart
- Clear entire cart
- Real-time total price calculation
- Cart item counter indicator
- Persistent cart storage using **localStorage**
- Toggleable cart sidebar view
- Responsive layout for desktop, tablet, and mobile

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)
- DOM Manipulation
- Local Storage API

---

## Project Structure

```
shopping-cart/
│
├── index.html      # Main HTML structure
├── style.css       # Application styling
├── script.js       # Cart logic and functionality
└── README.md       # Project documentation
```

---

## How It Works

### Product Rendering

Products are stored in a JavaScript array and dynamically rendered onto the page.

```javascript
let products = [
 {name: "Apple", id: 1, price: 1.99},
 {name: "Banana", id: 2, price: 0.99},
 {name:"Watermelon", id: 3, price: 1.50}
];
```

Each product card contains:

- Product name
- Price
- Add to Cart button

---

### Cart Management

The cart is stored in a JavaScript array:

```javascript
let cart = [];
```

Users can:

- Add items
- Increase quantity
- Decrease quantity
- Remove items completely

The cart automatically updates the UI whenever changes occur.

---

### Persistent Storage

The application saves cart data using **localStorage** so the cart remains even after refreshing the page.

```javascript
localStorage.setItem('cart', JSON.stringify(cart));
```

When the page loads, stored cart data is retrieved and displayed.

---

### Cart Sidebar

The cart appears as a **fixed sidebar panel** that can be toggled using the cart icon.

Users can:

- View items
- Modify quantities
- Clear cart
- See total price
- Simulate purchase

---

## UI Features

- Grid-based product layout
- Hover animations for product cards
- Floating cart icon
- Slide-in cart panel
- Responsive design for mobile devices

---

## Responsive Design

Media queries allow the layout to adapt to different screen sizes.

| Device | Layout |
|------|------|
| Desktop | 3 product columns |
| Tablet | 2 product columns |
| Mobile | 1 product column |

---

## Future Improvements

Possible enhancements for future versions:

- Product images
- Checkout page
- Payment integration
- Product search and filtering
- Cart animations
- Backend database integration
- User authentication

---

## Learning Goals

This project was built to practice:

- JavaScript DOM manipulation
- Event handling
- State management
- Working with arrays and objects
- Browser storage
- Responsive UI design

---

## Author

**Yosef Ergano**

Second-year Computer Science student interested in software development, web applications, and building practical projects to strengthen programming skills.

---

## License

This project is open source and available for educational and personal use.
