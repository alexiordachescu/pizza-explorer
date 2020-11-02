import React, { useState } from "react";
import { useDispatch } from "react-redux";

export default function AddPizzaForm() {
  const [name, set_name] = useState("");
  const [description, set_description] = useState("");
  const dispatch = useDispatch();

  const submit = (event) => {
    event.preventDefault();
    console.log("new pizza:", name, description);

    const addPizza = {
      type: "ADD_PIZZA",
      payload: {
        id: Math.random(),
        name: name,
        description: description,
        bought: 0,
      },
    };
    dispatch(addPizza);
    set_description("");
    set_name("");
  };

  return (
    <form onSubmit={submit}>
      <h2>Add a new pizza</h2>
      <p>
        <label>
          Name:{" "}
          <input
            type="text"
            value={name}
            onChange={(e) => set_name(e.target.value)}
          />
        </label>
      </p>
      <p>
        <label>
          Description:{" "}
          <input
            type="text"
            value={description}
            onChange={(e) => set_description(e.target.value)}
          />
        </label>
      </p>
      <p>
        <button type="submit">Add this pizza!</button>
      </p>
    </form>
  );
}
