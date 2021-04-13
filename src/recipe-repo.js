class RecipeRepository {
  constructor(data) {
    // console.log(data);
    this.recipes = data;
  }

  filterByTag(tags) {
    return this.recipes.filter(recipe => tags.every(tag => recipe.tags.includes(tag)))
  }

  // filterByName() {

  // }

  // filterByIngredient() {

  // }
}

if (typeof module !== 'undefined') {
  module.exports = RecipeRepository;
}