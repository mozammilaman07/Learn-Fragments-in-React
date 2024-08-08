import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <>
      <li className={`${styles["foodName"]} list-group-item`}>
        {foodItems}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={() => console.log(`${foodItems} being bought`)}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
