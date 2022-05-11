import styles from "./style.module.scss";

const Counter = () => {
  return (
    <div className={styles.counter}>
      <input type="text" value="5" />
      <div className={styles.arrows}>
        <div className={styles.arrowUp}>
          <img src="./img/arrow-up.svg" alt="" />
        </div>
        <div className={styles.arrowDown}>
          <img src="./img/arrow-down.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
