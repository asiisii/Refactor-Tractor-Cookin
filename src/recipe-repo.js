class RecipeRepository {
  constructor(data) {
    this.recipes = data;
  }
  
  getRecipe(searchValue) {
    return this.recipes.filter(recipe => {
      if (recipe.name.toLowerCase().includes(searchValue) 
      || recipe.ingredients.find(ingredient => ingredient.name.toLowerCase().includes(searchValue)) 
      || recipe.tags.every(tag => recipe.tags.includes(searchValue))) {
        return recipe
      }
    })
  }
}

export default RecipeRepository;

