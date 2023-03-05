import { Ingredient } from "./Ingredients";

export interface Recipes {
  data?: Recipe[] | null;
}
export interface Recipe {
  name: string;
  ingredients?: Ingredient[] | null;
  description: string;
}

export function Menu(data: any[], title: string) {
  return (
    <div>
      <h2>Dummy Ingredients component</h2>
    </div>
  );
}
