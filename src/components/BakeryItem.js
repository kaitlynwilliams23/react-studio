// TODO: create a component that displays a single bakery item


export default function BakeryItem({item, addToCart}) {
    const handleAddToCart = () => {
        addToCart(item);
    };
    return (
        <div className="bakery-item">
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
      </div>
    )
}
  