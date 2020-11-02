import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./PizzaList.scss";

const sortByBought = (pizzaA, pizzaB) => {
  return pizzaB.bought - pizzaA.bought;
};

const selectUser = (reduxState) => {
  return reduxState.user;
};

const getPizzas = (reduxState) => {
  return reduxState.pizzas.sort(sortByBought);
};

const showFavorite = (user, pizza) =>
  user.favorites.includes(pizza.id) ? "♥" : "♡";

const getNumberOfPizzas = (reduxState) => {
  return reduxState.pizzas.length;
};

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizzas = useSelector(getPizzas);
  const numberOfPizzas = useSelector(getNumberOfPizzas);
  const dispatch = useDispatch();

  function addToFavorites(pizzaId) {
    const addToFavs = { type: "ADD_TO_FAVORITES", payload: pizzaId };
    dispatch(addToFavs);
  }

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>. Your favorite pizzas:{" "}
        {numberOfPizzas}
      </p>
      <ul className="Pizzas">
        {pizzas.map((pizza) => {
          return (
            <li
              key={pizza.id}
              className="Pizza"
              style={{ backgroundImage: `url(${pizza.image})` }}
            >
              {" "}
              <button onClick={() => addToFavorites(pizza.id)}>
                {" "}
                {showFavorite(user, pizza)}
              </button>
              <div className="Overlay">
                {pizza.name} ({pizza.description}) <br />
                <em>Bought already {pizza.bought} times</em>{" "}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
