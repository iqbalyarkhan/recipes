const Ingredients = ({ ingredients }: { ingredients: any[] }) => {
  return (
    <div>
      <h4>Items you will need: </h4>
      {ingredients.map((ingredient: any, i: any) => (
        <li key={i}>{ingredient.name}</li>
      ))}
    </div>
  );
};

export default Ingredients;
