import Recipe from "./Recipe";
import Summary from "./Summary";

const Menu = ({ recipes, title }: { recipes: any[]; title: string }) => {
  return (
    <div>
      {recipes.map((recipe: any, i: any, j: any) => (
        <>
          <Summary
            key={j}
            title={recipe.name}
            numberIngredients={recipe.ingredients.length}
            numberInstructions={recipe.steps.length}
          />
          <Recipe key={i} {...recipe} />
        </>
      ))}
    </div>
  );
};

export default Menu;
