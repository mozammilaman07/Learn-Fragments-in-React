import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  let foodItems = [
    "Green Vegetable",
    "Chicken",
    "Dal",
    "Milk",
    "Egg",
    "Fruits",
  ];
  return (
    <React.Fragment>
      <h1>Healthy Food</h1>
      <ul class="list-group">
        {foodItems.map((item) => (
          <li class="list-group-item">{item}</li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
