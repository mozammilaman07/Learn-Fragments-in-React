import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <>
      <li className={`${styles["foodName"]} list-group-item`}>
        {foodItems}
        <button
          className={`${styles.button} btn btn-info`}
          onClick={() => console.log("Buy button clicked")}
        >
          Buy
        </button>
      </li>
    </>
  );
};
export default Item;
