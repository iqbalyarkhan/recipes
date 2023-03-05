const Summary = ({
  title = "[RECIPE]",
  numberIngredients = 0,
  numberInstructions = 0,
}: {
  title: string;
  numberIngredients: number;
  numberInstructions: number;
}) => {
  return (
    <div>
      <header>
        <h1>{title}</h1>
      </header>
      <h4>
        {numberIngredients} Ingredients & {numberInstructions} Instructions
      </h4>
    </div>
  );
};

export default Summary;
