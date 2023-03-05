import Ingredients from "./Ingredients";
import Instructions from "./Instructions";

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

export default Recipe;
