import Modal from '../UI/Modal';
import styles from './Cart.module.css';

const Cart = (props) => {
  const cartItems = (
    <ul className={styles['cart-items']}>
      {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal onUnset={props.onUnset}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>53.99</span>
      </div>
      <div className={styles.actions}>
        <button className={styles['button--alt']} onClick={props.onUnset}>
          Close
        </button>
        <button className={styles.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
