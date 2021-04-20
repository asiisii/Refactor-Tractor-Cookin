import ingredientsData from "./data/ingredients";

class RecipeRepository {
  constructor(data) {
    this.recipes = data;
  }
  
  getRecipe(searchValue) {
    let storeRecipe = [];
    searchValue.split(' ').forEach(value => 
      this.recipes.filter(recipe => {
        if (recipe.name.toLowerCase().includes(value) 
        // || recipe.ingredients.find(ingredient => 
          // ingredient.name.toLowerCase().includes(value)) 
        || recipe.tags.some(tag => tag.includes(value))) {
          if (!storeRecipe.includes(recipe)) {
            storeRecipe.push(recipe)
          }
        }
    }))
    return storeRecipe; 
  }
  
}

export default RecipeRepository;

