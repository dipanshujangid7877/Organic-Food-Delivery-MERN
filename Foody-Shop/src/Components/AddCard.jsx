import { useState } from "react";
import "../Styles/AddCard.css";

const AddCard = ({
  cartItems = [],
  onUpdateQuantity,
  onRemoveItem,
  onClearCart,
}) => {
  const [checkoutMessage, setCheckoutMessage] = useState("");

  const itemCount = cartItems.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cartItems.reduce(
    (total, item) => total + Number(item.price || 0) * item.quantity,
    0
  );
  const delivery = cartItems.length ? 40 : 0;

  const handleCheckout = () => {
    if (!cartItems.length) return;
    setCheckoutMessage(
      "Order placed successfully. Thank you for shopping with CravHealthy!"
    );
    onClearCart();
  };

  return (
    <main className="cart-page">
      <section className="cart-header">
        <h1>Your Cart</h1>
        <p>Review your healthy picks before checkout.</p>
      </section>

      {checkoutMessage && <p className="cart-success">{checkoutMessage}</p>}

      {cartItems.length === 0 ? (
        <section className="empty-cart">
          <h2>Your cart is empty</h2>
          <p>Add products from the Products page to start your order.</p>
        </section>
      ) : (
        <div className="cart-layout">
          <section className="cart-items">
            {cartItems.map((item) => (
              <article className="cart-item" key={item._id}>
                <img src={item.image_url} alt={item.name} />
                <div className="item-details">
                  <h2>{item.name}</h2>
                  <p>{item.description}</p>
                  <strong>Rs. {item.price}</strong>
                </div>
                <div className="quantity-controls" aria-label="Quantity controls">
                  <button onClick={() => onUpdateQuantity(item._id, item.quantity - 1)}>
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button onClick={() => onUpdateQuantity(item._id, item.quantity + 1)}>
                    +
                  </button>
                </div>
                <button className="remove-button" onClick={() => onRemoveItem(item._id)}>
                  Remove
                </button>
              </article>
            ))}
          </section>

          <aside className="cart-summary">
            <h2>Order Summary</h2>
            <p>Items: {itemCount}</p>
            <p>Subtotal: Rs. {subtotal}</p>
            <p>Delivery: Rs. {delivery}</p>
            <h3>Total: Rs. {subtotal + delivery}</h3>
            <button onClick={handleCheckout}>Checkout</button>
          </aside>
        </div>
      )}
    </main>
  );
};

export default AddCard;
