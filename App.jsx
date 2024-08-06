import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItem from "./FoodItem";
import ErrorMessage from "./ErrorMessage";
import Container from "./container";

function App() {
  let foodItems = [
    "Green Vegetable",
    "Chicken",
    "Dal",
    "Milk",
    "Egg",
    "Fruits",
    "Biryani",
  ];

  if (foodItems == 0) {
    return <h1>Bucket is empty</h1>;
  }
  return (
    <Container>
      <h1 className="heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems} />
    </Container>
  );
}

export default App;
