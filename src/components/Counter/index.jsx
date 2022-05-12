import styles from "./style.module.scss";

const Counter = ({count, increaseCount, decreaseCount, onChangeCount,id}) => {
  return (
    <div className={styles.counter}>
      <input type="text" value={count} onChange={(e)=>{
				const value = Number(e.target.value)
				onChangeCount(id, value)
				}}/>
      <div className={styles.arrows}>
        <div className={styles.arrowUp} onClick={()=>{
					increaseCount(id)
					}}>
          <img src="./img/arrow-up.svg" alt="" />
        </div>
        <div className={styles.arrowDown} onClick={()=>{
					decreaseCount(id)
					}}>
          <img src="./img/arrow-down.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Counter;
