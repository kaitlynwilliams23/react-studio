import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  const [cart, setCart] = useState([]); // State variable to hold the cart items

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]); // Adding the new item to the cart
  };
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="App">
      <div className="bakery-items">
      <h1>My Bakery</h1>
        <div className="bakery-items-container">

      {bakeryData.map((item, index) => (
        <BakeryItem key={index} item={item} addToCart={addToCart} /> // Using BakeryItem component
      ))}
        </div>
      </div>

      <div className="Cart">
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
          ))}
        </ul>
        <p>Total: ${totalPrice.toFixed(2)}</p> {/* Display total price */}
      </div>
    </div>
  );
}

export default App;