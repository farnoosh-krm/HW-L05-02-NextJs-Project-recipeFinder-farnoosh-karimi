export type Recipe = {
    id: number;
    title: string;
    image: string;
    readyInMinutes:number;
    servings: number;
    sourceUrl: string;
    vegetarian:boolean;
    vegan:boolean;
    glutenFree:boolean;
    dairyFree:boolean;
    veryHealthy:boolean;
    cookingMinutes: number;
    pricePerServing: number;
    summary: string;
    dishTypes: string[];
    diets: string[];
    titleMatch:string;
}

export type IngredientDetail={
    name:string;
    image:string;
    amount:{
        metric: {
            value: number;
            unit: string;
        };
        us: {
            value: number;
            unit: string;
        };
    };
    }

export type Ingredient={
    ingredients: IngredientDetail[];
}


export type AnalyzedInstructions = {
    number: number;
    step:"string";
}
export type Analyzed={
    steps: AnalyzedInstructions[];
}

export type ExplorePageProps = {
  recipeNumber: number;
  dietType: string;
  searchTerm: string;
  titleMatch: string;
  excludeIngredients: string;
  recipeType: string;
};
