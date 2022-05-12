import Counter from "../Counter";
import styles from "./CartItem.module.scss";

const CartItem = ({data, increaseCount, decreaseCount, onChangeCount, deleteItem}) => {
	const {id, img, description, count, unitPrice} = data;
  return (
    <div className={styles.cartItem}>
      <div className={styles.image}>
        <img src={img} alt="" />
      </div>
      <div className={styles.desc}>{description}</div>
      <div className={styles.count}>
				<Counter count={count} 
				onChangeCount={onChangeCount}
				increaseCount={increaseCount} 
				decreaseCount={decreaseCount} 

				id={id}/>
			</div>
      <div className={styles.price}>{unitPrice*count} руб</div>
      <button className={styles.delete} onClick={
				() => {
					deleteItem(id)
				}
			}>
				<img src="./img/close.svg" alt="" />
			</button>
    </div>
  );
};

export default CartItem;
