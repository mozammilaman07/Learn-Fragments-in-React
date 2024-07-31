import styles from "./Item.module.css";
const Item = ({ foodItems }) => {
  return (
    <>
      <li className={`${styles["foodName"]} list-group-item`}>{foodItems}</li>
    </>
  );
};
export default Item;
