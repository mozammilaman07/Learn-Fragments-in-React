const ErrorMessage = () => {
  let foodItems = [
    "Green Vegetable",
    "Chicken",
    "Dal",
    "Milk",
    "Egg",
    "Fruits",
  ];
  return <>{foodItems.length == 0 && <h2>Bucket is empty</h2>}</>;
};
export default ErrorMessage;
