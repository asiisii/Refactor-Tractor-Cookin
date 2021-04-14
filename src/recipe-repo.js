class RecipeRepository {
  constructor(data) {
    this.recipes = data;
  }

  filterByTag(tags) {
    return this.recipes.filter(recipe => tags.every(tag => recipe.tags.includes(tag)))
  }

  filterByName(recipeName) {
    return this.recipes.filter(recipe => recipe.name === recipeName)
  }

  // filterByIngredient() {

  // }
}

if (typeof module !== 'undefined') {
  module.exports = RecipeRepository;
}