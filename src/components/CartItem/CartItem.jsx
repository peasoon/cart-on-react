import Counter from "../Counter";
import styles from "./CartItem.module.scss";

const CartItem = () => {
  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src="./img/notebook.jpg" alt="" />
      </div>
      <div className={styles.desc}>Ноутбук, чтобы был</div>
      <div className={styles.count}>
				<Counter />
			</div>
      <div className={styles.price}>30 000 руб</div>
      <button className={styles.delete}>
				<img src="./img/close.svg" alt="" />
			</button>
    </div>
  );
};

export default CartItem;
