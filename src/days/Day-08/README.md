# React Shopping Cart App 🛒

A responsive Shopping Cart Application built using React.js, JavaScript, and Tailwind CSS. This project demonstrates React Props, State Management, reusable components, and dynamic cart functionality.

## 🚀 Features

- Display multiple products.
- Show product name, price, and image.
- Add products to the shopping cart.
- Increase product quantity.
- Decrease product quantity.
- Remove products from the cart.
- Automatically update product quantities.
- Calculate total cart items.
- Calculate total price dynamically.
- Display an empty cart message.
- Show cart item count in the header.
- Display a checkout button.
- Responsive UI for mobile and desktop devices.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- HTML5
- JSX

## 📚 React Concepts Practiced

| Concept               | Usage                                               |
| --------------------- | --------------------------------------------------- |
| `useState()`          | Store and manage shopping cart items                |
| Props                 | Pass product data and functions between components  |
| Components            | Create reusable ProductCard and CartItem components |
| `map()`               | Display products and cart items dynamically         |
| `find()`              | Check whether a product already exists in the cart  |
| `filter()`            | Remove products and filter cart items               |
| `reduce()`            | Calculate total items and total price               |
| Spread Operator       | Update cart data without directly modifying state   |
| `onClick`             | Handle add, remove, increase, and decrease actions  |
| Conditional Rendering | Display cart items or an empty cart message         |
| State Management      | Keep cart data and totals updated automatically     |
| Template Literals     | Format dynamic content where needed                 |

## 🛍️ Shopping Cart Functionality

### 1. Add to Cart

Adds a selected product to the shopping cart. If the product already exists, its quantity increases by one.

### 2. Increase Quantity

Increases the quantity of a selected cart product.

### 3. Decrease Quantity

Decreases the quantity of a selected product. When the quantity reaches zero, the product is removed from the cart.

### 4. Remove Product

Completely removes a selected product from the shopping cart.

### 5. Calculate Total Price

Automatically calculates the total price based on product prices and quantities.

Formula:

```text
Total Price = Product Price × Quantity
```

### 6. Total Cart Items

Displays the total number of products in the cart, including quantities.

## ⚙️ Installation and Setup

### 1. Navigate to the project folder

```bash
cd day8
```

### 2. Install dependencies

```bash
npm install
```

### 3. Install Tailwind CSS

For Tailwind CSS v4 with Vite:

```bash
npm install tailwindcss @tailwindcss/vite
```

### 4. Start the development server

```bash
npm start
```

Open the local URL displayed in your terminal to view the application.

## 🎯 Learning Objectives

- Understand React Props.
- Learn how to manage state using `useState()`.
- Understand parent and child components.
- Learn how to pass functions through props.
- Understand state management in React.
- Practice array methods such as `map()`, `find()`, `filter()`, and `reduce()`.
- Understand the spread operator.
- Update state without directly modifying existing data.
- Build a functional shopping cart.
- Calculate dynamic totals.
- Build responsive UI using Tailwind CSS.

## 🔮 Future Improvements

- Add product search functionality.
- Add product category filters.
- Add a Clear Cart button.
- Add discount and coupon functionality.
- Add subtotal and final price calculations.
- Add product quantity limits.
- Add a checkout page.
- Save cart data using `localStorage`.
- Add product ratings and reviews.
- Connect the application to a backend API.
- Add payment integration.
