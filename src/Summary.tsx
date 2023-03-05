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

Summary.propTypes = {
  title: titleValidator,
  numberIngredients: numberValidation,
  numberInstructions: numberValidation,
};

function titleValidator(title: string) {
  return title.length >= 4
    ? null
    : new Error("Title must be at least 4 chars long");
}

function numberValidation(ingOrInst: number) {
  return ingOrInst > 0 ? null : new Error("Number must be > 0");
}

export default Summary;
