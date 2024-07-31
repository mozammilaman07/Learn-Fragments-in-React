import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";

function App() {
  let foodItems = [
    "Green Vegetable",
    "Chicken",
    "Dal",
    "Milk",
    "Egg",
    "Fruits",
  ];

  if (foodItems == 0) {
    return <h1>Bucket is empty</h1>;
  }
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems} />
    </React.Fragment>
  );
}

export default App;
