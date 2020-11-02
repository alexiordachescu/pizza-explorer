import React from "react";
import { useSelector } from "react-redux";

const sortByBought = (pizzaA, pizzaB) => {
  return pizzaB.bought - pizzaA.bought;
};

const selectUser = (reduxState) => {
  return reduxState.user;
};

const getPizzas = (reduxState) => {
  return reduxState.pizzas.sort(sortByBought);
};

const getNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(getPizzas);
  const numberOfPizzas = useSelector(getNumberOfPizzas);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>. Your favorite pizzas:{" "}
        {numberOfPizzas}
      </p>
      <ul>
        {pizzas.map((pizza) => {
          return (
            <li>
              {" "}
              <p>{pizza.name}</p>
              {pizza.description}
              <p>Bought already {pizza.bought} times </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
