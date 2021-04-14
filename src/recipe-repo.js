class RecipeRepository {
  constructor(data) {
    this.recipes = data;
  }

  filterByTag(tags) {
    return this.recipes.filter(recipe => tags.every(tag => recipe.tags.includes(tag)))
  }

  filterByName(recipeName) {
    return this.recipes.filter(recipe => recipe.name.includes(recipeName))
  }

  filterByIngredient(ingredientName) {
    return this.recipes.filter(recipe => recipe.ingredients.some(ingredient => ingredient.name.includes(ingredientName)))
  }
}

export default RecipeRepository;

