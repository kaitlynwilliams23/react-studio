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
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cart, setCart] = useState(0)
  const inc = () => {setCart + bakeryData.price}
  const addToCart = (item) => {
    setCart([...cart, item]); // Adding the new item to the cart
  };

  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        <p key={index}>
        <button onClick={() => addToCart(item)}>Add to Cart</button>
        {item.name}
      </p> // replace with BakeryItem component
      ))}

      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>{item.name}</li>
          ))}
        </ul>
        {/* TODO: render a list of items in the cart */
        bakeryData.name}
      </div>
    </div>
  );
}

export default App;
