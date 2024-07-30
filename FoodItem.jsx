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
        <li key={item} className="list-group-item">
          {item}
        </li>
      ))}
    </ul>
  );
};
export default FoodItem;
