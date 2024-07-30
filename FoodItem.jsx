import Item from "./Item";
const FoodItem = () => {
  let foodItems = [
    "Green Vegetable",
    "Chicken",
    "Dal",
    "Milk",
    "Egg",
    "Fruits",
  ];
  return (
    <ul className="list-group">
      {foodItems.map((item) => (
        <Item key={item} foodItems={item} />
      ))}
    </ul>
  );
};
export default FoodItem;
