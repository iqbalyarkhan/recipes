import Recipe from "./Recipe";

const Menu = ({ recipes, title }: { recipes: any[]; title: string }) => {
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

export default Menu;
