const initialState = {
  user: {
    name: "Alex",
    favorites: [161235, 357311],
  },
  pizzas: [
    {
      id: 161235,
      name: "Pizza Margherita",
      description:
        "The typical Neapolitan pizza, made with San Marzano tomatoes, mozzarella cheese, fresh basil, salt and extra-virgin olive oil.",
      bought: 5,
      image:
        "https://media.istockphoto.com/photos/pizza-margherita-picture-id686957124?k=6&m=686957124&s=170667a&w=0&h=_9qdXvVK9Ajvbnf4Bb1zMolGfYWrgRMY1zPoWVG66kE=",
    },
    {
      id: 67283,
      name: "Pizza Napoletana",
      description:
        "Neapolitan pizza also known as Naples-style pizza, is a style of pizza made with tomatoes and mozzarella cheese.",
      bought: 2,
      image:
        "https://www.ilfiordicappero.com/wp-content/uploads/2020/04/pizza-napoletana-sorbillo-5.jpg",
    },
    {
      id: 357311,
      name: "Pizza Bianca",
      description:
        "White pizza, which omits tomato sauce from the equation, often substituting it with pesto or sour cream.",
      bought: 10,
      image: "https://live.staticflickr.com/974/40841199595_f9da50709b_b.jpg",
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "ADD_PIZZA": {
      return {
        ...state,
        pizzas: [
          ...state.pizzas,
          {
            id: action.payload.id,
            name: action.payload.name,
            description: action.payload.description,
            bought: 0,
          },
        ],
      };
    }
    case "ADD_TO_FAVORITES": {
      return {
        ...state,
        user: {
          ...state.user,
          favorites: state.user.favorites.includes(action.payload)
            ? state.user.favorites.filter((id) => id !== action.payload)
            : [...state.user.favorites, action.payload],
        },
      };
    }
    default: {
      return state;
    }
  }
}
