import ReactDOM from "react-dom/client";

const data = [
  {
    name: "Baked Salmon",
    ingredients: [
      { name: "Salmon", amount: 1, measurement: "l lb" },
      { name: "Pine Nuts", amount: 1, measurement: "cup" },
      { name: "Butter Lettuce", amount: 2, measurement: "cups" },
      { name: "Yellow Squash", amount: 1, measurement: "med" },
      { name: "Olive Oil", amount: 0.5, measurement: "cup" },
      { name: "Garlic", amount: 3, measurement: "cloves" },
    ],
    steps:
      "Preheat the oven to 350 degrees. Spread the olive oil around a glass baking dish. Add the salmon, garlic, and pine nuts to the dish. Bake for 15 minutes. Add the yellow squash and put back in the oven for 30 mins. Remove from oven and let cool for 15 minutes. Add the lettuce and serve.",
  },
  {
    name: "Fish Tacos",
    ingredients: [
      { name: "Whitefish", amount: 1, measurement: "l lb" },
      { name: "Cheese", amount: 1, measurement: "cup" },
      { name: "Iceberg Lettuce", amount: 2, measurement: "cups" },
      { name: "Tomatoes", amount: 2, measurement: "large" },
      { name: "Tortillas", amount: 3, measurement: "med" },
    ],
    steps:
      "Cook the fish on the grill until hot. Place the fish on the 3 tortillas. Top them with lettuce, tomatoes, and cheese.",
  },
];

const Menu = ({ recipes, title }: any) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      {recipes.map((recipe: any, i: any) => (
        <Recipe key={i} {...recipe} />
      ))}
    </div>
  );
};

const Instructions = ({ steps }: any) => {
  return (
    <div>
      <h3>Steps: </h3>
      <p>{steps}</p>
    </div>
  );
};

const Ingredients = ({ ingredients }: any) => {
  return (
    <div>
      <h4>Items you will need: </h4>
      {ingredients.map((ingredient: any, i: any) => (
        <li key={i}>{ingredient.name}</li>
      ))}
    </div>
  );
};

const Recipe = ({ name, ingredients, steps }: any) => {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        <Ingredients ingredients={ingredients} />
      </ul>
      <div>
        <Instructions steps={steps} />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Menu recipes={data} title="Today's Menu: " />);
