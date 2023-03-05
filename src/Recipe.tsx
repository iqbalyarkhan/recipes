import Ingredients, { Ingredient } from "./Ingredients";
import Instructions from "./Instructions";

const Recipe = ({
  ingredients,
  steps,
}: {
  ingredients: Ingredient[];
  steps: string[];
}) => {
  return (
    <div>
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
